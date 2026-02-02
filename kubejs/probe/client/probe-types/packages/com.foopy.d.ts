declare module "packages/com/foopy/forgeskyboxes/mixin/skybox/$WorldRendererAccess" {
import {$VertexBuffer, $VertexBuffer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"

export interface $WorldRendererAccess {

 "getLightSkyBuffer"(): $VertexBuffer
 "getStarsBuffer"(): $VertexBuffer
 "getDarkSkyBuffer"(): $VertexBuffer
}

export namespace $WorldRendererAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccess$Type = ($WorldRendererAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererAccess_ = $WorldRendererAccess$Type;
}}
