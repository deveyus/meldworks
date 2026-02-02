declare module "packages/igentuman/api/nc/multiblock/$MultiblockController" {
import {$MultiblockControllerBE, $MultiblockControllerBE$Type} from "packages/igentuman/nc/block/entity/$MultiblockControllerBE"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockController {

 "setErroredBlock"(arg0: $BlockPos$Type): void
 "setControllerBe"(arg0: $MultiblockControllerBE$Type): void
 "clearStats"(): void
 "controllerBE"(): $MultiblockControllerBE
}

export namespace $MultiblockController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockController$Type = ($MultiblockController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockController_ = $MultiblockController$Type;
}}
declare module "packages/igentuman/api/nc/$Processor" {
import {$UpgradesHandler, $UpgradesHandler$Type} from "packages/igentuman/nc/handler/$UpgradesHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CatalystHandler, $CatalystHandler$Type} from "packages/igentuman/nc/handler/$CatalystHandler"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemCapabilityHandler, $ItemCapabilityHandler$Type} from "packages/igentuman/nc/handler/sided/capability/$ItemCapabilityHandler"
import {$NcRecipe, $NcRecipe$Type} from "packages/igentuman/nc/recipes/type/$NcRecipe"

export interface $Processor {

 "hasRedstoneSignal"(): boolean
 "processRecipe"(): void
 "hasRecipe"(): boolean
 "handleRecipeOutput"(): void
 "getEnergy"(): $LazyOptional<($IEnergyStorage)>
 "updateRecipe"(): void
 "createUpgradesHandler"(): $UpgradesHandler
 "createCatalystHandler"(): $CatalystHandler
 "getBaseProcessTime"(): integer
 "getBasePower"(): integer
 "getEnergyCapacity"(): integer
 "getAllowedCatalysts"(): $List<($Item)>
 "getCachedRecipe"(): $NcRecipe
 "getItemInventory"(): $ItemCapabilityHandler
 "getProgress"(): double
 "getName"(): string
}

export namespace $Processor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Processor$Type = ($Processor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Processor_ = $Processor$Type;
}}
declare module "packages/igentuman/api/nc/multiblock/$MultiblockAttachable" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractMultiblock, $AbstractMultiblock$Type} from "packages/igentuman/nc/multiblock/$AbstractMultiblock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockAttachable<M extends $AbstractMultiblock, BE extends $BlockEntity> {

 "canInvalidateCache"(): boolean
 "onBlockDestroyed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
 "getMultiblock"(): M
 "setMultiblock"(arg0: M): void
 "controller"(): BE
 "onNeighborChange"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
}

export namespace $MultiblockAttachable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockAttachable$Type<M, BE> = ($MultiblockAttachable<(M), (BE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockAttachable_<M, BE> = $MultiblockAttachable$Type<(M), (BE)>;
}}
declare module "packages/igentuman/api/nc/multiblock/$Multiblock" {
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$MultiblockController, $MultiblockController$Type} from "packages/igentuman/api/nc/multiblock/$MultiblockController"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $Multiblock {

 "validOuterBlocks"(): $HashSet<($Block)>
 "validInnerBlocks"(): $HashSet<($Block)>
 "minHeight"(): integer
 "minDepth"(): integer
 "isInnerValid"(): boolean
 "isOuterValid"(): boolean
 "validateOuter"(): void
 "clearStats"(): void
 "isFormed"(): boolean
 "maxHeight"(): integer
 "controller"(): $MultiblockController
 "validate"(): void
 "depth"(): integer
 "maxDepth"(): integer
 "isLoaded"(): boolean
 "width"(): integer
 "minWidth"(): integer
 "maxWidth"(): integer
 "dispose"(): void
 "height"(): integer
 "validateInner"(): void
}

export namespace $Multiblock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiblock$Type = ($Multiblock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiblock_ = $Multiblock$Type;
}}
declare module "packages/igentuman/api/nc/$SideModeToggleable$SideMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SideModeToggleable$SideMode extends $Enum<($SideModeToggleable$SideMode)> {
static readonly "DEFAULT": $SideModeToggleable$SideMode
static readonly "IN": $SideModeToggleable$SideMode
static readonly "OUT": $SideModeToggleable$SideMode
static readonly "DISABLED": $SideModeToggleable$SideMode


public static "values"(): ($SideModeToggleable$SideMode)[]
public static "valueOf"(arg0: string): $SideModeToggleable$SideMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideModeToggleable$SideMode$Type = (("default") | ("in") | ("disabled") | ("out")) | ($SideModeToggleable$SideMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SideModeToggleable$SideMode_ = $SideModeToggleable$SideMode$Type;
}}
