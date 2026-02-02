declare module "packages/immersive_aircraft/entity/misc/$VehicleData" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$VehicleStat, $VehicleStat$Type} from "packages/immersive_aircraft/item/upgrade/$VehicleStat"
import {$WeaponMount$Type, $WeaponMount$Type$Type} from "packages/immersive_aircraft/entity/misc/$WeaponMount$Type"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WeaponMount, $WeaponMount$Type} from "packages/immersive_aircraft/entity/misc/$WeaponMount"
import {$VehicleInventoryDescription, $VehicleInventoryDescription$Type} from "packages/immersive_aircraft/entity/inventory/$VehicleInventoryDescription"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BoundingBoxDescriptor, $BoundingBoxDescriptor$Type} from "packages/immersive_aircraft/entity/misc/$BoundingBoxDescriptor"
import {$PositionDescriptor, $PositionDescriptor$Type} from "packages/immersive_aircraft/entity/misc/$PositionDescriptor"
import {$TrailDescriptor, $TrailDescriptor$Type} from "packages/immersive_aircraft/entity/misc/$TrailDescriptor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleData {

constructor()
constructor(byteBuf: $FriendlyByteBuf$Type)
constructor(json: $JsonObject$Type)

public "getInventoryDescription"(): $VehicleInventoryDescription
public "getWeaponMounts"(): $Map<(integer), ($Map<($WeaponMount$Type), ($List<($WeaponMount)>)>)>
public "getBoundingBoxes"(): $List<($BoundingBoxDescriptor)>
public "getPassengerPositions"(): $List<($List<($PositionDescriptor)>)>
public "getTrails"(): $List<($TrailDescriptor)>
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "getProperties"(): $Map<($VehicleStat), (float)>
get "inventoryDescription"(): $VehicleInventoryDescription
get "weaponMounts"(): $Map<(integer), ($Map<($WeaponMount$Type), ($List<($WeaponMount)>)>)>
get "boundingBoxes"(): $List<($BoundingBoxDescriptor)>
get "passengerPositions"(): $List<($List<($PositionDescriptor)>)>
get "trails"(): $List<($TrailDescriptor)>
get "properties"(): $Map<($VehicleStat), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleData$Type = ($VehicleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleData_ = $VehicleData$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$VehicleProperties" {
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$VehicleStat, $VehicleStat$Type} from "packages/immersive_aircraft/item/upgrade/$VehicleStat"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleProperties {

constructor(baseValues: $Map$Type<($VehicleStat$Type), (float)>, vehicle: $InventoryVehicleEntity$Type)

public "getAdditive"(stat: $VehicleStat$Type): float
public "get"(stat: $VehicleStat$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleProperties$Type = ($VehicleProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleProperties_ = $VehicleProperties$Type;
}}
declare module "packages/immersive_aircraft/entity/$EngineVehicle$Cautions" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EngineVehicle$Cautions extends $Enum<($EngineVehicle$Cautions)> {
static readonly "PULL_UP": $EngineVehicle$Cautions
static readonly "VOID": $EngineVehicle$Cautions
static readonly "DAMAGED": $EngineVehicle$Cautions


public static "values"(): ($EngineVehicle$Cautions)[]
public static "valueOf"(name: string): $EngineVehicle$Cautions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$Cautions$Type = (("pull_up") | ("void") | ("damaged")) | ($EngineVehicle$Cautions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineVehicle$Cautions_ = $EngineVehicle$Cautions$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/$VehicleInventoryDescription" {
import {$SlotDescription$SlotDescriptionFactory, $SlotDescription$SlotDescriptionFactory$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Rect2iCommon, $Rect2iCommon$Type} from "packages/immersive_aircraft/util/$Rect2iCommon"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlotDescription$SlotDescriptionDecoder, $SlotDescription$SlotDescriptionDecoder$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionDecoder"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$SlotDescription, $SlotDescription$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleInventoryDescription {
static readonly "SLOT_TYPES": $Map<(string), ($SlotDescription$SlotDescriptionFactory)>
static readonly "SLOT_DECODER": $Map<(string), ($SlotDescription$SlotDescriptionDecoder)>
static readonly "INVENTORY": string
static readonly "BOILER": string
static readonly "WEAPON": string
static readonly "UPGRADE": string
static readonly "BOOSTER": string
static readonly "BANNER": string
static readonly "DYE": string
static readonly "INGREDIENT": string

constructor()
constructor(inventorySlots: $JsonArray$Type)
constructor(buffer: $FriendlyByteBuf$Type)

public "addRectangle"(x: integer, y: integer, w: integer, h: integer): $VehicleInventoryDescription
public static "registerSlotType"(name: string, slotFactory: $SlotDescription$SlotDescriptionFactory$Type, slotDecoder: $SlotDescription$SlotDescriptionDecoder$Type): string
public "getInventorySize"(): integer
public "addSlots"(type: string, x: integer, y: integer, cols: integer, rows: integer, boxed: boolean, json: $JsonObject$Type): $VehicleInventoryDescription
public "getLastSyncIndex"(): integer
public "getRectangles"(): $List<($Rect2iCommon)>
public "addSlot"(slotDescription: $SlotDescription$Type): $VehicleInventoryDescription
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "build"(): $VehicleInventoryDescription
public "getSlots"(type: string): $List<($SlotDescription)>
public "getSlots"(): $List<($SlotDescription)>
public "getHeight"(): integer
get "inventorySize"(): integer
get "lastSyncIndex"(): integer
get "rectangles"(): $List<($Rect2iCommon)>
get "slots"(): $List<($SlotDescription)>
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleInventoryDescription$Type = ($VehicleInventoryDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleInventoryDescription_ = $VehicleInventoryDescription$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$BoundingBoxDescriptor" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $BoundingBoxDescriptor extends $Record {

constructor(width: float, height: float, x: float, y: float, z: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(buffer: $FriendlyByteBuf$Type): $BoundingBoxDescriptor
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "width"(): float
public "height"(): float
public static "fromJson"(json: $JsonObject$Type): $BoundingBoxDescriptor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxDescriptor$Type = ($BoundingBoxDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundingBoxDescriptor_ = $BoundingBoxDescriptor$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$TrailDescriptor" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $TrailDescriptor extends $Record {

constructor(x: float, y: float, z: float, size: float, rotate: float, gray: float, length: integer)

public "equals"(o: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public static "decode"(buf: $FriendlyByteBuf$Type): $TrailDescriptor
public "encode"(buf: $FriendlyByteBuf$Type): void
public "size"(): float
public "x"(): float
public "z"(): float
public "y"(): float
public "rotate"(): float
public "gray"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailDescriptor$Type = ($TrailDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailDescriptor_ = $TrailDescriptor$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$PositionDescriptor" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $PositionDescriptor extends $Record {

constructor(x: float, y: float, z: float, yaw: float, pitch: float, roll: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(byteBuf: $FriendlyByteBuf$Type): $PositionDescriptor
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "roll"(): float
public "matrix"(): $Matrix4f
public "yaw"(): float
public "pitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionDescriptor$Type = ($PositionDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionDescriptor_ = $PositionDescriptor$Type;
}}
declare module "packages/immersive_aircraft/entity/weapon/$Weapon" {
import {$WeaponMount, $WeaponMount$Type} from "packages/immersive_aircraft/entity/misc/$WeaponMount"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VehicleEntity, $VehicleEntity$Type} from "packages/immersive_aircraft/entity/$VehicleEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Weapon {

constructor(entity: $VehicleEntity$Type, stack: $ItemStack$Type, mount: $WeaponMount$Type, slot: integer)

public "setAnimationVariables"<T extends $VehicleEntity>(entity: T, time: float): void
public "setGunnerOffset"(gunnerOffset: integer): void
public "getMount"(): $WeaponMount
public "getGunnerOffset"(): integer
public "clientFire"(arg0: integer): void
public "getEntity"(): $VehicleEntity
public "getSlot"(): integer
public "getStack"(): $ItemStack
public "tick"(): void
public "fire"(arg0: $Vector3f$Type): void
set "gunnerOffset"(value: integer)
get "mount"(): $WeaponMount
get "gunnerOffset"(): integer
get "entity"(): $VehicleEntity
get "slot"(): integer
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Weapon$Type = ($Weapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Weapon_ = $Weapon$Type;
}}
declare module "packages/immersive_aircraft/entity/$EngineVehicle" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$EngineVehicle$GUI_STYLE, $EngineVehicle$GUI_STYLE$Type} from "packages/immersive_aircraft/entity/$EngineVehicle$GUI_STYLE"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EngineVehicle$Cautions, $EngineVehicle$Cautions$Type} from "packages/immersive_aircraft/entity/$EngineVehicle$Cautions"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $EngineVehicle extends $InventoryVehicleEntity {
readonly "engineRotation": $InterpolatedFloat
readonly "enginePower": $InterpolatedFloat
 "engineSpinUpStrength": float
 "engineSound": float
 "mainWarning": integer
 "mslWarning": integer
readonly "cautions": $EnumMap<($EngineVehicle$Cautions), (integer)>
static readonly "TARGET_FUEL": integer
static readonly "LOW_FUEL": integer
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
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

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "setAnimationVariables"(tickDelta: float): void
public "getGuiStyle"(): $EngineVehicle$GUI_STYLE
public "worksUnderWater"(): boolean
public "getEngineTarget"(): float
public "getPropellerSpeed"(): float
public "setEngineTarget"(engineTarget: float): void
public "getEnginePower"(): float
public "isFuelLow"(): boolean
public "getFuelConsumption"(): float
public "getFuelUtilization"(): float
public "getFuelType"(): string
public "emitSmokeParticle"(x: float, y: float, z: float, nx: float, ny: float, nz: float): void
public "tick"(): void
public "consumeFuel"(consumption: float): float
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "self"(): $Container
public static "tryClear"(arg0: any): void
set "animationVariables"(value: float)
get "guiStyle"(): $EngineVehicle$GUI_STYLE
get "engineTarget"(): float
get "propellerSpeed"(): float
set "engineTarget"(value: float)
get "enginePower"(): float
get "fuelLow"(): boolean
get "fuelConsumption"(): float
get "fuelUtilization"(): float
get "fuelType"(): string
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$Type = ($EngineVehicle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineVehicle_ = $EngineVehicle$Type;
}}
declare module "packages/immersive_aircraft/entity/$EngineVehicle$GUI_STYLE" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EngineVehicle$GUI_STYLE extends $Enum<($EngineVehicle$GUI_STYLE)> {
static readonly "NONE": $EngineVehicle$GUI_STYLE
static readonly "ENGINE": $EngineVehicle$GUI_STYLE


public static "values"(): ($EngineVehicle$GUI_STYLE)[]
public static "valueOf"(name: string): $EngineVehicle$GUI_STYLE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$GUI_STYLE$Type = (("engine") | ("none")) | ($EngineVehicle$GUI_STYLE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineVehicle$GUI_STYLE_ = $EngineVehicle$GUI_STYLE$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$WeaponMount" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $WeaponMount extends $Record {
static readonly "EMPTY": $WeaponMount

constructor(transform: $Matrix4f$Type, blocking: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(buffer: $FriendlyByteBuf$Type): $WeaponMount
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "transform"(): $Matrix4f
public "blocking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$Type = ($WeaponMount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponMount_ = $WeaponMount$Type;
}}
declare module "packages/immersive_aircraft/entity/$InventoryVehicleEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VehicleProperties, $VehicleProperties$Type} from "packages/immersive_aircraft/entity/misc/$VehicleProperties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SparseSimpleInventory, $SparseSimpleInventory$Type} from "packages/immersive_aircraft/entity/inventory/$SparseSimpleInventory"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/$ContainerListener"
import {$VehicleStat, $VehicleStat$Type} from "packages/immersive_aircraft/item/upgrade/$VehicleStat"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$VehicleInventoryDescription, $VehicleInventoryDescription$Type} from "packages/immersive_aircraft/entity/inventory/$VehicleInventoryDescription"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$DyeableVehicleEntity, $DyeableVehicleEntity$Type} from "packages/immersive_aircraft/entity/$DyeableVehicleEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WeaponMount, $WeaponMount$Type} from "packages/immersive_aircraft/entity/misc/$WeaponMount"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Weapon, $Weapon$Type} from "packages/immersive_aircraft/entity/weapon/$Weapon"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryVehicleEntity extends $DyeableVehicleEntity implements $ContainerListener, $MenuProvider, $Container {
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
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

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "getInventoryDescription"(): $VehicleInventoryDescription
public "getWeaponMounts"(slot: integer): $List<($WeaponMount)>
public "boost"(): void
public "canBoost"(): boolean
public "getDurability"(): float
public "getInventory"(): $SparseSimpleInventory
public "getTotalUpgrade"(stat: $VehicleStat$Type): float
public "openInventory"(player: $ServerPlayer$Type): void
public "getWeapons"(): $Map<(integer), ($List<($Weapon)>)>
public "clientFireWeapons"(entity: $Entity$Type): void
public "fireWeapon"(slot: integer, index: integer, direction: $Vector3f$Type): void
public "createMenu"(i: integer, playerInventory: $Inventory$Type, playerEntity: $Player$Type): $AbstractContainerMenu
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "containerChanged"(sender: $Container$Type): void
public "stillValid"(player: $Player$Type): boolean
public "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
public "canTakeItem"(target: $Container$Type, index: integer, stack: $ItemStack$Type): boolean
public "getProperties"(): $VehicleProperties
public "getSlots"(slotType: string): $List<($ItemStack)>
public "tick"(): void
public "interact"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "getContainerSize"(): integer
public "getItem"(slot: integer): $ItemStack
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "getSlot"(slot: integer): $SlotAccess
public "isScoping"(): boolean
public "setChanged"(): void
public "getDisplayName"(): $Component
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "clear"(): void
public "setChanged"(): void
public "asContainer"(): $Container
public "self"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "clear"(ingredient: $Ingredient$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "inventoryDescription"(): $VehicleInventoryDescription
get "durability"(): float
get "inventory"(): $SparseSimpleInventory
get "weapons"(): $Map<(integer), ($List<($Weapon)>)>
get "empty"(): boolean
get "properties"(): $VehicleProperties
get "containerSize"(): integer
get "scoping"(): boolean
get "displayName"(): $Component
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryVehicleEntity$Type = ($InventoryVehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryVehicleEntity_ = $InventoryVehicleEntity$Type;
}}
declare module "packages/immersive_aircraft/entity/$DyeableVehicleEntity" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$VehicleEntity, $VehicleEntity$Type} from "packages/immersive_aircraft/entity/$VehicleEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"

export class $DyeableVehicleEntity extends $VehicleEntity {
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
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

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "getDyeColor"(): integer
public "setDyeColor"(v: integer): void
public "getBodyColor"(): integer
public "getDefaultDyeColor"(): integer
public "getHighlightColor"(): integer
public "getDisplayName"(): $Component
get "dyeColor"(): integer
set "dyeColor"(value: integer)
get "bodyColor"(): integer
get "defaultDyeColor"(): integer
get "highlightColor"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableVehicleEntity$Type = ($DyeableVehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableVehicleEntity_ = $DyeableVehicleEntity$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$Trail" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"

export class $Trail {
readonly "buffer": (float)[]
readonly "size": integer
readonly "gray": float
 "lastIndex": integer
 "entries": integer
 "nullEntries": integer

constructor(length: integer)
constructor(length: integer, gray: float)

public "add"(first: $Vector4f$Type, second: $Vector4f$Type, alpha: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trail$Type = ($Trail);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Trail_ = $Trail$Type;
}}
declare module "packages/immersive_aircraft/entity/$AircraftEntity" {
import {$EngineVehicle, $EngineVehicle$Type} from "packages/immersive_aircraft/entity/$EngineVehicle"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EngineVehicle$Cautions, $EngineVehicle$Cautions$Type} from "packages/immersive_aircraft/entity/$EngineVehicle$Cautions"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Trail, $Trail$Type} from "packages/immersive_aircraft/entity/misc/$Trail"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $AircraftEntity extends $EngineVehicle {
 "inWaterLevel": float
readonly "engineRotation": $InterpolatedFloat
readonly "enginePower": $InterpolatedFloat
 "engineSpinUpStrength": float
 "engineSound": float
 "mainWarning": integer
 "mslWarning": integer
readonly "cautions": $EnumMap<($EngineVehicle$Cautions), (integer)>
static readonly "TARGET_FUEL": integer
static readonly "LOW_FUEL": integer
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
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

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "getTrails"(): $List<($Trail)>
public "chill"(): void
public "getWindEffect"(): $Vector3f
public "getWindStrength"(): float
public "tick"(): void
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "self"(): $Container
public static "tryClear"(arg0: any): void
get "trails"(): $List<($Trail)>
get "windEffect"(): $Vector3f
get "windStrength"(): float
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftEntity$Type = ($AircraftEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AircraftEntity_ = $AircraftEntity$Type;
}}
declare module "packages/immersive_aircraft/entity/$VehicleEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$VehicleData, $VehicleData$Type} from "packages/immersive_aircraft/entity/misc/$VehicleData"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity$MoveFunction, $Entity$MoveFunction$Type} from "packages/net/minecraft/world/entity/$Entity$MoveFunction"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MoverType, $MoverType$Type} from "packages/net/minecraft/world/entity/$MoverType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $VehicleEntity extends $Entity {
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
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

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "getRightDirection"(): $Vector3f
public "getHealth"(): float
public "setHealth"(damage: float): void
public "getDamageWobbleTicks"(): integer
public "getShapes"(): $List<($AABB)>
public "getSpeedVector"(): $Vec3
public "setInputs"(x: float, y: float, z: float): void
public "getVehicleTransform"(): $Matrix4f
public "copyEntityData"(entity: $Entity$Type): void
public "getAdditionalShapes"(): $List<($AABB)>
public "isValidDimension"(): boolean
public "getGunner"(offset: integer): $Entity
public "canTurnOnEngine"(pilot: $Entity$Type): boolean
public "isWithinParticleRange"(): boolean
public "getVehicleNormalTransform"(): $Matrix3f
public "getVehicleNormalTransformQuantized"(): $Matrix3f
public "getForwardDirection"(): $Vector3f
public "getTopDirection"(): $Vector3f
public "chill"(): void
public "toVec3d"(v: $Vector3f$Type): $Vec3
public "isPilotCreative"(): boolean
public "getZoom"(): double
public "setAnimationVariables"(tickDelta: float): void
public "setZRot"(rot: float): void
public "boost"(): void
public "boost"(ticks: integer): void
public "canBoost"(): boolean
public "getBoost"(): integer
public "getVehicleData"(): $VehicleData
public "getPassengerSpace"(): integer
public "getDamageWobbleSide"(): integer
public "setDamageWobbleSide"(side: integer): void
public "setDamageWobbleTicks"(wobbleTicks: integer): void
public "getDamageWobbleStrength"(): float
public "setDamageWobbleStrength"(wobbleStrength: float): void
public "getDurability"(): float
public "fromItemStack"(stack: $ItemStack$Type): void
public "getRoll"(tickDelta: float): float
public "getRoll"(): float
public "tick"(): void
public "asItem"(): $Item
public "attack"(source: $DamageSource$Type, amount: float): boolean
public "setPitch"(pitch: float): void
public "interact"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "skipAttackInteraction"(attacker: $Entity$Type): boolean
public "getDisplayName"(): $Component
public "animateHurt"(yaw: float): void
public "isPickable"(): boolean
public "getDismountLocationForPassenger"(passenger: $LivingEntity$Type): $Vec3
public "move"(movementType: $MoverType$Type, movement: $Vec3$Type): void
public "isNoGravity"(): boolean
public "getControllingPassenger"(): $LivingEntity
public "lerpTo"(x: double, y: double, z: double, yaw: float, pitch: float, interpolationSteps: integer, interpolate: boolean): void
public "getBoundingBoxForCulling"(): $AABB
public "getPickResult"(): $ItemStack
public "onPassengerTurned"(passenger: $Entity$Type): void
public "shouldRenderAtSqrDistance"(distance: double): boolean
public "canCollideWith"(other: $Entity$Type): boolean
public "canBeCollidedWith"(): boolean
public "m_19956_"(passenger: $Entity$Type, positionUpdater: $Entity$MoveFunction$Type): void
public "onAboveBubbleCol"(drag: boolean): void
public static "canCollide"(entity: $Entity$Type, other: $Entity$Type): boolean
get "rightDirection"(): $Vector3f
get "health"(): float
set "health"(value: float)
get "damageWobbleTicks"(): integer
get "shapes"(): $List<($AABB)>
get "speedVector"(): $Vec3
get "vehicleTransform"(): $Matrix4f
get "additionalShapes"(): $List<($AABB)>
get "validDimension"(): boolean
get "withinParticleRange"(): boolean
get "vehicleNormalTransform"(): $Matrix3f
get "vehicleNormalTransformQuantized"(): $Matrix3f
get "forwardDirection"(): $Vector3f
get "topDirection"(): $Vector3f
get "pilotCreative"(): boolean
get "zoom"(): double
set "animationVariables"(value: float)
set "zRot"(value: float)
get "vehicleData"(): $VehicleData
get "passengerSpace"(): integer
get "damageWobbleSide"(): integer
set "damageWobbleSide"(value: integer)
set "damageWobbleTicks"(value: integer)
get "damageWobbleStrength"(): float
set "damageWobbleStrength"(value: float)
get "durability"(): float
get "roll"(): float
set "pitch"(value: float)
get "displayName"(): $Component
get "pickable"(): boolean
get "noGravity"(): boolean
get "controllingPassenger"(): $LivingEntity
get "boundingBoxForCulling"(): $AABB
get "pickResult"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleEntity$Type = ($VehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleEntity_ = $VehicleEntity$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionDecoder" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SlotDescription, $SlotDescription$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription"

export interface $SlotDescription$SlotDescriptionDecoder {

 "decode"(arg0: string, arg1: $FriendlyByteBuf$Type): $SlotDescription

(arg0: string, arg1: $FriendlyByteBuf$Type): $SlotDescription
}

export namespace $SlotDescription$SlotDescriptionDecoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$SlotDescriptionDecoder$Type = ($SlotDescription$SlotDescriptionDecoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription$SlotDescriptionDecoder_ = $SlotDescription$SlotDescriptionDecoder$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionFactory" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SlotDescription, $SlotDescription$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription"

export interface $SlotDescription$SlotDescriptionFactory {

 "construct"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject$Type): $SlotDescription

(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject$Type): $SlotDescription
}

export namespace $SlotDescription$SlotDescriptionFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$SlotDescriptionFactory$Type = ($SlotDescription$SlotDescriptionFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription$SlotDescriptionFactory_ = $SlotDescription$SlotDescriptionFactory$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $SlotDescription {

constructor(type: string, index: integer, x: integer, y: integer, json: $JsonObject$Type)
constructor(type: string, buffer: $FriendlyByteBuf$Type)

public "getToolTip"(): $Optional<($List<($Component)>)>
public "index"(): integer
public "type"(): string
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "x"(): integer
public "getSlot"(vehicle: $InventoryVehicleEntity$Type, inventory: $Container$Type): $Slot
public "y"(): integer
get "toolTip"(): $Optional<($List<($Component)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$Type = ($SlotDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription_ = $SlotDescription$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$WeaponMount$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WeaponMount$Type extends $Enum<($WeaponMount$Type)> {
static readonly "ROTATING": $WeaponMount$Type
static readonly "FRONT": $WeaponMount$Type
static readonly "DROP": $WeaponMount$Type


public static "values"(): ($WeaponMount$Type)[]
public static "valueOf"(name: string): $WeaponMount$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$Type$Type = (("drop") | ("rotating") | ("front")) | ($WeaponMount$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponMount$Type_ = $WeaponMount$Type$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/$SparseSimpleInventory" {
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export class $SparseSimpleInventory extends $SimpleContainer {

constructor(size: integer)

public "writeNbt"(nbtList: $ListTag$Type): $ListTag
public "readNbt"(nbtList: $ListTag$Type): void
public "tick"(entity: $InventoryVehicleEntity$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SparseSimpleInventory$Type = ($SparseSimpleInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SparseSimpleInventory_ = $SparseSimpleInventory$Type;
}}
