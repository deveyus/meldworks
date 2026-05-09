# Server Hardware & Environment Report

**Host:** nestor@192.168.88.253  
**Generated:** 2026-03-01  
**Uptime:** 6 days, 2 hours, 18 minutes

---

## Operating System

| Property | Value |
|----------|-------|
| OS | NixOS 26.05 (Yarara) |
| Hostname | home-server |
| Architecture | x86_64 |
| Kernel | Linux |

---

## Hardware

### CPU
| Property | Value |
|----------|-------|
| Model | AMD Ryzen 5 3500X 6-Core Processor |
| Cores | 6 (6 threads) |
| Base Clock | 2200 MHz |
| Max Clock | 4120 MHz |
| L1 Cache | 192 KiB (6 instances) |
| L2 Cache | 3 MiB (6 instances) |
| L3 Cache | 32 MiB (2 instances) |

### Memory
| Property | Value |
|----------|-------|
| Total | 15 GB |
| Used | 4.8 GB |
| Available | ~10 GB |
| Swap | None |

### Storage
| Device | Size | Used | Mount |
|--------|------|------|-------|
| /dev/nvme0n1p1 | 1 GB | 50 MB (5%) | /boot |
| /dev/nvme0n1p2 | 953 GB | 67 GB (8%) | / |

### GPU
| Property | Value |
|----------|-------|
| Model | AMD Radeon RX Vega 56 |
| Vendor | AMD (0x1002) |
| Device ID | 0x687F |
| Subsystem | ASRock (0x1849) |
| Driver | amdgpu |
| VRAM | 8 GB |
| VRAM Used | ~4.2 GB |
| Utilization | 0% (idle) |
| Outputs | 3x DisplayPort, 1x HDMI |

---

## Network

| Interface | IP Address | Status |
|-----------|------------|--------|
| eno1 (primary) | 192.168.88.253/24 | UP |
| podman0 | 10.88.0.1/16 | UP |
| lo | 127.0.0.1 | UP |

---

## Running Services

### Container Pods
- ai-gateway-pod
- infrastructure-db-pod
- observability-pod
- open-webui-pod
- openclaw-pod
- security-pod

### Application Containers
- ai-gateway-app
- infrastructure-db-app
- observability-app
- open-webui-app
- openclaw-app
- security-app

### Sidecar Services
- open-webui-caddy
- open-webui-vector
- openclaw-caddy
- openclaw-vector
- observability-grafana
- observability-vlogs

### Standalone Podman Services
- podman-foundry
- podman-homepage
- podman-kavita
- podman-llama-server

### System Services
- dbus
- dhcpcd
- getty@tty1
- nix-daemon
- nscd
- sshd

---

## Summary

This home server runs NixOS 26.05 with an AMD Ryzen 5 3500X CPU, 15 GB RAM, and a 1 TB NVMe SSD. It includes an AMD Radeon RX Vega 56 GPU with 8 GB VRAM for hardware acceleration. The server hosts multiple containerized services including AI gateways (Open WebUI, OpenClaw), databases, and observability tools (Grafana). The system has been running for 6 days with minimal load (0.05) and the GPU is currently idle.
