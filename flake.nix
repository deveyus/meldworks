{
  description = "Meldworks Modpack Development Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js and package management
            nodejs_latest
            
            # TypeScript toolchain
            nodePackages.typescript
            nodePackages.typescript-language-server
            
            # Build tools
            jq  # JSON manipulation for build scripts
            
            # Packwiz for mod management
            packwiz
          ];

          shellHook = ''
            echo "Meldworks Development Environment"
            echo "Node.js: $(node --version)"
            echo "TypeScript: $(tsc --version)"
            echo ""
            echo "Available commands:"
            echo "  npm init          - Initialize package.json"
            echo "  tsc --init        - Initialize TypeScript config"
            echo "  packwiz update    - Update mods"
            echo ""
          '';
        };
      }
    );
}
