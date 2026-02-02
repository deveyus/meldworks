declare module "packages/com/endertech/minecraft/mods/adpother/entities/$PurifiedAir" {
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$FilterFrame, $FilterFrame$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ForgeEntity, $ForgeEntity$Type} from "packages/com/endertech/minecraft/forge/entities/$ForgeEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FilterFrame$AirPurifier, $FilterFrame$AirPurifier$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$AirPurifier"

export class $PurifiedAir extends $ForgeEntity {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Pollutant$Type<(any)>, arg3: $BlockPos$Type)

public "getPollutant"(): $Optional<($Pollutant<(any)>)>
public "getFilter"(): $Optional<($FilterFrame)>
public "tick"(): void
public "isAttackable"(): boolean
public static "getAllAt"(arg0: $Level$Type, arg1: $BlockPos$Type): $List<($PurifiedAir)>
public "getPurifier"(): $Optional<($FilterFrame$AirPurifier)>
public "getConcentrationAt"(arg0: $Vec3$Type): $Percentage
public "startFading"(): void
get "pollutant"(): $Optional<($Pollutant<(any)>)>
get "filter"(): $Optional<($FilterFrame)>
get "attackable"(): boolean
get "purifier"(): $Optional<($FilterFrame$AirPurifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PurifiedAir$Type = ($PurifiedAir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PurifiedAir_ = $PurifiedAir$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$EmittersInit" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IEmitter, $IEmitter$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RelatedUnitsInit, $RelatedUnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnitsInit"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EmittersInit<T extends $IEmitter, E extends ($Enum<(any)>) & ($IForgeEnum)> extends $RelatedUnitsInit<(T), (E)> {

constructor(arg0: $AbstractForgeMod$Type, arg1: $Class$Type<(E)>)

public "get"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $Optional<(T)>
public "get"(arg0: $Entity$Type): $Optional<(T)>
public "onPostInit"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmittersInit$Type<T, E> = ($EmittersInit<(T), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmittersInit_<T, E> = $EmittersInit$Type<(T), (E)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$ServerCommand$OpLevel, $ServerCommand$OpLevel$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$OpLevel"
import {$ServerCommand$Task, $ServerCommand$Task$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Task"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CommandDispatcher, $CommandDispatcher$Type} from "packages/com/mojang/brigadier/$CommandDispatcher"

export class $ServerCommand {

constructor(arg0: string, arg1: $CommandDispatcher$Type<($CommandSourceStack$Type)>)

public "register"(): void
public static "create"(arg0: $AbstractForgeMod$Type, arg1: $CommandDispatcher$Type<($CommandSourceStack$Type)>): $ServerCommand
public "requires"(arg0: $ServerCommand$OpLevel$Type): $ServerCommand
public "task"(arg0: string): $ServerCommand$Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Type = ($ServerCommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand_ = $ServerCommand$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$SynchedBools" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HookShot$SynchedBools extends $Enum<($HookShot$SynchedBools)> implements $IForgeEnum {
static readonly "LAUNCHING": $HookShot$SynchedBools
static readonly "PULLING": $HookShot$SynchedBools
static readonly "LOOSENING": $HookShot$SynchedBools
static readonly "UNHOOKING": $HookShot$SynchedBools
static readonly "JUMPING": $HookShot$SynchedBools
static readonly "DOUBLE_JUMPING": $HookShot$SynchedBools


public static "values"(): ($HookShot$SynchedBools)[]
public static "valueOf"(arg0: string): $HookShot$SynchedBools
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookShot$SynchedBools$Type = (("jumping") | ("loosening") | ("pulling") | ("double_jumping") | ("launching") | ("unhooking")) | ($HookShot$SynchedBools);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookShot$SynchedBools_ = $HookShot$SynchedBools$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$AirPurifier" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$IPurifier, $IPurifier$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IPurifier"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FilterFrame$AirPurifier implements $IPurifier {
static readonly "MAX_RADIUS": integer
readonly "effectiveRadius": integer
readonly "maximumRadius": integer

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: integer, arg3: integer)

public "getOutputPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public "getPumpPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public "hasProperInput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "hasProperOutput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "spawnParticle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $SimpleParticleType$Type): void
public "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "hasActivePump"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "hasActiveFilter"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$AirPurifier$Type = ($FilterFrame$AirPurifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$AirPurifier_ = $FilterFrame$AirPurifier$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas$Properties" {
import {$Pollutant$Properties, $Pollutant$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Properties"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChunkPollution$Influence, $ChunkPollution$Influence$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$ChunkPollution$Influence"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $AbstractGas$Properties<T extends $AbstractGas$Properties<(T)>> extends $Pollutant$Properties<(T)> {
 "absorbtionChance": integer
 "lowerExplosiveLimit": integer
 "chunkPollutionInfluence": $ChunkPollution$Influence
 "affectedByWind": boolean
readonly "mapColor": $MapColor
 "textColor": $ChatFormatting
 "criticalAmount": integer
 "concentrationAltitude": integer
 "motionVelocity": float
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public "absorbtionChance"(arg0: integer): T
public "ignoreWind"(): T
public "neverAffectChunkPollution"(): T
public "alwaysAffectChunkPollution"(): T
public "lowerExplosiveLimit"(arg0: integer): T
public static "of"(arg0: string, arg1: $MapColor$Type): $AbstractGas$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGas$Properties$Type<T> = ($AbstractGas$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGas$Properties_<T> = $AbstractGas$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/recipes/$FilterChangeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AdPother, $AdPother$Type} from "packages/com/endertech/minecraft/mods/adpother/$AdPother"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$FilterChangeRecipe, $FilterChangeRecipe$Type} from "packages/com/endertech/minecraft/mods/adpother/recipes/$FilterChangeRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FilterChangeRecipe$Serializer implements $RecipeSerializer<($FilterChangeRecipe)> {
readonly "mod": $AdPother

constructor(arg0: $AdPother$Type)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $FilterChangeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $FilterChangeRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $FilterChangeRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FilterChangeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterChangeRecipe$Serializer$Type = ($FilterChangeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterChangeRecipe$Serializer_ = $FilterChangeRecipe$Serializer$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Effects" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Respirators$RespiratorEffect, $Respirators$RespiratorEffect$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$RespiratorEffect"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $Effects extends $RegistryObjectsInit<($MobEffect)> {
readonly "respirator": $RegistryObject<($Respirators$RespiratorEffect)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Effects$Type = ($Effects);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Effects_ = $Effects$Type;
}}
declare module "packages/com/endertech/common/$Ordered" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export interface $Ordered<T> extends $Comparable<(T)> {

 "isLessOrEqualTo"(arg0: T): boolean
 "isGreaterThan"(arg0: T): boolean
 "isGreaterOrEqualTo"(arg0: T): boolean
 "isLessThan"(arg0: T): boolean
 "compareTo"(arg0: T): integer

(arg0: T): boolean
}

export namespace $Ordered {
function min<T>(arg0: T, arg1: T): T
function max<T>(arg0: T, arg1: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ordered$Type<T> = ($Ordered<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ordered_<T> = $Ordered$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$SynchedDoubleProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$AbstractSynchedProperty, $AbstractSynchedProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$AbstractSynchedProperty"

export class $SynchedDoubleProperty extends $AbstractSynchedProperty<(double)> {
readonly "bounds": $FloatBounds
readonly "name": string
readonly "comment": string
readonly "defaultValue": T

constructor(arg0: string, arg1: double, arg2: $FloatBounds$Type, arg3: string)

public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "define"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedDoubleProperty$Type = ($SynchedDoubleProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SynchedDoubleProperty_ = $SynchedDoubleProperty$Type;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$ForgeTileWithInventory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ForgeTile, $ForgeTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ForgeTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$TileInventory, $TileInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$TileInventory"

export class $ForgeTileWithInventory extends $ForgeTile implements $MenuProvider {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getTileInventory"(): $TileInventory
public "openGuiScreenFor"(arg0: $ServerPlayer$Type): void
public "canInteractWith"(arg0: $Player$Type): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getDisplayName"(): $Component
get "tileInventory"(): $TileInventory
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeTileWithInventory$Type = ($ForgeTileWithInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeTileWithInventory_ = $ForgeTileWithInventory$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$IForgeEnum" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $IForgeEnum extends $StringRepresentable {

 "getName"(): string
 "getSerializedName"(): string
}

export namespace $IForgeEnum {
function fromEnum<E>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
function fromEnumWithMapping<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
function keys(arg0: ($StringRepresentable$Type)[]): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEnum$Type = ($IForgeEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEnum_ = $IForgeEnum$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$BuiltIn" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Respirators$BuiltIn extends $Enum<($Respirators$BuiltIn)> implements $IForgeEnum {
static readonly "adpother$iron_respirator": $Respirators$BuiltIn
static readonly "adpother$gold_respirator": $Respirators$BuiltIn
static readonly "adpother$diamond_respirator": $Respirators$BuiltIn
static readonly "create$copper_diving_helmet": $Respirators$BuiltIn
static readonly "create$netherite_diving_helmet": $Respirators$BuiltIn
static readonly "electrodynamics$compositearmorhelmet": $Respirators$BuiltIn
static readonly "electrodynamics$combatarmorhelmet": $Respirators$BuiltIn
static readonly "hbm$m65_mask": $Respirators$BuiltIn
static readonly "mekanism$scuba_mask": $Respirators$BuiltIn
static readonly "mekanism$hazmat_mask": $Respirators$BuiltIn
static readonly "mekanism$mekasuit_helmet": $Respirators$BuiltIn
readonly "durability": integer
readonly "functionalStateTag": string


public static "values"(): ($Respirators$BuiltIn)[]
public static "valueOf"(arg0: string): $Respirators$BuiltIn
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Respirators$BuiltIn$Type = (("mekanism$mekasuit_helmet") | ("create$copper_diving_helmet") | ("mekanism$scuba_mask") | ("mekanism$hazmat_mask") | ("adpother$diamond_respirator") | ("create$netherite_diving_helmet") | ("electrodynamics$combatarmorhelmet") | ("hbm$m65_mask") | ("adpother$gold_respirator") | ("electrodynamics$compositearmorhelmet") | ("adpother$iron_respirator")) | ($Respirators$BuiltIn);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Respirators$BuiltIn_ = $Respirators$BuiltIn$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$ChunkLoc" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INBTSerializable"
import {$INetSerializable, $INetSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INetSerializable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$DimensionId, $DimensionId$Type} from "packages/com/endertech/minecraft/forge/world/$DimensionId"
import {$ChunkBounds, $ChunkBounds$Type} from "packages/com/endertech/minecraft/forge/world/$ChunkBounds"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ChunkLoc implements $INetSerializable<($ChunkLoc)>, $INBTSerializable<($ChunkLoc)> {
static readonly "ZERO": $ChunkLoc

constructor(arg0: $DimensionId$Type, arg1: $ChunkPos$Type)

public "getDimensionId"(): $DimensionId
public "existsIn"(arg0: $Level$Type): boolean
public "getPos"(): $ChunkPos
public "getChunk"(arg0: $Level$Type): $Optional<($LevelChunk)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "contains"(arg0: $Entity$Type): boolean
public static "from"(arg0: $Level$Type, arg1: $ChunkPos$Type): $ChunkLoc
public static "from"(arg0: $LevelChunk$Type): $ChunkLoc
public "getBounds"(arg0: $LevelHeightAccessor$Type): $ChunkBounds
public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "writeTo"(arg0: $FriendlyByteBuf$Type): $FriendlyByteBuf
public "readFrom"(arg0: $FriendlyByteBuf$Type): $ChunkLoc
get "dimensionId"(): $DimensionId
get "pos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoc$Type = ($ChunkLoc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoc_ = $ChunkLoc$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export interface $ISmokeContainer {

 "isChimney"(): boolean
 "isVent"(): boolean
 "isPump"(): boolean
 "isPipe"(): boolean
 "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
 "getType"(): $ISmokeContainer$Type
 "is"(arg0: $ISmokeContainer$Type$Type): boolean
 "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "getColor"(): $ColorARGB
}

export namespace $ISmokeContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISmokeContainer$Type = ($ISmokeContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISmokeContainer_ = $ISmokeContainer$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/properties/$HookInteractableBlocks" {
import {$SynchedListProperty, $SynchedListProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedListProperty"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IReloadableData, $IReloadableData$Type} from "packages/com/endertech/minecraft/forge/data/$IReloadableData"

export class $HookInteractableBlocks extends $SynchedListProperty implements $Predicate<($BlockState)>, $IReloadableData {
readonly "validator": $Predicate<(string)>
readonly "name": string
readonly "comment": string
readonly "defaultValue": T

constructor(arg0: string, arg1: (string)[], arg2: string)

public "resetToConfigValue"(): void
public "test"(arg0: $BlockState$Type): boolean
public "loadData"(): void
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookInteractableBlocks$Type = ($HookInteractableBlocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookInteractableBlocks_ = $HookInteractableBlocks$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$GlassMeter$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $GlassMeter$Properties<T extends $GlassMeter$Properties<(T)>> extends $EquipmentItem$Properties<(T)> {
 "nameColor": $ChatFormatting
 "equipmentSlot": $EquipmentSlot
 "equipSound": $SoundEvent
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public "nameColor"(arg0: $ChatFormatting$Type): T
public static "of"(arg0: string): $GlassMeter$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassMeter$Properties$Type<T> = ($GlassMeter$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassMeter$Properties_<T> = $GlassMeter$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$Explosion" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"

export class $Explosion extends $SourceBase {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Explosion$Type = ($Explosion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Explosion_ = $Explosion$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"

export class $EquipmentItem$Properties<T extends $EquipmentItem$Properties<(T)>> extends $DamageableItem$Properties<(T)> {
 "equipmentSlot": $EquipmentSlot
 "equipSound": $SoundEvent
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public "equipSound"(arg0: $SoundEvent$Type): T
public "equipmentSlot"(arg0: $EquipmentSlot$Type): T
public static "of"(arg0: string): $EquipmentItem$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentItem$Properties$Type<T> = ($EquipmentItem$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentItem$Properties_<T> = $EquipmentItem$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$TickActions$ITickAction" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BiomeId, $BiomeId$Type} from "packages/com/endertech/minecraft/forge/world/$BiomeId"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $TickActions$ITickAction {

 "perform"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean

(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
}

export namespace $TickActions$ITickAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickActions$ITickAction$Type = ($TickActions$ITickAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickActions$ITickAction_ = $TickActions$ITickAction$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Fluids" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$PollutedWater$StillFluid, $PollutedWater$StillFluid$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$StillFluid"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$PollutedWater$FlowingFluid, $PollutedWater$FlowingFluid$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$FlowingFluid"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $Fluids extends $RegistryObjectsInit<($Fluid)> {
readonly "pollutedWaterStill": $RegistryObject<($PollutedWater$StillFluid)>
readonly "pollutedWaterFlowing": $RegistryObject<($PollutedWater$FlowingFluid)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fluids$Type = ($Fluids);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fluids_ = $Fluids$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$ItemTagsProviderFactory" {
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagLookup"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemTagsProvider, $ItemTagsProvider$Type} from "packages/net/minecraft/data/tags/$ItemTagsProvider"

export interface $DataCollector$ItemTagsProviderFactory<T extends $ItemTagsProvider> {

 "create"(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: $CompletableFuture$Type<($TagsProvider$TagLookup$Type<($Block$Type)>)>, arg3: string, arg4: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: $CompletableFuture$Type<($TagsProvider$TagLookup$Type<($Block$Type)>)>, arg3: string, arg4: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$ItemTagsProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$ItemTagsProviderFactory$Type<T> = ($DataCollector$ItemTagsProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$ItemTagsProviderFactory_<T> = $DataCollector$ItemTagsProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ISmokeContainer$Type extends $Enum<($ISmokeContainer$Type)> implements $IForgeEnum {
static readonly "CHIMNEY": $ISmokeContainer$Type
static readonly "VENT": $ISmokeContainer$Type
static readonly "PUMP": $ISmokeContainer$Type
static readonly "PIPE": $ISmokeContainer$Type


public static "values"(): ($ISmokeContainer$Type)[]
public static "valueOf"(arg0: string): $ISmokeContainer$Type
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISmokeContainer$Type$Type = (("chimney") | ("vent") | ("pipe") | ("pump")) | ($ISmokeContainer$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISmokeContainer$Type_ = $ISmokeContainer$Type$Type;
}}
declare module "packages/com/endertech/minecraft/forge/types/$ParticleType" {
import {$ParticleType as $ParticleType$0, $ParticleType$Type as $ParticleType$0$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleType$Builder, $ParticleType$Builder$Type} from "packages/com/endertech/minecraft/forge/types/$ParticleType$Builder"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleType<T extends $ParticleOptions> extends $ParticleType$0<(T)> {

constructor(arg0: boolean, arg1: $ParticleOptions$Deserializer$Type<(T)>)

public "codec"(): $Codec<(T)>
public static "builder"<T extends $ParticleOptions>(arg0: $ParticleOptions$Deserializer$Type<(T)>): $ParticleType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleType$Type<T> = ($ParticleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleType_<T> = $ParticleType$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/world/$AbstractGenerator" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$BiomeModifier, $BiomeModifier$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $AbstractGenerator extends $Feature<($NoneFeatureConfiguration)> implements $BiomeModifier {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $AbstractForgeMod$Type)

public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGenerator$Type = ($AbstractGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGenerator_ = $AbstractGenerator$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$BlockTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ForgeTileWithInventory, $ForgeTileWithInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$ForgeTileWithInventory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITickableUnit, $ITickableUnit$Type} from "packages/com/endertech/minecraft/forge/units/$ITickableUnit"
import {$TileInventory, $TileInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$TileInventory"

export class $FilterFrame$BlockTile extends $ForgeTileWithInventory implements $ITickableUnit {
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getUpdateInterval"(): $GameTime
public "getFilterMaterial"(): $ItemStack
public "getTileInventory"(): $TileInventory
public "getTargetPollutants"(): $List<($Pollutant<(any)>)>
public "getByproduct"(): $ItemStack
public "getRenderMaterial"(): $ItemStack
public "onUpdate"(): void
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "getWorldLevel"(): $Level
public "isActive"(): boolean
public "exists"(): boolean
public "getDisplayName"(): $Component
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "isValidFilterMaterial"(arg0: $ItemStack$Type): boolean
public "tick"(): void
get "updateInterval"(): $GameTime
get "filterMaterial"(): $ItemStack
get "tileInventory"(): $TileInventory
get "targetPollutants"(): $List<($Pollutant<(any)>)>
get "byproduct"(): $ItemStack
get "renderMaterial"(): $ItemStack
get "worldLevel"(): $Level
get "active"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$BlockTile$Type = ($FilterFrame$BlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$BlockTile_ = $FilterFrame$BlockTile$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Percentage$Grade" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Percentage$Grade extends $Enum<($Percentage$Grade)> {
static readonly "LOW": $Percentage$Grade
static readonly "MEDIUM": $Percentage$Grade
static readonly "HIGH": $Percentage$Grade
readonly "threshold": float
readonly "textColor": $ChatFormatting
readonly "mapColor": $MapColor


public static "values"(): ($Percentage$Grade)[]
public static "valueOf"(arg0: string): $Percentage$Grade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Percentage$Grade$Type = (("high") | ("low") | ("medium")) | ($Percentage$Grade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Percentage$Grade_ = $Percentage$Grade$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Pump$Tile, $Pump$Tile$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump$Tile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $Pump extends $Container implements $ITiledBlock<($Pump$Tile)> {
static "invertedRedstoneSignal": $ForgeConfigSpec$ConfigValue<(boolean)>
static "energyStorageEnabled": $ForgeConfigSpec$ConfigValue<(boolean)>
static "energyStorageCapacity": $ForgeConfigSpec$ConfigValue<(integer)>
static "energyStorageConsumption": $ForgeConfigSpec$ConfigValue<(integer)>
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Container$Properties$Type<(any)>)

public "getTileClass"(): $Class<($Pump$Tile)>
public "createTile"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $Pump$Tile
public "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
public "updateLitState"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($Pump$Tile)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "tileClass"(): $Class<($Pump$Tile)>
get "type"(): $ISmokeContainer$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pump$Type = ($Pump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pump_ = $Pump$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$PlayerBurning" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $PlayerBurning extends $LivingSourceBase<($Player)> {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerBurning$Type = ($PlayerBurning);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerBurning_ = $PlayerBurning$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase$Properties" {
import {$Emissions, $Emissions$Type} from "packages/com/endertech/minecraft/mods/adpother/emissions/$Emissions"
import {$RelatedUnit$Properties, $RelatedUnit$Properties$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnit$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $SourceBase$Properties<T extends $SourceBase$Properties<(T)>> extends $RelatedUnit$Properties<(T)> {
 "factor": float
 "emissions": $Emissions
 "comment": string
 "category": string
 "id": $UnitId


public "emissions"(arg0: $Emissions$Type): T
public "carbon"(arg0: float): T
public "sulfur"(arg0: float): T
public "dust"(arg0: float): T
public static "of"(): $SourceBase$Properties<(any)>
public "comment"(arg0: string): T
public "category"(arg0: string): T
public "factor"(arg0: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceBase$Properties$Type<T> = ($SourceBase$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceBase$Properties_<T> = $SourceBase$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/common/$CommonMath$Angle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonMath$Angle {
static readonly "ZERO": $CommonMath$Angle


public static "fromRadians"(arg0: double): $CommonMath$Angle
public static "fromSin"(arg0: double): $CommonMath$Angle
public static "fromTan"(arg0: double): $CommonMath$Angle
public static "fromCos"(arg0: double): $CommonMath$Angle
public "substract"(arg0: $CommonMath$Angle$Type): $CommonMath$Angle
public "getDegrees"(): double
public "getRadians"(): double
public "add"(arg0: $CommonMath$Angle$Type): $CommonMath$Angle
public "sin"(): double
public "cos"(): double
public "tan"(): double
public "negative"(): $CommonMath$Angle
public static "random"(): $CommonMath$Angle
public static "fromDegrees"(arg0: double): $CommonMath$Angle
get "degrees"(): double
get "radians"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonMath$Angle$Type = ($CommonMath$Angle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonMath$Angle_ = $CommonMath$Angle$Type;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractForgeMod$RequiredSide extends $Enum<($AbstractForgeMod$RequiredSide)> {
static readonly "SERVER": $AbstractForgeMod$RequiredSide
static readonly "CLIENT": $AbstractForgeMod$RequiredSide
static readonly "BOTH": $AbstractForgeMod$RequiredSide


public static "values"(): ($AbstractForgeMod$RequiredSide)[]
public static "valueOf"(arg0: string): $AbstractForgeMod$RequiredSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$RequiredSide$Type = (("server") | ("client") | ("both")) | ($AbstractForgeMod$RequiredSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod$RequiredSide_ = $AbstractForgeMod$RequiredSide$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/config/$LivingEntityImpactList" {
import {$LivingEntityImpactList$EntityEffect, $LivingEntityImpactList$EntityEffect$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$LivingEntityImpactList$EntityEffect"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractParsableList, $AbstractParsableList$Type} from "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList"

export class $LivingEntityImpactList extends $AbstractParsableList {

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: string)

public "getActiveEffects"(arg0: $Percentage$Type): $List<($LivingEntityImpactList$EntityEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityImpactList$Type = ($LivingEntityImpactList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityImpactList_ = $LivingEntityImpactList$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HookShot$State extends $Enum<($HookShot$State)> {
static readonly "SHOOTING": $HookShot$State
static readonly "REELING": $HookShot$State
static readonly "HOOKING_BLOCK": $HookShot$State
static readonly "HOOKING_ENTITY": $HookShot$State


public static "values"(): ($HookShot$State)[]
public static "valueOf"(arg0: string): $HookShot$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookShot$State$Type = (("hooking_entity") | ("shooting") | ("hooking_block") | ("reeling")) | ($HookShot$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookShot$State_ = $HookShot$State$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$Torch" {
import {$IEmitter$Type, $IEmitter$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SourceBase$Properties, $SourceBase$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase$Properties"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEmitter, $IEmitter$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Torch extends $SourceBase implements $IEmitter {
static "rate": $ForgeConfigSpec$ConfigValue<(double)>

constructor(arg0: $UnitConfig$Type, arg1: $SourceBase$Properties$Type<(any)>)

public "getActiveTag"(): string
public "getIdentityTag"(): $KeyValuePair
public "getRelatedBlocks"(): $Set<($BlockState)>
public "getType"(): $IEmitter$Type
public "onPostInit"(): void
public "emitAt"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: float): void
public "isIdentified"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
public "isActive"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
public "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "getRelatedId"(): $UnitId
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "activeTag"(): string
get "identityTag"(): $KeyValuePair
get "relatedBlocks"(): $Set<($BlockState)>
get "type"(): $IEmitter$Type
get "relatedId"(): $UnitId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Torch$Type = ($Torch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Torch_ = $Torch$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList$ActionType" {
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockImpactList$AbstractAction, $BlockImpactList$AbstractAction$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList$AbstractAction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $BlockImpactList$ActionType extends $Enum<($BlockImpactList$ActionType)> {
static readonly "BONEMEAL": $BlockImpactList$ActionType
static readonly "KILL": $BlockImpactList$ActionType
static readonly "REPLACE": $BlockImpactList$ActionType
static readonly "POLLUTE": $BlockImpactList$ActionType
readonly "textColor": $ChatFormatting


public static "values"(): ($BlockImpactList$ActionType)[]
public static "valueOf"(arg0: string): $BlockImpactList$ActionType
public "create"(arg0: $Percentage$Type, arg1: $Optional$Type<(any)>): $BlockImpactList$AbstractAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockImpactList$ActionType$Type = (("replace") | ("bonemeal") | ("kill") | ("pollute")) | ($BlockImpactList$ActionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockImpactList$ActionType_ = $BlockImpactList$ActionType$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Particles" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$PollutionParticle$Data, $PollutionParticle$Data$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$PollutionParticle$Data"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $Particles extends $RegistryObjectsInit<($ParticleType<(any)>)> {
readonly "pollution": $RegistryObject<($ParticleType<($PollutionParticle$Data)>)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Particles$Type = ($Particles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Particles_ = $Particles$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties$IPropertyGetter" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ItemModel$Properties$IPropertyGetter extends $ItemPropertyFunction {

/**
 * 
 * @deprecated
 */
 "call"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type, arg3: integer): float
 "get"(arg0: $ItemStack$Type, arg1: $Optional$Type<($ClientLevel$Type)>, arg2: $Optional$Type<($LivingEntity$Type)>): float

(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type, arg3: integer): float
}

export namespace $ItemModel$Properties$IPropertyGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$Properties$IPropertyGetter$Type = ($ItemModel$Properties$IPropertyGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$Properties$IPropertyGetter_ = $ItemModel$Properties$IPropertyGetter$Type;
}}
declare module "packages/com/endertech/common/$IBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export interface $IBounds<T extends number> {

 "enclose"(arg0: T): T
 "unite"(arg0: $IBounds$Type<(T)>): $IBounds<(T)>
 "interpolateUp"(arg0: float): T
 "interpolateDown"(arg0: float): T
 "interpolateTo"(arg0: $IBounds$Type<(T)>): $CommonMath$Interpolation<(T)>
 "interpolationFactor"(arg0: T): float
 "randomFits"(arg0: T): boolean
 "randomBetween"(arg0: $Random$Type): T
 "randomBetween"(): T
 "corners"(arg0: T): boolean
 "length"(): T
 "offset"(arg0: T): $IBounds<(T)>
 "reduce"(arg0: T): $IBounds<(T)>
 "getMin"(): T
 "getMax"(): T
 "fit"(arg0: $IBounds$Type<(T)>): $IBounds<(T)>
 "center"(): T
 "encloses"(arg0: T): boolean
 "extend"(arg0: T): $IBounds<(T)>
 "within"(arg0: $IBounds$Type<(T)>): boolean
}

export namespace $IBounds {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBounds$Type<T> = ($IBounds<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBounds_<T> = $IBounds$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$StillFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$PollutedWater$BaseFluid, $PollutedWater$BaseFluid$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$BaseFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $PollutedWater$StillFluid extends $PollutedWater$BaseFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$StillFluid$Type = ($PollutedWater$StillFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater$StillFluid_ = $PollutedWater$StillFluid$Type;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$SynchedListProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$AbstractSynchedProperty, $AbstractSynchedProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$AbstractSynchedProperty"

export class $SynchedListProperty extends $AbstractSynchedProperty<($List<(any)>)> {
readonly "validator": $Predicate<(string)>
readonly "name": string
readonly "comment": string
readonly "defaultValue": T

constructor(arg0: string, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(string)>, arg3: string)

public static "isValidTagOrId"(arg0: string): boolean
public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "define"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedListProperty$Type = ($SynchedListProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SynchedListProperty_ = $SynchedListProperty$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Vent" {
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Container$Tile, $Container$Tile$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Tile"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $Vent extends $Container implements $ITiledBlock<($Container$Tile)> {
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Container$Properties$Type<(any)>)

public "getTileClass"(): $Class<($Container$Tile)>
public "createTile"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $Container$Tile
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($Container$Tile)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "tileClass"(): $Class<($Container$Tile)>
get "type"(): $ISmokeContainer$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vent$Type = ($Vent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vent_ = $Vent$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$UnitId" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"
import {$BlockStatesSet, $BlockStatesSet$Type} from "packages/com/endertech/minecraft/forge/blocks/$BlockStatesSet"

export class $UnitId {
static readonly "EMPTY": $UnitId
static readonly "FORMAT_FULL": string
static readonly "DESCRIPTION": string
static readonly "DELIMITER": string
static readonly "TAG": string
static readonly "MOD_ID_MINECRAFT": string
static readonly "REG_NAME_WORDS_DELIMITER": string
static readonly "UNLOCALIZED_NAME_DELIMITER": string
static readonly "INCODE_DELIMITER": string
static readonly "PATTERN": $Pattern
static readonly "PROPS_OPENING_BRACKET": string
static readonly "PROPS_CLOSING_BRACKET": string
static readonly "PROPS_DELIMITER": string
static readonly "META_DEFAULT": integer
static readonly "META_ALL_INT": integer
static readonly "META_EMPTY": string
static readonly "META_ALL_CHAR": string
static readonly "META_EMPTY_PROPS": string

constructor(arg0: string, arg1: string, arg2: string, arg3: boolean)

public "isTag"(): boolean
public "toResLoc"(): $ResourceLocation
public "getAllMatchedItems"(): $Collection<($Item)>
public "getAllMatchedFluids"(): $Collection<($Fluid)>
public "withMetaData"(arg0: string): $UnitId
public "withMetaAll"(): $UnitId
public "hasMetaData"(): boolean
public "getMetaData"(): string
public "withNameSuffix"(arg0: string): $UnitId
public static "joinWords"(arg0: string, ...arg1: (string)[]): string
public static "capitalizeWords"(...arg0: (string)[]): (string)[]
public static "buildRegName"(...arg0: (string)[]): string
public static "buildDictName"(...arg0: (string)[]): string
public static "splitDictName"(arg0: string): (string)[]
public static "regToDictName"(arg0: string): string
public static "dictToRegName"(arg0: string): string
public static "statePropsAsString"(arg0: $StateHolder$Type<(any), (any)>): string
public static "getClassRegName"(arg0: $Class$Type<(any)>): string
public "getBlockProperties"(): $BlockBehaviour$Properties
public "hasProperties"(): boolean
public "getFirstMatchedItem"(): $Item
public "getFirstMatchedFluid"(): $Fluid
public "withNamePrefix"(arg0: string): $UnitId
public "toConfigName"(): string
public "getMeta"(): integer
public "getFirstMatchedState"(): $BlockState
public "getAllMatchedBlockStates"(): $BlockStatesSet
public "getRegName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "matches"(arg0: $BlockState$Type): boolean
public "matches"(arg0: $Item$Type): boolean
public static "from"(arg0: $Path$Type): $UnitId
public static "from"(arg0: $FluidState$Type): $UnitId
public static "from"(arg0: string, ...arg1: (string)[]): $UnitId
public static "from"(arg0: $Enum$Type<(any)>, arg1: string): $UnitId
public static "from"(arg0: string): $UnitId
public static "from"(arg0: $ResourceLocation$Type): $UnitId
public static "from"(arg0: $Item$Type): $UnitId
public static "from"(arg0: $Block$Type, arg1: string): $UnitId
public static "from"(arg0: $Block$Type): $UnitId
public static "from"(arg0: $BlockState$Type): $UnitId
public static "from"(arg0: $Fluid$Type, arg1: string): $UnitId
public static "from"(arg0: string, arg1: string, arg2: integer): $UnitId
public static "from"(arg0: $ResourceLocation$Type, arg1: string): $UnitId
public static "from"(arg0: string, arg1: string): $UnitId
public "withName"(...arg0: (string)[]): $UnitId
public "withName"(arg0: string): $UnitId
public "notEmpty"(): boolean
public "getModId"(): string
public static "isNullOrEmpty"(arg0: $UnitId$Type): boolean
public static "splitRegName"(arg0: string, arg1: boolean, arg2: boolean): (string)[]
get "tag"(): boolean
get "allMatchedItems"(): $Collection<($Item)>
get "allMatchedFluids"(): $Collection<($Fluid)>
get "metaData"(): string
get "blockProperties"(): $BlockBehaviour$Properties
get "firstMatchedItem"(): $Item
get "firstMatchedFluid"(): $Fluid
get "meta"(): integer
get "firstMatchedState"(): $BlockState
get "allMatchedBlockStates"(): $BlockStatesSet
get "regName"(): string
get "empty"(): boolean
get "modId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitId$Type = ($UnitId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitId_ = $UnitId$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumBag" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$VacuumBag$Properties, $VacuumBag$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/items/$VacuumBag$Properties"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$EquipmentItem, $EquipmentItem$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VacuumBag extends $EquipmentItem implements $IStorageItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $VacuumBag$Properties$Type<(any)>)

public "getInitialCapacity"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "fill"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "getContent"(arg0: $ItemStack$Type): $IStorage$Content
public "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "installFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "removeFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "free"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumBag$Type = ($VacuumBag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumBag_ = $VacuumBag$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties" {
import {$UnitProperties, $UnitProperties$Type} from "packages/com/endertech/minecraft/forge/units/$UnitProperties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export class $ForgeBlock$Properties<T extends $ForgeBlock$Properties<(T)>> extends $UnitProperties<(T)> {
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public "noOcclusion"(): T
public "randomTicks"(): T
public static "of"(arg0: string): $ForgeBlock$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeBlock$Properties$Type<T> = ($ForgeBlock$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeBlock$Properties_<T> = $ForgeBlock$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Containers" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$FilterFrame$Container, $FilterFrame$Container$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Container"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $Containers extends $RegistryObjectsInit<($MenuType<(any)>)> {
readonly "filterFrame": $RegistryObject<($MenuType<($FilterFrame$Container)>)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Containers$Type = ($Containers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Containers_ = $Containers$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/emissions/$Emissions" {
import {$Emission, $Emission$Type} from "packages/com/endertech/minecraft/mods/adpother/emissions/$Emission"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export class $Emissions {
static readonly "NONE": $Emissions


public "carbon"(arg0: float): $Emissions
public "sulfur"(arg0: float): $Emissions
public "dust"(arg0: float): $Emissions
public "add"(arg0: $Pollutant$Type<(any)>, arg1: float): $Emissions
public "values"(): $Collection<($Emission)>
public static "of"(): $Emissions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emissions$Type = ($Emissions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emissions_ = $Emissions$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$LavaTouchingWater$EscapeSearchArea" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"

export class $LavaTouchingWater$EscapeSearchArea implements $IHaveConfig {
readonly "maxHeight": integer
readonly "maxRadius": integer

constructor(arg0: $UnitConfig$Type, arg1: integer, arg2: integer)

public "findEscapePosition"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<($BlockPos)>
public "getConfig"(): $UnitConfig
public "saveConfig"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getClassCategory"(): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "getClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LavaTouchingWater$EscapeSearchArea$Type = ($LavaTouchingWater$EscapeSearchArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LavaTouchingWater$EscapeSearchArea_ = $LavaTouchingWater$EscapeSearchArea$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$TilesInit" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"

export class $TilesInit extends $RegistryObjectsInit<($BlockEntityType<(any)>)> {

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TilesInit$Type = ($TilesInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TilesInit_ = $TilesInit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Arg" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$SuggestionProvider, $SuggestionProvider$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionProvider"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $ServerCommand$Arg<T> {


public "getCustomSuggestions"(): $Optional<($SuggestionProvider<($CommandSourceStack)>)>
public static "floatt"(arg0: string, arg1: $FloatBounds$Type): $ServerCommand$Arg<(float)>
public "getName"(): string
public static "of"<T>(arg0: string, arg1: $ArgumentType$Type<(T)>): $ServerCommand$Arg<(T)>
public static "of"<T>(arg0: string, arg1: $ArgumentType$Type<(T)>, arg2: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(T)>
public static "bounds"(arg0: string, arg1: $IntBounds$Type): $ServerCommand$Arg<($MinMaxBounds$Ints)>
public static "bounds"(arg0: string, arg1: $FloatBounds$Type): $ServerCommand$Arg<($MinMaxBounds$Doubles)>
public "getType"(): $ArgumentType<(T)>
public static "color"(arg0: string): $ServerCommand$Arg<($ChatFormatting)>
public static "string"(arg0: string, arg1: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(string)>
public static "string"(arg0: string): $ServerCommand$Arg<(string)>
public static "integer"(arg0: string, arg1: $IntBounds$Type): $ServerCommand$Arg<(integer)>
public static "word"(arg0: string, arg1: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(string)>
public static "word"(arg0: string): $ServerCommand$Arg<(string)>
get "customSuggestions"(): $Optional<($SuggestionProvider<($CommandSourceStack)>)>
get "name"(): string
get "type"(): $ArgumentType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Arg$Type<T> = ($ServerCommand$Arg<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Arg_<T> = $ServerCommand$Arg$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$Aerometer" {
import {$GlassMeter$Properties, $GlassMeter$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$GlassMeter$Properties"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GlassMeter, $GlassMeter$Type} from "packages/com/endertech/minecraft/forge/items/$GlassMeter"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Aerometer extends $GlassMeter {
static readonly "THICKNESS": float
static readonly "GAS_DETECTION_RADIUS": integer
static "beepInterval": $ForgeConfigSpec$ConfigValue<(integer)>
static "beepVolume": $ForgeConfigSpec$ConfigValue<(double)>
static "beepPitch": $ForgeConfigSpec$ConfigValue<(double)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $GlassMeter$Properties$Type<(any)>)

public static "findInInventoryOf"(arg0: $Player$Type): $List<($ItemStack)>
public static "findInHandsOf"(arg0: $Player$Type): $List<($ItemStack)>
public "isClientSideCarrier"(arg0: $Entity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "updateClientSideCarrier"(arg0: $ItemStack$Type, arg1: $Entity$Type): void
public static "getCarrierFor"(arg0: $ItemStack$Type): $Optional<($Entity)>
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Aerometer$Type = ($Aerometer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Aerometer_ = $Aerometer$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$Stamp" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Date, $Date$Type} from "packages/java/util/$Date"

export class $CommonTime$Stamp implements $Comparable<($CommonTime$Stamp)> {


public "distanceTo"(arg0: $CommonTime$Stamp$Type): long
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CommonTime$Stamp$Type): integer
public static "at"(arg0: $Date$Type): $CommonTime$Stamp
public static "now"(): $CommonTime$Stamp
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$Stamp$Type = ($CommonTime$Stamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$Stamp_ = $CommonTime$Stamp$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ForgeItem$Properties, $ForgeItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $DamageableItem$Properties<T extends $DamageableItem$Properties<(T)>> extends $ForgeItem$Properties<(T)> {
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public "durability"(arg0: integer): T
public "repairMaterial"(arg0: $UnitId$Type): T
public static "of"(arg0: string): $ForgeItem$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageableItem$Properties$Type<T> = ($DamageableItem$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageableItem$Properties_<T> = $DamageableItem$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$PlayerEating" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerEating extends $LivingSourceBase<($Player)> {

constructor(arg0: $UnitConfig$Type)

public "emitFrom"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEating$Type = ($PlayerEating);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEating_ = $PlayerEating$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$IRelatedUnit" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"

export interface $IRelatedUnit extends $IHaveConfig {

 "getRelatedId"(): $UnitId
 "saveConfig"(): void
 "getClassCategory"(): string
 "getClassCategory"(arg0: string): string
 "expandClassCategory"(arg0: string): string
 "expandClassCategory"(arg0: string, arg1: string): string
 "getConfig"(): $UnitConfig
}

export namespace $IRelatedUnit {
function expandCategory(arg0: string, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRelatedUnit$Type = ($IRelatedUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRelatedUnit_ = $IRelatedUnit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$EquipmentItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DamageableItem, $DamageableItem$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EquipmentItem extends $DamageableItem implements $Equipable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $EquipmentItem$Properties$Type<(any)>)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(): $EquipmentSlot
public "getEquipSound"(): $SoundEvent
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentItem$Type = ($EquipmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentItem_ = $EquipmentItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Emitters$BuiltInEmitters" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Emitters$BuiltInEmitters extends $Enum<($Emitters$BuiltInEmitters)> implements $IForgeEnum {
static readonly "ad_astra$coal_generator": $Emitters$BuiltInEmitters
static readonly "ad_astra$tier_1_rover": $Emitters$BuiltInEmitters
static readonly "ad_astra$tier_1_rocket": $Emitters$BuiltInEmitters
static readonly "ad_astra$tier_2_rocket": $Emitters$BuiltInEmitters
static readonly "ad_astra$tier_3_rocket": $Emitters$BuiltInEmitters
static readonly "ad_astra$tier_4_rocket": $Emitters$BuiltInEmitters
static readonly "ad_extendra$tier_5_rocket": $Emitters$BuiltInEmitters
static readonly "ad_extendra$tier_6_rocket": $Emitters$BuiltInEmitters
static readonly "ad_extendra$tier_7_rocket": $Emitters$BuiltInEmitters
static readonly "ad_extendra$tier_8_rocket": $Emitters$BuiltInEmitters
static readonly "ad_extendra$tier_9_rocket": $Emitters$BuiltInEmitters
static readonly "ad_extendra$tier_10_rocket": $Emitters$BuiltInEmitters
static readonly "ad_extendra$tier_11_rocket": $Emitters$BuiltInEmitters
static readonly "bakery$brick_stove": $Emitters$BuiltInEmitters
static readonly "bakery$cobblestone_stove": $Emitters$BuiltInEmitters
static readonly "bakery$deepslate_stove": $Emitters$BuiltInEmitters
static readonly "bakery$end_stove": $Emitters$BuiltInEmitters
static readonly "bakery$granite_stove": $Emitters$BuiltInEmitters
static readonly "bakery$mud_stove": $Emitters$BuiltInEmitters
static readonly "bakery$quartz_stove": $Emitters$BuiltInEmitters
static readonly "bakery$red_nether_bricks_stove": $Emitters$BuiltInEmitters
static readonly "bakery$sandstone_stove": $Emitters$BuiltInEmitters
static readonly "bakery$stone_bricks_stove": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$cobblestone_generator": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$iron_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$iron_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$copper_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$copper_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$steel_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$steel_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$gold_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$gold_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$amethyst_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$amethyst_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$diamond_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$diamond_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$platinum_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$platinum_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$netherhot_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$netherhot_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$extreme_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$extreme_furnace": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$ultimate_forge": $Emitters$BuiltInEmitters
static readonly "betterfurnacesreforged$ultimate_furnace": $Emitters$BuiltInEmitters
static readonly "betterminecarts$diesel_locomotive": $Emitters$BuiltInEmitters
static readonly "betterminecarts$steam_locomotive": $Emitters$BuiltInEmitters
static readonly "beyond_earth$coal_generator": $Emitters$BuiltInEmitters
static readonly "beyond_earth$rover": $Emitters$BuiltInEmitters
static readonly "beyond_earth$tiny_rocket": $Emitters$BuiltInEmitters
static readonly "beyond_earth$rocket_t1": $Emitters$BuiltInEmitters
static readonly "beyond_earth$rocket_t2": $Emitters$BuiltInEmitters
static readonly "beyond_earth$rocket_t3": $Emitters$BuiltInEmitters
static readonly "beyond_earth$rocket_t4": $Emitters$BuiltInEmitters
static readonly "brickfurnace$brick_furnace": $Emitters$BuiltInEmitters
static readonly "brickfurnace$brick_blast_furnace": $Emitters$BuiltInEmitters
static readonly "brickfurnace$brick_smoker": $Emitters$BuiltInEmitters
static readonly "burningfurnace$generator": $Emitters$BuiltInEmitters
static readonly "burnt$burning_bamboo": $Emitters$BuiltInEmitters
static readonly "burnt$burning_doors": $Emitters$BuiltInEmitters
static readonly "burnt$burning_fence_gates": $Emitters$BuiltInEmitters
static readonly "burnt$burning_fences": $Emitters$BuiltInEmitters
static readonly "burnt$burning_grass": $Emitters$BuiltInEmitters
static readonly "burnt$burning_leaves": $Emitters$BuiltInEmitters
static readonly "burnt$burning_logs": $Emitters$BuiltInEmitters
static readonly "burnt$burning_planks": $Emitters$BuiltInEmitters
static readonly "burnt$burning_slabs": $Emitters$BuiltInEmitters
static readonly "burnt$burning_stairs": $Emitters$BuiltInEmitters
static readonly "burnt$burning_stripped_logs": $Emitters$BuiltInEmitters
static readonly "burnt$burning_stripped_wood": $Emitters$BuiltInEmitters
static readonly "burnt$burning_wood": $Emitters$BuiltInEmitters
static readonly "burnt$smoldering_carpet": $Emitters$BuiltInEmitters
static readonly "burnt$smoldering_hay": $Emitters$BuiltInEmitters
static readonly "burnt$smoldering_wool": $Emitters$BuiltInEmitters
static readonly "burnt$stairs_fire": $Emitters$BuiltInEmitters
static readonly "burnt$tall_grass_fire": $Emitters$BuiltInEmitters
static readonly "burnt$wood_fire": $Emitters$BuiltInEmitters
static readonly "byg$boric_campfire": $Emitters$BuiltInEmitters
static readonly "byg$boric_campfire_signal": $Emitters$BuiltInEmitters
static readonly "byg$cryptic_campfire": $Emitters$BuiltInEmitters
static readonly "byg$cryptic_campfire_signal": $Emitters$BuiltInEmitters
static readonly "car$blastfurnace": $Emitters$BuiltInEmitters
static readonly "car$car": $Emitters$BuiltInEmitters
static readonly "car$generator": $Emitters$BuiltInEmitters
static readonly "caupona$brick_kitchen_stove": $Emitters$BuiltInEmitters
static readonly "caupona$mud_kitchen_stove": $Emitters$BuiltInEmitters
static readonly "caupona$opus_incertum_kitchen_stove": $Emitters$BuiltInEmitters
static readonly "caupona$opus_latericium_kitchen_stove": $Emitters$BuiltInEmitters
static readonly "caupona$stone_brick_kitchen_stove": $Emitters$BuiltInEmitters
static readonly "charcoal_pit$active_pile": $Emitters$BuiltInEmitters
static readonly "charcoal_pit$pottery_kiln": $Emitters$BuiltInEmitters
static readonly "charcoal_pit$blast_furnace": $Emitters$BuiltInEmitters
static readonly "charcoal_pit$bloomeryy": $Emitters$BuiltInEmitters
static readonly "charcoal_pit$distillery": $Emitters$BuiltInEmitters
static readonly "charcoal_pit$steam_press": $Emitters$BuiltInEmitters
static readonly "clayworks$kiln": $Emitters$BuiltInEmitters
static readonly "cold_sweat$boiler": $Emitters$BuiltInEmitters
static readonly "cold_sweat$hearth": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$white_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$orange_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$magenta_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$light_blue_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$yellow_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$lime_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$pink_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$gray_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$light_gray_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$cyan_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$purple_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$blue_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$brown_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$green_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$red_oven": $Emitters$BuiltInEmitters
static readonly "cookingforblockheads$black_oven": $Emitters$BuiltInEmitters
static readonly "corpse$corpse": $Emitters$BuiltInEmitters
static readonly "create$boiler": $Emitters$BuiltInEmitters
static readonly "create$millstone": $Emitters$BuiltInEmitters
static readonly "create$blaze_burner": $Emitters$BuiltInEmitters
static readonly "create$crushing_wheel_controller": $Emitters$BuiltInEmitters
static readonly "createaddition$crude_burner": $Emitters$BuiltInEmitters
static readonly "createaddition$furnace_burner": $Emitters$BuiltInEmitters
static readonly "createaddition$liquid_blaze_burner": $Emitters$BuiltInEmitters
static readonly "createdieselgenerators$burner": $Emitters$BuiltInEmitters
static readonly "createdieselgenerators$diesel_engine": $Emitters$BuiltInEmitters
static readonly "createdieselgenerators$large_diesel_engine": $Emitters$BuiltInEmitters
static readonly "createdieselgenerators$huge_diesel_engine": $Emitters$BuiltInEmitters
static readonly "createlowheated$basic_burner": $Emitters$BuiltInEmitters
static readonly "createtfmg$radial_engine": $Emitters$BuiltInEmitters
static readonly "createtfmg$regular_engine": $Emitters$BuiltInEmitters
static readonly "createtfmg$large_engine": $Emitters$BuiltInEmitters
static readonly "createtfmg$simple_large_engine": $Emitters$BuiltInEmitters
static readonly "createtfmg$turbine_engine": $Emitters$BuiltInEmitters
static readonly "createtfmg$flarestack": $Emitters$BuiltInEmitters
static readonly "createtfmg$blast_furnace": $Emitters$BuiltInEmitters
static readonly "createtfmg$coke_oven": $Emitters$BuiltInEmitters
static readonly "createtfmg$brick_smokestack": $Emitters$BuiltInEmitters
static readonly "createtfmg$concreate_smokestack": $Emitters$BuiltInEmitters
static readonly "createtfmg$metal_smokestack": $Emitters$BuiltInEmitters
static readonly "crossroads$firebox": $Emitters$BuiltInEmitters
static readonly "crossroads$stamp_mill": $Emitters$BuiltInEmitters
static readonly "crossroads$millstone": $Emitters$BuiltInEmitters
static readonly "divinerpg$coalstone_furnace": $Emitters$BuiltInEmitters
static readonly "divinerpg$greenlight_furnace": $Emitters$BuiltInEmitters
static readonly "divinerpg$oceanfire_furnace": $Emitters$BuiltInEmitters
static readonly "divinerpg$molten_furnace": $Emitters$BuiltInEmitters
static readonly "divinerpg$whitefire_furnace": $Emitters$BuiltInEmitters
static readonly "divinerpg$moonlight_furnace": $Emitters$BuiltInEmitters
static readonly "divinerpg$demon_furnace": $Emitters$BuiltInEmitters
static readonly "draconicevolution$generator": $Emitters$BuiltInEmitters
static readonly "electrodynamics$coalgenerator": $Emitters$BuiltInEmitters
static readonly "electrodynamics$combustionchamber": $Emitters$BuiltInEmitters
static readonly "electrodynamics$mineralcrusher": $Emitters$BuiltInEmitters
static readonly "electrodynamics$mineralcrusherdouble": $Emitters$BuiltInEmitters
static readonly "electrodynamics$mineralcrushertriple": $Emitters$BuiltInEmitters
static readonly "electrodynamics$mineralgrinder": $Emitters$BuiltInEmitters
static readonly "electrodynamics$mineralgrinderdouble": $Emitters$BuiltInEmitters
static readonly "electrodynamics$mineralgrindertriple": $Emitters$BuiltInEmitters
static readonly "electrodynamics$wiremill": $Emitters$BuiltInEmitters
static readonly "electrodynamics$wiremilldouble": $Emitters$BuiltInEmitters
static readonly "electrodynamics$wiremilltriple": $Emitters$BuiltInEmitters
static readonly "enderio$primitive_alloy_smelter": $Emitters$BuiltInEmitters
static readonly "enderio$stirling_generator": $Emitters$BuiltInEmitters
static readonly "enderio$sag_mill": $Emitters$BuiltInEmitters
static readonly "extractinator$extractinator": $Emitters$BuiltInEmitters
static readonly "farmersdelight$stove": $Emitters$BuiltInEmitters
static readonly "futurepack$industrial_furnace": $Emitters$BuiltInEmitters
static readonly "futurepack$part_press": $Emitters$BuiltInEmitters
static readonly "generatorgalore$copper_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$copper_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$culinary_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$culinary_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$culinary_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$diamond_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$diamond_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$emerald_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$emerald_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$enchantment_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$enchantment_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$enchantment_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$ender_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$ender_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$ender_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$gold_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$gold_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$halitosis_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$halitosis_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$halitosis_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$honey_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$honey_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$honey_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$iron_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$iron_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$magmatic_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$magmatic_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$magmatic_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$netherite_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$netherite_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$netherite_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$netherstar_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$netherstar_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$netherstar_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$obsidian_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$obsidian_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$obsidian_generator_64x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$potion_generator": $Emitters$BuiltInEmitters
static readonly "generatorgalore$potion_generator_8x": $Emitters$BuiltInEmitters
static readonly "generatorgalore$potion_generator_64x": $Emitters$BuiltInEmitters
static readonly "gtceu$primitive_blast_furnace": $Emitters$BuiltInEmitters
static readonly "gtceu$coke_oven": $Emitters$BuiltInEmitters
static readonly "gtceu$lv_combustion": $Emitters$BuiltInEmitters
static readonly "gtceu$mv_combustion": $Emitters$BuiltInEmitters
static readonly "gtceu$hv_combustion": $Emitters$BuiltInEmitters
static readonly "gtceu$lp_steam_solid_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$hp_steam_solid_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$lp_steam_liquid_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$hp_steam_liquid_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$bronze_large_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$steel_large_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$titanium_large_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$tungstensteel_large_boiler": $Emitters$BuiltInEmitters
static readonly "gtceu$large_combustion_engine": $Emitters$BuiltInEmitters
static readonly "gtceu$extreme_combustion_engine": $Emitters$BuiltInEmitters
static readonly "gtceu$lv_gas_turbine": $Emitters$BuiltInEmitters
static readonly "gtceu$mv_gas_turbine": $Emitters$BuiltInEmitters
static readonly "gtceu$hv_gas_turbine": $Emitters$BuiltInEmitters
static readonly "gtceu$gas_large_turbine": $Emitters$BuiltInEmitters
static readonly "gtceu$lv_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$mv_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$hv_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$ev_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$iv_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$luv_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$zpm_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$uv_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$lp_steam_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$hp_steam_rock_crusher": $Emitters$BuiltInEmitters
static readonly "gtceu$lp_steam_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$hp_steam_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$lv_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$mv_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$hv_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$ev_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$iv_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$luv_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$zpm_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$uv_macerator": $Emitters$BuiltInEmitters
static readonly "gtceu$steam_grinder": $Emitters$BuiltInEmitters
static readonly "gtceu$large_maceration_tower": $Emitters$BuiltInEmitters
static readonly "gtceu$steam_miner": $Emitters$BuiltInEmitters
static readonly "gtceu$lv_miner": $Emitters$BuiltInEmitters
static readonly "gtceu$mv_miner": $Emitters$BuiltInEmitters
static readonly "gtceu$hv_miner": $Emitters$BuiltInEmitters
static readonly "gtceu$ev_large_miner": $Emitters$BuiltInEmitters
static readonly "gtceu$iv_large_miner": $Emitters$BuiltInEmitters
static readonly "gtceu$luv_large_miner": $Emitters$BuiltInEmitters
static readonly "handcrafted$oven": $Emitters$BuiltInEmitters
static readonly "hardcore_torches$hardcore_campfire": $Emitters$BuiltInEmitters
static readonly "hardcore_torches$stove": $Emitters$BuiltInEmitters
static readonly "hbm$shredder": $Emitters$BuiltInEmitters
static readonly "hbm$burner_press": $Emitters$BuiltInEmitters
static readonly "ic2$alloy_smelter": $Emitters$BuiltInEmitters
static readonly "ic2$colossal_furnace": $Emitters$BuiltInEmitters
static readonly "ic2$colossal_macerator": $Emitters$BuiltInEmitters
static readonly "ic2$fuel_boiler": $Emitters$BuiltInEmitters
static readonly "ic2$generator": $Emitters$BuiltInEmitters
static readonly "ic2$iron_furnace": $Emitters$BuiltInEmitters
static readonly "ic2$liquid_generator": $Emitters$BuiltInEmitters
static readonly "ic2$macerator": $Emitters$BuiltInEmitters
static readonly "ic2$rotary_macerator": $Emitters$BuiltInEmitters
static readonly "ic2$slag_generator": $Emitters$BuiltInEmitters
static readonly "ic2$stone_canner": $Emitters$BuiltInEmitters
static readonly "ic2$stone_macerator": $Emitters$BuiltInEmitters
static readonly "ic2$wood_gassifier": $Emitters$BuiltInEmitters
static readonly "immersive_aircraft$airship": $Emitters$BuiltInEmitters
static readonly "immersive_aircraft$biplane": $Emitters$BuiltInEmitters
static readonly "immersive_aircraft$cargo_airship": $Emitters$BuiltInEmitters
static readonly "immersive_aircraft$gyrodyne": $Emitters$BuiltInEmitters
static readonly "immersive_aircraft$quadrocopter": $Emitters$BuiltInEmitters
static readonly "immersive_aircraft$warship": $Emitters$BuiltInEmitters
static readonly "immersive_weathering$charred_log": $Emitters$BuiltInEmitters
static readonly "immersive_weathering$charred_planks": $Emitters$BuiltInEmitters
static readonly "immersive_weathering$charred_stairs": $Emitters$BuiltInEmitters
static readonly "immersive_weathering$charred_slab": $Emitters$BuiltInEmitters
static readonly "immersive_weathering$charred_fence": $Emitters$BuiltInEmitters
static readonly "immersive_weathering$charred_fence_gate": $Emitters$BuiltInEmitters
static readonly "immersiveengineering$alloy_smelter": $Emitters$BuiltInEmitters
static readonly "immersiveengineering$coke_oven": $Emitters$BuiltInEmitters
static readonly "immersiveengineering$blast_furnace": $Emitters$BuiltInEmitters
static readonly "immersiveengineering$advanced_blast_furnace": $Emitters$BuiltInEmitters
static readonly "immersiveengineering$diesel_generator": $Emitters$BuiltInEmitters
static readonly "immersiveengineering$bucket_wheel": $Emitters$BuiltInEmitters
static readonly "immersiveengineering$crusher": $Emitters$BuiltInEmitters
static readonly "immersivepetroleum$portable_generator": $Emitters$BuiltInEmitters
static readonly "immersivepetroleum$speedboat": $Emitters$BuiltInEmitters
static readonly "immersiverailroading$diesel_locomotive": $Emitters$BuiltInEmitters
static readonly "immersiverailroading$steam_locomotive": $Emitters$BuiltInEmitters
static readonly "immersivetechnology$boiler_liquid": $Emitters$BuiltInEmitters
static readonly "immersivetechnology$boiler_solid": $Emitters$BuiltInEmitters
static readonly "industrialforegoing$biofuel_generator": $Emitters$BuiltInEmitters
static readonly "industrialforegoing$pitiful_generator": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$iron_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$gold_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$diamond_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$emerald_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$obsidian_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$crystal_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$netherite_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$copper_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$silver_furnace": $Emitters$BuiltInEmitters
static readonly "ironfurnaces$million_furnace": $Emitters$BuiltInEmitters
static readonly "jumbofurnace$jumbo_furnace": $Emitters$BuiltInEmitters
static readonly "legendarysurvivaloverhaul$heater": $Emitters$BuiltInEmitters
static readonly "littlelogistics$steam_locomotive": $Emitters$BuiltInEmitters
static readonly "littlelogistics$tug": $Emitters$BuiltInEmitters
static readonly "meadow$stove_tiles_wood": $Emitters$BuiltInEmitters
static readonly "meadow$cooking_cauldron": $Emitters$BuiltInEmitters
static readonly "meadow$fondue": $Emitters$BuiltInEmitters
static readonly "meadow$stove_tiles_lid": $Emitters$BuiltInEmitters
static readonly "mekanism$crusher": $Emitters$BuiltInEmitters
static readonly "mekanism$basic_crushing_factory": $Emitters$BuiltInEmitters
static readonly "mekanism$advanced_crushing_factory": $Emitters$BuiltInEmitters
static readonly "mekanism$elite_crushing_factory": $Emitters$BuiltInEmitters
static readonly "mekanism$ultimate_crushing_factory": $Emitters$BuiltInEmitters
static readonly "mekanism$fuelwood_heater": $Emitters$BuiltInEmitters
static readonly "mekanismgenerators$gas_burning_generator": $Emitters$BuiltInEmitters
static readonly "mekanismgenerators$bio_generator": $Emitters$BuiltInEmitters
static readonly "mekanismgenerators$heat_generator": $Emitters$BuiltInEmitters
static readonly "minecraft$furnace": $Emitters$BuiltInEmitters
static readonly "minecraft$smoker": $Emitters$BuiltInEmitters
static readonly "minecraft$blast_furnace": $Emitters$BuiltInEmitters
static readonly "minecraft$furnace_minecart": $Emitters$BuiltInEmitters
static readonly "minecraft$fire": $Emitters$BuiltInEmitters
static readonly "minecraft$firework_rocket": $Emitters$BuiltInEmitters
static readonly "minecraft$lava": $Emitters$BuiltInEmitters
static readonly "minecraft$campfire": $Emitters$BuiltInEmitters
static readonly "minecraft$campfire_signal": $Emitters$BuiltInEmitters
static readonly "minecraft$soul_campfire": $Emitters$BuiltInEmitters
static readonly "minecraft$soul_campfire_signal": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$basic_reprocessor": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$inferium_reprocessor": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$inferium_furnace": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$prudentium_reprocessor": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$prudentium_furnace": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$tertium_reprocessor": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$tertium_furnace": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$imperium_reprocessor": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$imperium_furnace": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$supremium_reprocessor": $Emitters$BuiltInEmitters
static readonly "mysticalagriculture$supremium_furnace": $Emitters$BuiltInEmitters
static readonly "nethersdelight$blackstone_stove": $Emitters$BuiltInEmitters
static readonly "nethersdelight$blackstone_furnace": $Emitters$BuiltInEmitters
static readonly "nethersdelight$blackstone_blast_furnace": $Emitters$BuiltInEmitters
static readonly "nethersdelight$nether_brick_smoker": $Emitters$BuiltInEmitters
static readonly "plane$bush_plane": $Emitters$BuiltInEmitters
static readonly "plane$cargo_plane": $Emitters$BuiltInEmitters
static readonly "plane$plane": $Emitters$BuiltInEmitters
static readonly "pneumaticcraft$air_compressor": $Emitters$BuiltInEmitters
static readonly "pneumaticcraft$advanced_air_compressor": $Emitters$BuiltInEmitters
static readonly "pneumaticcraft$liquid_compressor": $Emitters$BuiltInEmitters
static readonly "pneumaticcraft$advanced_liquid_compressor": $Emitters$BuiltInEmitters
static readonly "productivemetalworks$foundry_controllers": $Emitters$BuiltInEmitters
static readonly "projecte$dm_furnace": $Emitters$BuiltInEmitters
static readonly "projecte$rm_furnace": $Emitters$BuiltInEmitters
static readonly "quark$blackstone_furnace": $Emitters$BuiltInEmitters
static readonly "quark$deepslate_furnace": $Emitters$BuiltInEmitters
static readonly "quarryplus$solid_fuel_quarry": $Emitters$BuiltInEmitters
static readonly "railcraft$blast_furnace": $Emitters$BuiltInEmitters
static readonly "railcraft$coke_oven": $Emitters$BuiltInEmitters
static readonly "railcraft$crusher": $Emitters$BuiltInEmitters
static readonly "railcraft$fluid_fueled_firebox": $Emitters$BuiltInEmitters
static readonly "railcraft$solid_fueled_firebox": $Emitters$BuiltInEmitters
static readonly "railcraft$steam_locomotive": $Emitters$BuiltInEmitters
static readonly "railcraft$tunnel_bore": $Emitters$BuiltInEmitters
static readonly "refurbished_furniture$light_electricity_generator": $Emitters$BuiltInEmitters
static readonly "refurbished_furniture$dark_electricity_generator": $Emitters$BuiltInEmitters
static readonly "rftoolspower$blazing_generator": $Emitters$BuiltInEmitters
static readonly "rftoolspower$coal_generator": $Emitters$BuiltInEmitters
static readonly "securitycraft$keypad_furnace": $Emitters$BuiltInEmitters
static readonly "securitycraft$keypad_blast_furnace": $Emitters$BuiltInEmitters
static readonly "securitycraft$keypad_smoker": $Emitters$BuiltInEmitters
static readonly "silents_mechanisms$basic_crusher": $Emitters$BuiltInEmitters
static readonly "silents_mechanisms$crusher": $Emitters$BuiltInEmitters
static readonly "silents_mechanisms$coal_generator": $Emitters$BuiltInEmitters
static readonly "silents_mechanisms$diesel_generator": $Emitters$BuiltInEmitters
static readonly "silents_mechanisms$lava_generator": $Emitters$BuiltInEmitters
static readonly "simpleplanes$plane": $Emitters$BuiltInEmitters
static readonly "simpleplanes$large_plane": $Emitters$BuiltInEmitters
static readonly "simpleplanes$helicopter": $Emitters$BuiltInEmitters
static readonly "smallships$cannon_ball": $Emitters$BuiltInEmitters
static readonly "steampowered$cast_iron_burner": $Emitters$BuiltInEmitters
static readonly "steampowered$bronze_burner": $Emitters$BuiltInEmitters
static readonly "steampowered$steel_burner": $Emitters$BuiltInEmitters
static readonly "tconstruct$seared_melter": $Emitters$BuiltInEmitters
static readonly "tconstruct$foundry_controller": $Emitters$BuiltInEmitters
static readonly "tconstruct$smeltery_controller": $Emitters$BuiltInEmitters
static readonly "tfc$blast_furnace": $Emitters$BuiltInEmitters
static readonly "tfc$charcoal_forge": $Emitters$BuiltInEmitters
static readonly "tfc$firepit": $Emitters$BuiltInEmitters
static readonly "tfc$pot": $Emitters$BuiltInEmitters
static readonly "tfc$grill": $Emitters$BuiltInEmitters
static readonly "tfc$bloomery": $Emitters$BuiltInEmitters
static readonly "tfc$burning_log_pile": $Emitters$BuiltInEmitters
static readonly "tfc$pit_kiln": $Emitters$BuiltInEmitters
static readonly "thermal$dynamo_stirling": $Emitters$BuiltInEmitters
static readonly "thermal$dynamo_compression": $Emitters$BuiltInEmitters
static readonly "thermal$dynamo_magmatic": $Emitters$BuiltInEmitters
static readonly "thermal$machine_furnace": $Emitters$BuiltInEmitters
static readonly "thermal$machine_smelter": $Emitters$BuiltInEmitters
static readonly "thermal$machine_pulverizer": $Emitters$BuiltInEmitters
static readonly "thermal$machine_sawmill": $Emitters$BuiltInEmitters
static readonly "trajanstanks$panzer_two": $Emitters$BuiltInEmitters
static readonly "trajanstanks$tiger_tank": $Emitters$BuiltInEmitters
static readonly "trajanstanks$m4sherman": $Emitters$BuiltInEmitters
static readonly "trajanstanks$t34": $Emitters$BuiltInEmitters
static readonly "trajanstanks$cruisermk1": $Emitters$BuiltInEmitters
static readonly "twilightdelight$maze_stove": $Emitters$BuiltInEmitters
static readonly "ytech$primitive_alloy_smelter": $Emitters$BuiltInEmitters
static readonly "ytech$primitive_smelter": $Emitters$BuiltInEmitters
static readonly "ytech$fire_pit": $Emitters$BuiltInEmitters
static readonly "ytech$millstone": $Emitters$BuiltInEmitters
static readonly "vehicle$atv": $Emitters$BuiltInEmitters
static readonly "vehicle$dune_buggy": $Emitters$BuiltInEmitters
static readonly "vehicle$go_kart": $Emitters$BuiltInEmitters
static readonly "vehicle$shopping_cart": $Emitters$BuiltInEmitters
static readonly "vehicle$mini_bike": $Emitters$BuiltInEmitters
static readonly "vehicle$bumper_car": $Emitters$BuiltInEmitters
static readonly "vehicle$jet_ski": $Emitters$BuiltInEmitters
static readonly "vehicle$speed_boat": $Emitters$BuiltInEmitters
static readonly "vehicle$aluminum_boat": $Emitters$BuiltInEmitters
static readonly "vehicle$smart_car": $Emitters$BuiltInEmitters
static readonly "vehicle$lawn_mower": $Emitters$BuiltInEmitters
static readonly "vehicle$moped": $Emitters$BuiltInEmitters
static readonly "vehicle$sports_plane": $Emitters$BuiltInEmitters
static readonly "vehicle$golf_cart": $Emitters$BuiltInEmitters
static readonly "vehicle$off_roader": $Emitters$BuiltInEmitters
static readonly "vehicle$tractor": $Emitters$BuiltInEmitters
static readonly "vehicle$mini_bus": $Emitters$BuiltInEmitters
static readonly "vehicle$dirt_bike": $Emitters$BuiltInEmitters
static readonly "cfm$couch": $Emitters$BuiltInEmitters
static readonly "cfm$bath": $Emitters$BuiltInEmitters
static readonly "cfm$sofacopter": $Emitters$BuiltInEmitters


public static "values"(): ($Emitters$BuiltInEmitters)[]
public static "valueOf"(arg0: string): $Emitters$BuiltInEmitters
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emitters$BuiltInEmitters$Type = (("betterfurnacesreforged$extreme_furnace") | ("minecraft$fire") | ("trajanstanks$tiger_tank") | ("bakery$end_stove") | ("burnt$burning_stripped_wood") | ("burnt$smoldering_hay") | ("gtceu$bronze_large_boiler") | ("create$blaze_burner") | ("hardcore_torches$stove") | ("mekanismgenerators$gas_burning_generator") | ("divinerpg$coalstone_furnace") | ("quark$blackstone_furnace") | ("gtceu$steam_miner") | ("ironfurnaces$silver_furnace") | ("burnt$smoldering_carpet") | ("pneumaticcraft$air_compressor") | ("burnt$burning_fences") | ("createtfmg$turbine_engine") | ("gtceu$extreme_combustion_engine") | ("betterfurnacesreforged$netherhot_forge") | ("enderio$stirling_generator") | ("littlelogistics$steam_locomotive") | ("createlowheated$basic_burner") | ("enderio$primitive_alloy_smelter") | ("betterminecarts$steam_locomotive") | ("railcraft$fluid_fueled_firebox") | ("industrialforegoing$pitiful_generator") | ("immersive_weathering$charred_slab") | ("ad_extendra$tier_6_rocket") | ("gtceu$hp_steam_rock_crusher") | ("refurbished_furniture$dark_electricity_generator") | ("plane$plane") | ("burnt$burning_grass") | ("electrodynamics$coalgenerator") | ("ad_astra$tier_2_rocket") | ("quarryplus$solid_fuel_quarry") | ("caupona$stone_brick_kitchen_stove") | ("betterfurnacesreforged$amethyst_forge") | ("electrodynamics$mineralgrinderdouble") | ("thermal$machine_smelter") | ("createtfmg$large_engine") | ("gtceu$luv_rock_crusher") | ("gtceu$large_maceration_tower") | ("nethersdelight$blackstone_furnace") | ("charcoal_pit$bloomeryy") | ("betterfurnacesreforged$diamond_furnace") | ("electrodynamics$mineralcrusher") | ("ironfurnaces$netherite_furnace") | ("brickfurnace$brick_blast_furnace") | ("car$blastfurnace") | ("generatorgalore$ender_generator_8x") | ("ironfurnaces$gold_furnace") | ("bakery$red_nether_bricks_stove") | ("immersivetechnology$boiler_liquid") | ("charcoal_pit$steam_press") | ("generatorgalore$copper_generator_8x") | ("gtceu$uv_macerator") | ("tfc$pot") | ("brickfurnace$brick_furnace") | ("gtceu$mv_rock_crusher") | ("simpleplanes$large_plane") | ("tfc$blast_furnace") | ("extractinator$extractinator") | ("gtceu$hv_gas_turbine") | ("generatorgalore$enchantment_generator") | ("gtceu$ev_large_miner") | ("jumbofurnace$jumbo_furnace") | ("generatorgalore$halitosis_generator_64x") | ("tfc$burning_log_pile") | ("gtceu$lp_steam_rock_crusher") | ("createdieselgenerators$huge_diesel_engine") | ("railcraft$tunnel_bore") | ("enderio$sag_mill") | ("minecraft$firework_rocket") | ("gtceu$zpm_rock_crusher") | ("ad_astra$tier_1_rocket") | ("gtceu$coke_oven") | ("ironfurnaces$iron_furnace") | ("crossroads$firebox") | ("silents_mechanisms$coal_generator") | ("cookingforblockheads$lime_oven") | ("divinerpg$greenlight_furnace") | ("railcraft$crusher") | ("gtceu$hp_steam_liquid_boiler") | ("vehicle$moped") | ("ironfurnaces$million_furnace") | ("cookingforblockheads$cyan_oven") | ("cookingforblockheads$brown_oven") | ("ironfurnaces$copper_furnace") | ("ad_extendra$tier_11_rocket") | ("byg$cryptic_campfire") | ("ad_astra$coal_generator") | ("brickfurnace$brick_smoker") | ("burnt$burning_leaves") | ("minecraft$furnace_minecart") | ("create$millstone") | ("thermal$dynamo_magmatic") | ("gtceu$lv_macerator") | ("generatorgalore$halitosis_generator") | ("gtceu$lv_gas_turbine") | ("nethersdelight$blackstone_blast_furnace") | ("minecraft$blast_furnace") | ("gtceu$lv_rock_crusher") | ("vehicle$smart_car") | ("gtceu$steel_large_boiler") | ("steampowered$bronze_burner") | ("securitycraft$keypad_smoker") | ("gtceu$hp_steam_solid_boiler") | ("electrodynamics$mineralgrindertriple") | ("productivemetalworks$foundry_controllers") | ("immersive_weathering$charred_stairs") | ("generatorgalore$gold_generator_8x") | ("trajanstanks$t34") | ("futurepack$industrial_furnace") | ("silents_mechanisms$lava_generator") | ("cfm$bath") | ("ic2$stone_macerator") | ("generatorgalore$potion_generator") | ("burnt$burning_fence_gates") | ("trajanstanks$cruisermk1") | ("betterfurnacesreforged$amethyst_furnace") | ("thermal$machine_furnace") | ("bakery$cobblestone_stove") | ("generatorgalore$culinary_generator") | ("gtceu$lp_steam_liquid_boiler") | ("railcraft$coke_oven") | ("tfc$bloomery") | ("create$crushing_wheel_controller") | ("beyond_earth$coal_generator") | ("generatorgalore$culinary_generator_8x") | ("generatorgalore$enchantment_generator_64x") | ("gtceu$large_combustion_engine") | ("createtfmg$metal_smokestack") | ("mekanism$ultimate_crushing_factory") | ("mekanismgenerators$bio_generator") | ("createtfmg$regular_engine") | ("gtceu$mv_combustion") | ("minecraft$soul_campfire_signal") | ("charcoal_pit$active_pile") | ("mekanismgenerators$heat_generator") | ("betterfurnacesreforged$steel_furnace") | ("cookingforblockheads$red_oven") | ("minecraft$furnace") | ("divinerpg$whitefire_furnace") | ("generatorgalore$magmatic_generator_64x") | ("gtceu$ev_macerator") | ("burnt$tall_grass_fire") | ("immersiveengineering$diesel_generator") | ("cookingforblockheads$gray_oven") | ("tconstruct$seared_melter") | ("railcraft$blast_furnace") | ("refurbished_furniture$light_electricity_generator") | ("immersive_weathering$charred_log") | ("draconicevolution$generator") | ("gtceu$mv_gas_turbine") | ("littlelogistics$tug") | ("pneumaticcraft$liquid_compressor") | ("tconstruct$smeltery_controller") | ("vehicle$mini_bike") | ("createaddition$liquid_blaze_burner") | ("ic2$rotary_macerator") | ("generatorgalore$halitosis_generator_8x") | ("byg$cryptic_campfire_signal") | ("thermal$machine_pulverizer") | ("ic2$colossal_macerator") | ("generatorgalore$netherstar_generator") | ("divinerpg$molten_furnace") | ("silents_mechanisms$diesel_generator") | ("gtceu$hp_steam_macerator") | ("immersive_aircraft$quadrocopter") | ("crossroads$millstone") | ("immersiveengineering$bucket_wheel") | ("vehicle$golf_cart") | ("generatorgalore$emerald_generator") | ("electrodynamics$mineralcrushertriple") | ("mysticalagriculture$supremium_furnace") | ("betterfurnacesreforged$copper_furnace") | ("tconstruct$foundry_controller") | ("betterfurnacesreforged$ultimate_furnace") | ("ironfurnaces$crystal_furnace") | ("gtceu$lp_steam_solid_boiler") | ("thermal$machine_sawmill") | ("electrodynamics$mineralcrusherdouble") | ("createdieselgenerators$large_diesel_engine") | ("bakery$granite_stove") | ("createtfmg$simple_large_engine") | ("betterfurnacesreforged$ultimate_forge") | ("vehicle$atv") | ("smallships$cannon_ball") | ("bakery$brick_stove") | ("cookingforblockheads$orange_oven") | ("generatorgalore$culinary_generator_64x") | ("handcrafted$oven") | ("mekanism$basic_crushing_factory") | ("divinerpg$moonlight_furnace") | ("generatorgalore$magmatic_generator") | ("immersive_aircraft$warship") | ("betterfurnacesreforged$iron_furnace") | ("meadow$fondue") | ("minecraft$lava") | ("ytech$millstone") | ("cfm$couch") | ("ad_extendra$tier_9_rocket") | ("vehicle$speed_boat") | ("burnt$burning_bamboo") | ("charcoal_pit$pottery_kiln") | ("hbm$burner_press") | ("generatorgalore$enchantment_generator_8x") | ("immersiveengineering$blast_furnace") | ("mysticalagriculture$tertium_furnace") | ("nethersdelight$nether_brick_smoker") | ("byg$boric_campfire") | ("meadow$cooking_cauldron") | ("gtceu$luv_large_miner") | ("immersive_weathering$charred_fence_gate") | ("vehicle$sports_plane") | ("farmersdelight$stove") | ("generatorgalore$iron_generator") | ("ic2$liquid_generator") | ("bakery$mud_stove") | ("gtceu$iv_macerator") | ("ic2$alloy_smelter") | ("bakery$stone_bricks_stove") | ("cookingforblockheads$yellow_oven") | ("nethersdelight$blackstone_stove") | ("gtceu$uv_rock_crusher") | ("ic2$slag_generator") | ("vehicle$bumper_car") | ("mysticalagriculture$basic_reprocessor") | ("immersive_aircraft$gyrodyne") | ("immersivetechnology$boiler_solid") | ("burnt$burning_planks") | ("generatorgalore$obsidian_generator") | ("railcraft$steam_locomotive") | ("thermal$dynamo_compression") | ("generatorgalore$copper_generator") | ("cookingforblockheads$blue_oven") | ("minecraft$campfire_signal") | ("vehicle$jet_ski") | ("cookingforblockheads$white_oven") | ("futurepack$part_press") | ("vehicle$shopping_cart") | ("mysticalagriculture$inferium_furnace") | ("immersiveengineering$crusher") | ("gtceu$lv_miner") | ("gtceu$hv_miner") | ("ic2$generator") | ("generatorgalore$potion_generator_64x") | ("plane$bush_plane") | ("cookingforblockheads$magenta_oven") | ("mysticalagriculture$tertium_reprocessor") | ("gtceu$mv_macerator") | ("projecte$dm_furnace") | ("burningfurnace$generator") | ("gtceu$iv_rock_crusher") | ("ytech$fire_pit") | ("createtfmg$radial_engine") | ("mekanism$fuelwood_heater") | ("generatorgalore$potion_generator_8x") | ("mysticalagriculture$supremium_reprocessor") | ("pneumaticcraft$advanced_air_compressor") | ("immersive_aircraft$biplane") | ("thermal$dynamo_stirling") | ("vehicle$dirt_bike") | ("beyond_earth$rocket_t2") | ("beyond_earth$rocket_t1") | ("twilightdelight$maze_stove") | ("car$generator") | ("createdieselgenerators$burner") | ("betterfurnacesreforged$diamond_forge") | ("generatorgalore$gold_generator") | ("projecte$rm_furnace") | ("gtceu$primitive_blast_furnace") | ("betterminecarts$diesel_locomotive") | ("tfc$firepit") | ("crossroads$stamp_mill") | ("railcraft$solid_fueled_firebox") | ("createtfmg$coke_oven") | ("bakery$quartz_stove") | ("createtfmg$concreate_smokestack") | ("cookingforblockheads$pink_oven") | ("ic2$iron_furnace") | ("ironfurnaces$diamond_furnace") | ("betterfurnacesreforged$copper_forge") | ("simpleplanes$helicopter") | ("minecraft$campfire") | ("betterfurnacesreforged$iron_forge") | ("gtceu$steam_grinder") | ("ic2$stone_canner") | ("mekanism$crusher") | ("divinerpg$oceanfire_furnace") | ("createtfmg$blast_furnace") | ("burnt$wood_fire") | ("createaddition$crude_burner") | ("charcoal_pit$distillery") | ("immersivepetroleum$speedboat") | ("gtceu$hv_rock_crusher") | ("securitycraft$keypad_furnace") | ("electrodynamics$wiremill") | ("mysticalagriculture$inferium_reprocessor") | ("betterfurnacesreforged$cobblestone_generator") | ("gtceu$iv_large_miner") | ("bakery$deepslate_stove") | ("cookingforblockheads$black_oven") | ("rftoolspower$coal_generator") | ("divinerpg$demon_furnace") | ("burnt$burning_slabs") | ("generatorgalore$iron_generator_8x") | ("gtceu$hv_macerator") | ("generatorgalore$obsidian_generator_64x") | ("burnt$burning_wood") | ("minecraft$soul_campfire") | ("burnt$burning_doors") | ("silents_mechanisms$basic_crusher") | ("ad_extendra$tier_8_rocket") | ("beyond_earth$rocket_t4") | ("beyond_earth$rocket_t3") | ("mekanism$elite_crushing_factory") | ("ic2$fuel_boiler") | ("immersivepetroleum$portable_generator") | ("ad_extendra$tier_5_rocket") | ("ad_astra$tier_4_rocket") | ("tfc$charcoal_forge") | ("gtceu$lp_steam_macerator") | ("generatorgalore$obsidian_generator_8x") | ("mysticalagriculture$prudentium_furnace") | ("mysticalagriculture$prudentium_reprocessor") | ("betterfurnacesreforged$gold_forge") | ("burnt$stairs_fire") | ("createaddition$furnace_burner") | ("ironfurnaces$emerald_furnace") | ("immersiveengineering$advanced_blast_furnace") | ("generatorgalore$ender_generator_64x") | ("vehicle$dune_buggy") | ("createdieselgenerators$diesel_engine") | ("electrodynamics$combustionchamber") | ("gtceu$mv_miner") | ("immersive_aircraft$airship") | ("gtceu$tungstensteel_large_boiler") | ("generatorgalore$magmatic_generator_8x") | ("burnt$burning_stripped_logs") | ("create$boiler") | ("industrialforegoing$biofuel_generator") | ("beyond_earth$tiny_rocket") | ("burnt$burning_stairs") | ("gtceu$zpm_macerator") | ("meadow$stove_tiles_wood") | ("mysticalagriculture$imperium_furnace") | ("mysticalagriculture$imperium_reprocessor") | ("minecraft$smoker") | ("cold_sweat$boiler") | ("immersive_aircraft$cargo_airship") | ("generatorgalore$netherstar_generator_8x") | ("ic2$wood_gassifier") | ("bakery$sandstone_stove") | ("cookingforblockheads$light_blue_oven") | ("generatorgalore$netherstar_generator_64x") | ("ad_extendra$tier_7_rocket") | ("gtceu$lv_combustion") | ("betterfurnacesreforged$netherhot_furnace") | ("createtfmg$flarestack") | ("corpse$corpse") | ("immersiveengineering$coke_oven") | ("plane$cargo_plane") | ("clayworks$kiln") | ("immersiverailroading$steam_locomotive") | ("trajanstanks$m4sherman") | ("ad_astra$tier_3_rocket") | ("charcoal_pit$blast_furnace") | ("generatorgalore$honey_generator_64x") | ("burnt$smoldering_wool") | ("generatorgalore$honey_generator_8x") | ("generatorgalore$netherite_generator") | ("tfc$pit_kiln") | ("gtceu$gas_large_turbine") | ("beyond_earth$rover") | ("caupona$mud_kitchen_stove") | ("generatorgalore$diamond_generator") | ("rftoolspower$blazing_generator") | ("vehicle$mini_bus") | ("gtceu$hv_combustion") | ("betterfurnacesreforged$platinum_forge") | ("immersive_weathering$charred_planks") | ("immersiverailroading$diesel_locomotive") | ("electrodynamics$mineralgrinder") | ("generatorgalore$emerald_generator_8x") | ("silents_mechanisms$crusher") | ("byg$boric_campfire_signal") | ("immersive_weathering$charred_fence") | ("vehicle$tractor") | ("hardcore_torches$hardcore_campfire") | ("securitycraft$keypad_blast_furnace") | ("generatorgalore$diamond_generator_8x") | ("generatorgalore$netherite_generator_64x") | ("ironfurnaces$obsidian_furnace") | ("vehicle$aluminum_boat") | ("ytech$primitive_alloy_smelter") | ("gtceu$titanium_large_boiler") | ("cookingforblockheads$green_oven") | ("betterfurnacesreforged$extreme_forge") | ("vehicle$lawn_mower") | ("legendarysurvivaloverhaul$heater") | ("pneumaticcraft$advanced_liquid_compressor") | ("generatorgalore$ender_generator") | ("ad_astra$tier_1_rover") | ("trajanstanks$panzer_two") | ("electrodynamics$wiremilltriple") | ("betterfurnacesreforged$gold_furnace") | ("quark$deepslate_furnace") | ("steampowered$cast_iron_burner") | ("generatorgalore$honey_generator") | ("tfc$grill") | ("burnt$burning_logs") | ("mekanism$advanced_crushing_factory") | ("cookingforblockheads$oven") | ("gtceu$luv_macerator") | ("electrodynamics$wiremilldouble") | ("cfm$sofacopter") | ("betterfurnacesreforged$platinum_furnace") | ("createtfmg$brick_smokestack") | ("gtceu$ev_rock_crusher") | ("simpleplanes$plane") | ("meadow$stove_tiles_lid") | ("caupona$opus_incertum_kitchen_stove") | ("hbm$shredder") | ("steampowered$steel_burner") | ("ytech$primitive_smelter") | ("ad_extendra$tier_10_rocket") | ("cookingforblockheads$light_gray_oven") | ("vehicle$go_kart") | ("immersiveengineering$alloy_smelter") | ("caupona$brick_kitchen_stove") | ("car$car") | ("betterfurnacesreforged$steel_forge") | ("ic2$colossal_furnace") | ("generatorgalore$netherite_generator_8x") | ("cold_sweat$hearth") | ("vehicle$off_roader") | ("caupona$opus_latericium_kitchen_stove") | ("cookingforblockheads$purple_oven") | ("ic2$macerator")) | ($Emitters$BuiltInEmitters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emitters$BuiltInEmitters_ = $Emitters$BuiltInEmitters$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$ForgeBucketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeBucketItem extends $BucketItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: string, arg1: $Supplier$Type<(any)>)
constructor(arg0: string, arg1: $Supplier$Type<(any)>, arg2: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeBucketItem$Type = ($ForgeBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeBucketItem_ = $ForgeBucketItem$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IPole" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IWaterLoggable, $IWaterLoggable$Type} from "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IPole extends $IWaterLoggable {

 "canStayAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "isApex"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "isApex"(arg0: $BlockState$Type): boolean
 "isPole"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "isPole"(arg0: $BlockState$Type): boolean
 "buildBy"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: integer): $InteractionResult
 "breakBy"(arg0: $Player$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: integer): void
 "canBuildUp"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "getTop"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
 "getBottom"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
 "buildUp"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer): integer
 "breakDown"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: boolean): integer
 "playPlaceSound"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
 "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
 "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
 "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $IPole {
function isEmptyPlace(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
function replaceWith(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
function updateFluidPostPlacement(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function isWaterlogged(arg0: $BlockState$Type): boolean
function getStateForPlacementAt(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function getStateForPlacement(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
function getFluidState(arg0: $BlockState$Type, arg1: boolean): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPole$Type = ($IPole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPole_ = $IPole$Type;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$ForgeTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityType$Builder, $BlockEntityType$Builder$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$Builder"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ForgeTile extends $BlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "syncWithClients"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "getSharedData"(): $CompoundTag
public static "getRegistryName"(arg0: $BlockEntity$Type): $Optional<($ResourceLocation)>
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public static "builder"<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier$Type<(any)>, ...arg1: ($Block$Type)[]): $BlockEntityType$Builder<(T)>
public static "builder"<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier$Type<(any)>, arg1: $Collection$Type<(any)>): $BlockEntityType$Builder<(T)>
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "sharedData"(): $CompoundTag
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeTile$Type = ($ForgeTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeTile_ = $ForgeTile$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Breakables" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Breakables$BuiltInBreakables, $Breakables$BuiltInBreakables$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Breakables$BuiltInBreakables"
import {$RelatedUnitsInit, $RelatedUnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnitsInit"
import {$BreakableBlock, $BreakableBlock$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$BreakableBlock"

export class $Breakables extends $RelatedUnitsInit<($BreakableBlock), ($Breakables$BuiltInBreakables)> {

constructor(arg0: $AbstractForgeMod$Type)

public "createDefaultUnitFrom"(arg0: $UnitConfig$Type, arg1: $Breakables$BuiltInBreakables$Type): $BreakableBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Breakables$Type = ($Breakables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Breakables_ = $Breakables$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UnitProperties, $UnitProperties$Type} from "packages/com/endertech/minecraft/forge/units/$UnitProperties"

export class $ForgeItem$Properties<T extends $ForgeItem$Properties<(T)>> extends $UnitProperties<(T)> {
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $ForgeItem$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItem$Properties$Type<T> = ($ForgeItem$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItem$Properties_<T> = $ForgeItem$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$PollutionParticle$Data" {
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $PollutionParticle$Data implements $ParticleOptions {
readonly "influence": $Percentage
readonly "pollutant": $Pollutant<(any)>

constructor(arg0: $Percentage$Type, arg1: $Pollutant$Type<(any)>)

public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
public "getType"(): $ParticleType<(any)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutionParticle$Data$Type = ($PollutionParticle$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutionParticle$Data_ = $PollutionParticle$Data$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$EnvironmentalImpacts" {
import {$BlockImpactList, $BlockImpactList$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$BlockImpactList$AbstractAction, $BlockImpactList$AbstractAction$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList$AbstractAction"
import {$AbstractPollutionImpacts, $AbstractPollutionImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractPollutionImpacts$ImpactType, $AbstractPollutionImpacts$ImpactType$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts$ImpactType"

export class $EnvironmentalImpacts extends $AbstractPollutionImpacts<($BlockImpactList)> {

constructor(arg0: $UnitConfig$Type)

public "canAffect"(arg0: $BlockState$Type, arg1: $Pollutant$Type<(any)>, arg2: $AbstractPollutionImpacts$ImpactType$Type): boolean
public "tryAffect"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Pollutant$Type<(any)>, arg4: $AbstractPollutionImpacts$ImpactType$Type): boolean
public "getActionsFor"(arg0: $BlockState$Type, arg1: $Pollutant$Type<(any)>, arg2: $AbstractPollutionImpacts$ImpactType$Type): $List<($BlockImpactList$AbstractAction)>
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnvironmentalImpacts$Type = ($EnvironmentalImpacts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnvironmentalImpacts_ = $EnvironmentalImpacts$Type;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$SynchedBoolProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$AbstractSynchedProperty, $AbstractSynchedProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$AbstractSynchedProperty"

export class $SynchedBoolProperty extends $AbstractSynchedProperty<(boolean)> {
readonly "name": string
readonly "comment": string
readonly "defaultValue": T

constructor(arg0: string, arg1: boolean, arg2: string)

public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "define"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedBoolProperty$Type = ($SynchedBoolProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SynchedBoolProperty_ = $SynchedBoolProperty$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Sulfur" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Sulfur extends $AbstractGas {
static readonly "MOVE_DISTANCE": $IntBounds
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $UnitConfig$Type, arg1: string)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sulfur$Type = ($Sulfur);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sulfur_ = $Sulfur$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$Fuel" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SourceBase$Properties, $SourceBase$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export class $Fuel extends $SourceBase {

constructor(arg0: $UnitConfig$Type, arg1: $SourceBase$Properties$Type<(any)>, arg2: boolean)

public "getEmissionOf"(arg0: $Pollutant$Type<(any)>): float
public "isLiquid"(): boolean
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "liquid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fuel$Type = ($Fuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fuel_ = $Fuel$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$UnitsInit" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnitsInit<U> implements $IPostInit {

constructor(arg0: $AbstractForgeMod$Type)

public "createConfig"(arg0: string): $UnitConfig
public "getMod"(): $AbstractForgeMod
public "getConfigsDir"(): $Path
public static "getConfigsDir"(arg0: $AbstractForgeMod$Type, arg1: $Class$Type<(any)>): $Path
public "onPostInit"(): void
public "mapAll"(): $Map<(string), ($Lazy<(any)>)>
public "streamAll"(): $Stream<(U)>
get "mod"(): $AbstractForgeMod
get "configsDir"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitsInit$Type<U> = ($UnitsInit<(U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitsInit_<U> = $UnitsInit$Type<(U)>;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$ChameleonBlockTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ForgeTile, $ForgeTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ForgeTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ChameleonBlockTile extends $ForgeTile {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setTargetBlock"(arg0: $BlockState$Type): void
public "getTargetBlock"(): $BlockState
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
set "targetBlock"(value: $BlockState$Type)
get "targetBlock"(): $BlockState
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChameleonBlockTile$Type = ($ChameleonBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChameleonBlockTile_ = $ChameleonBlockTile$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ColorARGB" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$ColorARGB$Channel, $ColorARGB$Channel$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB$Channel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColorARGB {
static readonly "MAX_BYTE_VALUE": integer
static readonly "DEFAULT": $ColorARGB
static readonly "HEX_FORMAT": string
static readonly "DESCRIPTION_COMMON": string
static readonly "DESCRIPTION_FOR_SMOKE": string


public "maxOpaque"(): $ColorARGB
public "getHexARGB"(): string
public "getRed"(): $ColorARGB$Channel
public "getGreen"(): $ColorARGB$Channel
public "getBlue"(): $ColorARGB$Channel
public "getARGB"(): integer
public "isCompletelyTransparent"(): boolean
public "approxTo"(arg0: $ColorARGB$Type, arg1: float): $ColorARGB
public "withAlpha"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "withRed"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "withGreen"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "withBlue"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "blend"(arg0: $Map$Type<($ColorARGB$Type), (integer)>): $ColorARGB
public static "from"(arg0: integer): $ColorARGB
public static "from"(arg0: string): $ColorARGB
public static "from"(arg0: $Color$Type): $ColorARGB
public "isOpaque"(): boolean
public static "parse"(arg0: string): $ColorARGB
public "getAlpha"(): $ColorARGB$Channel
get "hexARGB"(): string
get "red"(): $ColorARGB$Channel
get "green"(): $ColorARGB$Channel
get "blue"(): $ColorARGB$Channel
get "aRGB"(): integer
get "completelyTransparent"(): boolean
get "opaque"(): boolean
get "alpha"(): $ColorARGB$Channel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorARGB$Type = ($ColorARGB);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorARGB_ = $ColorARGB$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$IStorage, $IStorage$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStorageItem extends $IStorage<($ItemStack)> {

 "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
 "m_7373_"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "getContent"(arg0: $ItemStack$Type): $IStorage$Content
 "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
 "installFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "removeFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "getInitialCapacity"(arg0: $ItemStack$Type): integer
 "fill"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "free"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer

(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
}

export namespace $IStorageItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageItem$Type = ($IStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageItem_ = $IStorageItem$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$ItemModel$Properties$IPropertyGetter, $ItemModel$Properties$IPropertyGetter$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties$IPropertyGetter"
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $ItemModel$Properties<T extends $ItemModel$Properties<(T)>> extends $BaseProperties<(T)> {


public static "of"(arg0: $AbstractForgeMod$Type): $ItemModel$Properties<(any)>
public "register"(arg0: $Item$Type, arg1: string, arg2: $ItemModel$Properties$IPropertyGetter$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$Properties$Type<T> = ($ItemModel$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$Properties_<T> = $ItemModel$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/common/$KeyValuePair" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $KeyValuePair extends $Record {
static readonly "EMPTY": $KeyValuePair
static readonly "SEPARATOR": string

constructor(key: string, value: string)

public "value"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "key"(): string
public static "parse"(arg0: string): $KeyValuePair
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyValuePair$Type = ($KeyValuePair);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyValuePair_ = $KeyValuePair$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/$AdPother" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Features, $Features$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Features"
import {$FluidTypes, $FluidTypes$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$FluidTypes"
import {$ServerCommand, $ServerCommand$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand"
import {$Sources, $Sources$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Sources"
import {$Entities, $Entities$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Entities"
import {$Effects, $Effects$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Effects"
import {$ItemModel$RegistryWrapper, $ItemModel$RegistryWrapper$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$RegistryWrapper"
import {$Blocks, $Blocks$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Blocks"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$Pollutants, $Pollutants$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Pollutants"
import {$Items, $Items$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Items"
import {$Fluids, $Fluids$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Fluids"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$Emitters, $Emitters$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Emitters"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$Sounds, $Sounds$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Sounds"
import {$Particles, $Particles$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Particles"
import {$ItemModel$Properties, $ItemModel$Properties$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties"
import {$RecipeSerializers, $RecipeSerializers$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$RecipeSerializers"
import {$Impacts, $Impacts$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Impacts"
import {$Fuels, $Fuels$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Fuels"
import {$RegisterParticleProvidersEvent, $RegisterParticleProvidersEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterParticleProvidersEvent"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$BiomeModifierCodecs, $BiomeModifierCodecs$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$BiomeModifierCodecs"
import {$Torches, $Torches$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Torches"
import {$Containers, $Containers$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Containers"
import {$DataCollector, $DataCollector$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector"
import {$Respirators, $Respirators$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Respirators"
import {$Tiles, $Tiles$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Tiles"
import {$Breakables, $Breakables$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Breakables"

export class $AdPother extends $AbstractForgeMod {
static readonly "ID": string
readonly "blocks": $Blocks
readonly "containers": $Containers
readonly "effects": $Effects
readonly "emitters": $Emitters
readonly "entities": $Entities
readonly "features": $Features
readonly "codecs": $BiomeModifierCodecs
readonly "fluidTypes": $FluidTypes
readonly "fluids": $Fluids
readonly "fuels": $Fuels
readonly "impacts": $Impacts
readonly "items": $Items
readonly "particles": $Particles
readonly "pollutants": $Pollutants
readonly "respirators": $Respirators
readonly "recipeSerializers": $RecipeSerializers
readonly "sounds": $Sounds
readonly "sources": $Sources
readonly "tiles": $Tiles
readonly "torches": $Torches
readonly "breakables": $Breakables

constructor()

public "gatherData"(arg0: $DataCollector$Type): void
public static "getInstance"(): $AdPother
public "getId"(): string
public "clientInit"(): void
public "clientRegisterParticleProviders"(arg0: $RegisterParticleProvidersEvent$Type): void
public "clientBuildCreativeModeTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "commonInit"(): void
public "commonPostInit"(): void
public "commonConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "clientConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "configUpdated"(arg0: $ModConfig$Type): void
public "clientAddRenderLayers"(): void
public "clientReplaceModels"(arg0: $ItemModel$RegistryWrapper$Type): void
public "clientRegisterRenderers"(): void
public "clientRegisterItemModelProperties"(arg0: $ItemModel$Properties$Type<(any)>): void
public "registerCommands"(arg0: $ServerCommand$Type, arg1: $CommandBuildContext$Type): void
public "tagsUpdated"(): void
get "instance"(): $AdPother
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdPother$Type = ($AdPother);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdPother_ = $AdPother$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumTube" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$VacuumTube$Properties, $VacuumTube$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/items/$VacuumTube$Properties"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$DamageableItem, $DamageableItem$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VacuumTube extends $DamageableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $VacuumTube$Properties$Type<(any)>)

public "suckIn"(arg0: $AbstractGas$Type, arg1: $ServerPlayer$Type): boolean
public "getSuckInterval"(): $GameTime
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "suckInterval"(): $GameTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumTube$Type = ($VacuumTube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumTube_ = $VacuumTube$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Torches" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Torches$BuiltInEmitters, $Torches$BuiltInEmitters$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Torches$BuiltInEmitters"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$EmittersInit, $EmittersInit$Type} from "packages/com/endertech/minecraft/forge/units/$EmittersInit"
import {$Torch, $Torch$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$Torch"

export class $Torches extends $EmittersInit<($Torch), ($Torches$BuiltInEmitters)> {

constructor(arg0: $AbstractForgeMod$Type)

public "createDefaultUnitFrom"(arg0: $UnitConfig$Type, arg1: $Torches$BuiltInEmitters$Type): $Torch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Torches$Type = ($Torches);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Torches_ = $Torches$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage" {
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export interface $IStorage<S> {

 "_handleChanges"(arg0: $IStorage$Content$Type, arg1: S): void
 "onContentChanged"(arg0: $IStorage$Content$Type, arg1: S): void
 "installFiltersFor"(arg0: S, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "removeFiltersFor"(arg0: S, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "getInitialCapacity"(arg0: S): integer
 "fill"(arg0: S, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "getContent"(arg0: S): $IStorage$Content
 "free"(arg0: S, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
}

export namespace $IStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorage$Type<S> = ($IStorage<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorage_<S> = $IStorage$Type<(S)>;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/items/$Paintbrush" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Paintbrush extends $Item {
static "requiresWaterBucket": $ForgeConfigSpec$ConfigValue<(boolean)>
static "requiresDye": $ForgeConfigSpec$ConfigValue<(boolean)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "hasAllRequiredMaterials"(arg0: $Player$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canBeDepleted"(): boolean
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public static "in"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public static "in"(arg0: $ItemStack$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paintbrush$Type = ($Paintbrush);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Paintbrush_ = $Paintbrush$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractEntityImpacts" {
import {$LivingEntityImpactList$EntityEffect, $LivingEntityImpactList$EntityEffect$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$LivingEntityImpactList$EntityEffect"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$AbstractPollutionImpacts, $AbstractPollutionImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$LivingEntityImpactList, $LivingEntityImpactList$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$LivingEntityImpactList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AbstractPollutionImpacts$ImpactType, $AbstractPollutionImpacts$ImpactType$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts$ImpactType"

export class $AbstractEntityImpacts extends $AbstractPollutionImpacts<($LivingEntityImpactList)> {

constructor(arg0: $UnitConfig$Type)

public "canAffect"(arg0: $Entity$Type, arg1: $Pollutant$Type<(any)>, arg2: $AbstractPollutionImpacts$ImpactType$Type, arg3: $Percentage$Type): boolean
public "tryAffect"(arg0: $Entity$Type, arg1: $Pollutant$Type<(any)>, arg2: $AbstractPollutionImpacts$ImpactType$Type, arg3: $Percentage$Type): integer
public "isImmune"(arg0: $Entity$Type, arg1: $Percentage$Type): boolean
public "getActiveEffectsFor"(arg0: $Entity$Type, arg1: $Pollutant$Type<(any)>, arg2: $AbstractPollutionImpacts$ImpactType$Type, arg3: $Percentage$Type): $List<($LivingEntityImpactList$EntityEffect)>
public "onPostInit"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEntityImpacts$Type = ($AbstractEntityImpacts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEntityImpacts_ = $AbstractEntityImpacts$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$BlockTagsProviderFactory" {
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$BlockTagsProvider, $BlockTagsProvider$Type} from "packages/net/minecraftforge/common/data/$BlockTagsProvider"

export interface $DataCollector$BlockTagsProviderFactory<T extends $BlockTagsProvider> {

 "create"(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: string, arg3: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: string, arg3: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$BlockTagsProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$BlockTagsProviderFactory$Type<T> = ($DataCollector$BlockTagsProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$BlockTagsProviderFactory_<T> = $DataCollector$BlockTagsProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ConfigCategory" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Property, $Property$Type} from "packages/com/endertech/minecraft/forge/configs/$Property"
import {$CommonString$Joiner, $CommonString$Joiner$Type} from "packages/com/endertech/common/$CommonString$Joiner"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BufferedWriter, $BufferedWriter$Type} from "packages/java/io/$BufferedWriter"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigCategory implements $Map<(string), ($Property)> {
readonly "parent": $ConfigCategory

constructor(arg0: string)
constructor(arg0: string, arg1: $ConfigCategory$Type)

public "getConfigEntryClass"(): $Class<(any)>
public "setConfigEntryClass"(arg0: $Class$Type<(any)>): $ConfigCategory
public "showInGui"(): boolean
public "getFirstParent"(): $ConfigCategory
public "getOrderedValues"(): $List<($Property)>
public "getLanguagekey"(): string
public "setShowInGui"(arg0: boolean): $ConfigCategory
public "getPropertyOrder"(): $List<(string)>
public "setLanguageKey"(arg0: string): $ConfigCategory
public "setRequiresWorldRestart"(arg0: boolean): $ConfigCategory
public "requiresWorldRestart"(): boolean
public "setRequiresMcRestart"(arg0: boolean): $ConfigCategory
public "requiresMcRestart"(): boolean
public "setPropertyOrder"(arg0: $List$Type<(string)>): $ConfigCategory
public static "getQualifiedName"(arg0: string, arg1: $ConfigCategory$Type): string
public "getQualifiedName"(): string
public "removeChild"(arg0: $ConfigCategory$Type): void
public "getName"(): string
public static "name"(): $CommonString$Joiner
public "remove"(arg0: any): $Property
public "get"(arg0: string): $Property
public "put"(arg0: string, arg1: $Property$Type): $Property
public "equals"(arg0: any): boolean
public "values"(): $Collection<($Property)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(string), ($Property)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "write"(arg0: $BufferedWriter$Type, arg1: integer): void
public "containsKey"(arg0: string): boolean
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(string)>
public "containsValue"(arg0: any): boolean
public "setComment"(arg0: string): void
public "getComment"(): string
public "getChildren"(): $Set<($ConfigCategory)>
public "isChild"(): boolean
public "getValues"(): $Map<(string), ($Property)>
public "hasChanged"(): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(string), ($Property)>
public "replace"(arg0: string, arg1: $Property$Type): $Property
public "replace"(arg0: string, arg1: $Property$Type, arg2: $Property$Type): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type, arg18: string, arg19: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type): $Map<(string), ($Property)>
public "merge"(arg0: string, arg1: $Property$Type, arg2: $BiFunction$Type<(any), (any), (any)>): $Property
public "putIfAbsent"(arg0: string, arg1: $Property$Type): $Property
public "compute"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "entry"<K, V>(arg0: string, arg1: $Property$Type): $Map$Entry<(string), ($Property)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: string, arg1: $Function$Type<(any), (any)>): $Property
public "getOrDefault"(arg0: any, arg1: $Property$Type): $Property
public "computeIfPresent"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(string), ($Property)>
[index: string | number]: $Property
get "configEntryClass"(): $Class<(any)>
set "configEntryClass"(value: $Class$Type<(any)>)
get "firstParent"(): $ConfigCategory
get "orderedValues"(): $List<($Property)>
get "languagekey"(): string
get "propertyOrder"(): $List<(string)>
set "languageKey"(value: string)
set "propertyOrder"(value: $List$Type<(string)>)
get "qualifiedName"(): string
get "empty"(): boolean
set "comment"(value: string)
get "comment"(): string
get "children"(): $Set<($ConfigCategory)>
get "child"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategory$Type = ($ConfigCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCategory_ = $ConfigCategory$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$Rope$Properties" {
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $Rope$Properties<T extends $Rope$Properties<(T)>> extends $BaseProperties<(T)> {
 "maxLength": integer
 "width": float
 "elasticity": float
 "color": $ChatFormatting


public "elasticity"(arg0: float): T
public static "of"(): $Rope$Properties<(any)>
public "color"(arg0: $ChatFormatting$Type): T
public "width"(arg0: float): T
public "maxLength"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rope$Properties$Type<T> = ($Rope$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rope$Properties_<T> = $Rope$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Percentage" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Percentage$Grade, $Percentage$Grade$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage$Grade"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Ordered, $Ordered$Type} from "packages/com/endertech/common/$Ordered"

export class $Percentage implements $Ordered<($Percentage)> {
static readonly "FACTOR": float
static readonly "ZERO": $Percentage
static readonly "HUNDRED": $Percentage

constructor(arg0: float)

public "takeChance"(): boolean
public "takeChance"(arg0: $Random$Type): boolean
public "toFraction"(): float
public "toColoredText"(): string
public "randomResult"(): boolean
public static "value"(arg0: float): $Percentage
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Percentage$Type): integer
public "getValue"(): float
public static "from"(arg0: float): $Percentage
public static "from"(arg0: integer, arg1: integer): $Percentage
public "multiply"(arg0: float): $Percentage
public static "parse"(arg0: string): $Percentage
public "getGrade"(): $Percentage$Grade
public "isLessOrEqualTo"(arg0: $Percentage$Type): boolean
public "isGreaterThan"(arg0: $Percentage$Type): boolean
public "isGreaterOrEqualTo"(arg0: $Percentage$Type): boolean
public static "min"<T extends $Comparable<(T)>>(arg0: $Percentage$Type, arg1: $Percentage$Type): $Percentage
public static "max"<T extends $Comparable<(T)>>(arg0: $Percentage$Type, arg1: $Percentage$Type): $Percentage
public "isLessThan"(arg0: $Percentage$Type): boolean
get "grade"(): $Percentage$Grade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Percentage$Type = ($Percentage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Percentage_ = $Percentage$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/config/$FilterMaterialList" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AbstractParsableList, $AbstractParsableList$Type} from "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterMaterialList extends $AbstractParsableList {

constructor(arg0: $UnitConfig$Type, arg1: string)

public "getCapacityFor"(arg0: $ItemStack$Type): integer
public "getByproductFor"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "getMaterials"(): $Set<($Item)>
public "contains"(arg0: $ItemStack$Type): boolean
get "materials"(): $Set<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterMaterialList$Type = ($FilterMaterialList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterMaterialList_ = $FilterMaterialList$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Features" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$PregeneratedClouds$Generator, $PregeneratedClouds$Generator$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Generator"

export class $Features extends $RegistryObjectsInit<($Feature<(any)>)> {
readonly "cloud_generator": $RegistryObject<($PregeneratedClouds$Generator)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Features$Type = ($Features);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Features_ = $Features$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$BiomeId" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BiomeId {
static readonly "EMPTY": $BiomeId


public "getResourceLocation"(): $Optional<($ResourceLocation)>
public "getBiome"(): $Optional<($Biome)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "from"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $BiomeId
public static "from"(arg0: $ResourceLocation$Type): $BiomeId
public static "from"(arg0: $ResourceKey$Type<($Biome$Type)>): $BiomeId
public "getKey"(): $Optional<($ResourceKey<($Biome)>)>
get "resourceLocation"(): $Optional<($ResourceLocation)>
get "biome"(): $Optional<($Biome)>
get "empty"(): boolean
get "key"(): $Optional<($ResourceKey<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeId$Type = ($BiomeId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeId_ = $BiomeId$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Msg" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEmitter, $IEmitter$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $ServerCommand$Msg {

constructor(arg0: string)

public static "noUnitInSight"(arg0: string): $ServerCommand$Msg
public static "emitter"(arg0: string, arg1: $IEmitter$Type, arg2: boolean): $ServerCommand$Msg
public static "clazz"(arg0: $Class$Type<(any)>, arg1: boolean): $ServerCommand$Msg
public "toString"(): string
public static "of"(arg0: string): $ServerCommand$Msg
public static "unit"(arg0: string, arg1: $ChatFormatting$Type, arg2: $UnitId$Type): $ServerCommand$Msg
public static "error"(arg0: string): $ServerCommand$Msg
public static "bool"(arg0: boolean): $ServerCommand$Msg
public static "nbt"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>, arg1: $Predicate$Type<(string)>): $ServerCommand$Msg
public static "colored"(arg0: string, arg1: $ChatFormatting$Type): $ServerCommand$Msg
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Msg$Type = ($ServerCommand$Msg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Msg_ = $ServerCommand$Msg$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$BlockImpactList$AbstractAction, $BlockImpactList$AbstractAction$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList$AbstractAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractParsableList, $AbstractParsableList$Type} from "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BlockImpactList extends $AbstractParsableList {

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: string)

public "getActionsFor"(arg0: $BlockState$Type): $List<($BlockImpactList$AbstractAction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockImpactList$Type = ($BlockImpactList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockImpactList_ = $BlockImpactList$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Fuels" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Emissions, $Emissions$Type} from "packages/com/endertech/minecraft/mods/adpother/emissions/$Emissions"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RelatedUnitsInit, $RelatedUnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnitsInit"
import {$Fuel, $Fuel$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$Fuel"
import {$Fuels$BuiltInFuels, $Fuels$BuiltInFuels$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Fuels$BuiltInFuels"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Fuels extends $RelatedUnitsInit<($Fuel), ($Fuels$BuiltInFuels)> {

constructor(arg0: $AbstractForgeMod$Type)

public "createDefaultUnitFrom"(arg0: $UnitConfig$Type, arg1: $Fuels$BuiltInFuels$Type): $Fuel
public "createCustomUnitFrom"(arg0: $UnitConfig$Type, arg1: string): $Fuel
public static "defaultEmissionsFor"(arg0: $ItemStack$Type): $Optional<($Emissions)>
public "get"(arg0: $ItemStack$Type): $Optional<($Fuel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fuels$Type = ($Fuels);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fuels_ = $Fuels$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$BreakableBlock" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SourceBase$Properties, $SourceBase$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BreakableBlock extends $SourceBase {
static "rate": $ForgeConfigSpec$ConfigValue<(double)>

constructor(arg0: $UnitConfig$Type, arg1: $SourceBase$Properties$Type<(any)>)

public "emitAt"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: float): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakableBlock$Type = ($BreakableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreakableBlock_ = $BreakableBlock$Type;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$SynchedProperties" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INBTSerializable"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$IReloadableData, $IReloadableData$Type} from "packages/com/endertech/minecraft/forge/data/$IReloadableData"
import {$AbstractSynchedProperty, $AbstractSynchedProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$AbstractSynchedProperty"

export class $SynchedProperties implements $INBTSerializable<($SynchedProperties)>, $IReloadableData {
readonly "category": string

constructor(arg0: string)

public "add"<P extends $AbstractSynchedProperty<(any)>>(arg0: P): P
public "list"(): $List<($AbstractSynchedProperty<(any)>)>
public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "loadData"(): void
public "define"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "resetToConfigValues"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedProperties$Type = ($SynchedProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SynchedProperties_ = $SynchedProperties$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$FluidTypes" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $FluidTypes extends $RegistryObjectsInit<($FluidType)> {
readonly "pollutedWaterType": $RegistryObject<($FluidType)>

constructor(arg0: $AbstractForgeMod$Type)

public "addFluidInteractions"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTypes$Type = ($FluidTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTypes_ = $FluidTypes$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IWaterLoggable extends $SimpleWaterloggedBlock {

 "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
 "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
 "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $IWaterLoggable {
const WATERLOGGED: $BooleanProperty
function updateFluidPostPlacement(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function isWaterlogged(arg0: $BlockState$Type): boolean
function getStateForPlacementAt(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function getStateForPlacement(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
function getFluidState(arg0: $BlockState$Type, arg1: boolean): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaterLoggable$Type = ($IWaterLoggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWaterLoggable_ = $IWaterLoggable$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$SynchedFloats" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HookShot$SynchedFloats extends $Enum<($HookShot$SynchedFloats)> {
static readonly "HIT_X": $HookShot$SynchedFloats
static readonly "HIT_Y": $HookShot$SynchedFloats
static readonly "HIT_Z": $HookShot$SynchedFloats
static readonly "ROPE_LENGTH": $HookShot$SynchedFloats
static readonly "SAGGING": $HookShot$SynchedFloats
static readonly "TENSION_FORCE": $HookShot$SynchedFloats


public static "values"(): ($HookShot$SynchedFloats)[]
public static "valueOf"(arg0: string): $HookShot$SynchedFloats
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookShot$SynchedFloats$Type = (("hit_z") | ("hit_y") | ("rope_length") | ("hit_x") | ("tension_force") | ("sagging")) | ($HookShot$SynchedFloats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookShot$SynchedFloats_ = $HookShot$SynchedFloats$Type;
}}
declare module "packages/com/endertech/minecraft/forge/entities/$ForgeEntity" {
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Vect3d, $Vect3d$Type} from "packages/com/endertech/minecraft/forge/math/$Vect3d"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ClipContext$Block, $ClipContext$Block$Type} from "packages/net/minecraft/world/level/$ClipContext$Block"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$PlayMessages$SpawnEntity, $PlayMessages$SpawnEntity$Type} from "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Rotation, $Rotation$Type} from "packages/com/endertech/minecraft/forge/math/$Rotation"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ClipContext$Fluid, $ClipContext$Fluid$Type} from "packages/net/minecraft/world/level/$ClipContext$Fluid"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $ForgeEntity extends $Entity {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $PlayMessages$SpawnEntity$Type, arg1: $Level$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public static "isUnderRain"(arg0: $Entity$Type): boolean
public static "isUnderOpenSky"(arg0: $Entity$Type): boolean
public "getBBCenter"(): $Vect3d
public "getBB"(arg0: $Vect3d$Type): $AABB
public static "getBB"(arg0: $Entity$Type): $AABB
public static "getBB"(arg0: $Entity$Type, arg1: $Vect3d$Type): $AABB
public "getBB"(): $AABB
public static "isHostileMob"(arg0: $Entity$Type): boolean
public static "getCenteredPosTo"(arg0: $BlockPos$Type): $Vect3d
public static "getCenterPosition"(arg0: $Entity$Type): $Vect3d
public static "getCenterPosition"(arg0: $Entity$Type, arg1: float): $Vect3d
public static "getCurPosition"(arg0: $Entity$Type): $Vect3d
public static "getCurPosition"(arg0: $Entity$Type, arg1: float): $Vect3d
public "getCurPosition"(): $Vect3d
public "getCurPosition"(arg0: float): $Vect3d
public static "otherHand"(arg0: $InteractionHand$Type): $InteractionHand
public "setPrevPosition"(arg0: $Vect3d$Type): void
public static "setPrevPosition"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "getCurMotion"(): $Vect3d
public static "setCurPosition"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "setCurPosition"(arg0: $Vect3d$Type): void
public static "copyAllPositionsWithOffset"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $Vect3d$Type): void
public "getPrevPosition"(): $Vect3d
public static "getPrevPosition"(arg0: $Entity$Type): $Vect3d
public "getLastTickPosition"(): $Vect3d
public static "getLastTickPosition"(arg0: $Entity$Type): $Vect3d
public static "setLastTickPosition"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "setLastTickPosition"(arg0: $Vect3d$Type): void
public static "getPositionEyes"(arg0: $Entity$Type): $BlockPos
public static "getPositionTop"(arg0: $Entity$Type): $BlockPos
public "getPrevRotation"(): $Rotation
public static "getPrevRotation"(arg0: $Entity$Type): $Rotation
public "getCurRotation"(): $Rotation
public static "getNextPosition"(arg0: $Entity$Type): $Vect3d
public "getNextPosition"(): $Vect3d
public static "setPosition_NoBB"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public static "setPrevRotation"(arg0: $Entity$Type, arg1: $Rotation$Type): void
public "setPrevRotation"(arg0: $Rotation$Type): void
public "setCurRotation"(arg0: $Rotation$Type): void
public "setAllPositions"(arg0: $Vect3d$Type): void
public static "setAllPositions"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "setAllRotations"(arg0: $Rotation$Type): void
public static "setAllRotations"(arg0: $Entity$Type, arg1: $Rotation$Type): void
public static "getRootVehicleWithAllPassengers"(arg0: $Entity$Type): $List<($Entity)>
public static "getFacingTo"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type): $Direction
public static "setFallDistance"(arg0: $Entity$Type, arg1: float, arg2: boolean): void
public static "updateBB"(arg0: $Entity$Type): void
public "updateBB"(): void
public "stopMoving"(): void
public static "stopMoving"(arg0: $Entity$Type): void
public "getCollidedWithIfMove"<E extends $Entity>(arg0: $Class$Type<(E)>, arg1: $Vect3d$Type, arg2: $Predicate$Type<(any)>): $List<(E)>
public static "setBB"(arg0: $Entity$Type, arg1: $Vect3d$Type, arg2: $Vect3d$Type): void
public "setBB"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): void
public "hasSwingingPlayerPassenger"(): boolean
public static "hasSwingingPlayerPassenger"(arg0: $Entity$Type): boolean
public static "hasStack"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public static "rayTraceBlockBeingLookedAt"(arg0: $Entity$Type, arg1: $ClipContext$Block$Type, arg2: $ClipContext$Fluid$Type, arg3: float, arg4: float): $Optional<($BlockHitResult)>
public static "rayTraceEntityBeingLookedAt"(arg0: $Entity$Type, arg1: float, arg2: float): $Optional<($EntityHitResult)>
public static "getAirShortage"(arg0: $Entity$Type): $Percentage
public static "getEquipmentOn"(arg0: $Entity$Type): $Iterable<($ItemStack)>
public static "isEating"(arg0: $LivingEntity$Type): boolean
public "isServerSide"(): boolean
public static "isServerSide"(arg0: $Entity$Type): boolean
public static "setRotation"(arg0: $Entity$Type, arg1: $Rotation$Type): void
public static "getById"(arg0: $Level$Type, arg1: integer): $Optional<($Entity)>
public static "getMotion"(arg0: $Entity$Type): $Vect3d
public static "getRegistryName"(arg0: $Entity$Type): $ResourceLocation
public static "getSize"(arg0: $Entity$Type): float
public "move"(): void
public static "getWeight"(arg0: $Entity$Type, arg1: boolean): float
public static "getRotation"(arg0: $Entity$Type): $Rotation
public static "getRotation"(arg0: $Entity$Type, arg1: float): $Rotation
public "getRotation"(arg0: float): $Rotation
public "addMotion"(arg0: double, arg1: double, arg2: double): void
public "addMotion"(arg0: $Vect3d$Type): void
public static "addMotion"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public static "setMotion"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "setMotion"(arg0: $Vect3d$Type): void
public "isClientSide"(): boolean
public static "isClientSide"(arg0: $Entity$Type): boolean
public static "getPosition"(arg0: $Entity$Type): $BlockPos
get "bBCenter"(): $Vect3d
get "bB"(): $AABB
get "curPosition"(): $Vect3d
set "prevPosition"(value: $Vect3d$Type)
get "curMotion"(): $Vect3d
set "curPosition"(value: $Vect3d$Type)
get "prevPosition"(): $Vect3d
get "lastTickPosition"(): $Vect3d
set "lastTickPosition"(value: $Vect3d$Type)
get "prevRotation"(): $Rotation
get "curRotation"(): $Rotation
get "nextPosition"(): $Vect3d
set "prevRotation"(value: $Rotation$Type)
set "curRotation"(value: $Rotation$Type)
set "allPositions"(value: $Vect3d$Type)
set "allRotations"(value: $Rotation$Type)
get "serverSide"(): boolean
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
set "motion"(value: $Vect3d$Type)
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEntity$Type = ($ForgeEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEntity_ = $ForgeEntity$Type;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$AbstractSynchedProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INBTSerializable"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"

export class $AbstractSynchedProperty<T> implements $INBTSerializable<(T)> {
readonly "name": string
readonly "comment": string
readonly "defaultValue": T

constructor(arg0: string, arg1: T, arg2: string)

public "resetToConfigValue"(): void
public "getValue"(): T
public "define"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "readFrom"(arg0: $CompoundTag$Type): T
get "value"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSynchedProperty$Type<T> = ($AbstractSynchedProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSynchedProperty_<T> = $AbstractSynchedProperty$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Task" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ServerCommand$Context, $ServerCommand$Context$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Context"
import {$ServerCommand$Arg, $ServerCommand$Arg$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Arg"

export class $ServerCommand$Task {

constructor(arg0: string)

public "executes"(arg0: $Consumer$Type<($ServerCommand$Context$Type)>, arg1: string): $ServerCommand$Task
public "executes"(arg0: $Consumer$Type<($ServerCommand$Context$Type)>, ...arg1: ($ServerCommand$Arg$Type<(any)>)[]): $ServerCommand$Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Task$Type = ($ServerCommand$Task);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Task_ = $ServerCommand$Task$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Sounds" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$SoundsInit, $SoundsInit$Type} from "packages/com/endertech/minecraft/forge/units/$SoundsInit"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $Sounds extends $SoundsInit {
readonly "beep_x1": $RegistryObject<($SoundEvent)>
readonly "beep_x2": $RegistryObject<($SoundEvent)>
readonly "beep_x3": $RegistryObject<($SoundEvent)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sounds$Type = ($Sounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sounds_ = $Sounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$HostileMobDying" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $HostileMobDying extends $LivingSourceBase<($Mob)> {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HostileMobDying$Type = ($HostileMobDying);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HostileMobDying_ = $HostileMobDying$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$GasBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GasBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $AbstractGas$Type, arg1: $Item$Properties$Type)

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "generateFrom"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasBlockItem$Type = ($GasBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasBlockItem_ = $GasBlockItem$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$UnitConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$File, $File$Type} from "packages/java/io/$File"
import {$CharMatcher, $CharMatcher$Type} from "packages/com/google/common/base/$CharMatcher"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$Configuration, $Configuration$Type} from "packages/com/endertech/minecraft/forge/configs/$Configuration"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $UnitConfig extends $Configuration {
static readonly "EXTENSION": string
static readonly "KEY_LIST": string
static readonly "CATEGORY_GENERAL": string
static readonly "CATEGORY_CLIENT": string
static readonly "ALLOWED_CHARS": string
static readonly "DEFAULT_ENCODING": string
static readonly "CATEGORY_SPLITTER": string
static readonly "NEW_LINE": string
static readonly "COMMENT_SEPARATOR": string
static readonly "ALLOWED_PROPERTIES": $CharMatcher
 "defaultEncoding": string
 "isChild": boolean

constructor(arg0: $File$Type)

public "getColorARGB"(arg0: string, arg1: string, arg2: $ColorARGB$Type, arg3: string): $ColorARGB
public static "getColorARGB"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $ColorARGB$Type, arg4: string): $ColorARGB
public static "getStr"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: string, arg4: string): string
public "getStr"(arg0: string, arg1: string, arg2: string, arg3: string): string
public static "buildPath"(arg0: $Path$Type, arg1: string): $Path
public static "buildPath"(arg0: $Path$Type, arg1: string, arg2: string): $Path
public static "alreadyExists"(arg0: $Path$Type, arg1: string): boolean
public static "listCustomConfigs"(arg0: $Path$Type, arg1: $Class$Type<(any)>): $List<($Path)>
public static "readConfigEnabled"(arg0: $UnitConfig$Type, arg1: boolean): boolean
public static "getSyntax"(...arg0: (any)[]): string
public "getPercentage"(arg0: string, arg1: string, arg2: $Percentage$Type, arg3: $FloatBounds$Type, arg4: string): $Percentage
public static "getPercentage"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $Percentage$Type, arg4: $FloatBounds$Type, arg5: string): $Percentage
public static "getKeyValuePair"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $KeyValuePair$Type, arg4: string): $KeyValuePair
public "getKeyValuePair"(arg0: string, arg1: string, arg2: $KeyValuePair$Type, arg3: string): $KeyValuePair
public "getUnitId"(arg0: string, arg1: string, arg2: $UnitId$Type, arg3: string): $UnitId
public static "getUnitId"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $UnitId$Type, arg4: string): $UnitId
public static "getTimeInSeconds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $CommonTime$Interval$Type, arg4: string): $CommonTime$Interval
public "getTimeInSeconds"(arg0: string, arg1: string, arg2: $CommonTime$Interval$Type, arg3: string): $CommonTime$Interval
public static "getStrArray"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[], arg4: string): (string)[]
public "getStrArray"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public static "getBool"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: boolean, arg4: string): boolean
public "getBool"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public static "getInt"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: integer, arg4: $IntBounds$Type, arg5: string): integer
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: $IntBounds$Type, arg4: string): integer
public static "getFloat"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: float, arg4: $FloatBounds$Type, arg5: string): float
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: $FloatBounds$Type, arg4: string): float
public static "in"(arg0: $Path$Type, arg1: string): $UnitConfig
public static "in"(arg0: $Path$Type, arg1: string, arg2: string): $UnitConfig
public "save"(): void
public static "save"(arg0: $UnitConfig$Type): void
public "getTimeInMillis"(arg0: string, arg1: string, arg2: $CommonTime$Interval$Type, arg3: string): $CommonTime$Interval
public static "getTimeInMillis"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $CommonTime$Interval$Type, arg4: string): $CommonTime$Interval
public static "getEnum"<E extends $Enum<(E)>>(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: E, arg4: string): E
public "getEnum"<E extends $Enum<(E)>>(arg0: string, arg1: string, arg2: E, arg3: string): E
public "getConfigDir"(): $Path
public "getIntBounds"(arg0: string, arg1: string, arg2: $IntBounds$Type, arg3: $IntBounds$Type, arg4: string): $IntBounds
public static "getIntBounds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $IntBounds$Type, arg4: $IntBounds$Type, arg5: string): $IntBounds
public static "getFloatBounds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $FloatBounds$Type, arg4: $FloatBounds$Type, arg5: string): $FloatBounds
public "getFloatBounds"(arg0: string, arg1: string, arg2: $FloatBounds$Type, arg3: $FloatBounds$Type, arg4: string): $FloatBounds
public static "getDescription"(arg0: string, arg1: string, arg2: boolean): string
get "configDir"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitConfig$Type = ($UnitConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitConfig_ = $UnitConfig$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$DamageableItem" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$ForgeItem, $ForgeItem$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem"
import {$AnvilUpdateEvent, $AnvilUpdateEvent$Type} from "packages/net/minecraftforge/event/$AnvilUpdateEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DamageableItem extends $ForgeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $DamageableItem$Properties$Type<(any)>)

public static "onAnvilUpdate"(arg0: $AnvilUpdateEvent$Type): void
public "isRepairCostGrow"(): boolean
public static "removeRepairPenaltyFor"(arg0: $ItemStack$Type): void
public "getWearoutPercentage"(arg0: $ItemStack$Type): $Percentage
public "updateDurability"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "canBeDepleted"(): boolean
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "repairCostGrow"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageableItem$Type = ($DamageableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageableItem_ = $DamageableItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump$Tile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ChameleonBlockTile, $ChameleonBlockTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ChameleonBlockTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Pump$HopperAnimation, $Pump$HopperAnimation$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump$HopperAnimation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ITickableUnit, $ITickableUnit$Type} from "packages/com/endertech/minecraft/forge/units/$ITickableUnit"

export class $Pump$Tile extends $ChameleonBlockTile implements $ITickableUnit {
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getUpdateInterval"(): $GameTime
public "onUpdate"(): void
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "getWorldLevel"(): $Level
public "getHopperAnimation"(): $Pump$HopperAnimation
public "setRemoved"(): void
public "isActive"(): boolean
public "exists"(): boolean
public "tick"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
get "updateInterval"(): $GameTime
get "worldLevel"(): $Level
get "hopperAnimation"(): $Pump$HopperAnimation
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pump$Tile$Type = ($Pump$Tile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pump$Tile_ = $Pump$Tile$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$Namespace" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Namespace {
readonly "id": string


public static "of"(arg0: string): $Namespace
public "resolve"(arg0: string): string
public "location"(arg0: string): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Namespace$Type = ($Namespace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Namespace_ = $Namespace$Type;
}}
declare module "packages/com/endertech/common/$IntBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $IntBounds implements $IBounds<(integer)>, $Iterable<(integer)> {
static readonly "ZERO": $IntBounds
static readonly "INTEGER": $IntBounds
static readonly "INTEGER_POSITIVE": $IntBounds

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "enclose"(arg0: integer): integer
public "unite"(arg0: $IBounds$Type<(integer)>): $IntBounds
public "interpolationFactor"(arg0: integer): float
public "randomFits"(arg0: integer): boolean
public "randomBetween"(): integer
public "corners"(arg0: integer): boolean
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "iterator"(): $Iterator<(integer)>
public static "of"(arg0: integer): $IntBounds
public static "of"(arg0: $IBounds$Type<(any)>): $IntBounds
public "offset"(arg0: integer): $IntBounds
public "reduce"(arg0: integer): $IntBounds
public static "between"(arg0: integer, arg1: integer): $IntBounds
public "getMax"(): integer
public "fit"(arg0: $MinMaxBounds$Ints$Type): $IntBounds
public "encloses"(arg0: integer): boolean
public "extend"(arg0: integer): $IntBounds
public "within"(arg0: $IBounds$Type<(integer)>): boolean
public "interpolateTo"(arg0: $IBounds$Type<(integer)>): $CommonMath$Interpolation<(integer)>
public "spliterator"(): $Spliterator<(integer)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<integer>;
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBounds$Type = ($IntBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntBounds_ = $IntBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$Respirator" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RelatedUnit, $RelatedUnit$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnit"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export class $Respirators$Respirator extends $RelatedUnit implements $IStorageItem {
readonly "durability": integer

constructor(arg0: $UnitConfig$Type, arg1: $UnitId$Type, arg2: integer, arg3: string)

public "isFunctional"(arg0: $ItemStack$Type): boolean
public "getInitialCapacity"(arg0: $ItemStack$Type): integer
public "getTagName"(): string
public "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "m_7373_"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getContent"(arg0: $ItemStack$Type): $IStorage$Content
public "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "installFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "removeFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "fill"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "free"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "tagName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Respirators$Respirator$Type = ($Respirators$Respirator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Respirators$Respirator_ = $Respirators$Respirator$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$ChunkPollution$Influence" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChunkPollution$Influence extends $Enum<($ChunkPollution$Influence)> {
static readonly "ALWAYS": $ChunkPollution$Influence
static readonly "CLOUD": $ChunkPollution$Influence
static readonly "NEVER": $ChunkPollution$Influence


public static "values"(): ($ChunkPollution$Influence)[]
public static "valueOf"(arg0: string): $ChunkPollution$Influence
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkPollution$Influence$Type = (("always") | ("cloud") | ("never")) | ($ChunkPollution$Influence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkPollution$Influence_ = $ChunkPollution$Influence$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PollutedWater extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "isPollutedWith"(arg0: $Pollutant$Type<(any)>, arg1: $BlockState$Type): boolean
public static "isPollutedWith"(arg0: $Pollutant$Type<(any)>, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public static "isSource"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public static "findPollutant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Collection$Type<($Pollutant$Type<(any)>)>): $Optional<($Pollutant<(any)>)>
public "isCleanWaterSource"(arg0: $BlockState$Type): boolean
public "tryPollute"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$Type = ($PollutedWater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater_ = $PollutedWater$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Container$Tile, $Container$Tile$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Tile"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Chimney$SideType, $Chimney$SideType$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney$SideType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Chimney$Properties, $Chimney$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney$Properties"

export class $Chimney extends $Container implements $ITiledBlock<($Container$Tile)> {
static readonly "TOP": $BooleanProperty
static readonly "NORTH": $EnumProperty<($Chimney$SideType)>
static readonly "EAST": $EnumProperty<($Chimney$SideType)>
static readonly "SOUTH": $EnumProperty<($Chimney$SideType)>
static readonly "WEST": $EnumProperty<($Chimney$SideType)>
static readonly "SIDES": $Map<($Direction), ($EnumProperty<($Chimney$SideType)>)>
readonly "isNarrow": boolean
readonly "radius": integer
readonly "wallThickness": integer
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Chimney$Properties$Type<(any)>)

public "getTileClass"(): $Class<($Container$Tile)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($Container$Tile)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "tileClass"(): $Class<($Container$Tile)>
get "type"(): $ISmokeContainer$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chimney$Type = ($Chimney);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chimney_ = $Chimney$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Properties" {
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Pollutant$Properties<T extends $Pollutant$Properties<(T)>> extends $ForgeBlock$Properties<(T)> {
readonly "mapColor": $MapColor
 "textColor": $ChatFormatting
 "criticalAmount": integer
 "concentrationAltitude": integer
 "motionVelocity": float
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public "criticalAmount"(arg0: integer): T
public "concentrationAltitude"(arg0: integer): T
public "motionVelocity"(arg0: float): T
public "textColor"(arg0: $ChatFormatting$Type): T
public static "of"(arg0: string, arg1: $MapColor$Type): $Pollutant$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutant$Properties$Type<T> = ($Pollutant$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutant$Properties_<T> = $Pollutant$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$IModelWrapperFactory" {
import {$BakedModelWrapper, $BakedModelWrapper$Type} from "packages/net/minecraftforge/client/model/$BakedModelWrapper"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"

export interface $ItemModel$IModelWrapperFactory<T extends $BakedModel> {

 "create"(arg0: $BakedModel$Type): $BakedModelWrapper<(T)>

(arg0: $BakedModel$Type): $BakedModelWrapper<(T)>
}

export namespace $ItemModel$IModelWrapperFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$IModelWrapperFactory$Type<T> = ($ItemModel$IModelWrapperFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$IModelWrapperFactory_<T> = $ItemModel$IModelWrapperFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$Spread" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameWorld$Directions, $GameWorld$Directions$Type} from "packages/com/endertech/minecraft/forge/world/$GameWorld$Directions"

export class $Spread {
static readonly "ANY_DENSITY_DELTA": integer
readonly "pollutant": $Pollutant<(any)>
readonly "level": $ServerLevel
readonly "sourcePos": $BlockPos


public "inMotionFacing"(): $Spread
public "overLedge"(): $Spread
public "sourceChanged"(): boolean
public "targetChanged"(): boolean
public "getTargetState"(): $Optional<($BlockState)>
public "getTargetPos"(): $Optional<($BlockPos)>
public "getSourceState"(): $BlockState
public "getSourcePos"(): $BlockPos
public "inDirectionForced"(arg0: $Direction$Type): $Spread
public "inDirectionsForced"(arg0: $Supplier$Type<($GameWorld$Directions$Type)>): $Spread
public "applyTarget"(): boolean
public "applySource"(): boolean
public "apply"(): boolean
public "to"(arg0: $BlockPos$Type, arg1: integer): $Spread
public static "from"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Pollutant$Type<(any)>): $Spread
public "in"(arg0: $Optional$Type<($Direction$Type)>, arg1: integer): $Spread
public "in"(arg0: $Direction$Type, arg1: integer): $Spread
public "completed"(): boolean
public "setSource"(arg0: $BlockState$Type): void
public "around"(arg0: integer): $Spread
get "targetState"(): $Optional<($BlockState)>
get "targetPos"(): $Optional<($BlockPos)>
get "sourceState"(): $BlockState
get "sourcePos"(): $BlockPos
set "source"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spread$Type = ($Spread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spread_ = $Spread$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$ForgeEmitter$Properties" {
import {$IEmitter$Type, $IEmitter$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$RelatedUnit$Properties, $RelatedUnit$Properties$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnit$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"

export class $ForgeEmitter$Properties<T extends $ForgeEmitter$Properties<(T)>> extends $RelatedUnit$Properties<(T)> {
 "type": $IEmitter$Type
 "activeTag": string
 "fuelTag": string
 "identityTag": $KeyValuePair
 "relatedBlocks": (string)[]
 "enumIdAsRelatedBlocks": boolean
 "enumIdAsTag": boolean
 "id": $UnitId


public "relatedBlocks"(...arg0: (string)[]): T
public "activeTag"(arg0: string): T
public "enumIdAsTag"(): T
public "activeStateHardcoded"(): T
public "identityTag"(arg0: $KeyValuePair$Type): T
public "fuelTag"(arg0: string): T
public "stateActive"(): T
public "emptyToEnumId"(arg0: $Enum$Type<(any)>, arg1: boolean): T
public "stateLit"(): T
public "enumIdAsRelatedBlocks"(): T
public "statePowered"(): T
public "type"(arg0: $IEmitter$Type$Type): T
public static "with"(arg0: $IEmitter$Type$Type): $ForgeEmitter$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEmitter$Properties$Type<T> = ($ForgeEmitter$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEmitter$Properties_<T> = $ForgeEmitter$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$Respirator" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$EquipmentItem, $EquipmentItem$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Respirator extends $EquipmentItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $EquipmentItem$Properties$Type<(any)>)

public static "get"(arg0: $ItemStack$Type): $Equipable
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Respirator$Type = ($Respirator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Respirator_ = $Respirator$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$Rope" {
import {$SynchedListProperty, $SynchedListProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedListProperty"
import {$Rope$Properties, $Rope$Properties$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Rope$Properties"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IHaveSynchedProperties, $IHaveSynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$IHaveSynchedProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SynchedProperties, $SynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedProperties"
import {$SynchedDoubleProperty, $SynchedDoubleProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedDoubleProperty"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$SynchedEnumProperty, $SynchedEnumProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedEnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SynchedIntProperty, $SynchedIntProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedIntProperty"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"
import {$SynchedBoolProperty, $SynchedBoolProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedBoolProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Rope implements $IHaveSynchedProperties {
static readonly "LENGTH_BOUNDS": $IntBounds
static readonly "WIDTH_BOUNDS": $FloatBounds
static readonly "ELASTICITY_BOUNDS": $FloatBounds
static readonly "BOUNCE_REDUCTION_BOUNDS": $FloatBounds
readonly "segmentsAmount": integer

constructor(arg0: $Rope$Properties$Type<(any)>)

public "getSynchedProperties"(): $SynchedProperties
public "getElasticity"(): float
public "getBounceReduction"(): float
public "getTensionForce"(arg0: float, arg1: float): float
public "getRopeStrength"(): float
public "getLengthBounds"(arg0: $LivingEntity$Type, arg1: $Entity$Type): $FloatBounds
public "getMinLength"(arg0: $LivingEntity$Type, arg1: $Entity$Type): float
public "getMaxLength"(): integer
public "getColor"(): $ColorARGB
public "getWidth"(): float
public "synchedProperty"<E extends $Enum<(E)>>(arg0: string, arg1: E, arg2: $Predicate$Type<(E)>, arg3: string): $SynchedEnumProperty<(E)>
public "synchedProperty"(arg0: string, arg1: (string)[], arg2: $Predicate$Type<(string)>, arg3: string): $SynchedListProperty
public "synchedProperty"(arg0: string, arg1: float, arg2: $FloatBounds$Type, arg3: string): $SynchedDoubleProperty
public "synchedProperty"(arg0: string, arg1: boolean, arg2: string): $SynchedBoolProperty
public "synchedProperty"(arg0: string, arg1: integer, arg2: $IntBounds$Type, arg3: string): $SynchedIntProperty
get "synchedProperties"(): $SynchedProperties
get "elasticity"(): float
get "bounceReduction"(): float
get "ropeStrength"(): float
get "maxLength"(): integer
get "color"(): $ColorARGB
get "width"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rope$Type = ($Rope);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rope_ = $Rope$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$BlocksInit" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlocksInit extends $RegistryObjectsInit<($Block)> {

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlocksInit$Type = ($BlocksInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlocksInit_ = $BlocksInit$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/config/$LivingEntityImpactList$EntityEffect" {
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEntityImpactList$EntityEffect {
readonly "effect": $MobEffect
readonly "threshold": $Percentage
readonly "duration": $CommonTime$Interval

constructor(arg0: $MobEffect$Type, arg1: $Percentage$Type, arg2: $CommonTime$Interval$Type)

public "applyOn"(arg0: $LivingEntity$Type, arg1: $Percentage$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityImpactList$EntityEffect$Type = ($LivingEntityImpactList$EntityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityImpactList$EntityEffect_ = $LivingEntityImpactList$EntityEffect$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$IMessure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommonTime$IMessure {

 "getCapacity"(): long

(): long
}

export namespace $CommonTime$IMessure {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$IMessure$Type = ($CommonTime$IMessure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$IMessure_ = $CommonTime$IMessure$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$UnitProperties" {
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $UnitProperties<T extends $UnitProperties<(T)>> extends $BaseProperties<(T)> {
readonly "name": string


public static "of"(arg0: string): $UnitProperties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitProperties$Type<T> = ($UnitProperties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitProperties_<T> = $UnitProperties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$DataCollector$ClientDataProviderFactory, $DataCollector$ClientDataProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$ClientDataProviderFactory"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$GatherDataEvent, $GatherDataEvent$Type} from "packages/net/minecraftforge/data/event/$GatherDataEvent"
import {$DataCollector$ItemTagsProviderFactory, $DataCollector$ItemTagsProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$ItemTagsProviderFactory"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$DataProvider$Factory, $DataProvider$Factory$Type} from "packages/net/minecraft/data/$DataProvider$Factory"
import {$DataCollector$BlockTagsProviderFactory, $DataCollector$BlockTagsProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$BlockTagsProviderFactory"
import {$DataCollector$LanguageProviderFactory, $DataCollector$LanguageProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$LanguageProviderFactory"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"

export class $DataCollector {
readonly "modId": string
readonly "generator": $DataGenerator
readonly "output": $PackOutput
readonly "lookupProvider": $CompletableFuture<($HolderLookup$Provider)>
readonly "fileHelper": $ExistingFileHelper

constructor(arg0: $AbstractForgeMod$Type, arg1: $GatherDataEvent$Type)

public "addBlockAndItemTags"(arg0: $DataCollector$BlockTagsProviderFactory$Type<(any)>, arg1: $DataCollector$ItemTagsProviderFactory$Type<(any)>): $DataCollector
public "addRecipes"(arg0: $DataProvider$Factory$Type<(any)>): $DataCollector
public "addLootTables"(arg0: $DataProvider$Factory$Type<(any)>): $DataCollector
public "addBlockStates"(arg0: $DataCollector$ClientDataProviderFactory$Type<(any)>): $DataCollector
public "addItemModels"(arg0: $DataCollector$ClientDataProviderFactory$Type<(any)>): $DataCollector
public "addLanguageUS"(arg0: $DataCollector$LanguageProviderFactory$Type<(any)>): $DataCollector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$Type = ($DataCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector_ = $DataCollector$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$Interval" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CommonTime$IMessure, $CommonTime$IMessure$Type} from "packages/com/endertech/common/$CommonTime$IMessure"
import {$CommonTime$Stamp, $CommonTime$Stamp$Type} from "packages/com/endertech/common/$CommonTime$Stamp"

export class $CommonTime$Interval implements $Comparable<($CommonTime$Interval)> {
static readonly "ZERO": $CommonTime$Interval
static readonly "MILLISECONDS_IN_SECOND": integer
static readonly "SECONDS_IN_MINUTE": integer
static readonly "MINUTES_IN_HOUR": integer
static readonly "HOURS_IN_DAY": integer
static readonly "SECONDS_IN_HOUR": integer
static readonly "SECONDS_IN_DAY": integer


public "inSeconds"(): double
public "inMillis"(): long
public static "leftTo"(arg0: $CommonTime$Stamp$Type): $CommonTime$Interval
public static "passedFrom"(arg0: $CommonTime$Stamp$Type): $CommonTime$Interval
public "moreThan"(arg0: $CommonTime$Interval$Type): boolean
public "inMinutes"(): double
public "inHours"(): double
public "inDays"(): double
public "substract"(arg0: $CommonTime$Interval$Type): $CommonTime$Interval
public "add"(arg0: $CommonTime$Interval$Type): $CommonTime$Interval
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CommonTime$Interval$Type): integer
public static "of"(arg0: $CommonTime$IMessure$Type, arg1: double): $CommonTime$Interval
public "in"(arg0: $CommonTime$IMessure$Type): double
public static "millis"(arg0: long): $CommonTime$Interval
public "mult"(arg0: double): $CommonTime$Interval
public static "days"(arg0: integer): $CommonTime$Interval
public static "hours"(arg0: double): $CommonTime$Interval
public static "minutes"(arg0: double): $CommonTime$Interval
public static "seconds"(arg0: double): $CommonTime$Interval
public "lessThan"(arg0: $CommonTime$Interval$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$Interval$Type = ($CommonTime$Interval);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$Interval_ = $CommonTime$Interval$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Configuration" {
import {$Property$Type, $Property$Type$Type} from "packages/com/endertech/minecraft/forge/configs/$Property$Type"
import {$ConfigCategory, $ConfigCategory$Type} from "packages/com/endertech/minecraft/forge/configs/$ConfigCategory"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CharMatcher, $CharMatcher$Type} from "packages/com/google/common/base/$CharMatcher"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/com/endertech/minecraft/forge/configs/$Property"

export class $Configuration {
static readonly "CATEGORY_GENERAL": string
static readonly "CATEGORY_CLIENT": string
static readonly "ALLOWED_CHARS": string
static readonly "DEFAULT_ENCODING": string
static readonly "CATEGORY_SPLITTER": string
static readonly "NEW_LINE": string
static readonly "COMMENT_SEPARATOR": string
static readonly "ALLOWED_PROPERTIES": $CharMatcher
 "defaultEncoding": string
 "isChild": boolean

constructor()
constructor(arg0: $File$Type, arg1: string)
constructor(arg0: $File$Type)
constructor(arg0: $File$Type, arg1: boolean)
constructor(arg0: $File$Type, arg1: string, arg2: boolean)

public "getDefinedConfigVersion"(): string
public "getLoadedConfigVersion"(): string
public "addCustomCategoryComment"(arg0: string, arg1: string): void
public "setCategoryConfigEntryClass"(arg0: string, arg1: $Class$Type<(any)>): $Configuration
public "hasCategory"(arg0: string): boolean
public "hasKey"(arg0: string, arg1: string): boolean
public "removeCategory"(arg0: $ConfigCategory$Type): void
public "setCategoryComment"(arg0: string, arg1: string): $Configuration
public "setCategoryLanguageKey"(arg0: string, arg1: string): $Configuration
public "setCategoryRequiresWorldRestart"(arg0: string, arg1: boolean): $Configuration
public "setCategoryRequiresMcRestart"(arg0: string, arg1: boolean): $Configuration
public "setCategoryPropertyOrder"(arg0: string, arg1: $List$Type<(string)>): $Configuration
public "renameProperty"(arg0: string, arg1: string, arg2: string): boolean
public "moveProperty"(arg0: string, arg1: string, arg2: string): boolean
public "copyCategoryProps"(arg0: $Configuration$Type, arg1: (string)[]): void
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[]): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[], arg5: string): (string)[]
public "getConfigFile"(): $File
public "getCategoryNames"(): $Set<(string)>
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[]): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: double): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[]): $Property
public "get"(arg0: string, arg1: string, arg2: boolean, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: boolean): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string, arg4: boolean, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: integer): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: string): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: double, arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: double, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: boolean, arg5: integer, arg6: $Pattern$Type): $Property
public "toString"(): string
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: string): boolean
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string, arg6: string): integer
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string): integer
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: float, arg4: float, arg5: string, arg6: string): float
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: float, arg4: float, arg5: string): float
public "load"(): void
public "save"(): void
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[], arg5: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $Pattern$Type): string
public "getCategory"(arg0: string): $ConfigCategory
public "hasChanged"(): boolean
get "definedConfigVersion"(): string
get "loadedConfigVersion"(): string
get "configFile"(): $File
get "categoryNames"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$Type = ($Configuration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration_ = $Configuration$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractImpacts" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"

export class $AbstractImpacts implements $IPostInit, $IHaveConfig {

constructor(arg0: $UnitConfig$Type)

public "getConfig"(): $UnitConfig
public "onPostInit"(): void
public "saveConfig"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getClassCategory"(): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "getClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractImpacts$Type = ($AbstractImpacts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractImpacts_ = $AbstractImpacts$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$AnimalFeeding" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Animal, $Animal$Type} from "packages/net/minecraft/world/entity/animal/$Animal"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AnimalFeeding extends $LivingSourceBase<($Animal)> {

constructor(arg0: $UnitConfig$Type)

public "emitFrom"(arg0: $Animal$Type, arg1: $ItemStack$Type, arg2: integer): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalFeeding$Type = ($AnimalFeeding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalFeeding_ = $AnimalFeeding$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$INetSerializable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $INetSerializable<T> {

 "writeTo"(arg0: $FriendlyByteBuf$Type): $FriendlyByteBuf
 "readFrom"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $INetSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetSerializable$Type<T> = ($INetSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetSerializable_<T> = $INetSerializable$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Respirators" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Respirators$RespiratorEffect, $Respirators$RespiratorEffect$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$RespiratorEffect"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Respirators$Respirator, $Respirators$Respirator$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$Respirator"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RelatedUnitsInit, $RelatedUnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnitsInit"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Respirators$BuiltIn, $Respirators$BuiltIn$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$BuiltIn"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Respirators extends $RelatedUnitsInit<($Respirators$Respirator), ($Respirators$BuiltIn)> {

constructor(arg0: $AbstractForgeMod$Type)

public "createDefaultUnitFrom"(arg0: $UnitConfig$Type, arg1: $Respirators$BuiltIn$Type): $Respirators$Respirator
public "getEffectDurationFor"(arg0: $Respirators$Respirator$Type, arg1: $ItemStack$Type, arg2: integer): $CommonTime$Interval
public "findOn"(arg0: $LivingEntity$Type, arg1: boolean): $Optional<($Pair<($ItemStack), ($Respirators$Respirator)>)>
public "updateEffectFor"(arg0: $LivingEntity$Type, arg1: integer): void
public "getEffect"(): $Respirators$RespiratorEffect
get "effect"(): $Respirators$RespiratorEffect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Respirators$Type = ($Respirators);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Respirators_ = $Respirators$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IEmitter$Type extends $Enum<($IEmitter$Type)> {
static readonly "BLOCK": $IEmitter$Type
static readonly "TILE": $IEmitter$Type
static readonly "ENTITY": $IEmitter$Type
static readonly "FUEL": $IEmitter$Type


public "isTile"(): boolean
public "isEntity"(): boolean
public "isBlock"(): boolean
public "isFuel"(): boolean
public static "values"(): ($IEmitter$Type)[]
public static "valueOf"(arg0: string): $IEmitter$Type
public static "getByName"(arg0: string): $Optional<($IEmitter$Type)>
public static "getFrom"(arg0: $UnitConfig$Type, arg1: string, arg2: $IEmitter$Type$Type, arg3: string): $IEmitter$Type
get "tile"(): boolean
get "entity"(): boolean
get "block"(): boolean
get "fuel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmitter$Type$Type = (("fuel") | ("tile") | ("block") | ("entity")) | ($IEmitter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmitter$Type_ = $IEmitter$Type$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$Launcher$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $Launcher$Properties<T extends $Launcher$Properties<(T)>> extends $DamageableItem$Properties<(T)> {
 "reelingSpeed": float
 "launchVelocity": float
 "jumpBoostStrength": float
 "tarzanJumpStrength": float
 "shooterWeightFactor": float
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public "launchVelocity"(arg0: float): T
public "reelingSpeed"(arg0: float): T
public "jumpBoost"(arg0: float): T
public "tarzanJump"(arg0: float): T
public "shooterWeightFactor"(arg0: float): T
public static "of"(arg0: string): $Launcher$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Launcher$Properties$Type<T> = ($Launcher$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Launcher$Properties_<T> = $Launcher$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Entities" {
import {$GasEntity, $GasEntity$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$GasEntity"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$EntitiesInit, $EntitiesInit$Type} from "packages/com/endertech/minecraft/forge/units/$EntitiesInit"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$PurifiedAir, $PurifiedAir$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$PurifiedAir"

export class $Entities extends $EntitiesInit {
readonly "gas": $RegistryObject<($EntityType<($GasEntity)>)>
readonly "purifiedAir": $RegistryObject<($EntityType<($PurifiedAir)>)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Entities$Type = ($Entities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Entities_ = $Entities$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$EntitiesInit" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"

export class $EntitiesInit extends $RegistryObjectsInit<($EntityType<(any)>)> {

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitiesInit$Type = ($EntitiesInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitiesInit_ = $EntitiesInit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Rotation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rotation {
static readonly "ZERO": $Rotation
readonly "pitch": float
readonly "yaw": float

constructor(arg0: float, arg1: float)

public "substract"(arg0: $Rotation$Type): $Rotation
public "add"(arg0: $Rotation$Type): $Rotation
public "approx"(arg0: float, arg1: $Rotation$Type): $Rotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotation$Type = ($Rotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotation_ = $Rotation$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IPollutant" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IPollutant$Type, $IPollutant$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPollutant {

 "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
 "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
 "pumpEntitiesAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
 "canPassThrough"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Direction$Type): boolean
 "getCarriedPollutionAmount"(arg0: $BlockState$Type): integer
 "getPollutionCapacity"(): integer
 "affectsPollutionLevel"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
 "getPollutantType"(): $IPollutant$Type
 "push"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
 "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IPollutant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPollutant$Type = ($IPollutant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPollutant_ = $IPollutant$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Data" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export class $PregeneratedClouds$Data extends $Record {

constructor(size: $IntBounds$Type, rarity: integer, persistence: boolean)

public "persistence"(): boolean
public "canGenerate"(arg0: $Random$Type): boolean
public "rarity"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): $IntBounds
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PregeneratedClouds$Data$Type = ($PregeneratedClouds$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PregeneratedClouds$Data_ = $PregeneratedClouds$Data$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$RespiratorEffect" {
import {$ForgeEffect, $ForgeEffect$Type} from "packages/com/endertech/minecraft/forge/entities/$ForgeEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Respirators$RespiratorEffect extends $ForgeEffect {


public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Respirators$RespiratorEffect$Type = ($Respirators$RespiratorEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Respirators$RespiratorEffect_ = $Respirators$RespiratorEffect$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$GameWorld$Directions" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export class $GameWorld$Directions {
static readonly "CLOCKWISE_HORIZONTALS": ($Direction)[]

constructor()

public "shuffledHorizontals"(arg0: $Random$Type): $GameWorld$Directions
public "shuffledHorizontals"(): $GameWorld$Directions
public "verticals"(): $GameWorld$Directions
public "toStream"(): $Stream<($Direction)>
public "horizontals"(): $GameWorld$Directions
public "north"(): $GameWorld$Directions
public "south"(): $GameWorld$Directions
public "west"(): $GameWorld$Directions
public "east"(): $GameWorld$Directions
public "add"(...arg0: ($Direction$Type)[]): $GameWorld$Directions
public "add"(arg0: $Direction$Type): $GameWorld$Directions
public "remove"(...arg0: ($Direction$Type)[]): $GameWorld$Directions
public "toArray"(): ($Direction)[]
public "toList"(): $List<($Direction)>
public static "of"(): $GameWorld$Directions
public "shuffle"(arg0: $Random$Type): $GameWorld$Directions
public "shuffle"(): $GameWorld$Directions
public "up"(): $GameWorld$Directions
public "all"(): $GameWorld$Directions
public "down"(): $GameWorld$Directions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameWorld$Directions$Type = ($GameWorld$Directions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameWorld$Directions_ = $GameWorld$Directions$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$GameTime" {
import {$CommonTime$IMessure, $CommonTime$IMessure$Type} from "packages/com/endertech/common/$CommonTime$IMessure"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GameTime {
static readonly "MILLISECONDS_IN_SERVER_TICK": integer
static readonly "SERVER_TICKS": $CommonTime$IMessure
static readonly "TICKS_PER_SECOND": integer


public static "quaterSecond"(): $GameTime
public "pastIn"(arg0: $Level$Type): boolean
public static "fromServerTicks"(arg0: long): $CommonTime$Interval
public static "halfSecond"(): $GameTime
public static "inServerTicks"(arg0: $CommonTime$Interval$Type): long
public "noShift"(): $GameTime
public "pastFor"(arg0: $Entity$Type): boolean
public static "second"(): $GameTime
public static "time"(arg0: $CommonTime$Interval$Type): $GameTime
public "mult"(arg0: integer): $GameTime
public static "seconds"(arg0: integer): $GameTime
public static "seconds"(arg0: float): $GameTime
public "getInterval"(): $CommonTime$Interval
public static "ticks"(arg0: long, arg1: integer): $GameTime
public static "ticks"(arg0: long): $GameTime
get "interval"(): $CommonTime$Interval
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameTime$Type = ($GameTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameTime_ = $GameTime$Type;
}}
declare module "packages/com/endertech/minecraft/forge/entities/$ForgeEffect" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ForgeEffect extends $MobEffect {


public "getUpdateInterval"(): integer
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "createInstance"(arg0: $CommonTime$Interval$Type, arg1: boolean): $MobEffectInstance
get "updateInterval"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEffect$Type = ($ForgeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEffect_ = $ForgeEffect$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilterFrame$Properties, $FilterFrame$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Properties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ISmokeContainer, $ISmokeContainer$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$FilterFrame$Condition, $FilterFrame$Condition$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Condition"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$FilterFrame$BlockTile, $FilterFrame$BlockTile$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$BlockTile"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterFrame$AirPurifier, $FilterFrame$AirPurifier$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$AirPurifier"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IFilterFrame, $IFilterFrame$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IFilterFrame"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IWaterLoggable, $IWaterLoggable$Type} from "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $FilterFrame extends $ForgeBlock implements $ITiledBlock<($FilterFrame$BlockTile)>, $IFilterFrame<($FilterFrame$BlockTile)>, $ISmokeContainer, $IWaterLoggable {
static readonly "SATURATION": $EnumProperty<($FilterFrame$Condition)>
static readonly "WALL_THICKNESS": float
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $UnitConfig$Type, arg1: $FilterFrame$Properties$Type<(any)>)

public "getTileClass"(): $Class<($FilterFrame$BlockTile)>
public "hasFilterMaterialInstalled"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "createTile"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $FilterFrame$BlockTile
public "getAirPurifier"(): $FilterFrame$AirPurifier
public "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $FilterFrame$BlockTile$Type): void
public "getInitialCapacity"(arg0: $FilterFrame$BlockTile$Type): integer
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "fill"(arg0: $FilterFrame$BlockTile$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "getType"(): $ISmokeContainer$Type
public "getContent"(arg0: $FilterFrame$BlockTile$Type): $IStorage$Content
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getColor"(): $ColorARGB
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($FilterFrame$BlockTile)>
public "isChimney"(): boolean
public "isVent"(): boolean
public "isPump"(): boolean
public "isPipe"(): boolean
public "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
public "is"(arg0: $ISmokeContainer$Type$Type): boolean
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $FilterFrame$BlockTile$Type): void
public "installFiltersFor"(arg0: $FilterFrame$BlockTile$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "removeFiltersFor"(arg0: $FilterFrame$BlockTile$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "free"(arg0: $FilterFrame$BlockTile$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "tileClass"(): $Class<($FilterFrame$BlockTile)>
get "airPurifier"(): $FilterFrame$AirPurifier
get "type"(): $ISmokeContainer$Type
get "color"(): $ColorARGB
get "chimney"(): boolean
get "vent"(): boolean
get "pump"(): boolean
get "pipe"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$Type = ($FilterFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame_ = $FilterFrame$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$Emitter$Properties" {
import {$IEmitter$Type, $IEmitter$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$WorldEvents$Alignment, $WorldEvents$Alignment$Type} from "packages/com/endertech/minecraft/mods/adpother/events/$WorldEvents$Alignment"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Emitter, $Emitter$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$Emitter"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Emissions, $Emissions$Type} from "packages/com/endertech/minecraft/mods/adpother/emissions/$Emissions"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SourceBase$Properties, $SourceBase$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase$Properties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$ForgeEmitter$Properties, $ForgeEmitter$Properties$Type} from "packages/com/endertech/minecraft/forge/units/$ForgeEmitter$Properties"

export class $Emitter$Properties<T extends $Emitter$Properties<(T)>> extends $SourceBase$Properties<(T)> {
 "factory": $Optional<($BiFunction<($UnitConfig), ($Emitter$Properties<(any)>), ($Emitter)>)>
 "emitterProps": $ForgeEmitter$Properties<(any)>
 "factor": float
 "emissions": $Emissions
 "comment": string
 "category": string
 "id": $UnitId


public "relatedBlocks"(...arg0: (string)[]): T
public "emitterProps"(arg0: $ForgeEmitter$Properties$Type<(any)>): T
public "activeTag"(arg0: string): T
public "enumIdAsTag"(): T
public "activeStateHardcoded"(): T
public "identityTag"(arg0: $KeyValuePair$Type): T
public "fuelTag"(arg0: string): T
public "stateActive"(): T
public "emptyToEnumId"(arg0: $Enum$Type<(any)>, arg1: boolean): T
public "stateLit"(): T
public "activeProperty"(arg0: string): T
public "enumIdAsRelatedBlocks"(): T
public "statePowered"(): T
public "customFactory"(arg0: $BiFunction$Type<($UnitConfig$Type), ($Emitter$Properties$Type<(any)>), ($Emitter$Type)>): T
public static "entity"(arg0: string, arg1: $WorldEvents$Alignment$Type): $Emitter$Properties<(any)>
public static "block"(): $Emitter$Properties<(any)>
public static "with"(arg0: $IEmitter$Type$Type): $Emitter$Properties<(any)>
public "metadata"(arg0: string): T
public static "fuel"(arg0: string): $Emitter$Properties<(any)>
public static "fuel"(arg0: string, arg1: float): $Emitter$Properties<(any)>
public static "tile"(arg0: $BooleanProperty$Type): $Emitter$Properties<(any)>
public static "tile"(arg0: string): $Emitter$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emitter$Properties$Type<T> = ($Emitter$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emitter$Properties_<T> = $Emitter$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$IHaveSynchedProperties" {
import {$SynchedDoubleProperty, $SynchedDoubleProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedDoubleProperty"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$SynchedListProperty, $SynchedListProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedListProperty"
import {$SynchedEnumProperty, $SynchedEnumProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedEnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SynchedIntProperty, $SynchedIntProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedIntProperty"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$SynchedBoolProperty, $SynchedBoolProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedBoolProperty"
import {$SynchedProperties, $SynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedProperties"

export interface $IHaveSynchedProperties {

 "synchedProperty"<E extends $Enum<(E)>>(arg0: string, arg1: E, arg2: $Predicate$Type<(E)>, arg3: string): $SynchedEnumProperty<(E)>
 "synchedProperty"(arg0: string, arg1: (string)[], arg2: $Predicate$Type<(string)>, arg3: string): $SynchedListProperty
 "synchedProperty"(arg0: string, arg1: float, arg2: $FloatBounds$Type, arg3: string): $SynchedDoubleProperty
 "synchedProperty"(arg0: string, arg1: boolean, arg2: string): $SynchedBoolProperty
 "synchedProperty"(arg0: string, arg1: integer, arg2: $IntBounds$Type, arg3: string): $SynchedIntProperty
 "getSynchedProperties"(): $SynchedProperties

(arg0: string, arg1: E, arg2: $Predicate$Type<(E)>, arg3: string): $SynchedEnumProperty<(E)>
}

export namespace $IHaveSynchedProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveSynchedProperties$Type = ($IHaveSynchedProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveSynchedProperties_ = $IHaveSynchedProperties$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Tile" {
import {$ChameleonBlockTile, $ChameleonBlockTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ChameleonBlockTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Container$Tile extends $ChameleonBlockTile {
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$Tile$Type = ($Container$Tile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Container$Tile_ = $Container$Tile$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$PlayerDying" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $PlayerDying extends $LivingSourceBase<($Player)> {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDying$Type = ($PlayerDying);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDying_ = $PlayerDying$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$ChunkBounds" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$WorldBounds, $WorldBounds$Type} from "packages/com/endertech/minecraft/forge/world/$WorldBounds"

export class $ChunkBounds extends $WorldBounds {
static readonly "WIDTH": integer
static readonly "HALF_WIDTH": integer
static readonly "SQUARE": integer


public static "from"(arg0: $LevelChunk$Type, arg1: $IntBounds$Type): $ChunkBounds
public static "from"(arg0: $LevelChunk$Type): $ChunkBounds
public static "from"(arg0: $LevelHeightAccessor$Type, arg1: $ChunkPos$Type): $ChunkBounds
public static "from"(arg0: $ChunkPos$Type, arg1: $IntBounds$Type): $ChunkBounds
public "getCapacity"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBounds$Type = ($ChunkBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBounds_ = $ChunkBounds$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UnitsInit, $UnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$UnitsInit"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $RegistryObjectsInit<O> extends $UnitsInit<(O)> {

constructor(arg0: $AbstractForgeMod$Type, arg1: $IForgeRegistry$Type<(O)>)

public "register"<U extends O, RO>(arg0: $RegistryObject$Type<(RO)>, arg1: $BiFunction$Type<(string), (RO), (U)>): $RegistryObject<(U)>
public "register"<U extends O>(arg0: string, arg1: $Supplier$Type<(U)>): $RegistryObject<(U)>
public "register"<U extends O>(arg0: string, arg1: $Function$Type<(string), (U)>): $RegistryObject<(U)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryObjectsInit$Type<O> = ($RegistryObjectsInit<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryObjectsInit_<O> = $RegistryObjectsInit$Type<(O)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$BaseProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BaseProperties<T extends $BaseProperties<(T)>> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseProperties$Type<T> = ($BaseProperties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseProperties_<T> = $BaseProperties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Property" {
import {$Property$Type, $Property$Type$Type} from "packages/com/endertech/minecraft/forge/configs/$Property$Type"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Property {

constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[], arg4: string)
constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[])
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean, arg4: string)

public "getArrayEntryClass"(): $Class<(any)>
public "getConfigEntryClass"(): $Class<(any)>
public "setArrayEntryClass"(arg0: $Class$Type<(any)>): $Property
public "setConfigEntryClass"(arg0: $Class$Type<(any)>): $Property
public "showInGui"(): boolean
public "setShowInGui"(arg0: boolean): $Property
public "setDefaultValue"(arg0: double): $Property
public "setDefaultValue"(arg0: integer): $Property
public "setDefaultValue"(arg0: string): $Property
public "setDefaultValue"(arg0: boolean): $Property
public "isBooleanValue"(): boolean
public "setDefaultValues"(arg0: (boolean)[]): $Property
public "setDefaultValues"(arg0: (string)[]): $Property
public "setDefaultValues"(arg0: (integer)[]): $Property
public "setDefaultValues"(arg0: (double)[]): $Property
public "setIsListLengthFixed"(arg0: boolean): $Property
public "setMaxListLength"(arg0: integer): $Property
public "isBooleanList"(): boolean
public "isListLengthFixed"(): boolean
public "setMinValue"(arg0: double): $Property
public "setMinValue"(arg0: integer): $Property
public "setMaxValue"(arg0: integer): $Property
public "setMaxValue"(arg0: double): $Property
public "isIntList"(): boolean
public "isDoubleValue"(): boolean
public "isDoubleList"(): boolean
public "setValidationPattern"(arg0: $Pattern$Type): $Property
public "setValidValues"(arg0: (string)[]): $Property
public "isList"(): boolean
public "wasRead"(): boolean
public "getMaxListLength"(): integer
public "getValidationPattern"(): $Pattern
public "getLanguageKey"(): string
public "isLongValue"(): boolean
public "getIntList"(): (integer)[]
public "getBooleanList"(): (boolean)[]
public "getDoubleList"(): (double)[]
public "setLanguageKey"(arg0: string): $Property
public "setRequiresWorldRestart"(arg0: boolean): $Property
public "requiresWorldRestart"(): boolean
public "setRequiresMcRestart"(arg0: boolean): $Property
public "requiresMcRestart"(): boolean
public "getStringList"(): (string)[]
public "getDefaults"(): (string)[]
public "setValues"(arg0: (double)[]): $Property
public "setValues"(arg0: (integer)[]): $Property
public "setValues"(arg0: (string)[]): $Property
public "setValues"(arg0: (boolean)[]): $Property
public "getMinValue"(): string
public "getMaxValue"(): string
public "getName"(): string
public "getBoolean"(): boolean
public "getBoolean"(arg0: boolean): boolean
public "getInt"(arg0: integer): integer
public "getInt"(): integer
public "getLong"(arg0: long): long
public "getLong"(): long
public "getDouble"(arg0: double): double
public "getDouble"(): double
public "getDefault"(): string
public "set"(arg0: (string)[]): void
public "set"(arg0: (double)[]): void
public "set"(arg0: boolean): void
public "set"(arg0: string): void
public "set"(arg0: (boolean)[]): void
public "set"(arg0: integer): void
public "set"(arg0: long): void
public "set"(arg0: (integer)[]): void
public "set"(arg0: double): void
public "setName"(arg0: string): void
public "setValue"(arg0: boolean): $Property
public "setValue"(arg0: double): $Property
public "setValue"(arg0: integer): $Property
public "setValue"(arg0: string): $Property
public "getType"(): $Property$Type
public "isDefault"(): boolean
public "getString"(): string
public "isIntValue"(): boolean
public "setComment"(arg0: string): void
public "getComment"(): string
public "setToDefault"(): $Property
public "getValidValues"(): (string)[]
public "hasChanged"(): boolean
get "arrayEntryClass"(): $Class<(any)>
get "configEntryClass"(): $Class<(any)>
set "arrayEntryClass"(value: $Class$Type<(any)>)
set "configEntryClass"(value: $Class$Type<(any)>)
set "defaultValue"(value: double)
set "defaultValue"(value: integer)
set "defaultValue"(value: string)
set "defaultValue"(value: boolean)
get "booleanValue"(): boolean
set "defaultValues"(value: (boolean)[])
set "defaultValues"(value: (string)[])
set "defaultValues"(value: (integer)[])
set "defaultValues"(value: (double)[])
set "maxListLength"(value: integer)
get "booleanList"(): boolean
get "listLengthFixed"(): boolean
set "minValue"(value: double)
set "minValue"(value: integer)
set "maxValue"(value: integer)
set "maxValue"(value: double)
get "intList"(): boolean
get "doubleValue"(): boolean
get "doubleList"(): boolean
set "validationPattern"(value: $Pattern$Type)
set "validValues"(value: (string)[])
get "list"(): boolean
get "maxListLength"(): integer
get "validationPattern"(): $Pattern
get "languageKey"(): string
get "longValue"(): boolean
get "intList"(): (integer)[]
get "booleanList"(): (boolean)[]
get "doubleList"(): (double)[]
set "languageKey"(value: string)
get "stringList"(): (string)[]
get "defaults"(): (string)[]
set "values"(value: (double)[])
set "values"(value: (integer)[])
set "values"(value: (string)[])
set "values"(value: (boolean)[])
get "minValue"(): string
get "maxValue"(): string
get "name"(): string
get "boolean"(): boolean
get "int"(): integer
get "long"(): long
get "double"(): double
get "default"(): string
set "name"(value: string)
set "value"(value: boolean)
set "value"(value: double)
set "value"(value: integer)
set "value"(value: string)
get "type"(): $Property$Type
get "default"(): boolean
get "string"(): string
get "intValue"(): boolean
set "comment"(value: string)
get "comment"(): string
get "validValues"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type = ($Property);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property_ = $Property$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$BlockStatesSet" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractSet, $AbstractSet$Type} from "packages/java/util/$AbstractSet"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockStatesSet extends $AbstractSet<($BlockState)> {

constructor()

public static "parseFrom"(arg0: (string)[]): $BlockStatesSet
public "getFirstFor"(arg0: $Block$Type): $Optional<($BlockState)>
public "addAllFor"(arg0: $Block$Type): boolean
public "hasAllStates"(arg0: $Block$Type): boolean
public "getBlocksWithAllStates"(): $Collection<($Block)>
public "add"(arg0: $UnitId$Type): boolean
public "add"(arg0: $BlockState$Type): boolean
public "remove"(arg0: any): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($BlockState)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "blocksWithAllStates"(): $Collection<($Block)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatesSet$Type = ($BlockStatesSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStatesSet_ = $BlockStatesSet$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$BlockAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HookShot$BlockAction extends $Enum<($HookShot$BlockAction)> {
static readonly "BOUNCE": $HookShot$BlockAction
static readonly "BREAK": $HookShot$BlockAction
static readonly "HOOK": $HookShot$BlockAction
static readonly "PASS": $HookShot$BlockAction


public static "values"(): ($HookShot$BlockAction)[]
public static "valueOf"(arg0: string): $HookShot$BlockAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookShot$BlockAction$Type = (("hook") | ("bounce") | ("break") | ("pass")) | ($HookShot$BlockAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookShot$BlockAction_ = $HookShot$BlockAction$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$ReloadableUnitsInit" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$UnitsInit, $UnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$UnitsInit"

export class $ReloadableUnitsInit<T> extends $UnitsInit<(T)> {

constructor(arg0: $AbstractForgeMod$Type)

public "reloadConfigs"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableUnitsInit$Type<T> = ($ReloadableUnitsInit<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadableUnitsInit_<T> = $ReloadableUnitsInit$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Vect3d" {
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Rotation, $Rotation$Type} from "packages/com/endertech/minecraft/forge/math/$Rotation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CommonMath$Angle, $CommonMath$Angle$Type} from "packages/com/endertech/common/$CommonMath$Angle"

export class $Vect3d {
static readonly "ZERO": $Vect3d
readonly "x": double
readonly "y": double
readonly "z": double


public static "scalarMult"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): double
public static "straightMult"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "rotationWrapped"(): $Rotation
public static "rotationWrapped"(arg0: $Vect3d$Type): $Rotation
public static "maxOfAll"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public static "minOfAllByAbs"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public static "rotateAroundX"(arg0: $Vect3d$Type, arg1: float): $Vect3d
public "rotateAroundX"(arg0: float): $Vect3d
public "rotateAroundY"(arg0: float): $Vect3d
public static "rotateAroundY"(arg0: $Vect3d$Type, arg1: float): $Vect3d
public static "rotateAroundZ"(arg0: $Vect3d$Type, arg1: float): $Vect3d
public "rotateAroundZ"(arg0: float): $Vect3d
public "rotatePitch"(arg0: float): $Vect3d
public "rotateYaw"(arg0: float): $Vect3d
public static "readFromByteBuf"(arg0: $ByteBuf$Type): $Vect3d
public "invertX"(): $Vect3d
public "withX"(arg0: double): $Vect3d
public "invertY"(): $Vect3d
public "withY"(arg0: double): $Vect3d
public "invertZ"(): $Vect3d
public "withZ"(arg0: double): $Vect3d
public static "writeToByteBuf"(arg0: $Vect3d$Type, arg1: $ByteBuf$Type): void
public "toVector3d"(): $Vec3
public "toBlockPos"(): $BlockPos
public "notZero"(): boolean
public "projectOn"(arg0: $Vect3d$Type): $Vect3d
public "notEqual"(arg0: $Vect3d$Type): boolean
public static "projection"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public static "invert"(arg0: $Vect3d$Type): $Vect3d
public "invert"(): $Vect3d
public "add"(arg0: $Vect3d$Type): $Vect3d
public "add"(arg0: double): $Vect3d
public "equals"(arg0: any): boolean
public static "length"(arg0: $Vect3d$Type): double
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double): $Vect3d
public static "scale"(arg0: $Vect3d$Type, arg1: double): $Vect3d
public static "from"(arg0: $Vec3$Type): $Vect3d
public static "from"(arg0: $Vec3i$Type): $Vect3d
public static "from"(arg0: double, arg1: double, arg2: double): $Vect3d
public static "from"(arg0: $BlockPos$Type): $Vect3d
public static "setLength"(arg0: $Vect3d$Type, arg1: double): $Vect3d
public "expand"(arg0: double): $Vect3d
public "normalize"(): $Vect3d
public static "normalize"(arg0: $Vect3d$Type): $Vect3d
public static "sum"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "resize"(arg0: double): $Vect3d
public "distance"(arg0: $Vect3d$Type): double
public static "distance"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): double
public "rotate"(arg0: $Rotation$Type): $Vect3d
public "subtract"(arg0: $Vect3d$Type): $Vect3d
public "subtract"(arg0: double): $Vect3d
public static "divide"(arg0: $Vect3d$Type, arg1: double): $Vect3d
public "divide"(arg0: double): $Vect3d
public "isZero"(): boolean
public static "approx"(arg0: float, arg1: $Vect3d$Type, arg2: $Vect3d$Type): $Vect3d
public "approx"(arg0: float, arg1: $Vect3d$Type): $Vect3d
public static "difference"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public static "mult"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "mult"(arg0: $Vect3d$Type): $Vect3d
public "move"(arg0: double, arg1: double, arg2: double): $Vect3d
public static "angle"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $CommonMath$Angle
public "rotation"(): $Rotation
public static "rotation"(arg0: $Vect3d$Type): $Rotation
public "yaw"(): float
public "pitch"(): float
public "truncate"(arg0: double): $Vect3d
get "zero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vect3d$Type = ($Vect3d);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vect3d_ = $Vect3d$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase" {
import {$LivingSourceBase$Properties, $LivingSourceBase$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase$Properties"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingSourceBase<E extends $LivingEntity> extends $SourceBase implements $IPostInit {

constructor(arg0: $UnitConfig$Type, arg1: $LivingSourceBase$Properties$Type<(any)>)

public "emitFrom"(arg0: E, arg1: float): void
public "getOutletPosition"(arg0: E): $BlockPos
public "onPostInit"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingSourceBase$Type<E> = ($LivingSourceBase<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingSourceBase_<E> = $LivingSourceBase$Type<(E)>;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney$SideType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Chimney$SideType extends $Enum<($Chimney$SideType)> implements $IForgeEnum {
static readonly "NORMAL": $Chimney$SideType
static readonly "BRIDGE": $Chimney$SideType
static readonly "PORTAL": $Chimney$SideType


public "toString"(): string
public static "values"(): ($Chimney$SideType)[]
public static "valueOf"(arg0: string): $Chimney$SideType
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chimney$SideType$Type = (("normal") | ("bridge") | ("portal")) | ($Chimney$SideType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chimney$SideType_ = $Chimney$SideType$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$SynchedInts" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HookShot$SynchedInts extends $Enum<($HookShot$SynchedInts)> {
static readonly "HOOKED_BLOCK_X": $HookShot$SynchedInts
static readonly "HOOKED_BLOCK_Y": $HookShot$SynchedInts
static readonly "HOOKED_BLOCK_Z": $HookShot$SynchedInts
static readonly "HOOKED_ENTITY_ID": $HookShot$SynchedInts
static readonly "HOOK_TYPE": $HookShot$SynchedInts
static readonly "PREV_STATE": $HookShot$SynchedInts
static readonly "SHOOTER_ID": $HookShot$SynchedInts
static readonly "STATE": $HookShot$SynchedInts
static readonly "LAUNCHER_HAND": $HookShot$SynchedInts


public static "values"(): ($HookShot$SynchedInts)[]
public static "valueOf"(arg0: string): $HookShot$SynchedInts
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookShot$SynchedInts$Type = (("hooked_entity_id") | ("shooter_id") | ("state") | ("launcher_hand") | ("hooked_block_x") | ("hook_type") | ("prev_state") | ("hooked_block_y") | ("hooked_block_z")) | ($HookShot$SynchedInts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookShot$SynchedInts_ = $HookShot$SynchedInts$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Breakables$BuiltInBreakables" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Breakables$BuiltInBreakables extends $Enum<($Breakables$BuiltInBreakables)> implements $IForgeEnum {
static readonly "coal_ore": $Breakables$BuiltInBreakables
static readonly "coal_block": $Breakables$BuiltInBreakables
static readonly "sulfur_ore": $Breakables$BuiltInBreakables
static readonly "sulfur_block": $Breakables$BuiltInBreakables
static readonly "charcoal_block": $Breakables$BuiltInBreakables
static readonly "coke_block": $Breakables$BuiltInBreakables
static readonly "burnt$burnt_blocks": $Breakables$BuiltInBreakables


public static "values"(): ($Breakables$BuiltInBreakables)[]
public static "valueOf"(arg0: string): $Breakables$BuiltInBreakables
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Breakables$BuiltInBreakables$Type = (("burnt$burnt_blocks") | ("sulfur_block") | ("sulfur_ore") | ("coal_ore") | ("charcoal_block") | ("coke_block") | ("coal_block")) | ($Breakables$BuiltInBreakables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Breakables$BuiltInBreakables_ = $Breakables$BuiltInBreakables$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Dust" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BiomeId, $BiomeId$Type} from "packages/com/endertech/minecraft/forge/world/$BiomeId"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DustLayer, $DustLayer$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$DustLayer"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Dust extends $AbstractGas {
static readonly "MOVE_DISTANCE": $IntBounds
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $UnitConfig$Type, arg1: string)

public "trySettleAsLayer"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public "getDustLayer"(arg0: $BiomeId$Type): $DustLayer
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dust$Type = ($Dust);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dust_ = $Dust$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Pollutant$Density extends $Enum<($Pollutant$Density)> implements $IForgeEnum {
static readonly "LIGHT": $Pollutant$Density
static readonly "MEDIUM": $Pollutant$Density
static readonly "HEAVY": $Pollutant$Density


public "canAbsorb"(): boolean
public "getPumped"(): $Pollutant$Density
public "canSpread"(): boolean
public "getSpreaded"(): $Pollutant$Density
public "toString"(): string
public static "values"(): ($Pollutant$Density)[]
public static "valueOf"(arg0: string): $Pollutant$Density
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "pumped"(): $Pollutant$Density
get "spreaded"(): $Pollutant$Density
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutant$Density$Type = (("light") | ("medium") | ("heavy")) | ($Pollutant$Density);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutant$Density_ = $Pollutant$Density$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$Hook$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ForgeItem$Properties, $ForgeItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties"

export class $Hook$Properties<T extends $Hook$Properties<(T)>> extends $ForgeItem$Properties<(T)> {
 "affectsItems": boolean
 "affectsNPCs": boolean
 "affectsPlayers": boolean
 "breakableBlocks": (string)[]
 "hookableBlocks": (string)[]
 "reboundableBlocks": (string)[]
 "strength": float
 "damage": float
 "resistance": float
readonly "vanillaProps": $Item$Properties
readonly "name": string


public "hookableBlocks"(...arg0: (string)[]): T
public "ignoreNPCs"(): T
public "ignorePlayers"(): T
public "breakableBlocks"(...arg0: (string)[]): T
public "reboundableBlocks"(...arg0: (string)[]): T
public "ignoreItems"(): T
public "strength"(arg0: float): T
public "resistance"(arg0: float): T
public static "of"(arg0: string): $Hook$Properties<(any)>
public "damage"(arg0: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hook$Properties$Type<T> = ($Hook$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Hook$Properties_<T> = $Hook$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot" {
import {$HookType, $HookType$Type} from "packages/com/endertech/minecraft/mods/adhooks/properties/$HookType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HookShot$SynchedInts, $HookShot$SynchedInts$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$SynchedInts"
import {$Vect3d, $Vect3d$Type} from "packages/com/endertech/minecraft/forge/math/$Vect3d"
import {$Rope, $Rope$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Rope"
import {$HookShot$State, $HookShot$State$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$State"
import {$Hook, $Hook$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Hook"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ForgeEntity, $ForgeEntity$Type} from "packages/com/endertech/minecraft/forge/entities/$ForgeEntity"
import {$HookShot$BlockAction, $HookShot$BlockAction$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$BlockAction"
import {$Launcher, $Launcher$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Launcher"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$HookShot$SynchedFloats, $HookShot$SynchedFloats$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$SynchedFloats"
import {$HookShot$SynchedBools, $HookShot$SynchedBools$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot$SynchedBools"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CameraType, $CameraType$Type} from "packages/net/minecraft/client/$CameraType"

export class $HookShot extends $ForgeEntity {
static readonly "GRAVITY_VELOCITY": float
static readonly "RENDER_DISTANCE": integer
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<($HookShot$Type)>, arg1: $Level$Type)
constructor(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $HookType$Type)

public "setSynchedData"(arg0: $HookShot$SynchedInts$Type, arg1: integer): void
public "setSynchedData"(arg0: $HookShot$SynchedBools$Type, arg1: boolean): void
public "setSynchedData"(arg0: $HookShot$SynchedFloats$Type, arg1: float): void
public "getSynchedData"(arg0: $HookShot$SynchedFloats$Type): float
public "getSynchedData"(arg0: $HookShot$SynchedBools$Type): boolean
public "getSynchedData"(arg0: $HookShot$SynchedInts$Type): integer
public "isLoosening"(): boolean
public "isPulling"(): boolean
public "getPrevState"(): $HookShot$State
public "getRopeLength"(): float
public "setRopeLength"(arg0: float): void
public "getSagging"(): float
public "setSagging"(arg0: float): void
public "getHookType"(): $HookType
public "canHookOnReeling"(): boolean
public "getBlockAction"(arg0: $Level$Type, arg1: $BlockPos$Type): $HookShot$BlockAction
public "getShooter"(): $Optional<($LivingEntity)>
public "getLauncherPosition"(arg0: $CameraType$Type, arg1: float): $Vect3d
public "getLauncherPosition"(): $Vect3d
public "getLauncherHand"(): $Optional<($InteractionHand)>
public "setHitPosition"(arg0: $Vect3d$Type): void
public "isHookingBlock"(): boolean
public "isHookingEntity"(): boolean
public "getHookedBlockPos"(): $BlockPos
public "findHookedEntity"(): $Optional<($Entity)>
public "getHookDistance"(): float
public "doTarzanJump"(): void
public "getRope"(): $Rope
public "getLauncher"(): $Launcher
public "getHook"(): $Hook
public "getHookedBlock"(): $Block
public "hookedBlockExists"(): boolean
public "isHookingTarget"(): boolean
public "getTensionForce"(): float
public "getState"(): $HookShot$State
public "setState"(arg0: $HookShot$State$Type): void
public "launch"(arg0: $Vec3$Type, arg1: float, arg2: float): void
public "tick"(): void
public "remove"(arg0: $Entity$RemovalReason$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getFluidJumpThreshold"(): double
public "shouldRenderAtSqrDistance"(arg0: double): boolean
public "canBeCollidedWith"(): boolean
get "loosening"(): boolean
get "pulling"(): boolean
get "prevState"(): $HookShot$State
get "ropeLength"(): float
set "ropeLength"(value: float)
get "sagging"(): float
set "sagging"(value: float)
get "hookType"(): $HookType
get "shooter"(): $Optional<($LivingEntity)>
get "launcherPosition"(): $Vect3d
get "launcherHand"(): $Optional<($InteractionHand)>
set "hitPosition"(value: $Vect3d$Type)
get "hookingBlock"(): boolean
get "hookingEntity"(): boolean
get "hookedBlockPos"(): $BlockPos
get "hookDistance"(): float
get "rope"(): $Rope
get "launcher"(): $Launcher
get "hook"(): $Hook
get "hookedBlock"(): $Block
get "hookingTarget"(): boolean
get "tensionForce"(): float
get "state"(): $HookShot$State
set "state"(value: $HookShot$State$Type)
get "fluidJumpThreshold"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookShot$Type = ($HookShot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookShot_ = $HookShot$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Items" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$ItemsInit, $ItemsInit$Type} from "packages/com/endertech/minecraft/forge/units/$ItemsInit"
import {$ForgeBucketItem, $ForgeBucketItem$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeBucketItem"
import {$Aerometer, $Aerometer$Type} from "packages/com/endertech/minecraft/mods/adpother/items/$Aerometer"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $Items extends $ItemsInit {
readonly "aerometer": $RegistryObject<($Aerometer)>
readonly "pollutedWaterBucket": $RegistryObject<($ForgeBucketItem)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Items$Type = ($Items);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Items_ = $Items$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$Hook" {
import {$HookType, $HookType$Type} from "packages/com/endertech/minecraft/mods/adhooks/properties/$HookType"
import {$SynchedListProperty, $SynchedListProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedListProperty"
import {$Hook$Properties, $Hook$Properties$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Hook$Properties"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$HookItem, $HookItem$Type} from "packages/com/endertech/minecraft/mods/adhooks/items/$HookItem"
import {$IHaveSynchedProperties, $IHaveSynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$IHaveSynchedProperties"
import {$SynchedProperties, $SynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedProperties"
import {$SynchedDoubleProperty, $SynchedDoubleProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedDoubleProperty"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$SynchedEnumProperty, $SynchedEnumProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedEnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SynchedIntProperty, $SynchedIntProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedIntProperty"
import {$HookInteractableBlocks, $HookInteractableBlocks$Type} from "packages/com/endertech/minecraft/mods/adhooks/properties/$HookInteractableBlocks"
import {$SynchedBoolProperty, $SynchedBoolProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedBoolProperty"

export class $Hook implements $IHaveSynchedProperties {
readonly "type": $HookType
readonly "name": string
readonly "item": $Lazy<($HookItem)>
readonly "breakableBlocks": $HookInteractableBlocks
readonly "hookableBlocks": $HookInteractableBlocks
readonly "reboundableBlocks": $HookInteractableBlocks

constructor(arg0: $HookType$Type, arg1: $Hook$Properties$Type<(any)>)

public "getResistance"(): float
public "affectsItems"(): boolean
public "affectsNPCs"(): boolean
public "affectsPlayers"(): boolean
public "getSynchedProperties"(): $SynchedProperties
public "getStrength"(): float
public "getDamage"(): float
public "synchedProperty"<E extends $Enum<(E)>>(arg0: string, arg1: E, arg2: $Predicate$Type<(E)>, arg3: string): $SynchedEnumProperty<(E)>
public "synchedProperty"(arg0: string, arg1: (string)[], arg2: $Predicate$Type<(string)>, arg3: string): $SynchedListProperty
public "synchedProperty"(arg0: string, arg1: float, arg2: $FloatBounds$Type, arg3: string): $SynchedDoubleProperty
public "synchedProperty"(arg0: string, arg1: boolean, arg2: string): $SynchedBoolProperty
public "synchedProperty"(arg0: string, arg1: integer, arg2: $IntBounds$Type, arg3: string): $SynchedIntProperty
get "resistance"(): float
get "synchedProperties"(): $SynchedProperties
get "strength"(): float
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hook$Type = ($Hook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Hook_ = $Hook$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$ITickableUnit" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"

export interface $ITickableUnit {

 "getUpdateInterval"(): $GameTime
 "onUpdate"(): void
 "getWorldLevel"(): $Level
 "exists"(): boolean
 "tick"(): void
}

export namespace $ITickableUnit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableUnit$Type = ($ITickableUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableUnit_ = $ITickableUnit$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IPurifier" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPurifier {

 "spawnParticle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $SimpleParticleType$Type): void
 "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "getOutputPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
 "getPumpPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
 "hasProperInput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "hasProperOutput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "hasActivePump"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "hasActiveFilter"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IPurifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPurifier$Type = ($IPurifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPurifier_ = $IPurifier$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Context" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerCommand$Msg, $ServerCommand$Msg$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Msg"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ServerCommand$Context {
readonly "source": $CommandSourceStack

constructor(arg0: $CommandContext$Type<($CommandSourceStack$Type)>)

public "getTargetEntityInfo"(arg0: boolean, arg1: boolean, arg2: $Optional$Type<($Predicate$Type<(string)>)>): $Optional<($Pair<($Entity), ($ServerCommand$Msg)>)>
public "getTargetBlockInfo"(arg0: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getTargetFluidInfo"(arg0: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getHeldItemInfo"(arg0: $InteractionHand$Type, arg1: boolean): $Optional<($Pair<($Item), ($ServerCommand$Msg)>)>
public "getTargetTileInfo"(arg0: $Predicate$Type<(string)>, arg1: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "rayTraceBlockBeingLookedAt"(arg0: boolean): $Optional<($BlockHitResult)>
public "getBlockPos"(): $BlockPos
public "sendMessage"(arg0: $ServerCommand$Msg$Type): void
public "sendMessage"(arg0: string): void
public "setReachDistance"(arg0: float): void
public "getEntity"(): $Entity
public "getLevel"(): $ServerLevel
public "getArgument"<V>(arg0: string, arg1: $Class$Type<(V)>): V
get "blockPos"(): $BlockPos
set "reachDistance"(value: float)
get "entity"(): $Entity
get "level"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Context$Type = ($ServerCommand$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Context_ = $ServerCommand$Context$Type;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$SynchedIntProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$AbstractSynchedProperty, $AbstractSynchedProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$AbstractSynchedProperty"

export class $SynchedIntProperty extends $AbstractSynchedProperty<(integer)> {
readonly "bounds": $IntBounds
readonly "name": string
readonly "comment": string
readonly "defaultValue": T

constructor(arg0: string, arg1: integer, arg2: $IntBounds$Type, arg3: string)

public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "define"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedIntProperty$Type = ($SynchedIntProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SynchedIntProperty_ = $SynchedIntProperty$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Container" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TileInventory$AbstractContainer, $TileInventory$AbstractContainer$Type} from "packages/com/endertech/minecraft/forge/tiles/$TileInventory$AbstractContainer"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"
import {$TileInventory, $TileInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$TileInventory"

export class $FilterFrame$Container extends $TileInventory$AbstractContainer {
static readonly "PLAYER_INVENTORY": $Dimension
static readonly "SLOT_SIZE": $Dimension
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>

constructor(arg0: integer, arg1: $Inventory$Type, arg2: $TileInventory$Type, arg3: $ContainerData$Type)

public "getByproductProgress"(): $Percentage
get "byproductProgress"(): $Percentage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$Container$Type = ($FilterFrame$Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$Container_ = $FilterFrame$Container$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumBag$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"

export class $VacuumBag$Properties<T extends $VacuumBag$Properties<(T)>> extends $EquipmentItem$Properties<(T)> {
 "capacity": integer
 "equipmentSlot": $EquipmentSlot
 "equipSound": $SoundEvent
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $VacuumBag$Properties<(any)>
public "capacity"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumBag$Properties$Type<T> = ($VacuumBag$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumBag$Properties_<T> = $VacuumBag$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$IReloadableData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IReloadableData {

 "loadData"(): void

(): void
}

export namespace $IReloadableData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReloadableData$Type = ($IReloadableData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReloadableData_ = $IReloadableData$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$RelatedUnit$Properties" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $RelatedUnit$Properties<T extends $RelatedUnit$Properties<(T)>> extends $BaseProperties<(T)> {
 "id": $UnitId


public "enumId"(arg0: string): T
public "metaAll"(): T
public "emptyToEnumId"(arg0: $Enum$Type<(any)>, arg1: boolean): T
public static "of"(): $RelatedUnit$Properties<(any)>
public "id"(arg0: string): T
public "id"(arg0: $UnitId$Type): T
public "metadata"(arg0: string): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelatedUnit$Properties$Type<T> = ($RelatedUnit$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelatedUnit$Properties_<T> = $RelatedUnit$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$FlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$PollutedWater$BaseFluid, $PollutedWater$BaseFluid$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$BaseFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $PollutedWater$FlowingFluid extends $PollutedWater$BaseFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$FlowingFluid$Type = ($PollutedWater$FlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater$FlowingFluid_ = $PollutedWater$FlowingFluid$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/properties/$HookType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Rope, $Rope$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Rope"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Hook, $Hook$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Hook"
import {$SynchedProperties, $SynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedProperties"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Launcher, $Launcher$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Launcher"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HookType extends $Enum<($HookType)> implements $IForgeEnum {
static readonly "PROTOTYPE": $HookType
static readonly "PUDGE": $HookType
static readonly "SPEAR": $HookType
static readonly "WEB": $HookType
readonly "hook": $Hook
readonly "rope": $Rope
readonly "launcher": $Launcher


public static "values"(): ($HookType)[]
public static "valueOf"(arg0: string): $HookType
public "getCategoryName"(): string
public "synchedProperties"(): $Stream<($SynchedProperties)>
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "categoryName"(): string
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookType$Type = (("spear") | ("web") | ("prototype") | ("pudge")) | ($HookType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookType_ = $HookType$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$GasEntity, $GasEntity$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$GasEntity"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BiomeId, $BiomeId$Type} from "packages/com/endertech/minecraft/forge/world/$BiomeId"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spread, $Spread$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$Spread"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IPollutant$Type, $IPollutant$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChunkPollution$Influence, $ChunkPollution$Influence$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$ChunkPollution$Influence"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractGas$Properties, $AbstractGas$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$PregeneratedClouds$Data, $PregeneratedClouds$Data$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Data"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractGas extends $Pollutant<($GasEntity)> {
static readonly "MOVE_DISTANCE": $IntBounds
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $UnitConfig$Type, arg1: $AbstractGas$Properties$Type<(any)>)

public "canPassThrough"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Direction$Type): boolean
public "createSpread"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Spread
public "emitFrom"(arg0: $BlockEntity$Type, arg1: $Set$Type<($BlockState$Type)>, arg2: integer): integer
public "getProtectiveItems"(arg0: $LivingEntity$Type): $Map<($ItemStack), ($IStorageItem)>
public "affectsPollutionLevel"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getPollutantType"(): $IPollutant$Type
public "tryDissipateExcessive"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public "tryAffectBlocksBelow"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public "tryPushWithWind"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public "tryIgniteAndExplode"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public static "isGasBlock"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "canCauseExplosion"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getLowerExplosiveLimit"(): integer
public "pushedBy"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $Direction$Type): boolean
public "getPregeneratedCloudsData"(arg0: $BiomeId$Type): $PregeneratedClouds$Data
public "shouldDissipateExcessive"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BiomeId$Type): boolean
public "canBeAffectedByWind"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BiomeId$Type): boolean
public "getChunkPollutionInfluence"(arg0: $BiomeId$Type): $ChunkPollution$Influence
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "pollutantType"(): $IPollutant$Type
get "lowerExplosiveLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGas$Type = ($AbstractGas);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGas_ = $AbstractGas$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$TickActions" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TickActions$ITickAction, $TickActions$ITickAction$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$TickActions$ITickAction"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $TickActions {

constructor()

public "putBefore"(arg0: string, arg1: string, arg2: $TickActions$ITickAction$Type): $TickActions
public "putAfter"(arg0: string, arg1: string, arg2: $TickActions$ITickAction$Type): $TickActions
public "putLast"(arg0: string, arg1: $TickActions$ITickAction$Type): $TickActions
public "putFirst"(arg0: string, arg1: $TickActions$ITickAction$Type): $TickActions
public "remove"(arg0: string): $TickActions
public "put"(arg0: string, arg1: $TickActions$ITickAction$Type): $TickActions
public "values"(): $Collection<($TickActions$ITickAction)>
public "isEmpty"(): boolean
public "replace"(arg0: string, arg1: $TickActions$ITickAction$Type): $TickActions
public "entrySet"(): $Set<($Map$Entry<(string), ($TickActions$ITickAction)>)>
public "keySet"(): $Set<(string)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickActions$Type = ($TickActions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickActions_ = $TickActions$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IFilterFrame" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$IStorage, $IStorage$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export interface $IFilterFrame<T extends $BlockEntity> extends $IStorage<(T)> {

 "_handleChanges"(arg0: $IStorage$Content$Type, arg1: T): void
 "onContentChanged"(arg0: $IStorage$Content$Type, arg1: T): void
 "installFiltersFor"(arg0: T, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "removeFiltersFor"(arg0: T, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "getInitialCapacity"(arg0: T): integer
 "fill"(arg0: T, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "getContent"(arg0: T): $IStorage$Content
 "free"(arg0: T, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
}

export namespace $IFilterFrame {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilterFrame$Type<T> = ($IFilterFrame<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilterFrame_<T> = $IFilterFrame$Type<(T)>;
}}
declare module "packages/com/endertech/common/$CommonString$Joiner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonString$Joiner {

constructor(arg0: string)

public "getDelimiter"(): string
public "join"(...arg0: (string)[]): string
public static "with"(arg0: string): $CommonString$Joiner
get "delimiter"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonString$Joiner$Type = ($CommonString$Joiner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonString$Joiner_ = $CommonString$Joiner$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IEmitter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEmitter$Type, $IEmitter$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type"
import {$IRelatedUnit, $IRelatedUnit$Type} from "packages/com/endertech/minecraft/forge/units/$IRelatedUnit"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IEmitter extends $IRelatedUnit, $IPostInit {

 "isIdentified"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
 "getActiveTag"(): string
 "getIdentityTag"(): $KeyValuePair
 "getRelatedBlocks"(): $Set<($BlockState)>
 "getType"(): $IEmitter$Type
 "isActive"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
 "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "getRelatedId"(): $UnitId
 "onPostInit"(): void
 "saveConfig"(): void
 "getClassCategory"(): string
 "getClassCategory"(arg0: string): string
 "expandClassCategory"(arg0: string): string
 "expandClassCategory"(arg0: string, arg1: string): string
 "getConfig"(): $UnitConfig
}

export namespace $IEmitter {
const COMMON_ACTIVE_TAG_NAME: $Predicate<(string)>
const COMMENT_ACTIVE_STATE_TAG: string
const COMMENT_IDENTITY_TAG: string
const COMMENT_TYPE: string
const COMMENT_RELATED_BLOCKS: string
const TAG_HARDCODED: string
function expandCategory(arg0: string, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmitter$Type = ($IEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmitter_ = $IEmitter$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$IReloadableData, $IReloadableData$Type} from "packages/com/endertech/minecraft/forge/data/$IReloadableData"

export class $AbstractParsableList implements $IReloadableData {

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[])

public "addDefaultValues"(...arg0: (string)[]): void
public "loadData"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractParsableList$Type = ($AbstractParsableList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractParsableList_ = $AbstractParsableList$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/recipes/$FilterChangeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$INetSerializable, $INetSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INetSerializable"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$AdPother, $AdPother$Type} from "packages/com/endertech/minecraft/mods/adpother/$AdPother"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FilterChangeRecipe extends $CustomRecipe implements $INetSerializable<($FilterChangeRecipe)> {

constructor(arg0: $AdPother$Type, arg1: $ResourceLocation$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "writeTo"(arg0: $FriendlyByteBuf$Type): $FriendlyByteBuf
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterChangeRecipe$Type = ($FilterChangeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterChangeRecipe_ = $FilterChangeRecipe$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$RelatedUnitsInit" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitsInitWithEnum, $UnitsInitWithEnum$Type} from "packages/com/endertech/minecraft/forge/units/$UnitsInitWithEnum"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IRelatedUnit, $IRelatedUnit$Type} from "packages/com/endertech/minecraft/forge/units/$IRelatedUnit"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $RelatedUnitsInit<T extends $IRelatedUnit, E extends ($Enum<(any)>) & ($IForgeEnum)> extends $UnitsInitWithEnum<(T), (E)> {

constructor(arg0: $AbstractForgeMod$Type, arg1: $Class$Type<(E)>)

public "get"(arg0: $ItemStack$Type): $Optional<(T)>
public "get"(arg0: $Item$Type): $Optional<(T)>
public "get"(arg0: $Fluid$Type): $Optional<(T)>
public "get"(arg0: $BlockState$Type): $Optional<(T)>
public "onPostInit"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelatedUnitsInit$Type<T, E> = ($RelatedUnitsInit<(T), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelatedUnitsInit_<T, E> = $RelatedUnitsInit$Type<(T), (E)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$LavaTouchingWater" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"
import {$LavaTouchingWater$EscapeSearchArea, $LavaTouchingWater$EscapeSearchArea$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LavaTouchingWater$EscapeSearchArea"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LavaTouchingWater extends $SourceBase {
readonly "escapeSearchArea": $LavaTouchingWater$EscapeSearchArea

constructor(arg0: $UnitConfig$Type)

public "emitAt"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: float): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LavaTouchingWater$Type = ($LavaTouchingWater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LavaTouchingWater_ = $LavaTouchingWater$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/parts/$Launcher" {
import {$HookType, $HookType$Type} from "packages/com/endertech/minecraft/mods/adhooks/properties/$HookType"
import {$SynchedListProperty, $SynchedListProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedListProperty"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Launcher$Properties, $Launcher$Properties$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$Launcher$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IHaveSynchedProperties, $IHaveSynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$IHaveSynchedProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SynchedProperties, $SynchedProperties$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedProperties"
import {$SynchedDoubleProperty, $SynchedDoubleProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedDoubleProperty"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$HookShot, $HookShot$Type} from "packages/com/endertech/minecraft/mods/adhooks/parts/$HookShot"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$SynchedEnumProperty, $SynchedEnumProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedEnumProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SynchedIntProperty, $SynchedIntProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedIntProperty"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$LauncherItem, $LauncherItem$Type} from "packages/com/endertech/minecraft/mods/adhooks/items/$LauncherItem"
import {$SynchedBoolProperty, $SynchedBoolProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$SynchedBoolProperty"

export class $Launcher implements $IHaveSynchedProperties {
static readonly "TAG_HOOKSHOT_ID": string
static readonly "DAMAGE_ON_SHOT": integer
readonly "hookType": $HookType
readonly "name": string
readonly "item": $Lazy<($LauncherItem)>

constructor(arg0: $HookType$Type, arg1: $Launcher$Properties$Type<(any)>)

public "getSynchedProperties"(): $SynchedProperties
public "getLaunchVelocity"(): float
public "getReelingSpeed"(): float
public "getJumpBoostStrength"(): float
public "getTarzanJumpStrength"(): float
public "getShooterWeightFactor"(): float
public "makeShot"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
public static "attachToHookShot"(arg0: $ItemStack$Type, arg1: $HookShot$Type): void
public "processPressedKeysBy"(arg0: $LocalPlayer$Type, arg1: $InteractionHand$Type): void
public static "isShotAttached"(arg0: $ItemStack$Type): boolean
public static "stackHasLauncher"(arg0: $ItemStack$Type): boolean
public static "isAttachedToHookShot"(arg0: $ItemStack$Type, arg1: $HookShot$Type): boolean
public static "getAttachedHookShotId"(arg0: $ItemStack$Type): integer
public static "findAttachedHookShot"(arg0: $ItemStack$Type, arg1: $Level$Type): $Optional<($HookShot)>
public static "findAttachedLauncher"(arg0: $Inventory$Type, arg1: $HookShot$Type): $Optional<($ItemStack)>
public static "unattach"(arg0: $ItemStack$Type): void
public "synchedProperty"<E extends $Enum<(E)>>(arg0: string, arg1: E, arg2: $Predicate$Type<(E)>, arg3: string): $SynchedEnumProperty<(E)>
public "synchedProperty"(arg0: string, arg1: (string)[], arg2: $Predicate$Type<(string)>, arg3: string): $SynchedListProperty
public "synchedProperty"(arg0: string, arg1: float, arg2: $FloatBounds$Type, arg3: string): $SynchedDoubleProperty
public "synchedProperty"(arg0: string, arg1: boolean, arg2: string): $SynchedBoolProperty
public "synchedProperty"(arg0: string, arg1: integer, arg2: $IntBounds$Type, arg3: string): $SynchedIntProperty
get "synchedProperties"(): $SynchedProperties
get "launchVelocity"(): float
get "reelingSpeed"(): float
get "jumpBoostStrength"(): float
get "tarzanJumpStrength"(): float
get "shooterWeightFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Launcher$Type = ($Launcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Launcher_ = $Launcher$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase$Properties" {
import {$Emissions, $Emissions$Type} from "packages/com/endertech/minecraft/mods/adpother/emissions/$Emissions"
import {$SourceBase$Properties, $SourceBase$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $LivingSourceBase$Properties<T extends $LivingSourceBase$Properties<(T)>> extends $SourceBase$Properties<(T)> {
 "livingsListName": string
 "factor": float
 "emissions": $Emissions
 "comment": string
 "category": string
 "id": $UnitId


public "livingsList"(arg0: string): T
public static "of"(): $LivingSourceBase$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingSourceBase$Properties$Type<T> = ($LivingSourceBase$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingSourceBase$Properties_<T> = $LivingSourceBase$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Properties" {
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export class $FilterFrame$Properties<T extends $FilterFrame$Properties<(T)>> extends $ForgeBlock$Properties<(T)> {
 "airPurifierEffectiveRadius": integer
 "airPurifierMaxRadius": integer
 "waterPurifierMaxRadius": integer
 "waterPurifierEfficiency": $Percentage
 "slotLimit": integer
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public "slotLimit"(arg0: integer): T
public "airPurifier"(arg0: integer, arg1: integer): T
public "waterPurifier"(arg0: integer, arg1: $Percentage$Type): T
public static "of"(arg0: string): $FilterFrame$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$Properties$Type<T> = ($FilterFrame$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$Properties_<T> = $FilterFrame$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$RegisterGuiOverlaysEvent, $RegisterGuiOverlaysEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterGuiOverlaysEvent"
import {$ServerCommand, $ServerCommand$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemModel$RegistryWrapper, $ItemModel$RegistryWrapper$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$RegistryWrapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Namespace, $Namespace$Type} from "packages/com/endertech/minecraft/forge/data/$Namespace"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$ItemModel$Properties, $ItemModel$Properties$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties"
import {$PlayerRenderer, $PlayerRenderer$Type} from "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer"
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$AbstractForgeMod$RequiredSide, $AbstractForgeMod$RequiredSide$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide"
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RegisterParticleProvidersEvent, $RegisterParticleProvidersEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterParticleProvidersEvent"
import {$RegisterKeyMappingsEvent, $RegisterKeyMappingsEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterKeyMappingsEvent"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$PlayerModel, $PlayerModel$Type} from "packages/net/minecraft/client/model/$PlayerModel"
import {$Connection, $Connection$Type} from "packages/com/endertech/minecraft/forge/network/$Connection"
import {$DataCollector, $DataCollector$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $AbstractForgeMod {


public "gatherData"(arg0: $DataCollector$Type): void
public "setRenderLayer"(arg0: $Block$Type, arg1: $RenderType$Type): void
public "setRenderLayer"(arg0: $Fluid$Type, arg1: $RenderType$Type): void
public "getNamespace"(): $Namespace
public "getLogger"(): $Logger
public "getId"(): string
public static "isLoaded"(arg0: string): boolean
public "getModEventBus"(): $IEventBus
public "clientInit"(): void
public "getForgeEventBus"(): $IEventBus
public "getRequiredSide"(): $AbstractForgeMod$RequiredSide
public "isClientSide"(): boolean
public "clientRegisterParticleProviders"(arg0: $RegisterParticleProvidersEvent$Type): void
public "clientRegisterGuiOverlays"(arg0: $RegisterGuiOverlaysEvent$Type): void
public "clientRegisterKeyMappings"(arg0: $RegisterKeyMappingsEvent$Type): void
public "clientBuildCreativeModeTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "commonInit"(): void
public "commonPostInit"(): void
public "commonConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "clientConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "configUpdated"(arg0: $ModConfig$Type): void
public "clientAddRenderLayers"(): void
public "clientReplaceModels"(arg0: $ItemModel$RegistryWrapper$Type): void
public "clientRegisterRenderers"(): void
public "clientRegisterItemModelProperties"(arg0: $ItemModel$Properties$Type<(any)>): void
public "registerCommands"(arg0: $ServerCommand$Type, arg1: $CommandBuildContext$Type): void
public "tagsUpdated"(): void
public "addPostInitRunnable"(arg0: $Runnable$Type): void
public "addPlayerRenderLayer"(arg0: $Function$Type<($PlayerRenderer$Type), ($RenderLayer$Type<($AbstractClientPlayer$Type), ($PlayerModel$Type<($AbstractClientPlayer$Type)>)>)>): void
public static "singletonInstance"<T>(arg0: string, arg1: $Class$Type<(T)>): $Lazy<($Optional<(T)>)>
public "getConfigsDir"(): $Path
public "getConnection"(): $Connection
get "namespace"(): $Namespace
get "logger"(): $Logger
get "id"(): string
get "modEventBus"(): $IEventBus
get "forgeEventBus"(): $IEventBus
get "requiredSide"(): $AbstractForgeMod$RequiredSide
get "clientSide"(): boolean
get "configsDir"(): $Path
get "connection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$Type = ($AbstractForgeMod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod_ = $AbstractForgeMod$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$BlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilterFrame$BlockItem extends $BlockItem implements $IStorageItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $ForgeBlock$Type, arg1: $Item$Properties$Type)

public "getInitialCapacity"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "getContent"(arg0: $ItemStack$Type): $IStorage$Content
public "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "installFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "removeFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "fill"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "free"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$BlockItem$Type = ($FilterFrame$BlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$BlockItem_ = $FilterFrame$BlockItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$FluidImpacts" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$BlockImpactList$AbstractAction, $BlockImpactList$AbstractAction$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList$AbstractAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AbstractImpacts, $AbstractImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractImpacts"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidImpacts extends $AbstractImpacts {

constructor(arg0: $UnitConfig$Type)

public "doImpacts"(arg0: $FluidState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
public "findPollutingFluidInWaterAtPosOrAbove"(arg0: $ServerLevelAccessor$Type, arg1: $BlockPos$Type): $Optional<($BlockPos)>
public "getAllFluids"(): $List<(string)>
public "contains"(arg0: $FluidState$Type): boolean
public "getAction"(arg0: $FluidState$Type, arg1: $BlockState$Type): $Optional<($BlockImpactList$AbstractAction)>
public "onPostInit"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "allFluids"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidImpacts$Type = ($FluidImpacts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidImpacts_ = $FluidImpacts$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/entities/$AbstractCarrier" {
import {$BlockStateCarrier, $BlockStateCarrier$Type} from "packages/com/endertech/minecraft/forge/entities/$BlockStateCarrier"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractCarrier extends $BlockStateCarrier {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "spend"(): boolean
public "getPollutionCapacity"(): integer
public "getPollutant"(): $Optional<($Pollutant<(any)>)>
public "getPollutionAmount"(): integer
public "canBeCollidedWith"(): boolean
public "pump"(): boolean
get "pollutionCapacity"(): integer
get "pollutant"(): $Optional<($Pollutant<(any)>)>
get "pollutionAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCarrier$Type = ($AbstractCarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCarrier_ = $AbstractCarrier$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/entities/$GasEntity" {
import {$AbstractCarrier, $AbstractCarrier$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$AbstractCarrier"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GasEntity extends $AbstractCarrier {
static readonly "FULL_RENDER_SCALE": float
static "maxGasEntitiesInChunk": $ForgeConfigSpec$ConfigValue<(integer)>
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "fasterThan"(arg0: $GasEntity$Type): boolean
public "updateRenderSizeXZ"(): void
public "getRenderOffset"(arg0: $Direction$Axis$Type): float
public "getRenderScale"(arg0: $Direction$Axis$Type): float
public "setStuck"(arg0: boolean): void
public "isStuck"(): boolean
public "baseTick"(): void
public "ignoreExplosion"(): boolean
set "stuck"(value: boolean)
get "stuck"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasEntity$Type = ($GasEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasEntity_ = $GasEntity$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/emissions/$Emission" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export class $Emission {
static readonly "NONE": float
static readonly "CATEGORY": string
static "globalRate": $ForgeConfigSpec$ConfigValue<(double)>

constructor(arg0: $Pollutant$Type<(any)>, arg1: float)

public "getPollutant"(): $Pollutant<(any)>
public static "of"(arg0: $Pollutant$Type<(any)>, arg1: float): $Emission
public "getAmount"(): float
get "pollutant"(): $Pollutant<(any)>
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emission$Type = ($Emission);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emission_ = $Emission$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Condition" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FilterFrame$Condition extends $Enum<($FilterFrame$Condition)> implements $IForgeEnum {
static readonly "CLEAN": $FilterFrame$Condition
static readonly "DIRTY": $FilterFrame$Condition


public static "values"(): ($FilterFrame$Condition)[]
public static "valueOf"(arg0: string): $FilterFrame$Condition
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$Condition$Type = (("dirty") | ("clean")) | ($FilterFrame$Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$Condition_ = $FilterFrame$Condition$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$UnitsInitWithEnum" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitsInit, $UnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$UnitsInit"

export class $UnitsInitWithEnum<U, E extends ($Enum<(any)>) & ($IForgeEnum)> extends $UnitsInit<(U)> {

constructor(arg0: $AbstractForgeMod$Type, arg1: $Class$Type<(E)>)

public "reloadConfigs"(): void
public "createDefaultUnitFrom"(arg0: $UnitConfig$Type, arg1: E): U
public "createCustomUnitFrom"(arg0: $UnitConfig$Type, arg1: string): U
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitsInitWithEnum$Type<U, E> = ($UnitsInitWithEnum<(U), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitsInitWithEnum_<U, E> = $UnitsInitWithEnum$Type<(U), (E)>;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ISmokeContainer, $ISmokeContainer$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IWaterLoggable, $IWaterLoggable$Type} from "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $Container extends $ForgeBlock implements $ISmokeContainer, $IWaterLoggable {
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Container$Properties$Type<(any)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getColor"(): $ColorARGB
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isChimney"(): boolean
public "isVent"(): boolean
public "isPump"(): boolean
public "isPipe"(): boolean
public "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
public "getType"(): $ISmokeContainer$Type
public "is"(arg0: $ISmokeContainer$Type$Type): boolean
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "color"(): $ColorARGB
get "chimney"(): boolean
get "vent"(): boolean
get "pump"(): boolean
get "pipe"(): boolean
get "type"(): $ISmokeContainer$Type
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$Type = ($Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Container_ = $Container$Type;
}}
declare module "packages/com/endertech/common/$CommonMath$Interpolation" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"

export class $CommonMath$Interpolation<T extends number> {
readonly "source": $IBounds<(T)>
readonly "dest": $IBounds<(T)>

constructor(arg0: $IBounds$Type<(T)>, arg1: $IBounds$Type<(T)>)

public static "strictUp"(arg0: float, arg1: $IntBounds$Type): integer
public static "strictUp"(arg0: float, arg1: $FloatBounds$Type): float
public static "strictDown"(arg0: float, arg1: $IntBounds$Type): integer
public static "strictDown"(arg0: float, arg1: $FloatBounds$Type): float
public static "straight"(arg0: float, arg1: float, arg2: float): float
public "straight"(arg0: T): T
public static "up"(arg0: float, arg1: $IntBounds$Type): integer
public static "up"(arg0: float, arg1: $FloatBounds$Type): float
public static "down"(arg0: float, arg1: $FloatBounds$Type): float
public static "down"(arg0: float, arg1: $IntBounds$Type): integer
public "backward"(arg0: T): T
public static "backward"(arg0: float, arg1: float, arg2: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonMath$Interpolation$Type<T> = ($CommonMath$Interpolation<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonMath$Interpolation_<T> = $CommonMath$Interpolation$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Blocks" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$BlocksInit, $BlocksInit$Type} from "packages/com/endertech/minecraft/forge/units/$BlocksInit"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$PollutedWater, $PollutedWater$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater"

export class $Blocks extends $BlocksInit {
readonly "pollutedWater": $RegistryObject<($PollutedWater)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Blocks$Type = ($Blocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Blocks_ = $Blocks$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$DimensionId" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DimensionId {


public "belongsTo"(arg0: $Level$Type): boolean
public "toResourceLocation"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $ResourceKey$Type<($Level$Type)>): $DimensionId
public static "from"(arg0: $Level$Type): $DimensionId
public static "from"(arg0: $ResourceLocation$Type): $DimensionId
public "getKey"(): $ResourceKey<($Level)>
get "key"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionId$Type = ($DimensionId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionId_ = $DimensionId$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney$Properties" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"

export class $Chimney$Properties<T extends $Chimney$Properties<(T)>> extends $Container$Properties<(T)> {
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public "wallThickness"(arg0: integer): T
public static "of"(arg0: string): $Chimney$Properties<(any)>
public "narrow"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chimney$Properties$Type<T> = ($Chimney$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chimney$Properties_<T> = $Chimney$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$BiomeModifierCodecs" {
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$AdPother, $AdPother$Type} from "packages/com/endertech/minecraft/mods/adpother/$AdPother"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PregeneratedClouds$Generator, $PregeneratedClouds$Generator$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Generator"

export class $BiomeModifierCodecs extends $RegistryObjectsInit<($Codec<(any)>)> {
readonly "cloud_generator": $RegistryObject<($Codec<($PregeneratedClouds$Generator)>)>

constructor(arg0: $AdPother$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifierCodecs$Type = ($BiomeModifierCodecs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifierCodecs_ = $BiomeModifierCodecs$Type;
}}
declare module "packages/com/endertech/minecraft/forge/types/$ParticleType$Builder" {
import {$ParticleType, $ParticleType$Type} from "packages/com/endertech/minecraft/forge/types/$ParticleType"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleType$Builder<T extends $ParticleOptions> {


public "alwaysShow"(): $ParticleType$Builder<(T)>
public "build"(): $ParticleType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleType$Builder$Type<T> = ($ParticleType$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleType$Builder_<T> = $ParticleType$Builder$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Pollutants" {
import {$UnitsInitWithEnum, $UnitsInitWithEnum$Type} from "packages/com/endertech/minecraft/forge/units/$UnitsInitWithEnum"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Pollutants$BuiltIn, $Pollutants$BuiltIn$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Pollutants$BuiltIn"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export class $Pollutants extends $UnitsInitWithEnum<($Pollutant<(any)>), ($Pollutants$BuiltIn)> {

constructor(arg0: $AbstractForgeMod$Type)

public "reloadConfigs"(): void
public "createDefaultUnitFrom"(arg0: $UnitConfig$Type, arg1: $Pollutants$BuiltIn$Type): $Pollutant<(any)>
public "findByName"(arg0: string): $Optional<($Pollutant<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutants$Type = ($Pollutants);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutants_ = $Pollutants$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$INBTSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $INBTSerializable<T> {

 "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
 "readFrom"(arg0: $CompoundTag$Type): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/items/$ForgeItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ForgeItem$Properties, $ForgeItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeItem extends $Item implements $IHaveConfig {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $ForgeItem$Properties$Type<(any)>)

public static "notBroken"(arg0: $ItemStack$Type): boolean
public static "isBroken"(arg0: $ItemStack$Type): boolean
public static "getRegistryName"(arg0: $Item$Type): $ResourceLocation
public static "damageItem"<T extends $LivingEntity>(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: T, arg4: $Consumer$Type<(T)>): void
public "getConfig"(): $UnitConfig
public static "indexIn"(arg0: $Inventory$Type, arg1: $Predicate$Type<($ItemStack$Type)>): $Optional<(integer)>
public "saveConfig"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getClassCategory"(): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "getClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItem$Type = ($ForgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItem_ = $ForgeItem$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$LanguageProviderFactory" {
import {$LanguageProvider, $LanguageProvider$Type} from "packages/net/minecraftforge/common/data/$LanguageProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"

export interface $DataCollector$LanguageProviderFactory<T extends $LanguageProvider> {

 "create"(arg0: $PackOutput$Type, arg1: string, arg2: string): T

(arg0: $PackOutput$Type, arg1: string, arg2: string): T
}

export namespace $DataCollector$LanguageProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$LanguageProviderFactory$Type<T> = ($DataCollector$LanguageProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$LanguageProviderFactory_<T> = $DataCollector$LanguageProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IPollutant$Type extends $Enum<($IPollutant$Type)> {
static readonly "AIR": $IPollutant$Type
static readonly "WATER": $IPollutant$Type
static readonly "SOIL": $IPollutant$Type


public static "values"(): ($IPollutant$Type)[]
public static "valueOf"(arg0: string): $IPollutant$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPollutant$Type$Type = (("soil") | ("air") | ("water")) | ($IPollutant$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPollutant$Type_ = $IPollutant$Type$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IWriter" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ForgeNetMsg$IWriter<T> {

 "write"(arg0: T, arg1: $FriendlyByteBuf$Type): void

(arg0: T, arg1: $FriendlyByteBuf$Type): void
}

export namespace $ForgeNetMsg$IWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$IWriter$Type<T> = ($ForgeNetMsg$IWriter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg$IWriter_<T> = $ForgeNetMsg$IWriter$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Sources" {
import {$AnimalDying, $AnimalDying$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$AnimalDying"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"
import {$PlayerBurning, $PlayerBurning$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$PlayerBurning"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$LavaTouchingWater, $LavaTouchingWater$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LavaTouchingWater"
import {$ReloadableUnitsInit, $ReloadableUnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$ReloadableUnitsInit"
import {$AnimalBurning, $AnimalBurning$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$AnimalBurning"
import {$AnimalFeeding, $AnimalFeeding$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$AnimalFeeding"
import {$Explosion, $Explosion$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$Explosion"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$HostileMobBurning, $HostileMobBurning$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$HostileMobBurning"
import {$PlayerEating, $PlayerEating$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$PlayerEating"
import {$PlayerDying, $PlayerDying$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$PlayerDying"
import {$HostileMobDying, $HostileMobDying$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$HostileMobDying"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Sources extends $ReloadableUnitsInit<($SourceBase)> {
readonly "enabled": $Map<(string), ($ForgeConfigSpec$ConfigValue<(boolean)>)>
 "explosion": $Lazy<($Explosion)>
 "lavaTouchingWater": $Lazy<($LavaTouchingWater)>
 "animalBurning": $Lazy<($AnimalBurning)>
 "animalDying": $Lazy<($AnimalDying)>
 "animalFeeding": $Lazy<($AnimalFeeding)>
 "hostileMobBurning": $Lazy<($HostileMobBurning)>
 "hostileMobDying": $Lazy<($HostileMobDying)>
 "playerBurning": $Lazy<($PlayerBurning)>
 "playerDying": $Lazy<($PlayerDying)>
 "playerEating": $Lazy<($PlayerEating)>

constructor(arg0: $AbstractForgeMod$Type)

public "onPostInit"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sources$Type = ($Sources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sources_ = $Sources$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IReader" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ForgeNetMsg$IReader<T> {

 "read"(arg0: $FriendlyByteBuf$Type): T

(arg0: $FriendlyByteBuf$Type): T
}

export namespace $ForgeNetMsg$IReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$IReader$Type<T> = ($ForgeNetMsg$IReader<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg$IReader_<T> = $ForgeNetMsg$IReader$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $AbstractForgeMod$ConfigValueBuilder {
readonly "builder": $ForgeConfigSpec$Builder

constructor()

public "defineFactor"(arg0: string, arg1: float): $ForgeConfigSpec$ConfigValue<(double)>
public "worldRestart"(): $AbstractForgeMod$ConfigValueBuilder
public "comment"(arg0: string): $AbstractForgeMod$ConfigValueBuilder
public "shared"(arg0: string): void
public "push"(arg0: string): $AbstractForgeMod$ConfigValueBuilder
public "pop"(): $AbstractForgeMod$ConfigValueBuilder
public "defineInRange"(arg0: string, arg1: integer, arg2: $IntBounds$Type): $ForgeConfigSpec$ConfigValue<(integer)>
public "defineInRange"(arg0: string, arg1: float, arg2: $FloatBounds$Type): $ForgeConfigSpec$ConfigValue<(double)>
public "defineList"(arg0: string, arg1: (string)[], arg2: $Predicate$Type<(string)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineEnum"<T extends $Enum<(T)>>(arg0: string, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "defineEnum"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $Predicate$Type<(T)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"(arg0: string, arg1: $ColorARGB$Type): $ForgeConfigSpec$ConfigValue<(integer)>
public "define"(arg0: string, arg1: boolean): $ForgeConfigSpec$ConfigValue<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$ConfigValueBuilder$Type = ($AbstractForgeMod$ConfigValueBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod$ConfigValueBuilder_ = $AbstractForgeMod$ConfigValueBuilder$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Generator" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractGenerator, $AbstractGenerator$Type} from "packages/com/endertech/minecraft/forge/world/$AbstractGenerator"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $PregeneratedClouds$Generator extends $AbstractGenerator {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $AbstractForgeMod$Type)

public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public static "fillWithGas"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: $AbstractGas$Type): boolean
/**
 * 
 * @deprecated
 */
public static "generateMultilayeredCloud"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $AbstractGas$Type, arg4: integer, arg5: $Random$Type): integer
public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
public static "generateSpots"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: integer, arg3: $AbstractGas$Type, arg4: integer, arg5: $Random$Type): integer
public static "generateCloud"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: integer, arg3: $AbstractGas$Type, arg4: integer, arg5: $Random$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PregeneratedClouds$Generator$Type = ($PregeneratedClouds$Generator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PregeneratedClouds$Generator_ = $PregeneratedClouds$Generator$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump$HopperAnimation" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"

export class $Pump$HopperAnimation {
readonly "valueRange": $FloatBounds
readonly "speedRange": $FloatBounds
readonly "pauseRange": $IntBounds

constructor()

public "getValue"(arg0: float): float
public "tick"(): void
public "updateState"(arg0: boolean, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pump$HopperAnimation$Type = ($Pump$HopperAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pump$HopperAnimation_ = $Pump$HopperAnimation$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Torches$BuiltInEmitters" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Torches$BuiltInEmitters extends $Enum<($Torches$BuiltInEmitters)> implements $IForgeEnum {
static readonly "aether$ambrosium_torch": $Torches$BuiltInEmitters
static readonly "aether$ambrosium_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$acacia_torch": $Torches$BuiltInEmitters
static readonly "chipped$acacia_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$birch_torch": $Torches$BuiltInEmitters
static readonly "chipped$birch_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$crimson_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$crimson_torch": $Torches$BuiltInEmitters
static readonly "chipped$dark_oak_torch": $Torches$BuiltInEmitters
static readonly "chipped$dark_oak_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$glow_torch": $Torches$BuiltInEmitters
static readonly "chipped$glow_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$iron_torch": $Torches$BuiltInEmitters
static readonly "chipped$iron_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$jungle_torch": $Torches$BuiltInEmitters
static readonly "chipped$jungle_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$spruce_torch": $Torches$BuiltInEmitters
static readonly "chipped$spruce_wall_torch": $Torches$BuiltInEmitters
static readonly "chipped$warped_torch": $Torches$BuiltInEmitters
static readonly "chipped$warped_wall_torch": $Torches$BuiltInEmitters
static readonly "framedblocks$framed_torch": $Torches$BuiltInEmitters
static readonly "framedblocks$framed_wall_torch": $Torches$BuiltInEmitters
static readonly "framedblocks$framed_soul_torch": $Torches$BuiltInEmitters
static readonly "framedblocks$framed_soul_wall_torch": $Torches$BuiltInEmitters
static readonly "hardcore_torches$lit_torch": $Torches$BuiltInEmitters
static readonly "hardcore_torches$lit_wall_torch": $Torches$BuiltInEmitters
static readonly "hardcore_torches$smoldering_torch": $Torches$BuiltInEmitters
static readonly "hardcore_torches$smoldering_wall_torch": $Torches$BuiltInEmitters
static readonly "hardcore_torches$lit_lantern": $Torches$BuiltInEmitters
static readonly "hardcore_torches$lit_soul_lantern": $Torches$BuiltInEmitters
static readonly "magnumtorch$diamond_magnum_torch": $Torches$BuiltInEmitters
static readonly "magnumtorch$emerald_magnum_torch": $Torches$BuiltInEmitters
static readonly "magnumtorch$amethyst_magnum_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$spruce_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$birch_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$jungle_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$acacia_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$oak_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$dark_oak_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$crimson_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$warped_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$mangrove_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$bamboo_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_spruce_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_birch_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_jungle_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_acacia_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_oak_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_dark_oak_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_crimson_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_warped_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_mangrove_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$soul_bamboo_tiki_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$reinforced_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$rustic_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$upgraded_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$framed_torch": $Torches$BuiltInEmitters
static readonly "mcwlights$iron_framed_torch": $Torches$BuiltInEmitters
static readonly "minecraft$torch": $Torches$BuiltInEmitters
static readonly "minecraft$wall_torch": $Torches$BuiltInEmitters
static readonly "minecraft$soul_torch": $Torches$BuiltInEmitters
static readonly "minecraft$soul_wall_torch": $Torches$BuiltInEmitters
static readonly "realistictorches$torch_lit": $Torches$BuiltInEmitters
static readonly "realistictorches$torch_smoldering": $Torches$BuiltInEmitters
static readonly "realistictorches$wall_torch_lit": $Torches$BuiltInEmitters
static readonly "realistictorches$wall_torch_smoldering": $Torches$BuiltInEmitters
static readonly "supplementaries$sconce": $Torches$BuiltInEmitters
static readonly "supplementaries$wall_sconce": $Torches$BuiltInEmitters
static readonly "supplementaries$soul_sconce": $Torches$BuiltInEmitters
static readonly "supplementaries$soul_wall_sconce": $Torches$BuiltInEmitters
static readonly "supplementaries$sconce_lever": $Torches$BuiltInEmitters
static readonly "tfc$torch": $Torches$BuiltInEmitters
static readonly "tfc$wall_torch": $Torches$BuiltInEmitters
static readonly "unlit$standing_torch_lit": $Torches$BuiltInEmitters
static readonly "unlit$wall_torch_lit": $Torches$BuiltInEmitters
static readonly "unlit$jack_o_lantern": $Torches$BuiltInEmitters
static readonly "unlit$lantern": $Torches$BuiltInEmitters


public static "values"(): ($Torches$BuiltInEmitters)[]
public static "valueOf"(arg0: string): $Torches$BuiltInEmitters
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Torches$BuiltInEmitters$Type = (("mcwlights$mangrove_tiki_torch") | ("mcwlights$soul_spruce_tiki_torch") | ("tfc$torch") | ("mcwlights$spruce_tiki_torch") | ("realistictorches$wall_torch_smoldering") | ("chipped$glow_torch") | ("supplementaries$sconce") | ("chipped$birch_torch") | ("hardcore_torches$lit_wall_torch") | ("chipped$iron_wall_torch") | ("mcwlights$bamboo_tiki_torch") | ("chipped$dark_oak_torch") | ("framedblocks$framed_soul_wall_torch") | ("mcwlights$soul_dark_oak_tiki_torch") | ("chipped$acacia_wall_torch") | ("hardcore_torches$lit_torch") | ("mcwlights$framed_torch") | ("chipped$warped_torch") | ("hardcore_torches$lit_soul_lantern") | ("supplementaries$sconce_lever") | ("mcwlights$soul_bamboo_tiki_torch") | ("mcwlights$warped_tiki_torch") | ("chipped$jungle_torch") | ("supplementaries$soul_wall_sconce") | ("mcwlights$birch_tiki_torch") | ("mcwlights$soul_warped_tiki_torch") | ("chipped$iron_torch") | ("unlit$standing_torch_lit") | ("chipped$acacia_torch") | ("mcwlights$crimson_tiki_torch") | ("mcwlights$soul_mangrove_tiki_torch") | ("unlit$lantern") | ("mcwlights$soul_crimson_tiki_torch") | ("supplementaries$wall_sconce") | ("minecraft$torch") | ("mcwlights$upgraded_torch") | ("mcwlights$rustic_torch") | ("supplementaries$soul_sconce") | ("chipped$dark_oak_wall_torch") | ("mcwlights$oak_tiki_torch") | ("chipped$crimson_torch") | ("hardcore_torches$lit_lantern") | ("mcwlights$jungle_tiki_torch") | ("aether$ambrosium_torch") | ("chipped$crimson_wall_torch") | ("magnumtorch$emerald_magnum_torch") | ("realistictorches$torch_lit") | ("chipped$jungle_wall_torch") | ("magnumtorch$diamond_magnum_torch") | ("framedblocks$framed_soul_torch") | ("mcwlights$iron_framed_torch") | ("mcwlights$soul_oak_tiki_torch") | ("realistictorches$wall_torch_lit") | ("unlit$jack_o_lantern") | ("chipped$spruce_torch") | ("chipped$glow_wall_torch") | ("framedblocks$framed_torch") | ("mcwlights$soul_jungle_tiki_torch") | ("minecraft$soul_wall_torch") | ("unlit$wall_torch_lit") | ("aether$ambrosium_wall_torch") | ("mcwlights$soul_acacia_tiki_torch") | ("mcwlights$acacia_tiki_torch") | ("realistictorches$torch_smoldering") | ("hardcore_torches$smoldering_wall_torch") | ("magnumtorch$amethyst_magnum_torch") | ("chipped$birch_wall_torch") | ("mcwlights$soul_birch_tiki_torch") | ("mcwlights$reinforced_torch") | ("chipped$warped_wall_torch") | ("minecraft$soul_torch") | ("tfc$wall_torch") | ("chipped$spruce_wall_torch") | ("framedblocks$framed_wall_torch") | ("hardcore_torches$smoldering_torch") | ("minecraft$wall_torch") | ("mcwlights$dark_oak_tiki_torch")) | ($Torches$BuiltInEmitters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Torches$BuiltInEmitters_ = $Torches$BuiltInEmitters$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$AnimalDying" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $AnimalDying extends $LivingSourceBase<($Mob)> {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalDying$Type = ($AnimalDying);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalDying_ = $AnimalDying$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$LivingImpacts" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractEntityImpacts, $AbstractEntityImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractEntityImpacts"

export class $LivingImpacts extends $AbstractEntityImpacts {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingImpacts$Type = ($LivingImpacts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingImpacts_ = $LivingImpacts$Type;
}}
declare module "packages/com/endertech/minecraft/forge/properties/synched/$SynchedEnumProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$AbstractSynchedProperty, $AbstractSynchedProperty$Type} from "packages/com/endertech/minecraft/forge/properties/synched/$AbstractSynchedProperty"

export class $SynchedEnumProperty<E extends $Enum<(E)>> extends $AbstractSynchedProperty<(E)> {
readonly "validator": $Predicate<(E)>
readonly "name": string
readonly "comment": string
readonly "defaultValue": T

constructor(arg0: string, arg1: E, arg2: $Predicate$Type<(E)>, arg3: string)

public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "define"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynchedEnumProperty$Type<E> = ($SynchedEnumProperty<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SynchedEnumProperty_<E> = $SynchedEnumProperty$Type<(E)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Emitters" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$Emitter, $Emitter$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$Emitter"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$EmittersInit, $EmittersInit$Type} from "packages/com/endertech/minecraft/forge/units/$EmittersInit"
import {$Emitters$BuiltInEmitters, $Emitters$BuiltInEmitters$Type} from "packages/com/endertech/minecraft/mods/adpother/init/$Emitters$BuiltInEmitters"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $Emitters extends $EmittersInit<($Emitter), ($Emitters$BuiltInEmitters)> {

constructor(arg0: $AbstractForgeMod$Type)

public "createDefaultUnitFrom"(arg0: $UnitConfig$Type, arg1: $Emitters$BuiltInEmitters$Type): $Emitter
public "getRandomlyTicking"(arg0: $BlockState$Type): $Optional<($Emitter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emitters$Type = ($Emitters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emitters_ = $Emitters$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$ClientDataProviderFactory" {
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export interface $DataCollector$ClientDataProviderFactory<T extends $DataProvider> {

 "create"(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$ClientDataProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$ClientDataProviderFactory$Type<T> = ($DataCollector$ClientDataProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$ClientDataProviderFactory_<T> = $DataCollector$ClientDataProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$Emitter" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEmitter$Type, $IEmitter$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SourceBase, $SourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Emitter$Properties, $Emitter$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$Emitter$Properties"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEmitter, $IEmitter$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Emitter extends $SourceBase implements $IEmitter {

constructor(arg0: $UnitConfig$Type, arg1: $Emitter$Properties$Type<(any)>)

public "getClassCategory"(): string
public "getActiveTag"(): string
public "getIdentityTag"(): $KeyValuePair
public "getRelatedBlocks"(): $Set<($BlockState)>
public "getExhaustPosition"(arg0: $LevelAccessor$Type, arg1: $INBTSerializable$Type<($CompoundTag$Type)>, arg2: $BlockPos$Type): $BlockPos
public "hasSeparateRateControl"(): boolean
public "toString"(): string
public "getType"(): $IEmitter$Type
public "isActive"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
public "onPostInit"(): void
public "isIdentified"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
public "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "getRelatedId"(): $UnitId
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "classCategory"(): string
get "activeTag"(): string
get "identityTag"(): $KeyValuePair
get "relatedBlocks"(): $Set<($BlockState)>
get "type"(): $IEmitter$Type
get "relatedId"(): $UnitId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emitter$Type = ($Emitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emitter_ = $Emitter$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$IHaveConfig" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IHaveConfig {

 "saveConfig"(): void
 "getClassCategory"(): string
 "getClassCategory"(arg0: string): string
 "expandClassCategory"(arg0: string): string
 "expandClassCategory"(arg0: string, arg1: string): string
 "getConfig"(): $UnitConfig

(): void
}

export namespace $IHaveConfig {
function expandCategory(arg0: string, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveConfig$Type = ($IHaveConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveConfig_ = $IHaveConfig$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pipe" {
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IPole, $IPole$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPole"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"

export class $Pipe extends $Container implements $IPole {
static readonly "SHAPE": $VoxelShape
static "maxPipesAtOnce": $ForgeConfigSpec$ConfigValue<(integer)>
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $Container$Properties$Type<(any)>)

public "isApex"(arg0: $BlockState$Type): boolean
public "isPole"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "canStayAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "isApex"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "isPole"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "buildBy"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: integer): $InteractionResult
public "breakBy"(arg0: $Player$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: integer): void
public static "isEmptyPlace"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "canBuildUp"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getTop"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public "getBottom"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public "buildUp"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer): integer
public "breakDown"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: boolean): integer
public "playPlaceSound"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public static "replaceWith"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "type"(): $ISmokeContainer$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$Type = ($Pipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pipe_ = $Pipe$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$HostileMobImpacts" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractEntityImpacts, $AbstractEntityImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractEntityImpacts"

export class $HostileMobImpacts extends $AbstractEntityImpacts {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HostileMobImpacts$Type = ($HostileMobImpacts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HostileMobImpacts_ = $HostileMobImpacts$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$ItemsInit" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"

export class $ItemsInit extends $RegistryObjectsInit<($Item)> {

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemsInit$Type = ($ItemsInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemsInit_ = $ItemsInit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"

export class $ForgeBlock extends $Block implements $IHaveConfig {
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $UnitConfig$Type, arg1: $ForgeBlock$Properties$Type<(any)>)
constructor(arg0: $UnitConfig$Type, arg1: $BlockBehaviour$Properties$Type)

public static "isUnderRain"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "isUnderOpenSky"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "isGlass"(arg0: $BlockState$Type): boolean
public static "getRegistryName"(arg0: $Fluid$Type): $ResourceLocation
public static "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "isLiquid"(arg0: $BlockState$Type): boolean
public "getConfig"(): $UnitConfig
public "saveConfig"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getClassCategory"(): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "getClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeBlock$Type = ($ForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeBlock_ = $ForgeBlock$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList$AbstractAction" {
import {$BlockImpactList$ActionType, $BlockImpactList$ActionType$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$BlockImpactList$ActionType"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockImpactList$AbstractAction {
readonly "type": $BlockImpactList$ActionType
readonly "threshold": $Percentage

constructor(arg0: $BlockImpactList$ActionType$Type, arg1: $Percentage$Type)

public "perform"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockImpactList$AbstractAction$Type = ($BlockImpactList$AbstractAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockImpactList$AbstractAction_ = $BlockImpactList$AbstractAction$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Property$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Property$Type extends $Enum<($Property$Type)> {
static readonly "STRING": $Property$Type
static readonly "INTEGER": $Property$Type
static readonly "BOOLEAN": $Property$Type
static readonly "DOUBLE": $Property$Type
static readonly "COLOR": $Property$Type
static readonly "MOD_ID": $Property$Type


public static "values"(): ($Property$Type)[]
public static "valueOf"(arg0: string): $Property$Type
public "getID"(): character
public static "tryParse"(arg0: character): $Property$Type
get "iD"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type$Type = (("boolean") | ("mod_id") | ("string") | ("color") | ("double") | ("integer")) | ($Property$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property$Type_ = $Property$Type$Type;
}}
declare module "packages/com/endertech/minecraft/forge/core/$IPostInit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPostInit {

 "onPostInit"(): void

(): void
}

export namespace $IPostInit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPostInit$Type = ($IPostInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPostInit_ = $IPostInit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$RegistryWrapper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemModel$IModelWrapperFactory, $ItemModel$IModelWrapperFactory$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$IModelWrapperFactory"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModel$RegistryWrapper {

constructor(arg0: $Map$Type<($ResourceLocation$Type), ($BakedModel$Type)>)

public "replaceModelOf"(arg0: $BlockState$Type, arg1: $BakedModel$Type): boolean
public "replaceModelOf"(arg0: $Item$Type, arg1: $ItemModel$IModelWrapperFactory$Type<(any)>): boolean
public "replaceModelOf"(arg0: $BlockState$Type, arg1: $ItemModel$IModelWrapperFactory$Type<(any)>): boolean
public "replaceModelOf"(arg0: $Item$Type, arg1: $BakedModel$Type): boolean
public "getModelOf"(arg0: $BlockState$Type): $BakedModel
public "getModelOf"(arg0: $Item$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$RegistryWrapper$Type = ($ItemModel$RegistryWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$RegistryWrapper_ = $ItemModel$RegistryWrapper$Type;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$TileInventory$AbstractContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$PlayerMainInvWrapper, $PlayerMainInvWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$PlayerMainInvWrapper"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$TileInventory, $TileInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$TileInventory"

export class $TileInventory$AbstractContainer extends $AbstractContainerMenu {
static readonly "PLAYER_INVENTORY": $Dimension
static readonly "SLOT_SIZE": $Dimension
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>

constructor(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $Inventory$Type, arg3: $TileInventory$Type)

public "getTileInventory"(): $TileInventory
public "addPlayerSlots"(arg0: integer, arg1: integer): $TileInventory$AbstractContainer
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "slotSize"(): $Dimension
public "stillValid"(arg0: $Player$Type): boolean
public "getPlayerInventory"(): $PlayerMainInvWrapper
get "tileInventory"(): $TileInventory
get "playerInventory"(): $PlayerMainInvWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileInventory$AbstractContainer$Type = ($TileInventory$AbstractContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileInventory$AbstractContainer_ = $TileInventory$AbstractContainer$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$OpLevel" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ServerCommand$OpLevel extends $Enum<($ServerCommand$OpLevel)> {
static readonly "NOOB": $ServerCommand$OpLevel
static readonly "NORMAL": $ServerCommand$OpLevel
static readonly "KICKASS": $ServerCommand$OpLevel
static readonly "GOD": $ServerCommand$OpLevel


public static "values"(): ($ServerCommand$OpLevel)[]
public static "valueOf"(arg0: string): $ServerCommand$OpLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$OpLevel$Type = (("normal") | ("noob") | ("kickass") | ("god")) | ($ServerCommand$OpLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$OpLevel_ = $ServerCommand$OpLevel$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$RecipeSerializers" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$AdPother, $AdPother$Type} from "packages/com/endertech/minecraft/mods/adpother/$AdPother"
import {$FilterChangeRecipe, $FilterChangeRecipe$Type} from "packages/com/endertech/minecraft/mods/adpother/recipes/$FilterChangeRecipe"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $RecipeSerializers extends $RegistryObjectsInit<($RecipeSerializer<(any)>)> {
readonly "filterChange": $RegistryObject<($RecipeSerializer<($FilterChangeRecipe)>)>

constructor(arg0: $AdPother$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializers$Type = ($RecipeSerializers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializers_ = $RecipeSerializers$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractParsableList, $AbstractParsableList$Type} from "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList"
import {$AbstractImpacts, $AbstractImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractImpacts"

export class $AbstractPollutionImpacts<L extends $AbstractParsableList> extends $AbstractImpacts {

constructor(arg0: $UnitConfig$Type)

public "onPostInit"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPollutionImpacts$Type<L> = ($AbstractPollutionImpacts<(L)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPollutionImpacts_<L> = $AbstractPollutionImpacts$Type<(L)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Fuels$BuiltInFuels" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Fuels$BuiltInFuels extends $Enum<($Fuels$BuiltInFuels)> implements $IForgeEnum {
static readonly "group$arrows": $Fuels$BuiltInFuels
static readonly "group$banners": $Fuels$BuiltInFuels
static readonly "group$bio_fuels": $Fuels$BuiltInFuels
static readonly "group$blaze_rods": $Fuels$BuiltInFuels
static readonly "group$beds": $Fuels$BuiltInFuels
static readonly "group$boats": $Fuels$BuiltInFuels
static readonly "group$bookshelves": $Fuels$BuiltInFuels
static readonly "group$carpets": $Fuels$BuiltInFuels
static readonly "group$carrots": $Fuels$BuiltInFuels
static readonly "group$charcoal": $Fuels$BuiltInFuels
static readonly "group$charcoal_dust": $Fuels$BuiltInFuels
static readonly "group$charcoal_blocks": $Fuels$BuiltInFuels
static readonly "group$coal_blocks": $Fuels$BuiltInFuels
static readonly "group$coal_coke": $Fuels$BuiltInFuels
static readonly "group$coal_coke_dust": $Fuels$BuiltInFuels
static readonly "group$coal_coke_blocks": $Fuels$BuiltInFuels
static readonly "group$crops": $Fuels$BuiltInFuels
static readonly "group$ender_pearls": $Fuels$BuiltInFuels
static readonly "group$gunpowder": $Fuels$BuiltInFuels
static readonly "group$feathers": $Fuels$BuiltInFuels
static readonly "group$fishes": $Fuels$BuiltInFuels
static readonly "group$leaves": $Fuels$BuiltInFuels
static readonly "group$logs": $Fuels$BuiltInFuels
static readonly "group$mushrooms": $Fuels$BuiltInFuels
static readonly "group$nether_stars": $Fuels$BuiltInFuels
static readonly "group$rails": $Fuels$BuiltInFuels
static readonly "group$saplings": $Fuels$BuiltInFuels
static readonly "group$seeds": $Fuels$BuiltInFuels
static readonly "group$signs": $Fuels$BuiltInFuels
static readonly "group$small_flowers": $Fuels$BuiltInFuels
static readonly "group$tall_flowers": $Fuels$BuiltInFuels
static readonly "group$lectern_books": $Fuels$BuiltInFuels
static readonly "group$planks": $Fuels$BuiltInFuels
static readonly "group$sulfur_dust": $Fuels$BuiltInFuels
static readonly "group$wooden_fences": $Fuels$BuiltInFuels
static readonly "group$wooden_fence_gates": $Fuels$BuiltInFuels
static readonly "group$wooden_slabs": $Fuels$BuiltInFuels
static readonly "group$wooden_buttons": $Fuels$BuiltInFuels
static readonly "group$wooden_chests": $Fuels$BuiltInFuels
static readonly "group$wooden_doors": $Fuels$BuiltInFuels
static readonly "group$wooden_pressure_plates": $Fuels$BuiltInFuels
static readonly "group$wooden_rods": $Fuels$BuiltInFuels
static readonly "group$wooden_trapdoors": $Fuels$BuiltInFuels
static readonly "group$wooden_stairs": $Fuels$BuiltInFuels
static readonly "group$wool": $Fuels$BuiltInFuels
static readonly "fluid$benzene": $Fuels$BuiltInFuels
static readonly "fluid$biodiesel": $Fuels$BuiltInFuels
static readonly "fluid$bioethanol": $Fuels$BuiltInFuels
static readonly "fluid$biofuel": $Fuels$BuiltInFuels
static readonly "fluid$biogas": $Fuels$BuiltInFuels
static readonly "fluid$biomass": $Fuels$BuiltInFuels
static readonly "fluid$butane": $Fuels$BuiltInFuels
static readonly "fluid$butene": $Fuels$BuiltInFuels
static readonly "fluid$creosote": $Fuels$BuiltInFuels
static readonly "fluid$crudeoil": $Fuels$BuiltInFuels
static readonly "fluid$diesel": $Fuels$BuiltInFuels
static readonly "fluid$ethane": $Fuels$BuiltInFuels
static readonly "fluid$ethanol": $Fuels$BuiltInFuels
static readonly "fluid$ethylene": $Fuels$BuiltInFuels
static readonly "fluid$fishoil": $Fuels$BuiltInFuels
static readonly "fluid$fuelium": $Fuels$BuiltInFuels
static readonly "fluid$gas": $Fuels$BuiltInFuels
static readonly "fluid$gasoline": $Fuels$BuiltInFuels
static readonly "fluid$kerosene": $Fuels$BuiltInFuels
static readonly "fluid$lava": $Fuels$BuiltInFuels
static readonly "fluid$lpg": $Fuels$BuiltInFuels
static readonly "fluid$methane": $Fuels$BuiltInFuels
static readonly "fluid$methanol": $Fuels$BuiltInFuels
static readonly "fluid$naphtha": $Fuels$BuiltInFuels
static readonly "fluid$nitan": $Fuels$BuiltInFuels
static readonly "fluid$octane": $Fuels$BuiltInFuels
static readonly "fluid$petrol": $Fuels$BuiltInFuels
static readonly "fluid$petrolium": $Fuels$BuiltInFuels
static readonly "fluid$phenol": $Fuels$BuiltInFuels
static readonly "fluid$plantoil": $Fuels$BuiltInFuels
static readonly "fluid$propane": $Fuels$BuiltInFuels
static readonly "minecraft$apple": $Fuels$BuiltInFuels
static readonly "minecraft$golden_apple": $Fuels$BuiltInFuels
static readonly "minecraft$armor_stand": $Fuels$BuiltInFuels
static readonly "minecraft$beef": $Fuels$BuiltInFuels
static readonly "minecraft$blaze_powder": $Fuels$BuiltInFuels
static readonly "minecraft$book": $Fuels$BuiltInFuels
static readonly "minecraft$bow": $Fuels$BuiltInFuels
static readonly "minecraft$bowl": $Fuels$BuiltInFuels
static readonly "minecraft$cactus": $Fuels$BuiltInFuels
static readonly "minecraft$carrot_on_a_stick": $Fuels$BuiltInFuels
static readonly "minecraft$chicken": $Fuels$BuiltInFuels
static readonly "minecraft$cobweb": $Fuels$BuiltInFuels
static readonly "minecraft$chorus_plant": $Fuels$BuiltInFuels
static readonly "minecraft$chorus_flower": $Fuels$BuiltInFuels
static readonly "minecraft$coal": $Fuels$BuiltInFuels
static readonly "minecraft$charcoal": $Fuels$BuiltInFuels
static readonly "minecraft$crafting_table": $Fuels$BuiltInFuels
static readonly "minecraft$crossbow": $Fuels$BuiltInFuels
static readonly "minecraft$daylight_detector": $Fuels$BuiltInFuels
static readonly "minecraft$deadbush": $Fuels$BuiltInFuels
static readonly "minecraft$dragon_breath": $Fuels$BuiltInFuels
static readonly "minecraft$dried_kelp_block": $Fuels$BuiltInFuels
static readonly "minecraft$ender_eye": $Fuels$BuiltInFuels
static readonly "minecraft$fire_charge": $Fuels$BuiltInFuels
static readonly "minecraft$firework_rocket": $Fuels$BuiltInFuels
static readonly "minecraft$firework_star": $Fuels$BuiltInFuels
static readonly "minecraft$fishing_rod": $Fuels$BuiltInFuels
static readonly "minecraft$ghast_tear": $Fuels$BuiltInFuels
static readonly "minecraft$grass": $Fuels$BuiltInFuels
static readonly "minecraft$hay_block": $Fuels$BuiltInFuels
static readonly "minecraft$item_frame": $Fuels$BuiltInFuels
static readonly "minecraft$jukebox": $Fuels$BuiltInFuels
static readonly "minecraft$ladder": $Fuels$BuiltInFuels
static readonly "minecraft$lever": $Fuels$BuiltInFuels
static readonly "minecraft$lily_pad": $Fuels$BuiltInFuels
static readonly "minecraft$magma_cream": $Fuels$BuiltInFuels
static readonly "minecraft$map": $Fuels$BuiltInFuels
static readonly "minecraft$mutton": $Fuels$BuiltInFuels
static readonly "minecraft$note_block": $Fuels$BuiltInFuels
static readonly "minecraft$painting": $Fuels$BuiltInFuels
static readonly "minecraft$paper": $Fuels$BuiltInFuels
static readonly "minecraft$piston": $Fuels$BuiltInFuels
static readonly "minecraft$poisonous_potato": $Fuels$BuiltInFuels
static readonly "minecraft$porkchop": $Fuels$BuiltInFuels
static readonly "minecraft$potion": $Fuels$BuiltInFuels
static readonly "minecraft$rabbit": $Fuels$BuiltInFuels
static readonly "minecraft$redstone_torch": $Fuels$BuiltInFuels
static readonly "minecraft$rotten_flesh": $Fuels$BuiltInFuels
static readonly "minecraft$seagrass": $Fuels$BuiltInFuels
static readonly "minecraft$shield": $Fuels$BuiltInFuels
static readonly "minecraft$short_grass": $Fuels$BuiltInFuels
static readonly "minecraft$spider_eye": $Fuels$BuiltInFuels
static readonly "minecraft$sticky_piston": $Fuels$BuiltInFuels
static readonly "minecraft$sugar_cane": $Fuels$BuiltInFuels
static readonly "minecraft$tall_grass": $Fuels$BuiltInFuels
static readonly "minecraft$tnt": $Fuels$BuiltInFuels
static readonly "minecraft$tnt_minecart": $Fuels$BuiltInFuels
static readonly "minecraft$torch": $Fuels$BuiltInFuels
static readonly "minecraft$soul_torch": $Fuels$BuiltInFuels
static readonly "minecraft$tripwire_hook": $Fuels$BuiltInFuels
static readonly "minecraft$vine": $Fuels$BuiltInFuels
static readonly "minecraft$wooden_axe": $Fuels$BuiltInFuels
static readonly "minecraft$wooden_hoe": $Fuels$BuiltInFuels
static readonly "minecraft$wooden_pickaxe": $Fuels$BuiltInFuels
static readonly "minecraft$wooden_shovel": $Fuels$BuiltInFuels
static readonly "minecraft$wooden_sword": $Fuels$BuiltInFuels
static readonly "burningfurnace$burned_food_powder": $Fuels$BuiltInFuels
static readonly "rftoolspower$blazing_rod": $Fuels$BuiltInFuels
static readonly "tfc$peat": $Fuels$BuiltInFuels
static readonly "unlit$coal_dust": $Fuels$BuiltInFuels


public static "values"(): ($Fuels$BuiltInFuels)[]
public static "valueOf"(arg0: string): $Fuels$BuiltInFuels
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fuels$BuiltInFuels$Type = (("minecraft$seagrass") | ("group$coal_coke_blocks") | ("group$charcoal") | ("minecraft$shield") | ("minecraft$wooden_pickaxe") | ("group$blaze_rods") | ("group$signs") | ("minecraft$ladder") | ("fluid$gasoline") | ("minecraft$piston") | ("minecraft$mutton") | ("minecraft$charcoal") | ("group$carrots") | ("group$wooden_doors") | ("minecraft$deadbush") | ("minecraft$chorus_flower") | ("minecraft$note_block") | ("group$arrows") | ("fluid$phenol") | ("group$charcoal_dust") | ("group$wooden_slabs") | ("fluid$bioethanol") | ("minecraft$fishing_rod") | ("fluid$diesel") | ("minecraft$daylight_detector") | ("unlit$coal_dust") | ("fluid$fuelium") | ("minecraft$short_grass") | ("fluid$biofuel") | ("group$small_flowers") | ("minecraft$tall_grass") | ("minecraft$bow") | ("fluid$lava") | ("fluid$naphtha") | ("group$wooden_buttons") | ("rftoolspower$blazing_rod") | ("group$feathers") | ("minecraft$tripwire_hook") | ("group$leaves") | ("group$beds") | ("fluid$fishoil") | ("minecraft$dried_kelp_block") | ("fluid$petrolium") | ("fluid$plantoil") | ("group$nether_stars") | ("minecraft$book") | ("group$seeds") | ("minecraft$armor_stand") | ("group$bookshelves") | ("group$charcoal_blocks") | ("minecraft$redstone_torch") | ("group$gunpowder") | ("group$rails") | ("fluid$methane") | ("group$crops") | ("group$bio_fuels") | ("minecraft$hay_block") | ("group$wooden_pressure_plates") | ("minecraft$ender_eye") | ("fluid$petrol") | ("minecraft$painting") | ("fluid$creosote") | ("minecraft$sticky_piston") | ("fluid$kerosene") | ("minecraft$chicken") | ("minecraft$apple") | ("minecraft$beef") | ("minecraft$paper") | ("group$lectern_books") | ("fluid$propane") | ("group$planks") | ("minecraft$map") | ("group$wooden_fences") | ("group$wool") | ("minecraft$vine") | ("fluid$ethane") | ("minecraft$jukebox") | ("group$fishes") | ("minecraft$wooden_shovel") | ("minecraft$magma_cream") | ("tfc$peat") | ("group$logs") | ("fluid$biogas") | ("minecraft$wooden_hoe") | ("fluid$octane") | ("minecraft$cactus") | ("group$wooden_chests") | ("minecraft$tnt_minecart") | ("minecraft$tnt") | ("burningfurnace$burned_food_powder") | ("group$ender_pearls") | ("minecraft$lever") | ("fluid$benzene") | ("group$saplings") | ("minecraft$cobweb") | ("minecraft$spider_eye") | ("group$coal_blocks") | ("minecraft$crossbow") | ("minecraft$firework_rocket") | ("group$wooden_rods") | ("minecraft$blaze_powder") | ("minecraft$poisonous_potato") | ("minecraft$rotten_flesh") | ("minecraft$torch") | ("group$banners") | ("fluid$lpg") | ("group$sulfur_dust") | ("minecraft$bowl") | ("minecraft$lily_pad") | ("fluid$crudeoil") | ("group$boats") | ("minecraft$rabbit") | ("fluid$gas") | ("fluid$butene") | ("minecraft$ghast_tear") | ("minecraft$grass") | ("minecraft$wooden_axe") | ("fluid$butane") | ("minecraft$crafting_table") | ("minecraft$firework_star") | ("group$carpets") | ("group$tall_flowers") | ("fluid$ethanol") | ("minecraft$golden_apple") | ("minecraft$sugar_cane") | ("minecraft$dragon_breath") | ("group$wooden_stairs") | ("minecraft$coal") | ("minecraft$item_frame") | ("fluid$biodiesel") | ("group$coal_coke_dust") | ("group$mushrooms") | ("fluid$biomass") | ("minecraft$soul_torch") | ("minecraft$carrot_on_a_stick") | ("minecraft$chorus_plant") | ("group$coal_coke") | ("fluid$methanol") | ("minecraft$wooden_sword") | ("group$wooden_fence_gates") | ("fluid$nitan") | ("minecraft$porkchop") | ("fluid$ethylene") | ("minecraft$fire_charge") | ("minecraft$potion") | ("group$wooden_trapdoors")) | ($Fuels$BuiltInFuels);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fuels$BuiltInFuels_ = $Fuels$BuiltInFuels$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Carbon" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Carbon extends $AbstractGas {
static readonly "MOVE_DISTANCE": $IntBounds
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $UnitConfig$Type, arg1: string)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Carbon$Type = ($Carbon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Carbon_ = $Carbon$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$AnimalBurning" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $AnimalBurning extends $LivingSourceBase<($Mob)> {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalBurning$Type = ($AnimalBurning);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalBurning_ = $AnimalBurning$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/events/$WorldEvents$Alignment" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WorldEvents$Alignment extends $Enum<($WorldEvents$Alignment)> {
static readonly "TOP": $WorldEvents$Alignment
static readonly "CENTER": $WorldEvents$Alignment
static readonly "BOTTOM": $WorldEvents$Alignment
static readonly "FRONT": $WorldEvents$Alignment
static readonly "BACK": $WorldEvents$Alignment


public "getPositionVec"(arg0: $Entity$Type): $Vec3
public static "values"(): ($WorldEvents$Alignment)[]
public static "valueOf"(arg0: string): $WorldEvents$Alignment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEvents$Alignment$Type = (("top") | ("bottom") | ("center") | ("back") | ("front")) | ($WorldEvents$Alignment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEvents$Alignment_ = $WorldEvents$Alignment$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts$ImpactType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AbstractPollutionImpacts$ImpactType extends $Enum<($AbstractPollutionImpacts$ImpactType)> implements $IForgeEnum {
static readonly "CONTACT": $AbstractPollutionImpacts$ImpactType
static readonly "RAIN": $AbstractPollutionImpacts$ImpactType
static readonly "AIR": $AbstractPollutionImpacts$ImpactType


public static "values"(): ($AbstractPollutionImpacts$ImpactType)[]
public static "valueOf"(arg0: string): $AbstractPollutionImpacts$ImpactType
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPollutionImpacts$ImpactType$Type = (("rain") | ("contact") | ("air")) | ($AbstractPollutionImpacts$ImpactType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPollutionImpacts$ImpactType_ = $AbstractPollutionImpacts$ImpactType$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$RelatedUnit" {
import {$IRelatedUnit, $IRelatedUnit$Type} from "packages/com/endertech/minecraft/forge/units/$IRelatedUnit"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $RelatedUnit implements $IRelatedUnit {

constructor(arg0: $UnitConfig$Type, arg1: $UnitId$Type)

public "getRelatedId"(): $UnitId
public "getConfig"(): $UnitConfig
public "saveConfig"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getClassCategory"(): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "getClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "relatedId"(): $UnitId
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelatedUnit$Type = ($RelatedUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelatedUnit_ = $RelatedUnit$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase" {
import {$RelatedUnit, $RelatedUnit$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnit"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SourceBase$Properties, $SourceBase$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$SourceBase$Properties"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SourceBase extends $RelatedUnit {

constructor(arg0: $UnitConfig$Type, arg1: $SourceBase$Properties$Type<(any)>)

public "getEmissionOf"(arg0: $Pollutant$Type<(any)>): float
public "getPollutants"(): $Set<($Pollutant<(any)>)>
public "toString"(): string
public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "emitAt"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: float): void
public "emitAt"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "pollutants"(): $Set<($Pollutant<(any)>)>
get "enabled"(): boolean
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceBase$Type = ($SourceBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceBase_ = $SourceBase$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$GlassMeter" {
import {$GlassMeter$Properties, $GlassMeter$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$GlassMeter$Properties"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EquipmentItem, $EquipmentItem$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem"
import {$PlayerInteractEvent$LeftClickBlock, $PlayerInteractEvent$LeftClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$LeftClickBlock"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GlassMeter extends $EquipmentItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UnitConfig$Type, arg1: $GlassMeter$Properties$Type<(any)>)

public "getNameColor"(): $ChatFormatting
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getName"(arg0: $ItemStack$Type): $Component
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public static "onLeftClickBlock"(arg0: $PlayerInteractEvent$LeftClickBlock$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "nameColor"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassMeter$Type = ($GlassMeter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassMeter_ = $GlassMeter$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$Connection" {
import {$AbstractForgeMod$RequiredSide, $AbstractForgeMod$RequiredSide$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$PacketDistributor$TargetPoint, $PacketDistributor$TargetPoint$Type} from "packages/net/minecraftforge/network/$PacketDistributor$TargetPoint"
import {$ChunkLoc, $ChunkLoc$Type} from "packages/com/endertech/minecraft/forge/world/$ChunkLoc"
import {$ForgeNetMsg, $ForgeNetMsg$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$DimensionId, $DimensionId$Type} from "packages/com/endertech/minecraft/forge/world/$DimensionId"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Connection {

constructor(arg0: string, arg1: $AbstractForgeMod$RequiredSide$Type)

public static "acceptMissingIf"(arg0: boolean): $Predicate<(string)>
public "sendToPlayer"<MSG>(arg0: MSG, arg1: $ServerPlayer$Type): void
public "sendToAll"<MSG>(arg0: MSG): void
public "getServerPlayers"(): $List<($ServerPlayer)>
public "sendToAllInDimension"<MSG>(arg0: MSG, arg1: $DimensionId$Type): void
public "sendToAllAround"<MSG>(arg0: MSG, arg1: $ServerLevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer): void
public "sendToAllAround"<MSG>(arg0: MSG, arg1: $PacketDistributor$TargetPoint$Type): void
public "sendToAllObservingChunk"<MSG>(arg0: MSG, arg1: $LevelChunk$Type): void
public "sendToAllInChunk"<MSG>(arg0: MSG, arg1: $ChunkLoc$Type): void
public "toVanillaPacket"<MSG>(arg0: MSG, arg1: $NetworkDirection$Type): $Packet<(any)>
public "sendToServer"<MSG>(arg0: MSG): void
public static "enableSynchronization"(): void
public "registerNetMessage"<MSG extends $ForgeNetMsg<(MSG)>>(arg0: MSG): void
get "serverPlayers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$Type = ($Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connection_ = $Connection$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$DustLayer" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $DustLayer {
static readonly "LAYERS": $IntegerProperty
static readonly "DEFAULT": $DustLayer
readonly "blockId": $UnitId
readonly "layerBounds": $IntBounds

constructor(arg0: $UnitId$Type, arg1: $IntBounds$Type)

public "isSameBlock"(arg0: $BlockState$Type): boolean
public "withAddedLayer"(arg0: $BlockState$Type): $BlockState
public "asLayeredBlock"(arg0: integer): $Optional<($BlockState)>
public "getBlockState"(): $Optional<($BlockState)>
public "toString"(): string
get "blockState"(): $Optional<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DustLayer$Type = ($DustLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DustLayer_ = $DustLayer$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/sources/$HostileMobBurning" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$LivingSourceBase, $LivingSourceBase$Type} from "packages/com/endertech/minecraft/mods/adpother/sources/$LivingSourceBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $HostileMobBurning extends $LivingSourceBase<($Mob)> {

constructor(arg0: $UnitConfig$Type)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HostileMobBurning$Type = ($HostileMobBurning);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HostileMobBurning_ = $HostileMobBurning$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ColorARGB$Channel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ColorARGB$Channel {
readonly "value": integer


public static "fromFloat"(arg0: float): $ColorARGB$Channel
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "from"(arg0: integer): $ColorARGB$Channel
public "toFloat"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorARGB$Channel$Type = ($ColorARGB$Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorARGB$Channel_ = $ColorARGB$Channel$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$SoundsInit" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$RegistryObjectsInit, $RegistryObjectsInit$Type} from "packages/com/endertech/minecraft/forge/units/$RegistryObjectsInit"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $SoundsInit extends $RegistryObjectsInit<($SoundEvent)> {

constructor(arg0: $AbstractForgeMod$Type)

public "registerVariableRangeEvent"(arg0: string): $RegistryObject<($SoundEvent)>
public "registerFixedRangeEvent"(arg0: string, arg1: float): $RegistryObject<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundsInit$Type = ($SoundsInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundsInit_ = $SoundsInit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $ITiledBlock<T extends $BlockEntity> extends $EntityBlock {

 "getTileClass"(): $Class<(T)>
 "createTile"(arg0: $BlockPos$Type, arg1: $BlockState$Type): T
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
 "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(T)>
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}

export namespace $ITiledBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITiledBlock$Type<T> = ($ITiledBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITiledBlock_<T> = $ITiledBlock$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractCarrier, $AbstractCarrier$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$AbstractCarrier"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FilterMaterialList, $FilterMaterialList$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$FilterMaterialList"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$BiomeId, $BiomeId$Type} from "packages/com/endertech/minecraft/forge/world/$BiomeId"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$Spread, $Spread$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$Spread"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IPollutant$Type, $IPollutant$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TickActions, $TickActions$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$TickActions"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Pollutant$Properties, $Pollutant$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IPollutant, $IPollutant$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiConfigProperty$BaseProperty, $MultiConfigProperty$BaseProperty$Type} from "packages/com/endertech/minecraft/forge/configs/$MultiConfigProperty$BaseProperty"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EntityGetter, $EntityGetter$Type} from "packages/net/minecraft/world/level/$EntityGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractPollutionImpacts$ImpactType, $AbstractPollutionImpacts$ImpactType$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts$ImpactType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Pollutant<E extends $AbstractCarrier> extends $ForgeBlock implements $IPollutant, $IPostInit {
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $UnitConfig$Type, arg1: $Pollutant$Properties$Type<(any)>, arg2: $Class$Type<(E)>)

public "canSpreadAround"(): boolean
public "canSpreadOverLedge"(): boolean
public "tryMove"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public "tryAffectNearbyBlocks"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public "inAllowableDimension"(arg0: $ServerLevel$Type): boolean
public "getTickActions"(): $TickActions
public "getRandomTickActions"(): $TickActions
public "getMotionFacing"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BiomeId$Type): $Optional<($Direction)>
public "getMotionFacing"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $Optional<($Direction)>
public "getConcentrationAltitudeIn"(arg0: $BiomeId$Type): integer
public "canStateBeSpreaded"(arg0: $BlockState$Type): boolean
public "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "canStateBePumped"(arg0: $BlockState$Type): boolean
public "getPumpedState"(arg0: $BlockState$Type): $BlockState
public "getSpreadedState"(arg0: $BlockState$Type): $BlockState
public "pumpEntitiesAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "getPollutantCarriersAt"(arg0: $EntityGetter$Type, arg1: $BlockPos$Type): $List<(E)>
public "spendEntitiesAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "scheduleUpdate"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getTickDelay"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public "getCarriedPollutionAmount"(arg0: $BlockState$Type): integer
public "createSpread"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Spread
public "tryAffectBlockAt"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $Optional$Type<($Direction$Type)>, arg3: $AbstractPollutionImpacts$ImpactType$Type, arg4: $BlockState$Type): $BlockState
public "isSamePollutant"(arg0: $BlockState$Type): boolean
public "emitFrom"(arg0: $BlockEntity$Type, arg1: $Set$Type<($BlockState$Type)>, arg2: integer): integer
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): integer
public "getPollutionCapacity"(): integer
public "canAffectEntity"(arg0: $Entity$Type, arg1: $AbstractPollutionImpacts$ImpactType$Type, arg2: $Percentage$Type): boolean
public "tryAffectEntity"(arg0: $Entity$Type, arg1: $AbstractPollutionImpacts$ImpactType$Type, arg2: $Percentage$Type): boolean
public "getProtectiveItems"(arg0: $LivingEntity$Type): $Map<($ItemStack), ($IStorageItem)>
public "getTextColor"(): $ChatFormatting
public "getCriticalAmountIn"(arg0: $BiomeId$Type): integer
public "getMotionVelocityIn"(arg0: $BiomeId$Type): float
public "getBiomeProperties"(): $List<($MultiConfigProperty$BaseProperty<($BiomeId), (any)>)>
public "getEmissionRateIn"(arg0: $BiomeId$Type): float
public "getFilterMaterials"(): $FilterMaterialList
public "canAffectBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Optional$Type<($Direction$Type)>, arg4: $AbstractPollutionImpacts$ImpactType$Type): boolean
public "getPercentageAtChunk"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): $Percentage
public "isUnderRainOrStorm"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "trySpread"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BiomeId$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getSimpleName"(): string
public "push"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "getColor"(): $ColorARGB
public "onPostInit"(): void
public "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "canPassThrough"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Direction$Type): boolean
public "affectsPollutionLevel"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getPollutantType"(): $IPollutant$Type
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "tickActions"(): $TickActions
get "randomTickActions"(): $TickActions
get "pollutionCapacity"(): integer
get "textColor"(): $ChatFormatting
get "biomeProperties"(): $List<($MultiConfigProperty$BaseProperty<($BiomeId), (any)>)>
get "filterMaterials"(): $FilterMaterialList
get "simpleName"(): string
get "color"(): $ColorARGB
get "pollutantType"(): $IPollutant$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutant$Type<E> = ($Pollutant<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutant_<E> = $Pollutant$Type<(E)>;
}}
declare module "packages/com/endertech/minecraft/forge/world/$WorldBounds" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $WorldBounds {


public static "getHeightBounds"(arg0: $LevelHeightAccessor$Type): $IntBounds
public static "vertPlane"(arg0: $BlockPos$Type, arg1: integer, arg2: $Direction$Type): $WorldBounds
public static "horizPlane"(arg0: $BlockPos$Type, arg1: integer): $WorldBounds
public "toAABB"(): $AABB
public static "chunksAround"(arg0: $LevelHeightAccessor$Type, arg1: $ChunkPos$Type): $WorldBounds
public "randomPos"(arg0: $Random$Type): $BlockPos
public "vertex"(arg0: $BlockPos$Type): boolean
public "face"(arg0: $BlockPos$Type): boolean
public "getX"(): $IntBounds
public "getY"(): $IntBounds
public "min"(): $BlockPos
public "max"(): $BlockPos
public "size"(): integer
public "offset"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public static "from"(arg0: $IntBounds$Type, arg1: $IntBounds$Type, arg2: $IntBounds$Type): $WorldBounds
public static "from"(arg0: $BlockPos$Type, arg1: integer): $WorldBounds
public static "from"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $WorldBounds
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "reduce"(arg0: integer): $WorldBounds
public "reduce"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public "relative"(arg0: $BlockPos$Type): $BlockPos
public "encloses"(arg0: $BlockPos$Type): boolean
public "edge"(arg0: $BlockPos$Type): boolean
public "extend"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public "extend"(arg0: $Direction$Type, arg1: integer): $WorldBounds
public "extend"(arg0: integer): $WorldBounds
public "within"(arg0: $WorldBounds$Type): boolean
public "getZ"(): $IntBounds
public "getHeight"(): integer
get "x"(): $IntBounds
get "y"(): $IntBounds
get "z"(): $IntBounds
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldBounds$Type = ($WorldBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldBounds_ = $WorldBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Tiles" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$FilterFrame$BlockTile, $FilterFrame$BlockTile$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$BlockTile"
import {$TilesInit, $TilesInit$Type} from "packages/com/endertech/minecraft/forge/units/$TilesInit"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $Tiles extends $TilesInit {
readonly "filterFrame": $RegistryObject<($BlockEntityType<($FilterFrame$BlockTile)>)>

constructor(arg0: $AbstractForgeMod$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tiles$Type = ($Tiles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tiles_ = $Tiles$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ForgeNetMsg$IReader, $ForgeNetMsg$IReader$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IReader"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeNetMsg$IWriter, $ForgeNetMsg$IWriter$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IWriter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $ForgeNetMsg<MSG extends $ForgeNetMsg<(MSG)>> {

constructor()

public static "addFieldHandler"<T>(arg0: $Class$Type<(T)>, arg1: $ForgeNetMsg$IReader$Type<(T)>, arg2: $ForgeNetMsg$IWriter$Type<(T)>): void
public "decode"(arg0: $FriendlyByteBuf$Type): MSG
public "encode"(arg0: MSG, arg1: $FriendlyByteBuf$Type): void
public "handle"(arg0: $Level$Type, arg1: $Player$Type): void
public "handle"(arg0: MSG, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "create"(): MSG
public "getSide"(arg0: $NetworkEvent$Context$Type): $LogicalSide
public "getPlayer"(arg0: $NetworkEvent$Context$Type): $Player
public "getClientPlayer"(): $Player
get "clientPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$Type<MSG> = ($ForgeNetMsg<(MSG)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg_<MSG> = $ForgeNetMsg$Type<(MSG)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumTube$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $VacuumTube$Properties<T extends $VacuumTube$Properties<(T)>> extends $DamageableItem$Properties<(T)> {
 "speed": float
 "suckIntoInventory": boolean
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public "suckIntoInventory"(): T
public static "of"(arg0: string): $VacuumTube$Properties<(any)>
public "speed"(arg0: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumTube$Properties$Type<T> = ($VacuumTube$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumTube$Properties_<T> = $VacuumTube$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Impacts" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$HostileMobImpacts, $HostileMobImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$HostileMobImpacts"
import {$FluidImpacts, $FluidImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$FluidImpacts"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractEntityImpacts, $AbstractEntityImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractEntityImpacts"
import {$ReloadableUnitsInit, $ReloadableUnitsInit$Type} from "packages/com/endertech/minecraft/forge/units/$ReloadableUnitsInit"
import {$AbstractImpacts, $AbstractImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractImpacts"
import {$LivingImpacts, $LivingImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$LivingImpacts"
import {$EnvironmentalImpacts, $EnvironmentalImpacts$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$EnvironmentalImpacts"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Impacts extends $ReloadableUnitsInit<($AbstractImpacts)> {
 "environmentalImpacts": $Lazy<($EnvironmentalImpacts)>
 "livingImpacts": $Lazy<($LivingImpacts)>
 "hostileMobImpacts": $Lazy<($HostileMobImpacts)>
 "fluidImpacts": $Lazy<($FluidImpacts)>

constructor(arg0: $AbstractForgeMod$Type)

public "getFor"(arg0: $Entity$Type): $Optional<($AbstractEntityImpacts)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Impacts$Type = ($Impacts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Impacts_ = $Impacts$Type;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$TileInventory" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"

export class $TileInventory extends $ItemStackHandler {

constructor(arg0: $BlockEntity$Type, arg1: integer)

public "getTile"(): $BlockEntity
get "tile"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileInventory$Type = ($TileInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileInventory_ = $TileInventory$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/items/$HookItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HookType, $HookType$Type} from "packages/com/endertech/minecraft/mods/adhooks/properties/$HookType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ForgeItem, $ForgeItem$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem"
import {$ForgeItem$Properties, $ForgeItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HookItem extends $ForgeItem {
readonly "hookType": $HookType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $HookType$Type, arg1: $ForgeItem$Properties$Type<(any)>)

public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HookItem$Type = ($HookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HookItem_ = $HookItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export class $IStorage$Content {
 "changed": boolean

constructor(arg0: integer)

public "getFiltersAmount"(): integer
public "removeAllFilters"(): $IStorage$Content
public "getFreeSpaceFor"(arg0: $Pollutant$Type<(any)>): integer
public "getFullnessPercentageFor"(arg0: $Pollutant$Type<(any)>): $Percentage
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "hasFilterFor"(arg0: $Pollutant$Type<(any)>): boolean
public "getFullnessWith"(arg0: $Pollutant$Type<(any)>): integer
public "fillWith"(arg0: $Pollutant$Type<(any)>, arg1: integer): integer
public "installFiltersFor"(arg0: integer, ...arg1: ($Pollutant$Type<(any)>)[]): $IStorage$Content
public "setFullnessWith"(arg0: $Pollutant$Type<(any)>, arg1: integer): $IStorage$Content
public "getHighestFullnessPercentage"(): $Percentage
public "removeFiltersFor"(...arg0: ($Pollutant$Type<(any)>)[]): $IStorage$Content
public "freeFrom"(arg0: $Pollutant$Type<(any)>, arg1: integer): integer
public "hasFunctionalFilters"(): boolean
public "getHighestFullness"(): integer
public "readFromNBT"(arg0: $CompoundTag$Type): void
public static "from"(arg0: $CompoundTag$Type): $IStorage$Content
public "getCapacity"(): integer
public "setCapacity"(arg0: integer): $IStorage$Content
get "filtersAmount"(): integer
get "highestFullnessPercentage"(): $Percentage
get "highestFullness"(): integer
get "capacity"(): integer
set "capacity"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorage$Content$Type = ($IStorage$Content);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorage$Content_ = $IStorage$Content$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$BaseFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $PollutedWater$BaseFluid extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "m_5486_"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type, arg4: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$BaseFluid$Type = ($PollutedWater$BaseFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater$BaseFluid_ = $PollutedWater$BaseFluid$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$MultiConfigProperty$BaseProperty" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"

export class $MultiConfigProperty$BaseProperty<K, V> {


public "resetToDefaultValue"(): void
public "putValueFrom"(arg0: $UnitConfig$Type, arg1: K, arg2: boolean): void
public "getName"(): string
public "get"(arg0: K): V
public "getDefaultValue"(): V
public "getFrom"(arg0: $UnitConfig$Type, arg1: string, arg2: V): V
public "getComment"(): string
public "getCategory"(): string
get "name"(): string
get "defaultValue"(): V
get "comment"(): string
get "category"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiConfigProperty$BaseProperty$Type<K, V> = ($MultiConfigProperty$BaseProperty<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiConfigProperty$BaseProperty_<K, V> = $MultiConfigProperty$BaseProperty$Type<(K), (V)>;
}}
declare module "packages/com/endertech/minecraft/forge/entities/$BlockStateCarrier" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ForgeEntity, $ForgeEntity$Type} from "packages/com/endertech/minecraft/forge/entities/$ForgeEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockStateCarrier extends $ForgeEntity {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "carriesSameBlock"(arg0: $Optional$Type<(any)>): boolean
public "getCarriedBlockState"(): $Optional<($BlockState)>
get "carriedBlockState"(): $Optional<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateCarrier$Type = ($BlockStateCarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateCarrier_ = $BlockStateCarrier$Type;
}}
declare module "packages/com/endertech/common/$FloatBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $FloatBounds implements $IBounds<(float)> {
static readonly "ZERO": $FloatBounds
static readonly "FLOAT": $FloatBounds
static readonly "FLOAT_POSITIVE": $FloatBounds

constructor(arg0: float, arg1: float)

public "enclose"(arg0: float): float
public "unite"(arg0: $IBounds$Type<(float)>): $FloatBounds
public "interpolateDown"(arg0: float): float
public "interpolationFactor"(arg0: float): float
public "randomFits"(arg0: float): boolean
public "corners"(arg0: float): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: float): $FloatBounds
public static "of"(arg0: $IBounds$Type<(any)>): $FloatBounds
public static "of"(arg0: float): $FloatBounds
public "offset"(arg0: float): $FloatBounds
public "reduce"(arg0: float): $FloatBounds
public static "between"(arg0: float, arg1: float): $FloatBounds
public "getMin"(): float
public "getMax"(): float
public "fit"(arg0: $MinMaxBounds$Doubles$Type): $FloatBounds
public "center"(): float
public "encloses"(arg0: float): boolean
public "extend"(arg0: float): $FloatBounds
public "within"(arg0: $IBounds$Type<(float)>): boolean
public "interpolateTo"(arg0: $IBounds$Type<(float)>): $CommonMath$Interpolation<(float)>
get "min"(): float
get "max"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatBounds$Type = ($FloatBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatBounds_ = $FloatBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adhooks/items/$LauncherItem" {
import {$HookType, $HookType$Type} from "packages/com/endertech/minecraft/mods/adhooks/properties/$HookType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DamageableItem, $DamageableItem$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LauncherItem extends $DamageableItem {
readonly "hookType": $HookType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $HookType$Type, arg1: $DamageableItem$Properties$Type<(any)>)

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "expandCategory"(arg0: string, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LauncherItem$Type = ($LauncherItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LauncherItem_ = $LauncherItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties" {
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export class $Container$Properties<T extends $Container$Properties<(T)>> extends $ForgeBlock$Properties<(T)> {
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public "glass"(): T
public "stone"(): T
public static "of"(arg0: string): $Container$Properties<(any)>
public "metal"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$Properties$Type<T> = ($Container$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Container$Properties_<T> = $Container$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Pollutants$BuiltIn" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Pollutants$BuiltIn extends $Enum<($Pollutants$BuiltIn)> implements $IForgeEnum {
static readonly "CARBON": $Pollutants$BuiltIn
static readonly "SULFUR": $Pollutants$BuiltIn
static readonly "DUST": $Pollutants$BuiltIn


public "get"(): $Pollutant<(any)>
public static "values"(): ($Pollutants$BuiltIn)[]
public static "valueOf"(arg0: string): $Pollutants$BuiltIn
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutants$BuiltIn$Type = (("carbon") | ("sulfur") | ("dust")) | ($Pollutants$BuiltIn);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutants$BuiltIn_ = $Pollutants$BuiltIn$Type;
}}
