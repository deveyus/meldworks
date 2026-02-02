declare module "packages/ovh/corail/tombstone/item/$ItemSeekerRod" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSearchable, $ItemSearchable$Type} from "packages/ovh/corail/tombstone/item/$ItemSearchable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSeekerRod extends $ItemSearchable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSeekerRod$Type = ($ItemSeekerRod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSeekerRod_ = $ItemSeekerRod$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$FrostResistanceEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FrostResistanceEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public static "onApplyEffect"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostResistanceEffect$Type = ($FrostResistanceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostResistanceEffect_ = $FrostResistanceEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$GraveModel" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GraveModel extends $Enum<($GraveModel)> implements $StringRepresentable {
static readonly "GRAVE_SIMPLE": $GraveModel
static readonly "GRAVE_NORMAL": $GraveModel
static readonly "GRAVE_CROSS": $GraveModel
static readonly "TOMBSTONE": $GraveModel
static readonly "SUBARAKI_GRAVE": $GraveModel
static readonly "GRAVE_ORIGINAL": $GraveModel


public static "byId"(arg0: integer): $GraveModel
public "getNext"(): $GraveModel
public "toString"(): string
public static "values"(): ($GraveModel)[]
public static "valueOf"(arg0: string): $GraveModel
public static "getDefault"(): $GraveModel
public "getPrevious"(): $GraveModel
public "getSerializedName"(): string
public "getShape"(arg0: $Direction$Type): $VoxelShape
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "next"(): $GraveModel
get "default"(): $GraveModel
get "previous"(): $GraveModel
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraveModel$Type = (("grave_simple") | ("tombstone") | ("grave_original") | ("grave_normal") | ("subaraki_grave") | ("grave_cross")) | ($GraveModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraveModel_ = $GraveModel$Type;
}}
declare module "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult$Result" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ISoulConsumer$ConsumeResult$Result extends $Enum<($ISoulConsumer$ConsumeResult$Result)> {
static readonly "SUCCESS": $ISoulConsumer$ConsumeResult$Result
static readonly "FAIL": $ISoulConsumer$ConsumeResult$Result


public static "values"(): ($ISoulConsumer$ConsumeResult$Result)[]
public static "valueOf"(arg0: string): $ISoulConsumer$ConsumeResult$Result
public "fail"(): boolean
public "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoulConsumer$ConsumeResult$Result$Type = (("fail") | ("success")) | ($ISoulConsumer$ConsumeResult$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoulConsumer$ConsumeResult$Result_ = $ISoulConsumer$ConsumeResult$Result$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBookOfRepairing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBook, $ItemBook$Type} from "packages/ovh/corail/tombstone/item/$ItemBook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBookOfRepairing extends $ItemBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBookOfRepairing$Type = ($ItemBookOfRepairing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBookOfRepairing_ = $ItemBookOfRepairing$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$BlockGraveBase" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GraveModel, $GraveModel$Type} from "packages/ovh/corail/tombstone/block/$GraveModel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockHorizontalWaterLogged, $BlockHorizontalWaterLogged$Type} from "packages/ovh/corail/tombstone/block/$BlockHorizontalWaterLogged"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockGraveBase extends $BlockHorizontalWaterLogged {
static readonly "MODEL_TEXTURE": $IntegerProperty
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $GraveModel$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "dropFromExplosion"(arg0: $Explosion$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "getDescriptionId"(): string
public "getGraveType"(): $GraveModel
get "descriptionId"(): string
get "graveType"(): $GraveModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGraveBase$Type = ($BlockGraveBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGraveBase_ = $BlockGraveBase$Type;
}}
declare module "packages/ovh/corail/tombstone/combine/$CombineUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $CombineUpgrade {

constructor(arg0: $ItemStack$Type, arg1: boolean)
constructor(arg0: $TagKey$Type<($Item$Type)>, arg1: boolean)

public "isIngredient"(arg0: $ItemStack$Type): boolean
public "ingredient"(): $Ingredient
public "added"(): $ItemStack
public "shaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombineUpgrade$Type = ($CombineUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombineUpgrade_ = $CombineUpgrade$Type;
}}
declare module "packages/ovh/corail/tombstone/mixin/accessor/$ShapedRecipeAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapedRecipeAccessor {

 "getResult"(): $ItemStack

(): $ItemStack
}

export namespace $ShapedRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccessor$Type = ($ShapedRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeAccessor_ = $ShapedRecipeAccessor$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentIncurableWounds" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentIncurableWounds extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentIncurableWounds$Type = ($EnchantmentIncurableWounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentIncurableWounds_ = $EnchantmentIncurableWounds$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemLostTablet$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemLostTablet$Type extends $Enum<($ItemLostTablet$Type)> {
static readonly "UNKNOWN": $ItemLostTablet$Type
static readonly "EXPLORATION": $ItemLostTablet$Type
static readonly "VILLAGE": $ItemLostTablet$Type
static readonly "TREASURE": $ItemLostTablet$Type


public static "get"(arg0: integer): $ItemLostTablet$Type
public static "values"(): ($ItemLostTablet$Type)[]
public static "valueOf"(arg0: string): $ItemLostTablet$Type
public "isUnknown"(): boolean
get "unknown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLostTablet$Type$Type = (("exploration") | ("treasure") | ("village") | ("unknown")) | ($ItemLostTablet$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLostTablet$Type_ = $ItemLostTablet$Type$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBagOfSeeds" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemGift, $ItemGift$Type} from "packages/ovh/corail/tombstone/item/$ItemGift"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBagOfSeeds extends $ItemGift {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBagOfSeeds$Type = ($ItemBagOfSeeds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBagOfSeeds_ = $ItemBagOfSeeds$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$IDefaultImpregnable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IImpregnable, $IImpregnable$Type} from "packages/ovh/corail/tombstone/api/item/$IImpregnable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IDefaultImpregnable extends $IImpregnable {

 "getTooltipDisplay"(arg0: $ItemStack$Type): $Component
 "impregnate"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "impregnate"(arg0: $ItemStack$Type, arg1: string): $ItemStack
 "isImpregnated"(arg0: $ItemStack$Type): boolean
 "getEntityType"(arg0: $ItemStack$Type): string
}

export namespace $IDefaultImpregnable {
const ENTITY_TYPE_NBT_STRING: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDefaultImpregnable$Type = ($IDefaultImpregnable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDefaultImpregnable_ = $IDefaultImpregnable$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemLollipop$ModelColor" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemLollipop$ModelColor extends $Enum<($ItemLollipop$ModelColor)> {
static readonly "YELLOW": $ItemLollipop$ModelColor
static readonly "PURPLE": $ItemLollipop$ModelColor
static readonly "GREEN": $ItemLollipop$ModelColor
static readonly "MAGENTA": $ItemLollipop$ModelColor
static readonly "RED": $ItemLollipop$ModelColor
static readonly "ORANGE": $ItemLollipop$ModelColor


public "asItemStack"(): $ItemStack
public static "getRandom"(): $ItemLollipop$ModelColor
public static "values"(): ($ItemLollipop$ModelColor)[]
public static "valueOf"(arg0: string): $ItemLollipop$ModelColor
get "random"(): $ItemLollipop$ModelColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLollipop$ModelColor$Type = (("red") | ("orange") | ("magenta") | ("green") | ("yellow") | ("purple")) | ($ItemLollipop$ModelColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLollipop$ModelColor_ = $ItemLollipop$ModelColor$Type;
}}
declare module "packages/ovh/corail/tombstone/mixin/accessor/$ShapelessRecipeAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapelessRecipeAccessor {

 "getResult"(): $ItemStack

(): $ItemStack
}

export namespace $ShapelessRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipeAccessor$Type = ($ShapelessRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessRecipeAccessor_ = $ShapelessRecipeAccessor$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemStrangeTablet" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICombineCraft, $ICombineCraft$Type} from "packages/ovh/corail/tombstone/item/$ICombineCraft"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$CombineRecipe, $CombineRecipe$Type} from "packages/ovh/corail/tombstone/combine/$CombineRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CombineCraft, $CombineCraft$Type} from "packages/ovh/corail/tombstone/combine/$CombineCraft"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemStrangeTablet extends $ItemGeneric implements $ICombineCraft {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "addCombinations"(arg0: $List$Type<($CombineCraft$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getCombination"(arg0: $ItemStack$Type): $CombineCraft
public "createTooltip"(): $TooltipComponent
public "asSelf"(): $Item
public "getCombinations"(): $List<($CombineCraft)>
public "fromResult"(arg0: $Item$Type): $CombineCraft
public "getCombineRecipes"(): $List<($CombineRecipe)>
get "combinations"(): $List<($CombineCraft)>
get "combineRecipes"(): $List<($CombineRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStrangeTablet$Type = ($ItemStrangeTablet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStrangeTablet_ = $ItemStrangeTablet$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$ItemBlockGrave" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GraveModel, $GraveModel$Type} from "packages/ovh/corail/tombstone/block/$GraveModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockGrave extends $BlockItem {
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

constructor(arg0: $Block$Type)

public static "getModelTexture"(arg0: $ItemStack$Type): integer
public static "setModelTexture"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public static "createDecorativeStack"(arg0: $GraveModel$Type, arg1: integer): $ItemStack
public static "createDecorativeStack"(arg0: $GraveModel$Type, arg1: integer, arg2: string): $ItemStack
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockGrave$Type = ($ItemBlockGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockGrave_ = $ItemBlockGrave$Type;
}}
declare module "packages/ovh/corail/tombstone/helper/$LangKey" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CommandRuntimeException, $CommandRuntimeException$Type} from "packages/net/minecraft/commands/$CommandRuntimeException"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $LangKey extends $Enum<($LangKey)> {
static readonly "MESSAGE_SPELL_CAST_ON_YOU": $LangKey
static readonly "MESSAGE_SPELL_CAST_AROUND": $LangKey
static readonly "MESSAGE_SPELL_CAST_ON_TARGET": $LangKey
static readonly "MESSAGE_SPELLCASTING_INTERRUPTED": $LangKey
static readonly "MESSAGE_GHOSTLY_SHAPE_CANCELED": $LangKey
static readonly "MESSAGE_DISPEL_BAD_OMEN": $LangKey
static readonly "MESSAGE_SUMMON_FAMILIAR": $LangKey
static readonly "MESSAGE_PRAY_OF_EMPATHY": $LangKey
static readonly "MESSAGE_STORED_EXPERIENCE": $LangKey
static readonly "MESSAGE_EARN_EXPERIENCE_SUCCESS": $LangKey
static readonly "MESSAGE_EARN_EXPERIENCE_FAILED": $LangKey
static readonly "MESSAGE_LOSE_EXPERIENCE_SUCCESS": $LangKey
static readonly "MESSAGE_LOSE_EXPERIENCE_FAILED": $LangKey
static readonly "MESSAGE_TOMB_RAIDER_SUCCESS": $LangKey
static readonly "MESSAGE_DYEABLE": $LangKey
static readonly "MESSAGE_ENGRAVABLE": $LangKey
static readonly "MESSAGE_ENGRAVED": $LangKey
static readonly "MESSAGE_ENGRAVED_ITEM": $LangKey
static readonly "MESSAGE_ALREADY_ENGRAVED": $LangKey
static readonly "MESSAGE_NOT_ENGRAVED": $LangKey
static readonly "MESSAGE_ALREADY_IMPREGNATED": $LangKey
static readonly "MESSAGE_NOT_IMPREGNATED": $LangKey
static readonly "MESSAGE_ENCHANTED_ITEM": $LangKey
static readonly "MESSAGE_ANCIENT_ITEM": $LangKey
static readonly "MESSAGE_IMPREGNATE": $LangKey
static readonly "MESSAGE_IMPREGNATE_DURATION": $LangKey
static readonly "MESSAGE_ITEM_BOUND_TO_PLACE": $LangKey
static readonly "MESSAGE_DISTANCE": $LangKey
static readonly "MESSAGE_POSITION": $LangKey
static readonly "MESSAGE_IN_COOLDOWN": $LangKey
static readonly "MESSAGE_COMMAND_IN_COOLDOWN": $LangKey
static readonly "MESSAGE_CRAFTING_INGREDIENT": $LangKey
static readonly "MESSAGE_RIP": $LangKey
static readonly "MESSAGE_DIED_ON": $LangKey
static readonly "MESSAGE_DEATH_TIME": $LangKey
static readonly "MESSAGE_ENCHANT_ITEM_ALREADY_ENCHANTED": $LangKey
static readonly "MESSAGE_CRAFT_ENCHANTED_GRAVE_KEY_DISABLED": $LangKey
static readonly "MESSAGE_ENCHANT_ITEM_NO_SOUL": $LangKey
static readonly "MESSAGE_ENCHANT_ITEM_NOT_ALLOWED": $LangKey
static readonly "MESSAGE_TELEPORT_SUCCESS": $LangKey
static readonly "MESSAGE_TELEPORT_FAILED": $LangKey
static readonly "MESSAGE_TELEPORT_SAME_DIMENSION": $LangKey
static readonly "MESSAGE_TELEPORT_SAME_PLAYER": $LangKey
static readonly "MESSAGE_OPEN_GRAVE_SUCCESS": $LangKey
static readonly "MESSAGE_RECOVER_LOST_ITEMS": $LangKey
static readonly "MESSAGE_OPEN_GRAVE_NEED_KEY": $LangKey
static readonly "MESSAGE_CHOOSE_NO_GRAVE": $LangKey
static readonly "MESSAGE_NO_LOOT_FOR_GRAVE": $LangKey
static readonly "MESSAGE_NO_GRAVE_DIMENSION": $LangKey
static readonly "MESSAGE_FAIL_TO_PLACE_GRAVE": $LangKey
static readonly "MESSAGE_EXISTING_GRAVE": $LangKey
static readonly "MESSAGE_NEW_GRAVE": $LangKey
static readonly "MESSAGE_LOCKED": $LangKey
static readonly "MESSAGE_UNLOCKED": $LangKey
static readonly "MESSAGE_LOSSES_ON_DEATH": $LangKey
static readonly "MESSAGE_LOST_TABLET_WAKE_UP_SUCCESS": $LangKey
static readonly "MESSAGE_LOST_TABLET_WAKE_UP_FAILED": $LangKey
static readonly "MESSAGE_ENCHANT_FISHING_ROD_SUCCESS": $LangKey
static readonly "MESSAGE_FREE_SOUL_SUCCESS": $LangKey
static readonly "MESSAGE_FREE_SOUL_FAILED": $LangKey
static readonly "MESSAGE_SOUL_PREVENT_DEATH": $LangKey
static readonly "MESSAGE_CONFIG_PREVENT_DEATH": $LangKey
static readonly "MESSAGE_ENCHANT_VOODOO_POPPET_SUCCESS": $LangKey
static readonly "MESSAGE_VOODOO_POPPET_PREVENT_DEATH": $LangKey
static readonly "MESSAGE_DISENCHANTMENT_SUCCESS": $LangKey
static readonly "MESSAGE_DISENCHANTMENT_PARTIAL_SUCCESS": $LangKey
static readonly "MESSAGE_DISENCHANTMENT_NO_ENCHANTMENT": $LangKey
static readonly "MESSAGE_DISENCHANTMENT_DENIED_ITEM": $LangKey
static readonly "MESSAGE_DISENCHANTMENT_FAILED": $LangKey
static readonly "MESSAGE_COMBINE_IN_INVENTORY": $LangKey
static readonly "MESSAGE_RECYCLING_SUCCESS": $LangKey
static readonly "MESSAGE_RECYCLING_NOT_ENOUGH": $LangKey
static readonly "MESSAGE_RECYCLING_FAILED": $LangKey
static readonly "MESSAGE_RECYCLING_DENIED": $LangKey
static readonly "MESSAGE_CANT_RECYCLE_DAMAGED": $LangKey
static readonly "MESSAGE_CANT_RECYCLE_CONTAINER": $LangKey
static readonly "MESSAGE_NO_RECIPE_TO_RECYCLE": $LangKey
static readonly "MESSAGE_REPAIRING_SUCCESS": $LangKey
static readonly "MESSAGE_REPAIRING_FAILED": $LangKey
static readonly "MESSAGE_SCRIBE_SUCCESS": $LangKey
static readonly "MESSAGE_SCRIBE_FAILED": $LangKey
static readonly "MESSAGE_MAGIC_IMPREGNATION_SUCCESS": $LangKey
static readonly "MESSAGE_MAGIC_IMPREGNATION_FAILED": $LangKey
static readonly "MESSAGE_MAGIC_IMPREGNATION_MAX": $LangKey
static readonly "MESSAGE_SOULBOUND_FAILED": $LangKey
static readonly "MESSAGE_SOULBOUND_SUCCESS": $LangKey
static readonly "MESSAGE_YOUR_KNOWLEDGE": $LangKey
static readonly "MESSAGE_PLAYER_KNOWLEDGE": $LangKey
static readonly "MESSAGE_YOUR_ALIGNMENT": $LangKey
static readonly "MESSAGE_PLAYER_ALIGNMENT": $LangKey
static readonly "MESSAGE_INCREASE_OF": $LangKey
static readonly "MESSAGE_DECREASE_OF": $LangKey
static readonly "MESSAGE_LAST_GRAVE": $LangKey
static readonly "MESSAGE_REQUEST_TO_JOIN_SENDER": $LangKey
static readonly "MESSAGE_REQUEST_TO_JOIN_RECEIVER": $LangKey
static readonly "MESSAGE_REQUEST_TO_HELP_SENDER": $LangKey
static readonly "MESSAGE_CALL_FOR_HELP": $LangKey
static readonly "MESSAGE_HERE": $LangKey
static readonly "MESSAGE_JOIN_YOU": $LangKey
static readonly "MESSAGE_NO_TICKET": $LangKey
static readonly "MESSAGE_KNOWLEDGE_OF_DEATH": $LangKey
static readonly "MESSAGE_KNOWLEDGE_LEVEL": $LangKey
static readonly "MESSAGE_ALIGNMENT_LEVEL": $LangKey
static readonly "MESSAGE_AVAILABLE_POINTS": $LangKey
static readonly "MESSAGE_NEXT_LEVEL": $LangKey
static readonly "MESSAGE_CONFIG": $LangKey
static readonly "MESSAGE_COMPENDIUM": $LangKey
static readonly "MESSAGE_DESCRIPTION": $LangKey
static readonly "MESSAGE_CONFIG_GRAVE_MESSAGE_1": $LangKey
static readonly "MESSAGE_CONFIG_GRAVE_MESSAGE_2": $LangKey
static readonly "MESSAGE_COST": $LangKey
static readonly "MESSAGE_CLICK_TO_UPGRADE": $LangKey
static readonly "MESSAGE_CANT_UPGRADE_BRANCH_TIER": $LangKey
static readonly "MESSAGE_CANT_UPGRADE_PARENT_PERK": $LangKey
static readonly "MESSAGE_MAX": $LangKey
static readonly "MESSAGE_DAY": $LangKey
static readonly "MESSAGE_CANT_PRAY": $LangKey
static readonly "MESSAGE_EXORCISM": $LangKey
static readonly "MESSAGE_PRAYER_OF_UNDEAD": $LangKey
static readonly "MESSAGE_ACCESS_GUI": $LangKey
static readonly "MESSAGE_PERK_RESET_SUCCESS": $LangKey
static readonly "MESSAGE_PERK_RESET_FAILED": $LangKey
static readonly "MESSAGE_PERK_RESET_IN_COOLDOWN": $LangKey
static readonly "MESSAGE_PLAYER_OFFLINE": $LangKey
static readonly "MESSAGE_PLAYER_INVALID": $LangKey
static readonly "MESSAGE_DEAD_ENTITY": $LangKey
static readonly "MESSAGE_PLAYER_SPECTATOR": $LangKey
static readonly "MESSAGE_NO_OTHER_VALID_PLAYER": $LangKey
static readonly "MESSAGE_NO_GRAVE": $LangKey
static readonly "MESSAGE_NO_DEATH_LOCATION": $LangKey
static readonly "MESSAGE_NO_DIMENSION": $LangKey
static readonly "MESSAGE_NO_BIOME": $LangKey
static readonly "MESSAGE_SAME_LOCATION": $LangKey
static readonly "MESSAGE_INVALID_LOCATION": $LangKey
static readonly "MESSAGE_LAST_GRAVE_PLACE": $LangKey
static readonly "MESSAGE_NO_SPAWN": $LangKey
static readonly "MESSAGE_SHOW_KNOWLEDGE": $LangKey
static readonly "MESSAGE_SHOW_ALIGNMENT": $LangKey
static readonly "MESSAGE_DARKNESS": $LangKey
static readonly "MESSAGE_LIGHT": $LangKey
static readonly "MESSAGE_NEUTRAL": $LangKey
static readonly "MESSAGE_DISABLED_COMMAND": $LangKey
static readonly "MESSAGE_DISABLED": $LangKey
static readonly "MESSAGE_DIFFICULTY_PEACEFUL": $LangKey
static readonly "MESSAGE_NO_VILLAGE_SIEGE_SPAWNER": $LangKey
static readonly "MESSAGE_START_SIEGE_FAILED": $LangKey
static readonly "MESSAGE_START_SIEGE_SUCCESS": $LangKey
static readonly "MESSAGE_STOP_SIEGE_FAILED": $LangKey
static readonly "MESSAGE_STOP_SIEGE_SUCCESS": $LangKey
static readonly "MESSAGE_INVALID_BIOME": $LangKey
static readonly "MESSAGE_NO_STRUCTURE": $LangKey
static readonly "MESSAGE_POSITIVE_INTEGER": $LangKey
static readonly "MESSAGE_INVALID_VALUE": $LangKey
static readonly "MESSAGE_BACK": $LangKey
static readonly "MESSAGE_UNKNOWN": $LangKey
static readonly "MESSAGE_CAPTURE_FAMILIAR": $LangKey
static readonly "MESSAGE_RECOVERING_RECEPTACLE": $LangKey
static readonly "MESSAGE_REVIVE_FAMILIAR": $LangKey
static readonly "MESSAGE_EMPTY_RECEPTACLE": $LangKey
static readonly "MESSAGE_CANT_REVIVE_FAMILIAR": $LangKey
static readonly "MESSAGE_BRING_BACK_TO_LIFE": $LangKey
static readonly "NO_FAMILIAR_TO_REVIVE": $LangKey
static readonly "MESSAGE_YOUR_FAMILIAR": $LangKey
static readonly "MESSAGE_FAMILIAR_OF": $LangKey
static readonly "MESSAGE_RECOVERY_LOAD_PLAYER_SUCCESS": $LangKey
static readonly "MESSAGE_RECOVERY_LOAD_PLAYER_FAILED": $LangKey
static readonly "MESSAGE_RECOVERY_LOAD_PLAYER_TARGET_SUCCESS": $LangKey
static readonly "MESSAGE_RECOVERY_SAVE_PLAYER_SUCCESS": $LangKey
static readonly "MESSAGE_RECOVERY_SAVE_PLAYER_FAILED": $LangKey
static readonly "MESSAGE_RECOVERY_SAVE_ALL_PLAYERS_SUCCESS": $LangKey
static readonly "MESSAGE_RECOVERY_SAVE_ALL_PLAYERS_FAILED": $LangKey
static readonly "MESSAGE_RECOVERY_NO_FOLDER": $LangKey
static readonly "MESSAGE_RECOVERY_NO_FILE": $LangKey
static readonly "MESSAGE_TELEPORT_TARGET_TO_LOCATION": $LangKey
static readonly "MESSAGE_NO_SAVE_TO_RESTORE": $LangKey
static readonly "MESSAGE_CHOOSE_FAVORITE_GRAVE": $LangKey
static readonly "MESSAGE_TABLET_SEARCH_FAILED": $LangKey
static readonly "MESSAGE_IMPREGNATE_NEEDLE_SUCCESS": $LangKey
static readonly "MESSAGE_IMPREGNATE_NEEDLE_FAILED": $LangKey
static readonly "MESSAGE_PRAY_OF_PROTECTION_SUCCESS": $LangKey
static readonly "MESSAGE_PRAY_OF_PROTECTION_FAILED": $LangKey
static readonly "MESSAGE_RESET_ANKH_SUCCESS": $LangKey
static readonly "MESSAGE_RESET_ANKH_FAILED": $LangKey
static readonly "MESSAGE_SUMMON_GRAVE_GUARDIAN_SUCCESS": $LangKey
static readonly "MESSAGE_SUMMON_GRAVE_GUARDIAN_FAILED": $LangKey
static readonly "MESSAGE_SET_ALIGNMENT": $LangKey
static readonly "MESSAGE_GRAVE_PLATE_REPLACEMENT_NOT_ALLOWED": $LangKey
static readonly "MESSAGE_PVP_STEAL_EXPERIENCE": $LangKey
static readonly "MESSAGE_GIFT_SUCCESS": $LangKey
static readonly "MESSAGE_GIFT_FAILED": $LangKey
static readonly "MESSAGE_VILLAGER_GIFT": $LangKey
static readonly "MESSAGE_FIND_BED": $LangKey
static readonly "MESSAGE_HIDE_GIFT": $LangKey
static readonly "MESSAGE_SEEKER_ROD": $LangKey
static readonly "MESSAGE_FIND_BELL": $LangKey
static readonly "MESSAGE_USE_SEEKER_ROD": $LangKey
static readonly "MESSAGE_FOLLOW_PARTICLES": $LangKey
static readonly "MESSAGE_FAMILIAR_ALREADY_OWNED": $LangKey
static readonly "MESSAGE_ALIGNMENT": $LangKey
static readonly "MESSAGE_INVALID_LABEL": $LangKey
static readonly "MESSAGE_SYNC_TO_SERVER": $LangKey
static readonly "MESSAGE_AREA_BUFF": $LangKey
static readonly "MESSAGE_USEABLE_ON_ALLY": $LangKey
static readonly "MESSAGE_CANT_APPLY_EFFECT": $LangKey
static readonly "MESSAGE_TRADE_IMPROVED_SUCCESS": $LangKey
static readonly "MESSAGE_TRADE_IMPROVED_FAILED": $LangKey
static readonly "MESSAGE_ENCHANT_WITH_OFFHAND": $LangKey
static readonly "MESSAGE_TYPE": $LangKey
static readonly "MESSAGE_ANIMAL": $LangKey
static readonly "MESSAGE_MOUNT": $LangKey
static readonly "MESSAGE_UNDEAD": $LangKey
static readonly "MESSAGE_FAMILIAR": $LangKey
static readonly "MESSAGE_REQUIRE_BLUE_SOUL": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_0_FIND_RITE_OF_SILENT_BOND": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_0_UNLOCKED": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_1_FIND_ELYRA_DIARY": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_1_ALREADY_UNLOCKED": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_1_UNLOCKED": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_2_FIND_CORAL_CHANT": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_2_UNLOCKED": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_3_FIND_ERDOS_FRAGMENTS": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_3_UNLOCKED": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_PROGRESS": $LangKey
static readonly "MESSAGE_WATCHER_KNOWLEDGE_FINAL_PROGRESS": $LangKey
static readonly "MESSAGE_HEAL_CORAL_SUCCESS": $LangKey
static readonly "MESSAGE_RITUAL_FLUTE_NOTHING_HAPPENS": $LangKey
static readonly "MESSAGE_ERDOS_FRAGMENTS_PARTIAL_XP": $LangKey
static readonly "MESSAGE_SCREAMING_GRAVE": $LangKey
static readonly "ITEM_SCROLL_BUFF_USE1": $LangKey
static readonly "ITEM_SCROLL_BUFF_USE2": $LangKey
static readonly "TOOLTIP_BETA": $LangKey
static readonly "TOOLTIP_MORE_INFO": $LangKey
static readonly "TOOLTIP_ACTUAL_BONUS": $LangKey
static readonly "TOOLTIP_NEXT_BONUS": $LangKey
static readonly "TOOLTIP_CORRUPTION": $LangKey


public "sendMessage"(arg0: $Player$Type, arg1: $ChatFormatting$Type, ...arg2: (any)[]): void
public "sendMessage"(arg0: $Player$Type, ...arg1: (any)[]): void
public "sendMessage"(arg0: $Player$Type, arg1: $Style$Type, ...arg2: (any)[]): void
public "sendSpecialMessage"(arg0: $Player$Type, ...arg1: (any)[]): void
public static "sendSystemMessage"(arg0: $Player$Type, arg1: $Component$Type, arg2: $Style$Type): void
public static "sendSystemMessage"(arg0: $Player$Type, arg1: $Component$Type): void
public "createComponentCommand"(arg0: string, ...arg1: (any)[]): $Component
public "sendWarnMessage"(arg0: $Player$Type, ...arg1: (any)[]): void
public "asCommandException"(...arg0: (any)[]): $CommandRuntimeException
public "asLog"(): string
public static "getEntityName"(arg0: string): $Component
public static "values"(): ($LangKey)[]
public static "valueOf"(arg0: string): $LangKey
public "getKey"(): string
public "getText"(arg0: $Style$Type, ...arg1: (any)[]): $MutableComponent
public "getText"(...arg0: (any)[]): $MutableComponent
public "getText"(arg0: $ChatFormatting$Type, ...arg1: (any)[]): $MutableComponent
get "key"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangKey$Type = (("message_cant_recycle_damaged") | ("message_show_knowledge") | ("tooltip_next_bonus") | ("message_recovery_save_player_failed") | ("message_cant_upgrade_branch_tier") | ("message_positive_integer") | ("message_follow_particles") | ("message_watcher_knowledge_2_unlocked") | ("message_teleport_target_to_location") | ("message_revive_familiar") | ("message_spell_cast_around") | ("message_bring_back_to_life") | ("message_tomb_raider_success") | ("message_last_grave") | ("message_no_recipe_to_recycle") | ("message_cant_recycle_container") | ("message_soulbound_failed") | ("message_set_alignment") | ("message_recovery_save_player_success") | ("message_prayer_of_undead") | ("message_animal") | ("message_area_buff") | ("message_already_impregnated") | ("message_grave_plate_replacement_not_allowed") | ("message_in_cooldown") | ("message_summon_grave_guardian_success") | ("message_magic_impregnation_failed") | ("message_player_offline") | ("message_choose_favorite_grave") | ("message_decrease_of") | ("message_watcher_knowledge_2_find_coral_chant") | ("message_compendium") | ("message_recovery_save_all_players_success") | ("message_watcher_knowledge_1_find_elyra_diary") | ("no_familiar_to_revive") | ("message_villager_gift") | ("message_no_grave") | ("message_unlocked") | ("message_capture_familiar") | ("message_cost") | ("message_find_bed") | ("message_enchant_fishing_rod_success") | ("message_hide_gift") | ("message_recover_lost_items") | ("message_teleport_success") | ("message_empty_receptacle") | ("message_your_alignment") | ("message_lose_experience_failed") | ("message_disenchantment_partial_success") | ("message_familiar") | ("message_no_grave_dimension") | ("message_here") | ("message_spell_cast_on_you") | ("message_recycling_success") | ("message_new_grave") | ("message_engraved_item") | ("message_undead") | ("message_free_soul_success") | ("message_last_grave_place") | ("message_item_bound_to_place") | ("message_ritual_flute_nothing_happens") | ("message_enchant_item_already_enchanted") | ("message_gift_failed") | ("message_impregnate") | ("message_magic_impregnation_success") | ("message_enchant_item_no_soul") | ("message_day") | ("message_knowledge_of_death") | ("message_available_points") | ("message_no_spawn") | ("message_ancient_item") | ("message_mount") | ("message_darkness") | ("message_perk_reset_success") | ("message_invalid_location") | ("message_scribe_success") | ("message_cant_revive_familiar") | ("message_cant_apply_effect") | ("message_start_siege_failed") | ("message_earn_experience_success") | ("message_disabled") | ("message_recycling_denied") | ("tooltip_actual_bonus") | ("message_player_knowledge") | ("message_soul_prevent_death") | ("message_stop_siege_success") | ("message_familiar_already_owned") | ("message_dead_entity") | ("message_invalid_value") | ("message_require_blue_soul") | ("message_call_for_help") | ("message_died_on") | ("message_disenchantment_denied_item") | ("message_player_spectator") | ("message_max") | ("message_summon_grave_guardian_failed") | ("message_sync_to_server") | ("message_recovery_no_file") | ("tooltip_corruption") | ("message_death_time") | ("message_heal_coral_success") | ("message_recycling_not_enough") | ("message_enchant_voodoo_poppet_success") | ("message_request_to_join_receiver") | ("message_disabled_command") | ("message_recovering_receptacle") | ("message_open_grave_success") | ("message_magic_impregnation_max") | ("message_repairing_success") | ("message_enchant_item_not_allowed") | ("message_config") | ("message_lose_experience_success") | ("message_no_biome") | ("message_trade_improved_success") | ("message_same_location") | ("message_invalid_biome") | ("message_recycling_failed") | ("message_position") | ("message_pray_of_protection_success") | ("message_dyeable") | ("message_impregnate_duration") | ("message_disenchantment_failed") | ("message_not_impregnated") | ("message_rip") | ("message_recovery_load_player_target_success") | ("message_no_ticket") | ("message_erdos_fragments_partial_xp") | ("message_distance") | ("message_recovery_no_folder") | ("message_no_other_valid_player") | ("message_type") | ("message_seeker_rod") | ("message_exorcism") | ("message_recovery_save_all_players_failed") | ("message_repairing_failed") | ("message_watcher_knowledge_3_find_erdos_fragments") | ("message_engravable") | ("message_start_siege_success") | ("message_watcher_knowledge_1_already_unlocked") | ("message_teleport_same_player") | ("message_open_grave_need_key") | ("message_config_prevent_death") | ("message_no_death_location") | ("message_recovery_load_player_failed") | ("message_recovery_load_player_success") | ("message_unknown") | ("message_trade_improved_failed") | ("message_back") | ("message_reset_ankh_success") | ("message_stored_experience") | ("message_watcher_knowledge_1_unlocked") | ("message_perk_reset_in_cooldown") | ("message_scribe_failed") | ("message_click_to_upgrade") | ("message_soulbound_success") | ("message_increase_of") | ("message_losses_on_death") | ("message_gift_success") | ("message_config_grave_message_2") | ("message_config_grave_message_1") | ("message_player_alignment") | ("message_impregnate_needle_success") | ("message_spell_cast_on_target") | ("message_watcher_knowledge_3_unlocked") | ("message_pvp_steal_experience") | ("message_no_loot_for_grave") | ("message_dispel_bad_omen") | ("message_lost_tablet_wake_up_failed") | ("message_player_invalid") | ("message_no_village_siege_spawner") | ("message_pray_of_protection_failed") | ("message_watcher_knowledge_final_progress") | ("message_reset_ankh_failed") | ("message_enchant_with_offhand") | ("message_tablet_search_failed") | ("message_watcher_knowledge_0_find_rite_of_silent_bond") | ("message_alignment_level") | ("message_crafting_ingredient") | ("tooltip_more_info") | ("message_join_you") | ("message_stop_siege_failed") | ("message_perk_reset_failed") | ("message_pray_of_empathy") | ("message_fail_to_place_grave") | ("message_free_soul_failed") | ("message_locked") | ("message_familiar_of") | ("message_your_familiar") | ("message_already_engraved") | ("message_alignment") | ("message_show_alignment") | ("message_watcher_knowledge_progress") | ("message_teleport_same_dimension") | ("message_no_structure") | ("message_cant_upgrade_parent_perk") | ("message_no_save_to_restore") | ("message_difficulty_peaceful") | ("message_use_seeker_rod") | ("message_craft_enchanted_grave_key_disabled") | ("message_knowledge_level") | ("message_request_to_help_sender") | ("message_voodoo_poppet_prevent_death") | ("message_watcher_knowledge_0_unlocked") | ("message_lost_tablet_wake_up_success") | ("message_no_dimension") | ("message_ghostly_shape_canceled") | ("message_earn_experience_failed") | ("message_enchanted_item") | ("message_not_engraved") | ("message_your_knowledge") | ("message_request_to_join_sender") | ("message_neutral") | ("message_disenchantment_no_enchantment") | ("message_combine_in_inventory") | ("message_disenchantment_success") | ("message_existing_grave") | ("message_find_bell") | ("message_invalid_label") | ("item_scroll_buff_use2") | ("item_scroll_buff_use1") | ("message_choose_no_grave") | ("message_command_in_cooldown") | ("message_spellcasting_interrupted") | ("message_description") | ("message_useable_on_ally") | ("message_light") | ("message_next_level") | ("message_teleport_failed") | ("tooltip_beta") | ("message_summon_familiar") | ("message_impregnate_needle_failed") | ("message_screaming_grave") | ("message_engraved") | ("message_cant_pray") | ("message_access_gui")) | ($LangKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangKey_ = $LangKey$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemSearchable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Location, $Location$Type} from "packages/ovh/corail/tombstone/helper/$Location"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemSearchable extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getName"(arg0: $ItemStack$Type): $Component
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getCurrentTarget"(arg0: $ItemStack$Type): $Location
public "isTargetFound"(arg0: $ItemStack$Type): boolean
public "isInVillageRange"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSearchable$Type = ($ItemSearchable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSearchable_ = $ItemSearchable$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGemstoneOfGuardian" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemCastableMagic, $ItemCastableMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemCastableMagic"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGemstoneOfGuardian extends $ItemCastableMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGemstoneOfGuardian$Type = ($ItemGemstoneOfGuardian);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGemstoneOfGuardian_ = $ItemGemstoneOfGuardian$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentDecrepitude" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentDecrepitude extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentDecrepitude$Type = ($EnchantmentDecrepitude);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentDecrepitude_ = $EnchantmentDecrepitude$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemCastableMagic" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCastableMagic extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "getName"(arg0: $ItemStack$Type): $Component
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCastableMagic$Type = ($ItemCastableMagic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCastableMagic_ = $ItemCastableMagic$Type;
}}
declare module "packages/ovh/corail/tombstone/helper/$Location" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Location implements $Comparable<($Location)> {
 "x": integer
 "y": integer
 "z": integer
 "dim": $ResourceKey<($Level)>
static readonly "ORIGIN": $Location

constructor(arg0: $BlockPos$Type, arg1: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: $GlobalPos$Type)
constructor(arg0: $Entity$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $Level$Type)
constructor(arg0: $BlockPos$Type, arg1: $Level$Type)

public "getDimRL"(): $ResourceLocation
public "isInRangeAndDimension"(arg0: $Location$Type, arg1: integer): boolean
public "isOrigin"(): boolean
public "asGlobalPos"(): $GlobalPos
public "getDimString"(): string
public "isSameDimension"(arg0: $Level$Type): boolean
public "isSameDimension"(arg0: string): boolean
public "getPos"(): $BlockPos
public "getX"(): integer
public "getY"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Location$Type): integer
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: $ResourceKey$Type<($Level$Type)>): $Location
public "move"(arg0: $Direction$Type, arg1: integer): $Location
public "isInRange"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "isInRange"(arg0: $BlockPos$Type, arg1: integer): boolean
public "isInRange"(arg0: $Location$Type, arg1: integer): boolean
public "getZ"(): integer
public "getDistanceSq"(arg0: $Location$Type): double
public "getDistanceSq"(arg0: $BlockPos$Type): double
get "dimRL"(): $ResourceLocation
get "origin"(): boolean
get "dimString"(): string
get "pos"(): $BlockPos
get "x"(): integer
get "y"(): integer
get "z"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Location$Type = ($Location);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Location_ = $Location$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemTabletOfAssistance" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemTablet, $ItemTablet$Type} from "packages/ovh/corail/tombstone/item/$ItemTablet"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTabletOfAssistance extends $ItemTablet {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTabletOfAssistance$Type = ($ItemTabletOfAssistance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTabletOfAssistance_ = $ItemTabletOfAssistance$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INameable, $INameable$Type} from "packages/ovh/corail/tombstone/item/$INameable"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $TombstoneEnchantment extends $Enchantment implements $INameable {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory


public "getTooltipInfos"(arg0: boolean): $List<($Component)>
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "getFullname"(arg0: integer): $Component
public "isAllowedOnBooks"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "getSimpleName"(): string
public "isEnabled"(): boolean
public "getMaxLevel"(): integer
public "getDescriptionId"(): string
public "isInBeta"(): boolean
get "allowedOnBooks"(): boolean
get "simpleName"(): string
get "enabled"(): boolean
get "maxLevel"(): integer
get "descriptionId"(): string
get "inBeta"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TombstoneEnchantment$Type = ($TombstoneEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TombstoneEnchantment_ = $TombstoneEnchantment$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemReadableScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemReadableScroll extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setContent"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "createScroll"(arg0: string, arg1: integer): $ItemStack
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getContentId"(arg0: $ItemStack$Type): string
public "getContentPart"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemReadableScroll$Type = ($ItemReadableScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemReadableScroll_ = $ItemReadableScroll$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemChristmasGift" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISoulConsumer, $ISoulConsumer$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemChristmasGift extends $ItemGeneric implements $ISoulConsumer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "getKnowledge"(): integer
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "getCorruptionLevel"(arg0: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "isUsingOffhandToEnchant"(): boolean
public "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
get "knowledge"(): integer
get "usingOffhandToEnchant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemChristmasGift$Type = ($ItemChristmasGift);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemChristmasGift_ = $ItemChristmasGift$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGraveDust" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICombineCraft, $ICombineCraft$Type} from "packages/ovh/corail/tombstone/item/$ICombineCraft"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$CombineRecipe, $CombineRecipe$Type} from "packages/ovh/corail/tombstone/combine/$CombineRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CombineCraft, $CombineCraft$Type} from "packages/ovh/corail/tombstone/combine/$CombineCraft"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGraveDust extends $ItemGeneric implements $ICombineCraft {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "addCombinations"(arg0: $List$Type<($CombineCraft$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getCombination"(arg0: $ItemStack$Type): $CombineCraft
public "createTooltip"(): $TooltipComponent
public "asSelf"(): $Item
public "getCombinations"(): $List<($CombineCraft)>
public "fromResult"(arg0: $Item$Type): $CombineCraft
public "getCombineRecipes"(): $List<($CombineRecipe)>
get "combinations"(): $List<($CombineCraft)>
get "combineRecipes"(): $List<($CombineRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGraveDust$Type = ($ItemGraveDust);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGraveDust_ = $ItemGraveDust$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$BlockGrave" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$GraveModel, $GraveModel$Type} from "packages/ovh/corail/tombstone/block/$GraveModel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGraveBase, $BlockGraveBase$Type} from "packages/ovh/corail/tombstone/block/$BlockGraveBase"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockGrave extends $BlockGraveBase implements $EntityBlock {
static readonly "MODEL_TEXTURE": $IntegerProperty
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $GraveModel$Type)

public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
public "asDecorativeStack"(): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGrave$Type = ($BlockGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGrave_ = $BlockGrave$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemMagicScroll" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDelayedNBTLoot, $IDelayedNBTLoot$Type} from "packages/ovh/corail/tombstone/loot/$IDelayedNBTLoot"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemScroll, $ItemScroll$Type} from "packages/ovh/corail/tombstone/item/$ItemScroll"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemMagicScroll extends $ItemScroll implements $IDelayedNBTLoot {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "createAncient"(): $ItemStack
public "getMagicEffectName"(arg0: $ItemStack$Type): $Optional<($Component)>
public "getMagicEffect"(arg0: $ItemStack$Type): $Optional<($MobEffectInstance)>
public "setRandomMagicEffect"(arg0: $ItemStack$Type): $ItemStack
public "setMagicEffect"(arg0: $ItemStack$Type, arg1: $MobEffect$Type, arg2: integer): $ItemStack
public "onDelayedLoot"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
set "randomMagicEffect"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMagicScroll$Type = ($ItemMagicScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMagicScroll_ = $ItemMagicScroll$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGemstoneOfPrayer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemCastableMagic, $ItemCastableMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemCastableMagic"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGemstoneOfPrayer extends $ItemCastableMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGemstoneOfPrayer$Type = ($ItemGemstoneOfPrayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGemstoneOfPrayer_ = $ItemGemstoneOfPrayer$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$BlockGraveMarble$MarbleType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockGraveMarble$MarbleType extends $Enum<($BlockGraveMarble$MarbleType)> implements $StringRepresentable {
static readonly "DARK": $BlockGraveMarble$MarbleType
static readonly "WHITE": $BlockGraveMarble$MarbleType
static readonly "BLUE": $BlockGraveMarble$MarbleType
static readonly "GREEN": $BlockGraveMarble$MarbleType
static readonly "CARMIN": $BlockGraveMarble$MarbleType


public static "byId"(arg0: integer): $BlockGraveMarble$MarbleType
public static "values"(): ($BlockGraveMarble$MarbleType)[]
public static "valueOf"(arg0: string): $BlockGraveMarble$MarbleType
public static "getDefault"(): $BlockGraveMarble$MarbleType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "default"(): $BlockGraveMarble$MarbleType
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGraveMarble$MarbleType$Type = (("carmin") | ("green") | ("white") | ("blue") | ("dark")) | ($BlockGraveMarble$MarbleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGraveMarble$MarbleType_ = $BlockGraveMarble$MarbleType$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBookOfRecycling" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBook, $ItemBook$Type} from "packages/ovh/corail/tombstone/item/$ItemBook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBookOfRecycling extends $ItemBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBookOfRecycling$Type = ($ItemBookOfRecycling);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBookOfRecycling_ = $ItemBookOfRecycling$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemTabletOfCupidity" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemTablet, $ItemTablet$Type} from "packages/ovh/corail/tombstone/item/$ItemTablet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTabletOfCupidity extends $ItemTablet {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "isEnchanted"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTabletOfCupidity$Type = ($ItemTabletOfCupidity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTabletOfCupidity_ = $ItemTabletOfCupidity$Type;
}}
declare module "packages/ovh/corail/tombstone/api/item/$IDisableable" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDisableable {

 "isEnabled"(): boolean
 "isEnabled"(arg0: $ItemStack$Type): boolean

(): boolean
}

export namespace $IDisableable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisableable$Type = ($IDisableable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisableable_ = $IDisableable$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$FeatherFallEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FeatherFallEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public static "onApplyEffect"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatherFallEffect$Type = ($FeatherFallEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatherFallEffect_ = $FeatherFallEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/api/item/$IImpregnable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IImpregnable {

 "getTooltipDisplay"(arg0: $ItemStack$Type): $Component
 "impregnate"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "impregnate"(arg0: $ItemStack$Type, arg1: string): $ItemStack
 "isImpregnated"(arg0: $ItemStack$Type): boolean
 "getEntityType"(arg0: $ItemStack$Type): string
}

export namespace $IImpregnable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IImpregnable$Type = ($IImpregnable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IImpregnable_ = $IImpregnable$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemScrollBuff$SpellBuff" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemScrollBuff$SpellBuff extends $Enum<($ItemScrollBuff$SpellBuff)> {
static readonly "PRESERVATION": $ItemScrollBuff$SpellBuff
static readonly "UNSTABLE_INTANGIBILITY": $ItemScrollBuff$SpellBuff
static readonly "FEATHER_FALL": $ItemScrollBuff$SpellBuff
static readonly "PURIFICATION": $ItemScrollBuff$SpellBuff
static readonly "TRUE_SIGHT": $ItemScrollBuff$SpellBuff
static readonly "REACH": $ItemScrollBuff$SpellBuff
static readonly "LIGHTNING_RESISTANCE": $ItemScrollBuff$SpellBuff
static readonly "FROST_RESISTANCE": $ItemScrollBuff$SpellBuff
static readonly "AQUATIC_LIFE": $ItemScrollBuff$SpellBuff
static readonly "MERCY": $ItemScrollBuff$SpellBuff


public "getName"(): string
public static "values"(): ($ItemScrollBuff$SpellBuff)[]
public static "valueOf"(arg0: string): $ItemScrollBuff$SpellBuff
public "isEnabled"(): boolean
public "getItem"(): $Item
public "getEnchantedStack"(): $ItemStack
public "getAncientStack"(): $ItemStack
public static "getRandomEnchantedScroll"(arg0: boolean): $Optional<($ItemStack)>
get "name"(): string
get "enabled"(): boolean
get "item"(): $Item
get "enchantedStack"(): $ItemStack
get "ancientStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollBuff$SpellBuff$Type = (("preservation") | ("purification") | ("reach") | ("frost_resistance") | ("feather_fall") | ("aquatic_life") | ("unstable_intangibility") | ("true_sight") | ("lightning_resistance") | ("mercy")) | ($ItemScrollBuff$SpellBuff);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollBuff$SpellBuff_ = $ItemScrollBuff$SpellBuff$Type;
}}
declare module "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ISoulConsumer$ConsumeResult$Result, $ISoulConsumer$ConsumeResult$Result$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult$Result"

export class $ISoulConsumer$ConsumeResult extends $Record {

constructor(result: $ISoulConsumer$ConsumeResult$Result$Type, message: $Component$Type, soulStrength: integer)

public "soulStrength"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "result"(): $ISoulConsumer$ConsumeResult$Result
public "message"(): $Component
public static "fail"(arg0: $Component$Type): $ISoulConsumer$ConsumeResult
public static "fail"(): $ISoulConsumer$ConsumeResult
public static "success"(arg0: $Component$Type, arg1: integer): $ISoulConsumer$ConsumeResult
public static "success"(arg0: integer): $ISoulConsumer$ConsumeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoulConsumer$ConsumeResult$Type = ($ISoulConsumer$ConsumeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoulConsumer$ConsumeResult_ = $ISoulConsumer$ConsumeResult$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemTabletOfHome" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemTablet, $ItemTablet$Type} from "packages/ovh/corail/tombstone/item/$ItemTablet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTabletOfHome extends $ItemTablet {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "isEnchanted"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTabletOfHome$Type = ($ItemTabletOfHome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTabletOfHome_ = $ItemTabletOfHome$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemTabletOfRecall" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Location, $Location$Type} from "packages/ovh/corail/tombstone/helper/$Location"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemTablet, $ItemTablet$Type} from "packages/ovh/corail/tombstone/item/$ItemTablet"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTabletOfRecall extends $ItemTablet {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
public "getTombPos"(arg0: $ItemStack$Type): $Location
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTabletOfRecall$Type = ($ItemTabletOfRecall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTabletOfRecall_ = $ItemTabletOfRecall$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentBlessing" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentBlessing extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentBlessing$Type = ($EnchantmentBlessing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentBlessing_ = $EnchantmentBlessing$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ICombineCraft" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CombineCraft, $CombineCraft$Type} from "packages/ovh/corail/tombstone/combine/$CombineCraft"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CombineRecipe, $CombineRecipe$Type} from "packages/ovh/corail/tombstone/combine/$CombineRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICombineCraft {

 "getCombination"(arg0: $ItemStack$Type): $CombineCraft
 "createTooltip"(): $TooltipComponent
 "addCombinations"(arg0: $List$Type<($CombineCraft$Type)>): void
 "asSelf"(): $Item
 "getCombinations"(): $List<($CombineCraft)>
 "fromResult"(arg0: $Item$Type): $CombineCraft
 "getCombineRecipes"(): $List<($CombineRecipe)>

(arg0: $ItemStack$Type): $CombineCraft
}

export namespace $ICombineCraft {
const COMBINATION_MAP: $Map<($Item), ($List<($CombineCraft)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICombineCraft$Type = ($ICombineCraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICombineCraft_ = $ICombineCraft$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemRitualFlute" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemRitualFlute extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getName"(arg0: $ItemStack$Type): $Component
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRitualFlute$Type = ($ItemRitualFlute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRitualFlute_ = $ItemRitualFlute$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$BlockAbandonedGrave" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockHorizontalWaterLogged, $BlockHorizontalWaterLogged$Type} from "packages/ovh/corail/tombstone/block/$BlockHorizontalWaterLogged"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockAbandonedGrave extends $BlockHorizontalWaterLogged {
static readonly "MODEL_TEXTURE": $IntegerProperty
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAbandonedGrave$Type = ($BlockAbandonedGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAbandonedGrave_ = $BlockAbandonedGrave$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemReceptacleOfFamiliar" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISoulConsumer, $ISoulConsumer$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDelayedNBTLoot, $IDelayedNBTLoot$Type} from "packages/ovh/corail/tombstone/loot/$IDelayedNBTLoot"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemReceptacleOfFamiliar extends $ItemGeneric implements $ISoulConsumer, $IDelayedNBTLoot {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getKnowledge"(): integer
public "containSoul"(arg0: $ItemStack$Type): boolean
public "setRandomFamiliar"(arg0: $ItemStack$Type): $ItemStack
public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "getCorruptionLevel"(arg0: $ItemStack$Type): integer
public "onDelayedLoot"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack
public "getDurabilityRatio"(arg0: $ItemStack$Type): double
public "setCapturableType"(arg0: $ItemStack$Type, arg1: string): void
public "captureSoul"(arg0: $LivingEntity$Type): boolean
public "createReceptacleWithFamiliar"(arg0: $ResourceLocation$Type): $ItemStack
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "revive"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type, arg3: boolean): boolean
public "isUsingOffhandToEnchant"(): boolean
public "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
get "knowledge"(): integer
set "randomFamiliar"(value: $ItemStack$Type)
get "usingOffhandToEnchant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemReceptacleOfFamiliar$Type = ($ItemReceptacleOfFamiliar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemReceptacleOfFamiliar_ = $ItemReceptacleOfFamiliar$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBook" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISoulConsumer, $ISoulConsumer$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBook extends $ItemGeneric implements $ISoulConsumer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: string, arg1: $BooleanSupplier$Type)

public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "isUsingOffhandToEnchant"(): boolean
public "getCorruptionLevel"(arg0: $ItemStack$Type): integer
public "getName"(arg0: $ItemStack$Type): $Component
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getKnowledge"(): integer
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
get "usingOffhandToEnchant"(): boolean
get "knowledge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBook$Type = ($ItemBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBook_ = $ItemBook$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBoneNeedle" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IDefaultImpregnable, $IDefaultImpregnable$Type} from "packages/ovh/corail/tombstone/item/$IDefaultImpregnable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemBoneNeedle extends $ItemGeneric implements $IDefaultImpregnable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getTooltipDisplay"(arg0: $ItemStack$Type): $Component
public "impregnate"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "impregnate"(arg0: $ItemStack$Type, arg1: string): $ItemStack
public "isImpregnated"(arg0: $ItemStack$Type): boolean
public "getEntityType"(arg0: $ItemStack$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBoneNeedle$Type = ($ItemBoneNeedle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBoneNeedle_ = $ItemBoneNeedle$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemFishingRodOfMisadventure" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISoulConsumer, $ISoulConsumer$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer"
import {$ITab, $ITab$Type} from "packages/ovh/corail/tombstone/item/$ITab"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDelayedNBTLoot, $IDelayedNBTLoot$Type} from "packages/ovh/corail/tombstone/loot/$IDelayedNBTLoot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INameable, $INameable$Type} from "packages/ovh/corail/tombstone/item/$INameable"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$FishingRodItem, $FishingRodItem$Type} from "packages/net/minecraft/world/item/$FishingRodItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFishingRodOfMisadventure extends $FishingRodItem implements $ISoulConsumer, $IDelayedNBTLoot, $INameable, $ITab {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "isAncient"(arg0: $ItemStack$Type): boolean
public "getCorruptionLevel"(arg0: $ItemStack$Type): integer
public "onDelayedLoot"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack
public "setAncient"(arg0: $ItemStack$Type): $ItemStack
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getCreatorModId"(arg0: $ItemStack$Type): string
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getSimpleName"(): string
public "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "getDescriptionId"(): string
public "getKnowledge"(): integer
public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "isUsingOffhandToEnchant"(): boolean
public "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
set "ancient"(value: $ItemStack$Type)
get "enchantmentValue"(): integer
get "simpleName"(): string
get "descriptionId"(): string
get "knowledge"(): integer
get "usingOffhandToEnchant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFishingRodOfMisadventure$Type = ($ItemFishingRodOfMisadventure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFishingRodOfMisadventure_ = $ItemFishingRodOfMisadventure$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemScroll" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGraveMagic, $ItemGraveMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemGraveMagic"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScroll extends $ItemGraveMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScroll$Type = ($ItemScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScroll_ = $ItemScroll$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGemstoneOfFamiliar" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemCastableMagic, $ItemCastableMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemCastableMagic"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGemstoneOfFamiliar extends $ItemCastableMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGemstoneOfFamiliar$Type = ($ItemGemstoneOfFamiliar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGemstoneOfFamiliar_ = $ItemGemstoneOfFamiliar$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGraveKey" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$CombineCraft, $CombineCraft$Type} from "packages/ovh/corail/tombstone/combine/$CombineCraft"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockEntityPlayerGrave, $BlockEntityPlayerGrave$Type} from "packages/ovh/corail/tombstone/block/entity/$BlockEntityPlayerGrave"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICombineCraft, $ICombineCraft$Type} from "packages/ovh/corail/tombstone/item/$ICombineCraft"
import {$Location, $Location$Type} from "packages/ovh/corail/tombstone/helper/$Location"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CombineRecipe, $CombineRecipe$Type} from "packages/ovh/corail/tombstone/combine/$CombineRecipe"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemGraveMagic, $ItemGraveMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemGraveMagic"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGraveKey extends $ItemGraveMagic implements $ICombineCraft {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "getCorruptionLevel"(arg0: $ItemStack$Type): integer
public "getTombPos"(arg0: $ItemStack$Type): $Location
public "addCombinations"(arg0: $List$Type<($CombineCraft$Type)>): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getOwnerId"(arg0: $ItemStack$Type): $Optional<($UUID)>
public "removeKeyForGraveInInventory"(arg0: $Player$Type, arg1: $BlockEntityPlayerGrave$Type): boolean
public "createWithInfo"(arg0: $Player$Type, arg1: $Location$Type): $ItemStack
public "reenchantOnDeath"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getCombination"(arg0: $ItemStack$Type): $CombineCraft
public "createTooltip"(): $TooltipComponent
public "asSelf"(): $Item
public "getCombinations"(): $List<($CombineCraft)>
public "fromResult"(arg0: $Item$Type): $CombineCraft
public "getCombineRecipes"(): $List<($CombineRecipe)>
get "combinations"(): $List<($CombineCraft)>
get "combineRecipes"(): $List<($CombineRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGraveKey$Type = ($ItemGraveKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGraveKey_ = $ItemGraveKey$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGraveMagic" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISoulConsumer, $ISoulConsumer$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemCastableMagic, $ItemCastableMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemCastableMagic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGraveMagic extends $ItemCastableMagic implements $ISoulConsumer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public "getCooldown"(arg0: $Level$Type, arg1: $ItemStack$Type): integer
public "setCooldown"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: integer): void
public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "isAncient"(arg0: $ItemStack$Type): boolean
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getKnowledge"(): integer
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "isUsingOffhandToEnchant"(): boolean
public "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
public "getCorruptionLevel"(arg0: $ItemStack$Type): integer
public "isEnchanted"(arg0: $ItemStack$Type): boolean
get "knowledge"(): integer
get "usingOffhandToEnchant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGraveMagic$Type = ($ItemGraveMagic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGraveMagic_ = $ItemGraveMagic$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentSpectralBite" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentSpectralBite extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSpectralBite$Type = ($EnchantmentSpectralBite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentSpectralBite_ = $EnchantmentSpectralBite$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemTabletOfGuard" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemTablet, $ItemTablet$Type} from "packages/ovh/corail/tombstone/item/$ItemTablet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTabletOfGuard extends $ItemTablet {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "isEnchanted"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTabletOfGuard$Type = ($ItemTabletOfGuard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTabletOfGuard_ = $ItemTabletOfGuard$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ITab" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"

export interface $ITab {

 "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void

(arg0: $CreativeModeTab$Output$Type): void
}

export namespace $ITab {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITab$Type = ($ITab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITab_ = $ITab$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$PrayerEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PrayerEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrayerEffect$Type = ($PrayerEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrayerEffect_ = $PrayerEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/combine/$CombineRecipe" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CombineRecipe extends $Record {

constructor(combineOn: $Ingredient$Type, combined: $Ingredient$Type, result: $Supplier$Type<($ItemStack$Type)>)

public "combineOn"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "result"(): $Supplier<($ItemStack)>
public "combined"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombineRecipe$Type = ($CombineRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombineRecipe_ = $CombineRecipe$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$BaitEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $BaitEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaitEffect$Type = ($BaitEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaitEffect_ = $BaitEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemReceptacleOfSoul" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemReceptacleOfSoul extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemReceptacleOfSoul$Type = ($ItemReceptacleOfSoul);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemReceptacleOfSoul_ = $ItemReceptacleOfSoul$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemVoodooPoppet" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISoulConsumer, $ISoulConsumer$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDelayedNBTLoot, $IDelayedNBTLoot$Type} from "packages/ovh/corail/tombstone/loot/$IDelayedNBTLoot"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemVoodooPoppet extends $ItemGeneric implements $ISoulConsumer, $IDelayedNBTLoot {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "onDelayedLoot"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack
public "createEnchantedStack"(): $ItemStack
public "preventDeath"(arg0: $ServerPlayer$Type): boolean
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getKnowledge"(): integer
public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "isUsingOffhandToEnchant"(): boolean
public "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
public "getCorruptionLevel"(arg0: $ItemStack$Type): integer
get "knowledge"(): integer
get "usingOffhandToEnchant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVoodooPoppet$Type = ($ItemVoodooPoppet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVoodooPoppet_ = $ItemVoodooPoppet$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemChristmasHat" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemChristmasHat extends $ItemGeneric implements $Equipable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getDefaultInstance"(): $ItemStack
public "getEquipmentSlot"(): $EquipmentSlot
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "get"(arg0: $ItemStack$Type): $Equipable
public "getEquipSound"(): $SoundEvent
get "enchantmentValue"(): integer
get "defaultInstance"(): $ItemStack
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemChristmasHat$Type = ($ItemChristmasHat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemChristmasHat_ = $ItemChristmasHat$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBookOfMagicImpregnation" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBook, $ItemBook$Type} from "packages/ovh/corail/tombstone/item/$ItemBook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBookOfMagicImpregnation extends $ItemBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBookOfMagicImpregnation$Type = ($ItemBookOfMagicImpregnation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBookOfMagicImpregnation_ = $ItemBookOfMagicImpregnation$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemLollipop" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDelayedNBTLoot, $IDelayedNBTLoot$Type} from "packages/ovh/corail/tombstone/loot/$IDelayedNBTLoot"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemLollipop$ModelColor, $ItemLollipop$ModelColor$Type} from "packages/ovh/corail/tombstone/item/$ItemLollipop$ModelColor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLollipop extends $ItemGeneric implements $IDelayedNBTLoot {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "resetColor"(arg0: $ItemStack$Type): $ItemStack
public "onDelayedLoot"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack
public "getRandomItemStack"(arg0: integer): $ItemStack
public "getRandomItemStack"(): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getName"(arg0: $ItemStack$Type): $Component
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: $ItemLollipop$ModelColor$Type): $ItemStack
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
get "randomItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLollipop$Type = ($ItemLollipop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLollipop_ = $ItemLollipop$Type;
}}
declare module "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"

export interface $ISoulConsumer {

 "getKnowledge"(): integer
 "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
 "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
 "isUsingOffhandToEnchant"(): boolean
 "onSneakGrave"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type): boolean
 "getCorruptionLevel"(arg0: $ItemStack$Type): integer
 "isEnchanted"(arg0: $ItemStack$Type): boolean
}

export namespace $ISoulConsumer {
const MESSAGE_ENCHANT_ITEM_SUCCESS: $Component
const MESSAGE_ENCHANT_ITEM_FAILED: $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoulConsumer$Type = ($ISoulConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoulConsumer_ = $ISoulConsumer$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemAdvancement" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemAdvancement$IconType, $ItemAdvancement$IconType$Type} from "packages/ovh/corail/tombstone/item/$ItemAdvancement$IconType"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemAdvancement extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $ItemAdvancement$IconType$Type)

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAdvancement$Type = ($ItemAdvancement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAdvancement_ = $ItemAdvancement$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGravePlate" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGravePlate extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGravePlate$Type = ($ItemGravePlate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGravePlate_ = $ItemGravePlate$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBookOfOblivion" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBook, $ItemBook$Type} from "packages/ovh/corail/tombstone/item/$ItemBook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBookOfOblivion extends $ItemBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getKnowledge"(): integer
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
get "knowledge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBookOfOblivion$Type = ($ItemBookOfOblivion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBookOfOblivion_ = $ItemBookOfOblivion$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemDustOfVanishing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemMagicDust, $ItemMagicDust$Type} from "packages/ovh/corail/tombstone/item/$ItemMagicDust"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDustOfVanishing extends $ItemMagicDust {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDustOfVanishing$Type = ($ItemDustOfVanishing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDustOfVanishing_ = $ItemDustOfVanishing$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$GhostlyShapeEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GhostlyShapeEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GhostlyShapeEffect$Type = ($GhostlyShapeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GhostlyShapeEffect_ = $GhostlyShapeEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$AquaticLifeEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AquaticLifeEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public static "onApplyEffect"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquaticLifeEffect$Type = ($AquaticLifeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AquaticLifeEffect_ = $AquaticLifeEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/recipe/$ShapedSerializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedSerializer<T extends $ShapedRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ShapedRecipe$Type), (T)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedSerializer$Type<T> = ($ShapedSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedSerializer_<T> = $ShapedSerializer$Type<(T)>;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentCurseOfBones" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentCurseOfBones extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentCurseOfBones$Type = ($EnchantmentCurseOfBones);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentCurseOfBones_ = $EnchantmentCurseOfBones$Type;
}}
declare module "packages/ovh/corail/tombstone/perk/$Perk" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$PerkBranch, $PerkBranch$Type} from "packages/ovh/corail/tombstone/perk/$PerkBranch"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Perk implements $Comparable<($Perk)>, $StringRepresentable {

constructor(arg0: string, arg1: $PerkBranch$Type, arg2: integer, arg3: $Supplier$Type<($ItemStack$Type)>)
constructor(arg0: string, arg1: $PerkBranch$Type, arg2: integer, arg3: $ResourceLocation$Type)

public "getCost"(arg0: integer): integer
public "getTranslationKey"(): string
public "getBranch"(): $PerkBranch
public "getBranchTier"(): integer
public "isDisabled"(arg0: $Player$Type): boolean
public "getLevelMax"(): integer
public "getLevelBonus"(arg0: $Player$Type): integer
public "getDisabledInfo"(): $Component
public "getCurrentBonusInfo"(arg0: integer): $Component
public "getNextBonusInfo"(arg0: integer): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $Perk$Type): integer
public "getParent"(): $Perk
public "getIcon"(): $Either<($ResourceLocation), ($Supplier<($ItemStack)>)>
public "getSerializedName"(): string
public "getTranslation"(): $Component
public "getDescription"(): $Component
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "translationKey"(): string
get "branch"(): $PerkBranch
get "branchTier"(): integer
get "levelMax"(): integer
get "disabledInfo"(): $Component
get "parent"(): $Perk
get "icon"(): $Either<($ResourceLocation), ($Supplier<($ItemStack)>)>
get "serializedName"(): string
get "translation"(): $Component
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Perk$Type = ($Perk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Perk_ = $Perk$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemImpregnatedDiamond" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$IDefaultImpregnable, $IDefaultImpregnable$Type} from "packages/ovh/corail/tombstone/item/$IDefaultImpregnable"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemImpregnatedDiamond extends $ItemGeneric implements $IDefaultImpregnable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "withRandomImpregnation"(arg0: $ItemStack$Type): $ItemStack
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getTooltipDisplay"(arg0: $ItemStack$Type): $Component
public "impregnate"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "impregnate"(arg0: $ItemStack$Type, arg1: string): $ItemStack
public "isImpregnated"(arg0: $ItemStack$Type): boolean
public "getEntityType"(arg0: $ItemStack$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemImpregnatedDiamond$Type = ($ItemImpregnatedDiamond);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemImpregnatedDiamond_ = $ItemImpregnatedDiamond$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBookOfSoulbound" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBook, $ItemBook$Type} from "packages/ovh/corail/tombstone/item/$ItemBook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBookOfSoulbound extends $ItemBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBookOfSoulbound$Type = ($ItemBookOfSoulbound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBookOfSoulbound_ = $ItemBookOfSoulbound$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentPlagueBringer" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentPlagueBringer extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentPlagueBringer$Type = ($EnchantmentPlagueBringer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentPlagueBringer_ = $EnchantmentPlagueBringer$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$BlockHorizontalWaterLogged" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHorizontalWaterLogged extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHorizontalWaterLogged$Type = ($BlockHorizontalWaterLogged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHorizontalWaterLogged_ = $BlockHorizontalWaterLogged$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentFrostbite" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentFrostbite extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentFrostbite$Type = ($EnchantmentFrostbite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentFrostbite_ = $EnchantmentFrostbite$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemAdvancement$IconType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemAdvancement$IconType extends $Enum<($ItemAdvancement$IconType)> {
static readonly "FIRST_KNOWLEDGE": $ItemAdvancement$IconType
static readonly "CANCEL_GHOSTLY_SHAPE": $ItemAdvancement$IconType
static readonly "TELEPORT_TO_GRAVE": $ItemAdvancement$IconType
static readonly "FIRST_PRAY": $ItemAdvancement$IconType
static readonly "EXORCISM": $ItemAdvancement$IconType
static readonly "ACTIVATE_MAGIC_ITEM": $ItemAdvancement$IconType
static readonly "GHOST": $ItemAdvancement$IconType
static readonly "REVIVE": $ItemAdvancement$IconType
static readonly "FAKE_FOG": $ItemAdvancement$IconType
static readonly "PRAY_OF_PROTECTION": $ItemAdvancement$IconType
static readonly "UNDEAD_MOUNT": $ItemAdvancement$IconType
static readonly "SOUL_LANTERN": $ItemAdvancement$IconType
static readonly "LANTERN": $ItemAdvancement$IconType
static readonly "COMBINATION": $ItemAdvancement$IconType
static readonly "GOLD_HEART": $ItemAdvancement$IconType
static readonly "BLACK_NOTE": $ItemAdvancement$IconType
static readonly "WING": $ItemAdvancement$IconType
static readonly "GARDEN": $ItemAdvancement$IconType
static readonly "SPECTRAL_BOND": $ItemAdvancement$IconType


public static "values"(): ($ItemAdvancement$IconType)[]
public static "valueOf"(arg0: string): $ItemAdvancement$IconType
public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAdvancement$IconType$Type = (("undead_mount") | ("first_pray") | ("first_knowledge") | ("gold_heart") | ("activate_magic_item") | ("lantern") | ("black_note") | ("spectral_bond") | ("fake_fog") | ("ghost") | ("pray_of_protection") | ("cancel_ghostly_shape") | ("exorcism") | ("teleport_to_grave") | ("garden") | ("revive") | ("soul_lantern") | ("wing") | ("combination")) | ($ItemAdvancement$IconType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAdvancement$IconType_ = $ItemAdvancement$IconType$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGeneric" {
import {$IDisableable, $IDisableable$Type} from "packages/ovh/corail/tombstone/api/item/$IDisableable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITab, $ITab$Type} from "packages/ovh/corail/tombstone/item/$ITab"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Location, $Location$Type} from "packages/ovh/corail/tombstone/helper/$Location"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INameable, $INameable$Type} from "packages/ovh/corail/tombstone/item/$INameable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Perk, $Perk$Type} from "packages/ovh/corail/tombstone/perk/$Perk"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LangKey, $LangKey$Type} from "packages/ovh/corail/tombstone/helper/$LangKey"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGeneric extends $Item implements $IDisableable, $INameable, $ITab {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: string, arg1: $BooleanSupplier$Type)
constructor(arg0: string, arg1: $Item$Properties$Type)
constructor(arg0: string, arg1: $Item$Properties$Type, arg2: $BooleanSupplier$Type)
constructor(arg0: string)

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "addWarn"(arg0: $List$Type<($Component$Type)>, arg1: $LangKey$Type, ...arg2: (any)[]): void
public "addPerkInfo"(arg0: $List$Type<($Component$Type)>, arg1: $Perk$Type, arg2: integer): void
public "addEffectInfo"(arg0: $List$Type<($Component$Type)>, arg1: $MobEffect$Type): void
public "addItemDistance"(arg0: $List$Type<($Component$Type)>, arg1: $Location$Type): void
public "withEffect"(): $ItemGeneric
public "withDefaultInfo"(): $ItemGeneric
public "withCraftingInfo"(): $ItemGeneric
public "withCombineInfo"(): $ItemGeneric
public "withSoulboundInfo"(): $ItemGeneric
public "withBetaInfo"(): $ItemGeneric
public "addItemDesc"(arg0: $List$Type<($Component$Type)>): void
public "addItemDesc"(arg0: $List$Type<($Component$Type)>, arg1: string, ...arg2: (any)[]): void
public "addItemUse"(arg0: $List$Type<($Component$Type)>, arg1: string, ...arg2: (any)[]): void
public "addItemUse"(arg0: $List$Type<($Component$Type)>): void
public "addItemUse"(arg0: $List$Type<($Component$Type)>, arg1: $LangKey$Type, ...arg2: (any)[]): void
public "addInfo"(arg0: $List$Type<($Component$Type)>, arg1: $LangKey$Type, ...arg2: (any)[]): void
public "addInfo"(arg0: $List$Type<($Component$Type)>, arg1: string, ...arg2: (any)[]): void
public "addItemPosition"(arg0: $List$Type<($Component$Type)>, arg1: $Location$Type): void
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getCreatorModId"(arg0: $ItemStack$Type): string
public "getSimpleName"(): string
public "isEnabled"(): boolean
public "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "getDescriptionId"(): string
public "isEnabled"(arg0: $ItemStack$Type): boolean
get "simpleName"(): string
get "enabled"(): boolean
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGeneric$Type = ($ItemGeneric);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGeneric_ = $ItemGeneric$Type;
}}
declare module "packages/ovh/corail/tombstone/perk/$PerkBranch" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PerkBranch extends $Enum<($PerkBranch)> implements $StringRepresentable {
static readonly "THANATOMANCY": $PerkBranch
static readonly "ATHANOCRATY": $PerkBranch
static readonly "ARKANOTROPY": $PerkBranch
static readonly "ANIMATHURGY": $PerkBranch


public static "values"(): ($PerkBranch)[]
public static "valueOf"(arg0: string): $PerkBranch
public "getSerializedName"(): string
public "getColor"(): integer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PerkBranch$Type = (("animathurgy") | ("athanocraty") | ("thanatomancy") | ("arkanotropy")) | ($PerkBranch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PerkBranch_ = $PerkBranch$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGift" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGift extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGift$Type = ($ItemGift);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGift_ = $ItemGift$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemStrangeScroll" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICombineCraft, $ICombineCraft$Type} from "packages/ovh/corail/tombstone/item/$ICombineCraft"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$CombineRecipe, $CombineRecipe$Type} from "packages/ovh/corail/tombstone/combine/$CombineRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CombineCraft, $CombineCraft$Type} from "packages/ovh/corail/tombstone/combine/$CombineCraft"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemStrangeScroll extends $ItemGeneric implements $ICombineCraft {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "addCombinations"(arg0: $List$Type<($CombineCraft$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getCombination"(arg0: $ItemStack$Type): $CombineCraft
public "createTooltip"(): $TooltipComponent
public "asSelf"(): $Item
public "getCombinations"(): $List<($CombineCraft)>
public "fromResult"(arg0: $Item$Type): $CombineCraft
public "getCombineRecipes"(): $List<($CombineRecipe)>
get "combinations"(): $List<($CombineCraft)>
get "combineRecipes"(): $List<($CombineRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStrangeScroll$Type = ($ItemStrangeScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStrangeScroll_ = $ItemStrangeScroll$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$SoulType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SoulType extends $Enum<($SoulType)> implements $StringRepresentable {
static readonly "NONE": $SoulType
static readonly "WEAK": $SoulType
static readonly "STRONG": $SoulType


public static "byId"(arg0: integer): $SoulType
public "getColorCode"(): integer
public static "values"(): ($SoulType)[]
public static "valueOf"(arg0: string): $SoulType
public "consume"(arg0: integer): $SoulType
public "getSerializedName"(): string
public "hasSoul"(): boolean
public "getSoulStrength"(): integer
public static "generateSoulType"(): $SoulType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "colorCode"(): integer
get "serializedName"(): string
get "soulStrength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulType$Type = (("strong") | ("none") | ("weak")) | ($SoulType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulType_ = $SoulType$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentRuthlessStrike" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentRuthlessStrike extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentRuthlessStrike$Type = ($EnchantmentRuthlessStrike);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentRuthlessStrike_ = $EnchantmentRuthlessStrike$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$INameable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INameable {

 "getSimpleName"(): string

(): string
}

export namespace $INameable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INameable$Type = ($INameable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INameable_ = $INameable$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentSanctified" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentSanctified extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSanctified$Type = ($EnchantmentSanctified);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentSanctified_ = $EnchantmentSanctified$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemScrollBuff" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemScrollBuff$SpellBuff, $ItemScrollBuff$SpellBuff$Type} from "packages/ovh/corail/tombstone/item/$ItemScrollBuff$SpellBuff"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemScroll, $ItemScroll$Type} from "packages/ovh/corail/tombstone/item/$ItemScroll"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScrollBuff extends $ItemScroll {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $ItemScrollBuff$SpellBuff$Type)

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "isEnchanted"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollBuff$Type = ($ItemScrollBuff);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollBuff_ = $ItemScrollBuff$Type;
}}
declare module "packages/ovh/corail/tombstone/block/entity/$BlockEntityPlayerGrave" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockWritableGrave, $BlockWritableGrave$Type} from "packages/ovh/corail/tombstone/block/entity/$BlockWritableGrave"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $BlockEntityPlayerGrave extends $BlockWritableGrave {
 "countTicks": long
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getInventory"(): $IItemHandler
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onlyOpCanSetNbt"(): boolean
public "setOwner"(arg0: $Player$Type, arg1: long, arg2: boolean): void
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntityPlayerGrave$Type): void
public static "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntityPlayerGrave$Type): void
public "getNeedAccess"(): boolean
public "giveInventory"(arg0: $ServerPlayer$Type): void
public "getLastOffhandItem"(): $Item
public "setLastOffhandItem"(arg0: $Item$Type): void
public "getFormattedInfo"(): string
public "getFormattedDeathDate"(): string
get "inventory"(): $IItemHandler
get "needAccess"(): boolean
get "lastOffhandItem"(): $Item
set "lastOffhandItem"(value: $Item$Type)
get "formattedInfo"(): string
get "formattedDeathDate"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityPlayerGrave$Type = ($BlockEntityPlayerGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityPlayerGrave_ = $BlockEntityPlayerGrave$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$EarthlyGardenEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EarthlyGardenEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthlyGardenEffect$Type = ($EarthlyGardenEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthlyGardenEffect_ = $EarthlyGardenEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBookOfDisenchantment" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBook, $ItemBook$Type} from "packages/ovh/corail/tombstone/item/$ItemBook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBookOfDisenchantment extends $ItemBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBookOfDisenchantment$Type = ($ItemBookOfDisenchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBookOfDisenchantment_ = $ItemBookOfDisenchantment$Type;
}}
declare module "packages/ovh/corail/tombstone/loot/$IDelayedNBTLoot" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDelayedNBTLoot {

 "onDelayedLoot"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack
}

export namespace $IDelayedNBTLoot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDelayedNBTLoot$Type = ($IDelayedNBTLoot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDelayedNBTLoot_ = $IDelayedNBTLoot$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$PurificationEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PurificationEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PurificationEffect$Type = ($PurificationEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PurificationEffect_ = $PurificationEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemSmokeBall" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSmokeBall extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSmokeBall$Type = ($ItemSmokeBall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSmokeBall_ = $ItemSmokeBall$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$BlockDecorativeGrave" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$GraveModel, $GraveModel$Type} from "packages/ovh/corail/tombstone/block/$GraveModel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGraveBase, $BlockGraveBase$Type} from "packages/ovh/corail/tombstone/block/$BlockGraveBase"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$SoulType, $SoulType$Type} from "packages/ovh/corail/tombstone/block/$SoulType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockDecorativeGrave extends $BlockGraveBase implements $EntityBlock {
static readonly "IS_ENGRAVED": $BooleanProperty
static readonly "SOUL_TYPE": $EnumProperty<($SoulType)>
static readonly "MODEL_TEXTURE": $IntegerProperty
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $GraveModel$Type)

public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDecorativeGrave$Type = ($BlockDecorativeGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDecorativeGrave_ = $BlockDecorativeGrave$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemScrollOfKnowledge" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IDelayedNBTLoot, $IDelayedNBTLoot$Type} from "packages/ovh/corail/tombstone/loot/$IDelayedNBTLoot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemScroll, $ItemScroll$Type} from "packages/ovh/corail/tombstone/item/$ItemScroll"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScrollOfKnowledge extends $ItemScroll implements $IDelayedNBTLoot {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "createWithXp"(arg0: integer): $ItemStack
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "onDelayedLoot"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type, arg2: $LootContext$Type): $ItemStack
public "getStoredXp"(arg0: $ItemStack$Type): integer
public "setStoredXp"(arg0: $ItemStack$Type, arg1: integer): boolean
public "getName"(arg0: $ItemStack$Type): $Component
public "isEnchanted"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollOfKnowledge$Type = ($ItemScrollOfKnowledge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollOfKnowledge_ = $ItemScrollOfKnowledge$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemDustOfFrost" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemMagicDust, $ItemMagicDust$Type} from "packages/ovh/corail/tombstone/item/$ItemMagicDust"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDustOfFrost extends $ItemMagicDust {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDustOfFrost$Type = ($ItemDustOfFrost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDustOfFrost_ = $ItemDustOfFrost$Type;
}}
declare module "packages/ovh/corail/tombstone/recipe/$ShapelessSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessSerializer<T extends $ShapelessRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ShapelessRecipe$Type), (T)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessSerializer$Type<T> = ($ShapelessSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessSerializer_<T> = $ShapelessSerializer$Type<(T)>;
}}
declare module "packages/ovh/corail/tombstone/mixin/accessor/$VillagerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerAccessor {

 "callIncreaseMerchantCareer"(): void

(): void
}

export namespace $VillagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerAccessor$Type = ($VillagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerAccessor_ = $VillagerAccessor$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$DecrepitudeEffect" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DecrepitudeEffect extends $TombstoneEffect {

constructor()

public "onEffectStarted"(arg0: $LivingEntity$Type, arg1: integer): void
public "onEffectFinished"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecrepitudeEffect$Type = ($DecrepitudeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecrepitudeEffect_ = $DecrepitudeEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemLostTablet" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Location, $Location$Type} from "packages/ovh/corail/tombstone/helper/$Location"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemLostTablet$Type, $ItemLostTablet$Type$Type} from "packages/ovh/corail/tombstone/item/$ItemLostTablet$Type"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemGraveMagic, $ItemGraveMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemGraveMagic"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemLostTablet extends $ItemGraveMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getCooldown"(arg0: $Level$Type, arg1: $ItemStack$Type): integer
public "canEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "getLocationId"(arg0: $ItemStack$Type): $Optional<(string)>
public "isWakeUp"(arg0: $ItemStack$Type): boolean
public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchanted"(arg0: $ItemStack$Type): boolean
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getLocation"(arg0: $ItemStack$Type): $Location
public "getType"(arg0: $ItemStack$Type): $ItemLostTablet$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLostTablet$Type = ($ItemLostTablet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLostTablet_ = $ItemLostTablet$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$MercyEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MercyEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MercyEffect$Type = ($MercyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MercyEffect_ = $MercyEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/block/$BlockGraveMarble" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockGraveMarble$MarbleType, $BlockGraveMarble$MarbleType$Type} from "packages/ovh/corail/tombstone/block/$BlockGraveMarble$MarbleType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"

export class $BlockGraveMarble extends $Block {
readonly "name": string
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

constructor(arg0: $BlockGraveMarble$MarbleType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getBuilder"(): $BlockBehaviour$Properties
public "getDescriptionId"(): string
get "builder"(): $BlockBehaviour$Properties
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGraveMarble$Type = ($BlockGraveMarble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGraveMarble_ = $BlockGraveMarble$Type;
}}
declare module "packages/ovh/corail/tombstone/combine/$CombineCraft" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CombineUpgrade, $CombineUpgrade$Type} from "packages/ovh/corail/tombstone/combine/$CombineUpgrade"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $CombineCraft extends $CombineUpgrade {

constructor(arg0: $TagKey$Type<($Item$Type)>, arg1: $ItemStack$Type, arg2: $Supplier$Type<(boolean)>)
constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Supplier$Type<(boolean)>)
constructor(arg0: $TagKey$Type<($Item$Type)>, arg1: $ItemStack$Type)
constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type)

public "result"(): $ItemStack
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombineCraft$Type = ($CombineCraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombineCraft_ = $CombineCraft$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$RestorationEffect" {
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RestorationEffect extends $TombstoneEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestorationEffect$Type = ($RestorationEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestorationEffect_ = $RestorationEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentMagicSiphon" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentMagicSiphon extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMagicSiphon$Type = ($EnchantmentMagicSiphon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMagicSiphon_ = $EnchantmentMagicSiphon$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$FrostbiteEffect" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$TombstoneEffect, $TombstoneEffect$Type} from "packages/ovh/corail/tombstone/effect/$TombstoneEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FrostbiteEffect extends $TombstoneEffect {

constructor()

public "onEffectStarted"(arg0: $LivingEntity$Type, arg1: integer): void
public "onEffectFinished"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostbiteEffect$Type = ($FrostbiteEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostbiteEffect_ = $FrostbiteEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentSoulBound" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentSoulBound extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
public "getMaxLevel"(): integer
get "enabled"(): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSoulBound$Type = ($EnchantmentSoulBound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentSoulBound_ = $EnchantmentSoulBound$Type;
}}
declare module "packages/ovh/corail/tombstone/effect/$TombstoneEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TombstoneEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isRequiringSync"(): boolean
public "onEffectStarted"(arg0: $LivingEntity$Type, arg1: integer): void
public "onEffectFinished"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "applyInstantenousEffect"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: double): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "isInstantenous"(): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "noAttributeScale"(): $TombstoneEffect
public "requireSync"(): $TombstoneEffect
public "setInstantenous"(): $TombstoneEffect
get "requiringSync"(): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TombstoneEffect$Type = ($TombstoneEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TombstoneEffect_ = $TombstoneEffect$Type;
}}
declare module "packages/ovh/corail/tombstone/block/entity/$BlockWritableGrave" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $BlockWritableGrave extends $BlockEntity {
 "countTicks": long
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "hasOwner"(): boolean
public static "commonTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockWritableGrave$Type): void
public "isOwner"(arg0: $Player$Type): boolean
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "getRenderBoundingBox"(): $AABB
public "setOwner"(arg0: $UUID$Type, arg1: string, arg2: long): void
public "getOwnerId"(): $UUID
public "getOwnerName"(): string
public "canShowFog"(): boolean
public "getDeathMCTime"(): long
public "resetDeathTime"(): void
public "getOwnerDeathTime"(): long
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
get "renderBoundingBox"(): $AABB
get "ownerId"(): $UUID
get "ownerName"(): string
get "deathMCTime"(): long
get "ownerDeathTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWritableGrave$Type = ($BlockWritableGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWritableGrave_ = $BlockWritableGrave$Type;
}}
declare module "packages/ovh/corail/tombstone/enchantment/$EnchantmentSpectralConjurer" {
import {$TombstoneEnchantment, $TombstoneEnchantment$Type} from "packages/ovh/corail/tombstone/enchantment/$TombstoneEnchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantmentSpectralConjurer extends $TombstoneEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor()

public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSpectralConjurer$Type = ($EnchantmentSpectralConjurer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentSpectralConjurer_ = $EnchantmentSpectralConjurer$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemVillagerGift" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemSearchable, $ItemSearchable$Type} from "packages/ovh/corail/tombstone/item/$ItemSearchable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemVillagerGift extends $ItemSearchable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVillagerGift$Type = ($ItemVillagerGift);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVillagerGift_ = $ItemVillagerGift$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemMagicDust" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGeneric, $ItemGeneric$Type} from "packages/ovh/corail/tombstone/item/$ItemGeneric"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMagicDust extends $ItemGeneric {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMagicDust$Type = ($ItemMagicDust);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMagicDust_ = $ItemMagicDust$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemTablet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemGraveMagic, $ItemGraveMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemGraveMagic"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTablet extends $ItemGraveMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: string, arg1: $BooleanSupplier$Type)

public "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public "createAncient"(): $ItemStack
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTablet$Type = ($ItemTablet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTablet_ = $ItemTablet$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemAnkhOfPrayer" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemCastableMagic, $ItemCastableMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemCastableMagic"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemAnkhOfPrayer extends $ItemCastableMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getUseDuration"(arg0: $ItemStack$Type): integer
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAnkhOfPrayer$Type = ($ItemAnkhOfPrayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAnkhOfPrayer_ = $ItemAnkhOfPrayer$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemGemstoneOfMerchant" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemCastableMagic, $ItemCastableMagic$Type} from "packages/ovh/corail/tombstone/item/$ItemCastableMagic"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGemstoneOfMerchant extends $ItemCastableMagic {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGemstoneOfMerchant$Type = ($ItemGemstoneOfMerchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGemstoneOfMerchant_ = $ItemGemstoneOfMerchant$Type;
}}
declare module "packages/ovh/corail/tombstone/item/$ItemBookOfScribe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISoulConsumer$ConsumeResult, $ISoulConsumer$ConsumeResult$Type} from "packages/ovh/corail/tombstone/api/capability/$ISoulConsumer$ConsumeResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemBook, $ItemBook$Type} from "packages/ovh/corail/tombstone/item/$ItemBook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBookOfScribe extends $ItemBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "setEnchant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ServerPlayer$Type, arg3: $ItemStack$Type, arg4: integer): $ISoulConsumer$ConsumeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBookOfScribe$Type = ($ItemBookOfScribe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBookOfScribe_ = $ItemBookOfScribe$Type;
}}
