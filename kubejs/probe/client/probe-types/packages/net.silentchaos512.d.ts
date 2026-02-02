declare module "packages/net/silentchaos512/gear/api/item/$GearType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GearType$Builder, $GearType$Builder$Type} from "packages/net/silentchaos512/gear/api/item/$GearType$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICoreItem, $ICoreItem$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreItem"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$GearTypeMatcher, $GearTypeMatcher$Type} from "packages/net/silentchaos512/gear/api/item/$GearTypeMatcher"

export class $GearType {
static readonly "NONE": $GearType
static readonly "ALL": $GearType
static readonly "PART": $GearType
static readonly "FRAGMENT": $GearType
static readonly "PROJECTILE": $GearType
static readonly "TOOL": $GearType
static readonly "WEAPON": $GearType
static readonly "HARVEST_TOOL": $GearType
static readonly "AXE": $GearType
static readonly "PICKAXE": $GearType
static readonly "SHOVEL": $GearType
static readonly "EXCAVATOR": $GearType
static readonly "HAMMER": $GearType
static readonly "SAW": $GearType
static readonly "HOE": $GearType
static readonly "MATTOCK": $GearType
static readonly "PAXEL": $GearType
static readonly "PROSPECTOR_HAMMER": $GearType
static readonly "SHEARS": $GearType
static readonly "SICKLE": $GearType
static readonly "MELEE_WEAPON": $GearType
static readonly "DAGGER": $GearType
static readonly "KATANA": $GearType
static readonly "KNIFE": $GearType
static readonly "MACHETE": $GearType
static readonly "SPEAR": $GearType
static readonly "SWORD": $GearType
static readonly "TRIDENT": $GearType
static readonly "RANGED_WEAPON": $GearType
static readonly "BOW": $GearType
static readonly "CROSSBOW": $GearType
static readonly "SLINGSHOT": $GearType
static readonly "FISHING_ROD": $GearType
static readonly "SHIELD": $GearType
static readonly "ARMOR": $GearType
static readonly "BOOTS": $GearType
static readonly "CHESTPLATE": $GearType
static readonly "ELYTRA": $GearType
static readonly "HELMET": $GearType
static readonly "LEGGINGS": $GearType
static readonly "ARROW": $GearType
static readonly "CURIO": $GearType
static readonly "BRACELET": $GearType
static readonly "RING": $GearType


public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getArmorDurabilityMultiplier"(): float
public "isArmor"(): boolean
public "getRelevantStats"(): $Collection<($ItemStat)>
public "getExcludedStats"(): $Set<($ItemStat)>
public "getMatcher"(arg0: boolean): $GearTypeMatcher
public "isGear"(): boolean
public "getName"(): string
public static "get"(arg0: string): $GearType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $GearType$Type, arg1: boolean): boolean
public "matches"(arg0: string, arg1: boolean): boolean
public "matches"(arg0: string): boolean
public "matches"(arg0: $GearType$Type): boolean
public "getParent"(): $GearType
public "isInvalid"(): boolean
public "getDisplayName"(): $Component
public "getItem"(): $Optional<($ICoreItem)>
public static "fromJson"(arg0: $JsonObject$Type, arg1: string): $GearType
public "canPerformAction"(arg0: $ToolAction$Type): boolean
public static "getOrCreate"(arg0: string, arg1: $GearType$Type): $GearType
public static "getOrCreate"(arg0: string): $GearType
public static "getOrCreate"(arg0: string, arg1: $GearType$Type, arg2: $Consumer$Type<($GearType$Builder$Type)>): $GearType
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "armorDurabilityMultiplier"(): float
get "armor"(): boolean
get "relevantStats"(): $Collection<($ItemStat)>
get "excludedStats"(): $Set<($ItemStat)>
get "gear"(): boolean
get "name"(): string
get "parent"(): $GearType
get "invalid"(): boolean
get "displayName"(): $Component
get "item"(): $Optional<($ICoreItem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearType$Type = ($GearType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearType_ = $GearType$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifier" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$IMaterialModifierType, $IMaterialModifierType$Type} from "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifierType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IMaterialModifier {

 "appendTooltip"(arg0: $List$Type<($Component$Type)>): void
 "modifyMaterialName"(arg0: $MutableComponent$Type): $MutableComponent
 "modifyStats"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $List$Type<($StatInstance$Type)>): $List<($StatInstance)>
 "getType"(): $IMaterialModifierType<(any)>
}

export namespace $IMaterialModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialModifier$Type = ($IMaterialModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialModifier_ = $IMaterialModifier$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/salvage/$GearSalvagingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$GearSalvagingRecipe, $GearSalvagingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/salvage/$GearSalvagingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GearSalvagingRecipe$Serializer implements $RecipeSerializer<($GearSalvagingRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GearSalvagingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GearSalvagingRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $GearSalvagingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GearSalvagingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSalvagingRecipe$Serializer$Type = ($GearSalvagingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSalvagingRecipe$Serializer_ = $GearSalvagingRecipe$Serializer$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$ModOreBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DropExperienceBlock, $DropExperienceBlock$Type} from "packages/net/minecraft/world/level/block/$DropExperienceBlock"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ModOreBlock extends $DropExperienceBlock {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModOreBlock$Type = ($ModOreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModOreBlock_ = $ModOreBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/api/stats/$ItemStat$DisplayFormat" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemStat$DisplayFormat extends $Enum<($ItemStat$DisplayFormat)> {
static readonly "UNIT": $ItemStat$DisplayFormat
static readonly "MULTIPLIER": $ItemStat$DisplayFormat
static readonly "PERCENTAGE": $ItemStat$DisplayFormat


public static "values"(): ($ItemStat$DisplayFormat)[]
public static "valueOf"(arg0: string): $ItemStat$DisplayFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStat$DisplayFormat$Type = (("unit") | ("multiplier") | ("percentage")) | ($ItemStat$DisplayFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStat$DisplayFormat_ = $ItemStat$DisplayFormat$Type;
}}
declare module "packages/net/silentchaos512/gear/gear/part/$PartData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IPartData, $IPartData$Type} from "packages/net/silentchaos512/gear/api/part/$IPartData"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$DataResource, $DataResource$Type} from "packages/net/silentchaos512/gear/api/util/$DataResource"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"
import {$IGearPart, $IGearPart$Type} from "packages/net/silentchaos512/gear/api/part/$IGearPart"

export class $PartData implements $IPartData {
static readonly "NBT_ID": string


public "getTier"(): integer
public "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): $Collection<($StatInstance)>
public "getModelKey"(): string
public "isCraftingAllowed"(arg0: $GearType$Type, arg1: $CraftingContainer$Type): boolean
public "getGearType"(): $GearType
public "getMaterialName"(arg0: $ItemStack$Type): $Component
public "onAddToGear"(arg0: $ItemStack$Type): void
public "onRemoveFromGear"(arg0: $ItemStack$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $DataResource$Type<($IGearPart$Type)>, arg1: $ItemStack$Type): $IPartData
public static "of"(arg0: $IGearPart$Type, arg1: $ItemStack$Type): $PartData
public static "of"(arg0: $IGearPart$Type): $PartData
public static "from"(arg0: $ItemStack$Type): $PartData
public static "from"(arg0: $ItemStack$Type, arg1: boolean): $PartData
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $PartData
public "getId"(): $ResourceLocation
public "getType"(): $PartType
public "getDisplayName"(arg0: $ItemStack$Type): $Component
public "getDisplayName"(arg0: $PartType$Type, arg1: $ItemStack$Type): $Component
public "getItem"(): $ItemStack
public "getColor"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): integer
public "getColor"(arg0: $ItemStack$Type): integer
public "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): float
public "getNameColor"(arg0: $PartType$Type, arg1: $GearType$Type): integer
public "getHarvestTier"(): $Tier
public "getStatModifiers"(arg0: $StatGearKey$Type, arg1: $ItemStack$Type): $Collection<($StatInstance)>
public "getTraits"(arg0: $PartType$Type, arg1: $GearType$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
public "getTraits"(arg0: $ItemStack$Type): $Collection<($TraitInstance)>
public "getTraits"(): $Collection<($TraitInstance)>
/**
 * 
 * @deprecated
 */
public "getPartId"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getPart"(): $IGearPart
/**
 * 
 * @deprecated
 */
public "getCraftingItem"(): $ItemStack
public "getMaterials"(): $MaterialList
public "serialize"(): $JsonObject
public "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type): float
public "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type): $Collection<($StatInstance)>
public "getTraits"(arg0: $PartType$Type): $Collection<($TraitInstance)>
public "getTraits"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type): $Collection<($TraitInstance)>
public "containsMaterial"(arg0: $DataResource$Type<($IMaterial$Type)>): boolean
public "getDisplayName"(arg0: $PartType$Type): $Component
get "tier"(): integer
get "modelKey"(): string
get "gearType"(): $GearType
get "id"(): $ResourceLocation
get "type"(): $PartType
get "item"(): $ItemStack
get "harvestTier"(): $Tier
get "traits"(): $Collection<($TraitInstance)>
get "partId"(): $ResourceLocation
get "part"(): $IGearPart
get "craftingItem"(): $ItemStack
get "materials"(): $MaterialList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartData$Type = ($PartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartData_ = $PartData$Type;
}}
declare module "packages/net/silentchaos512/gems/util/$IGem" {
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"

export interface $IGem {

 "getGem"(): $Gems

(): $Gems
}

export namespace $IGem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGem$Type = ($IGem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGem_ = $IGem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/util/$PartGearKey" {
import {$IPartData, $IPartData$Type} from "packages/net/silentchaos512/gear/api/part/$IPartData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"

export class $PartGearKey {


public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $PartGearKey
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public static "ofAll"(arg0: $PartType$Type): $PartGearKey
public "getPartType"(): $PartType
public "getGearType"(): $GearType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $GearType$Type, arg1: $IPartData$Type): $PartGearKey
public static "of"(arg0: $GearType$Type, arg1: $PartType$Type): $PartGearKey
public "getParent"(): $PartGearKey
public static "read"(arg0: string): $PartGearKey
public "getDisplayName"(): $Component
get "partType"(): $PartType
get "gearType"(): $GearType
get "parent"(): $PartGearKey
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartGearKey$Type = ($PartGearKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartGearKey_ = $PartGearKey$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$GemBlock" {
import {$IGemBlock, $IGemBlock$Type} from "packages/net/silentchaos512/gems/block/$IGemBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $GemBlock extends $Block implements $IGemBlock {
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

constructor(arg0: $Gems$Type, arg1: string, arg2: $BlockBehaviour$Properties$Type)

public "getGemBlockName"(): $MutableComponent
public "getGem"(): $Gems
public "getName"(): $MutableComponent
get "gemBlockName"(): $MutableComponent
get "gem"(): $Gems
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemBlock$Type = ($GemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemBlock_ = $GemBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/api/item/$GearTypeMatcher" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $GearTypeMatcher implements $Predicate<($GearType)> {
static readonly "ALL": $GearTypeMatcher

constructor(arg0: boolean, ...arg1: ($GearType$Type)[])

public "test"(arg0: $GearType$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $GearTypeMatcher
public "serialize"(): $JsonObject
public static "deserialize"(arg0: $JsonObject$Type): $GearTypeMatcher
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($GearType)>
public "negate"(): $Predicate<($GearType)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($GearType)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($GearType)>
public static "isEqual"<T>(arg0: any): $Predicate<($GearType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearTypeMatcher$Type = ($GearTypeMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearTypeMatcher_ = $GearTypeMatcher$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/smithing/$UpgradeSmithingRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$GearSmithingRecipe, $GearSmithingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/smithing/$GearSmithingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $UpgradeSmithingRecipe extends $GearSmithingRecipe {
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSmithingRecipe$Type = ($UpgradeSmithingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSmithingRecipe_ = $UpgradeSmithingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearArmorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICoreArmor, $ICoreArmor$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreArmor"
import {$DyeableArmorItem, $DyeableArmorItem$Type} from "packages/net/minecraft/world/item/$DyeableArmorItem"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearArmorItem extends $DyeableArmorItem implements $ICoreArmor {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type)

public "getGearType"(): $GearType
public "isValidSlot"(arg0: string): boolean
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "getArmorProtection"(arg0: $ItemStack$Type): double
public "getArmorToughness"(arg0: $ItemStack$Type): double
public "getArmorMagicProtection"(arg0: $ItemStack$Type): double
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getMaterial"(): $ArmorMaterial
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public "getDurabilityStat"(): $ItemStat
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getItemColors"(): $ItemColor
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getRequiredParts"(): $Collection<($PartType)>
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
public static "get"(arg0: $ItemStack$Type): $Equipable
get "gearType"(): $GearType
get "material"(): $ArmorMaterial
get "durabilityStat"(): $ItemStat
get "itemColors"(): $ItemColor
get "animationFrames"(): integer
get "requiredParts"(): $Collection<($PartType)>
get "renderParts"(): $Collection<($PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearArmorItem$Type = ($GearArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearArmorItem_ = $GearArmorItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearSwordItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$ICoreWeapon, $ICoreWeapon$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreWeapon"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearSwordItem extends $SwordItem implements $ICoreWeapon {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getGearType"(): $GearType
public "getTier"(): $Tier
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "tier"(): $Tier
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSwordItem$Type = ($GearSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSwordItem_ = $GearSwordItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearShovelItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearShovelItem extends $ShovelItem implements $ICoreTool {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getGearType"(): $GearType
public "getTier"(): $Tier
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "tier"(): $Tier
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearShovelItem$Type = ($GearShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearShovelItem_ = $GearShovelItem$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/press/$PressingRecipe" {
import {$ExtendedSingleItemRecipe, $ExtendedSingleItemRecipe$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedSingleItemRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PressingRecipe extends $ExtendedSingleItemRecipe {
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressingRecipe$Type = ($PressingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressingRecipe_ = $PressingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/block/charger/$StarlightChargerBlock" {
import {$ModContainerBlock, $ModContainerBlock$Type} from "packages/net/silentchaos512/gear/block/$ModContainerBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ChargerTileEntity, $ChargerTileEntity$Type} from "packages/net/silentchaos512/gear/block/charger/$ChargerTileEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StarlightChargerBlock extends $ModContainerBlock<($ChargerTileEntity)> {
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

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<($ChargerTileEntity$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarlightChargerBlock$Type = ($StarlightChargerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarlightChargerBlock_ = $StarlightChargerBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/smithing/$GearSmithingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"

export class $GearSmithingRecipe extends $SmithingTransformRecipe {
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type)

public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSmithingRecipe$Type = ($GearSmithingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSmithingRecipe_ = $GearSmithingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/salvage/$CompoundPartSalvagingRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$SalvagingRecipe, $SalvagingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/salvage/$SalvagingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CompoundPartSalvagingRecipe extends $SalvagingRecipe {

constructor(arg0: $ResourceLocation$Type)

public "getPossibleResults"(arg0: $Container$Type): $List<($ItemStack)>
public "getIngredient"(): $Ingredient
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "ingredient"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundPartSalvagingRecipe$Type = ($CompoundPartSalvagingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundPartSalvagingRecipe_ = $CompoundPartSalvagingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/blueprint/book/$BlueprintBookItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$KeyPressOnItemPacket$Type, $KeyPressOnItemPacket$Type$Type} from "packages/net/silentchaos512/gear/network/$KeyPressOnItemPacket$Type"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$ICycleItem, $ICycleItem$Type} from "packages/net/silentchaos512/gear/item/$ICycleItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IBlueprint, $IBlueprint$Type} from "packages/net/silentchaos512/gear/item/blueprint/$IBlueprint"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IContainerItem, $IContainerItem$Type} from "packages/net/silentchaos512/gear/item/$IContainerItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlueprintBookItem extends $Item implements $IBlueprint, $IContainerItem, $ICycleItem {
static readonly "INVENTORY_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "openContainer"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): void
public "getPartType"(arg0: $ItemStack$Type): $PartType
public "getGearType"(arg0: $ItemStack$Type): $GearType
public "onCycleKeyPress"(arg0: $ItemStack$Type, arg1: $KeyPressOnItemPacket$Type$Type): void
public static "getSelectedSlot"(arg0: $ItemStack$Type): integer
public static "setSelectedSlot"(arg0: $ItemStack$Type, arg1: integer): void
public "createdFullyLoadedBook"(): $ItemStack
public "getInventorySize"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "canStore"(arg0: $ItemStack$Type): boolean
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "saveInventory"(arg0: $ItemStack$Type, arg1: $IItemHandler$Type): void
public "getInventoryRows"(arg0: $ItemStack$Type): integer
public "getInventory"(arg0: $ItemStack$Type): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintBookItem$Type = ($BlueprintBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintBookItem_ = $BlueprintBookItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$ITraitSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ITrait, $ITrait$Type} from "packages/net/silentchaos512/gear/api/traits/$ITrait"

export interface $ITraitSerializer<T extends $ITrait> {

 "getName"(): $ResourceLocation
 "write"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "read"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
 "read"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
}

export namespace $ITraitSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraitSerializer$Type<T> = ($ITraitSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraitSerializer_<T> = $ITraitSerializer$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/item/$ICoreTool" {
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICoreItem, $ICoreItem$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreItem"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICoreTool extends $ICoreItem {

 "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
 "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
 "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getRequiredParts"(): $Collection<($PartType)>
 "isValidSlot"(arg0: string): boolean
 "hasTexturesFor"(arg0: $PartType$Type): boolean
 "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
 "getGearType"(): $GearType
 "requiresPartOfType"(arg0: $PartType$Type): boolean
 "getAnimationFrames"(): integer
 "getDurabilityStat"(): $ItemStat
 "getRepairModifier"(arg0: $ItemStack$Type): float
 "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
 "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
 "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
 "getRenderParts"(): $Collection<($PartType)>
 "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
 "construct"(arg0: $Collection$Type<(any)>): $ItemStack
 "asItem"(): $Item
 "getItemColors"(): $ItemColor
 "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer

(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
}

export namespace $ICoreTool {
const RELEVANT_STATS: $Set<($ItemStat)>
const EXCLUDED_STATS: $Set<($ItemStat)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICoreTool$Type = ($ICoreTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICoreTool_ = $ICoreTool$Type;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe$Serializer" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ExtendedShapelessRecipe, $ExtendedShapelessRecipe$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExtendedShapelessRecipe$Serializer<T extends $ExtendedShapelessRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ShapelessRecipe$Type), (T)>, arg1: $BiConsumer$Type<($JsonObject$Type), (T)>, arg2: $BiConsumer$Type<($FriendlyByteBuf$Type), (T)>, arg3: $BiConsumer$Type<($FriendlyByteBuf$Type), (T)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "basic"<S extends $ExtendedShapelessRecipe>(arg0: $Function$Type<($ShapelessRecipe$Type), (S)>): $ExtendedShapelessRecipe$Serializer<(S)>
/**
 * 
 * @deprecated
 */
public static "basic"<S extends $ExtendedShapelessRecipe>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ShapelessRecipe$Type), (S)>): $ExtendedShapelessRecipe$Serializer<(S)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedShapelessRecipe$Serializer$Type<T> = ($ExtendedShapelessRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedShapelessRecipe$Serializer_<T> = $ExtendedShapelessRecipe$Serializer$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/smithing/$CoatingSmithingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CoatingSmithingRecipe, $CoatingSmithingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/smithing/$CoatingSmithingRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CoatingSmithingRecipe$Serializer implements $RecipeSerializer<($CoatingSmithingRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CoatingSmithingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CoatingSmithingRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CoatingSmithingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CoatingSmithingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoatingSmithingRecipe$Serializer$Type = ($CoatingSmithingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoatingSmithingRecipe$Serializer_ = $CoatingSmithingRecipe$Serializer$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$ICycleItem" {
import {$KeyPressOnItemPacket$Type, $KeyPressOnItemPacket$Type$Type} from "packages/net/silentchaos512/gear/network/$KeyPressOnItemPacket$Type"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICycleItem {

 "onCycleKeyPress"(arg0: $ItemStack$Type, arg1: $KeyPressOnItemPacket$Type$Type): void

(arg0: $ItemStack$Type, arg1: $KeyPressOnItemPacket$Type$Type): void
}

export namespace $ICycleItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICycleItem$Type = ($ICycleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICycleItem_ = $ICycleItem$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/salvage/$SalvagingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SalvagingRecipe implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type)

public "getPossibleResults"(arg0: $Container$Type): $List<($ItemStack)>
public "getIngredient"(): $Ingredient
public "getId"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public static "salvage"(arg0: $PartData$Type): $List<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getMod"(): string
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getType"(): $ResourceLocation
get "ingredient"(): $Ingredient
get "id"(): $ResourceLocation
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "mod"(): string
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvagingRecipe$Type = ($SalvagingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagingRecipe_ = $SalvagingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$BlueprintPackageItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContainerItem, $LootContainerItem$Type} from "packages/net/silentchaos512/lib/item/$LootContainerItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlueprintPackageItem extends $LootContainerItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $ResourceLocation$Type)

public "getDefaultLootTable"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "defaultLootTable"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintPackageItem$Type = ($BlueprintPackageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintPackageItem_ = $BlueprintPackageItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$SlingshotAmmoItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$ISlingshotAmmo, $ISlingshotAmmo$Type} from "packages/net/silentchaos512/gear/api/item/$ISlingshotAmmo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SlingshotAmmoItem extends $ArrowItem implements $ISlingshotAmmo {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isAmmo"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlingshotAmmoItem$Type = ($SlingshotAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlingshotAmmoItem_ = $SlingshotAmmoItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$ITraitInstance" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITraitCondition, $ITraitCondition$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitCondition"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ITrait, $ITrait$Type} from "packages/net/silentchaos512/gear/api/traits/$ITrait"

export interface $ITraitInstance {

 "getTraitId"(): $ResourceLocation
 "conditionsMatch"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type, arg2: $List$Type<(any)>): boolean
 "getTrait"(): $ITrait
 "getConditions"(): $Collection<($ITraitCondition)>
 "getConditionsText"(): $MutableComponent
 "getLevel"(): integer
 "serialize"(): $JsonObject
}

export namespace $ITraitInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraitInstance$Type = ($ITraitInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraitInstance_ = $ITraitInstance$Type;
}}
declare module "packages/net/silentchaos512/lib/tile/$LockableSidedInventoryTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BaseContainerBlockEntity, $BaseContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $LockableSidedInventoryTileEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
 "lockKey": $LockCode
 "blockState": $BlockState


public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "empty"(): boolean
get "containerSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockableSidedInventoryTileEntity$Type = ($LockableSidedInventoryTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockableSidedInventoryTileEntity_ = $LockableSidedInventoryTileEntity$Type;
}}
declare module "packages/net/silentchaos512/gear/gear/material/modifier/$ChargedMaterialModifier$Type" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$IMaterialModifierType, $IMaterialModifierType$Type} from "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifierType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ChargedMaterialModifier, $ChargedMaterialModifier$Type} from "packages/net/silentchaos512/gear/gear/material/modifier/$ChargedMaterialModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ChargedMaterialModifier$Type<T extends $ChargedMaterialModifier> implements $IMaterialModifierType<(T)> {

constructor(arg0: $Function$Type<(integer), (T)>, arg1: string)

public "writeToNetwork"(arg0: T, arg1: $FriendlyByteBuf$Type): void
public "readFromNetwork"(arg0: $FriendlyByteBuf$Type): T
public "removeModifier"(arg0: $ItemStack$Type): void
public "checkLevel"(arg0: $ItemStack$Type): integer
public "write"(arg0: T, arg1: $CompoundTag$Type): void
public "getId"(): $ResourceLocation
public "create"(arg0: integer): T
public "serialize"(arg0: T): $JsonObject
public "deserialize"(arg0: $JsonObject$Type): T
public "write"(arg0: T, arg1: $ItemStack$Type): void
public "read"(arg0: $IMaterialInstance$Type): T
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedMaterialModifier$Type$Type<T> = ($ChargedMaterialModifier$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedMaterialModifier$Type_<T> = $ChargedMaterialModifier$Type$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/stats/$ItemStat$Properties" {
import {$ItemStat$DisplayFormat, $ItemStat$DisplayFormat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat$DisplayFormat"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$StatInstance$Operation, $StatInstance$Operation$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance$Operation"

export class $ItemStat$Properties {

constructor()

public "synergyApplies"(): $ItemStat$Properties
public "affectedByGrades"(arg0: boolean): $ItemStat$Properties
public "displayAsInt"(): $ItemStat$Properties
public "displayFormat"(arg0: $ItemStat$DisplayFormat$Type): $ItemStat$Properties
/**
 * 
 * @deprecated
 */
public "missingRodFunction"(arg0: $Function$Type<(float), (float)>): $ItemStat$Properties
public "defaultOp"(arg0: $StatInstance$Operation$Type): $ItemStat$Properties
public "baseValue"(arg0: float): $ItemStat$Properties
public "hidden"(): $ItemStat$Properties
/**
 * 
 * @deprecated
 */
public "displayAsMultiplier"(): $ItemStat$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStat$Properties$Type = ($ItemStat$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStat$Properties_ = $ItemStat$Properties$Type;
}}
declare module "packages/net/silentchaos512/gear/item/blueprint/$PartBlueprintItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractBlueprintItem, $AbstractBlueprintItem$Type} from "packages/net/silentchaos512/gear/item/blueprint/$AbstractBlueprintItem"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PartBlueprintItem extends $AbstractBlueprintItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $PartType$Type, arg1: boolean, arg2: $Item$Properties$Type)

public "getPartType"(arg0: $ItemStack$Type): $PartType
public "getPartType"(): $PartType
public "getGearType"(arg0: $ItemStack$Type): $GearType
public "getItemTag"(): $TagKey<($Item)>
get "partType"(): $PartType
get "itemTag"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartBlueprintItem$Type = ($PartBlueprintItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartBlueprintItem_ = $PartBlueprintItem$Type;
}}
declare module "packages/net/silentchaos512/gems/item/$GemsFoodItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FoodProperties$Builder, $FoodProperties$Builder$Type} from "packages/net/minecraft/world/food/$FoodProperties$Builder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemsFoodItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $FoodProperties$Builder$Type, arg1: $ItemLike$Type, arg2: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemsFoodItem$Type = ($GemsFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemsFoodItem_ = $GemsFoodItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/part/$PartType" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$PartTextures, $PartTextures$Type} from "packages/net/silentchaos512/gear/client/model/$PartTextures"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PartType$Builder, $PartType$Builder$Type} from "packages/net/silentchaos512/gear/api/part/$PartType$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DataResource, $DataResource$Type} from "packages/net/silentchaos512/gear/api/util/$DataResource"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"

export class $PartType {
static readonly "NONE": $PartType
static readonly "ADORNMENT": $PartType
static readonly "BINDING": $PartType
static readonly "COATING": $PartType
static readonly "CORD": $PartType
static readonly "FLETCHING": $PartType
static readonly "GRIP": $PartType
static readonly "LINING": $PartType
static readonly "MAIN": $PartType
static readonly "MISC_UPGRADE": $PartType
static readonly "ROD": $PartType
static readonly "TIP": $PartType


public static "getNonNull"(arg0: $ResourceLocation$Type): $PartType
public "isRemovable"(): boolean
public "isUpgrade"(): boolean
public "getMaxPerItem"(arg0: $GearType$Type): integer
public "getCompoundPartId"(arg0: $GearType$Type): $ResourceLocation
public "getCompoundPartItem"(arg0: $GearType$Type): $Optional<(any)>
public "makeCompoundPart"(arg0: $GearType$Type, arg1: $DataResource$Type<($IMaterial$Type)>): $Optional<(any)>
public "makeCompoundPart"(arg0: $GearType$Type, arg1: $List$Type<($IMaterialInstance$Type)>): $Optional<(any)>
public "getDefaultTexture"(): $PartTextures
public "getName"(): $ResourceLocation
public static "get"(arg0: $ResourceLocation$Type): $PartType
public "toString"(): string
public static "create"(arg0: $PartType$Builder$Type): $PartType
public "isInvalid"(): boolean
public "getDisplayName"(arg0: integer): $MutableComponent
public static "fromJson"(arg0: $JsonObject$Type, arg1: string): $PartType
public "getShortName"(): string
public static "getValues"(): $Collection<($PartType)>
get "removable"(): boolean
get "upgrade"(): boolean
get "defaultTexture"(): $PartTextures
get "name"(): $ResourceLocation
get "invalid"(): boolean
get "shortName"(): string
get "values"(): $Collection<($PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartType$Type = ($PartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartType_ = $PartType$Type;
}}
declare module "packages/net/silentchaos512/gear/client/model/$PartTextures" {
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MaterialLayer, $MaterialLayer$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialLayer"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PartTextures extends $Enum<($PartTextures)> {
static readonly "HIGHLIGHT": $PartTextures
static readonly "SPLOTCHES": $PartTextures
static readonly "MAIN_GENERIC_LC": $PartTextures
static readonly "MAIN_GENERIC_HC": $PartTextures
static readonly "ROD_GENERIC_LC": $PartTextures
static readonly "ROD_GENERIC_HC": $PartTextures
static readonly "TIP_SHARP": $PartTextures
static readonly "TIP_SMOOTH": $PartTextures
static readonly "BINDING_GENERIC": $PartTextures
static readonly "GRIP_WOOL": $PartTextures
static readonly "LINING_CLOTH": $PartTextures
static readonly "LINING_SLIME": $PartTextures
static readonly "LINING_SLIME_HIGHLIGHT": $PartTextures
static readonly "BOWSTRING_STRING": $PartTextures
static readonly "ARROW": $PartTextures
static readonly "CHARGED_ARROW": $PartTextures
static readonly "CHARGED_FIREWORK": $PartTextures
static readonly "FLETCHING_GENERIC": $PartTextures
static readonly "ADORNMENT_GENERIC": $PartTextures
static readonly "ADORNMENT_HIGHLIGHT": $PartTextures
static readonly "CLOTH": $PartTextures
static readonly "DUST": $PartTextures
static readonly "METAL": $PartTextures
static readonly "WOOD": $PartTextures


public "getPartType"(): $PartType
public "isAnimated"(): boolean
public static "byTextureId"(arg0: $ResourceLocation$Type): $PartTextures
public static "values"(): ($PartTextures)[]
public static "valueOf"(arg0: string): $PartTextures
public "getLayer"(arg0: integer): $MaterialLayer
public "getTexture"(): $ResourceLocation
public static "getTextures"(arg0: $GearType$Type): $List<($PartTextures)>
get "partType"(): $PartType
get "animated"(): boolean
get "texture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartTextures$Type = (("main_generic_hc") | ("rod_generic_hc") | ("arrow") | ("binding_generic") | ("lining_cloth") | ("metal") | ("grip_wool") | ("fletching_generic") | ("main_generic_lc") | ("rod_generic_lc") | ("tip_smooth") | ("lining_slime_highlight") | ("charged_arrow") | ("highlight") | ("adornment_highlight") | ("splotches") | ("wood") | ("charged_firework") | ("adornment_generic") | ("dust") | ("tip_sharp") | ("lining_slime") | ("bowstring_string") | ("cloth")) | ($PartTextures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartTextures_ = $PartTextures$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$PottedGlowroseBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GlowroseBlock, $GlowroseBlock$Type} from "packages/net/silentchaos512/gems/block/$GlowroseBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FlowerPotBlock, $FlowerPotBlock$Type} from "packages/net/minecraft/world/level/block/$FlowerPotBlock"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PottedGlowroseBlock extends $FlowerPotBlock {
static readonly "POTTED_BY_CONTENT": $Map<($Block), ($Block)>
static readonly "AABB_SIZE": float
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

constructor(arg0: $Gems$Type, arg1: $Supplier$Type<($GlowroseBlock$Type)>, arg2: $BlockBehaviour$Properties$Type)

public "getName"(): $MutableComponent
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PottedGlowroseBlock$Type = ($PottedGlowroseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PottedGlowroseBlock_ = $PottedGlowroseBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/block/compounder/$CompounderTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IDroppableInventory, $IDroppableInventory$Type} from "packages/net/silentchaos512/gear/block/$IDroppableInventory"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$CompounderInfo, $CompounderInfo$Type} from "packages/net/silentchaos512/gear/block/compounder/$CompounderInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$CompoundingRecipe, $CompoundingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/compounder/$CompoundingRecipe"
import {$LockableSidedInventoryTileEntity, $LockableSidedInventoryTileEntity$Type} from "packages/net/silentchaos512/lib/tile/$LockableSidedInventoryTileEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CompounderTileEntity<R extends $CompoundingRecipe> extends $LockableSidedInventoryTileEntity implements $IDroppableInventory {
static readonly "STANDARD_INPUT_SLOTS": integer
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $CompounderInfo$Type<(R)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getInputSlotCount"(): integer
public "getRecipe"(): R
public "getItemsToDrop"(): $NonNullList<($ItemStack)>
public "encodeExtraData"(arg0: $FriendlyByteBuf$Type): void
public "getOutputSlotIndex"(): integer
public "getOutputHintSlotIndex"(): integer
public "getHintStack"(): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public static "tick"<R extends $CompoundingRecipe>(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CompounderTileEntity$Type<(R)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "inputSlotCount"(): integer
get "recipe"(): R
get "itemsToDrop"(): $NonNullList<($ItemStack)>
get "outputSlotIndex"(): integer
get "outputHintSlotIndex"(): integer
get "hintStack"(): $ItemStack
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompounderTileEntity$Type<R> = ($CompounderTileEntity<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompounderTileEntity_<R> = $CompounderTileEntity$Type<(R)>;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/$ConversionRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ExtendedShapelessRecipe, $ExtendedShapelessRecipe$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe"

export class $ConversionRecipe extends $ExtendedShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>


public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConversionRecipe$Type = ($ConversionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConversionRecipe_ = $ConversionRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/block/salvager/$SalvagerTileEntity" {
import {$LockableSidedInventoryTileEntity, $LockableSidedInventoryTileEntity$Type} from "packages/net/silentchaos512/lib/tile/$LockableSidedInventoryTileEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SalvagerTileEntity extends $LockableSidedInventoryTileEntity {
static readonly "INVENTORY_SIZE": integer
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getUpdateTag"(): $CompoundTag
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $SalvagerTileEntity$Type): void
public "getContainerSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "updateTag"(): $CompoundTag
get "containerSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvagerTileEntity$Type = ($SalvagerTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagerTileEntity_ = $SalvagerTileEntity$Type;
}}
declare module "packages/net/silentchaos512/gear/item/blueprint/$AbstractBlueprintItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$IBlueprint, $IBlueprint$Type} from "packages/net/silentchaos512/gear/item/blueprint/$IBlueprint"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractBlueprintItem extends $Item implements $IBlueprint {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public "isSingleUse"(): boolean
public "hasStandardModel"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getItemTag"(): $TagKey<($Item)>
public "getPartType"(arg0: $ItemStack$Type): $PartType
public "getGearType"(arg0: $ItemStack$Type): $GearType
get "singleUse"(): boolean
get "itemTag"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlueprintItem$Type = ($AbstractBlueprintItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlueprintItem_ = $AbstractBlueprintItem$Type;
}}
declare module "packages/net/silentchaos512/gear/gear/material/modifier/$ChargedMaterialModifier" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$IMaterialModifierType, $IMaterialModifierType$Type} from "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifierType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChargedProperties, $ChargedProperties$Type} from "packages/net/silentchaos512/gear/api/stats/$ChargedProperties"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$IMaterialModifier, $IMaterialModifier$Type} from "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $ChargedMaterialModifier implements $IMaterialModifier {


public "getChargedProperties"(arg0: $IMaterialInstance$Type): $ChargedProperties
public "appendTooltip"(arg0: $List$Type<($Component$Type)>): void
public "modifyMaterialName"(arg0: $MutableComponent$Type): $MutableComponent
public "modifyStats"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $List$Type<($StatInstance$Type)>): $List<($StatInstance)>
public "getType"(): $IMaterialModifierType<(any)>
get "type"(): $IMaterialModifierType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedMaterialModifier$Type = ($ChargedMaterialModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedMaterialModifier_ = $ChargedMaterialModifier$Type;
}}
declare module "packages/net/silentchaos512/gems/item/$GemItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGem, $IGem$Type} from "packages/net/silentchaos512/gems/util/$IGem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemItem extends $Item implements $IGem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Gems$Type, arg1: string, arg2: $Item$Properties$Type)

public "getGem"(): $Gems
public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$Type): $Component
public "getRarity"(arg0: $ItemStack$Type): $Rarity
get "gem"(): $Gems
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemItem$Type = ($GemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemItem_ = $GemItem$Type;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedSingleItemRecipe$IRecipeFactory" {
import {$SingleItemRecipe, $SingleItemRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SingleItemRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ExtendedSingleItemRecipe$IRecipeFactory<T extends $SingleItemRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): T

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): T
}

export namespace $ExtendedSingleItemRecipe$IRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSingleItemRecipe$IRecipeFactory$Type<T> = ($ExtendedSingleItemRecipe$IRecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSingleItemRecipe$IRecipeFactory_<T> = $ExtendedSingleItemRecipe$IRecipeFactory$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/material/$IMaterial" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IMaterialSerializer, $IMaterialSerializer$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialSerializer"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$SyncMaterialCraftingItemsPacket, $SyncMaterialCraftingItemsPacket$Type} from "packages/net/silentchaos512/gear/network/$SyncMaterialCraftingItemsPacket"
import {$IGearComponent, $IGearComponent$Type} from "packages/net/silentchaos512/gear/api/util/$IGearComponent"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$IMaterialDisplay, $IMaterialDisplay$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialDisplay"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IMaterialCategory, $IMaterialCategory$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialCategory"

export interface $IMaterial extends $IGearComponent<($IMaterialInstance)> {

/**
 * 
 * @deprecated
 */
 "getTier"(arg0: $PartType$Type): integer
 "getTier"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type): integer
 "getParentOptional"(): $Optional<($IMaterial)>
 "canSalvage"(): boolean
 "isVisible"(arg0: $PartType$Type): boolean
 "getCategories"(arg0: $IMaterialInstance$Type): $Collection<($IMaterialCategory)>
/**
 * 
 * @deprecated
 */
 "getCategories"(): $Collection<($IMaterialCategory)>
 "getNameColor"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $GearType$Type): integer
 "getHarvestTier"(arg0: $IMaterialInstance$Type): $Tier
 "getStatKeys"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type): $Collection<($StatGearKey)>
 "getPartTypes"(arg0: $IMaterialInstance$Type): $Set<($PartType)>
 "getModelKey"(arg0: $IMaterialInstance$Type): string
 "getDisplayProperties"(arg0: $IMaterialInstance$Type): $IMaterialDisplay
 "allowedInPart"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type): boolean
 "onSalvage"(arg0: $IMaterialInstance$Type): $IMaterialInstance
 "getDisplayNamePrefix"(arg0: $ItemStack$Type, arg1: $PartType$Type): $Component
 "updateIngredient"(arg0: $SyncMaterialCraftingItemsPacket$Type): void
 "getPartSubstitute"(arg0: $PartType$Type): $Optional<($Ingredient)>
 "getDisplayItem"(arg0: $PartType$Type, arg1: integer): $ItemStack
 "hasPartSubstitutes"(): boolean
 "getDisplayOverride"(arg0: $IMaterialInstance$Type): $IMaterialDisplay
 "retainData"(arg0: $IMaterial$Type): void
 "getSerializer"(): $IMaterialSerializer<(any)>
 "getMaterials"(arg0: $IMaterialInstance$Type): $MaterialList
 "getParent"(): $IMaterial
 "getId"(): $ResourceLocation
 "isSimple"(): boolean
 "getPackName"(): string
 "isCraftingAllowed"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $GearType$Type, arg3: $Container$Type): boolean
 "isCraftingAllowed"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $GearType$Type): boolean
 "getIngredient"(): $Ingredient
 "getDisplayName"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $ItemStack$Type): $Component
 "getStatUnclamped"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStat"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStatModifiers"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type): $Collection<($StatInstance)>
 "getStatModifiers"(arg0: $IMaterialInstance$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: $IMaterialInstance$Type, arg1: $PartGearKey$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
}

export namespace $IMaterial {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterial$Type = ($IMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterial_ = $IMaterial$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearDaggerItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GearSwordItem, $GearSwordItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearSwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearDaggerItem extends $GearSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearDaggerItem$Type = ($GearDaggerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearDaggerItem_ = $GearDaggerItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearPaxelItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GearPickaxeItem, $GearPickaxeItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearPickaxeItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearPaxelItem extends $GearPickaxeItem {
static readonly "ACTIONS_WITH_SPOON": $Set<($ToolAction)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearPaxelItem$Type = ($GearPaxelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearPaxelItem_ = $GearPaxelItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/item/$ICoreRangedWeapon" {
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"

export interface $ICoreRangedWeapon extends $ICoreTool {

 "getAnimationFrames"(): integer
 "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getRequiredParts"(): $Collection<($PartType)>
 "hasTexturesFor"(arg0: $PartType$Type): boolean
 "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
 "getDrawDelay"(arg0: $ItemStack$Type): float
 "getBaseDrawDelay"(arg0: $ItemStack$Type): float
 "getItemColors"(): $ItemColor
 "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
 "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
 "isValidSlot"(arg0: string): boolean
 "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
 "getGearType"(): $GearType
 "requiresPartOfType"(arg0: $PartType$Type): boolean
 "getDurabilityStat"(): $ItemStat
 "getRepairModifier"(arg0: $ItemStack$Type): float
 "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
 "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
 "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
 "getRenderParts"(): $Collection<($PartType)>
 "construct"(arg0: $Collection$Type<(any)>): $ItemStack
 "asItem"(): $Item
 "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer

(): integer
}

export namespace $ICoreRangedWeapon {
const RELEVANT_STATS: $Set<($ItemStat)>
const EXCLUDED_STATS: $Set<($ItemStat)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICoreRangedWeapon$Type = ($ICoreRangedWeapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICoreRangedWeapon_ = $ICoreRangedWeapon$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/compounder/$CompoundingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CompounderInfo, $CompounderInfo$Type} from "packages/net/silentchaos512/gear/block/compounder/$CompounderInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CompounderTileEntity, $CompounderTileEntity$Type} from "packages/net/silentchaos512/gear/block/compounder/$CompounderTileEntity"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CompoundingRecipe implements $Recipe<($CompounderTileEntity<(any)>)> {

constructor(arg0: $ResourceLocation$Type)

public static "makeExample"(arg0: $CompounderInfo$Type<(any)>, arg1: integer, arg2: $CompoundingRecipe$Type): $CompoundingRecipe
public "assemble"(arg0: $CompounderTileEntity$Type<(any)>, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "isSpecial"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(arg0: $CompounderTileEntity$Type<(any)>, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $CompounderTileEntity$Type<(any)>): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getMod"(): string
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getType"(): $ResourceLocation
get "id"(): $ResourceLocation
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "mod"(): string
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundingRecipe$Type = ($CompoundingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundingRecipe_ = $CompoundingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearFishingRodItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FishingRodItem, $FishingRodItem$Type} from "packages/net/minecraft/world/item/$FishingRodItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearFishingRodItem extends $FishingRodItem implements $ICoreTool {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getGearType"(): $GearType
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getRenderParts"(): $Collection<($PartType)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getItemColors"(): $ItemColor
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "isValidSlot"(arg0: string): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "requiredParts"(): $Collection<($PartType)>
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearFishingRodItem$Type = ($GearFishingRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearFishingRodItem_ = $GearFishingRodItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearAxeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearAxeItem extends $AxeItem implements $ICoreTool {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getGearType"(): $GearType
public "getTier"(): $Tier
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "tier"(): $Tier
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearAxeItem$Type = ($GearAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearAxeItem_ = $GearAxeItem$Type;
}}
declare module "packages/net/silentchaos512/gems/item/container/$GemBagItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GemContainerItem, $GemContainerItem$Type} from "packages/net/silentchaos512/gems/item/container/$GemContainerItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemBagItem extends $GemContainerItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getInventorySize"(arg0: $ItemStack$Type): integer
public "canStore"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemBagItem$Type = ($GemBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemBagItem_ = $GemBagItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$IColoredMaterialItem" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IColoredMaterialItem {

 "getPrimarySubMaterial"(arg0: $ItemStack$Type): $IMaterialInstance
 "getColor"(arg0: $ItemStack$Type, arg1: integer): integer

(arg0: $ItemStack$Type): $IMaterialInstance
}

export namespace $IColoredMaterialItem {
const NBT_MATERIALS: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColoredMaterialItem$Type = ($IColoredMaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColoredMaterialItem_ = $IColoredMaterialItem$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$ModContainerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ModContainerBlock<T extends $BlockEntity> extends $BaseEntityBlock {
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

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<(T)>, arg1: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModContainerBlock$Type<T> = ($ModContainerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModContainerBlock_<T> = $ModContainerBlock$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/part/$IPartData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$IGearComponentInstance, $IGearComponentInstance$Type} from "packages/net/silentchaos512/gear/api/util/$IGearComponentInstance"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$DataResource, $DataResource$Type} from "packages/net/silentchaos512/gear/api/util/$DataResource"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"
import {$IGearPart, $IGearPart$Type} from "packages/net/silentchaos512/gear/api/part/$IGearPart"

export interface $IPartData extends $IGearComponentInstance<($IGearPart)> {

 "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): float
 "getTier"(): integer
 "getNameColor"(arg0: $PartType$Type, arg1: $GearType$Type): integer
 "getHarvestTier"(): $Tier
 "getStatModifiers"(arg0: $StatGearKey$Type, arg1: $ItemStack$Type): $Collection<($StatInstance)>
 "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: $PartType$Type, arg1: $GearType$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
 "getTraits"(arg0: $ItemStack$Type): $Collection<($TraitInstance)>
 "getTraits"(): $Collection<($TraitInstance)>
 "getModelKey"(): string
 "getGearType"(): $GearType
 "onAddToGear"(arg0: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "getPartId"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getPart"(): $IGearPart
/**
 * 
 * @deprecated
 */
 "getCraftingItem"(): $ItemStack
 "getMaterials"(): $MaterialList
 "write"(arg0: $CompoundTag$Type): $CompoundTag
 "getType"(): $PartType
 "serialize"(): $JsonObject
 "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type): float
 "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: $PartType$Type): $Collection<($TraitInstance)>
 "getTraits"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type): $Collection<($TraitInstance)>
 "containsMaterial"(arg0: $DataResource$Type<($IMaterial$Type)>): boolean
 "get"(): $IGearPart
 "getId"(): $ResourceLocation
 "getDisplayName"(arg0: $PartType$Type): $Component
 "getDisplayName"(arg0: $PartType$Type, arg1: $ItemStack$Type): $Component
 "getItem"(): $ItemStack
}

export namespace $IPartData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartData$Type = ($IPartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartData_ = $IPartData$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/$IMaterialLayerList" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MaterialLayer, $MaterialLayer$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialLayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $IMaterialLayerList extends $Iterable<($MaterialLayer)> {

 "getLayers"(): $List<($MaterialLayer)>
 "getFirstLayer"(): $MaterialLayer
 "iterator"(): $Iterator<($MaterialLayer)>
 "spliterator"(): $Spliterator<($MaterialLayer)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IMaterialLayerList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialLayerList$Type = ($IMaterialLayerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialLayerList_ = $IMaterialLayerList$Type;
}}
declare module "packages/net/silentchaos512/gems/item/$SoulGemItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Soul, $Soul$Type} from "packages/net/silentchaos512/gems/soul/$Soul"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulGemItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "setSoul"(arg0: $ItemStack$Type, arg1: $Soul$Type): void
public static "setSoulValue"(arg0: $ItemStack$Type, arg1: integer): void
public static "getSoul"(arg0: $ItemStack$Type): $Soul
public static "getSoulValue"(arg0: $ItemStack$Type): integer
public static "addSoulValue"(arg0: $ItemStack$Type, arg1: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public static "getStack"(arg0: $ResourceLocation$Type): $ItemStack
public static "getStack"(arg0: $Soul$Type, arg1: integer): $ItemStack
public static "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulGemItem$Type = ($SoulGemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulGemItem_ = $SoulGemItem$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$NetherwoodSapling" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SaplingBlock, $SaplingBlock$Type} from "packages/net/minecraft/world/level/block/$SaplingBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $NetherwoodSapling extends $SaplingBlock {
static readonly "STAGE": $IntegerProperty
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherwoodSapling$Type = ($NetherwoodSapling);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetherwoodSapling_ = $NetherwoodSapling$Type;
}}
declare module "packages/net/silentchaos512/gear/util/$IAoeTool" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IAoeTool {

 "rayTraceBlocks"(arg0: $Level$Type, arg1: $Player$Type): $HitResult
 "getAoeRadius"(arg0: $ItemStack$Type): integer
 "getExtraBlocks"(arg0: $Level$Type, arg1: $BlockHitResult$Type, arg2: $Player$Type, arg3: $ItemStack$Type): $List<($BlockPos)>
 "isEffectiveOnBlock"(arg0: $ItemStack$Type, arg1: $BlockState$Type, arg2: $Player$Type): boolean
 "attemptAddExtraBlock"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $List$Type<($BlockPos$Type)>): void

(arg0: $Level$Type, arg1: $Player$Type): $HitResult
}

export namespace $IAoeTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAoeTool$Type = ($IAoeTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAoeTool_ = $IAoeTool$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$FragmentItem" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FragmentItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getMaterial"(arg0: $ItemStack$Type): $IMaterialInstance
public static "getModelKey"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "create"(arg0: $IMaterialInstance$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FragmentItem$Type = ($FragmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FragmentItem_ = $FragmentItem$Type;
}}
declare module "packages/net/silentchaos512/gear/gear/part/$RepairContext$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RepairContext$Type extends $Enum<($RepairContext$Type)> {
static readonly "QUICK": $RepairContext$Type
static readonly "ANVIL": $RepairContext$Type


public "getBonusEfficiency"(): float
public static "values"(): ($RepairContext$Type)[]
public static "valueOf"(arg0: string): $RepairContext$Type
get "bonusEfficiency"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairContext$Type$Type = (("quick") | ("anvil")) | ($RepairContext$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairContext$Type_ = $RepairContext$Type$Type;
}}
declare module "packages/net/silentchaos512/gear/block/grader/$GraderTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LockableSidedInventoryTileEntity, $LockableSidedInventoryTileEntity$Type} from "packages/net/silentchaos512/lib/tile/$LockableSidedInventoryTileEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GraderTileEntity extends $LockableSidedInventoryTileEntity {
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public static "getCatalystTier"(arg0: $ItemStack$Type): integer
public "isEmpty"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $GraderTileEntity$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "empty"(): boolean
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraderTileEntity$Type = ($GraderTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraderTileEntity_ = $GraderTileEntity$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearCrossbowItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ICoreRangedWeapon, $ICoreRangedWeapon$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreRangedWeapon"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$CrossbowItem, $CrossbowItem$Type} from "packages/net/minecraft/world/item/$CrossbowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearCrossbowItem extends $CrossbowItem implements $ICoreRangedWeapon {
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getGearType"(): $GearType
public "getAnimationFrames"(): integer
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public static "fireProjectiles"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float): void
public static "getChargeTime"(arg0: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "useOnRelease"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getDrawDelay"(arg0: $ItemStack$Type): float
public "getBaseDrawDelay"(arg0: $ItemStack$Type): float
public "getItemColors"(): $ItemColor
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "isValidSlot"(arg0: string): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "animationFrames"(): integer
get "requiredParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearCrossbowItem$Type = ($GearCrossbowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearCrossbowItem_ = $GearCrossbowItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$TraitActionContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TraitActionContext {

constructor(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type)

public "getTraitLevel"(): integer
public "getGear"(): $ItemStack
public "getPlayer"(): $Player
get "traitLevel"(): integer
get "gear"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraitActionContext$Type = ($TraitActionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraitActionContext_ = $TraitActionContext$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$GemLampBlock$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GemLampBlock$State extends $Enum<($GemLampBlock$State)> {
static readonly "OFF": $GemLampBlock$State
static readonly "ON": $GemLampBlock$State
static readonly "INVERTED_ON": $GemLampBlock$State
static readonly "INVERTED_OFF": $GemLampBlock$State


public "withPower"(arg0: boolean): $GemLampBlock$State
public "hasItem"(): boolean
public static "values"(): ($GemLampBlock$State)[]
public static "valueOf"(arg0: string): $GemLampBlock$State
public "inverted"(): boolean
public "lit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemLampBlock$State$Type = (("inverted_on") | ("off") | ("inverted_off") | ("on")) | ($GemLampBlock$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemLampBlock$State_ = $GemLampBlock$State$Type;
}}
declare module "packages/net/silentchaos512/gear/api/part/$IPartSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGearPart, $IGearPart$Type} from "packages/net/silentchaos512/gear/api/part/$IGearPart"

export interface $IPartSerializer<T extends $IGearPart> {

 "getName"(): $ResourceLocation
 "write"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "read"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
 "read"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
}

export namespace $IPartSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartSerializer$Type<T> = ($IPartSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartSerializer_<T> = $IPartSerializer$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/network/$SyncMaterialCraftingItemsPacket" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SyncMaterialCraftingItemsPacket {

constructor()
constructor(arg0: $Collection$Type<($IMaterial$Type)>)

public "getPartSubstitutes"(arg0: $ResourceLocation$Type): $Map<($PartType), ($Ingredient)>
public "getIngredient"(arg0: $ResourceLocation$Type): $Optional<($Ingredient)>
public static "decode"(arg0: $FriendlyByteBuf$Type): $SyncMaterialCraftingItemsPacket
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "handle"(arg0: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "isValid"(): boolean
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncMaterialCraftingItemsPacket$Type = ($SyncMaterialCraftingItemsPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncMaterialCraftingItemsPacket_ = $SyncMaterialCraftingItemsPacket$Type;
}}
declare module "packages/net/silentchaos512/gear/network/$KeyPressOnItemPacket$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $KeyPressOnItemPacket$Type extends $Enum<($KeyPressOnItemPacket$Type)> {
static readonly "CYCLE_BACK": $KeyPressOnItemPacket$Type
static readonly "CYCLE_NEXT": $KeyPressOnItemPacket$Type
static readonly "OPEN_ITEM": $KeyPressOnItemPacket$Type
readonly "direction": integer


public static "values"(): ($KeyPressOnItemPacket$Type)[]
public static "valueOf"(arg0: string): $KeyPressOnItemPacket$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPressOnItemPacket$Type$Type = (("cycle_next") | ("cycle_back") | ("open_item")) | ($KeyPressOnItemPacket$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPressOnItemPacket$Type_ = $KeyPressOnItemPacket$Type$Type;
}}
declare module "packages/net/silentchaos512/gems/soul/$SoulElement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export class $SoulElement extends $Enum<($SoulElement)> {
static readonly "NONE": $SoulElement
static readonly "FORK": $SoulElement
static readonly "QUIRK": $SoulElement
static readonly "EJECT": $SoulElement
static readonly "RIBBON": $SoulElement
static readonly "SNACK": $SoulElement
static readonly "GLOOM": $SoulElement
static readonly "PEPPER": $SoulElement
static readonly "JOY": $SoulElement
static readonly "PLUG": $SoulElement
static readonly "STUN": $SoulElement
static readonly "KING": $SoulElement
static readonly "FLEET": $SoulElement
readonly "weight": integer
readonly "color": integer


public "getStatModifier"(arg0: string): float
public static "selectRandom"(arg0: $Random$Type): $SoulElement
public static "selectRandom"(arg0: $Random$Type, arg1: float): $SoulElement
public static "values"(): ($SoulElement)[]
public static "valueOf"(arg0: string): $SoulElement
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $SoulElement
public "getDisplayName"(): $Component
public static "fromString"(arg0: string): $SoulElement
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulElement$Type = (("pepper") | ("fleet") | ("king") | ("snack") | ("ribbon") | ("none") | ("stun") | ("quirk") | ("eject") | ("fork") | ("joy") | ("gloom") | ("plug")) | ($SoulElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulElement_ = $SoulElement$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$IContainerItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IContainerItem {

 "saveInventory"(arg0: $ItemStack$Type, arg1: $IItemHandler$Type): void
 "getInventoryRows"(arg0: $ItemStack$Type): integer
 "getInventorySize"(arg0: $ItemStack$Type): integer
 "getInventory"(arg0: $ItemStack$Type): $IItemHandler
 "canStore"(arg0: $ItemStack$Type): boolean
}

export namespace $IContainerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerItem$Type = ($IContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerItem_ = $IContainerItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$CompoundPartItem" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MaterialInstance, $MaterialInstance$Type} from "packages/net/silentchaos512/gear/gear/material/$MaterialInstance"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompoundPartItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $PartType$Type, arg1: $Item$Properties$Type)

public static "getModelKey"(arg0: $ItemStack$Type): string
public "getPartType"(): $PartType
public "getGearType"(): $GearType
public "getCraftedCount"(arg0: $ItemStack$Type): integer
public static "getPrimaryMaterial"(arg0: $ItemStack$Type): $MaterialInstance
public "getColorWeight"(arg0: integer, arg1: integer): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "getMaterials"(arg0: $ItemStack$Type): $MaterialList
public "create"(arg0: $Collection$Type<(any)>): $ItemStack
public "create"(arg0: $IMaterialInstance$Type): $ItemStack
public "create"(arg0: $MaterialList$Type, arg1: integer): $ItemStack
public "create"(arg0: $IMaterialInstance$Type, arg1: integer): $ItemStack
public "create"(arg0: $MaterialList$Type): $ItemStack
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
get "partType"(): $PartType
get "gearType"(): $GearType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundPartItem$Type = ($CompoundPartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundPartItem_ = $CompoundPartItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearProspectorHammerItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GearPickaxeItem, $GearPickaxeItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearPickaxeItem"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearProspectorHammerItem extends $GearPickaxeItem {
static readonly "ACTIONS_WITH_SPOON": $Set<($ToolAction)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getTargetedBlocks"(arg0: $UseOnContext$Type, arg1: integer, arg2: $Direction$Type): $Set<($BlockState)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearProspectorHammerItem$Type = ($GearProspectorHammerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearProspectorHammerItem_ = $GearProspectorHammerItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearDiggerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * 
 * @deprecated
 */
export class $GearDiggerItem extends $DiggerItem implements $ICoreTool {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type, arg1: $TagKey$Type<($Block$Type)>, arg2: $Item$Properties$Type)

public "getGearType"(): $GearType
public "getTier"(): $Tier
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "tier"(): $Tier
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearDiggerItem$Type = ($GearDiggerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearDiggerItem_ = $GearDiggerItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$ITrait" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ITraitSerializer, $ITraitSerializer$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitSerializer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ITraitCondition, $ITraitCondition$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitCondition"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$TraitActionContext, $TraitActionContext$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitActionContext"

export interface $ITrait {

 "onUpdate"(arg0: $TraitActionContext$Type, arg1: boolean): void
/**
 * 
 * @deprecated
 */
 "addInformation"(arg0: integer, arg1: $List$Type<($Component$Type)>): void
 "addInformation"(arg0: integer, arg1: $List$Type<($Component$Type)>, arg2: $TooltipFlag$Type): void
 "addInformation"(arg0: integer, arg1: $List$Type<($Component$Type)>, arg2: $TooltipFlag$Type, arg3: $Function$Type<($Component$Type), ($Component$Type)>): void
 "onItemSwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "onDurabilityDamage"(arg0: $TraitActionContext$Type, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "onGetAttributeModifiers"(arg0: $TraitActionContext$Type, arg1: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg2: $EquipmentSlot$Type): void
 "onGetAttributeModifiers"(arg0: $TraitActionContext$Type, arg1: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg2: string): void
 "onGearCrafted"(arg0: $TraitActionContext$Type): void
 "addLootDrops"(arg0: $TraitActionContext$Type, arg1: $ItemStack$Type): $ItemStack
 "showInTooltip"(arg0: $TooltipFlag$Type): boolean
 "getConditions"(): $Collection<($ITraitCondition)>
 "willCancelWith"(arg0: $ITrait$Type): boolean
 "getCancelsWithSet"(): $Collection<(string)>
 "retainData"(arg0: $ITrait$Type): void
 "getExtraWikiLines"(): $Collection<(string)>
 "getCanceledLevel"(arg0: integer, arg1: $ITrait$Type, arg2: integer): integer
 "onRecalculatePost"(arg0: $TraitActionContext$Type): void
 "onGetStat"(arg0: $TraitActionContext$Type, arg1: $ItemStat$Type, arg2: float, arg3: float): float
 "onRecalculatePre"(arg0: $TraitActionContext$Type): void
 "getSerializer"(): $ITraitSerializer<(any)>
 "onItemUse"(arg0: $UseOnContext$Type, arg1: integer): $InteractionResult
 "onAttackEntity"(arg0: $TraitActionContext$Type, arg1: $LivingEntity$Type, arg2: float): float
 "isHidden"(): boolean
 "write"(arg0: integer): $CompoundTag
 "getId"(): $ResourceLocation
 "getDisplayName"(arg0: integer): $MutableComponent
 "getMaxLevel"(): integer
 "getDescription"(arg0: integer): $MutableComponent
}

export namespace $ITrait {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrait$Type = ($ITrait);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrait_ = $ITrait$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$OreBlockSG" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DropExperienceBlock, $DropExperienceBlock$Type} from "packages/net/minecraft/world/level/block/$DropExperienceBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $OreBlockSG extends $DropExperienceBlock {
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

constructor(arg0: $ItemLike$Type, arg1: integer, arg2: $BlockBehaviour$Properties$Type)

public "getDroppedItem"(): $ItemLike
public "getExpRandom"(arg0: $RandomSource$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
get "droppedItem"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreBlockSG$Type = ($OreBlockSG);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreBlockSG_ = $OreBlockSG$Type;
}}
declare module "packages/net/silentchaos512/gear/block/compounder/$CompounderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModContainerBlock, $ModContainerBlock$Type} from "packages/net/silentchaos512/gear/block/$ModContainerBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CompounderInfo, $CompounderInfo$Type} from "packages/net/silentchaos512/gear/block/compounder/$CompounderInfo"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$CompounderTileEntity, $CompounderTileEntity$Type} from "packages/net/silentchaos512/gear/block/compounder/$CompounderTileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMaterialCategory, $IMaterialCategory$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialCategory"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$CompoundingRecipe, $CompoundingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/compounder/$CompoundingRecipe"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $CompounderBlock<R extends $CompoundingRecipe> extends $ModContainerBlock<($CompounderTileEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
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

constructor(arg0: $CompounderInfo$Type<(R)>, arg1: $BlockBehaviour$Properties$Type)

public "getCategories"(): $Collection<($IMaterialCategory)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
get "categories"(): $Collection<($IMaterialCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompounderBlock$Type<R> = ($CompounderBlock<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompounderBlock_<R> = $CompounderBlock$Type<(R)>;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $ExtendedShapelessRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type)

public "getBaseRecipe"(): $ShapelessRecipe
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "baseRecipe"(): $ShapelessRecipe
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedShapelessRecipe$Type = ($ExtendedShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedShapelessRecipe_ = $ExtendedShapelessRecipe$Type;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$DamageItemRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ExtendedShapelessRecipe$Serializer, $ExtendedShapelessRecipe$Serializer$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe$Serializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ExtendedShapelessRecipe, $ExtendedShapelessRecipe$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe"

export class $DamageItemRecipe extends $ExtendedShapelessRecipe {
static readonly "SERIALIZER": $ExtendedShapelessRecipe$Serializer<($DamageItemRecipe)>
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type)

public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageItemRecipe$Type = ($DamageItemRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageItemRecipe_ = $DamageItemRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/api/item/$GearType$Builder" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"

export class $GearType$Builder {


public "animationFrames"(arg0: integer): $GearType$Builder
public "durabilityStat"(arg0: $Supplier$Type<($ItemStat$Type)>): $GearType$Builder
public "armorDurabilityMultiplier"(arg0: float): $GearType$Builder
public "toolActions"(...arg0: ($ToolAction$Type)[]): $GearType$Builder
public "toolActions"(arg0: $Set$Type<($ToolAction$Type)>): $GearType$Builder
public static "of"(arg0: string): $GearType$Builder
public static "of"(arg0: string, arg1: $GearType$Type): $GearType$Builder
public "build"(): $GearType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearType$Builder$Type = ($GearType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearType$Builder_ = $GearType$Builder$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/salvage/$CompoundPartSalvagingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$CompoundPartSalvagingRecipe, $CompoundPartSalvagingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/salvage/$CompoundPartSalvagingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CompoundPartSalvagingRecipe$Serializer implements $RecipeSerializer<($CompoundPartSalvagingRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CompoundPartSalvagingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CompoundPartSalvagingRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CompoundPartSalvagingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CompoundPartSalvagingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundPartSalvagingRecipe$Serializer$Type = ($CompoundPartSalvagingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundPartSalvagingRecipe$Serializer_ = $CompoundPartSalvagingRecipe$Serializer$Type;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedSingleItemRecipe" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$SingleItemRecipe, $SingleItemRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SingleItemRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ExtendedSingleItemRecipe extends $SingleItemRecipe {
readonly "result": $ItemStack

constructor(arg0: $RecipeType$Type<(any)>, arg1: $RecipeSerializer$Type<(any)>, arg2: $ResourceLocation$Type, arg3: string, arg4: $Ingredient$Type, arg5: $ItemStack$Type)

public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSingleItemRecipe$Type = ($ExtendedSingleItemRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSingleItemRecipe_ = $ExtendedSingleItemRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$ModKitItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$KeyPressOnItemPacket$Type, $KeyPressOnItemPacket$Type$Type} from "packages/net/silentchaos512/gear/network/$KeyPressOnItemPacket$Type"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$ICycleItem, $ICycleItem$Type} from "packages/net/silentchaos512/gear/item/$ICycleItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModKitItem extends $Item implements $ICycleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getSelectedType"(arg0: $ItemStack$Type): $PartType
public static "setSelectedType"(arg0: $ItemStack$Type, arg1: $PartType$Type): void
public "onCycleKeyPress"(arg0: $ItemStack$Type, arg1: $KeyPressOnItemPacket$Type$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModKitItem$Type = ($ModKitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModKitItem_ = $ModKitItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/$MaterialLayer" {
import {$PartTextures, $PartTextures$Type} from "packages/net/silentchaos512/gear/client/model/$PartTextures"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MaterialLayer {

constructor(arg0: $PartTextures$Type, arg1: integer)
constructor(arg0: $ResourceLocation$Type, arg1: integer)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: boolean)
constructor(arg0: $ResourceLocation$Type, arg1: $PartType$Type, arg2: integer, arg3: boolean)

public "getPartType"(): $PartType
public "isAnimated"(): boolean
public "withColor"(arg0: integer): $MaterialLayer
public "toString"(): string
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $MaterialLayer
public "serialize"(): $JsonElement
public static "deserialize"(arg0: $PartGearKey$Type, arg1: $JsonElement$Type): $MaterialLayer
public "getTexture"(arg0: string, arg1: integer): $ResourceLocation
public "getTexture"(arg0: $GearType$Type, arg1: integer): $ResourceLocation
public "getColor"(): integer
public "getTextureId"(): $ResourceLocation
get "partType"(): $PartType
get "animated"(): boolean
get "color"(): integer
get "textureId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialLayer$Type = ($MaterialLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialLayer_ = $MaterialLayer$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$GlowroseBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SuspiciousEffectHolder, $SuspiciousEffectHolder$Type} from "packages/net/minecraft/world/level/block/$SuspiciousEffectHolder"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IGemBlock, $IGemBlock$Type} from "packages/net/silentchaos512/gems/block/$IGemBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"
import {$FlowerBlock, $FlowerBlock$Type} from "packages/net/minecraft/world/level/block/$FlowerBlock"

export class $GlowroseBlock extends $FlowerBlock implements $IGemBlock {
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

constructor(arg0: $Gems$Type, arg1: $BlockBehaviour$Properties$Type)

public "getGemBlockName"(): $MutableComponent
public "getGem"(): $Gems
public "getName"(): $MutableComponent
public static "getAllEffectHolders"(): $List<($SuspiciousEffectHolder)>
public static "tryGet"(arg0: $ItemLike$Type): $SuspiciousEffectHolder
get "gemBlockName"(): $MutableComponent
get "gem"(): $Gems
get "name"(): $MutableComponent
get "allEffectHolders"(): $List<($SuspiciousEffectHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlowroseBlock$Type = ($GlowroseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlowroseBlock_ = $GlowroseBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/$ConversionRecipe$Serializer" {
import {$ExtendedShapelessRecipe$Serializer, $ExtendedShapelessRecipe$Serializer$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ConversionRecipe, $ConversionRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/$ConversionRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ConversionRecipe$Serializer extends $ExtendedShapelessRecipe$Serializer<($ConversionRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConversionRecipe$Serializer$Type = ($ConversionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConversionRecipe$Serializer_ = $ConversionRecipe$Serializer$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$GemLampBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GemBlock, $GemBlock$Type} from "packages/net/silentchaos512/gems/block/$GemBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"
import {$GemLampBlock$State, $GemLampBlock$State$Type} from "packages/net/silentchaos512/gems/block/$GemLampBlock$State"

export class $GemLampBlock extends $GemBlock {
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

constructor(arg0: $Gems$Type, arg1: $GemLampBlock$State$Type, arg2: $BlockBehaviour$Properties$Type)

public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemLampBlock$Type = ($GemLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemLampBlock_ = $GemLampBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/api/item/$ICoreArmor" {
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICoreItem, $ICoreItem$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreItem"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"

export interface $ICoreArmor extends $ICoreItem {

 "getDurabilityStat"(): $ItemStat
 "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
 "hasTexturesFor"(arg0: $PartType$Type): boolean
 "getItemColors"(): $ItemColor
 "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
 "getGearType"(): $GearType
 "requiresPartOfType"(arg0: $PartType$Type): boolean
 "getAnimationFrames"(): integer
 "getRequiredParts"(): $Collection<($PartType)>
 "isValidSlot"(arg0: string): boolean
 "getRepairModifier"(arg0: $ItemStack$Type): float
/**
 * 
 * @deprecated
 */
 "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
 "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
 "getRenderParts"(): $Collection<($PartType)>
 "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
 "construct"(arg0: $Collection$Type<(any)>): $ItemStack
 "asItem"(): $Item
 "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer

(): $ItemStat
}

export namespace $ICoreArmor {
const RELEVANT_STATS: $Set<($ItemStat)>
const EXCLUDED_STATS: $Set<($ItemStat)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICoreArmor$Type = ($ICoreArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICoreArmor_ = $ICoreArmor$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifierType" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IMaterialModifier, $IMaterialModifier$Type} from "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifier"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IMaterialModifierType<T extends $IMaterialModifier> {

 "writeToNetwork"(arg0: T, arg1: $FriendlyByteBuf$Type): void
 "readFromNetwork"(arg0: $FriendlyByteBuf$Type): T
 "removeModifier"(arg0: $ItemStack$Type): void
 "write"(arg0: T, arg1: $CompoundTag$Type): void
 "write"(arg0: T, arg1: $ItemStack$Type): void
 "read"(arg0: $CompoundTag$Type): T
 "read"(arg0: $IMaterialInstance$Type): T
 "getId"(): $ResourceLocation
 "serialize"(arg0: T): $JsonObject
 "deserialize"(arg0: $JsonObject$Type): T
}

export namespace $IMaterialModifierType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialModifierType$Type<T> = ($IMaterialModifierType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialModifierType_<T> = $IMaterialModifierType$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/material/$IMaterialDisplay" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$IPartData, $IPartData$Type} from "packages/net/silentchaos512/gear/api/part/$IPartData"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IMaterialLayerList, $IMaterialLayerList$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialLayerList"

export interface $IMaterialDisplay {

 "getMaterialId"(): $ResourceLocation
 "getLayerColor"(arg0: $GearType$Type, arg1: $IPartData$Type, arg2: $IMaterialInstance$Type, arg3: integer): integer
 "getLayerColor"(arg0: $GearType$Type, arg1: $PartType$Type, arg2: $IMaterialInstance$Type, arg3: integer): integer
 "getLayerList"(arg0: $GearType$Type, arg1: $IPartData$Type, arg2: $IMaterialInstance$Type): $IMaterialLayerList
 "getLayerList"(arg0: $GearType$Type, arg1: $PartType$Type, arg2: $IMaterialInstance$Type): $IMaterialLayerList
}

export namespace $IMaterialDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialDisplay$Type = ($IMaterialDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialDisplay_ = $IMaterialDisplay$Type;
}}
declare module "packages/net/silentchaos512/gems/network/$SyncSoulsPacket" {
import {$Soul, $Soul$Type} from "packages/net/silentchaos512/gems/soul/$Soul"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LoginPacket, $LoginPacket$Type} from "packages/net/silentchaos512/gems/network/$LoginPacket"

export class $SyncSoulsPacket extends $LoginPacket {

constructor()
constructor(arg0: $Collection$Type<($Soul$Type)>)

public "getSouls"(): $List<($Soul)>
public "toBytes"(arg0: $FriendlyByteBuf$Type): void
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SyncSoulsPacket
get "souls"(): $List<($Soul)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncSoulsPacket$Type = ($SyncSoulsPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncSoulsPacket_ = $SyncSoulsPacket$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/$IMaterialInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$IGearComponentInstance, $IGearComponentInstance$Type} from "packages/net/silentchaos512/gear/api/util/$IGearComponentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IItemStat, $IItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$IItemStat"
import {$IMaterialDisplay, $IMaterialDisplay$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialDisplay"
import {$IMaterialModifier, $IMaterialModifier$Type} from "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifier"
import {$DataResource, $DataResource$Type} from "packages/net/silentchaos512/gear/api/util/$DataResource"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"
import {$IMaterialCategory, $IMaterialCategory$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialCategory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$MaterialGrade, $MaterialGrade$Type} from "packages/net/silentchaos512/gear/api/part/$MaterialGrade"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"

export interface $IMaterialInstance extends $IGearComponentInstance<($IMaterial)> {

 "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): float
 "getStat"(arg0: $PartType$Type, arg1: $IItemStat$Type): float
 "getTier"(): integer
 "getTier"(arg0: $PartType$Type): integer
/**
 * 
 * @deprecated
 */
 "getMaterial"(): $IMaterial
 "getCategories"(): $Collection<($IMaterialCategory)>
 "getNameColor"(arg0: $PartType$Type, arg1: $GearType$Type): integer
/**
 * 
 * @deprecated
 */
 "getMaterialId"(): $ResourceLocation
 "hasAnyCategory"(arg0: $Collection$Type<($IMaterialCategory$Type)>): boolean
 "getHarvestTier"(): $Tier
 "getStatKeys"(arg0: $PartType$Type): $Collection<($StatGearKey)>
 "getPartTypes"(): $Set<($PartType)>
 "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: $PartType$Type, arg1: $GearType$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
 "getModelKey"(): string
 "getDisplayProperties"(): $IMaterialDisplay
 "getDisplayNameWithModifiers"(arg0: $PartType$Type, arg1: $ItemStack$Type): $MutableComponent
 "allowedInPart"(arg0: $PartType$Type): boolean
 "isCraftingAllowed"(arg0: $PartType$Type, arg1: $GearType$Type): boolean
 "onSalvage"(): $IMaterialInstance
 "getIngredient"(): $Ingredient
 "getMaterials"(): $MaterialList
 "getModifiers"(): $Collection<($IMaterialModifier)>
 "write"(arg0: $CompoundTag$Type): $CompoundTag
 "write"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(): $JsonObject
 "isSimple"(): boolean
/**
 * 
 * @deprecated
 */
 "getGrade"(): $MaterialGrade
 "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type): float
 "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: $PartType$Type): $Collection<($TraitInstance)>
 "getTraits"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type): $Collection<($TraitInstance)>
 "containsMaterial"(arg0: $DataResource$Type<($IMaterial$Type)>): boolean
 "get"(): $IMaterial
 "getId"(): $ResourceLocation
 "getDisplayName"(arg0: $PartType$Type): $Component
 "getDisplayName"(arg0: $PartType$Type, arg1: $ItemStack$Type): $Component
 "getItem"(): $ItemStack
}

export namespace $IMaterialInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialInstance$Type = ($IMaterialInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialInstance_ = $IMaterialInstance$Type;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedSingleItemRecipe$Serializer" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ExtendedSingleItemRecipe$IRecipeFactory, $ExtendedSingleItemRecipe$IRecipeFactory$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedSingleItemRecipe$IRecipeFactory"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ExtendedSingleItemRecipe, $ExtendedSingleItemRecipe$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedSingleItemRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExtendedSingleItemRecipe$Serializer<T extends $ExtendedSingleItemRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $ExtendedSingleItemRecipe$IRecipeFactory$Type<(T)>, arg1: $BiConsumer$Type<($JsonObject$Type), (T)>, arg2: $BiConsumer$Type<($FriendlyByteBuf$Type), (T)>, arg3: $BiConsumer$Type<($FriendlyByteBuf$Type), (T)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "basic"<S extends $ExtendedSingleItemRecipe>(arg0: $RecipeType$Type<(any)>, arg1: $ExtendedSingleItemRecipe$IRecipeFactory$Type<(S)>): $ExtendedSingleItemRecipe$Serializer<(S)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSingleItemRecipe$Serializer$Type<T> = ($ExtendedSingleItemRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSingleItemRecipe$Serializer_<T> = $ExtendedSingleItemRecipe$Serializer$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/block/compounder/$CompounderInfo" {
import {$CompoundMaterialItem, $CompoundMaterialItem$Type} from "packages/net/silentchaos512/gear/item/$CompoundMaterialItem"
import {$CompounderBlock, $CompounderBlock$Type} from "packages/net/silentchaos512/gear/block/compounder/$CompounderBlock"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$CompoundingRecipe, $CompoundingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/compounder/$CompoundingRecipe"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$CompounderTileEntity, $CompounderTileEntity$Type} from "packages/net/silentchaos512/gear/block/compounder/$CompounderTileEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IMaterialCategory, $IMaterialCategory$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialCategory"

export class $CompounderInfo<R extends $CompoundingRecipe> {

constructor(arg0: $Collection$Type<($IMaterialCategory$Type)>, arg1: integer, arg2: $Supplier$Type<($CompoundMaterialItem$Type)>, arg3: $Supplier$Type<($CompounderBlock$Type)>, arg4: $Supplier$Type<($BlockEntityType$Type<($CompounderTileEntity$Type<(R)>)>)>, arg5: $Supplier$Type<($MenuType$Type<(any)>)>, arg6: $Supplier$Type<($RecipeSerializer$Type<(any)>)>, arg7: $Supplier$Type<($RecipeType$Type<(R)>)>, arg8: $Class$Type<(R)>)

public "getContainerType"(): $MenuType<(any)>
public "getRecipeClass"(): $Class<(R)>
public "getOutputItem"(): $CompoundMaterialItem
public "getInputSlotCount"(): integer
public "getBlockEntityType"(): $BlockEntityType<($CompounderTileEntity<(R)>)>
public "getCategories"(): $Collection<($IMaterialCategory)>
public "getServerBlockEntityTicker"(): $BlockEntityTicker<(any)>
public "getRecipeSerializer"(): $RecipeSerializer<(any)>
public "getRecipeType"(): $RecipeType<(R)>
public "getBlock"(): $CompounderBlock<(any)>
get "containerType"(): $MenuType<(any)>
get "recipeClass"(): $Class<(R)>
get "outputItem"(): $CompoundMaterialItem
get "inputSlotCount"(): integer
get "blockEntityType"(): $BlockEntityType<($CompounderTileEntity<(R)>)>
get "categories"(): $Collection<($IMaterialCategory)>
get "serverBlockEntityTicker"(): $BlockEntityTicker<(any)>
get "recipeSerializer"(): $RecipeSerializer<(any)>
get "recipeType"(): $RecipeType<(R)>
get "block"(): $CompounderBlock<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompounderInfo$Type<R> = ($CompounderInfo<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompounderInfo_<R> = $CompounderInfo$Type<(R)>;
}}
declare module "packages/net/silentchaos512/gear/block/salvager/$SalvagerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModContainerBlock, $ModContainerBlock$Type} from "packages/net/silentchaos512/gear/block/$ModContainerBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$SalvagerTileEntity, $SalvagerTileEntity$Type} from "packages/net/silentchaos512/gear/block/salvager/$SalvagerTileEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $SalvagerBlock extends $ModContainerBlock<($SalvagerTileEntity)> {
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvagerBlock$Type = ($SalvagerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagerBlock_ = $SalvagerBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/api/util/$IStatModProvider" {
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStatModProvider<D> {

 "getStatUnclamped"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStat"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStatModifiers"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type): $Collection<($StatInstance)>
 "getStatModifiers"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): $Collection<($StatInstance)>

(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
}

export namespace $IStatModProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStatModProvider$Type<D> = ($IStatModProvider<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStatModProvider_<D> = $IStatModProvider$Type<(D)>;
}}
declare module "packages/net/silentchaos512/gear/block/$INamedContainerExtraData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $INamedContainerExtraData extends $MenuProvider {

 "encodeExtraData"(arg0: $FriendlyByteBuf$Type): void
 "getDisplayName"(): $Component
 "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
}

export namespace $INamedContainerExtraData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedContainerExtraData$Type = ($INamedContainerExtraData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INamedContainerExtraData_ = $INamedContainerExtraData$Type;
}}
declare module "packages/net/silentchaos512/lib/item/$LootContainerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootContainerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $ResourceLocation$Type, arg1: boolean)
constructor(arg0: $ResourceLocation$Type, arg1: $Item$Properties$Type)
constructor(arg0: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $Item$Properties$Type)

public static "setLootTable"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getStack"(): $ItemStack
public "getStack"(arg0: $ResourceLocation$Type): $ItemStack
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContainerItem$Type = ($LootContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContainerItem_ = $LootContainerItem$Type;
}}
declare module "packages/net/silentchaos512/gear/block/grader/$GraderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ModContainerBlock, $ModContainerBlock$Type} from "packages/net/silentchaos512/gear/block/$ModContainerBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$GraderTileEntity, $GraderTileEntity$Type} from "packages/net/silentchaos512/gear/block/grader/$GraderTileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $GraderBlock extends $ModContainerBlock<($GraderTileEntity)> implements $SimpleWaterloggedBlock {
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraderBlock$Type = ($GraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraderBlock_ = $GraderBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$WoodBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $WoodBlock extends $RotatedPillarBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $Function$Type<($Block$Type), ($Block$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodBlock$Type = ($WoodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodBlock_ = $WoodBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$CraftingItems$ItemInternal" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftingItems$ItemInternal extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingItems$ItemInternal$Type = ($CraftingItems$ItemInternal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingItems$ItemInternal_ = $CraftingItems$ItemInternal$Type;
}}
declare module "packages/net/silentchaos512/gear/api/util/$IGearComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$IStatModProvider, $IStatModProvider$Type} from "packages/net/silentchaos512/gear/api/util/$IStatModProvider"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$ITraitProvider, $ITraitProvider$Type} from "packages/net/silentchaos512/gear/api/util/$ITraitProvider"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"

export interface $IGearComponent<D> extends $IStatModProvider<(D)>, $ITraitProvider<(D)> {

 "isCraftingAllowed"(arg0: D, arg1: $PartType$Type, arg2: $GearType$Type, arg3: $Container$Type): boolean
 "isCraftingAllowed"(arg0: D, arg1: $PartType$Type, arg2: $GearType$Type): boolean
 "getIngredient"(): $Ingredient
 "getMaterials"(arg0: D): $MaterialList
 "getDisplayName"(arg0: D, arg1: $PartType$Type, arg2: $ItemStack$Type): $Component
 "getStatUnclamped"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStat"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStatModifiers"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type): $Collection<($StatInstance)>
 "getStatModifiers"(arg0: D, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: D, arg1: $PartGearKey$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
}

export namespace $IGearComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGearComponent$Type<D> = ($IGearComponent<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGearComponent_<D> = $IGearComponent$Type<(D)>;
}}
declare module "packages/net/silentchaos512/gems/network/$LoginPacket" {
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"

export class $LoginPacket implements $IntSupplier {

constructor()

public "getLoginIndex"(): integer
public "setLoginIndex"(arg0: integer): void
public "getAsInt"(): integer
get "loginIndex"(): integer
set "loginIndex"(value: integer)
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoginPacket$Type = ($LoginPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoginPacket_ = $LoginPacket$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$ModCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ModCropBlock extends $CropBlock {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(arg0: $Supplier$Type<($Item$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCropBlock$Type = ($ModCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModCropBlock_ = $ModCropBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/$SGearDamageItemRecipe" {
import {$ExtendedShapelessRecipe$Serializer, $ExtendedShapelessRecipe$Serializer$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapelessRecipe$Serializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$DamageItemRecipe, $DamageItemRecipe$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$DamageItemRecipe"

export class $SGearDamageItemRecipe extends $DamageItemRecipe {
static readonly "SERIALIZER": $ExtendedShapelessRecipe$Serializer<($DamageItemRecipe)>
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type, arg1: integer)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGearDamageItemRecipe$Type = ($SGearDamageItemRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGearDamageItemRecipe_ = $SGearDamageItemRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$GearSmithingTableBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $GearSmithingTableBlock extends $Block {
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSmithingTableBlock$Type = ($GearSmithingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSmithingTableBlock_ = $GearSmithingTableBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$IDroppableInventory" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDroppableInventory {

 "getItemsToDrop"(): $NonNullList<($ItemStack)>

(): $NonNullList<($ItemStack)>
}

export namespace $IDroppableInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDroppableInventory$Type = ($IDroppableInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDroppableInventory_ = $IDroppableInventory$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearMattockItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GearHoeItem, $GearHoeItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearHoeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearMattockItem extends $GearHoeItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearMattockItem$Type = ($GearMattockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearMattockItem_ = $GearMattockItem$Type;
}}
declare module "packages/net/silentchaos512/gear/block/press/$MetalPressBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ModContainerBlock, $ModContainerBlock$Type} from "packages/net/silentchaos512/gear/block/$ModContainerBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$MetalPressTileEntity, $MetalPressTileEntity$Type} from "packages/net/silentchaos512/gear/block/press/$MetalPressTileEntity"

export class $MetalPressBlock extends $ModContainerBlock<($MetalPressTileEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalPressBlock$Type = ($MetalPressBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalPressBlock_ = $MetalPressBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$CustomMaterialItem" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MaterialInstance, $MaterialInstance$Type} from "packages/net/silentchaos512/gear/gear/material/$MaterialInstance"
import {$IColoredMaterialItem, $IColoredMaterialItem$Type} from "packages/net/silentchaos512/gear/item/$IColoredMaterialItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomMaterialItem extends $Item implements $IColoredMaterialItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getMaterial"(arg0: $ItemStack$Type): $MaterialInstance
public "addSubItems"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "create"(arg0: $IMaterialInstance$Type, arg1: integer): $ItemStack
public "create"(arg0: $IMaterialInstance$Type): $ItemStack
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getPrimarySubMaterial"(arg0: $ItemStack$Type): $IMaterialInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMaterialItem$Type = ($CustomMaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMaterialItem_ = $CustomMaterialItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/util/$DataResource" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ITrait, $ITrait$Type} from "packages/net/silentchaos512/gear/api/traits/$ITrait"
import {$IGearPart, $IGearPart$Type} from "packages/net/silentchaos512/gear/api/part/$IGearPart"

export class $DataResource<T> {

constructor(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ResourceLocation$Type), (T)>)

public static "trait"(arg0: string): $DataResource<($ITrait)>
public static "trait"(arg0: $ResourceLocation$Type): $DataResource<($ITrait)>
public "get"(): T
public "map"<U>(arg0: $Function$Type<(any), (any)>): $Optional<(U)>
public "stream"(): $Stream<(T)>
public "isPresent"(): boolean
public "getId"(): $ResourceLocation
public "ifPresent"(arg0: $Consumer$Type<(any)>): void
public static "part"(arg0: $ResourceLocation$Type): $DataResource<($IGearPart)>
public static "part"(arg0: string): $DataResource<($IGearPart)>
public static "material"(arg0: string): $DataResource<($IMaterial)>
public static "material"(arg0: $ResourceLocation$Type): $DataResource<($IMaterial)>
get "present"(): boolean
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResource$Type<T> = ($DataResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResource_<T> = $DataResource$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/item/$GuideBookItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GuideBookItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuideBookItem$Type = ($GuideBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuideBookItem_ = $GuideBookItem$Type;
}}
declare module "packages/net/silentchaos512/gear/gear/material/$MaterialInstance" {
import {$RepairContext$Type, $RepairContext$Type$Type} from "packages/net/silentchaos512/gear/gear/part/$RepairContext$Type"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IItemStat, $IItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$IItemStat"
import {$IMaterialDisplay, $IMaterialDisplay$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialDisplay"
import {$IMaterialModifier, $IMaterialModifier$Type} from "packages/net/silentchaos512/gear/api/material/modifier/$IMaterialModifier"
import {$DataResource, $DataResource$Type} from "packages/net/silentchaos512/gear/api/util/$DataResource"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"
import {$IMaterialCategory, $IMaterialCategory$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialCategory"
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$MaterialGrade, $MaterialGrade$Type} from "packages/net/silentchaos512/gear/api/part/$MaterialGrade"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"

export class $MaterialInstance implements $IMaterialInstance {


public "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): float
public "getTier"(arg0: $PartType$Type): integer
public "getCategories"(): $Collection<($IMaterialCategory)>
public "getNameColor"(arg0: $PartType$Type, arg1: $GearType$Type): integer
public "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): $Collection<($StatInstance)>
public "getTraits"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type): $Collection<($TraitInstance)>
public "getModelKey"(): string
public "getDisplayProperties"(): $IMaterialDisplay
public static "readShorthand"(arg0: string): $MaterialInstance
/**
 * 
 * @deprecated
 */
public static "writeShorthand"(arg0: $IMaterialInstance$Type): string
public "getRepairValue"(arg0: $ItemStack$Type): integer
public "getRepairValue"(arg0: $ItemStack$Type, arg1: $RepairContext$Type$Type): integer
public "getPrimaryColor"(arg0: $GearType$Type, arg1: $PartType$Type): integer
public "getIngredient"(): $Ingredient
public "canRepair"(arg0: $ItemStack$Type): boolean
public "getMaterials"(): $MaterialList
public "get"(): $IMaterial
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getModifiers"(): $Collection<($IMaterialModifier)>
public static "of"(arg0: $IMaterial$Type): $MaterialInstance
public static "of"(arg0: $IMaterial$Type, arg1: $MaterialGrade$Type): $MaterialInstance
public static "of"(arg0: $DataResource$Type<($IMaterial$Type)>, arg1: $ItemStack$Type): $IMaterialInstance
public static "of"(arg0: $IMaterial$Type, arg1: $MaterialGrade$Type, arg2: $ItemStack$Type): $MaterialInstance
public static "of"(arg0: $IMaterial$Type, arg1: $ItemStack$Type): $MaterialInstance
public static "from"(arg0: $ItemStack$Type): $MaterialInstance
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $CompoundTag$Type): $MaterialInstance
public "getId"(): $ResourceLocation
public "getDisplayName"(arg0: $PartType$Type, arg1: $ItemStack$Type): $Component
public "getItem"(): $ItemStack
public "getGrade"(): $MaterialGrade
public "getStat"(arg0: $PartType$Type, arg1: $IItemStat$Type): float
public "getTier"(): integer
/**
 * 
 * @deprecated
 */
public "getMaterial"(): $IMaterial
/**
 * 
 * @deprecated
 */
public "getMaterialId"(): $ResourceLocation
public "hasAnyCategory"(arg0: $Collection$Type<($IMaterialCategory$Type)>): boolean
public "getHarvestTier"(): $Tier
public "getStatKeys"(arg0: $PartType$Type): $Collection<($StatGearKey)>
public "getPartTypes"(): $Set<($PartType)>
public "getTraits"(arg0: $PartType$Type, arg1: $GearType$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
public "getDisplayNameWithModifiers"(arg0: $PartType$Type, arg1: $ItemStack$Type): $MutableComponent
public "allowedInPart"(arg0: $PartType$Type): boolean
public "isCraftingAllowed"(arg0: $PartType$Type, arg1: $GearType$Type): boolean
public "onSalvage"(): $IMaterialInstance
public "serialize"(): $JsonObject
public "isSimple"(): boolean
public "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type): float
public "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type): $Collection<($StatInstance)>
public "getTraits"(arg0: $PartType$Type): $Collection<($TraitInstance)>
public "containsMaterial"(arg0: $DataResource$Type<($IMaterial$Type)>): boolean
public "getDisplayName"(arg0: $PartType$Type): $Component
get "categories"(): $Collection<($IMaterialCategory)>
get "modelKey"(): string
get "displayProperties"(): $IMaterialDisplay
get "ingredient"(): $Ingredient
get "materials"(): $MaterialList
get "modifiers"(): $Collection<($IMaterialModifier)>
get "id"(): $ResourceLocation
get "item"(): $ItemStack
get "grade"(): $MaterialGrade
get "tier"(): integer
get "material"(): $IMaterial
get "materialId"(): $ResourceLocation
get "harvestTier"(): $Tier
get "partTypes"(): $Set<($PartType)>
get "simple"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialInstance$Type = ($MaterialInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialInstance_ = $MaterialInstance$Type;
}}
declare module "packages/net/silentchaos512/gear/api/item/$IStatItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"

export interface $IStatItem {

 "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
 "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer

(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
}

export namespace $IStatItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStatItem$Type = ($IStatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStatItem_ = $IStatItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/item/$ISlingshotAmmo" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISlingshotAmmo {

 "isAmmo"(arg0: $ItemStack$Type): boolean
}

export namespace $ISlingshotAmmo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlingshotAmmo$Type = ($ISlingshotAmmo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlingshotAmmo_ = $ISlingshotAmmo$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearElytraItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICoreArmor, $ICoreArmor$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreArmor"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ElytraItem, $ElytraItem$Type} from "packages/net/minecraft/world/item/$ElytraItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearElytraItem extends $ElytraItem implements $ICoreArmor {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getGearType"(): $GearType
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "addAttributes"(arg0: string, arg1: $ItemStack$Type, arg2: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg3: boolean): void
public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "getDurabilityStat"(): $ItemStat
public "getItemColors"(): $ItemColor
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public static "get"(arg0: $ItemStack$Type): $Equipable
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "requiredParts"(): $Collection<($PartType)>
get "durabilityStat"(): $ItemStat
get "itemColors"(): $ItemColor
get "animationFrames"(): integer
get "renderParts"(): $Collection<($PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearElytraItem$Type = ($GearElytraItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearElytraItem_ = $GearElytraItem$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$PhantomLight" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PhantomLight extends $Block implements $SimpleWaterloggedBlock {
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

public static "spawnParticle"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomLight$Type = ($PhantomLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomLight_ = $PhantomLight$Type;
}}
declare module "packages/net/silentchaos512/gear/item/blueprint/$GearBlueprintItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractBlueprintItem, $AbstractBlueprintItem$Type} from "packages/net/silentchaos512/gear/item/blueprint/$AbstractBlueprintItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearBlueprintItem extends $AbstractBlueprintItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type, arg1: boolean, arg2: $Item$Properties$Type)

public "getPartType"(arg0: $ItemStack$Type): $PartType
public "getGearType"(): $GearType
public "getGearType"(arg0: $ItemStack$Type): $GearType
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getItemTag"(): $TagKey<($Item)>
get "gearType"(): $GearType
get "itemTag"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearBlueprintItem$Type = ($GearBlueprintItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearBlueprintItem_ = $GearBlueprintItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearShieldItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICoreItem, $ICoreItem$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreItem"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$ShieldItem, $ShieldItem$Type} from "packages/net/minecraft/world/item/$ShieldItem"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearShieldItem extends $ShieldItem implements $ICoreItem {
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "TAG_BASE_COLOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getGearType"(): $GearType
public "getDurabilityStat"(): $ItemStat
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getItemColors"(): $ItemColor
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
public static "get"(arg0: $ItemStack$Type): $Equipable
get "gearType"(): $GearType
get "durabilityStat"(): $ItemStat
get "requiredParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
get "animationFrames"(): integer
get "renderParts"(): $Collection<($PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearShieldItem$Type = ($GearShieldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearShieldItem_ = $GearShieldItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$JewelerKitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PartBlueprintItem, $PartBlueprintItem$Type} from "packages/net/silentchaos512/gear/item/blueprint/$PartBlueprintItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JewelerKitItem extends $PartBlueprintItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $PartType$Type, arg1: boolean, arg2: $Item$Properties$Type)

public "hasStandardModel"(): boolean
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JewelerKitItem$Type = ($JewelerKitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JewelerKitItem_ = $JewelerKitItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/stats/$ChargedProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChargedProperties {

constructor(arg0: integer, arg1: float)

public "getChargeValue"(): float
public "getChargeLevel"(): integer
public "getChargeability"(): float
get "chargeValue"(): float
get "chargeLevel"(): integer
get "chargeability"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedProperties$Type = ($ChargedProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedProperties_ = $ChargedProperties$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$MainPartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CompoundPartItem, $CompoundPartItem$Type} from "packages/net/silentchaos512/gear/item/$CompoundPartItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MainPartItem extends $CompoundPartItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type, arg1: $Item$Properties$Type)

public "getGearType"(): $GearType
public "getCraftedCount"(arg0: $ItemStack$Type): integer
public "getColorWeight"(arg0: integer, arg1: integer): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
get "gearType"(): $GearType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainPartItem$Type = ($MainPartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainPartItem_ = $MainPartItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/stats/$ItemStat" {
import {$ItemStat$Properties, $ItemStat$Properties$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat$Properties"
import {$ItemStat$DisplayFormat, $ItemStat$DisplayFormat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat$DisplayFormat"
import {$IItemStat, $IItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$IItemStat"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Color, $Color$Type} from "packages/net/silentchaos512/utils/$Color"
import {$StatInstance$Operation, $StatInstance$Operation$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance$Operation"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $ItemStat implements $IItemStat {

constructor(arg0: $ResourceLocation$Type, arg1: float, arg2: float, arg3: float, arg4: $Color$Type, arg5: $ItemStat$Properties$Type)
constructor(arg0: $ResourceLocation$Type, arg1: float, arg2: float, arg3: float, arg4: $ChatFormatting$Type, arg5: $ItemStat$Properties$Type)

public "isVisible"(): boolean
public "getNameColor"(): $Color
public "getStatId"(): $ResourceLocation
public "getBaseValue"(): float
public "getMinimumValue"(): float
public "getMaximumValue"(): float
public "getDefaultOperation"(): $StatInstance$Operation
public "isDisplayAsInt"(): boolean
/**
 * 
 * @deprecated
 */
public "isDisplayAsMultiplier"(): boolean
public "clampValue"(arg0: float): float
public static "getWeightedAverage"(arg0: $Collection$Type<($StatInstance$Type)>, arg1: $StatInstance$Operation$Type): float
public static "getMaterialWeightedAverage"(arg0: $Collection$Type<($StatInstance$Type)>, arg1: $StatInstance$Operation$Type): float
public "computeForDisplay"(arg0: float, arg1: $GearType$Type, arg2: $Collection$Type<($StatInstance$Type)>): $StatInstance
public "doesSynergyApply"(): boolean
public "isAffectedByGrades"(): boolean
/**
 * 
 * @deprecated
 */
public "withMissingRodEffect"(arg0: float): float
public "toString"(): string
public "compute"(arg0: $Collection$Type<($StatInstance$Type)>): float
public "compute"(arg0: float, arg1: $Collection$Type<($StatInstance$Type)>): float
/**
 * 
 * @deprecated
 */
public "compute"(arg0: float, arg1: boolean, arg2: $Collection$Type<($StatInstance$Type)>): float
public "compute"(arg0: float, arg1: boolean, arg2: $GearType$Type, arg3: $Collection$Type<($StatInstance$Type)>): float
public "compute"(arg0: float, arg1: boolean, arg2: $GearType$Type, arg3: $GearType$Type, arg4: $Collection$Type<($StatInstance$Type)>): float
public "getDefaultValue"(): float
public "getDisplayName"(): $MutableComponent
public "getDisplayFormat"(): $ItemStat$DisplayFormat
get "visible"(): boolean
get "nameColor"(): $Color
get "statId"(): $ResourceLocation
get "baseValue"(): float
get "minimumValue"(): float
get "maximumValue"(): float
get "defaultOperation"(): $StatInstance$Operation
get "displayAsInt"(): boolean
get "displayAsMultiplier"(): boolean
get "affectedByGrades"(): boolean
get "defaultValue"(): float
get "displayName"(): $MutableComponent
get "displayFormat"(): $ItemStat$DisplayFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStat$Type = ($ItemStat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStat_ = $ItemStat$Type;
}}
declare module "packages/net/silentchaos512/gems/world/$OreConfigDefaults" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $OreConfigDefaults extends $Record {

constructor(count: integer, size: integer, rarity: integer, minHeight: integer, maxHeight: integer, discardChanceOnAirExposure: float)

public "minHeight"(): integer
public "maxHeight"(): integer
public "discardChanceOnAirExposure"(): float
public "rarity"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): integer
public "count"(): integer
public static "empty"(): $OreConfigDefaults
public static "defaults"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $OreConfigDefaults
public static "defaults"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float): $OreConfigDefaults
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreConfigDefaults$Type = ($OreConfigDefaults);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreConfigDefaults_ = $OreConfigDefaults$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/smithing/$UpgradeSmithingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$UpgradeSmithingRecipe, $UpgradeSmithingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/smithing/$UpgradeSmithingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UpgradeSmithingRecipe$Serializer implements $RecipeSerializer<($UpgradeSmithingRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $UpgradeSmithingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $UpgradeSmithingRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $UpgradeSmithingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $UpgradeSmithingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSmithingRecipe$Serializer$Type = ($UpgradeSmithingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSmithingRecipe$Serializer_ = $UpgradeSmithingRecipe$Serializer$Type;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$LazyTraitInstance" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$ITraitInstance, $ITraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitInstance"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITraitCondition, $ITraitCondition$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitCondition"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ITrait, $ITrait$Type} from "packages/net/silentchaos512/gear/api/traits/$ITrait"

export class $LazyTraitInstance implements $ITraitInstance {


public "getTraitId"(): $ResourceLocation
public "getTrait"(): $ITrait
public "getConditions"(): $ImmutableList<($ITraitCondition)>
public "getLevel"(): integer
public "conditionsMatch"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type, arg2: $List$Type<(any)>): boolean
public "getConditionsText"(): $MutableComponent
public "serialize"(): $JsonObject
get "traitId"(): $ResourceLocation
get "trait"(): $ITrait
get "conditions"(): $ImmutableList<($ITraitCondition)>
get "level"(): integer
get "conditionsText"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyTraitInstance$Type = ($LazyTraitInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyTraitInstance_ = $LazyTraitInstance$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$SeedItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SeedItem extends $ItemNameBlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeedItem$Type = ($SeedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeedItem_ = $SeedItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/util/$ITraitProvider" {
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITraitProvider<D> {

 "getTraits"(arg0: D, arg1: $PartGearKey$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>

(arg0: D, arg1: $PartGearKey$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
}

export namespace $ITraitProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraitProvider$Type<D> = ($ITraitProvider<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraitProvider_<D> = $ITraitProvider$Type<(D)>;
}}
declare module "packages/net/silentchaos512/gems/item/container/$IContainerItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IContainerItem {

 "saveInventory"(arg0: $ItemStack$Type, arg1: $IItemHandler$Type, arg2: $Player$Type): void
 "getInventorySize"(arg0: $ItemStack$Type): integer
 "getInventory"(arg0: $ItemStack$Type): $IItemHandler
 "canStore"(arg0: $ItemStack$Type): boolean
}

export namespace $IContainerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerItem$Type = ($IContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerItem_ = $IContainerItem$Type;
}}
declare module "packages/net/silentchaos512/gems/soul/$Soul" {
import {$SyncSoulsPacket, $SyncSoulsPacket$Type} from "packages/net/silentchaos512/gems/network/$SyncSoulsPacket"
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$SoulElement, $SoulElement$Type} from "packages/net/silentchaos512/gems/soul/$SoulElement"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Soul {
static readonly "MAX_VALUE": integer
static readonly "STANDARD_KILL_VALUE": integer


public "getSecondaryColor"(): integer
public "getPrimaryElement"(): $SoulElement
public "getSecondaryElement"(): $SoulElement
public static "canHaveSoulGem"(arg0: $EntityType$Type<(any)>): boolean
public "getKillValue"(arg0: $LivingEntity$Type): integer
public static "handleSyncPacket"(arg0: $SyncSoulsPacket$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "getPrimaryColor"(): integer
public "getEntityName"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "from"(arg0: string): $Soul
public static "from"(arg0: $ResourceLocation$Type): $Soul
public static "from"(arg0: $LivingEntity$Type): $Soul
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $Soul
public "getId"(): $ResourceLocation
public static "getValues"(): $Collection<($Soul)>
public "getEntityType"(): $EntityType<(any)>
get "secondaryColor"(): integer
get "primaryElement"(): $SoulElement
get "secondaryElement"(): $SoulElement
get "primaryColor"(): integer
get "entityName"(): $Component
get "id"(): $ResourceLocation
get "values"(): $Collection<($Soul)>
get "entityType"(): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Soul$Type = ($Soul);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Soul_ = $Soul$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/$IMaterialCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $IMaterialCategory {

 "getName"(): string
 "matches"(arg0: $IMaterialCategory$Type): boolean
 "getDisplayName"(): $Component

(): string
}

export namespace $IMaterialCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialCategory$Type = ($IMaterialCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialCategory_ = $IMaterialCategory$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$GemOreBlock" {
import {$IGemBlock, $IGemBlock$Type} from "packages/net/silentchaos512/gems/block/$IGemBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$OreBlockSG, $OreBlockSG$Type} from "packages/net/silentchaos512/gems/block/$OreBlockSG"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $GemOreBlock extends $OreBlockSG implements $IGemBlock {
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

constructor(arg0: $Gems$Type, arg1: integer, arg2: string, arg3: $BlockBehaviour$Properties$Type)

public "getExpRandom"(arg0: $RandomSource$Type): integer
public "getGemBlockName"(): $MutableComponent
public "getGem"(): $Gems
public "getName"(): $MutableComponent
get "gemBlockName"(): $MutableComponent
get "gem"(): $Gems
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemOreBlock$Type = ($GemOreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemOreBlock_ = $GemOreBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearSickleItem" {
import {$GearDiggerItem, $GearDiggerItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearDiggerItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearSickleItem extends $GearDiggerItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public static "putHarvestState"(arg0: $Block$Type, arg1: $BlockState$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSickleItem$Type = ($GearSickleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSickleItem_ = $GearSickleItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearPickaxeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearPickaxeItem extends $PickaxeItem implements $ICoreTool {
static readonly "ACTIONS_WITH_SPOON": $Set<($ToolAction)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getGearType"(): $GearType
public "getTier"(): $Tier
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "tier"(): $Tier
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearPickaxeItem$Type = ($GearPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearPickaxeItem_ = $GearPickaxeItem$Type;
}}
declare module "packages/net/silentchaos512/gear/block/$FluffyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FluffyBlock extends $Block {
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

constructor(arg0: $DyeColor$Type)

public "getDyeColor"(): $DyeColor
public "updateEntityAfterFallOn"(arg0: $BlockGetter$Type, arg1: $Entity$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
get "dyeColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluffyBlock$Type = ($FluffyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluffyBlock_ = $FluffyBlock$Type;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapedRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $ExtendedShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getBaseRecipe"(): $ShapedRecipe
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "baseRecipe"(): $ShapedRecipe
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedShapedRecipe$Type = ($ExtendedShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedShapedRecipe_ = $ExtendedShapedRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$CraftedMaterialItem" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IColoredMaterialItem, $IColoredMaterialItem$Type} from "packages/net/silentchaos512/gear/item/$IColoredMaterialItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftedMaterialItem extends $Item implements $IColoredMaterialItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getMaterial"(arg0: $ItemStack$Type): $IMaterialInstance
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "create"(arg0: $IMaterialInstance$Type, arg1: integer): $ItemStack
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getPrimarySubMaterial"(arg0: $ItemStack$Type): $IMaterialInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftedMaterialItem$Type = ($CraftedMaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftedMaterialItem_ = $CraftedMaterialItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearArrowItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICoreItem, $ICoreItem$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearArrowItem extends $ArrowItem implements $ICoreItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getGearType"(): $GearType
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getRenderParts"(): $Collection<($PartType)>
public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "isInfinite"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "getItemColors"(): $ItemColor
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "isValidSlot"(arg0: string): boolean
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "asItem"(): $Item
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "requiredParts"(): $Collection<($PartType)>
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearArrowItem$Type = ($GearArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearArrowItem_ = $GearArrowItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearHoeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearHoeItem extends $HoeItem implements $ICoreTool {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getGearType"(): $GearType
public "getTier"(): $Tier
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "tier"(): $Tier
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearHoeItem$Type = ($GearHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearHoeItem_ = $GearHoeItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearHammerItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GearPickaxeItem, $GearPickaxeItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearPickaxeItem"
import {$IAoeTool, $IAoeTool$Type} from "packages/net/silentchaos512/gear/util/$IAoeTool"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearHammerItem extends $GearPickaxeItem implements $IAoeTool {
static readonly "ACTIONS_WITH_SPOON": $Set<($ToolAction)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "rayTraceBlocks"(arg0: $Level$Type, arg1: $Player$Type): $HitResult
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getAoeRadius"(arg0: $ItemStack$Type): integer
public "getExtraBlocks"(arg0: $Level$Type, arg1: $BlockHitResult$Type, arg2: $Player$Type, arg3: $ItemStack$Type): $List<($BlockPos)>
public "isEffectiveOnBlock"(arg0: $ItemStack$Type, arg1: $BlockState$Type, arg2: $Player$Type): boolean
public "attemptAddExtraBlock"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $List$Type<($BlockPos$Type)>): void
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearHammerItem$Type = ($GearHammerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearHammerItem_ = $GearHammerItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearBowItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$BowItem, $BowItem$Type} from "packages/net/minecraft/world/item/$BowItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ICoreRangedWeapon, $ICoreRangedWeapon$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreRangedWeapon"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearBowItem extends $BowItem implements $ICoreRangedWeapon {
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getGearType"(): $GearType
public "getDrawDelay"(arg0: $ItemStack$Type): float
public "getArrowVelocity"(arg0: $ItemStack$Type, arg1: integer): float
public "getArrowDamage"(arg0: $ItemStack$Type): float
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getAnimationFrames"(): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "getBaseDrawDelay"(arg0: $ItemStack$Type): float
public "getItemColors"(): $ItemColor
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "isValidSlot"(arg0: string): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "animationFrames"(): integer
get "requiredParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearBowItem$Type = ($GearBowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearBowItem_ = $GearBowItem$Type;
}}
declare module "packages/net/silentchaos512/gems/item/container/$GemContainerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IContainerItem, $IContainerItem$Type} from "packages/net/silentchaos512/gems/item/container/$IContainerItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemContainerItem extends $Item implements $IContainerItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: string, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "saveInventory"(arg0: $ItemStack$Type, arg1: $IItemHandler$Type, arg2: $Player$Type): void
public "getInventorySize"(arg0: $ItemStack$Type): integer
public "getInventory"(arg0: $ItemStack$Type): $IItemHandler
public "canStore"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemContainerItem$Type = ($GemContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemContainerItem_ = $GemContainerItem$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$GemGlassBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$StainedGlassBlock, $StainedGlassBlock$Type} from "packages/net/minecraft/world/level/block/$StainedGlassBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$IGemBlock, $IGemBlock$Type} from "packages/net/silentchaos512/gems/block/$IGemBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"

export class $GemGlassBlock extends $StainedGlassBlock implements $IGemBlock {
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

constructor(arg0: $Gems$Type, arg1: $BlockBehaviour$Properties$Type)

public "getGemBlockName"(): $MutableComponent
public "getGem"(): $Gems
public "getName"(): $MutableComponent
public "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
get "gemBlockName"(): $MutableComponent
get "gem"(): $Gems
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemGlassBlock$Type = ($GemGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemGlassBlock_ = $GemGlassBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/api/part/$IGearPart" {
import {$IPartSerializer, $IPartSerializer$Type} from "packages/net/silentchaos512/gear/api/part/$IPartSerializer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IGearComponent, $IGearComponent$Type} from "packages/net/silentchaos512/gear/api/util/$IGearComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IPartData, $IPartData$Type} from "packages/net/silentchaos512/gear/api/part/$IPartData"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"

export interface $IGearPart extends $IGearComponent<($IPartData)> {

 "randomizeData"(arg0: $GearType$Type, arg1: integer): $PartData
 "getTier"(): integer
 "getTier"(arg0: $PartData$Type): integer
 "isVisible"(): boolean
 "addInformation"(arg0: $PartData$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "getHarvestTier"(arg0: $IPartData$Type): $Tier
 "getModelKey"(arg0: $PartData$Type): string
 "isCraftingAllowed"(arg0: $IPartData$Type, arg1: $PartType$Type, arg2: $GearType$Type, arg3: $Container$Type): boolean
 "isCraftingAllowed"(arg0: $IPartData$Type, arg1: $GearType$Type): boolean
 "getGearType"(): $GearType
 "getMaterialName"(arg0: $PartData$Type, arg1: $ItemStack$Type): $Component
 "onGearDamaged"(arg0: $PartData$Type, arg1: $ItemStack$Type, arg2: integer): void
 "getDisplayNamePrefix"(arg0: $PartData$Type, arg1: $ItemStack$Type): $Component
 "onAddToGear"(arg0: $ItemStack$Type, arg1: $PartData$Type): void
 "canAddToGear"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
 "getSalvageLossRate"(arg0: $PartData$Type, arg1: $ItemStack$Type, arg2: double): double
 "replacesExistingInPosition"(arg0: $PartData$Type): boolean
 "onRemoveFromGear"(arg0: $ItemStack$Type, arg1: $PartData$Type): void
 "retainData"(arg0: $IGearPart$Type): void
 "getSerializer"(): $IPartSerializer<(any)>
 "getMaterials"(arg0: $IPartData$Type): $MaterialList
 "getId"(): $ResourceLocation
 "getType"(): $PartType
 "getDisplayName"(arg0: $PartData$Type): $Component
 "getDisplayName"(arg0: $PartData$Type, arg1: $ItemStack$Type): $Component
 "getColor"(arg0: $PartData$Type, arg1: $ItemStack$Type, arg2: integer, arg3: integer): integer
 "getPackName"(): string
 "isCraftingAllowed"(arg0: $IPartData$Type, arg1: $PartType$Type, arg2: $GearType$Type): boolean
 "getIngredient"(): $Ingredient
 "getDisplayName"(arg0: $IPartData$Type, arg1: $PartType$Type, arg2: $ItemStack$Type): $Component
 "getStatUnclamped"(arg0: $IPartData$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStat"(arg0: $IPartData$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): float
 "getStatModifiers"(arg0: $IPartData$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type): $Collection<($StatInstance)>
 "getStatModifiers"(arg0: $IPartData$Type, arg1: $PartType$Type, arg2: $StatGearKey$Type, arg3: $ItemStack$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: $IPartData$Type, arg1: $PartGearKey$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
}

export namespace $IGearPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGearPart$Type = ($IGearPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGearPart_ = $IGearPart$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/$MaterialList" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $MaterialList implements $List<($IMaterialInstance)> {


public "getModelKey"(): string
public "serializeNbt"(): $ListTag
public static "deserializeNbt"(arg0: $ListTag$Type): $MaterialList
public static "deserializeFirst"(arg0: $ListTag$Type): $IMaterialInstance
public "add"(arg0: $IMaterialInstance$Type): boolean
public "add"(arg0: integer, arg1: $IMaterialInstance$Type): void
public "remove"(arg0: any): boolean
public "remove"(arg0: integer): $IMaterialInstance
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "size"(): integer
public "subList"(arg0: integer, arg1: integer): $List<($IMaterialInstance)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<($IMaterialInstance)>
public static "of"(arg0: $Collection$Type<(any)>): $MaterialList
public static "of"(...arg0: ($IMaterialInstance$Type)[]): $MaterialList
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public static "empty"(): $MaterialList
public "set"(arg0: integer, arg1: $IMaterialInstance$Type): $IMaterialInstance
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "listIterator"(): $ListIterator<($IMaterialInstance)>
public "listIterator"(arg0: integer): $ListIterator<($IMaterialInstance)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<($IMaterialInstance)>
public "replaceAll"(arg0: $UnaryOperator$Type<($IMaterialInstance$Type)>): void
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type, arg3: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type, arg3: $IMaterialInstance$Type, arg4: $IMaterialInstance$Type, arg5: $IMaterialInstance$Type, arg6: $IMaterialInstance$Type, arg7: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type, arg3: $IMaterialInstance$Type, arg4: $IMaterialInstance$Type, arg5: $IMaterialInstance$Type, arg6: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type, arg3: $IMaterialInstance$Type, arg4: $IMaterialInstance$Type, arg5: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type, arg3: $IMaterialInstance$Type, arg4: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type, arg3: $IMaterialInstance$Type, arg4: $IMaterialInstance$Type, arg5: $IMaterialInstance$Type, arg6: $IMaterialInstance$Type, arg7: $IMaterialInstance$Type, arg8: $IMaterialInstance$Type, arg9: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(arg0: $IMaterialInstance$Type, arg1: $IMaterialInstance$Type, arg2: $IMaterialInstance$Type, arg3: $IMaterialInstance$Type, arg4: $IMaterialInstance$Type, arg5: $IMaterialInstance$Type, arg6: $IMaterialInstance$Type, arg7: $IMaterialInstance$Type, arg8: $IMaterialInstance$Type): $List<($IMaterialInstance)>
public static "of"<E>(...arg0: ($IMaterialInstance$Type)[]): $List<($IMaterialInstance)>
public "spliterator"(): $Spliterator<($IMaterialInstance)>
public "sort"(arg0: $Comparator$Type<(any)>): void
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<($IMaterialInstance)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<($IMaterialInstance)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IMaterialInstance>;
[index: number]: $IMaterialInstance
get "modelKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialList$Type = ($MaterialList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialList_ = $MaterialList$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearShearsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ShearsItem, $ShearsItem$Type} from "packages/net/minecraft/world/item/$ShearsItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearShearsItem extends $ShearsItem implements $ICoreTool {
static readonly "RELEVANT_STATS": $Set<($ItemStat)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getGearType"(): $GearType
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearShearsItem$Type = ($GearShearsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearShearsItem_ = $GearShearsItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/part/$MaterialGrade" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MaterialGrade extends $Enum<($MaterialGrade)> {
static readonly "NONE": $MaterialGrade
static readonly "E": $MaterialGrade
static readonly "D": $MaterialGrade
static readonly "C": $MaterialGrade
static readonly "B": $MaterialGrade
static readonly "A": $MaterialGrade
static readonly "S": $MaterialGrade
static readonly "SS": $MaterialGrade
static readonly "SSS": $MaterialGrade
static readonly "MAX": $MaterialGrade
readonly "bonusPercent": integer


public static "fromStack"(arg0: $ItemStack$Type): $MaterialGrade
public static "fromNbt"(arg0: $CompoundTag$Type): $MaterialGrade
public static "selectWithCatalyst"(arg0: $Random$Type, arg1: integer): $MaterialGrade
public "setGradeOnStack"(arg0: $ItemStack$Type): void
public static "selectRandom"(arg0: $Random$Type, arg1: $MaterialGrade$Type, arg2: double, arg3: $MaterialGrade$Type): $MaterialGrade
public "writeToNbt"(arg0: $CompoundTag$Type): void
public "copyWithGrade"(arg0: $ItemStack$Type): $ItemStack
public static "values"(): ($MaterialGrade)[]
public static "valueOf"(arg0: string): $MaterialGrade
public "getDisplayName"(): $MutableComponent
public static "getMax"(): $MaterialGrade
public static "fromString"(arg0: string): $MaterialGrade
set "gradeOnStack"(value: $ItemStack$Type)
get "displayName"(): $MutableComponent
get "max"(): $MaterialGrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialGrade$Type = (("ss") | ("a") | ("b") | ("sss") | ("c") | ("s") | ("d") | ("e") | ("max") | ("none")) | ($MaterialGrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialGrade_ = $MaterialGrade$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearCurioItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICoreItem, $ICoreItem$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreItem"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearCurioItem extends $Item implements $ICoreItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type, arg1: string, arg2: $Item$Properties$Type)

public "getGearType"(): $GearType
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getSlot"(): string
/**
 * 
 * @deprecated
 */
public "getItemColors"(): $ItemColor
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "asItem"(): $Item
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "requiredParts"(): $Collection<($PartType)>
get "slot"(): string
get "itemColors"(): $ItemColor
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearCurioItem$Type = ($GearCurioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearCurioItem_ = $GearCurioItem$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/salvage/$SalvagingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$SalvagingRecipe, $SalvagingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/salvage/$SalvagingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SalvagingRecipe$Serializer implements $RecipeSerializer<($SalvagingRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SalvagingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SalvagingRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SalvagingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SalvagingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalvagingRecipe$Serializer$Type = ($SalvagingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalvagingRecipe$Serializer_ = $SalvagingRecipe$Serializer$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearExcavatorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IAoeTool, $IAoeTool$Type} from "packages/net/silentchaos512/gear/util/$IAoeTool"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$GearShovelItem, $GearShovelItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearShovelItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearExcavatorItem extends $GearShovelItem implements $IAoeTool {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "rayTraceBlocks"(arg0: $Level$Type, arg1: $Player$Type): $HitResult
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "getAoeRadius"(arg0: $ItemStack$Type): integer
public "getExtraBlocks"(arg0: $Level$Type, arg1: $BlockHitResult$Type, arg2: $Player$Type, arg3: $ItemStack$Type): $List<($BlockPos)>
public "isEffectiveOnBlock"(arg0: $ItemStack$Type, arg1: $BlockState$Type, arg2: $Player$Type): boolean
public "attemptAddExtraBlock"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $List$Type<($BlockPos$Type)>): void
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearExcavatorItem$Type = ($GearExcavatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearExcavatorItem_ = $GearExcavatorItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$ITraitConditionSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ITraitCondition, $ITraitCondition$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitCondition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ITraitConditionSerializer<T extends $ITraitCondition> {

 "write"(arg0: T, arg1: $FriendlyByteBuf$Type): void
 "read"(arg0: $FriendlyByteBuf$Type): T
 "getId"(): $ResourceLocation
 "serialize"(arg0: T, arg1: $JsonObject$Type): void
 "serialize"(arg0: T): $JsonObject
 "deserialize"(arg0: $JsonObject$Type): T
}

export namespace $ITraitConditionSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraitConditionSerializer$Type<T> = ($ITraitConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraitConditionSerializer_<T> = $ITraitConditionSerializer$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$TraitInstance" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITraitInstance, $ITraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitInstance"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ITrait, $ITrait$Type} from "packages/net/silentchaos512/gear/api/traits/$ITrait"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataResource, $DataResource$Type} from "packages/net/silentchaos512/gear/api/util/$DataResource"
import {$LazyTraitInstance, $LazyTraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$LazyTraitInstance"
import {$ITraitCondition, $ITraitCondition$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitCondition"

export class $TraitInstance implements $ITraitInstance {


public "getTraitId"(): $ResourceLocation
public "addInformation"(arg0: $List$Type<($Component$Type)>, arg1: $TooltipFlag$Type): void
public "getTrait"(): $ITrait
public "getConditions"(): $Collection<($ITraitCondition)>
public static "of"(arg0: $DataResource$Type<($ITrait$Type)>, arg1: integer, ...arg2: ($ITraitCondition$Type)[]): $ITraitInstance
public static "of"(arg0: $ITrait$Type, arg1: integer, ...arg2: ($ITraitCondition$Type)[]): $TraitInstance
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $TraitInstance
public "getDisplayName"(): $MutableComponent
public "getLevel"(): integer
public static "lazy"(arg0: $ResourceLocation$Type, arg1: integer, ...arg2: ($ITraitCondition$Type)[]): $LazyTraitInstance
public static "deserialize"(arg0: $JsonObject$Type): $TraitInstance
public "conditionsMatch"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type, arg2: $List$Type<(any)>): boolean
public "getConditionsText"(): $MutableComponent
public "serialize"(): $JsonObject
get "traitId"(): $ResourceLocation
get "trait"(): $ITrait
get "conditions"(): $Collection<($ITraitCondition)>
get "displayName"(): $MutableComponent
get "level"(): integer
get "conditionsText"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraitInstance$Type = ($TraitInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraitInstance_ = $TraitInstance$Type;
}}
declare module "packages/net/silentchaos512/gear/api/stats/$StatInstance$Operation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StatInstance$Operation extends $Enum<($StatInstance$Operation)> {
static readonly "AVG": $StatInstance$Operation
static readonly "MAX": $StatInstance$Operation
static readonly "MUL1": $StatInstance$Operation
static readonly "MUL2": $StatInstance$Operation
static readonly "ADD": $StatInstance$Operation


public static "byName"(arg0: string): $StatInstance$Operation
public static "values"(): ($StatInstance$Operation)[]
public static "valueOf"(arg0: string): $StatInstance$Operation
public static "byNameOrNull"(arg0: string): $StatInstance$Operation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatInstance$Operation$Type = (("add") | ("avg") | ("max") | ("mul2") | ("mul1")) | ($StatInstance$Operation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatInstance$Operation_ = $StatInstance$Operation$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearSlingshotItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$GearBowItem, $GearBowItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearBowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearSlingshotItem extends $GearBowItem {
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getGearType"(): $GearType
public "getArrowVelocity"(arg0: $ItemStack$Type, arg1: integer): float
public "getArrowDamage"(arg0: $ItemStack$Type): float
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "asItem"(): $Item
get "gearType"(): $GearType
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSlingshotItem$Type = ($GearSlingshotItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSlingshotItem_ = $GearSlingshotItem$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/$SGearDamageItemRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$SGearDamageItemRecipe, $SGearDamageItemRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/$SGearDamageItemRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SGearDamageItemRecipe$Serializer implements $RecipeSerializer<($SGearDamageItemRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SGearDamageItemRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SGearDamageItemRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $SGearDamageItemRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SGearDamageItemRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGearDamageItemRecipe$Serializer$Type = ($SGearDamageItemRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGearDamageItemRecipe$Serializer_ = $SGearDamageItemRecipe$Serializer$Type;
}}
declare module "packages/net/silentchaos512/gear/api/stats/$IItemStat" {
import {$StatInstance$Operation, $StatInstance$Operation$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance$Operation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IItemStat {

 "getStatId"(): $ResourceLocation
 "getBaseValue"(): float
 "getMinimumValue"(): float
 "getMaximumValue"(): float
 "getDefaultOperation"(): $StatInstance$Operation
 "doesSynergyApply"(): boolean
 "isAffectedByGrades"(): boolean
 "getDefaultValue"(): float

(): $ResourceLocation
}

export namespace $IItemStat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStat$Type = ($IItemStat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemStat_ = $IItemStat$Type;
}}
declare module "packages/net/silentchaos512/gear/api/util/$IGearComponentInstance" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IGearComponent, $IGearComponent$Type} from "packages/net/silentchaos512/gear/api/util/$IGearComponent"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$DataResource, $DataResource$Type} from "packages/net/silentchaos512/gear/api/util/$DataResource"
import {$TraitInstance, $TraitInstance$Type} from "packages/net/silentchaos512/gear/api/traits/$TraitInstance"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"

export interface $IGearComponentInstance<T extends $IGearComponent<(any)>> {

 "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): float
 "getStat"(arg0: $PartType$Type, arg1: $StatGearKey$Type): float
 "getNameColor"(arg0: $PartType$Type, arg1: $GearType$Type): integer
 "getHarvestTier"(): $Tier
 "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type, arg2: $ItemStack$Type): $Collection<($StatInstance)>
 "getStatModifiers"(arg0: $PartType$Type, arg1: $StatGearKey$Type): $Collection<($StatInstance)>
 "getTraits"(arg0: $PartType$Type, arg1: $GearType$Type, arg2: $ItemStack$Type): $Collection<($TraitInstance)>
 "getTraits"(arg0: $PartType$Type): $Collection<($TraitInstance)>
 "getTraits"(arg0: $PartGearKey$Type, arg1: $ItemStack$Type): $Collection<($TraitInstance)>
 "containsMaterial"(arg0: $DataResource$Type<($IMaterial$Type)>): boolean
 "getMaterials"(): $MaterialList
 "get"(): T
 "getId"(): $ResourceLocation
 "getDisplayName"(arg0: $PartType$Type): $Component
 "getDisplayName"(arg0: $PartType$Type, arg1: $ItemStack$Type): $Component
 "getItem"(): $ItemStack
}

export namespace $IGearComponentInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGearComponentInstance$Type<T> = ($IGearComponentInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGearComponentInstance_<T> = $IGearComponentInstance$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gems/item/container/$FlowerBasketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GemContainerItem, $GemContainerItem$Type} from "packages/net/silentchaos512/gems/item/container/$GemContainerItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlowerBasketItem extends $GemContainerItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getInventorySize"(arg0: $ItemStack$Type): integer
public "canStore"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerBasketItem$Type = ($FlowerBasketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowerBasketItem_ = $FlowerBasketItem$Type;
}}
declare module "packages/net/silentchaos512/gems/item/$GemBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GemBlockItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemBlockItem$Type = ($GemBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemBlockItem_ = $GemBlockItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$RepairKitItem" {
import {$RepairContext$Type, $RepairContext$Type$Type} from "packages/net/silentchaos512/gear/gear/part/$RepairContext$Type"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MaterialInstance, $MaterialInstance$Type} from "packages/net/silentchaos512/gear/gear/material/$MaterialInstance"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RepairKitItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(double)>, arg2: $Item$Properties$Type)

public "addMaterial"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getRepairEfficiency"(arg0: $RepairContext$Type$Type): float
public "getRepairMaterials"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $RepairContext$Type$Type): $Map<($MaterialInstance), (float)>
public "getDamageToRepair"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $RepairContext$Type$Type): integer
public "removeRepairMaterials"(arg0: $ItemStack$Type, arg1: $Map$Type<($MaterialInstance$Type), (float)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairKitItem$Type = ($RepairKitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairKitItem_ = $RepairKitItem$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/compounder/$CompoundingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CompoundingRecipe, $CompoundingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/compounder/$CompoundingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CompoundingRecipe$Serializer<T extends $CompoundingRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ResourceLocation$Type), (T)>)

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
export type $CompoundingRecipe$Serializer$Type<T> = ($CompoundingRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundingRecipe$Serializer_<T> = $CompoundingRecipe$Serializer$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/item/$ICoreItem" {
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IStatItem, $IStatItem$Type} from "packages/net/silentchaos512/gear/api/item/$IStatItem"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $ICoreItem extends $ItemLike, $IStatItem {

 "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
 "getGearType"(): $GearType
 "requiresPartOfType"(arg0: $PartType$Type): boolean
 "getAnimationFrames"(): integer
 "getDurabilityStat"(): $ItemStat
 "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getRequiredParts"(): $Collection<($PartType)>
 "isValidSlot"(arg0: string): boolean
 "getRepairModifier"(arg0: $ItemStack$Type): float
 "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasTexturesFor"(arg0: $PartType$Type): boolean
/**
 * 
 * @deprecated
 */
 "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
 "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
 "getRenderParts"(): $Collection<($PartType)>
 "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
 "construct"(arg0: $Collection$Type<(any)>): $ItemStack
 "asItem"(): $Item
 "getItemColors"(): $ItemColor
 "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
}

export namespace $ICoreItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICoreItem$Type = ($ICoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICoreItem_ = $ICoreItem$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearMacheteItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GearSwordItem, $GearSwordItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearSwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearMacheteItem extends $GearSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearMacheteItem$Type = ($GearMacheteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearMacheteItem_ = $GearMacheteItem$Type;
}}
declare module "packages/net/silentchaos512/gear/api/part/$PartType$Builder" {
import {$PartTextures, $PartTextures$Type} from "packages/net/silentchaos512/gear/client/model/$PartTextures"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$CompoundPartItem, $CompoundPartItem$Type} from "packages/net/silentchaos512/gear/item/$CompoundPartItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PartType$Builder {


public "defaultTexture"(arg0: $PartTextures$Type): $PartType$Builder
public "isRemovable"(arg0: boolean): $PartType$Builder
public "isUpgrade"(arg0: boolean): $PartType$Builder
public "maxPerItem"(arg0: $Function$Type<($GearType$Type), (integer)>): $PartType$Builder
public "maxPerItem"(arg0: integer): $PartType$Builder
public "compoundPartItem"(arg0: $Supplier$Type<($CompoundPartItem$Type)>): $PartType$Builder
public "compoundPartItem"(arg0: $Function$Type<($GearType$Type), ($Optional$Type<($CompoundPartItem$Type)>)>): $PartType$Builder
public static "builder"(arg0: $ResourceLocation$Type): $PartType$Builder
public "alias"(arg0: string): $PartType$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartType$Builder$Type = ($PartType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartType$Builder_ = $PartType$Builder$Type;
}}
declare module "packages/net/silentchaos512/gear/api/material/$IMaterialSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IMaterial, $IMaterial$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterial"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IMaterialSerializer<T extends $IMaterial> {

 "getName"(): $ResourceLocation
 "write"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "read"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
 "deserialize"(arg0: $ResourceLocation$Type, arg1: string, arg2: $JsonObject$Type): T
}

export namespace $IMaterialSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialSerializer$Type<T> = ($IMaterialSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialSerializer_<T> = $IMaterialSerializer$Type<(T)>;
}}
declare module "packages/net/silentchaos512/gear/api/item/$ICoreWeapon" {
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICoreTool, $ICoreTool$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreTool"

export interface $ICoreWeapon extends $ICoreTool {

 "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
 "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
 "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
 "getRequiredParts"(): $Collection<($PartType)>
 "isValidSlot"(arg0: string): boolean
 "hasTexturesFor"(arg0: $PartType$Type): boolean
 "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
 "getGearType"(): $GearType
 "requiresPartOfType"(arg0: $PartType$Type): boolean
 "getAnimationFrames"(): integer
 "getDurabilityStat"(): $ItemStat
 "getRepairModifier"(arg0: $ItemStack$Type): float
 "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
 "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
 "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
 "getRenderParts"(): $Collection<($PartType)>
 "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
 "construct"(arg0: $Collection$Type<(any)>): $ItemStack
 "asItem"(): $Item
 "getItemColors"(): $ItemColor
 "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer

(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
}

export namespace $ICoreWeapon {
const RELEVANT_STATS: $Set<($ItemStat)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICoreWeapon$Type = ($ICoreWeapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICoreWeapon_ = $ICoreWeapon$Type;
}}
declare module "packages/net/silentchaos512/gear/block/charger/$ChargerTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ChargedMaterialModifier$Type, $ChargedMaterialModifier$Type$Type} from "packages/net/silentchaos512/gear/gear/material/modifier/$ChargedMaterialModifier$Type"
import {$LockableSidedInventoryTileEntity, $LockableSidedInventoryTileEntity$Type} from "packages/net/silentchaos512/lib/tile/$LockableSidedInventoryTileEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$INamedContainerExtraData, $INamedContainerExtraData$Type} from "packages/net/silentchaos512/gear/block/$INamedContainerExtraData"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ChargerTileEntity extends $LockableSidedInventoryTileEntity implements $INamedContainerExtraData {
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $ChargedMaterialModifier$Type$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public static "createStarlightCharger"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $ChargerTileEntity
public "encodeExtraData"(arg0: $FriendlyByteBuf$Type): void
public static "getStarlightChargerCatalystTier"(arg0: $ItemStack$Type): integer
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ChargerTileEntity$Type): void
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "updateTag"(): $CompoundTag
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerTileEntity$Type = ($ChargerTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerTileEntity_ = $ChargerTileEntity$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearTridentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartData, $PartData$Type} from "packages/net/silentchaos512/gear/gear/part/$PartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TridentItem, $TridentItem$Type} from "packages/net/minecraft/world/item/$TridentItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StatInstance, $StatInstance$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$ICoreWeapon, $ICoreWeapon$Type} from "packages/net/silentchaos512/gear/api/item/$ICoreWeapon"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearTridentItem extends $TridentItem implements $ICoreWeapon {
static readonly "THROW_THRESHOLD_TIME": integer
static readonly "BASE_DAMAGE": float
static readonly "SHOOT_POWER": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "getGearType"(): $GearType
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getDamageOnHitEntity"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): integer
public "getRelevantStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getDamageOnBlockBreak"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): integer
public "getExcludedStats"(arg0: $ItemStack$Type): $Set<($ItemStat)>
public "getRequiredParts"(): $Collection<($PartType)>
public "isValidSlot"(arg0: string): boolean
public "hasTexturesFor"(arg0: $PartType$Type): boolean
public "getStat"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): float
public "requiresPartOfType"(arg0: $PartType$Type): boolean
public "getAnimationFrames"(): integer
public "getDurabilityStat"(): $ItemStat
public "getRepairModifier"(arg0: $ItemStack$Type): float
public "supportsPart"(arg0: $ItemStack$Type, arg1: $PartData$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBaseStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
/**
 * 
 * @deprecated
 */
public "getStatModifier"(arg0: $ItemStat$Type): $Optional<($StatInstance)>
public "getRenderParts"(): $Collection<($PartType)>
public "getAnimationFrame"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type): integer
public "construct"(arg0: $Collection$Type<(any)>): $ItemStack
public "getItemColors"(): $ItemColor
public "getStatInt"(arg0: $ItemStack$Type, arg1: $ItemStat$Type): integer
get "gearType"(): $GearType
get "requiredParts"(): $Collection<($PartType)>
get "animationFrames"(): integer
get "durabilityStat"(): $ItemStat
get "renderParts"(): $Collection<($PartType)>
get "itemColors"(): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearTridentItem$Type = ($GearTridentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearTridentItem_ = $GearTridentItem$Type;
}}
declare module "packages/net/silentchaos512/gems/util/$Gems" {
import {$GemLampBlock, $GemLampBlock$Type} from "packages/net/silentchaos512/gems/block/$GemLampBlock"
import {$GemItem, $GemItem$Type} from "packages/net/silentchaos512/gems/item/$GemItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GemOreBlock, $GemOreBlock$Type} from "packages/net/silentchaos512/gems/block/$GemOreBlock"
import {$OreConfigDefaults, $OreConfigDefaults$Type} from "packages/net/silentchaos512/gems/world/$OreConfigDefaults"
import {$GemGlassBlock, $GemGlassBlock$Type} from "packages/net/silentchaos512/gems/block/$GemGlassBlock"
import {$GlowroseBlock, $GlowroseBlock$Type} from "packages/net/silentchaos512/gems/block/$GlowroseBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GemBlock, $GemBlock$Type} from "packages/net/silentchaos512/gems/block/$GemBlock"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FlowerPotBlock, $FlowerPotBlock$Type} from "packages/net/minecraft/world/level/block/$FlowerPotBlock"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$GemLampBlock$State, $GemLampBlock$State$Type} from "packages/net/silentchaos512/gems/block/$GemLampBlock$State"

export class $Gems extends $Enum<($Gems)> {
static readonly "RUBY": $Gems
static readonly "CARNELIAN": $Gems
static readonly "TOPAZ": $Gems
static readonly "CITRINE": $Gems
static readonly "HELIODOR": $Gems
static readonly "MOLDAVITE": $Gems
static readonly "PERIDOT": $Gems
static readonly "TURQUOISE": $Gems
static readonly "KYANITE": $Gems
static readonly "SAPPHIRE": $Gems
static readonly "IOLITE": $Gems
static readonly "ALEXANDRITE": $Gems
static readonly "AMMOLITE": $Gems
static readonly "ROSE_QUARTZ": $Gems
static readonly "BLACK_DIAMOND": $Gems
static readonly "WHITE_DIAMOND": $Gems


public "getGlass"(): $GemGlassBlock
public "getGlowrose"(): $GlowroseBlock
public "getPottedGlowrose"(): $FlowerPotBlock
public "getColorArray"(): (float)[]
public "getOreConfigDefaults"(arg0: $ResourceKey$Type<($Level$Type)>): $OreConfigDefaults
public "getDeepslateOre"(): $GemOreBlock
public "getNetherOre"(): $GemOreBlock
public "getEndOre"(): $GemOreBlock
public "getBricks"(): $GemBlock
public "getTiles"(): $GemBlock
public "getSmallBricks"(): $GemBlock
public "getPolishedStone"(): $GemBlock
public "getSmoothStone"(): $GemBlock
public "getChiseledStone"(): $GemBlock
public "getLamp"(arg0: $GemLampBlock$State$Type): $GemLampBlock
/**
 * 
 * @deprecated
 */
public "getShard"(): $GemItem
public "getOreTag"(): $TagKey<($Block)>
public "getModOresTag"(): $TagKey<($Block)>
public "getGlowroseTag"(): $TagKey<($Block)>
public "getOreItemTag"(): $TagKey<($Item)>
public "getModOresItemTag"(): $TagKey<($Item)>
public "getGlowroseItemTag"(): $TagKey<($Item)>
public "getBlockTag"(): $TagKey<($Block)>
public "getBlockItemTag"(): $TagKey<($Item)>
public static "registerBlocks"(): void
public "getOre"(): $GemOreBlock
public "getRarity"(): $Rarity
public "getName"(): string
public static "values"(): ($Gems)[]
public static "valueOf"(arg0: string): $Gems
public "getDisplayName"(): $Component
public "getItem"(): $GemItem
public "getColor"(): integer
public static "registerItems"(): void
public "getItemTag"(): $TagKey<($Item)>
public "getBlock"(): $GemBlock
get "glass"(): $GemGlassBlock
get "glowrose"(): $GlowroseBlock
get "pottedGlowrose"(): $FlowerPotBlock
get "colorArray"(): (float)[]
get "deepslateOre"(): $GemOreBlock
get "netherOre"(): $GemOreBlock
get "endOre"(): $GemOreBlock
get "bricks"(): $GemBlock
get "tiles"(): $GemBlock
get "smallBricks"(): $GemBlock
get "polishedStone"(): $GemBlock
get "smoothStone"(): $GemBlock
get "chiseledStone"(): $GemBlock
get "shard"(): $GemItem
get "oreTag"(): $TagKey<($Block)>
get "modOresTag"(): $TagKey<($Block)>
get "glowroseTag"(): $TagKey<($Block)>
get "oreItemTag"(): $TagKey<($Item)>
get "modOresItemTag"(): $TagKey<($Item)>
get "glowroseItemTag"(): $TagKey<($Item)>
get "blockTag"(): $TagKey<($Block)>
get "blockItemTag"(): $TagKey<($Item)>
get "ore"(): $GemOreBlock
get "rarity"(): $Rarity
get "name"(): string
get "displayName"(): $Component
get "item"(): $GemItem
get "color"(): integer
get "itemTag"(): $TagKey<($Item)>
get "block"(): $GemBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gems$Type = (("kyanite") | ("white_diamond") | ("heliodor") | ("turquoise") | ("black_diamond") | ("rose_quartz") | ("ruby") | ("iolite") | ("citrine") | ("moldavite") | ("carnelian") | ("ammolite") | ("peridot") | ("topaz") | ("alexandrite") | ("sapphire")) | ($Gems);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gems_ = $Gems$Type;
}}
declare module "packages/net/silentchaos512/gear/api/util/$StatGearKey" {
import {$IItemStat, $IItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$IItemStat"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $StatGearKey {


public "getStat"(): $IItemStat
public "getGearType"(): $GearType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $IItemStat$Type, arg1: $GearType$Type): $StatGearKey
public "getParent"(): $StatGearKey
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $StatGearKey
public static "read"(arg0: string): $StatGearKey
get "stat"(): $IItemStat
get "gearType"(): $GearType
get "parent"(): $StatGearKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatGearKey$Type = ($StatGearKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatGearKey_ = $StatGearKey$Type;
}}
declare module "packages/net/silentchaos512/gear/item/$CompoundMaterialItem" {
import {$IMaterialInstance, $IMaterialInstance$Type} from "packages/net/silentchaos512/gear/api/material/$IMaterialInstance"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MaterialList, $MaterialList$Type} from "packages/net/silentchaos512/gear/api/material/$MaterialList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IColoredMaterialItem, $IColoredMaterialItem$Type} from "packages/net/silentchaos512/gear/item/$IColoredMaterialItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompoundMaterialItem extends $Item implements $IColoredMaterialItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getModelKey"(arg0: $ItemStack$Type): string
public "getCraftedCount"(arg0: $ItemStack$Type): integer
public "getColorWeight"(arg0: integer, arg1: integer): integer
public static "getSubMaterials"(arg0: $ItemStack$Type): $MaterialList
public "getPrimarySubMaterial"(arg0: $ItemStack$Type): $IMaterialInstance
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "create"(arg0: $MaterialList$Type, arg1: integer): $ItemStack
public "create"(arg0: $MaterialList$Type): $ItemStack
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundMaterialItem$Type = ($CompoundMaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundMaterialItem_ = $CompoundMaterialItem$Type;
}}
declare module "packages/net/silentchaos512/utils/$Color" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export class $Color {
static readonly "VALUE_WHITE": integer
static readonly "ALICEBLUE": $Color
static readonly "ANTIQUEWHITE": $Color
static readonly "AQUA": $Color
static readonly "AQUAMARINE": $Color
static readonly "AZURE": $Color
static readonly "BEIGE": $Color
static readonly "BISQUE": $Color
static readonly "BLACK": $Color
static readonly "BLANCHEDALMOND": $Color
static readonly "BLUE": $Color
static readonly "BLUEVIOLET": $Color
static readonly "BROWN": $Color
static readonly "BURLYWOOD": $Color
static readonly "CADETBLUE": $Color
static readonly "CHARTREUSE": $Color
static readonly "CHOCOLATE": $Color
static readonly "CORAL": $Color
static readonly "CORNFLOWERBLUE": $Color
static readonly "CORNSILK": $Color
static readonly "CRIMSON": $Color
static readonly "CYAN": $Color
static readonly "DARKBLUE": $Color
static readonly "DARKCYAN": $Color
static readonly "DARKGOLDENROD": $Color
static readonly "DARKGRAY": $Color
static readonly "DARKGREY": $Color
static readonly "DARKGREEN": $Color
static readonly "DARKKHAKI": $Color
static readonly "DARKMAGENTA": $Color
static readonly "DARKOLIVEGREEN": $Color
static readonly "DARKORANGE": $Color
static readonly "DARKORCHID": $Color
static readonly "DARKRED": $Color
static readonly "DARKSALMON": $Color
static readonly "DARKSEAGREEN": $Color
static readonly "DARKSLATEBLUE": $Color
static readonly "DARKSLATEGRAY": $Color
static readonly "DARKSLATEGREY": $Color
static readonly "DARKTURQUOISE": $Color
static readonly "DARKVIOLET": $Color
static readonly "DEEPPINK": $Color
static readonly "DEEPSKYBLUE": $Color
static readonly "DIMGRAY": $Color
static readonly "DIMGREY": $Color
static readonly "DODGERBLUE": $Color
static readonly "FIREBRICK": $Color
static readonly "FLORALWHITE": $Color
static readonly "FORESTGREEN": $Color
static readonly "FUCHSIA": $Color
static readonly "GAINSBORO": $Color
static readonly "GHOSTWHITE": $Color
static readonly "GOLD": $Color
static readonly "GOLDENROD": $Color
static readonly "GRAY": $Color
static readonly "GREY": $Color
static readonly "GREEN": $Color
static readonly "GREENYELLOW": $Color
static readonly "HONEYDEW": $Color
static readonly "HOTPINK": $Color
static readonly "INDIANRED": $Color
static readonly "INDIGO": $Color
static readonly "IVORY": $Color
static readonly "KHAKI": $Color
static readonly "LAVENDER": $Color
static readonly "LAVENDERBLUSH": $Color
static readonly "LAWNGREEN": $Color
static readonly "LEMONCHIFFON": $Color
static readonly "LIGHTBLUE": $Color
static readonly "LIGHTCORAL": $Color
static readonly "LIGHTCYAN": $Color
static readonly "LIGHTGOLDENRODYELLOW": $Color
static readonly "LIGHTGRAY": $Color
static readonly "LIGHTGREY": $Color
static readonly "LIGHTGREEN": $Color
static readonly "LIGHTPINK": $Color
static readonly "LIGHTSALMON": $Color
static readonly "LIGHTSEAGREEN": $Color
static readonly "LIGHTSKYBLUE": $Color
static readonly "LIGHTSLATEGRAY": $Color
static readonly "LIGHTSLATEGREY": $Color
static readonly "LIGHTSTEELBLUE": $Color
static readonly "LIGHTYELLOW": $Color
static readonly "LIME": $Color
static readonly "LIMEGREEN": $Color
static readonly "LINEN": $Color
static readonly "MAGENTA": $Color
static readonly "MAROON": $Color
static readonly "MEDIUMAQUAMARINE": $Color
static readonly "MEDIUMBLUE": $Color
static readonly "MEDIUMORCHID": $Color
static readonly "MEDIUMPURPLE": $Color
static readonly "MEDIUMSEAGREEN": $Color
static readonly "MEDIUMSLATEBLUE": $Color
static readonly "MEDIUMSPRINGGREEN": $Color
static readonly "MEDIUMTURQUOISE": $Color
static readonly "MEDIUMVIOLETRED": $Color
static readonly "MIDNIGHTBLUE": $Color
static readonly "MINTCREAM": $Color
static readonly "MISTYROSE": $Color
static readonly "MOCCASIN": $Color
static readonly "NAVAJOWHITE": $Color
static readonly "NAVY": $Color
static readonly "OLDLACE": $Color
static readonly "OLIVE": $Color
static readonly "OLIVEDRAB": $Color
static readonly "ORANGE": $Color
static readonly "ORANGERED": $Color
static readonly "ORCHID": $Color
static readonly "PALEGOLDENROD": $Color
static readonly "PALEGREEN": $Color
static readonly "PALETURQUOISE": $Color
static readonly "PALEVIOLETRED": $Color
static readonly "PAPAYAWHIP": $Color
static readonly "PEACHPUFF": $Color
static readonly "PERU": $Color
static readonly "PINK": $Color
static readonly "PLUM": $Color
static readonly "POWDERBLUE": $Color
static readonly "PURPLE": $Color
static readonly "REBECCAPURPLE": $Color
static readonly "RED": $Color
static readonly "ROSYBROWN": $Color
static readonly "ROYALBLUE": $Color
static readonly "SADDLEBROWN": $Color
static readonly "SALMON": $Color
static readonly "SANDYBROWN": $Color
static readonly "SEAGREEN": $Color
static readonly "SEASHELL": $Color
static readonly "SIENNA": $Color
static readonly "SILVER": $Color
static readonly "SKYBLUE": $Color
static readonly "SLATEBLUE": $Color
static readonly "SLATEGRAY": $Color
static readonly "SLATEGREY": $Color
static readonly "SNOW": $Color
static readonly "SPRINGGREEN": $Color
static readonly "STEELBLUE": $Color
static readonly "TAN": $Color
static readonly "TEAL": $Color
static readonly "THISTLE": $Color
static readonly "TOMATO": $Color
static readonly "TURQUOISE": $Color
static readonly "VIOLET": $Color
static readonly "WHEAT": $Color
static readonly "WHITE": $Color
static readonly "WHITESMOKE": $Color
static readonly "YELLOW": $Color
static readonly "YELLOWGREEN": $Color

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer)

public "getRed"(): float
public "getGreen"(): float
public "getBlue"(): float
public "blendWith"(arg0: $Color$Type): $Color
public "getRedInt"(): integer
public "getGreenInt"(): integer
public "getBlueInt"(): integer
public "getAlphaInt"(): integer
public static "blend"(arg0: $Color$Type, arg1: $Color$Type): $Color
public static "blend"(arg0: integer, arg1: integer, arg2: float): integer
public static "blend"(arg0: $Color$Type, arg1: $Color$Type, arg2: float): $Color
public static "blend"(arg0: integer, arg1: integer): integer
public static "format"(arg0: integer): string
public static "from"(arg0: $JsonObject$Type, arg1: string, arg2: integer): $Color
public static "validate"(arg0: string): boolean
public static "parseInt"(arg0: string): integer
public static "parse"(arg0: string): $Color
public static "tryParse"(arg0: string, arg1: integer): $Color
public "getColor"(): integer
public "getAlpha"(): float
get "red"(): float
get "green"(): float
get "blue"(): float
get "redInt"(): integer
get "greenInt"(): integer
get "blueInt"(): integer
get "alphaInt"(): integer
get "color"(): integer
get "alpha"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/net/silentchaos512/gear/api/traits/$ITraitCondition" {
import {$ITraitConditionSerializer, $ITraitConditionSerializer$Type} from "packages/net/silentchaos512/gear/api/traits/$ITraitConditionSerializer"
import {$PartGearKey, $PartGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$PartGearKey"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ITrait, $ITrait$Type} from "packages/net/silentchaos512/gear/api/traits/$ITrait"

export interface $ITraitCondition {

 "getDisplayText"(): $MutableComponent
 "getSerializer"(): $ITraitConditionSerializer<(any)>
 "matches"(arg0: $ITrait$Type, arg1: $PartGearKey$Type, arg2: $ItemStack$Type, arg3: $List$Type<(any)>): boolean
 "getId"(): $ResourceLocation
}

export namespace $ITraitCondition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraitCondition$Type = ($ITraitCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraitCondition_ = $ITraitCondition$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/smithing/$CoatingSmithingRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$GearSmithingRecipe, $GearSmithingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/smithing/$GearSmithingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CoatingSmithingRecipe extends $GearSmithingRecipe {
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoatingSmithingRecipe$Type = ($CoatingSmithingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoatingSmithingRecipe_ = $CoatingSmithingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/gear/$GearSawItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GearAxeItem, $GearAxeItem$Type} from "packages/net/silentchaos512/gear/item/gear/$GearAxeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GearSawItem extends $GearAxeItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $GearType$Type)

public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSawItem$Type = ($GearSawItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSawItem_ = $GearSawItem$Type;
}}
declare module "packages/net/silentchaos512/gems/item/$PetSummonerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Cat, $Cat$Type} from "packages/net/minecraft/world/entity/animal/$Cat"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Wolf, $Wolf$Type} from "packages/net/minecraft/world/entity/animal/$Wolf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PetSummonerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Function$Type<($Level$Type), (any)>, arg1: $Item$Properties$Type)

public static "getDog"(arg0: $Level$Type): $Wolf
public static "getCat"(arg0: $Level$Type): $Cat
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PetSummonerItem$Type = ($PetSummonerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PetSummonerItem_ = $PetSummonerItem$Type;
}}
declare module "packages/net/silentchaos512/gear/crafting/recipe/salvage/$GearSalvagingRecipe" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$SalvagingRecipe, $SalvagingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/salvage/$SalvagingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GearSalvagingRecipe extends $SalvagingRecipe {

constructor(arg0: $ResourceLocation$Type)

public "getPossibleResults"(arg0: $Container$Type): $List<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GearSalvagingRecipe$Type = ($GearSalvagingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GearSalvagingRecipe_ = $GearSalvagingRecipe$Type;
}}
declare module "packages/net/silentchaos512/gear/item/blueprint/$IBlueprint" {
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$GearType, $GearType$Type} from "packages/net/silentchaos512/gear/api/item/$GearType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBlueprint {

 "getPartType"(arg0: $ItemStack$Type): $PartType
 "getGearType"(arg0: $ItemStack$Type): $GearType
}

export namespace $IBlueprint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlueprint$Type = ($IBlueprint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlueprint_ = $IBlueprint$Type;
}}
declare module "packages/net/silentchaos512/gear/api/stats/$StatInstance" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$PartType, $PartType$Type} from "packages/net/silentchaos512/gear/api/part/$PartType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$StatInstance$Operation, $StatInstance$Operation$Type} from "packages/net/silentchaos512/gear/api/stats/$StatInstance$Operation"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StatGearKey, $StatGearKey$Type} from "packages/net/silentchaos512/gear/api/util/$StatGearKey"
import {$ItemStat, $ItemStat$Type} from "packages/net/silentchaos512/gear/api/stats/$ItemStat"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IGearPart, $IGearPart$Type} from "packages/net/silentchaos512/gear/api/part/$IGearPart"

export class $StatInstance {
static readonly "DEFAULT_KEY": $StatGearKey


public static "withSource"(arg0: float, arg1: $StatInstance$Operation$Type, arg2: $StatGearKey$Type, arg3: string): $StatInstance
/**
 * 
 * @deprecated
 */
public static "withSource"(arg0: float, arg1: $StatInstance$Operation$Type, arg2: string): $StatInstance
/**
 * 
 * @deprecated
 */
public static "withSource"(arg0: float, arg1: string): $StatInstance
public static "getWeightedAverageMod"(arg0: $Collection$Type<($StatInstance$Type)>, arg1: $StatInstance$Operation$Type): $StatInstance
public "getPreferredDecimalPlaces"(arg0: $ItemStat$Type, arg1: integer): integer
public static "getMaterialWeightedAverageMod"(arg0: $Collection$Type<($StatInstance$Type)>, arg1: $StatInstance$Operation$Type): $StatInstance
public "copySetValue"(arg0: float): $StatInstance
public "getOp"(): $StatInstance$Operation
public "shouldList"(arg0: $IGearPart$Type, arg1: $ItemStat$Type, arg2: boolean): boolean
public "shouldList"(arg0: $PartType$Type, arg1: $ItemStat$Type, arg2: boolean): boolean
public "toString"(): string
public "getValue"(): float
/**
 * 
 * @deprecated
 */
public static "of"(arg0: float): $StatInstance
/**
 * 
 * @deprecated
 */
public static "of"(arg0: float, arg1: $StatInstance$Operation$Type): $StatInstance
public static "of"(arg0: float, arg1: $StatInstance$Operation$Type, arg2: $StatGearKey$Type): $StatInstance
public "getKey"(): $StatGearKey
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $StatGearKey$Type, arg1: $FriendlyByteBuf$Type): $StatInstance
public static "read"(arg0: $StatGearKey$Type, arg1: $JsonElement$Type): $StatInstance
public "copy"(): $StatInstance
public "getSource"(): string
public "serialize"(): $JsonElement
public "getFormattedText"(arg0: $ItemStat$Type, arg1: integer, arg2: boolean): $MutableComponent
get "op"(): $StatInstance$Operation
get "value"(): float
get "key"(): $StatGearKey
get "source"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatInstance$Type = ($StatInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatInstance_ = $StatInstance$Type;
}}
declare module "packages/net/silentchaos512/gems/block/$IGemBlock" {
import {$IGem, $IGem$Type} from "packages/net/silentchaos512/gems/util/$IGem"
import {$Gems, $Gems$Type} from "packages/net/silentchaos512/gems/util/$Gems"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IGemBlock extends $IGem {

 "getGemBlockName"(): $MutableComponent
 "getGem"(): $Gems
}

export namespace $IGemBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGemBlock$Type = ($IGemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGemBlock_ = $IGemBlock$Type;
}}
declare module "packages/net/silentchaos512/gear/block/press/$MetalPressTileEntity" {
import {$LockableSidedInventoryTileEntity, $LockableSidedInventoryTileEntity$Type} from "packages/net/silentchaos512/lib/tile/$LockableSidedInventoryTileEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PressingRecipe, $PressingRecipe$Type} from "packages/net/silentchaos512/gear/crafting/recipe/press/$PressingRecipe"

export class $MetalPressTileEntity extends $LockableSidedInventoryTileEntity {
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getRecipe"(): $PressingRecipe
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $MetalPressTileEntity$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "recipe"(): $PressingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalPressTileEntity$Type = ($MetalPressTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalPressTileEntity_ = $MetalPressTileEntity$Type;
}}
declare module "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapedRecipe$Serializer" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ExtendedShapedRecipe, $ExtendedShapedRecipe$Type} from "packages/net/silentchaos512/lib/crafting/recipe/$ExtendedShapedRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExtendedShapedRecipe$Serializer<T extends $ExtendedShapedRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ShapedRecipe$Type), (T)>, arg1: $BiConsumer$Type<($JsonObject$Type), (T)>, arg2: $BiConsumer$Type<($FriendlyByteBuf$Type), (T)>, arg3: $BiConsumer$Type<($FriendlyByteBuf$Type), (T)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "basic"<S extends $ExtendedShapedRecipe>(arg0: $Function$Type<($ShapedRecipe$Type), (S)>): $ExtendedShapedRecipe$Serializer<(S)>
/**
 * 
 * @deprecated
 */
public static "basic"<S extends $ExtendedShapedRecipe>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ShapedRecipe$Type), (S)>): $ExtendedShapedRecipe$Serializer<(S)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedShapedRecipe$Serializer$Type<T> = ($ExtendedShapedRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedShapedRecipe$Serializer_<T> = $ExtendedShapedRecipe$Serializer$Type<(T)>;
}}
