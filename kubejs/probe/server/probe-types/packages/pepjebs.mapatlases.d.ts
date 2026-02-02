declare module "packages/pepjebs/mapatlases/map_collection/$IMapCollection" {
import {$Slice, $Slice$Type} from "packages/pepjebs/mapatlases/utils/$Slice"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TreeSet, $TreeSet$Type} from "packages/java/util/$TreeSet"
import {$MapDataHolder, $MapDataHolder$Type} from "packages/pepjebs/mapatlases/utils/$MapDataHolder"
import {$MapKey, $MapKey$Type} from "packages/pepjebs/mapatlases/map_collection/$MapKey"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapType, $MapType$Type} from "packages/pepjebs/mapatlases/utils/$MapType"

export interface $IMapCollection {

 "getAvailableDimensions"(): $Collection<($ResourceKey<($Level)>)>
 "getAvailableTypes"(arg0: $ResourceKey$Type<($Level$Type)>): $Collection<($MapType)>
 "getHeightTree"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $MapType$Type): $TreeSet<(integer)>
 "addNotSynced"(arg0: $Level$Type): void
 "getClosest"(arg0: double, arg1: double, arg2: $Slice$Type): $MapDataHolder
 "getClosest"(player: $Player$Type, slice: $Slice$Type): $MapDataHolder
 "selectSection"(arg0: $Slice$Type): $List<($MapDataHolder)>
 "hasId"(arg0: integer): boolean
 "hasOneSlice"(): boolean
 "getAllIds"(): (integer)[]
 "add"(arg0: integer, arg1: $Level$Type): boolean
 "remove"(arg0: $MapDataHolder$Type): boolean
 "isEmpty"(): boolean
 "getAll"(): $List<($MapDataHolder)>
 "getCount"(): integer
 "select"(arg0: $MapKey$Type): $MapDataHolder
 "select"(x: integer, z: integer, slice: $Slice$Type): $MapDataHolder
 "filterSection"(arg0: $Slice$Type, arg1: $Predicate$Type<($MapItemSavedData$Type)>): $List<($MapDataHolder)>
 "getScale"(): byte
}

export namespace $IMapCollection {
function get(stack: $ItemStack$Type, level: $Level$Type): $IMapCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapCollection$Type = ($IMapCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMapCollection_ = $IMapCollection$Type;
}}
declare module "packages/pepjebs/mapatlases/map_collection/$MapKey" {
import {$Slice, $Slice$Type} from "packages/pepjebs/mapatlases/utils/$Slice"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $MapKey extends $Record {

constructor(mapX: integer, mapZ: integer, slice: $Slice$Type)

public "mapZ"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "at"(scale: byte, player: $Player$Type, slice: $Slice$Type): $MapKey
public static "at"(scale: byte, px: double, pz: double, slice: $Slice$Type): $MapKey
public "slice"(): $Slice
public "isSameSlice"(slice: $Slice$Type): boolean
public "mapX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapKey$Type = ($MapKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapKey_ = $MapKey$Type;
}}
declare module "packages/pepjebs/mapatlases/recipe/$MapAtlasCreateRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MapAtlasCreateRecipe, $MapAtlasCreateRecipe$Type} from "packages/pepjebs/mapatlases/recipe/$MapAtlasCreateRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MapAtlasCreateRecipe$Serializer implements $RecipeSerializer<($MapAtlasCreateRecipe)> {

constructor()

public "fromNetwork"(pRecipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $MapAtlasCreateRecipe
public "toNetwork"(pBuffer: $FriendlyByteBuf$Type, pRecipe: $MapAtlasCreateRecipe$Type): void
public "fromJson"(pRecipeId: $ResourceLocation$Type, pSerializedRecipe: $JsonObject$Type): $MapAtlasCreateRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MapAtlasCreateRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapAtlasCreateRecipe$Serializer$Type = ($MapAtlasCreateRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapAtlasCreateRecipe$Serializer_ = $MapAtlasCreateRecipe$Serializer$Type;
}}
declare module "packages/pepjebs/mapatlases/utils/$Slice" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapType, $MapType$Type} from "packages/pepjebs/mapatlases/utils/$MapType"

export class $Slice {


public "getDiscoveryReach"(): integer
public "createNewMap"(destX: integer, destZ: integer, scale: byte, level: $Level$Type, atlas: $ItemStack$Type): $ItemStack
public "getMapString"(id: integer): string
public "heightOrTop"(): integer
public "hasMarkers"(): boolean
public "isSameGroup"(slice: $Slice$Type): boolean
public "dimension"(): $ResourceKey<($Level)>
public "type"(): $MapType
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(type: $MapType$Type, height: integer, dimension: $ResourceKey$Type<($Level$Type)>): $Slice
public "save"(): $CompoundTag
public static "parse"(t: $CompoundTag$Type, dimension: $ResourceKey$Type<($Level$Type)>): $Slice
public "height"(): integer
get "discoveryReach"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Slice$Type = ($Slice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Slice_ = $Slice$Type;
}}
declare module "packages/pepjebs/mapatlases/utils/$AtlasLectern" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AtlasLectern {

 "mapatlases$hasAtlas"(): boolean
 "mapatlases$removeAtlas"(): $ItemStack
 "mapatlases$setAtlas"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
}

export namespace $AtlasLectern {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtlasLectern$Type = ($AtlasLectern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtlasLectern_ = $AtlasLectern$Type;
}}
declare module "packages/pepjebs/mapatlases/utils/$MapDataHolder" {
import {$MapKey, $MapKey$Type} from "packages/pepjebs/mapatlases/map_collection/$MapKey"
import {$Slice, $Slice$Type} from "packages/pepjebs/mapatlases/utils/$Slice"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MapType, $MapType$Type} from "packages/pepjebs/mapatlases/utils/$MapType"

export class $MapDataHolder {
readonly "id": integer
readonly "stringId": string
readonly "data": $MapItemSavedData
readonly "slice": $Slice
readonly "type": $MapType
readonly "height": integer

constructor(name: string, data: $MapItemSavedData$Type)

public "updateMap"(player: $ServerPlayer$Type): void
public static "findFromId"(level: $Level$Type, id: integer): $MapDataHolder
public "createExistingMapItem"(): $ItemStack
public "equals"(o: any): boolean
public "hashCode"(): integer
public "makeKey"(): $MapKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDataHolder$Type = ($MapDataHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDataHolder_ = $MapDataHolder$Type;
}}
declare module "packages/pepjebs/mapatlases/mixin/$MapItemSavedDataAccessor" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MapDecoration$Type, $MapDecoration$Type$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MapBanner, $MapBanner$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapBanner"

export interface $MapItemSavedDataAccessor {

 "invokeAddDecoration"(arg0: $MapDecoration$Type$Type, arg1: $LevelAccessor$Type, arg2: string, arg3: double, arg4: double, arg5: double, arg6: $Component$Type): void
 "setCenterX"(arg0: integer): void
 "setCenterZ"(arg0: integer): void
 "setDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
 "getBannerMarkers"(): $Map<(string), ($MapBanner)>
 "invokeRemoveDecoration"(arg0: string): void
}

export namespace $MapItemSavedDataAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapItemSavedDataAccessor$Type = ($MapItemSavedDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapItemSavedDataAccessor_ = $MapItemSavedDataAccessor$Type;
}}
declare module "packages/pepjebs/mapatlases/utils/$AtlasCartographyTable" {
import {$Slice, $Slice$Type} from "packages/pepjebs/mapatlases/utils/$Slice"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AtlasCartographyTable {

 "mapatlases$setSelectedMapIndex"(arg0: integer): void
 "mapatlases$getSelectedMapIndex"(): integer
 "mapatlases$getSelectedSlice"(): $Slice
 "mapatlases$removeSelectedMap"(arg0: $ItemStack$Type): void
}

export namespace $AtlasCartographyTable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtlasCartographyTable$Type = ($AtlasCartographyTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtlasCartographyTable_ = $AtlasCartographyTable$Type;
}}
declare module "packages/pepjebs/mapatlases/utils/$MapType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$ColumnPos, $ColumnPos$Type} from "packages/net/minecraft/server/level/$ColumnPos"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MapType extends $Enum<($MapType)> {
static readonly "VANILLA": $MapType
static readonly "MAGIC": $MapType
static readonly "MAZE": $MapType
static readonly "ORE_MAZE": $MapType
readonly "filled": $Item
readonly "empty": $Item
readonly "translationKey": string


public "getDiscoveryReach"(height: integer): integer
public "makeStringKey"(id: integer): string
public "createNewMapItem"(destX: integer, destZ: integer, scale: byte, level: $Level$Type, height: integer, atlas: $ItemStack$Type): $ItemStack
public static "fromItem"(item: $Item$Type): $MapType
public "getCenter"(px: double, pz: double, scale: integer): $ColumnPos
public "hasMarkers"(): boolean
public "getMapData"(level: $Level$Type, id: integer): $Pair<(string), ($MapItemSavedData)>
public "getDefaultZoomFactor"(): float
public "createExistingMapItem"(id: integer, height: integer): $ItemStack
public "getName"(): $Component
public static "values"(): ($MapType)[]
public static "valueOf"(name: string): $MapType
public static "fromKey"(mapString: string, data: $MapItemSavedData$Type): $MapType
public "findKey"(s: string): integer
public static "isEmptyMap"(i: $Item$Type): boolean
public "getHeight"(data: $MapItemSavedData$Type): integer
get "defaultZoomFactor"(): float
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapType$Type = (("magic") | ("maze") | ("ore_maze") | ("vanilla")) | ($MapType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapType_ = $MapType$Type;
}}
declare module "packages/pepjebs/mapatlases/recipe/$MapAtlasCreateRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $MapAtlasCreateRecipe extends $CustomRecipe {

constructor(id: $ResourceLocation$Type, category: $CraftingBookCategory$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>)

public "assemble"(inv: $CraftingContainer$Type, registryManager: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "matches"(inv: $CraftingContainer$Type, level: $Level$Type): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapAtlasCreateRecipe$Type = ($MapAtlasCreateRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapAtlasCreateRecipe_ = $MapAtlasCreateRecipe$Type;
}}
declare module "packages/pepjebs/mapatlases/item/$MapAtlasItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Slice, $Slice$Type} from "packages/pepjebs/mapatlases/utils/$Slice"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IMapCollection, $IMapCollection$Type} from "packages/pepjebs/mapatlases/map_collection/$IMapCollection"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MapAtlasItem extends $Item {
static readonly "HEIGHT_NBT": string
static readonly "TYPE_NBT": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(settings: $Item$Properties$Type)

public static "removeMap"(atlas: $ItemStack$Type, mapId: integer, player: $ServerPlayer$Type): void
public static "getMaxMapCount"(): integer
public static "getSelectedSlice"(stack: $ItemStack$Type, dimension: $ResourceKey$Type<($Level$Type)>): $Slice
public static "setSelectedSlice"(stack: $ItemStack$Type, slice: $Slice$Type): void
public "onCraftedBy"(stack: $ItemStack$Type, level: $Level$Type, pPlayer: $Player$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public static "syncAndOpenGui"(player: $ServerPlayer$Type, atlas: $ItemStack$Type, lecternPos: $BlockPos$Type, pinOnly: boolean): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getShareTag"(stack: $ItemStack$Type): $CompoundTag
public "readShareTag"(stack: $ItemStack$Type, tag: $CompoundTag$Type): void
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
public static "getMaps"(stack: $ItemStack$Type, level: $Level$Type): $IMapCollection
public static "increaseEmptyMaps"(stack: $ItemStack$Type, count: integer): void
public static "getEmptyMaps"(atlas: $ItemStack$Type): integer
public static "setEmptyMaps"(stack: $ItemStack$Type, count: integer): void
public static "isLocked"(stack: $ItemStack$Type): boolean
get "maxMapCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapAtlasItem$Type = ($MapAtlasItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapAtlasItem_ = $MapAtlasItem$Type;
}}
