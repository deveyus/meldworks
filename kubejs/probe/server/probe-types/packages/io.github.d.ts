declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$ILastHand" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export interface $ILastHand {

 "setLastSwungHand"(arg0: $InteractionHand$Type): void
 "lastSwungHand"(): $InteractionHand
}

export namespace $ILastHand {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILastHand$Type = ($ILastHand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILastHand_ = $ILastHand$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer" {
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $MoneyViewer implements $IMoneyViewer {

constructor()

public "getStoredMoney"(): $MoneyView
get "storedMoney"(): $MoneyView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyViewer$Type = ($MoneyViewer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyViewer_ = $MoneyViewer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$TallRotatableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITallBlock, $ITallBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ITallBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TallRotatableBlock extends $RotatableBlock implements $ITallBlock {
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


public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getIsTop"(arg0: $BlockState$Type): boolean
public "getIsBottom"(arg0: $BlockState$Type): boolean
public "getOtherHeight"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallRotatableBlock$Type = ($TallRotatableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TallRotatableBlock_ = $TallRotatableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IBookTraderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ITraderBlock, $ITraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBookTraderBlock extends $ITraderBlock {

 "GetBookRenderPos"(arg0: integer, arg1: $BlockState$Type): $Vector3f
 "GetBookRenderRot"(arg0: integer, arg1: $BlockState$Type): $List<($Quaternionf)>
 "maxRenderIndex"(): integer
 "GetBookRenderScale"(arg0: integer, arg1: $BlockState$Type): float
 "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity
 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
 "getCapabilityBlockPos"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockPos
}

export namespace $IBookTraderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBookTraderBlock$Type = ($IBookTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBookTraderBlock_ = $IBookTraderBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$GachaBallItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GachaBallItem extends $Item {
static readonly "MAX_INCEPTION_LEVEL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "createWithItem"(arg0: $ItemStack$Type, arg1: $RandomSource$Type): $ItemStack
public static "createWithItem"(arg0: $ItemStack$Type): $ItemStack
public static "createWithItemAndColor"(arg0: $ItemStack$Type, arg1: $Color$Type): $ItemStack
public static "createWithItemAndColor"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public static "inceptionLevel"(arg0: $ItemStack$Type): integer
public static "makeEmptyCopy"(arg0: $ItemStack$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canFitInsideContainerItems"(): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "getContents"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GachaBallItem$Type = ($GachaBallItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GachaBallItem_ = $GachaBallItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blockentity/$EasyBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EasyBlockEntity extends $BlockEntity implements $IClientTracker, $IVariantDataStorage {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCurrentVariant"(): $ResourceLocation
public "isVariantLocked"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setVariant"(arg0: $ResourceLocation$Type, arg1: boolean): void
public "isClient"(): boolean
public "onLoad"(): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
/**
 * 
 * @deprecated
 */
public static "get"(arg0: $BlockEntity$Type): $IVariantDataStorage
public static "get"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IVariantDataStorage
public static "get"(arg0: $LootContext$Type): $IVariantDataStorage
public "setVariant"(arg0: $ResourceLocation$Type): void
get "currentVariant"(): $ResourceLocation
get "variantLocked"(): boolean
get "updateTag"(): $CompoundTag
get "client"(): boolean
get "server"(): boolean
set "variant"(value: $ResourceLocation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyBlockEntity$Type = ($EasyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyBlockEntity_ = $EasyBlockEntity$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$CardDisplayBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CardDisplayBlock extends $TraderBlockRotatable implements $IItemTraderBlock, $IVariantBlock {
static readonly "TRADECOUNT": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: string, arg2: $Color$Type)

public "traderType"(): $BlockEntityType<(any)>
public "validTraderTypes"(): $List<($BlockEntityType<(any)>)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDescriptionId"(): string
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "descriptionId"(): string
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CardDisplayBlock$Type = ($CardDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardDisplayBlock_ = $CardDisplayBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/client/$TradeRenderManager" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$DisplayEntry, $DisplayEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayEntry"
import {$AlertData, $AlertData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertData"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$DisplayData, $DisplayData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayData"
import {$EasyWidget, $EasyWidget$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"

export class $TradeRenderManager<T extends $TradeData> {
readonly "trade": T


public static "intialize"(): void
public "renderAdditional"(arg0: $EasyWidget$Type, arg1: $EasyGuiGraphics$Type, arg2: $TradeContext$Type): void
public "getGhostSlots"(arg0: $TradeContext$Type, arg1: $ITraderStorageMenu$Type, arg2: $ScreenPosition$Type): $List<($GhostSlot<(any)>)>
public static "getTradeRenderer"(arg0: $TradeData$Type): $TradeRenderManager<(any)>
public "tradeButtonWidth"(arg0: $TradeContext$Type): integer
public "arrowPosition"(arg0: $TradeContext$Type): $Optional<($ScreenPosition)>
public "alertPosition"(arg0: $TradeContext$Type): $ScreenPosition
public "inputDisplayArea"(arg0: $TradeContext$Type): $DisplayData
public "getInputDisplays"(arg0: $TradeContext$Type): $List<($DisplayEntry)>
public "outputDisplayArea"(arg0: $TradeContext$Type): $DisplayData
public "getOutputDisplays"(arg0: $TradeContext$Type): $List<($DisplayEntry)>
public "getAlertData"(arg0: $TradeContext$Type): $List<($AlertData)>
public "getAdditionalTooltips"(arg0: $TradeContext$Type, arg1: integer, arg2: integer): $List<($Component)>
public "getStockTooltip"(arg0: boolean, arg1: integer): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRenderManager$Type<T> = ($TradeRenderManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRenderManager_<T> = $TradeRenderManager$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/$ISidedObject" {
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISidedObject extends $IClientTracker {

 "flagAsClient"(): any
 "flagAsClient"(arg0: boolean): any
 "flagAsClient"(arg0: $IClientTracker$Type): any
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ISidedObject {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedObject$Type = ($ISidedObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedObject_ = $ISidedObject$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable" {
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $UpgradeData$Mutable {


public "setFloatValue"(arg0: string, arg1: float): void
public "hasBoolValue"(arg0: string): boolean
public "hasLongValue"(arg0: string): boolean
public "setIntValue"(arg0: string, arg1: integer): void
public "setCompoundValue"(arg0: string, arg1: $CompoundTag$Type): void
public "hasCompoundValue"(arg0: string): boolean
public "getCompoundValue"(arg0: string): $CompoundTag
public "hasDoubleValue"(arg0: string): boolean
public "hasFloatValue"(arg0: string): boolean
public "hasIntValue"(arg0: string): boolean
public "getFloatValue"(arg0: string): float
public "setLongValue"(arg0: string, arg1: long): void
public "setDoubleValue"(arg0: string, arg1: double): void
public "setBooleanValue"(arg0: string, arg1: boolean): void
public "setStringValue"(arg0: string, arg1: string): void
public "getLongValue"(arg0: string): long
public "getStringValue"(arg0: string): string
public "hasStringValue"(arg0: string): boolean
public "getDoubleValue"(arg0: string): double
public "merge"(arg0: $UpgradeData$Type): void
public "makeImmutable"(): $UpgradeData
public "getBooleanValue"(arg0: string): boolean
public "getIntValue"(arg0: string): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$Mutable$Type = ($UpgradeData$Mutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData$Mutable_ = $UpgradeData$Mutable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/pretty/$PrettyTextData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"

export class $PrettyTextData extends $Record {

constructor(machineName: $Component$Type, lines: $List$Type<($Component$Type)>)

public "machineName"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "lines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrettyTextData$Type = ($PrettyTextData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrettyTextData_ = $PrettyTextData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable" {
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IUpgradeable {

 "getUpgrades"(): $Container
 "allowUpgrade"(arg0: $UpgradeItem$Type): boolean
 "allowUpgrade"(arg0: $UpgradeType$Type): boolean
 "quickInsertUpgrade"(arg0: $ItemStack$Type): boolean
}

export namespace $IUpgradeable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeable$Type = ($IUpgradeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeable_ = $IUpgradeable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab" {
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$EasyMenuClientTab, $EasyMenuClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyMenuClientTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$IEasyTabbedMenuScreen, $IEasyTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $TraderStorageClientTab<T extends $TraderStorageTab> extends $EasyMenuClientTab<(T), ($ITraderStorageMenu), ($TraderStorageTab), ($ITraderStorageScreen), ($TraderStorageClientTab<(T)>)> {
readonly "screen": S
readonly "menu": M
readonly "commonTab": X


public "shouldRenderInventoryText"(): boolean
public "showRightEdgeButtons"(): boolean
public "receiveServerMessage"(arg0: $LazyPacketData$Type): void
public "getTradeRuleTradeIndex"(): integer
get "tradeRuleTradeIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderStorageClientTab$Type<T> = ($TraderStorageClientTab<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderStorageClientTab_<T> = $TraderStorageClientTab$Type<(T)>;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FlashMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FlashMode extends $Enum<($FlashMode)> implements $StringRepresentable {
static readonly "OFF": $FlashMode
static readonly "ON": $FlashMode
static readonly "AUTO": $FlashMode


public static "byIdOrOff"(id: string): $FlashMode
public static "values"(): ($FlashMode)[]
public static "valueOf"(name: string): $FlashMode
public "getId"(): string
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $FlashMode
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public "translate"(): $Component
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "id"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlashMode$Type = (("auto") | ("off") | ("on")) | ($FlashMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlashMode_ = $FlashMode$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $ITraderSource {

 "getTraders"(): $List<($TraderData)>
 "showSearchBox"(): boolean
 "isSingleTrader"(): boolean
 "getSingleTrader"(): $TraderData
 "getCustomTitle"(): $Component
}

export namespace $ITraderSource {
const CLIENT_TRADER_SOURCE: $ITraderSource
const SERVER_TRADER_SOURCE: $ITraderSource
function NetworkTraderSource(arg0: boolean): $Supplier<($ITraderSource)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderSource$Type = ($ITraderSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderSource_ = $ITraderSource$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/tab/$ITab" {
import {$FixedSizeSprite, $FixedSizeSprite$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/sprites/$FixedSizeSprite"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$WidgetRotation, $WidgetRotation$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$WidgetRotation"

export interface $ITab {

 "getTooltip"(): $Component
 "getIcon"(): $IconData
 "getSprite"(): $Function<($WidgetRotation), ($FixedSizeSprite)>
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
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$IClipContxt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IClipContxt {

 "checkSeeThrough"(): void

(): void
}

export namespace $IClipContxt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClipContxt$Type = ($IClipContxt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClipContxt_ = $IClipContxt$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$WalletItem$Colored" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WalletItem, $WalletItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$WalletItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SoundEntry, $SoundEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/data/$SoundEntry"

export class $WalletItem$Colored extends $WalletItem implements $DyeableLeatherItem {
static readonly "MAX_WALLET_SLOTS": integer
static readonly "SLOTS_PER_UPGRADE": integer
static readonly "DEFAULT_UPGRADE_LIMIT": integer
static readonly "DEFAULT_COIN_COLLECT_SOUND": $ResourceLocation
readonly "bonusMagnet": integer
readonly "indestructible": boolean
readonly "model": $ResourceLocation
readonly "upgradeLimit": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: integer, arg1: $ResourceLocation$Type, arg2: $Item$Properties$Type)
constructor(arg0: integer, arg1: $ResourceLocation$Type, arg2: boolean, arg3: integer, arg4: integer, arg5: $List$Type<($SoundEntry$Type)>, arg6: $Item$Properties$Type)

public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletItem$Colored$Type = ($WalletItem$Colored);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletItem$Colored_ = $WalletItem$Colored$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/text/$MultiLineTextEntry" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$NotificationType, $NotificationType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MultiLineTextEntry {

constructor(arg0: string)

public "getWithStyle"(arg0: $ChatFormatting$Type, ...arg1: (any)[]): $List<($Component)>
public "getWithStyle"(arg0: $Consumer$Type<($MutableComponent$Type)>, ...arg1: (any)[]): $List<($Component)>
public "asTooltip"(...arg0: (any)[]): $Supplier<($List<($Component)>)>
public "asSupplier"(...arg0: (any)[]): $Supplier<($List<($Component)>)>
public static "notification"(arg0: $NotificationType$Type<(any)>): $MultiLineTextEntry
public static "notification"(arg0: $ResourceLocation$Type): $MultiLineTextEntry
public "get"(...arg0: (any)[]): $List<($Component)>
public "getKey"(arg0: integer): string
public static "message"(arg0: string, arg1: string): $MultiLineTextEntry
public static "tooltip"(arg0: string, arg1: string): $MultiLineTextEntry
public "tooltip"(arg0: $List$Type<($Component$Type)>, ...arg1: (any)[]): void
public static "gui"(arg0: string, arg1: string): $MultiLineTextEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiLineTextEntry$Type = ($MultiLineTextEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiLineTextEntry_ = $MultiLineTextEntry$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$VendingMachineBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VendingMachineBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock, $IVariantBlock {
static readonly "TRADECOUNT": integer
static readonly "TYPE": $ResourceLocation
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

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VendingMachineBlock$Type = ($VendingMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VendingMachineBlock_ = $VendingMachineBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export interface $IEasyTabbedMenuScreen<X extends $IEasyTabbedMenu<(T)>, T extends $EasyMenuTab<(X), (T)>, S extends $IEasyTabbedMenuScreen<(X), (T), (S)>> extends $IEasyScreen {

 "getMenuInterface"(): X
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Type, arg2: boolean): void
 "ChangeTab"(arg0: integer): void
 "getCurrentTabIndex"(): integer
 "getCorner"(): $ScreenPosition
 "getArea"(): $ScreenArea
 "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
 "removeChild"(arg0: any): void
 "builder"(): $LazyPacketData$Builder
 "addChild"<W>(arg0: W): W
 "getFont"(): $Font
 "getPlayer"(): $Player
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "getXSize"(): integer
 "getYSize"(): integer
 "getGhostSlots"(): $List<($GhostSlot<(any)>)>
 "blockInventoryClosing"(): boolean
 "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
}

export namespace $IEasyTabbedMenuScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyTabbedMenuScreen$Type<X, T, S> = ($IEasyTabbedMenuScreen<(X), (T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyTabbedMenuScreen_<X, T, S> = $IEasyTabbedMenuScreen$Type<(X), (T), (S)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$FixedSizeSprite, $FixedSizeSprite$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/sprites/$FixedSizeSprite"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenEvent$Render, $ScreenEvent$Render$Type} from "packages/net/minecraftforge/client/event/$ScreenEvent$Render"
import {$ContainerScreenEvent$Render, $ContainerScreenEvent$Render$Type} from "packages/net/minecraftforge/client/event/$ContainerScreenEvent$Render"
import {$SpriteSource, $SpriteSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/sprites/$SpriteSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $EasyGuiGraphics {
readonly "font": $Font
readonly "mousePos": $ScreenPosition
readonly "partialTicks": float


public "drawWordWrap"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawWordWrap"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "TranslateToForeground"(): void
public "renderItemModel"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): void
public "renderItemModel"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $ItemStack$Type): void
public "pushOffsetZero"(): $EasyGuiGraphics
public "renderButtonBG"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: integer, arg6: integer): void
public "renderButtonBG"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: integer): void
public "popPose"(): void
public "getGui"(): $GuiGraphics
public "getPose"(): $PoseStack
public "resetColor"(): void
public "fill"(arg0: $ScreenArea$Type, arg1: integer): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "fill"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer, arg3: integer): void
public static "create"(arg0: $GuiGraphics$Type, arg1: $Font$Type, arg2: integer, arg3: integer, arg4: float): $EasyGuiGraphics
public static "create"(arg0: $ScreenEvent$Render$Type): $EasyGuiGraphics
public static "create"(arg0: $ContainerScreenEvent$Render$Type): $EasyGuiGraphics
public static "create"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): $EasyGuiGraphics
public "getOffset"(): $ScreenPosition
public "setColor"(arg0: integer, arg1: float): void
public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setColor"(arg0: $Vector4f$Type): void
public "setColor"(arg0: integer): void
public "setColor"(arg0: float, arg1: float, arg2: float): void
public "renderItem"(arg0: $ItemStack$Type, arg1: $ScreenPosition$Type, arg2: string): void
public "renderItem"(arg0: $ItemStack$Type, arg1: $ScreenPosition$Type): void
public "renderItem"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: string): void
public "renderItem"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "pushPose"(): $EasyGuiGraphics
public "blitSpriteFadeHoriz"(arg0: $SpriteSource$Type, arg1: $ScreenPosition$Type, arg2: float): void
public "blitSpriteFadeHoriz"(arg0: $SpriteSource$Type, arg1: integer, arg2: integer, arg3: float): void
public "drawString"(arg0: $Component$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: integer, arg2: integer, arg3: integer): void
public "drawString"(arg0: string, arg1: integer, arg2: integer, arg3: integer): void
public "drawString"(arg0: string, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawString"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: integer): void
public "drawString"(arg0: $FormattedCharSequence$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "enableScissor"(arg0: $ScreenArea$Type): void
public "enableScissor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "disableScissor"(): void
public "renderTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>, arg1: integer, arg2: integer): void
public "renderTooltip"(arg0: $Component$Type): void
public "renderTooltip"(arg0: $Component$Type, arg1: integer, arg2: integer): void
public "renderTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>): void
public "renderTooltip"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "renderTooltip"(arg0: $ItemStack$Type): void
public "renderComponentTooltip"(arg0: $List$Type<($Component$Type)>, arg1: integer, arg2: integer): void
public "renderComponentTooltip"(arg0: $List$Type<($Component$Type)>): void
public "blit"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "blit"(arg0: $ResourceLocation$Type, arg1: $ScreenArea$Type, arg2: integer, arg3: integer): void
public "blit"(arg0: $ResourceLocation$Type, arg1: $ScreenPosition$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "blit"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blit"(arg0: $ResourceLocation$Type, arg1: $ScreenArea$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "blit"(arg0: $ResourceLocation$Type, arg1: $ScreenPosition$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "renderSlotHighlight"(arg0: integer, arg1: integer): void
public "renderSlotHighlight"(arg0: $ScreenPosition$Type): void
public "pushOffset"(arg0: $AbstractWidget$Type): $EasyGuiGraphics
public "pushOffset"(arg0: $ScreenPosition$Type): $EasyGuiGraphics
public "drawScrollingString"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawScrollingString"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawScrollingString"(arg0: string, arg1: $ScreenArea$Type, arg2: integer): void
public "drawScrollingString"(arg0: $Component$Type, arg1: $ScreenArea$Type, arg2: integer): void
public "renderNormalBackground"(arg0: $IEasyScreen$Type): void
public "renderNormalBackground"(arg0: $ResourceLocation$Type, arg1: $IEasyScreen$Type): void
public "renderNormalBackground"(arg0: $ResourceLocation$Type, arg1: $IEasyScreen$Type, arg2: integer): void
public "drawShadowed"(arg0: $Component$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawShadowed"(arg0: string, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawShadowed"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: integer): void
public "drawShadowed"(arg0: string, arg1: integer, arg2: integer, arg3: integer): void
public "drawShadowed"(arg0: $FormattedCharSequence$Type, arg1: $ScreenPosition$Type, arg2: integer): void
public "drawShadowed"(arg0: $FormattedCharSequence$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderSlotBackground"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg1: $ScreenPosition$Type): void
public "renderSlotBackground"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg1: integer, arg2: integer): void
public "popOffset"(): $EasyGuiGraphics
public "renderScaledItem"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: float): void
public "renderScaledItem"(arg0: $ItemStack$Type, arg1: $ScreenPosition$Type, arg2: float): void
public "renderSlot"(arg0: $IEasyScreen$Type, arg1: integer, arg2: integer): void
public "renderSlot"(arg0: $IEasyScreen$Type, arg1: $Slot$Type): void
public "renderSlot"(arg0: $IEasyScreen$Type, arg1: $ScreenPosition$Type, arg2: $FixedSizeSprite$Type): void
public "renderSlot"(arg0: $IEasyScreen$Type, arg1: integer, arg2: integer, arg3: $FixedSizeSprite$Type): void
public "renderSlot"(arg0: $IEasyScreen$Type, arg1: $ScreenPosition$Type): void
get "gui"(): $GuiGraphics
get "pose"(): $PoseStack
get "offset"(): $ScreenPosition
set "color"(value: $Vector4f$Type)
set "color"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyGuiGraphics$Type = ($EasyGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyGuiGraphics_ = $EasyGuiGraphics$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"

export class $TradeEvent extends $Event {

constructor()

public "getTrade"(): $TradeData
public "hasPlayerReference"(): boolean
public "getTradeStock"(): integer
public "getPlayerReference"(): $PlayerReference
public "getTradeIndex"(): integer
public "getTrader"(): $TraderData
public "getContext"(): $TradeContext
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
get "trade"(): $TradeData
get "tradeStock"(): integer
get "playerReference"(): $PlayerReference
get "tradeIndex"(): integer
get "trader"(): $TraderData
get "context"(): $TradeContext
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$Type = ($TradeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent_ = $TradeEvent$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PostTradeEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TradeEvent, $TradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent"

export class $TradeEvent$PostTradeEvent extends $TradeEvent {

constructor()
constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type, arg3: $MoneyValue$Type)
constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type, arg3: $MoneyValue$Type, arg4: $List$Type<(any)>)

public "getTaxesPaid"(): $MoneyValue
public "getProduct"(): $List<(any)>
public "getPricePaid"(): $MoneyValue
public "markDirty"(): void
public "clean"(): void
public "isDirty"(): boolean
public "getListenerList"(): $ListenerList
get "taxesPaid"(): $MoneyValue
get "product"(): $List<(any)>
get "pricePaid"(): $MoneyValue
get "dirty"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$PostTradeEvent$Type = ($TradeEvent$PostTradeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent$PostTradeEvent_ = $TradeEvent$PostTradeEvent$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$PoseStackExt" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackExt {

 "pushPose"(arg0: $PoseStack$Pose$Type): void

(stack: $PoseStack$Type, pose: $PoseStack$Pose$Type): void
}

export namespace $PoseStackExt {
function pushPose(stack: $PoseStack$Type, pose: $PoseStack$Pose$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackExt$Type = ($PoseStackExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackExt_ = $PoseStackExt$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LazyPacketData$IBuilderProvider, $LazyPacketData$IBuilderProvider$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$IBuilderProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export interface $IEasyScreen extends $LazyPacketData$IBuilderProvider {

 "getCorner"(): $ScreenPosition
 "getArea"(): $ScreenArea
 "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
 "removeChild"(arg0: any): void
 "builder"(): $LazyPacketData$Builder
 "addChild"<W>(arg0: W): W
 "getFont"(): $Font
 "getPlayer"(): $Player
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "getXSize"(): integer
 "getYSize"(): integer
 "getGhostSlots"(): $List<($GhostSlot<(any)>)>
 "blockInventoryClosing"(): boolean
 "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
}

export namespace $IEasyScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyScreen$Type = ($IEasyScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyScreen_ = $IEasyScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/trader/$TraderClientTab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$TraderMenu, $TraderMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderMenu"
import {$EasyClientTab$Unenforced, $EasyClientTab$Unenforced$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab$Unenforced"
import {$EasyClientTab$ClientMenuScreen, $EasyClientTab$ClientMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab$ClientMenuScreen"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$TraderScreen, $TraderScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderScreen"

export class $TraderClientTab extends $EasyClientTab$Unenforced<($TraderMenu), ($TraderScreen), ($TraderClientTab)> {
readonly "screen": S
readonly "menu": M


public "getTooltip"(): $Component
public "getIcon"(): $IconData
get "tooltip"(): $Component
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderClientTab$Type = ($TraderClientTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderClientTab_ = $TraderClientTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertType" {
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $AlertType {
static readonly "HELPFUL": $AlertType
static readonly "NEUTRAL": $AlertType
static readonly "WARN": $AlertType
static readonly "ERROR": $AlertType
static readonly "INVISIBLE": $AlertType
readonly "priority": integer
readonly "color": integer
readonly "hoverColor": integer
readonly "alpha": float
readonly "format": $UnaryOperator<($Style)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: $UnaryOperator$Type<($Style$Type)>)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $UnaryOperator$Type<($Style$Type)>)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $ChatFormatting$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlertType$Type = ($AlertType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlertType_ = $AlertType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$IconData$Type, $IconData$Type$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData$Type"

export class $IconData {


public static "safeLoad"(arg0: $CompoundTag$Type, arg1: $IconData$Type): $IconData
public static "load"(arg0: $CompoundTag$Type): $IconData
public "write"(): $JsonObject
public "save"(): $CompoundTag
public "isNull"(): boolean
public static "Null"(): $IconData
public static "parse"(arg0: $JsonObject$Type): $IconData
public "render"(arg0: $EasyGuiGraphics$Type, arg1: integer, arg2: integer): void
public "render"(arg0: $EasyGuiGraphics$Type, arg1: $ScreenPosition$Type): void
public static "registerDefaultIcons"(): void
public static "registerIconType"(arg0: $IconData$Type$Type): void
get "null"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconData$Type = ($IconData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconData_ = $IconData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $TradeDirection extends $Enum<($TradeDirection)> {
static readonly "SALE": $TradeDirection
static readonly "PURCHASE": $TradeDirection
static readonly "BARTER": $TradeDirection
static readonly "OTHER": $TradeDirection
readonly "index": integer


public "getActionPhrase"(): $MutableComponent
public "getName"(): $MutableComponent
public static "values"(): ($TradeDirection)[]
public static "valueOf"(arg0: string): $TradeDirection
public static "fromIndex"(arg0: integer): $TradeDirection
get "actionPhrase"(): $MutableComponent
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeDirection$Type = (("sale") | ("other") | ("purchase") | ("barter")) | ($TradeDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeDirection_ = $TradeDirection$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blockentity/$IOwnableBlockEntity" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IOwnableBlockEntity {

 "canBreak"(arg0: $Player$Type): boolean

(arg0: $Player$Type): boolean
}

export namespace $IOwnableBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnableBlockEntity$Type = ($IOwnableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnableBlockEntity_ = $IOwnableBlockEntity$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $IEasyEntityBlock extends $EntityBlock {

 "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}

export namespace $IEasyEntityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyEntityBlock$Type = ($IEasyEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyEntityBlock_ = $IEasyEntityBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType" {
import {$StatType$Instance, $StatType$Instance$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType$Instance"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $StatType<A, B> {

constructor()

public static "getTranslationKey"(arg0: string): string
public static "register"(arg0: $StatType$Type<(any), (any)>): void
public "create"(): $StatType$Instance<(A), (B)>
public "getID"(): $ResourceLocation
public static "getID"(arg0: $ResourceLocation$Type): $StatType<(any), (any)>
public "createKey"(arg0: string): $StatKey<(A), (B)>
get "iD"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatType$Type<A, B> = ($StatType<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatType_<A, B> = $StatType$Type<(A), (B)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$EasyClientTab$ClientMenuScreen, $EasyClientTab$ClientMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab$ClientMenuScreen"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $EasyClientTab<M extends $AbstractContainerMenu, S extends $EasyClientTab$ClientMenuScreen<(M), (S), (T)>, T extends $EasyClientTab<(M), (S), (T)>> extends $EasyTab {
readonly "screen": S
readonly "menu": M

constructor(arg0: S)

public "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
public "tabVisible"(): boolean
public "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyClientTab$Type<M, S, T> = ($EasyClientTab<(M), (S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyClientTab_<M, S, T> = $EasyClientTab$Type<(M), (S), (T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext$Builder" {
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$IOwnable, $IOwnable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$IOwnable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$LoadContext, $LoadContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LoadContext$Builder {


public "withOwner"(arg0: $OwnerData$Type): $LoadContext$Builder
public "withOwner"(arg0: $IOwnable$Type): $LoadContext$Builder
public "withAllies"(arg0: $List$Type<($PlayerReference$Type)>): $LoadContext$Builder
public "withAllyPermissions"(arg0: $Map$Type<(string), (integer)>): $LoadContext$Builder
public "withBlockedPermissions"(arg0: $List$Type<(string)>): $LoadContext$Builder
public "build"(): $LoadContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadContext$Builder$Type = ($LoadContext$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadContext$Builder_ = $LoadContext$Builder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/capability/wallet/$IWalletHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$IEasyTickable, $IEasyTickable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$IEasyTickable"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IWalletHandler extends $IMoneyHandler, $IClientTracker, $IEasyTickable {

 "setWallet"(arg0: $ItemStack$Type): void
 "getVisibleWallet"(): $ItemStack
 "syncWallet"(arg0: $ItemStack$Type): void
 "getWallet"(): $ItemStack
 "entity"(): $LivingEntity
 "load"(arg0: $CompoundTag$Type): void
 "clean"(): void
 "save"(): $CompoundTag
 "visible"(): boolean
 "isDirty"(): boolean
 "setVisible"(arg0: boolean): void
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "isClient"(): boolean
 "isServer"(): boolean
 "tick"(): void
 "getStoredMoney"(): $MoneyView
}

export namespace $IWalletHandler {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWalletHandler$Type = ($IWalletHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWalletHandler_ = $IWalletHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxableContext" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"

export interface $ITaxableContext {

 "networkAccess"(): boolean
 "taxable"(): $ITaxable
}

export namespace $ITaxableContext {
function simpleContext(arg0: $ITaxable$Type, arg1: boolean): $ITaxableContext
function fullSet(arg0: $ITaxable$Type): $Set<($ITaxableContext)>
function defaultContext(arg0: $ITaxable$Type): $ITaxableContext
function defaultSet(arg0: $ITaxable$Type): $Set<($ITaxableContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaxableContext$Type = ($ITaxableContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaxableContext_ = $ITaxableContext$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory" {
import {$FixedSizeSprite, $FixedSizeSprite$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/sprites/$FixedSizeSprite"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$WidgetRotation, $WidgetRotation$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$WidgetRotation"
import {$ITab, $ITab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/tab/$ITab"
import {$NotificationCategoryType, $NotificationCategoryType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategoryType"

export class $NotificationCategory implements $ITab {
static readonly "GENERAL_TYPE": $NotificationCategoryType<(any)>
static readonly "GENERAL": $NotificationCategory

constructor()

public "getTooltip"(): $Component
public "notGeneral"(): boolean
public "getName"(): $Component
public "matches"(arg0: $NotificationCategory$Type): boolean
public "save"(): $CompoundTag
public "getIcon"(): $IconData
public "getSprite"(): $Function<($WidgetRotation), ($FixedSizeSprite)>
get "tooltip"(): $Component
get "name"(): $Component
get "icon"(): $IconData
get "sprite"(): $Function<($WidgetRotation), ($FixedSizeSprite)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotificationCategory$Type = ($NotificationCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotificationCategory_ = $NotificationCategory$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$InterplanarProjectorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InterplanarProjectorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isDithered"(stack: $ItemStack$Type): boolean
public "setDithered"(stack: $ItemStack$Type, dithered: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "isConsumable"(stack: $ItemStack$Type): boolean
public "getFilename"(stack: $ItemStack$Type): $Optional<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterplanarProjectorItem$Type = ($InterplanarProjectorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterplanarProjectorItem_ = $InterplanarProjectorItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WorldArea, $WorldArea$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldArea"

export class $WorldPosition {
static readonly "VOID": $WorldPosition


public "sameDimension"(arg0: $Level$Type): boolean
public "sameDimension"(arg0: $WorldPosition$Type): boolean
public static "ofLevel"(arg0: $Level$Type, arg1: $BlockPos$Type): $WorldPosition
public "getArea"(arg0: integer, arg1: integer, arg2: integer): $WorldArea
public "getPos"(): $BlockPos
public "getDimension"(): $ResourceKey<($Level)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "load"(arg0: $CompoundTag$Type): $WorldPosition
public static "of"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $BlockPos$Type): $WorldPosition
public "save"(): $CompoundTag
public "isVoid"(): boolean
public static "ofBE"(arg0: $BlockEntity$Type): $WorldPosition
get "pos"(): $BlockPos
get "dimension"(): $ResourceKey<($Level)>
get "void"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldPosition$Type = ($WorldPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldPosition_ = $WorldPosition$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CapacityUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CapacityUpgrade, $CapacityUpgrade$Type} from "packages/io/github/lightman314/lightmanscurrency/common/upgrades/types/capacity/$CapacityUpgrade"
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapacityUpgradeItem extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $CapacityUpgrade$Type, arg1: integer, arg2: $Item$Properties$Type)
constructor(arg0: $CapacityUpgrade$Type, arg1: $Supplier$Type<(integer)>, arg2: $Item$Properties$Type)

public "setDefaultValues"(arg0: $UpgradeData$Mutable$Type): void
set "defaultValues"(value: $UpgradeData$Mutable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityUpgradeItem$Type = ($CapacityUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacityUpgradeItem_ = $CapacityUpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$TicketItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IVariantItem, $IVariantItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TicketItem extends $Item implements $IVariantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "isPass"(arg0: $ItemStack$Type): boolean
public static "GetTicketID"(arg0: $ItemStack$Type): long
public static "isTicket"(arg0: $ItemStack$Type): boolean
public static "isInfinitePass"(arg0: $ItemStack$Type): boolean
public static "isTicketOrPass"(arg0: $ItemStack$Type): boolean
public static "isMasterTicket"(arg0: $ItemStack$Type): boolean
public static "GetTicketColor"(arg0: $ItemStack$Type): integer
public static "GetDefaultTicketColor"(arg0: long): integer
public static "CraftTicket"(arg0: $ItemStack$Type, arg1: $Item$Type): $ItemStack
public static "CreateTicket"(arg0: $Item$Type, arg1: long, arg2: integer, arg3: integer): $ItemStack
public static "CreateTicket"(arg0: $Item$Type, arg1: long): $ItemStack
public static "CreateTicket"(arg0: $Item$Type, arg1: long, arg2: integer): $ItemStack
public static "setUseCount"(arg0: $ItemStack$Type, arg1: integer): void
public static "damageTicket"(arg0: $ItemStack$Type): $ItemStack
public static "SetTicketColor"(arg0: $ItemStack$Type, arg1: $Color$Type): void
public static "SetTicketColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "CreateExampleTicket"(arg0: $Item$Type, arg1: $Color$Type): $ItemStack
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getUseCount"(arg0: $ItemStack$Type): integer
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getDefaultModel"(arg0: integer): $ResourceLocation
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public "getItemID"(): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketItem$Type = ($TicketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketItem_ = $TicketItem$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$ModelPartAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "getCubes"(): $List<($ModelPart$Cube)>
 "getChildren"(): $Map<(string), ($ModelPart)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData" {
import {$Owner, $Owner$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export class $LazyPacketData {
static readonly "TYPE_NULL": byte
static readonly "TYPE_BOOLEAN": byte
static readonly "TYPE_INT": byte
static readonly "TYPE_LONG": byte
static readonly "TYPE_FLOAT": byte
static readonly "TYPE_DOUBLE": byte
static readonly "TYPE_STRING": byte
static readonly "TYPE_UUID": byte
static readonly "TYPE_TEXT": byte
static readonly "TYPE_NBT": byte


public static "simpleFlag"(arg0: string): $LazyPacketData$Builder
public static "simpleBoolean"(arg0: string, arg1: boolean): $LazyPacketData$Builder
public static "simpleLong"(arg0: string, arg1: long): $LazyPacketData$Builder
public static "simpleFloat"(arg0: string, arg1: float): $LazyPacketData$Builder
public static "simpleDouble"(arg0: string, arg1: double): $LazyPacketData$Builder
public static "simpleTag"(arg0: string, arg1: $CompoundTag$Type): $LazyPacketData$Builder
public static "simpleMoneyValue"(arg0: string, arg1: $MoneyValue$Type): $LazyPacketData$Builder
public "getNBT"(arg0: string): $CompoundTag
public "getNBT"(arg0: string, arg1: $CompoundTag$Type): $CompoundTag
public "getMoneyValue"(arg0: string): $MoneyValue
public "getMoneyValue"(arg0: string, arg1: $MoneyValue$Type): $MoneyValue
public "getBlockPos"(arg0: string): $BlockPos
public "getBlockPos"(arg0: string, arg1: $BlockPos$Type): $BlockPos
public "getResourceLocation"(arg0: string, arg1: $ResourceLocation$Type): $ResourceLocation
public "getResourceLocation"(arg0: string): $ResourceLocation
public "getUUID"(arg0: string): $UUID
public "getUUID"(arg0: string, arg1: $UUID$Type): $UUID
public "toString"(): string
public "getBoolean"(arg0: string, arg1: boolean): boolean
public "getBoolean"(arg0: string): boolean
public "getInt"(arg0: string, arg1: integer): integer
public "getInt"(arg0: string): integer
public "getLong"(arg0: string, arg1: long): long
public "getLong"(arg0: string): long
public "getFloat"(arg0: string, arg1: float): float
public "getFloat"(arg0: string): float
public "getDouble"(arg0: string, arg1: double): double
public "getDouble"(arg0: string): double
public static "decode"(arg0: $FriendlyByteBuf$Type): $LazyPacketData
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "size"(): integer
public "size"(arg0: string): integer
public static "builder"(): $LazyPacketData$Builder
public "contains"(arg0: string, arg1: byte): boolean
public "contains"(arg0: string): boolean
public "getOwner"(arg0: string): $Owner
public "getOwner"(arg0: string, arg1: $Owner$Type): $Owner
public "getString"(arg0: string): string
public "getString"(arg0: string, arg1: string): string
public "getText"(arg0: string): $Component
public "getText"(arg0: string, arg1: $Component$Type): $Component
public "getItem"(arg0: string, arg1: $ItemStack$Type): $ItemStack
public "getItem"(arg0: string): $ItemStack
public "getList"<T>(arg0: string, arg1: $BiFunction$Type<($LazyPacketData$Type), (string), (T)>): $List<(T)>
public "getList"<T>(arg0: string, arg1: $List$Type<(T)>, arg2: $BiFunction$Type<($LazyPacketData$Type), (string), (T)>): $List<(T)>
public "copyToBuilder"(): $LazyPacketData$Builder
public static "simpleInt"(arg0: string, arg1: integer): $LazyPacketData$Builder
public static "simpleString"(arg0: string, arg1: string): $LazyPacketData$Builder
public static "simpleText"(arg0: string, arg1: $Component$Type): $LazyPacketData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyPacketData$Type = ($LazyPacketData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyPacketData_ = $LazyPacketData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext" {
import {$LoadContext$Builder, $LoadContext$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext$Builder"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ISaveableSettingsHolder, $ISaveableSettingsHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/$ISaveableSettingsHolder"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LoadContext {
readonly "player": $Player


public "updateOwner"(arg0: $OwnerData$Type): void
public "updateAllies"(arg0: $List$Type<($PlayerReference$Type)>): void
public "updateAllyPermissions"(arg0: $Map$Type<(string), (integer)>): void
public "isServerAdmin"(): boolean
public "isAdmin"(): boolean
public "isMember"(): boolean
public "hasPermission"(arg0: string): boolean
public "getPermissionLevel"(arg0: string): integer
public static "builder"(arg0: $Player$Type, arg1: $ISaveableSettingsHolder$Type): $LoadContext$Builder
get "serverAdmin"(): boolean
get "admin"(): boolean
get "member"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadContext$Type = ($LoadContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadContext_ = $LoadContext$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TradeEvent$PostTradeEvent, $TradeEvent$PostTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PostTradeEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TradeRenderManager, $TradeRenderManager$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/client/$TradeRenderManager"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TradeDirection, $TradeDirection$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeDirection"
import {$TradeEvent$TradeCostEvent, $TradeEvent$TradeCostEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$TradeInteractionData, $TradeInteractionData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/client/$TradeInteractionData"
import {$TradeComparisonResult, $TradeComparisonResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$TradeComparisonResult"
import {$TradeEvent$PreTradeEvent, $TradeEvent$PreTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicTradeEditTab, $BasicTradeEditTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$BasicTradeEditTab"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"

export class $TradeData implements $ITradeRuleHost {
static readonly "DEFAULT_KEY": string


public "getStock"(arg0: $TradeContext$Type): integer
public "validCost"(): boolean
public "getTradeDirection"(): $TradeDirection
public "AcceptableDifferences"(arg0: $TradeComparisonResult$Type): boolean
public "isTrader"(): boolean
public "isTrade"(): boolean
public "beforeTrade"(arg0: $TradeEvent$PreTradeEvent$Type): void
public "tradeCost"(arg0: $TradeEvent$TradeCostEvent$Type): void
public "afterTrade"(arg0: $TradeEvent$PostTradeEvent$Type): void
public "setTradeDirection"(arg0: $TradeDirection$Type): void
public "getCostWithTaxes"(arg0: $TradeContext$Type): $MoneyValue
public "getCostWithTaxes"(arg0: $TraderData$Type): $MoneyValue
public "outOfStock"(arg0: $TradeContext$Type): boolean
public "hasStock"(arg0: $TradeContext$Type): boolean
public "stockCountOfCost"(arg0: $TraderData$Type): integer
public "stockCountOfCost"(arg0: $TradeContext$Type): integer
public "getAsNBT"(): $CompoundTag
public "markTradeRulesDirty"(): void
public "setRules"(arg0: $List$Type<($TradeRule$Type)>): void
public "GetDifferenceWarnings"(arg0: $TradeComparisonResult$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getButtonRenderer"(): $TradeRenderManager<(any)>
public "OnInputDisplayInteraction"(arg0: $BasicTradeEditTab$Type, arg1: integer, arg2: $TradeInteractionData$Type, arg3: $ItemStack$Type): void
public "OnOutputDisplayInteraction"(arg0: $BasicTradeEditTab$Type, arg1: integer, arg2: $TradeInteractionData$Type, arg3: $ItemStack$Type): void
public "OnInteraction"(arg0: $BasicTradeEditTab$Type, arg1: $TradeInteractionData$Type, arg2: $ItemStack$Type): void
public "getRelevantInventorySlots"(arg0: $TradeContext$Type, arg1: $List$Type<($Slot$Type)>): $List<(integer)>
public "getCost"(): $MoneyValue
public "getCost"(arg0: $TradeContext$Type): $MoneyValue
public "setCost"(arg0: $MoneyValue$Type): void
public "compare"(arg0: $TradeData$Type): $TradeComparisonResult
public "getRules"(): $List<($TradeRule)>
public "isValid"(): boolean
public "canMoneyBeRelevant"(): boolean
public "isMoneyRelevant"(): boolean
public "allowTradeRule"(arg0: $TradeRule$Type): boolean
public "getRuleOfType"(arg0: $ResourceLocation$Type): $TradeRule
public "validateRuleStates"(): void
public "HandleRuleUpdate"(arg0: $Player$Type, arg1: $ResourceLocation$Type, arg2: $LazyPacketData$Type): void
get "tradeDirection"(): $TradeDirection
get "trader"(): boolean
get "trade"(): boolean
set "tradeDirection"(value: $TradeDirection$Type)
get "asNBT"(): $CompoundTag
set "rules"(value: $List$Type<($TradeRule$Type)>)
get "buttonRenderer"(): $TradeRenderManager<(any)>
get "cost"(): $MoneyValue
set "cost"(value: $MoneyValue$Type)
get "rules"(): $List<($TradeRule)>
get "valid"(): boolean
get "moneyRelevant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeData$Type = ($TradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeData_ = $TradeData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ticket/$TicketCollectionResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TicketCollectionResult extends $Enum<($TicketCollectionResult)> {
static readonly "PASS": $TicketCollectionResult
static readonly "PASS_WITH_STUB": $TicketCollectionResult
static readonly "FAIL": $TicketCollectionResult
readonly "passed": boolean
readonly "failed": boolean
readonly "spawnTicketStub": boolean


public static "values"(): ($TicketCollectionResult)[]
public static "valueOf"(arg0: string): $TicketCollectionResult
public static "pass"(arg0: boolean): $TicketCollectionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketCollectionResult$Type = (("fail") | ("pass") | ("pass_with_stub")) | ($TicketCollectionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketCollectionResult_ = $TicketCollectionResult$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TraderSettingsTab" {
import {$TraderStorageMenu, $TraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderStorageMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderSettingsTab extends $TraderStorageTab {
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_MONEY_STORAGE": integer
static readonly "TAB_TRADE_MULTI_PRICE": integer
static readonly "TAB_TRADER_INFO": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_SETTINGS_CLIPBOARD": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": M

constructor(arg0: $TraderStorageMenu$Type)

public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "canOpen"(arg0: $Player$Type): boolean
public "createClientTab"(arg0: any): any
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderSettingsTab$Type = ($TraderSettingsTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderSettingsTab_ = $TraderSettingsTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/data/$SoundEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoundEntry$Builder, $SoundEntry$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/data/$SoundEntry$Builder"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SoundEntry extends $Record {
static readonly "DEFAULT_COIN_SOUND": $ResourceLocation
static readonly "WALLET_DEFAULT": $List<($SoundEntry)>
static readonly "CODEC": $Codec<($SoundEntry)>

constructor(weight: integer, sound: $ResourceLocation$Type)

public static "getRandomEntry"(arg0: $RandomSource$Type, arg1: $List$Type<($SoundEntry$Type)>, arg2: $ResourceLocation$Type): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $SoundEntry$Builder
public "weight"(): integer
public "sound"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEntry$Type = ($SoundEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEntry_ = $SoundEntry$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $PhotographAgingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographAgingRecipe$Type = ($PhotographAgingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographAgingRecipe_ = $PhotographAgingRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $TradeResult extends $Enum<($TradeResult)> {
static readonly "SUCCESS": $TradeResult
static readonly "FAIL_OUT_OF_STOCK": $TradeResult
static readonly "FAIL_CANNOT_AFFORD": $TradeResult
static readonly "FAIL_NO_OUTPUT_SPACE": $TradeResult
static readonly "FAIL_NO_INPUT_SPACE": $TradeResult
static readonly "FAIL_TRADE_RULE_DENIAL": $TradeResult
static readonly "FAIL_TAX_EXCEEDED_LIMIT": $TradeResult
static readonly "FAIL_INVALID_TRADE": $TradeResult
static readonly "FAIL_NOT_SUPPORTED": $TradeResult
static readonly "FAIL_NULL": $TradeResult
static readonly "ALL_WITH_MESSAGES": ($TradeResult)[]


public "hasMessage"(): boolean
public "isSuccess"(): boolean
public static "values"(): ($TradeResult)[]
public static "valueOf"(arg0: string): $TradeResult
public "getMessage"(): $MutableComponent
get "success"(): boolean
get "message"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeResult$Type = (("fail_out_of_stock") | ("fail_invalid_trade") | ("success") | ("fail_no_input_space") | ("fail_not_supported") | ("fail_null") | ("fail_no_output_space") | ("fail_trade_rule_denial") | ("fail_tax_exceeded_limit") | ("fail_cannot_afford")) | ($TradeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeResult_ = $TradeResult$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $FilmDevelopingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, filmIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmDevelopingRecipe$Type = ($FilmDevelopingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmDevelopingRecipe_ = $FilmDevelopingRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement$MatchingItemsList" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ItemRequirement$MatchingItemsList {

constructor(arg0: $List$Type<($ItemRequirement$Type)>)

public "testContainer"(arg0: $IItemHandler$Type): void
public "testContainer"(arg0: $Container$Type): void
public "testValidItem"(arg0: $ItemStack$Type): void
public "getRandomItems"(arg0: boolean): $List<($ItemStack)>
public "getDuplicateMatches"(): integer
public "getUniqueMatches"(arg0: integer): integer
public "getMatches"(arg0: integer): integer
get "duplicateMatches"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirement$MatchingItemsList$Type = ($ItemRequirement$MatchingItemsList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRequirement$MatchingItemsList_ = $ItemRequirement$MatchingItemsList$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"

export class $ScreenArea {
readonly "x": integer
readonly "y": integer
readonly "pos": $ScreenPosition
readonly "width": integer
readonly "height": integer


public "shrinkWidth"(arg0: integer): $ScreenArea
public "shrinkHeight"(arg0: integer): $ScreenArea
public "isOutside"(arg0: $ScreenArea$Type): boolean
public "isMouseInArea"(arg0: double, arg1: double): boolean
public "isMouseInArea"(arg0: integer, arg1: integer): boolean
public "isMouseInArea"(arg0: $ScreenPosition$Type): boolean
public "ofSize"(arg0: integer, arg1: integer): $ScreenArea
public "offsetPosition"(arg0: $ScreenPosition$Type): $ScreenArea
public "offsetPosition"(arg0: integer, arg1: integer): $ScreenArea
public "toString"(): string
public static "of"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer): $ScreenArea
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $ScreenArea
public "centerX"(): integer
public "centerY"(): integer
public "atPosition"(arg0: integer, arg1: integer): $ScreenArea
public "atPosition"(arg0: $ScreenPosition$Type): $ScreenArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenArea$Type = ($ScreenArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenArea_ = $ScreenArea$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyTabbedMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$IEasyTabbedMenuScreen, $IEasyTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$LazyMessageMenu, $LazyMessageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$LazyMessageMenu"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EasyTabbedMenu<M extends $IEasyTabbedMenu<(T)>, T extends $EasyMenuTab<(M), (T)>> extends $LazyMessageMenu implements $IEasyTabbedMenu<(T)> {
readonly "player": $Player
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

constructor(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $Inventory$Type, arg3: $MenuValidator$Type)
constructor(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $Inventory$Type)

public "setTab"(arg0: integer, arg1: T): void
public "addTab"(arg0: T): void
public "setScreen"(arg0: $IEasyTabbedMenuScreen$Type<(M), (T), (any)>): void
public "currentTab"(): T
public "removed"(arg0: $Player$Type): void
public "getAllTabs"(): $Map<(integer), (T)>
public "setMessageListener"(arg0: $Consumer$Type<($LazyPacketData$Type)>): void
public "ChangeTab"(arg0: integer): void
public "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
public "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Type): void
public "clearTab"(arg0: integer): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isClient"(): boolean
set "screen"(value: $IEasyTabbedMenuScreen$Type<(M), (T), (any)>)
get "allTabs"(): $Map<(integer), (T)>
set "messageListener"(value: $Consumer$Type<($LazyPacketData$Type)>)
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyTabbedMenu$Type<M, T> = ($EasyTabbedMenu<(M), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyTabbedMenu_<M, T> = $EasyTabbedMenu$Type<(M), (T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TradeRuleType<T extends $TradeRule> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullSupplier$Type<(T)>)

public "loadFromJson"(arg0: $JsonObject$Type): T
public "toString"(): string
public "hashCode"(): integer
public "load"(arg0: $CompoundTag$Type): T
public "createNew"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRuleType$Type<T> = ($TradeRuleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRuleType_<T> = $TradeRuleType$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/$SettingsNode" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$NodeSelections, $NodeSelections$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$NodeSelections"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$ISaveableSettingsHolder, $ISaveableSettingsHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/$ISaveableSettingsHolder"
import {$SavedSettingData, $SavedSettingData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LoadContext, $LoadContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SavedSettingData$NodeAccess, $SavedSettingData$NodeAccess$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$NodeAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SettingsSubNode, $SettingsSubNode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/$SettingsSubNode"
import {$SavedSettingData$MutableNodeAccess, $SavedSettingData$MutableNodeAccess$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$MutableNodeAccess"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SettingsNode implements $IClientTracker {
static readonly "SORTER": $Comparator<($SettingsNode)>
readonly "key": string

constructor(arg0: string, arg1: $ISaveableSettingsHolder$Type)
constructor(arg0: string, arg1: $ISaveableSettingsHolder$Type, arg2: integer)

public "invPriority"(): integer
public "allowSelecting"(arg0: $Player$Type): boolean
public "getSubNode"(arg0: string): $SettingsSubNode<(any)>
public static "formatTitle"(arg0: $MutableComponent$Type): $MutableComponent
public "loadSettings"(arg0: $SavedSettingData$NodeAccess$Type, arg1: $LoadContext$Type): void
public "saveSettings"(arg0: $SavedSettingData$MutableNodeAccess$Type): void
public "applyDefaultSelections"(arg0: $NodeSelections$Type, arg1: $Player$Type): void
public "allowSaving"(arg0: $Player$Type): boolean
public "getSubNodes"(): $List<($SettingsSubNode<(any)>)>
public "writeAsText"(arg0: $SavedSettingData$Type, arg1: $Consumer$Type<($Component$Type)>): void
public "allowLoading"(arg0: $LoadContext$Type): boolean
public "getName"(): $MutableComponent
public "priority"(): integer
public "isClient"(): boolean
public "isServer"(): boolean
public static "formatEntry"(arg0: $Component$Type, arg1: integer): $MutableComponent
public static "formatEntry"(arg0: $Component$Type, arg1: $Component$Type): $MutableComponent
public static "formatEntry"(arg0: $Component$Type, arg1: float): $MutableComponent
public static "formatEntry"(arg0: $Component$Type, arg1: string): $MutableComponent
public static "formatEntry"(arg0: $Component$Type, arg1: boolean): $MutableComponent
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
get "subNodes"(): $List<($SettingsSubNode<(any)>)>
get "name"(): $MutableComponent
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsNode$Type = ($SettingsNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsNode_ = $SettingsNode$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer$Slave" {
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $MoneyViewer$Slave implements $IMoneyViewer {

constructor()

public "getStoredMoney"(): $MoneyView
get "storedMoney"(): $MoneyView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyViewer$Slave$Type = ($MoneyViewer$Slave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyViewer$Slave_ = $MoneyViewer$Slave$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData" {
import {$Owner, $Owner$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $OwnerData implements $IClientTracker {

constructor(arg0: $IClientTracker$Type)
constructor(arg0: $IClientTracker$Type, arg1: $Consumer$Type<($OwnerData$Type)>)
constructor()
constructor(arg0: $IClientTracker$Type, arg1: $Runnable$Type)

public "withParent"(arg0: $IClientTracker$Type): $OwnerData
public static "parseUnsided"(arg0: $CompoundTag$Type): $OwnerData
public "isAdmin"(arg0: $PlayerReference$Type): boolean
public "isAdmin"(arg0: $Player$Type): boolean
public "hasOwner"(): boolean
public "isMember"(arg0: $Player$Type): boolean
public "isMember"(arg0: $PlayerReference$Type): boolean
public "SetOwner"(arg0: $Owner$Type): void
public "getPlayerForContext"(): $PlayerReference
public "getValidOwner"(): $Owner
public "setChanged"(): void
public "getName"(): $MutableComponent
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "copyFrom"(arg0: $OwnerData$Type): void
public "isClient"(): boolean
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
get "playerForContext"(): $PlayerReference
get "validOwner"(): $Owner
get "name"(): $MutableComponent
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnerData$Type = ($OwnerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnerData_ = $OwnerData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$TicketKioskBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TicketKioskBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock, $IVariantBlock {
static readonly "TRADECOUNT": integer
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

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketKioskBlock$Type = ($TicketKioskBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketKioskBlock_ = $TicketKioskBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export interface $IRotatableBlock {

 "getRotationY"(arg0: $BlockState$Type): integer
 "getRotationY"(arg0: $Direction$Type): integer
 "getRotationYInv"(arg0: $Direction$Type): integer
 "getFacing"(arg0: $BlockState$Type): $Direction
}

export namespace $IRotatableBlock {
const FACING: $DirectionProperty
function getBackwardPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getRightVect(arg0: $Direction$Type): $Vector3f
function getLeftVect(arg0: $Direction$Type): $Vector3f
function getForwardVect(arg0: $Direction$Type): $Vector3f
function getBackwardVect(arg0: $Direction$Type): $Vector3f
function getOffsetVect(arg0: $Direction$Type): $Vector3f
function getRelativeSide(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
function getActualSide(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
function getLeftPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getRightPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getForwardPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRotatableBlock$Type = ($IRotatableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRotatableBlock_ = $IRotatableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/coins/$ICoinLike" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICoinLike {

 "isCoin"(arg0: $ItemStack$Type): boolean
 "isFromSideChain"(arg0: $ItemStack$Type): boolean
}

export namespace $ICoinLike {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICoinLike$Type = ($ICoinLike);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICoinLike_ = $ICoinLike$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderScreen" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$ITraderMenu, $ITraderMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderMenu"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$IWidgetPositioner, $IWidgetPositioner$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/util/$IWidgetPositioner"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$TraderClientTab, $TraderClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/trader/$TraderClientTab"

export interface $ITraderScreen extends $IEasyScreen {

 "setTab"(arg0: $TraderClientTab$Type): void
 "getMenu"(): $ITraderMenu
 "getRightEdgePositioner"(): $IWidgetPositioner
 "closeTab"(): void
 "getCorner"(): $ScreenPosition
 "getArea"(): $ScreenArea
 "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
 "removeChild"(arg0: any): void
 "builder"(): $LazyPacketData$Builder
 "addChild"<W>(arg0: W): W
 "getFont"(): $Font
 "getPlayer"(): $Player
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "getXSize"(): integer
 "getYSize"(): integer
 "getGhostSlots"(): $List<($GhostSlot<(any)>)>
 "blockInventoryClosing"(): boolean
 "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
}

export namespace $ITraderScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderScreen$Type = ($ITraderScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderScreen_ = $ITraderScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder$Slave" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyViewer$Slave, $MoneyViewer$Slave$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer$Slave"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $MoneyHolder$Slave extends $MoneyViewer$Slave implements $IMoneyHolder {

constructor()

public "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
public "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
public "getTooltipTitle"(): $Component
public "priority"(): integer
public "inversePriority"(): integer
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
get "tooltipTitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyHolder$Slave$Type = ($MoneyHolder$Slave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyHolder$Slave_ = $MoneyHolder$Slave$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$WalletUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$WalletUpgradeRecipe, $WalletUpgradeRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$WalletUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WalletUpgradeRecipe$Serializer implements $RecipeSerializer<($WalletUpgradeRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $WalletUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $WalletUpgradeRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $WalletUpgradeRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $WalletUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletUpgradeRecipe$Serializer$Type = ($WalletUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletUpgradeRecipe$Serializer_ = $WalletUpgradeRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$FreezerBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FreezerBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock, $IVariantBlock {
static readonly "TRADECOUNT": integer
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $ResourceLocation$Type)

public "getDoorModel"(): $ResourceLocation
public "requiredModels"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public static "GenerateDoorModel"(arg0: string, arg1: $Color$Type): $ResourceLocation
public static "GenerateDoorModel"(arg0: $Color$Type): $ResourceLocation
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "doorModel"(): $ResourceLocation
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezerBlock$Type = ($FreezerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FreezerBlock_ = $FreezerBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$TicketStationBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TicketStationBlock extends $RotatableBlock implements $EntityBlock, $IVariantBlock {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketStationBlock$Type = ($TicketStationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketStationBlock_ = $TicketStationBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting$Centering" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextRenderUtil$TextFormatting$Centering extends $Enum<($TextRenderUtil$TextFormatting$Centering)> {
static readonly "TOP_LEFT": $TextRenderUtil$TextFormatting$Centering
static readonly "TOP_CENTER": $TextRenderUtil$TextFormatting$Centering
static readonly "TOP_RIGHT": $TextRenderUtil$TextFormatting$Centering
static readonly "MIDDLE_LEFT": $TextRenderUtil$TextFormatting$Centering
static readonly "MIDDLE_CENTER": $TextRenderUtil$TextFormatting$Centering
static readonly "MIDDLE_RIGHT": $TextRenderUtil$TextFormatting$Centering
static readonly "BOTTOM_LEFT": $TextRenderUtil$TextFormatting$Centering
static readonly "BOTTOM_CENTER": $TextRenderUtil$TextFormatting$Centering
static readonly "BOTTOM_RIGHT": $TextRenderUtil$TextFormatting$Centering


public "makeTop"(): $TextRenderUtil$TextFormatting$Centering
public "makeMiddle"(): $TextRenderUtil$TextFormatting$Centering
public "makeBottom"(): $TextRenderUtil$TextFormatting$Centering
public "makeLeft"(): $TextRenderUtil$TextFormatting$Centering
public "makeCenter"(): $TextRenderUtil$TextFormatting$Centering
public "makeRight"(): $TextRenderUtil$TextFormatting$Centering
public "isRight"(): boolean
public "isBottom"(): boolean
public "isCenter"(): boolean
public static "values"(): ($TextRenderUtil$TextFormatting$Centering)[]
public static "valueOf"(arg0: string): $TextRenderUtil$TextFormatting$Centering
public "isLeft"(): boolean
public "isTop"(): boolean
public "isMiddle"(): boolean
get "right"(): boolean
get "bottom"(): boolean
get "center"(): boolean
get "left"(): boolean
get "top"(): boolean
get "middle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextRenderUtil$TextFormatting$Centering$Type = (("top_right") | ("top_center") | ("middle_right") | ("top_left") | ("middle_left") | ("bottom_right") | ("middle_center") | ("bottom_left") | ("bottom_center")) | ($TextRenderUtil$TextFormatting$Centering);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextRenderUtil$TextFormatting$Centering_ = $TextRenderUtil$TextFormatting$Centering$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$MoneyHandler" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MoneyViewer, $MoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyViewer"

export class $MoneyHandler extends $MoneyViewer implements $IMoneyHandler {

constructor()

public static "combine"(arg0: $List$Type<($IMoneyHandler$Type)>): $IMoneyHandler
public "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
public "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyHandler$Type = ($MoneyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyHandler_ = $MoneyHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITraderStorageMenu extends $IEasyTabbedMenu<($TraderStorageTab)> {

 "setTab"(arg0: integer, arg1: $TraderStorageTab$Type): void
 "hasPermission"(arg0: string): boolean
 "setHeldItem"(arg0: $ItemStack$Type): void
 "getHeldItem"(): $ItemStack
 "getTrader"(): $TraderData
 "getPermissionLevel"(arg0: string): integer
 "getContext"(): $TradeContext
 "getPlayer"(): $Player
 "SendMessage"(arg0: $LazyPacketData$Builder$Type): void
 "clearContainer"(arg0: $Container$Type): void
 "clearTab"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "SetCoinSlotsActive"(arg0: boolean): void
 "currentTab"(): $TraderStorageTab
 "getAllTabs"(): $Map<(integer), ($TraderStorageTab)>
 "setMessageListener"(arg0: $Consumer$Type<($LazyPacketData$Type)>): void
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Type): void
 "ChangeTab"(arg0: integer): void
 "builder"(): $LazyPacketData$Builder
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITraderStorageMenu {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderStorageMenu$Type = ($ITraderStorageMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderStorageMenu_ = $ITraderStorageMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/$TraderScreen" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$EasyClientUnenforcedTabbedMenuScreen, $EasyClientUnenforcedTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientUnenforcedTabbedMenuScreen"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TraderMenu, $TraderMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderMenu"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ITraderScreen, $ITraderScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderScreen"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IWidgetPositioner, $IWidgetPositioner$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/util/$IWidgetPositioner"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$TraderClientTab, $TraderClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/trader/$TraderClientTab"

export class $TraderScreen extends $EasyClientUnenforcedTabbedMenuScreen<($TraderMenu), ($TraderScreen), ($TraderClientTab)> implements $ITraderScreen {
static readonly "GUI_TEXTURE": $ResourceLocation
static readonly "WIDTH": integer
static readonly "HEIGHT": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "quickdropSlot": $Slot
 "lastClickSlot": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickdropTime": long
 "quickCraftingType": integer
 "quickCraftingButton": integer
 "skipNextRelease": boolean
 "quickCraftingRemainder": integer
 "lastClickTime": long
 "lastClickButton": integer
 "doubleclick": boolean
 "lastQuickMoved": $ItemStack
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(arg0: $TraderMenu$Type, arg1: $Inventory$Type, arg2: $Component$Type)

public "getRightEdgePositioner"(): $IWidgetPositioner
public "closeTab"(): void
public "getCorner"(): $ScreenPosition
public "getArea"(): $ScreenArea
public "removeChild"(arg0: any): void
public "addChild"<W>(arg0: W): W
public "getFont"(): $Font
public "getPlayer"(): $Player
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getXSize"(): integer
public "getYSize"(): integer
public "getGhostSlots"(): $List<($GhostSlot<(any)>)>
public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
get "rightEdgePositioner"(): $IWidgetPositioner
get "corner"(): $ScreenPosition
get "area"(): $ScreenArea
get "font"(): $Font
get "player"(): $Player
get "guiLeft"(): integer
get "guiTop"(): integer
get "xSize"(): integer
get "ySize"(): integer
get "ghostSlots"(): $List<($GhostSlot<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderScreen$Type = ($TraderScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderScreen_ = $TraderScreen$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$INodeBreakable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INodeBreakable {

 "canClimbLadder"(): boolean
 "setCanBreakBlocks"(arg0: boolean): void
 "setCanClimbLadder"(arg0: boolean): void
 "canBreakBlocks"(): boolean
}

export namespace $INodeBreakable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INodeBreakable$Type = ($INodeBreakable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INodeBreakable_ = $INodeBreakable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$DurabilityData, $DurabilityData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/durability/$DurabilityData"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TicketStationRecipeInput, $TicketStationRecipeInput$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/input/$TicketStationRecipeInput"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TicketStationRecipe, $TicketStationRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$TicketStationRecipe$ExtraData, $TicketStationRecipe$ExtraData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe$ExtraData"

export class $TicketRecipe implements $TicketStationRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Item$Type, arg4: $DurabilityData$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Item$Type, arg4: $Optional$Type<($DurabilityData$Type)>)

public "assembleWithKiosk"(arg0: $ItemStack$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
public "consumeModifier"(): boolean
public "validModifier"(arg0: $ItemStack$Type): boolean
public "jeiModifierList"(): $List<($ItemStack)>
public "validIngredient"(arg0: $ItemStack$Type): boolean
public "peekAtResult"(arg0: $Container$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
public "exampleResult"(): $ItemStack
public "getDurabilityData"(): $DurabilityData
public "assemble"(arg0: $TicketStationRecipeInput$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getMasterIngredient"(): $Ingredient
public "getIngredient"(): $Ingredient
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "validateDurability"(arg0: integer, arg1: boolean): integer
public "matchesTicketKioskSellItem"(arg0: $ItemStack$Type): boolean
public "allowIgnoreKioskRecipe"(): boolean
public "getKioskStorageRequirement"(arg0: $ItemStack$Type): $ItemRequirement
public static "validCodeChar"(arg0: character): boolean
public static "exampleModifierList"(arg0: $TagKey$Type<($Item$Type)>, ...arg1: ($Item$Type)[]): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Item$Type): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $RegistryObject$Type<(any)>): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Ingredient$Type): $List<($ItemStack)>
public "validData"(arg0: $TicketStationRecipe$ExtraData$Type): boolean
public "validCode"(arg0: string): boolean
public "validDurability"(arg0: integer): boolean
public "requiredCodeInput"(): boolean
public "requiredDurabilityInput"(): boolean
public "getToastSymbol"(): $ItemStack
public "matches"(arg0: $TicketStationRecipeInput$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $TicketStationRecipeInput$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
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
get "durabilityData"(): $DurabilityData
get "masterIngredient"(): $Ingredient
get "ingredient"(): $Ingredient
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $TicketRecipe$Type = ($TicketRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketRecipe_ = $TicketRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CouponRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CouponRecipe, $CouponRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CouponRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CouponRecipe$Serializer implements $RecipeSerializer<($CouponRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CouponRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CouponRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CouponRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CouponRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CouponRecipe$Serializer$Type = ($CouponRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CouponRecipe$Serializer_ = $CouponRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$SettingsSubTab" {
import {$TraderSettingsTab, $TraderSettingsTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TraderSettingsTab"
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderSettingsClientTab, $TraderSettingsClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$TraderSettingsClientTab"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $SettingsSubTab extends $EasyTab {
readonly "parent": $TraderSettingsClientTab
readonly "commonTab": $TraderSettingsTab
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu


public "canOpen"(): boolean
public "sendMessage"(arg0: $LazyPacketData$Builder$Type): void
public "removeChild"(arg0: any): void
public "addChild"<T>(arg0: T): T
public "shouldRenderInventoryText"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsSubTab$Type = ($SettingsSubTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsSubTab_ = $SettingsSubTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ITraderBlock, $ITraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IItemTraderBlock extends $ITraderBlock {

 "getItemPositionData"(): $ItemPositionData
 "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity
 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
 "getCapabilityBlockPos"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockPos
}

export namespace $IItemTraderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTraderBlock$Type = ($IItemTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTraderBlock_ = $IItemTraderBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/mixin/compat/create/$StockTickerBlockEntityAccessor" {
import {$SmartInventory, $SmartInventory$Type} from "packages/com/simibubi/create/foundation/item/$SmartInventory"

export interface $StockTickerBlockEntityAccessor {

 "getReceivedPayments"(): $SmartInventory

(): $SmartInventory
}

export namespace $StockTickerBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StockTickerBlockEntityAccessor$Type = ($StockTickerBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StockTickerBlockEntityAccessor_ = $StockTickerBlockEntityAccessor$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IOwnableBlock {

 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean

(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
}

export namespace $IOwnableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnableBlock$Type = ($IOwnableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnableBlock_ = $IOwnableBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/mixin/$LecternBlockEntityAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"

export interface $LecternBlockEntityAccessor {

 "getDataAccess"(): $ContainerData
 "getBookAccess"(): $Container
}

export namespace $LecternBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternBlockEntityAccessor$Type = ($LecternBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LecternBlockEntityAccessor_ = $LecternBlockEntityAccessor$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$OwnerType, $OwnerType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$OwnerType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Owner implements $IClientTracker {
static readonly "NULL_TYPE": $OwnerType

constructor()

public "isAdmin"(arg0: $PlayerReference$Type): boolean
public "isMember"(arg0: $PlayerReference$Type): boolean
public "asBankReference"(): $BankReference
public "incrementStat"<T>(arg0: $StatKey$Type<(any), (T)>, arg1: T): void
public "isOnline"(): boolean
public "asPlayerReference"(): $PlayerReference
public "getCommandLabel"(): $MutableComponent
public "hasNotificationLevels"(): boolean
public static "getOwnerLevelBlurb"(arg0: integer): $MutableComponent
public static "validateNotificationLevel"(arg0: integer): integer
public "pushNotification"(arg0: $Supplier$Type<(any)>, arg1: integer, arg2: boolean): void
public "alwaysValid"(): boolean
public "stillValid"(): boolean
public "getName"(): $MutableComponent
public "equals"(arg0: any): boolean
public static "load"(arg0: $CompoundTag$Type): $Owner
public "matches"(arg0: $Owner$Type): boolean
public "save"(): $CompoundTag
public "getType"(): $OwnerType
public "copy"(): $Owner
public "setParent"(arg0: $IClientTracker$Type): void
public "isNull"(): boolean
public "isClient"(): boolean
public static "getNull"(arg0: $IClientTracker$Type): $Owner
public static "getNull"(): $Owner
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
get "online"(): boolean
get "commandLabel"(): $MutableComponent
get "name"(): $MutableComponent
get "type"(): $OwnerType
set "parent"(value: $IClientTracker$Type)
get "null"(): boolean
get "client"(): boolean
get "null"(): $Owner
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Owner$Type = ($Owner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Owner_ = $Owner$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/cards/$PrepaidCardItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IVariantItem, $IVariantItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ColoredItem, $ColoredItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/colored/$ColoredItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PrepaidCardItem extends $Item implements $ColoredItem, $IVariantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "setItemColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type): integer
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getDefaultModel"(arg0: integer): $ResourceLocation
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public "getItemID"(): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrepaidCardItem$Type = ($PrepaidCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrepaidCardItem_ = $PrepaidCardItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$AlbumItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AlbumPage, $AlbumPage$Type} from "packages/io/github/mortuusars/exposure/item/$AlbumPage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlbumItem extends $Item implements $IForgeItem {
static readonly "TAG_PAGES": string
static readonly "TAG_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "setPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type, index: integer): void
public "getPhotographsCount"(albumStack: $ItemStack$Type): integer
public "getMaxPages"(): integer
public "isEditable"(): boolean
public "createEmptyPage"(): $AlbumPage
public "addPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type): void
public "addPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type, index: integer): void
public "shouldPlayEquipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "getPages"(albumStack: $ItemStack$Type): $List<($AlbumPage)>
public "open"(player: $ServerPlayer$Type, albumStack: $ItemStack$Type, editable: boolean): void
public "sign"(album: $ItemStack$Type, title: string, author: string): $ItemStack
public "getPage"(albumStack: $ItemStack$Type, index: integer): $Optional<($AlbumPage)>
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "maxPages"(): integer
get "editable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumItem$Type = ($AlbumItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumItem_ = $AlbumItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$SlotMachineBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SlotMachineBlock extends $TraderBlockTallRotatable implements $IVariantBlock {
static readonly "LIGHT_MODEL_LOCATION": $ResourceLocation
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
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

public "requiredModels"(): integer
public "getRotationY"(arg0: $Direction$Type): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public "getLightModel"(): $ResourceLocation
public "getValidVariants"(): $List<($ResourceLocation)>
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "lightModel"(): $ResourceLocation
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotMachineBlock$Type = ($SlotMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotMachineBlock_ = $SlotMachineBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blocks/$TraderInterfaceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$IUpgradeableBlock, $IUpgradeableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TraderInterfaceBlock extends $RotatableBlock implements $IEasyEntityBlock, $IOwnableBlock, $IUpgradeableBlock {
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


public "canUseUpgradeItem"(arg0: $IUpgradeable$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "getDropBlockItem"(arg0: $BlockState$Type, arg1: $TraderInterfaceBlockEntity$Type): $ItemStack
public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getUpgradeable"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $IUpgradeable
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlock$Type = ($TraderInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlock_ = $TraderInterfaceBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IVariantItem {

 "getValidVariants"(): $List<($ResourceLocation)>
 "requiredModels"(): integer
 "getDefaultModel"(arg0: integer): $ResourceLocation
 "getItemID"(): $ResourceLocation
}

export namespace $IVariantItem {
function setItemVariant(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
function getItemVariant(arg0: $ItemStack$Type): $ResourceLocation
function setLocked(arg0: $ItemStack$Type, arg1: boolean): void
function isLocked(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariantItem$Type = ($IVariantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariantItem_ = $IVariantItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerReference {
static readonly "NULL": $PlayerReference
readonly "id": $UUID


public "saveAsJson"(): $JsonObject
public static "isInList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $UUID$Type): boolean
public static "isInList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $PlayerReference$Type): boolean
public static "isInList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $Entity$Type): boolean
public static "getPlayerID"(arg0: string): $UUID
public static "saveJsonList"(arg0: $List$Type<($PlayerReference$Type)>): $JsonArray
public static "saveList"(arg0: $CompoundTag$Type, arg1: $List$Type<($PlayerReference$Type)>, arg2: string): void
public "isOnline"(): boolean
public "getNameComponent"(arg0: boolean): $MutableComponent
public "copyWithName"(arg0: string): $PlayerReference
public static "loadList"(arg0: $CompoundTag$Type, arg1: string): $List<($PlayerReference)>
public "getName"(arg0: boolean): string
public "hashCode"(): integer
public static "load"(arg0: $JsonElement$Type): $PlayerReference
public static "load"(arg0: $CompoundTag$Type): $PlayerReference
public static "decode"(arg0: $FriendlyByteBuf$Type): $PlayerReference
public "encode"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
public static "of"(arg0: $GameProfile$Type): $PlayerReference
public static "of"(arg0: $Entity$Type): $PlayerReference
public static "of"(arg0: $Player$Type): $PlayerReference
public static "of"(arg0: boolean, arg1: string): $PlayerReference
public static "of"(arg0: $UUID$Type, arg1: string): $PlayerReference
public "save"(): $CompoundTag
public static "dummy"(arg0: string): $PlayerReference
public "is"(arg0: $PlayerReference$Type): boolean
public "is"(arg0: $Entity$Type): boolean
public "is"(arg0: $GameProfile$Type): boolean
public "is"(arg0: $UUID$Type): boolean
public "isExact"(arg0: $PlayerReference$Type): boolean
public static "addToList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $PlayerReference$Type): boolean
public static "removeFromList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $PlayerReference$Type): boolean
public static "removeFromList"(arg0: $List$Type<($PlayerReference$Type)>, arg1: $UUID$Type): boolean
public "getPlayer"(): $Player
public static "getPlayerName"(arg0: $UUID$Type): string
public "getSkull"(arg0: boolean): $ItemStack
get "online"(): boolean
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerReference$Type = ($PlayerReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerReference_ = $PlayerReference$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$FrameAddedEventJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FrameAddedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type)

public "getFrame"(): $CompoundTag
public "getCameraStack"(): $ItemStack
public "getPlayer"(): $Player
get "frame"(): $CompoundTag
get "cameraStack"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameAddedEventJS$Type = ($FrameAddedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameAddedEventJS_ = $FrameAddedEventJS$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType$Instance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StatType$Instance<A, B> implements $IClientTracker {


public "add"(arg0: B): void
public "get"(): A
public "load"(arg0: $CompoundTag$Type): void
public "clear"(): void
public "save"(): $CompoundTag
public "setParent"(arg0: $StatTracker$Type): void
public "isClient"(): boolean
public "getDisplay"(): any
public "getInfoText"(arg0: string): $MutableComponent
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
set "parent"(value: $StatTracker$Type)
get "client"(): boolean
get "display"(): any
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatType$Instance$Type<A, B> = ($StatType$Instance<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatType$Instance_<A, B> = $StatType$Instance$Type<(A), (B)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$Mutable" {
import {$SavedSettingData, $SavedSettingData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData"
import {$SavedSettingData$MutableNodeAccess, $SavedSettingData$MutableNodeAccess$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$MutableNodeAccess"

export class $SavedSettingData$Mutable {


public "merge"(arg0: $SavedSettingData$Type): void
public "getNode"(arg0: string): $SavedSettingData$MutableNodeAccess
public "makeImmutable"(): $SavedSettingData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SavedSettingData$Mutable$Type = ($SavedSettingData$Mutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SavedSettingData$Mutable_ = $SavedSettingData$Mutable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IVariantDataStorage {

 "getCurrentVariant"(): $ResourceLocation
 "isVariantLocked"(): boolean
 "setVariant"(arg0: $ResourceLocation$Type, arg1: boolean): void
 "setVariant"(arg0: $ResourceLocation$Type): void
}

export namespace $IVariantDataStorage {
function get(arg0: $BlockEntity$Type): $IVariantDataStorage
function get(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IVariantDataStorage
function get(arg0: $LootContext$Type): $IVariantDataStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariantDataStorage$Type = ($IVariantDataStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariantDataStorage_ = $IVariantDataStorage$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$SignedAlbumItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AlbumItem, $AlbumItem$Type} from "packages/io/github/mortuusars/exposure/item/$AlbumItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignedAlbumItem extends $AlbumItem {
static readonly "TAG_PAGES": string
static readonly "TAG_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isEditable"(): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getName"(stack: $ItemStack$Type): $Component
public "isFoil"(stack: $ItemStack$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "editable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedAlbumItem$Type = ($SignedAlbumItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignedAlbumItem_ = $SignedAlbumItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/data/$SoundEntry$Builder" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoundEntry, $SoundEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/data/$SoundEntry"

export class $SoundEntry$Builder {

constructor()

public "addVanilla"(arg0: integer, arg1: string): $SoundEntry$Builder
public "add"(arg0: integer, arg1: $ResourceLocation$Type): $SoundEntry$Builder
public "build"(): $List<($SoundEntry)>
public "addModded"(arg0: integer, arg1: string, arg2: string): $SoundEntry$Builder
public "addLC"(arg0: integer, arg1: string, arg2: string): $SoundEntry$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEntry$Builder$Type = ($SoundEntry$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEntry$Builder_ = $SoundEntry$Builder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/$IMoneyCollectionMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMoneyCollectionMenu {

 "CollectStoredMoney"(): void

(): void
}

export namespace $IMoneyCollectionMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyCollectionMenu$Type = ($IMoneyCollectionMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyCollectionMenu_ = $IMoneyCollectionMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$LazyPacketData$IBuilderProvider, $LazyPacketData$IBuilderProvider$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$IBuilderProvider"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EasyMenuTab<M extends $IEasyTabbedMenu<(T)>, T extends $EasyMenuTab<(M), (T)>> implements $LazyPacketData$IBuilderProvider, $IClientTracker {
readonly "menu": M

constructor(arg0: M)

public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "canOpen"(arg0: $Player$Type): boolean
public "builder"(): $LazyPacketData$Builder
public "isClient"(): boolean
public "quickMoveStack"(arg0: $ItemStack$Type): boolean
public "createClientTab"(arg0: any): any
public "onTabOpen"(): void
public "onTabClose"(): void
public "onMenuClose"(): void
public "addStorageMenuSlots"(arg0: $Function$Type<($Slot$Type), ($Slot$Type)>): void
public "OpenMessage"(arg0: $LazyPacketData$Type): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMenuTab$Type<M, T> = ($EasyMenuTab<(M), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMenuTab_<M, T> = $EasyMenuTab$Type<(M), (T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$InteractionUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InteractionUpgradeItem extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<(integer)>)

public "setDefaultValues"(arg0: $UpgradeData$Mutable$Type): void
set "defaultValues"(value: $UpgradeData$Mutable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionUpgradeItem$Type = ($InteractionUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionUpgradeItem_ = $InteractionUpgradeItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$ShutterSpeed" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ShutterSpeed {
static readonly "DEFAULT": $ShutterSpeed

constructor(shutterSpeed: string)

public "getMilliseconds"(): float
public "getStopsDifference"(relative: $ShutterSpeed$Type): float
public static "loadOrDefault"(tag: $CompoundTag$Type): $ShutterSpeed
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "save"(tag: $CompoundTag$Type): $CompoundTag
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $ShutterSpeed
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public "getTicks"(): integer
public "getFormattedText"(): string
get "milliseconds"(): float
get "ticks"(): integer
get "formattedText"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShutterSpeed$Type = ($ShutterSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShutterSpeed_ = $ShutterSpeed$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValueParser" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $MoneyValueParser {
static readonly "NO_VALUE_EXCEPTION": $SimpleCommandExceptionType
readonly "prefix": string


public static "writeParsable"(arg0: $MoneyValue$Type): string
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type, arg2: string, arg3: $HolderLookup$Type<($Item$Type)>): $CompletableFuture<($Suggestions)>
public static "parse"(arg0: $StringReader$Type, arg1: boolean): $MoneyValue
public static "readStringUntil"(arg0: $StringReader$Type, ...arg1: (character)[]): string
public static "ParseConfigString"(arg0: string, arg1: $Supplier$Type<($MoneyValue$Type)>): $MoneyValue
public "addExamples"(arg0: $List$Type<(string)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyValueParser$Type = ($MoneyValueParser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyValueParser_ = $MoneyValueParser$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CustomBlockModelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomBlockModelItem extends $BlockItem {
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

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBlockModelItem$Type = ($CustomBlockModelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBlockModelItem_ = $CustomBlockModelItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/input/$TicketStationRecipeInput" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$SuppliedContainer, $SuppliedContainer$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/containers/$SuppliedContainer"
import {$TicketStationRecipe$ExtraData, $TicketStationRecipe$ExtraData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe$ExtraData"

export class $TicketStationRecipeInput extends $SuppliedContainer {
readonly "data": $TicketStationRecipe$ExtraData
readonly "source": $Supplier<($Container)>

constructor(arg0: $Container$Type, arg1: $TicketStationRecipe$ExtraData$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketStationRecipeInput$Type = ($TicketStationRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketStationRecipeInput_ = $TicketStationRecipeInput$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$TradeContext$Builder, $TradeContext$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$ITaxableContext, $ITaxableContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxableContext"
import {$TicketCollectionResult, $TicketCollectionResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ticket/$TicketCollectionResult"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $TradeContext {
readonly "id": long
readonly "isStorageMode": boolean


public "getDiscountCodes"(): $Set<(integer)>
public "hasPaymentMethod"(): boolean
public "drainFluid"(arg0: $FluidStack$Type): boolean
public "canFitFluid"(arg0: $FluidStack$Type): boolean
public "fillFluid"(arg0: $FluidStack$Type): boolean
public "canFitEnergy"(arg0: integer): boolean
public "fillEnergy"(arg0: integer): boolean
public "hasPlayerReference"(): boolean
public "hasTrader"(): boolean
public "getPlayerReference"(): $PlayerReference
public static "createStorageMode"(arg0: $TraderData$Type): $TradeContext
public "hasDiscountCode"(arg0: string): boolean
public "consumeDiscountCode"(arg0: string): void
public "getTaxContext"(): $ITaxableContext
public "canFitItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "canFitItems"(...arg0: ($ItemStack$Type)[]): boolean
public "hasFunds"(arg0: $MoneyValue$Type): boolean
public "hightlightItems"(arg0: $List$Type<($ItemRequirement$Type)>, arg1: $List$Type<($Slot$Type)>, arg2: $List$Type<(integer)>): void
public "getPayment"(arg0: $MoneyValue$Type): boolean
public "collectItem"(arg0: $ItemStack$Type): boolean
public "givePayment"(arg0: $MoneyValue$Type): boolean
public "getCollectableItems"(...arg0: ($ItemRequirement$Type)[]): $List<($ItemStack)>
public "collectItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "hasEnergy"(arg0: integer): boolean
public "hasFluid"(arg0: $FluidStack$Type): boolean
public "hasItems"(...arg0: ($ItemStack$Type)[]): boolean
public "hasItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "hasItems"(...arg0: ($ItemRequirement$Type)[]): boolean
public "hasPlayer"(): boolean
public "getCustomData"(arg0: $ResourceLocation$Type): any
public "getTrader"(): $TraderData
public "hasItem"(arg0: $ItemStack$Type): boolean
public "putItem"(arg0: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public static "create"(arg0: $TraderData$Type, arg1: $PlayerReference$Type): $TradeContext$Builder
public static "create"(arg0: $TraderData$Type, arg1: $PlayerReference$Type, arg2: boolean): $TradeContext$Builder
/**
 * 
 * @deprecated
 */
public static "create"(arg0: $TraderData$Type, arg1: $Player$Type): $TradeContext$Builder
public static "create"(arg0: $TraderData$Type, arg1: $Player$Type, arg2: boolean): $TradeContext$Builder
public "getAvailableFundsDescription"(): $List<($Component)>
public "getPlayer"(): $Player
public "hasInfinitePass"(arg0: long): boolean
public "collectTicket"(arg0: long): $TicketCollectionResult
/**
 * 
 * @deprecated
 */
public "hasPass"(arg0: long): boolean
public "drainEnergy"(arg0: integer): boolean
public "hasTicket"(arg0: long): boolean
public "canFitItem"(arg0: $ItemStack$Type): boolean
public "hasCustomData"(arg0: $ResourceLocation$Type): boolean
public "getAvailableFunds"(): $MoneyView
get "discountCodes"(): $Set<(integer)>
get "playerReference"(): $PlayerReference
get "taxContext"(): $ITaxableContext
get "trader"(): $TraderData
get "availableFundsDescription"(): $List<($Component)>
get "player"(): $Player
get "availableFunds"(): $MoneyView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeContext$Type = ($TradeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeContext_ = $TradeContext$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData" {
import {$NodeSelections, $NodeSelections$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$NodeSelections"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$EjectionData, $EjectionData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ejection/$EjectionData"
import {$TraderState, $TraderState$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderState"
import {$InteractionSlotData, $InteractionSlotData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$InteractionSlotData"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$TraderSettingsClientTab, $TraderSettingsClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$TraderSettingsClientTab"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$TradeDirection, $TradeDirection$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeDirection"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$ITaxableContext, $ITaxableContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxableContext"
import {$TraderInfoClientTab, $TraderInfoClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/info/$TraderInfoClientTab"
import {$SettingsNode, $SettingsNode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/$SettingsNode"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PrettyTextData, $PrettyTextData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/pretty/$PrettyTextData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ISidedObject, $ISidedObject$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$ISidedObject"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$MiscTabAddon, $MiscTabAddon$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/core/addons/$MiscTabAddon"
import {$IPermissions, $IPermissions$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$IPermissions"
import {$InfoSubTab, $InfoSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/info/$InfoSubTab"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$ITaxCollector, $ITaxCollector$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxCollector"
import {$WorldPosition, $WorldPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$MoneyStorage, $MoneyStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PermissionOption, $PermissionOption$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/permissions/$PermissionOption"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$TraderType, $TraderType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderType"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$TraderCategory, $TraderCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/common/notifications/categories/$TraderCategory"
import {$SettingsSubTab, $SettingsSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$SettingsSubTab"
import {$IDumpable, $IDumpable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ejection/$IDumpable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"
import {$TraderAttachment$TraderAttachmentType, $TraderAttachment$TraderAttachmentType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/attachments/$TraderAttachment$TraderAttachmentType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$IOwnable, $IOwnable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$IOwnable"
import {$ISaveableSettingsHolder, $ISaveableSettingsHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/$ISaveableSettingsHolder"
import {$TradeResult, $TradeResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeResult"
import {$TraderAttachment, $TraderAttachment$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/attachments/$TraderAttachment"
import {$TraderBlockEntity, $TraderBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blockentity/$TraderBlockEntity"
import {$SavedSettingData, $SavedSettingData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData"
import {$TradeEvent$TradeCostEvent, $TradeEvent$TradeCostEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent"
import {$ITraderScreen, $ITraderScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderScreen"
import {$ITraderSource, $ITraderSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LoadContext$Builder, $LoadContext$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext$Builder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TradeEvent$PreTradeEvent, $TradeEvent$PreTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$FullTradeResult, $FullTradeResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$FullTradeResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TraderData implements $ISidedObject, $IDumpable, $IUpgradeable, $ITraderSource, $ITradeRuleHost, $ITaxable, $IOwnable, $ISaveableSettingsHolder, $IPermissions {
static readonly "GLOBAL_TRADE_LIMIT": integer
static readonly "LOGS_NORMAL_FILTER": $Predicate<($Notification)>
static readonly "LOGS_SETTINGS_FILTER": $Predicate<($Notification)>
readonly "type": $TraderType<(any)>
readonly "statTracker": $StatTracker


public "getUpgrades"(): $Container
public "loadFromJson"(arg0: $JsonObject$Type): void
public "getLastInteractionTime"(): long
public "validTradeCount"(): integer
public "markUpgradesDirty"(): void
public "allowUpgrade"(arg0: $UpgradeType$Type): boolean
public "allowAccess"(): boolean
public "flagAsClient"(): $TraderData
public "getStoredMoney"(): $IMoneyHolder
public "openTraderMenu"(arg0: $Player$Type, arg1: $MenuValidator$Type): void
/**
 * 
 * @deprecated
 */
public "openTraderMenu"(arg0: $Player$Type): void
public "shouldAlwaysShowOnTerminal"(): boolean
/**
 * 
 * @deprecated
 */
public "openStorageMenu"(arg0: $Player$Type): void
public "openStorageMenu"(arg0: $Player$Type, arg1: $MenuValidator$Type): void
public "buildEjectionData"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EjectionData
public "TryExecuteTrade"(arg0: $TradeContext$Type, arg1: integer): $TradeResult
public "getTradeCount"(): integer
public "getTrade"(arg0: integer): $TradeData
public "canMoneyBeRelevant"(): boolean
public "isMoneyRelevant"(): boolean
public "indexOfTrade"(arg0: $TradeData$Type): integer
public "getTradeStock"(arg0: integer): integer
public static "Deserialize"(arg0: $JsonObject$Type): $TraderData
public static "Deserialize"(arg0: boolean, arg1: $CompoundTag$Type): $TraderData
public "loadSettings"(arg0: $Player$Type, arg1: $SavedSettingData$Type, arg2: $NodeSelections$Type): void
public "getBankAccount"(): $IBankAccount
public "TryExecuteTradeWithResults"(arg0: $TradeContext$Type, arg1: integer): $FullTradeResult
public "incrementStat"<T>(arg0: $StatKey$Type<(any), (T)>, arg1: T): void
public "getTraders"(): $List<($TraderData)>
public "isTrader"(): boolean
public "isTrade"(): boolean
public "saveToJson"(arg0: string, arg1: string): $JsonObject
public "savePersistentData"(): $CompoundTag
public "loadPersistentData"(arg0: $CompoundTag$Type): void
public "getMaxTradeCount"(): integer
public "isCreative"(): boolean
public "pushNotification"(arg0: $Supplier$Type<($Notification$Type)>): void
public "hasBankAccount"(): boolean
public "PickupTrader"(arg0: $Player$Type, arg1: boolean): void
public "isRecoverable"(): boolean
public "setTraderBlockVariant"(arg0: $ResourceLocation$Type, arg1: boolean): void
public "runTradeCostEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type): $TradeEvent$TradeCostEvent
public "runTradeCostEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type): $TradeEvent$TradeCostEvent
/**
 * 
 * @deprecated
 */
public "getApplicableTaxes"(): $List<($ITaxCollector)>
public "getApplicableTaxes"(arg0: $ITaxableContext$Type): $List<($ITaxCollector)>
public "markTradeRulesDirty"(): void
public "setAlwaysShowOnTerminal"(): void
public "hasCustomName"(): boolean
public "alwaysShowSearchBox"(): boolean
public "notificationsEnabled"(): boolean
public "notificationsToChat"(): boolean
public "teamNotificationLevel"(): integer
public "getAllSettingNodes"(): $List<($SettingsNode)>
public "buildLoadContext"(arg0: $LoadContext$Builder$Type): void
public "getBlockedPermissions"(): $List<(string)>
public "allowMarkingDirty"(): $TraderData
public "getClientAttachments"(): $List<(any)>
public "hasAttachment"<T extends $TraderAttachment>(arg0: $TraderAttachment$TraderAttachmentType$Type<(T)>): boolean
public "hasWorldPosition"(): boolean
public "canShowOnTerminal"(): boolean
public "showOnTerminal"(): boolean
public "readyForCustomers"(): boolean
public "hasValidTrade"(): boolean
public "shouldRemove"(arg0: $MinecraftServer$Type): boolean
public "OnTraderMoved"(arg0: $WorldPosition$Type): void
public "saveLevelData"(arg0: $CompoundTag$Type): void
public "setCreative"(arg0: boolean): void
public "shouldStoreCreativeMoney"(): boolean
public "setStoreCreativeMoney"(arg0: boolean): void
public "canStoreMoney"(): boolean
public "getAllies"(): $List<($PlayerReference)>
public "overwriteAllies"(arg0: $List$Type<($PlayerReference$Type)>): void
public "getAllyPermissionKeys"(): $Set<(string)>
public "getAllyPermissionMap"(): $Map<(string), (integer)>
public "overwriteAllyPermissions"(arg0: $Map$Type<(string), (integer)>): void
public "isPersistent"(): boolean
public "getAllyPermissionLevel"(arg0: string): integer
public "setAllyPermissionLevel"(arg0: $Player$Type, arg1: string, arg2: integer): void
public "pushLocalNotification"(arg0: $Notification$Type): void
public "getDisplayIcon"(): $IconData
public "getCustomIcon"(): $IconData
public "setCustomIcon"(arg0: $IconData$Type): void
public "getIconForItem"(arg0: $ItemStack$Type): $IconData
public "getTraderBlock"(): $Item
public "getTraderBlockVariant"(): $ResourceLocation
public "getInternalStoredMoney"(): $MoneyStorage
public "addStoredMoney"(arg0: $MoneyValue$Type, arg1: $ITaxableContext$Type): $MoneyValue
/**
 * 
 * @deprecated
 */
public "addStoredMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "payTaxesOn"(arg0: $MoneyValue$Type): $MoneyValue
public "payTaxesOn"(arg0: $MoneyValue$Type, arg1: $ITaxableContext$Type): $MoneyValue
/**
 * 
 * @deprecated
 */
public "removeStoredMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "removeStoredMoney"(arg0: $MoneyValue$Type, arg1: $ITaxableContext$Type): $MoneyValue
public "CollectStoredMoney"(arg0: $Player$Type): void
public "ShouldIgnoreTaxEntry"(arg0: $ITaxCollector$Type): boolean
public "isLinkedToBank"(): boolean
public "setLinkedToBank"(arg0: boolean): void
public "canLinkBankAccount"(): boolean
public "getBankReference"(): $BankReference
public "showSearchBox"(): boolean
public "setAlwaysShowSearchBox"(arg0: boolean): void
public "setNotificationsEnabled"(arg0: boolean): void
public "setNotificationsToChat"(arg0: boolean): void
public "setTeamNotificationLevel"(arg0: integer): void
public "canEditTradeCount"(): boolean
public "getTradeData"(): $List<(any)>
public "tradesWithStock"(): integer
public "anyTradeHasStock"(): boolean
public "supportsMultiPriceEditing"(): boolean
public "validDirectionOptions"(): $List<($TradeDirection)>
public "getAcceptableTaxRate"(): integer
public "setAcceptableTaxRate"(arg0: integer): void
public "getIgnoredTaxCollectors"(): $List<(long)>
public "setIgnoredTaxCollectors"(arg0: $List$Type<(long)>): void
public "ShouldIgnoreAllTaxes"(): boolean
public "setIgnoreAllTaxes"(arg0: boolean): void
public "ShouldIgnoreTaxEntryOnly"(arg0: $ITaxCollector$Type): boolean
public "getWorldPosition"(): $WorldPosition
public "isNetworkAccessible"(): boolean
public "getPossibleTaxes"(): $List<($ITaxCollector)>
public "getTotalTaxPercentage"(arg0: $ITaxableContext$Type): integer
public "getTotalTaxPercentage"(): integer
public "getTotalTaxPercentageRange"(): $Pair<(integer), (integer)>
public "exceedsAcceptableTaxRate"(arg0: $ITaxableContext$Type): boolean
public "getPersistentID"(): string
public "makePersistent"(arg0: long, arg1: string): void
public "markTradesDirty"(): void
public "markStatsDirty"(): void
public "markAttachmentDirty"(arg0: $TraderAttachment$TraderAttachmentType$Type<(any)>): void
public "canMakePersistent"(): boolean
public "OnRegisteredToOffice"(): void
public static "getTraderMenuProvider"(arg0: $BlockPos$Type, arg1: $MenuValidator$Type): $MenuProvider
public "getMenuDataWriter"(): $Consumer<($FriendlyByteBuf)>
public "runPreTradeEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type): $TradeEvent$PreTradeEvent
public "runPostTradeEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type, arg3: $MoneyValue$Type, arg4: any): void
public "runPostTradeEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type, arg3: $MoneyValue$Type, arg4: $List$Type<(any)>): void
public "runPostTradeEvent"(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type, arg3: $MoneyValue$Type): void
public "getUsers"(): $List<($Player)>
public "getUserCount"(): integer
public "userOpen"(arg0: $Player$Type): void
public "updateUserCount"(arg0: integer): void
public "userClose"(arg0: $Player$Type): void
public "removeTrade"(arg0: $Player$Type): void
public "addInteractionSlots"(arg0: $List$Type<($InteractionSlotData$Type)>): void
public "getStorageTradeFilter"(arg0: $ITraderStorageMenu$Type): $Predicate<($TradeData)>
public "initStorageTabs"(arg0: $ITraderStorageMenu$Type): void
public "handleSettingsChange"(arg0: $Player$Type, arg1: $LazyPacketData$Type): void
/**
 * 
 * @deprecated
 */
public "getSettingsTabs"(arg0: $TraderSettingsClientTab$Type): $List<($SettingsSubTab)>
/**
 * 
 * @deprecated
 */
public "getPermissionOptions"(): $List<($PermissionOption)>
/**
 * 
 * @deprecated
 */
public "getInfoTabs"(arg0: $TraderInfoClientTab$Type): $List<($InfoSubTab)>
/**
 * 
 * @deprecated
 */
public "onScreenInit"(arg0: $ITraderScreen$Type, arg1: $Consumer$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "onStorageScreenInit"(arg0: $ITraderStorageScreen$Type, arg1: $Consumer$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "getMiscTabAddons"(): $List<($MiscTabAddon)>
public "getNotificationCategory"(): $TraderCategory
public "isSingleTrader"(): boolean
public static "getTraderMenuForAllNetworkTraders"(arg0: $MenuValidator$Type): $MenuProvider
public "getTerminalInfo"(arg0: $Player$Type): $List<($Component)>
public "getTerminalTextColor"(): integer
public "getAttachment"<T extends $TraderAttachment>(arg0: $TraderAttachment$TraderAttachmentType$Type<(T)>): T
public "hasPermission"(arg0: $Player$Type, arg1: string): boolean
public "hasPermission"(arg0: $PlayerReference$Type, arg1: string): boolean
public "addTrade"(arg0: $Player$Type): void
public "getCustomName"(): string
public "setCustomName"(arg0: string): void
public "getPos"(): $BlockPos
public "getPermissionLevel"(arg0: $PlayerReference$Type, arg1: string): integer
public "getPermissionLevel"(arg0: $Player$Type, arg1: string): integer
public "getNotifications"(): $List<($Notification)>
public "getNotifications"(arg0: $Predicate$Type<($Notification$Type)>): $List<($Notification)>
public "getNotifications"(arg0: boolean): $List<($Notification)>
public "getName"(): $MutableComponent
public "getReference"(): $TaxableReference
public "load"(arg0: $CompoundTag$Type): void
public "getState"(): $TraderState
public "save"(): $CompoundTag
public "getNode"(arg0: string): $SettingsNode
public "getOwner"(): $OwnerData
public "move"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getID"(): long
public "getRules"(): $List<($TradeRule)>
public "getContents"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): $List<($ItemStack)>
public "getContents"(arg0: $ItemStack$Type): $List<($ItemStack)>
public "setID"(arg0: long): void
public "setState"(arg0: $TraderState$Type): void
public "getLevel"(): $ResourceKey<($Level)>
public "getIcon"(): $IconData
public "isClient"(): boolean
public "getTitle"(): $MutableComponent
public "getBlockEntity"(): $TraderBlockEntity<(any)>
public "isServer"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public static "preCollected"(arg0: $List$Type<($ItemStack$Type)>, arg1: $Component$Type, arg2: $OwnerData$Type): $IDumpable
public "allowUpgrade"(arg0: $UpgradeItem$Type): boolean
public "quickInsertUpgrade"(arg0: $ItemStack$Type): boolean
public static "NetworkTraderSource"(arg0: boolean): $Supplier<($ITraderSource)>
public "getSingleTrader"(): $TraderData
public "getCustomTitle"(): $Component
public "allowTradeRule"(arg0: $TradeRule$Type): boolean
public "getRuleOfType"(arg0: $ResourceLocation$Type): $TradeRule
public "validateRuleStates"(): void
public "HandleRuleUpdate"(arg0: $Player$Type, arg1: $ResourceLocation$Type, arg2: $LazyPacketData$Type): void
public "getPossibleContexts"(): $Set<($ITaxableContext)>
public "saveSettings"(): $SavedSettingData
public "saveSettings"(arg0: $Player$Type, arg1: $NodeSelections$Type): $SavedSettingData
public "defaultNodeSelections"(arg0: $Player$Type): $NodeSelections
public "writePrettySettings"(arg0: $SavedSettingData$Type): $PrettyTextData
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
get "upgrades"(): $Container
get "lastInteractionTime"(): long
get "storedMoney"(): $IMoneyHolder
get "tradeCount"(): integer
get "moneyRelevant"(): boolean
get "bankAccount"(): $IBankAccount
get "traders"(): $List<($TraderData)>
get "trader"(): boolean
get "trade"(): boolean
get "maxTradeCount"(): integer
get "creative"(): boolean
get "recoverable"(): boolean
get "applicableTaxes"(): $List<($ITaxCollector)>
get "allSettingNodes"(): $List<($SettingsNode)>
get "blockedPermissions"(): $List<(string)>
get "clientAttachments"(): $List<(any)>
set "creative"(value: boolean)
set "storeCreativeMoney"(value: boolean)
get "allies"(): $List<($PlayerReference)>
get "allyPermissionKeys"(): $Set<(string)>
get "allyPermissionMap"(): $Map<(string), (integer)>
get "persistent"(): boolean
get "displayIcon"(): $IconData
get "customIcon"(): $IconData
set "customIcon"(value: $IconData$Type)
get "traderBlock"(): $Item
get "traderBlockVariant"(): $ResourceLocation
get "internalStoredMoney"(): $MoneyStorage
get "linkedToBank"(): boolean
set "linkedToBank"(value: boolean)
get "bankReference"(): $BankReference
get "tradeData"(): $List<(any)>
get "acceptableTaxRate"(): integer
set "acceptableTaxRate"(value: integer)
get "ignoredTaxCollectors"(): $List<(long)>
set "ignoredTaxCollectors"(value: $List$Type<(long)>)
set "ignoreAllTaxes"(value: boolean)
get "worldPosition"(): $WorldPosition
get "networkAccessible"(): boolean
get "possibleTaxes"(): $List<($ITaxCollector)>
get "totalTaxPercentage"(): integer
get "totalTaxPercentageRange"(): $Pair<(integer), (integer)>
get "persistentID"(): string
get "menuDataWriter"(): $Consumer<($FriendlyByteBuf)>
get "users"(): $List<($Player)>
get "userCount"(): integer
get "permissionOptions"(): $List<($PermissionOption)>
get "miscTabAddons"(): $List<($MiscTabAddon)>
get "notificationCategory"(): $TraderCategory
get "singleTrader"(): boolean
get "terminalTextColor"(): integer
get "customName"(): string
set "customName"(value: string)
get "pos"(): $BlockPos
get "notifications"(): $List<($Notification)>
get "name"(): $MutableComponent
get "reference"(): $TaxableReference
get "state"(): $TraderState
get "owner"(): $OwnerData
get "iD"(): long
get "rules"(): $List<($TradeRule)>
set "iD"(value: long)
set "state"(value: $TraderState$Type)
get "level"(): $ResourceKey<($Level)>
get "icon"(): $IconData
get "client"(): boolean
get "title"(): $MutableComponent
get "blockEntity"(): $TraderBlockEntity<(any)>
get "server"(): boolean
get "singleTrader"(): $TraderData
get "customTitle"(): $Component
get "possibleContexts"(): $Set<($ITaxableContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderData$Type = ($TraderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderData_ = $TraderData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$CoinMagnetEnchantment" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WalletEnchantment, $WalletEnchantment$Type} from "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$WalletEnchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IWalletHandler, $IWalletHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/common/capability/wallet/$IWalletHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CoinMagnetEnchantment extends $WalletEnchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, ...arg1: ($EquipmentSlot$Type)[])

public static "runEntityTick"(arg0: $IWalletHandler$Type, arg1: $LivingEntity$Type): void
public "addWalletTooltips"(arg0: $List$Type<($Component$Type)>, arg1: integer, arg2: $ItemStack$Type): void
public static "getCollectionRange"(arg0: integer): float
public static "coinMagnetEntityFilter"(arg0: $Entity$Type, arg1: $LivingEntity$Type): boolean
public static "getCollectionRangeDisplay"(arg0: integer): $Component
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMagnetEnchantment$Type = ($CoinMagnetEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMagnetEnchantment_ = $CoinMagnetEnchantment$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/mixin/client/$ModelManagerAccessor" {
import {$AtlasSet, $AtlasSet$Type} from "packages/net/minecraft/client/resources/model/$AtlasSet"

export interface $ModelManagerAccessor {

 "getAtlases"(): $AtlasSet

(): $AtlasSet
}

export namespace $ModelManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelManagerAccessor$Type = ($ModelManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelManagerAccessor_ = $ModelManagerAccessor$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$WalletUpgradeRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $WalletUpgradeRecipe implements $CraftingRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "category"(): $CraftingBookCategory
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
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
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
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
export type $WalletUpgradeRecipe$Type = ($WalletUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletUpgradeRecipe_ = $WalletUpgradeRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $DisplayData extends $Record {

constructor(xOffset: integer, yOffset: integer, width: integer, height: integer)

public "asArea"(): $ScreenArea
public "xOffset"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "divide"(arg0: integer): $List<($DisplayData)>
public "width"(): integer
public "height"(): integer
public "yOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayData$Type = ($DisplayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayData_ = $DisplayData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$ProductComparisonResult" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ProductComparisonResult {


public "Identical"(): boolean
public static "CreateRaw"(arg0: boolean, arg1: boolean, arg2: integer): $ProductComparisonResult
public static "CompareItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ProductComparisonResult
public static "CompareItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): $ProductComparisonResult
public static "CompareFluid"(arg0: $FluidStack$Type, arg1: $FluidStack$Type): $ProductComparisonResult
public static "CompareEnergy"(arg0: integer, arg1: integer): $ProductComparisonResult
public static "CompareTwoItems"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $List<($ProductComparisonResult)>
public static "CompareTwoItems"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: boolean): $List<($ProductComparisonResult)>
public "SameProductType"(): boolean
public "SameProductNBT"(): boolean
public "ProductQuantityDifference"(): integer
public "SameProductQuantity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProductComparisonResult$Type = ($ProductComparisonResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProductComparisonResult_ = $ProductComparisonResult$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/$SettingsSubNode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SettingsNode, $SettingsNode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/$SettingsNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$SavedSettingData$NodeAccess, $SavedSettingData$NodeAccess$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$NodeAccess"
import {$SavedSettingData$MutableNodeAccess, $SavedSettingData$MutableNodeAccess$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$MutableNodeAccess"
import {$SavedSettingData, $SavedSettingData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData"
import {$LoadContext, $LoadContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SettingsSubNode<T extends $SettingsNode> implements $IClientTracker {

constructor(arg0: T)

public "allowSelecting"(arg0: $Player$Type): boolean
public "loadSettings"(arg0: $SavedSettingData$NodeAccess$Type, arg1: $LoadContext$Type): void
public "saveSettings"(arg0: $SavedSettingData$MutableNodeAccess$Type): void
public "allowSaving"(arg0: $Player$Type): boolean
public "getSubKey"(): string
public "getFullKey"(): string
public "writeAsText"(arg0: $SavedSettingData$Type, arg1: $Consumer$Type<($Component$Type)>): void
public "allowLoading"(arg0: $LoadContext$Type): boolean
public "getName"(): $MutableComponent
public "isClient"(): boolean
public "isServer"(): boolean
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
get "subKey"(): string
get "fullKey"(): string
get "name"(): $MutableComponent
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsSubNode$Type<T> = ($SettingsSubNode<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsSubNode_<T> = $SettingsSubNode$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView$Builder" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $MoneyView$Builder {


public "add"(arg0: $Collection$Type<($MoneyValue$Type)>): $MoneyView$Builder
public "add"(arg0: $MoneyValue$Type): $MoneyView$Builder
public "merge"(arg0: $IMoneyViewer$Type): $MoneyView$Builder
public "merge"(arg0: $MoneyView$Builder$Type): $MoneyView$Builder
public "merge"(arg0: $MoneyView$Type): $MoneyView$Builder
public "build"(): $MoneyView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyView$Builder$Type = ($MoneyView$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyView$Builder_ = $MoneyView$Builder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientUnenforcedTabbedMenuScreen" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$EasyClientTab$ClientMenuScreen, $EasyClientTab$ClientMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab$ClientMenuScreen"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EasyClientTab, $EasyClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $EasyClientUnenforcedTabbedMenuScreen<M extends $AbstractContainerMenu, S extends $EasyClientUnenforcedTabbedMenuScreen<(M), (S), (T)>, T extends $EasyClientTab<(M), (S), (T)>> extends $EasyClientTab$ClientMenuScreen<(M), (S), (T)> {
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "quickdropSlot": $Slot
 "lastClickSlot": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickdropTime": long
 "quickCraftingType": integer
 "quickCraftingButton": integer
 "skipNextRelease": boolean
 "quickCraftingRemainder": integer
 "lastClickTime": long
 "lastClickButton": integer
 "doubleclick": boolean
 "lastQuickMoved": $ItemStack
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font


public "setTab"(arg0: T): void
public "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
public "currentTab"(): T
public "blockInventoryClosing"(): boolean
public "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
public "closeTab"(): void
public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
set "tab"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyClientUnenforcedTabbedMenuScreen$Type<M, S, T> = ($EasyClientUnenforcedTabbedMenuScreen<(M), (S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyClientUnenforcedTabbedMenuScreen_<M, S, T> = $EasyClientUnenforcedTabbedMenuScreen$Type<(M), (S), (T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/permissions/$PermissionOption" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PermissionsTab, $PermissionsTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/core/$PermissionsTab"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $PermissionOption {
readonly "permission": string


public "widgetName"(): $MutableComponent
public "widgetTooltip"(): $MutableComponent
public "updateWidgetPosition"(arg0: integer, arg1: integer): void
public "widgetWidth"(): integer
public "initWidgets"(arg0: $PermissionsTab$Type, arg1: integer, arg2: integer, arg3: $Consumer$Type<(any)>): void
public "setValue"(arg0: integer): void
public "setValue"(arg0: boolean): void
public "tick"(): void
public "render"(arg0: $EasyGuiGraphics$Type): void
set "value"(value: integer)
set "value"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionOption$Type = ($PermissionOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionOption_ = $PermissionOption$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/$IServerTicker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IServerTicker {

 "serverTick"(): void

(): void
}

export namespace $IServerTicker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerTicker$Type = ($IServerTicker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerTicker_ = $IServerTicker$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/mixin/$AbstractContainerMenuAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerMenuAccessor {

 "addCustomSlot"(arg0: $Slot$Type): $Slot

(arg0: $Slot$Type): $Slot
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/$AttachmentType" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentSound, $AttachmentSound$Type} from "packages/io/github/mortuusars/exposure/camera/$AttachmentSound"

export class $AttachmentType extends $Record {

constructor(id: string, slot: integer, itemPredicate: $Predicate$Type<($ItemStack$Type)>, sound: $AttachmentSound$Type)

public "itemPredicate"(): $Predicate<($ItemStack)>
public "slot"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(stack: $ItemStack$Type): boolean
public "id"(): string
public "sound"(): $AttachmentSound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Type = ($AttachmentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_ = $AttachmentType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IVariantBlock {

 "getValidVariants"(): $List<($ResourceLocation)>
 "requiredModels"(): integer
 "getItemID"(): $ResourceLocation
 "getModelIndex"(arg0: $BlockState$Type): integer
 "getBlockID"(): $ResourceLocation
 "isRotatable"(): boolean
 "modelsFromBlockState"(): integer
 "getCustomDefaultModel"(arg0: integer): $ResourceLocation
}

export namespace $IVariantBlock {
const VARIANT: $BooleanProperty
function copyDataToItem(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
function copyDataToItem(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
function copyDataFromItem(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
function tryUseWand(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariantBlock$Type = ($IVariantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariantBlock_ = $IVariantBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem$Simple" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem$Simple extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UpgradeType$Type, arg1: $Item$Properties$Type)

public "setDefaultValues"(arg0: $UpgradeData$Mutable$Type): void
set "defaultValues"(value: $UpgradeData$Mutable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Simple$Type = ($UpgradeItem$Simple);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem$Simple_ = $UpgradeItem$Simple$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$EasyMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EasyMenu extends $AbstractContainerMenu implements $IClientTracker {
readonly "player": $Player
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


public static "encoder"(arg0: $MenuValidator$Type): $Consumer<($FriendlyByteBuf)>
public static "encoder"(arg0: $Consumer$Type<($FriendlyByteBuf$Type)>, arg1: $MenuValidator$Type): $Consumer<($FriendlyByteBuf)>
public static "encoder"(arg0: $BlockPos$Type, arg1: $MenuValidator$Type): $Consumer<($FriendlyByteBuf)>
public "isClient"(): boolean
public "stillValid"(arg0: $Player$Type): boolean
public "removeValidator"(arg0: $MenuValidator$Type): void
public static "nullEncoder"(): $Consumer<($FriendlyByteBuf)>
public "addValidator"(arg0: $Function$Type<($Player$Type), (boolean)>): void
public "addValidator"(arg0: $MenuValidator$Type): void
public "addValidator"(arg0: $Supplier$Type<(boolean)>): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMenu$Type = ($EasyMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMenu_ = $EasyMenu$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags$FlagType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EntityFlags$FlagType extends $Enum<($EntityFlags$FlagType)> {
static readonly "UNDEF": $EntityFlags$FlagType
static readonly "TRUE": $EntityFlags$FlagType
static readonly "FALSE": $EntityFlags$FlagType


public static "values"(): ($EntityFlags$FlagType)[]
public static "valueOf"(name: string): $EntityFlags$FlagType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlags$FlagType$Type = (("undef") | ("true") | ("false")) | ($EntityFlags$FlagType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlags$FlagType_ = $EntityFlags$FlagType$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$PhotographItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhotographItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getTooltipImage"(stack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographItem$Type = ($PhotographItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographItem_ = $PhotographItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$MasterTicketRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$DurabilityData, $DurabilityData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/durability/$DurabilityData"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TicketStationRecipeInput, $TicketStationRecipeInput$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/input/$TicketStationRecipeInput"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TicketStationRecipe, $TicketStationRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$TicketStationRecipe$ExtraData, $TicketStationRecipe$ExtraData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe$ExtraData"

export class $MasterTicketRecipe implements $TicketStationRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Item$Type)

public "assembleWithKiosk"(arg0: $ItemStack$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
public "consumeModifier"(): boolean
public "validModifier"(arg0: $ItemStack$Type): boolean
public "jeiModifierList"(): $List<($ItemStack)>
public "validIngredient"(arg0: $ItemStack$Type): boolean
public "peekAtResult"(arg0: $Container$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
public "exampleResult"(): $ItemStack
public "assemble"(arg0: $TicketStationRecipeInput$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredient"(): $Ingredient
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "validateDurability"(arg0: integer, arg1: boolean): integer
public "matchesTicketKioskSellItem"(arg0: $ItemStack$Type): boolean
public "allowIgnoreKioskRecipe"(): boolean
public "getKioskStorageRequirement"(arg0: $ItemStack$Type): $ItemRequirement
public static "validCodeChar"(arg0: character): boolean
public static "exampleModifierList"(arg0: $TagKey$Type<($Item$Type)>, ...arg1: ($Item$Type)[]): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Item$Type): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $RegistryObject$Type<(any)>): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Ingredient$Type): $List<($ItemStack)>
public "validData"(arg0: $TicketStationRecipe$ExtraData$Type): boolean
public "validCode"(arg0: string): boolean
public "validDurability"(arg0: integer): boolean
public "requiredCodeInput"(): boolean
public "requiredDurabilityInput"(): boolean
public "getDurabilityData"(): $DurabilityData
public "getToastSymbol"(): $ItemStack
public "matches"(arg0: $TicketStationRecipeInput$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $TicketStationRecipeInput$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
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
get "serializer"(): $RecipeSerializer<(any)>
get "durabilityData"(): $DurabilityData
get "toastSymbol"(): $ItemStack
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $MasterTicketRecipe$Type = ($MasterTicketRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MasterTicketRecipe_ = $MasterTicketRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AlertData, $AlertData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertData"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TradeEvent, $TradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent"

export class $TradeEvent$PreTradeEvent extends $TradeEvent {

constructor()
constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type)

public "addAlert"(arg0: $AlertData$Type, arg1: boolean): void
public "addNeutral"(arg0: $MutableComponent$Type): void
public "addError"(arg0: $MutableComponent$Type): void
public "getAlertInfo"(): $List<($AlertData)>
public "addDenial"(arg0: $MutableComponent$Type): void
public "addHelpful"(arg0: $MutableComponent$Type): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "addWarning"(arg0: $MutableComponent$Type): void
get "alertInfo"(): $List<($AlertData)>
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$PreTradeEvent$Type = ($TradeEvent$PreTradeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent$PreTradeEvent_ = $TradeEvent$PreTradeEvent$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$GachaMachineBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GachaMachineBlock extends $TraderBlockRotatable implements $IVariantBlock {
static readonly "BASIC_MODELS": $List<($ResourceLocation)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Color$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer)

public "getBasicModels"(): $List<($ResourceLocation)>
public "getColor"(): integer
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "basicModels"(): $List<($ResourceLocation)>
get "color"(): integer
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GachaMachineBlock$Type = ($GachaMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GachaMachineBlock_ = $GachaMachineBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatType, $StatType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$StatType$Instance, $StatType$Instance$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType$Instance"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StatTracker implements $IClientTracker {

constructor(arg0: $Runnable$Type, arg1: $IClientTracker$Type)

public "getDisplayLines"(): $List<($MutableComponent)>
public "getStat"<T>(arg0: $StatKey$Type<(T), (any)>, arg1: T): T
public "getStat"(arg0: string): $StatType$Instance<(any), (any)>
public "incrementStat"<T>(arg0: $StatKey$Type<(any), (T)>, arg1: T): void
public "setChanged"(): void
public "load"(arg0: $CompoundTag$Type): void
public "clear"(arg0: boolean): void
public "clear"(): void
public "save"(): $CompoundTag
public "getKeys"(): $Set<(string)>
public "isClient"(): boolean
public "addStat"<A, B>(arg0: string, arg1: $StatType$Instance$Type<(A), (B)>): $StatType$Instance<(A), (B)>
public "addStat"<A, B>(arg0: string, arg1: $StatType$Type<(A), (B)>): $StatType$Instance<(A), (B)>
public "addStat"<A, B>(arg0: $StatKey$Type<(A), (B)>): $StatType$Instance<(A), (B)>
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
get "displayLines"(): $List<($MutableComponent)>
get "keys"(): $Set<(string)>
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatTracker$Type = ($StatTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatTracker_ = $StatTracker$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TraderState extends $Enum<($TraderState)> {
static readonly "NORMAL": $TraderState
static readonly "HELD_AS_ITEM": $TraderState
static readonly "ADMIN_HELD_AS_ITEM": $TraderState
static readonly "MOVED_BY_MACHINE": $TraderState
static readonly "EJECTED": $TraderState
static readonly "PERSISTENT": $TraderState
readonly "validateWorldPosition": boolean
readonly "allowAccess": boolean
readonly "allowRecovery": boolean


public "shouldEject"(): boolean
public static "values"(): ($TraderState)[]
public static "valueOf"(arg0: string): $TraderState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderState$Type = (("normal") | ("held_as_item") | ("ejected") | ("persistent") | ("admin_held_as_item") | ("moved_by_machine")) | ($TraderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderState_ = $TraderState$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientSubTab" {
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TradeRulesTab, $TradeRulesTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TradeRulesTab"
import {$TradeRulesClientTab, $TradeRulesClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientTab"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $TradeRulesClientSubTab extends $EasyTab {
readonly "parent": $TradeRulesClientTab<(any)>
readonly "commonTab": $TradeRulesTab
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu


public "isVisible"(): boolean
public "removeChild"(arg0: any): void
public "addChild"<T>(arg0: T): T
public "getTradeRules"(): $List<($TradeRule)>
public "getFilteredRules"(): $List<($TradeRule)>
get "visible"(): boolean
get "tradeRules"(): $List<($TradeRule)>
get "filteredRules"(): $List<($TradeRule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRulesClientSubTab$Type = ($TradeRulesClientSubTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRulesClientSubTab_ = $TradeRulesClientSubTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CoinMintRecipe, $CoinMintRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CoinMintRecipe$Serializer implements $RecipeSerializer<($CoinMintRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CoinMintRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CoinMintRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CoinMintRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CoinMintRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMintRecipe$Serializer$Type = ($CoinMintRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMintRecipe$Serializer_ = $CoinMintRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$InteractionType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TraderInterfaceBlockEntity$InteractionType extends $Enum<($TraderInterfaceBlockEntity$InteractionType)> {
static readonly "RESTOCK_AND_DRAIN": $TraderInterfaceBlockEntity$InteractionType
static readonly "RESTOCK": $TraderInterfaceBlockEntity$InteractionType
static readonly "DRAIN": $TraderInterfaceBlockEntity$InteractionType
static readonly "TRADE": $TraderInterfaceBlockEntity$InteractionType
readonly "index": integer


public "targetsTraders"(): boolean
public "restocks"(): boolean
public "drains"(): boolean
public "getDisplayText"(): $Component
public "trades"(): boolean
public static "values"(): ($TraderInterfaceBlockEntity$InteractionType)[]
public static "valueOf"(arg0: string): $TraderInterfaceBlockEntity$InteractionType
public static "size"(): integer
public static "fromIndex"(arg0: integer): $TraderInterfaceBlockEntity$InteractionType
get "displayText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlockEntity$InteractionType$Type = (("trade") | ("restock_and_drain") | ("restock") | ("drain")) | ($TraderInterfaceBlockEntity$InteractionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlockEntity$InteractionType_ = $TraderInterfaceBlockEntity$InteractionType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidatorType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"

export class $MenuValidatorType {
readonly "type": $ResourceLocation


public "load"(arg0: $CompoundTag$Type): $MenuValidator
public "decode"(arg0: $FriendlyByteBuf$Type): $MenuValidator
public static "register"(arg0: $MenuValidatorType$Type): void
public static "getType"(arg0: $ResourceLocation$Type): $MenuValidatorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuValidatorType$Type = ($MenuValidatorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuValidatorType_ = $MenuValidatorType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$MutableNodeAccess" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $SavedSettingData$MutableNodeAccess {


public "setFloatValue"(arg0: string, arg1: float): void
public "hasBoolValue"(arg0: string): boolean
public "hasLongValue"(arg0: string): boolean
public "setIntValue"(arg0: string, arg1: integer): void
public "setCompoundValue"(arg0: string, arg1: $CompoundTag$Type): void
public "hasCompoundValue"(arg0: string): boolean
public "getCompoundValue"(arg0: string): $CompoundTag
public "forSubNode"(arg0: string): $SavedSettingData$MutableNodeAccess
public "hasDoubleValue"(arg0: string): boolean
public "hasFloatValue"(arg0: string): boolean
public "hasIntValue"(arg0: string): boolean
public "getFloatValue"(arg0: string): float
public "setLongValue"(arg0: string, arg1: long): void
public "setDoubleValue"(arg0: string, arg1: double): void
public "setBooleanValue"(arg0: string, arg1: boolean): void
public "setStringValue"(arg0: string, arg1: string): void
public "getLongValue"(arg0: string): long
public "getStringValue"(arg0: string): string
public "hasStringValue"(arg0: string): boolean
public "getDoubleValue"(arg0: string): double
public "getBooleanValue"(arg0: string): boolean
public "getIntValue"(arg0: string): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SavedSettingData$MutableNodeAccess$Type = ($SavedSettingData$MutableNodeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SavedSettingData$MutableNodeAccess_ = $SavedSettingData$MutableNodeAccess$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ITradeRuleHost {

 "canMoneyBeRelevant"(): boolean
 "isMoneyRelevant"(): boolean
 "allowTradeRule"(arg0: $TradeRule$Type): boolean
 "isTrader"(): boolean
 "isTrade"(): boolean
 "markTradeRulesDirty"(): void
 "getRuleOfType"(arg0: $ResourceLocation$Type): $TradeRule
 "validateRuleStates"(): void
 "HandleRuleUpdate"(arg0: $Player$Type, arg1: $ResourceLocation$Type, arg2: $LazyPacketData$Type): void
 "getRules"(): $List<($TradeRule)>
}

export namespace $ITradeRuleHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITradeRuleHost$Type = ($ITradeRuleHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITradeRuleHost_ = $ITradeRuleHost$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab" {
import {$FixedSizeSprite, $FixedSizeSprite$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/sprites/$FixedSizeSprite"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$WidgetRotation, $WidgetRotation$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$WidgetRotation"
import {$IEasyTickable, $IEasyTickable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$IEasyTickable"
import {$LazyPacketData$IBuilderProvider, $LazyPacketData$IBuilderProvider$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$IBuilderProvider"
import {$ITab, $ITab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/tab/$ITab"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export class $EasyTab implements $ITab, $IEasyTickable, $LazyPacketData$IBuilderProvider {


public "getClipboard"(): string
public "setClipboard"(arg0: string): void
public "removeChild"(arg0: any): void
public "builder"(): $LazyPacketData$Builder
public "onClose"(): void
public "tick"(): void
public "addChild"<T>(arg0: T): T
public "getFont"(): $Font
public "onOpen"(): void
public "blockInventoryClosing"(): boolean
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
public "getTooltip"(): $Component
public "getIcon"(): $IconData
public "getSprite"(): $Function<($WidgetRotation), ($FixedSizeSprite)>
get "clipboard"(): string
set "clipboard"(value: string)
get "font"(): $Font
get "tooltip"(): $Component
get "icon"(): $IconData
get "sprite"(): $Function<($WidgetRotation), ($FixedSizeSprite)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyTab$Type = ($EasyTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyTab_ = $EasyTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ICapabilityBlock, $ICapabilityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ICapabilityBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITraderBlock extends $IOwnableBlock, $ICapabilityBlock {

 "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity
 "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
 "getCapabilityBlockPos"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockPos
}

export namespace $ITraderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderBlock$Type = ($ITraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderBlock_ = $ITraderBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PhotographAgingRecipe, $PhotographAgingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PhotographAgingRecipe$Serializer implements $RecipeSerializer<($PhotographAgingRecipe)> {

constructor()

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $PhotographAgingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $PhotographAgingRecipe$Type): void
public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $PhotographAgingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PhotographAgingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographAgingRecipe$Serializer$Type = ($PhotographAgingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographAgingRecipe$Serializer_ = $PhotographAgingRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketRecipe$Serializer" {
import {$TicketRecipe, $TicketRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TicketRecipe$Serializer implements $RecipeSerializer<($TicketRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TicketRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TicketRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TicketRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TicketRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketRecipe$Serializer$Type = ($TicketRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketRecipe$Serializer_ = $TicketRecipe$Serializer$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixin/$MobEntityMixin" {
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MobEntityMixin {

 "setDeathLootTable"(arg0: $ResourceLocation$Type): void
 "getTrueNavigator"(): $PathNavigation
}

export namespace $MobEntityMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEntityMixin$Type = ($MobEntityMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEntityMixin_ = $MobEntityMixin$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext$Builder" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$InteractionSlot, $InteractionSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$InteractionSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$IDiscountCodeSource, $IDiscountCodeSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/discount_codes/$IDiscountCodeSource"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $TradeContext$Builder {


public "withMoneyHandler"(arg0: $IMoneyHandler$Type, arg1: $Component$Type, arg2: integer): $TradeContext$Builder
public "withMoneyHandler"(arg0: $IMoneyHandler$Type, arg1: $Component$Type, arg2: integer, arg3: integer): $TradeContext$Builder
public "withFluidHandler"(arg0: $IFluidHandler$Type): $TradeContext$Builder
public "withEnergyHandler"(arg0: $IEnergyStorage$Type): $TradeContext$Builder
public "withBankAccount"(arg0: $BankReference$Type): $TradeContext$Builder
public "build"(): $TradeContext
public "withItemHandler"(arg0: $IItemHandler$Type): $TradeContext$Builder
public "withDiscountCodes"(arg0: $Container$Type, arg1: $Consumer$Type<($ItemStack$Type)>): $TradeContext$Builder
public "withDiscountCodes"(arg0: $IDiscountCodeSource$Type): $TradeContext$Builder
public "withCoinSlots"(arg0: $Container$Type): $TradeContext$Builder
public "withInteractionSlot"(arg0: $InteractionSlot$Type): $TradeContext$Builder
public "withMoneyHolder"(arg0: $IMoneyHolder$Type): $TradeContext$Builder
public "withCustomData"(arg0: $ResourceLocation$Type, arg1: any): $TradeContext$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeContext$Builder$Type = ($TradeContext$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeContext$Builder_ = $TradeContext$Builder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/client/sprites/$SpriteSource" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpriteSource extends $Record {

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor(texture: $ResourceLocation$Type, u: integer, v: integer, width: integer, height: integer, textureWidth: integer, textureHeight: integer)

public "texture"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "v"(): integer
public static "create"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $SpriteSource
public "u"(): integer
public "width"(): integer
public "height"(): integer
public "textureWidth"(): integer
public "textureHeight"(): integer
public static "createBottom"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $SpriteSource
public static "modifyTexture"(arg0: $ResourceLocation$Type): $ResourceLocation
public static "createTop"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $SpriteSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$Type = ($SpriteSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteSource_ = $SpriteSource$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traderinterface/handlers/$SidedHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"

export class $SidedHandler<H> {

constructor()

public "receiveMessage"(arg0: $CompoundTag$Type): void
public "sendMessage"(arg0: $CompoundTag$Type): void
public "markDirty"(): void
public "load"(arg0: $CompoundTag$Type): void
public "getParent"(): $TraderInterfaceBlockEntity
public "save"(): $CompoundTag
public "getType"(): $ResourceLocation
public "setParent"(arg0: $TraderInterfaceBlockEntity$Type): void
public "getHandler"(arg0: $Direction$Type): H
public "getTag"(): string
get "parent"(): $TraderInterfaceBlockEntity
get "type"(): $ResourceLocation
set "parent"(value: $TraderInterfaceBlockEntity$Type)
get "tag"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SidedHandler$Type<H> = ($SidedHandler<(H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SidedHandler_<H> = $SidedHandler$Type<(H)>;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$EntityRenderDispatcherAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $EntityRenderDispatcherAccessor {

 "getRenderers"(): $Map<($EntityType<(any)>), ($EntityRenderer<(any)>)>

(): $Map<($EntityType<(any)>), ($EntityRenderer<(any)>)>
}

export namespace $EntityRenderDispatcherAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcherAccessor$Type = ($EntityRenderDispatcherAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderDispatcherAccessor_ = $EntityRenderDispatcherAccessor$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView$Builder, $MoneyView$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView$Builder"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $MoneyView {


public "capValue"(arg0: $MoneyValue$Type): $MoneyValue
public "getAllText"(...arg0: ($ChatFormatting$Type)[]): $List<($Component)>
public "allValues"(): $List<($MoneyValue)>
public "valueOf"(arg0: string): $MoneyValue
public "isEmpty"(): boolean
public static "builder"(): $MoneyView$Builder
public static "empty"(): $MoneyView
public "containsValue"(arg0: $MoneyValue$Type): boolean
public static "singleton"(arg0: $MoneyValue$Type): $MoneyView
public "getString"(): string
public "getRandomValueLine"(arg0: $MutableComponent$Type): $Component
public "getRandomValueLine"(arg0: string): $Component
public "getRandomValueLine"(): $Component
public "getRandomValue"(): $MoneyValue
public "getRandomValueText"(): $MutableComponent
public "getRandomValueText"(arg0: string): $MutableComponent
public "getRandomValueText"(arg0: $MutableComponent$Type): $MutableComponent
get "string"(): string
get "randomValueLine"(): $Component
get "randomValue"(): $MoneyValue
get "randomValueText"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyView$Type = ($MoneyView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyView_ = $MoneyView$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinChestBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$IUpgradeableBlock, $IUpgradeableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CoinChestBlock extends $RotatableBlock implements $IEasyEntityBlock, $IOwnableBlock, $IUpgradeableBlock {
static readonly "WATERLOGGED": $BooleanProperty
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

public "canUseUpgradeItem"(arg0: $IUpgradeable$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getUpgradeable"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $IUpgradeable
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinChestBlock$Type = ($CoinChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinChestBlock_ = $CoinChestBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$IFilmItem" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"

export interface $IFilmItem {

 "getDefaultFrameSize"(): integer
 "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
 "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
 "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
 "getFrameSize"(filmStack: $ItemStack$Type): integer
 "getExposedFramesCount"(stack: $ItemStack$Type): integer
 "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
 "getType"(): $FilmType

(): integer
}

export namespace $IFilmItem {
const FRAME_COUNT_TAG: string
const FRAME_SIZE_TAG: string
const FRAMES_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilmItem$Type = ($IFilmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilmItem_ = $IFilmItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/bank/salary/$CustomTarget" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $CustomTarget extends $IClientTracker {

 "getName"(): $Component
 "getTargets"(): $List<($BankReference)>
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $CustomTarget {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTarget$Type = ($CustomTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTarget_ = $CustomTarget$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(T)>> {

 "getLayers"(): $List<($RenderLayer<(T), (M)>)>

(): $List<($RenderLayer<(T), (M)>)>
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$Type<T, M> = ($LivingEntityRendererAccessor<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityRendererAccessor_<T, M> = $LivingEntityRendererAccessor$Type<(T), (M)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/types/$IPlayerMoneyHandler" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export interface $IPlayerMoneyHandler extends $IMoneyHandler {

 "updatePlayer"(arg0: $Player$Type): void
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "getStoredMoney"(): $MoneyView
}

export namespace $IPlayerMoneyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerMoneyHandler$Type = ($IPlayerMoneyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerMoneyHandler_ = $IPlayerMoneyHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$SalaryData, $SalaryData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/salary/$SalaryData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomTarget, $CustomTarget$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/salary/$CustomTarget"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyStorage, $MoneyStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IBankAccount extends $IMoneyHolder, $IClientTracker {

 "isCardValid"(arg0: integer): boolean
 "getBalanceText"(): $MutableComponent
 "depositMoney"(arg0: $MoneyValue$Type): void
 "withdrawMoney"(arg0: $MoneyValue$Type): $MoneyValue
 "onPlayerJoined"(arg0: $ServerPlayer$Type): void
 "pushNotification"(arg0: $Supplier$Type<($Notification$Type)>): void
 "pushNotification"(arg0: $Supplier$Type<($Notification$Type)>, arg1: boolean): void
 "pushLocalNotification"(arg0: $Notification$Type): void
 "getMoneyStorage"(): $MoneyStorage
 "markDirty"(): void
 "getNotifications"(): $List<($Notification)>
 "getName"(): $MutableComponent
 "tick"(): void
 "getOwnerName"(): $Component
 "setNotificationLevel"(arg0: string, arg1: $MoneyValue$Type): void
 "resetCards"(): void
 "getSalaries"(): $List<($SalaryData)>
 "getCardValidation"(): integer
 "deleteSalary"(arg0: $SalaryData$Type): void
 "getStatTracker"(): $StatTracker
 "getNotificationLevels"(): $Map<(string), ($MoneyValue)>
 "getNotificationLevelFor"(arg0: string): $MoneyValue
 "checkForOnlinePlayers"(): void
 "extraSalaryTargets"(): $Map<(string), ($CustomTarget)>
 "applyInterest"(arg0: double, arg1: $List$Type<($MoneyValue$Type)>, arg2: $List$Type<(string)>, arg3: boolean, arg4: boolean): void
 "priority"(): integer
 "inversePriority"(): integer
 "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
 "getTooltipTitle"(): $Component
 "isClient"(): boolean
 "isServer"(): boolean
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "getStoredMoney"(): $MoneyView
}

export namespace $IBankAccount {
const SALARY_LIMIT: integer
function defaultTooltipFormat(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
function sortPayFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
function sortTakeFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBankAccount$Type = ($IBankAccount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBankAccount_ = $IBankAccount$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$WidgetAddon, $WidgetAddon$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$WidgetAddon"
import {$SoundManager, $SoundManager$Type} from "packages/net/minecraft/client/sounds/$SoundManager"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $EasyWidget extends $AbstractWidget {
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "height": integer
 "active": boolean
 "visible": boolean
static readonly "UNSET_FG_COLOR": integer


public "isVisible"(): boolean
public "isMouseOver"(arg0: $ScreenPosition$Type): boolean
public "getArea"(): $ScreenArea
public "setPosition"(arg0: $ScreenPosition$Type): void
public "setSize"(arg0: integer, arg1: integer): void
public "setActive"(arg0: boolean): void
public "setVisible"(arg0: boolean): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "getFont"(): $Font
public "setPosition"(arg0: integer, arg1: integer): void
public "isMouseOver"(arg0: double, arg1: double): boolean
public "isActive"(): boolean
public "getX"(): integer
public "getWidth"(): integer
public "getY"(): integer
public "getHeight"(): integer
public "playDownSound"(arg0: $SoundManager$Type): void
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
public "addAddons"(arg0: $Consumer$Type<($WidgetAddon$Type)>): void
public "removeAddons"(arg0: $Consumer$Type<($WidgetAddon$Type)>): void
public "hideFromMouse"(): boolean
public "renderTickInternal"(): void
public static "drawScrollingString"(arg0: $GuiGraphics$Type, arg1: $Font$Type, arg2: $Component$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "getPosition"(): $ScreenPosition
get "visible"(): boolean
get "area"(): $ScreenArea
set "position"(value: $ScreenPosition$Type)
set "active"(value: boolean)
set "visible"(value: boolean)
get "font"(): $Font
get "active"(): boolean
get "x"(): integer
get "width"(): integer
get "y"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
set "x"(value: integer)
set "y"(value: integer)
get "position"(): $ScreenPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyWidget$Type = ($EasyWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyWidget_ = $EasyWidget$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/durability/$DurabilityData" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $DurabilityData {
static "NULL": $DurabilityData
readonly "allowInfinite": boolean
readonly "min": integer
readonly "max": integer

constructor(arg0: boolean, arg1: integer, arg2: integer)

public static "parseValid"(arg0: $JsonObject$Type, arg1: string): $Optional<($DurabilityData)>
public "asOptional"(): $Optional<($DurabilityData)>
public "test"(arg0: integer): boolean
public static "decode"(arg0: $FriendlyByteBuf$Type): $DurabilityData
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "write"(): $JsonObject
public static "parse"(arg0: $JsonObject$Type, arg1: string): $Optional<($DurabilityData)>
public "isValid"(): boolean
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurabilityData$Type = ($DurabilityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurabilityData_ = $DurabilityData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$InteractionSlot" {
import {$InteractionSlotData, $InteractionSlotData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$InteractionSlotData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EasyMultiBGSlot, $EasyMultiBGSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasyMultiBGSlot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $InteractionSlot extends $EasyMultiBGSlot {
readonly "slotData": $List<($InteractionSlotData)>
static readonly "EMPTY_SLOT_BG": $ResourceLocation
static readonly "BACKGROUND": $Pair<($ResourceLocation), ($ResourceLocation)>
 "active": boolean
 "locked": boolean
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $List$Type<($InteractionSlotData$Type)>, arg1: integer, arg2: integer)

public "getMaxStackSize"(): integer
public "isType"(arg0: string): boolean
public "isActive"(): boolean
public "mayPlace"(arg0: $ItemStack$Type): boolean
get "maxStackSize"(): integer
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionSlot$Type = ($InteractionSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionSlot_ = $InteractionSlot$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/types/$CurrencyType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$IPlayerMoneyHandler, $IPlayerMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/types/$IPlayerMoneyHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$MoneyValueParser, $MoneyValueParser$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValueParser"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $CurrencyType {


public "sumValues"(arg0: $List$Type<($MoneyValue$Type)>): $MoneyValue
public "getGroupTooltip"(arg0: $MoneyView$Type, arg1: $Consumer$Type<($MutableComponent$Type)>): void
public "createMoneyHandlerForPlayer"(arg0: $Player$Type): $IPlayerMoneyHandler
public "createUnsafeMoneyHandlerForPlayer"(arg0: $Player$Type): $IPlayerMoneyHandler
public "createMoneyHandlerForContainer"(arg0: $Container$Type, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $IClientTracker$Type): $IMoneyHandler
public "createMoneyHandlerForATM"(arg0: $Player$Type, arg1: $Container$Type): $IMoneyHandler
public "allowItemInMoneySlot"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "addMoneySlotBackground"(arg0: $Consumer$Type<($Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>)>, arg1: $Consumer$Type<($ResourceLocation$Type)>): void
public "loadMoneyValue"(arg0: $CompoundTag$Type): $MoneyValue
public "loadMoneyValueJson"(arg0: $JsonObject$Type): $MoneyValue
public "getValueParser"(): $MoneyValueParser
/**
 * 
 * @deprecated
 */
public "getInputHandlers"(arg0: $Player$Type): $List<(any)>
public "getType"(): $ResourceLocation
get "valueParser"(): $MoneyValueParser
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurrencyType$Type = ($CurrencyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurrencyType_ = $CurrencyType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeableBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IUpgradeableBlock {

 "getUpgradeable"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $IUpgradeable
 "canUseUpgradeItem"(arg0: $IUpgradeable$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
}

export namespace $IUpgradeableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableBlock$Type = ($IUpgradeableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableBlock_ = $IUpgradeableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$MasterTicketRecipe$Serializer" {
import {$MasterTicketRecipe, $MasterTicketRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$MasterTicketRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MasterTicketRecipe$Serializer implements $RecipeSerializer<($MasterTicketRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MasterTicketRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MasterTicketRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $MasterTicketRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MasterTicketRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MasterTicketRecipe$Serializer$Type = ($MasterTicketRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MasterTicketRecipe$Serializer_ = $MasterTicketRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeData {
static readonly "EMPTY": $UpgradeData


public "hasBoolValue"(arg0: string): boolean
public "hasLongValue"(arg0: string): boolean
public "makeMutable"(): $UpgradeData$Mutable
public "hasCompoundValue"(arg0: string): boolean
public "getCompoundValue"(arg0: string): $CompoundTag
public "hasDoubleValue"(arg0: string): boolean
public "hasFloatValue"(arg0: string): boolean
public "hasIntValue"(arg0: string): boolean
public "getFloatValue"(arg0: string): float
public "getLongValue"(arg0: string): long
public "getStringValue"(arg0: string): string
public "hasStringValue"(arg0: string): boolean
public "getDoubleValue"(arg0: string): double
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "save"(): $CompoundTag
public static "parse"(arg0: $CompoundTag$Type): $UpgradeData
public "getBooleanValue"(arg0: string): boolean
public "getIntValue"(arg0: string): integer
public static "writeMap"<T>(arg0: $Map$Type<(string), (T)>, arg1: $BiConsumer$Type<(T), ($CompoundTag$Type)>): $ListTag
public static "readMap"<T>(arg0: $Map$Type<(string), (T)>, arg1: $ListTag$Type, arg2: $Function$Type<($CompoundTag$Type), (T)>): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$Type = ($UpgradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_ = $UpgradeData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITallBlock, $ITallBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ITallBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TraderBlockTallRotatable extends $TraderBlockRotatable implements $ITallBlock {
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


public "removeOtherBlocks"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
/**
 * 
 * @deprecated
 */
public "getReplacable"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getIsTop"(arg0: $BlockState$Type): boolean
public "getIsBottom"(arg0: $BlockState$Type): boolean
public "getOtherHeight"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockTallRotatable$Type = ($TraderBlockTallRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockTallRotatable_ = $TraderBlockTallRotatable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$DisplayCaseBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Color, $Color$Type} from "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$TraderBlockBase, $TraderBlockBase$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockBase"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DisplayCaseBlock extends $TraderBlockBase implements $IItemTraderBlock, $IVariantBlock {
static readonly "TRADECOUNT": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Color$Type)

public "traderType"(): $BlockEntityType<(any)>
public "validTraderTypes"(): $List<($BlockEntityType<(any)>)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDescriptionId"(): string
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
get "descriptionId"(): string
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayCaseBlock$Type = ($DisplayCaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayCaseBlock_ = $DisplayCaseBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IEasyTabbedMenuScreen, $IEasyTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$IWidgetPositioner, $IWidgetPositioner$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/util/$IWidgetPositioner"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export interface $ITraderStorageScreen extends $IEasyTabbedMenuScreen<($ITraderStorageMenu), ($TraderStorageTab), ($ITraderStorageScreen)> {

 "getMenu"(): $ITraderStorageMenu
 "getRightEdgePositioner"(): $IWidgetPositioner
 "showRightEdgeWidgets"(): boolean
 "getMenuInterface"(): $ITraderStorageMenu
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Type, arg2: boolean): void
 "ChangeTab"(arg0: integer): void
 "getCurrentTabIndex"(): integer
 "getCorner"(): $ScreenPosition
 "getArea"(): $ScreenArea
 "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
 "removeChild"(arg0: any): void
 "builder"(): $LazyPacketData$Builder
 "addChild"<W>(arg0: W): W
 "getFont"(): $Font
 "getPlayer"(): $Player
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "getXSize"(): integer
 "getYSize"(): integer
 "getGhostSlots"(): $List<($GhostSlot<(any)>)>
 "blockInventoryClosing"(): boolean
 "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
}

export namespace $ITraderStorageScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderStorageScreen$Type = ($ITraderStorageScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderStorageScreen_ = $ITraderStorageScreen$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule" {
import {$TradeRuleType, $TradeRuleType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TradeEvent$PostTradeEvent, $TradeEvent$PostTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PostTradeEvent"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$IRuleLoadListener, $IRuleLoadListener$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$IRuleLoadListener"
import {$TradeRulesClientSubTab, $TradeRulesClientSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientSubTab"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$TradeEvent$TradeCostEvent, $TradeEvent$TradeCostEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$TradeRulesClientTab, $TradeRulesClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientTab"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$TradeEvent$PreTradeEvent, $TradeEvent$PreTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PreTradeEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"

export class $TradeRule {
readonly "type": $TradeRuleType<(any)>


public "loadFromJson"(arg0: $JsonObject$Type): void
public static "translationKeyOfType"(arg0: $ResourceLocation$Type): string
public static "Deserialize"(arg0: $JsonObject$Type): $TradeRule
public static "Deserialize"(arg0: $CompoundTag$Type): $TradeRule
public static "ValidateTradeRuleList"(arg0: $List$Type<($TradeRule$Type)>, arg1: $ITradeRuleHost$Type): boolean
public static "HasTradeRule"(arg0: $List$Type<($TradeRule$Type)>, arg1: $ResourceLocation$Type): boolean
public static "ValidateTradeRuleActiveStates"(arg0: $List$Type<($TradeRule$Type)>): boolean
public static "GetTradeRule"(arg0: $List$Type<($TradeRule$Type)>, arg1: $ResourceLocation$Type): $TradeRule
public static "CreateRule"(arg0: $ResourceLocation$Type): $TradeRule
public static "CreateRuleMessage"(): $CompoundTag
public static "RemoveRuleMessage"(): $CompoundTag
public static "isCreateMessage"(arg0: $CompoundTag$Type): boolean
public static "isRemoveMessage"(arg0: $CompoundTag$Type): boolean
public static "getBaseCost"(arg0: $TradeData$Type, arg1: $TradeContext$Type): $MoneyValue
public static "nameOfType"(arg0: $ResourceLocation$Type): $MutableComponent
public "canPlayerActivate"(arg0: $Player$Type): boolean
public "beforeTrade"(arg0: $TradeEvent$PreTradeEvent$Type): void
public "tradeCost"(arg0: $TradeEvent$TradeCostEvent$Type): void
public "afterTrade"(arg0: $TradeEvent$PostTradeEvent$Type): void
public "saveToJson"(arg0: $JsonObject$Type): $JsonObject
public static "savePersistentData"(arg0: $CompoundTag$Type, arg1: $List$Type<($TradeRule$Type)>, arg2: string): boolean
public "savePersistentData"(): $CompoundTag
public static "loadPersistentData"(arg0: $CompoundTag$Type, arg1: $List$Type<($TradeRule$Type)>, arg2: string): void
public "loadPersistentData"(arg0: $CompoundTag$Type): void
public "receiveUpdateMessage"(arg0: $Player$Type, arg1: $LazyPacketData$Type): void
public static "saveRules"(arg0: $CompoundTag$Type, arg1: $List$Type<($TradeRule$Type)>, arg2: string): void
public static "saveRulesToJson"(arg0: $List$Type<($TradeRule$Type)>): $JsonArray
public static "loadRules"(arg0: $CompoundTag$Type, arg1: string, arg2: $ITradeRuleHost$Type): $List<($TradeRule)>
/**
 * 
 * @deprecated
 */
public "createTab"(arg0: $TradeRulesClientTab$Type<(any)>): $TradeRulesClientSubTab
public "canActivate"(): boolean
public "getName"(): $MutableComponent
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "isActive"(): boolean
public "getIcon"(): $IconData
public static "getRule"(arg0: $ResourceLocation$Type, arg1: $List$Type<($TradeRule$Type)>): $TradeRule
public "setActive"(arg0: boolean): void
public static "Parse"(arg0: $JsonArray$Type, arg1: $ITradeRuleHost$Type): $List<($TradeRule)>
public static "addLoadListener"(arg0: $IRuleLoadListener$Type): void
public static "addIgnoreMissing"(arg0: string): void
get "name"(): $MutableComponent
get "active"(): boolean
get "icon"(): $IconData
set "active"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRule$Type = ($TradeRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRule_ = $TradeRule$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeItem" {
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"

export interface $IUpgradeItem {

 "getUpgradeType"(): $UpgradeType
 "onApplied"(arg0: $IUpgradeable$Type): void
 "setDefaultValues"(arg0: $UpgradeData$Mutable$Type): void
}

export namespace $IUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$Type = ($IUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem_ = $IUpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$CommandTraderBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CommandTraderBlock extends $TraderBlockRotatable implements $IVariantBlock {
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

public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandTraderBlock$Type = ($CommandTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandTraderBlock_ = $CommandTraderBlock$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$OffHandStrength" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OffHandStrength {

 "getOffhandStrengthScale"(arg0: float): float

(arg0: float): float
}

export namespace $OffHandStrength {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffHandStrength$Type = ($OffHandStrength);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffHandStrength_ = $OffHandStrength$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe$Serializer" {
import {$FilmDevelopingRecipe, $FilmDevelopingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FilmDevelopingRecipe$Serializer implements $RecipeSerializer<($FilmDevelopingRecipe)> {

constructor()

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $FilmDevelopingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $FilmDevelopingRecipe$Type): void
public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $FilmDevelopingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FilmDevelopingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmDevelopingRecipe$Serializer$Type = ($FilmDevelopingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmDevelopingRecipe$Serializer_ = $FilmDevelopingRecipe$Serializer$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$DevelopedFilmItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFilmItem, $IFilmItem$Type} from "packages/io/github/mortuusars/exposure/item/$IFilmItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DevelopedFilmItem extends $Item implements $IFilmItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(type: $FilmType$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getType"(): $FilmType
public "getDefaultFrameSize"(): integer
public "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
public "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
public "getFrameSize"(filmStack: $ItemStack$Type): integer
public "getExposedFramesCount"(stack: $ItemStack$Type): integer
public "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
get "type"(): $FilmType
get "defaultFrameSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DevelopedFilmItem$Type = ($DevelopedFilmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DevelopedFilmItem_ = $DevelopedFilmItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$TransactionRegisterItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransactionRegisterItem extends $Item implements $DyeableLeatherItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionRegisterItem$Type = ($TransactionRegisterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionRegisterItem_ = $TransactionRegisterItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FocalRange" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FocalRange implements $StringRepresentable {
static readonly "ALLOWED_MIN": integer
static readonly "ALLOWED_MAX": integer

constructor(min: integer, max: integer)
constructor(fixedValue: integer)

public static "ofStack"(stack: $ItemStack$Type): $FocalRange
public static "fromNetwork"(buffer: $FriendlyByteBuf$Type): $FocalRange
public "toNetwork"(buffer: $FriendlyByteBuf$Type): void
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): integer
public "max"(): integer
public static "getDefault"(): $FocalRange
public static "parse"(value: string): $FocalRange
public static "fromJson"(json: $JsonElement$Type): $FocalRange
public "isPrime"(): boolean
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "default"(): $FocalRange
get "prime"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocalRange$Type = ($FocalRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocalRange_ = $FocalRange$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasyMultiBGSlot" {
import {$EasySlot, $EasySlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasySlot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EasyMultiBGSlot extends $EasySlot {
static readonly "EMPTY_SLOT_BG": $ResourceLocation
static readonly "BACKGROUND": $Pair<($ResourceLocation), ($ResourceLocation)>
 "active": boolean
 "locked": boolean
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public "getNoItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
get "noItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMultiBGSlot$Type = ($EasyMultiBGSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMultiBGSlot_ = $EasyMultiBGSlot$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyMenuScreen" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export class $EasyMenuScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<(T)> implements $IEasyScreen {
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "quickdropSlot": $Slot
 "lastClickSlot": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickdropTime": long
 "quickCraftingType": integer
 "quickCraftingButton": integer
 "skipNextRelease": boolean
 "quickCraftingRemainder": integer
 "lastClickTime": long
 "lastClickButton": integer
 "doubleclick": boolean
 "lastQuickMoved": $ItemStack
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font


public "getCorner"(): $ScreenPosition
public "getArea"(): $ScreenArea
public "removeChild"(arg0: any): void
public "addChild"<W>(arg0: W): W
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "getFont"(): $Font
public "getPlayer"(): $Player
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "renderBackground"(arg0: $GuiGraphics$Type): void
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getXSize"(): integer
public "getYSize"(): integer
public "getGhostSlots"(): $List<($GhostSlot<(any)>)>
public "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
public "builder"(): $LazyPacketData$Builder
public "blockInventoryClosing"(): boolean
public "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
get "corner"(): $ScreenPosition
get "area"(): $ScreenArea
get "font"(): $Font
get "player"(): $Player
get "guiLeft"(): integer
get "guiTop"(): integer
get "xSize"(): integer
get "ySize"(): integer
get "ghostSlots"(): $List<($GhostSlot<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMenuScreen$Type<T> = ($EasyMenuScreen<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMenuScreen_<T> = $EasyMenuScreen$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$IValidatedMenu" {
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"

export interface $IValidatedMenu {

 "getValidator"(): $MenuValidator

(): $MenuValidator
}

export namespace $IValidatedMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValidatedMenu$Type = ($IValidatedMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValidatedMenu_ = $IValidatedMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$BookTraderBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IBookTraderBlock, $IBookTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IBookTraderBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BookTraderBlock extends $TraderBlockRotatable implements $IBookTraderBlock, $IVariantBlock {
static readonly "BOOK_COUNT": integer
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

public "GetBookRenderPos"(arg0: integer, arg1: $BlockState$Type): $Vector3f
public "GetBookRenderRot"(arg0: integer, arg1: $BlockState$Type): $List<($Quaternionf)>
public "maxRenderIndex"(): integer
public "GetBookRenderScale"(arg0: integer, arg1: $BlockState$Type): float
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTraderBlock$Type = ($BookTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTraderBlock_ = $BookTraderBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TraderArgument implements $ArgumentType<($TraderData)> {
static readonly "ERROR_NOT_FOUND": $SimpleCommandExceptionType
static readonly "ERROR_NOT_RECOVERABLE": $SimpleCommandExceptionType


public static "getTrader"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): $TraderData
public static "trader"(): $TraderArgument
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "parse"(arg0: $StringReader$Type): $TraderData
public static "recoverableTrader"(): $TraderArgument
public static "traderWithPersistent"(): $TraderArgument
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderArgument$Type = ($TraderArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderArgument_ = $TraderArgument$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey" {
import {$StatType, $StatType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatType"

export class $StatKey<A, B> {
readonly "key": string
readonly "type": $StatType<(A), (B)>


public static "create"<A, B>(arg0: string, arg1: $StatType$Type<(A), (B)>): $StatKey<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatKey$Type<A, B> = ($StatKey<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatKey_<A, B> = $StatKey$Type<(A), (B)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData$Type" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $IconData$Type extends $Record {

constructor(id: $ResourceLocation$Type, loader: $Function$Type<($CompoundTag$Type), ($IconData$Type)>, parser: $Function$Type<($JsonObject$Type), ($IconData$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "loader"(): $Function<($CompoundTag), ($IconData)>
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "parser"(): $Function<($JsonObject), ($IconData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconData$Type$Type = ($IconData$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconData$Type_ = $IconData$Type$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/trade_rules/$TradeRulesClientTab" {
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$IEasyTabbedMenuScreen, $IEasyTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$TradeRulesTab, $TradeRulesTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TradeRulesTab"
import {$TraderStorageClientTab, $TraderStorageClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $TradeRulesClientTab<T extends $TradeRulesTab> extends $TraderStorageClientTab<(T)> {
readonly "screen": S
readonly "menu": M
readonly "commonTab": X


public static "intialize"(): void
public "openTab"(arg0: integer): void
public "initialize"(arg0: $ScreenArea$Type, arg1: boolean): void
public "tick"(): void
public "getIcon"(): $IconData
public "showRightEdgeButtons"(): boolean
public "refreshTabs"(arg0: boolean): void
public "blockInventoryClosing"(): boolean
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRulesClientTab$Type<T> = ($TradeRulesClientTab<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRulesClientTab_<T> = $TradeRulesClientTab$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/text/$TextEntry" {
import {$TradeRuleType, $TradeRuleType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StatKey, $StatKey$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatKey"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$NotificationType, $NotificationType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $TextEntry {

constructor(arg0: string)
constructor(arg0: $Supplier$Type<(string)>)

public "getWithStyle"(...arg0: ($ChatFormatting$Type)[]): $MutableComponent
public "getAsListWithStyle"(...arg0: ($ChatFormatting$Type)[]): $List<($Component)>
public static "plural"(arg0: $TextEntry$Type): $TextEntry
public static "gamerule"(arg0: string): $TextEntry
public static "keyBind"(arg0: string, arg1: string): $TextEntry
public static "terminalSortType"(arg0: string, arg1: string): $TextEntry
public static "tradeRule"(arg0: $TradeRuleType$Type<(any)>): $TextEntry
public static "tradeRuleMessage"(arg0: $TradeRuleType$Type<(any)>, arg1: string): $TextEntry
public static "blurb"(arg0: string, arg1: string): $TextEntry
public static "chainDisplay"(arg0: string): $TextEntry
public static "chainDisplayWordy"(arg0: string): $TextEntry
public static "blockVariant"(arg0: string): $TextEntry
public static "blockVariantModifier"(arg0: string): $TextEntry
public static "blockVariantList"(arg0: string, arg1: integer): $List<($TextEntry)>
public static "dataName"(arg0: string, arg1: string): $TextEntry
public static "dataCategory"(arg0: string, arg1: string): $TextEntry
public static "jeiInfo"(arg0: string, arg1: string): $TextEntry
public static "curiosSlot"(arg0: string): $TextEntry
public static "reiGroup"(arg0: string, arg1: string): $TextEntry
public "getAsList"(...arg0: (any)[]): $List<($Component)>
public static "lcStat"(arg0: $StatKey$Type<(any), (any)>): $TextEntry
public static "notification"(arg0: $ResourceLocation$Type): $TextEntry
public static "notification"(arg0: $NotificationType$Type<(any)>): $TextEntry
public static "notification"(arg0: $NotificationType$Type<(any)>, arg1: string): $TextEntry
public static "notification"(arg0: $ResourceLocation$Type, arg1: string): $TextEntry
public "get"(...arg0: (any)[]): $MutableComponent
public "toString"(): string
public "getKey"(): string
public static "message"(arg0: string, arg1: string): $TextEntry
public static "argument"(arg0: string): $TextEntry
public static "block"(arg0: $Supplier$Type<(any)>): $TextEntry
public static "command"(arg0: string, arg1: string): $TextEntry
public static "stat"(arg0: $ResourceLocation$Type): $TextEntry
public static "description"(arg0: $TextEntry$Type): $TextEntry
public static "item"(arg0: $Supplier$Type<(any)>): $TextEntry
public static "chain"(arg0: string): $TextEntry
public "icon"(...arg0: (any)[]): $IconData
public static "enchantment"(arg0: $Supplier$Type<(any)>): $TextEntry
public static "button"(arg0: string, arg1: string): $TextEntry
public static "extend"(arg0: $TextEntry$Type, arg1: string): $TextEntry
public static "initial"(arg0: $TextEntry$Type): $TextEntry
public static "tooltip"(arg0: string, arg1: string): $TextEntry
public "tooltip"(arg0: $List$Type<($Component$Type)>, ...arg1: (any)[]): void
public static "sound"(arg0: string, arg1: string): $TextEntry
public static "gui"(arg0: string, arg1: string): $TextEntry
public static "widget"(arg0: string, arg1: string): $TextEntry
public static "profession"(arg0: $Supplier$Type<(any)>): $TextEntry
public static "creativeTab"(arg0: string, arg1: string): $TextEntry
get "key"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextEntry$Type = ($TextEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextEntry_ = $TextEntry$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/reference/$AuctionStandBlock" {
import {$EasyBlock, $EasyBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AuctionStandBlock extends $EasyBlock implements $IEasyEntityBlock, $IVariantBlock {
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

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuctionStandBlock$Type = ($AuctionStandBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuctionStandBlock_ = $AuctionStandBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$ChocolateCoinItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChocolateCoinItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(...arg0: ($MobEffectInstance$Type)[])
constructor(arg0: $Item$Properties$Type, arg1: float, ...arg2: ($MobEffectInstance$Type)[])
constructor(arg0: $Item$Properties$Type, ...arg1: ($MobEffectInstance$Type)[])
constructor(arg0: float, ...arg1: ($MobEffectInstance$Type)[])

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChocolateCoinItem$Type = ($ChocolateCoinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChocolateCoinItem_ = $ChocolateCoinItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/core/addons/$MiscTabAddon" {
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$SettingsSubTab, $SettingsSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$SettingsSubTab"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $MiscTabAddon {

constructor()

public "onOpenBefore"(arg0: $SettingsSubTab$Type, arg1: $ScreenArea$Type, arg2: boolean, arg3: $AtomicInteger$Type): void
public "onOpenAfter"(arg0: $SettingsSubTab$Type, arg1: $ScreenArea$Type, arg2: boolean, arg3: $AtomicInteger$Type): void
public "initialize"(arg0: $SettingsSubTab$Type): void
public "onClose"(arg0: $SettingsSubTab$Type): void
public "tick"(arg0: $SettingsSubTab$Type): void
public "renderBG"(arg0: $SettingsSubTab$Type, arg1: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $SettingsSubTab$Type, arg1: $EasyGuiGraphics$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiscTabAddon$Type = ($MiscTabAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MiscTabAddon_ = $MiscTabAddon$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab$ClientMenuScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EasyMenuScreen, $EasyMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyMenuScreen"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EasyClientTab, $EasyClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $EasyClientTab$ClientMenuScreen<M extends $AbstractContainerMenu, S extends $EasyClientTab$ClientMenuScreen<(M), (S), (T)>, T extends $EasyClientTab<(M), (S), (T)>> extends $EasyMenuScreen<(M)> {
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "quickdropSlot": $Slot
 "lastClickSlot": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "quickdropTime": long
 "quickCraftingType": integer
 "quickCraftingButton": integer
 "skipNextRelease": boolean
 "quickCraftingRemainder": integer
 "lastClickTime": long
 "lastClickButton": integer
 "doubleclick": boolean
 "lastQuickMoved": $ItemStack
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font


public static "draw"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: $GuiGraphics$Type, arg2: $List$Type<($Component$Type)>, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyClientTab$ClientMenuScreen$Type<M, S, T> = ($EasyClientTab$ClientMenuScreen<(M), (S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyClientTab$ClientMenuScreen_<M, S, T> = $EasyClientTab$ClientMenuScreen$Type<(M), (S), (T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/info/$InfoSubTab" {
import {$TraderInfoClientTab, $TraderInfoClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/info/$TraderInfoClientTab"
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$TraderInfoTab, $TraderInfoTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TraderInfoTab"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"

export class $InfoSubTab extends $EasyTab {
readonly "parent": $TraderInfoClientTab
readonly "commonTab": $TraderInfoTab
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu


public "canOpen"(): boolean
public "sendMessage"(arg0: $LazyPacketData$Builder$Type): void
public "removeChild"(arg0: any): void
public "addChild"<T>(arg0: T): T
public "shouldRenderInventoryText"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoSubTab$Type = ($InfoSubTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoSubTab_ = $InfoSubTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TraderBlockBase, $TraderBlockBase$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockBase"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TraderBlockRotatable extends $TraderBlockBase implements $IRotatableBlock {
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


public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public "getRotationY"(arg0: $BlockState$Type): integer
public "getRotationY"(arg0: $Direction$Type): integer
public "getRotationYInv"(arg0: $Direction$Type): integer
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public "getFacing"(arg0: $BlockState$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockRotatable$Type = ($TraderBlockRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockRotatable_ = $TraderBlockRotatable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CouponRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$DurabilityData, $DurabilityData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/durability/$DurabilityData"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TicketStationRecipeInput, $TicketStationRecipeInput$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/input/$TicketStationRecipeInput"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TicketStationRecipe, $TicketStationRecipe$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$TicketStationRecipe$ExtraData, $TicketStationRecipe$ExtraData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe$ExtraData"

export class $CouponRecipe implements $TicketStationRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Item$Type, arg3: $Optional$Type<($DurabilityData$Type)>)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Item$Type, arg3: $DurabilityData$Type)

public "matchesTicketKioskSellItem"(arg0: $ItemStack$Type): boolean
public "allowIgnoreKioskRecipe"(): boolean
public "assembleWithKiosk"(arg0: $ItemStack$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
public "consumeModifier"(): boolean
public "validModifier"(arg0: $ItemStack$Type): boolean
public "jeiModifierList"(): $List<($ItemStack)>
public "validIngredient"(arg0: $ItemStack$Type): boolean
public "peekAtResult"(arg0: $Container$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
public "exampleResult"(): $ItemStack
public "requiredCodeInput"(): boolean
public "getDurabilityData"(): $DurabilityData
public "assemble"(arg0: $TicketStationRecipeInput$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredient"(): $Ingredient
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "validateDurability"(arg0: integer, arg1: boolean): integer
public "getKioskStorageRequirement"(arg0: $ItemStack$Type): $ItemRequirement
public static "validCodeChar"(arg0: character): boolean
public static "exampleModifierList"(arg0: $TagKey$Type<($Item$Type)>, ...arg1: ($Item$Type)[]): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Item$Type): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $RegistryObject$Type<(any)>): $List<($ItemStack)>
public static "exampleTicketList"(arg0: $Ingredient$Type): $List<($ItemStack)>
public "validData"(arg0: $TicketStationRecipe$ExtraData$Type): boolean
public "validCode"(arg0: string): boolean
public "validDurability"(arg0: integer): boolean
public "requiredDurabilityInput"(): boolean
public "getToastSymbol"(): $ItemStack
public "matches"(arg0: $TicketStationRecipeInput$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $TicketStationRecipeInput$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
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
get "durabilityData"(): $DurabilityData
get "ingredient"(): $Ingredient
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $CouponRecipe$Type = ($CouponRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CouponRecipe_ = $CouponRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/mixin/$TemplatePoolAccess" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $TemplatePoolAccess {

 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "setRawTemplates"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
 "getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
}

export namespace $TemplatePoolAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplatePoolAccess$Type = ($TemplatePoolAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplatePoolAccess_ = $TemplatePoolAccess$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$IBuilderProvider" {
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export interface $LazyPacketData$IBuilderProvider {

 "builder"(): $LazyPacketData$Builder

(): $LazyPacketData$Builder
}

export namespace $LazyPacketData$IBuilderProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyPacketData$IBuilderProvider$Type = ($LazyPacketData$IBuilderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyPacketData$IBuilderProvider_ = $LazyPacketData$IBuilderProvider$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/util/$IWidgetPositioner" {
import {$EasyWidget, $EasyWidget$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget"

export interface $IWidgetPositioner {

 "removeWidgets"(...arg0: ($EasyWidget$Type)[]): void
 "addWidget"(arg0: $EasyWidget$Type): void
 "addWidgets"(...arg0: ($EasyWidget$Type)[]): void
 "removeWidget"(arg0: $EasyWidget$Type): void
 "clear"(): void
}

export namespace $IWidgetPositioner {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWidgetPositioner$Type = ($IWidgetPositioner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWidgetPositioner_ = $IWidgetPositioner$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData$PositionEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$RotationHandler, $RotationHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$RotationHandler"

export class $ItemPositionData$PositionEntry extends $Record {

constructor(position: $Vector3f$Type, extraCount: integer, extraOffset: $Vector3f$Type, scale: float, rotationHandler: $RotationHandler$Type, minLight: integer)

public "extraCount"(): integer
public "rotationHandler"(): $RotationHandler
public "extraOffset"(): $Vector3f
public "minLight"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): float
public "position"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPositionData$PositionEntry$Type = ($ItemPositionData$PositionEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPositionData$PositionEntry_ = $ItemPositionData$PositionEntry$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$FilterItem" {
import {$IItemTradeFilter, $IItemTradeFilter$Type} from "packages/io/github/lightman314/lightmanscurrency/api/filter/$IItemTradeFilter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilterItem extends $Item implements $IItemTradeFilter {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getCustomTooltip"(arg0: $ItemStack$Type): $List<($Component)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getFilter"(arg0: $ItemStack$Type): $Predicate<($ItemStack)>
public static "isInList"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type): boolean
public "getDisplayableItems"(arg0: $ItemStack$Type, arg1: $IItemHandler$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItem$Type = ($FilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItem_ = $FilterItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/$AttachmentSound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AttachmentSound {
static readonly "NONE": $AttachmentSound
static readonly "FILM": $AttachmentSound
static readonly "FLASH": $AttachmentSound
static readonly "LENS": $AttachmentSound
static readonly "FILTER": $AttachmentSound

constructor(inserted: $Supplier$Type<($SoundEvent$Type)>, insertedVolume: float, insertedPitch: float, removed: $Supplier$Type<($SoundEvent$Type)>, removedVolume: float, removedPitch: float)
constructor(inserted: $Supplier$Type<($SoundEvent$Type)>, insertedVolume: float, insertedPitch: float)

public "playOnePerPlayer"(player: $Player$Type, isRemoved: boolean): void
public "getRemoved"(): $Supplier<($SoundEvent)>
public "getInserted"(): $Supplier<($SoundEvent)>
public "getRemovedVolume"(): float
public "getInsertedVolume"(): float
public "getRemovedPitch"(): float
public "getInsertedPitch"(): float
get "removed"(): $Supplier<($SoundEvent)>
get "inserted"(): $Supplier<($SoundEvent)>
get "removedVolume"(): float
get "insertedVolume"(): float
get "removedPitch"(): float
get "insertedPitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentSound$Type = ($AttachmentSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentSound_ = $AttachmentSound$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinJarBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CoinJarBlock extends $RotatableBlock implements $IEasyEntityBlock {
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
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type, arg2: boolean)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)

public "getRotationY"(arg0: $Direction$Type): integer
public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinJarBlock$Type = ($CoinJarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinJarBlock_ = $CoinJarBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/tradeinterface/$ItemTraderInterfaceBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TraderInterfaceBlock, $TraderInterfaceBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blocks/$TraderInterfaceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $ItemTraderInterfaceBlock extends $TraderInterfaceBlock {
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

public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTraderInterfaceBlock$Type = ($ItemTraderInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTraderInterfaceBlock_ = $ItemTraderInterfaceBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/containers/$SuppliedContainer" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $SuppliedContainer implements $Container {
readonly "source": $Supplier<($Container)>

constructor(arg0: $Supplier$Type<($Container$Type)>)
constructor(arg0: $Supplier$Type<($Container$Type)>, arg1: $Container$Type)

public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
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
public "kjs$self"(): $Container
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
get "empty"(): boolean
get "maxStackSize"(): integer
get "containerSize"(): integer
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
export type $SuppliedContainer$Type = ($SuppliedContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuppliedContainer_ = $SuppliedContainer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$ShelfBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ShelfBlock extends $TraderBlockRotatable implements $IItemTraderBlock, $IVariantBlock {
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
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer)

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShelfBlock$Type = ($ShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShelfBlock_ = $ShelfBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategoryType" {
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NotificationCategory, $NotificationCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NotificationCategoryType<T extends $NotificationCategory> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullFunction$Type<($CompoundTag$Type), (T)>)

public "toString"(): string
public "load"(arg0: $CompoundTag$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotificationCategoryType$Type<T> = ($NotificationCategoryType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotificationCategoryType_<T> = $NotificationCategoryType$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$LazyPacketData$IBuilderProvider, $LazyPacketData$IBuilderProvider$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$IBuilderProvider"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IEasyTabbedMenu<T extends $EasyMenuTab<(any), (T)>> extends $LazyPacketData$IBuilderProvider, $IClientTracker {

 "currentTab"(): T
 "getAllTabs"(): $Map<(integer), (T)>
 "setMessageListener"(arg0: $Consumer$Type<($LazyPacketData$Type)>): void
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
 "ChangeTab"(arg0: integer, arg1: $LazyPacketData$Type): void
 "ChangeTab"(arg0: integer): void
 "builder"(): $LazyPacketData$Builder
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $IEasyTabbedMenu {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyTabbedMenu$Type<T> = ($IEasyTabbedMenu<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyTabbedMenu_<T> = $IEasyTabbedMenu$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EasyBlock extends $Block {
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyBlock$Type = ($EasyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyBlock_ = $EasyBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldArea" {
import {$WorldPosition, $WorldPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WorldArea {
static readonly "VOID": $WorldArea
static readonly "INFINITE_VOID": $WorldArea


public "isInfiniteRange"(): boolean
public "getCorner1"(): $BlockPos
public "getCorner2"(): $BlockPos
public "isInArea"(arg0: $BlockPos$Type): boolean
public "isInArea"(arg0: $WorldPosition$Type): boolean
public static "ofInfiniteRange"(arg0: $WorldPosition$Type): $WorldArea
public "getCenter"(): $WorldPosition
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: integer): $WorldArea
public static "of"(arg0: $WorldPosition$Type, arg1: integer, arg2: integer, arg3: integer): $WorldArea
public "isVoid"(): boolean
get "infiniteRange"(): boolean
get "corner1"(): $BlockPos
get "corner2"(): $BlockPos
get "center"(): $WorldPosition
get "void"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldArea$Type = ($WorldArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldArea_ = $WorldArea$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$RotationHandlerType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RotationHandler, $RotationHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$RotationHandler"

export interface $RotationHandlerType {

 "parse"(arg0: $JsonObject$Type): $RotationHandler

(arg0: $JsonObject$Type): $RotationHandler
}

export namespace $RotationHandlerType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationHandlerType$Type = ($RotationHandlerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationHandlerType_ = $RotationHandlerType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemPositionData$PositionEntry, $ItemPositionData$PositionEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData$PositionEntry"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $ItemPositionData {
static readonly "EMPTY": $ItemPositionData

constructor(arg0: $List$Type<($ItemPositionData$PositionEntry$Type)>)
constructor(...arg0: ($ItemPositionData$PositionEntry$Type)[])

public "safeGetEntry"(arg0: integer): $ItemPositionData$PositionEntry
public "getEntryCount"(): integer
public "getPositions"(arg0: $BlockState$Type, arg1: integer): $List<($Vector3f)>
public "getMinLight"(arg0: integer): integer
public "isEmpty"(): boolean
public static "parse"(arg0: $JsonObject$Type): $ItemPositionData
public "getScale"(arg0: integer): float
public "getRotation"(arg0: $BlockState$Type, arg1: integer, arg2: float): $List<($Quaternionf)>
get "entryCount"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPositionData$Type = ($ItemPositionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPositionData_ = $ItemPositionData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$NetworkItemTraderBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NetworkItemTraderBlock extends $TraderBlockRotatable {
static readonly "TRADER_COUNT_SMALL": integer
static readonly "TRADER_COUNT_MEDIUM": integer
static readonly "TRADER_COUNT_LARGE": integer
static readonly "TRADER_COUNT_XLARGE": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkItemTraderBlock$Type = ($NetworkItemTraderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkItemTraderBlock_ = $NetworkItemTraderBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab$Unenforced" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$EasyClientTab$ClientMenuScreen, $EasyClientTab$ClientMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab$ClientMenuScreen"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$EasyClientTab, $EasyClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyClientTab"

export class $EasyClientTab$Unenforced<M extends $AbstractContainerMenu, S extends $EasyClientTab$ClientMenuScreen<(M), (S), (T)>, T extends $EasyClientTab$Unenforced<(M), (S), (T)>> extends $EasyClientTab<(M), (S), (T)> {
readonly "screen": S
readonly "menu": M

constructor(arg0: S)

public "getTooltip"(): $Component
public "getIcon"(): $IconData
get "tooltip"(): $Component
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyClientTab$Unenforced$Type<M, S, T> = ($EasyClientTab$Unenforced<(M), (S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyClientTab$Unenforced_<M, S, T> = $EasyClientTab$Unenforced$Type<(M), (S), (T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemRequirement$MatchingItemsList, $ItemRequirement$MatchingItemsList$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement$MatchingItemsList"

export class $ItemRequirement implements $Predicate<($ItemStack)> {


public static "getFirstItemsMatchingRequirements"(arg0: $Container$Type, ...arg1: ($ItemRequirement$Type)[]): $List<($ItemStack)>
public static "getFirstItemsMatchingRequirements"(arg0: $IItemHandler$Type, ...arg1: ($ItemRequirement$Type)[]): $List<($ItemStack)>
public static "getRandomItems"(arg0: $List$Type<($ItemStack$Type)>, arg1: integer, arg2: boolean): $List<($ItemStack)>
public static "fromFilter"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemRequirement
public static "ofItemNoNBT"(arg0: $ItemStack$Type): $ItemRequirement
public "test"(arg0: $ItemStack$Type): boolean
public "matches"(arg0: $ItemRequirement$Type): boolean
public static "of"(arg0: $Ingredient$Type, arg1: integer): $ItemRequirement
public static "of"(arg0: $Item$Type, arg1: integer): $ItemRequirement
public static "of"(arg0: $ItemStack$Type): $ItemRequirement
public "isNull"(): boolean
public "getCount"(): integer
public "isValid"(): boolean
public static "combineRequirements"(...arg0: ($ItemRequirement$Type)[]): $List<($ItemRequirement)>
public static "combineRequirements"(arg0: $List$Type<($ItemRequirement$Type)>): $List<($ItemRequirement)>
public static "getRandomItemsMatchingRequirements"(arg0: $IItemHandler$Type, arg1: $List$Type<($ItemRequirement$Type)>, arg2: boolean): $List<($ItemStack)>
public static "getMatchingItems"(arg0: $IItemHandler$Type, arg1: $List$Type<($ItemRequirement$Type)>): $ItemRequirement$MatchingItemsList
public "tryMerge"(arg0: $ItemRequirement$Type): boolean
public static "getNull"(): $ItemRequirement
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "null"(): boolean
get "count"(): integer
get "valid"(): boolean
get "null"(): $ItemRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirement$Type = ($ItemRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRequirement_ = $ItemRequirement$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/colored/$ColoredItem" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"

export interface $ColoredItem extends $DyeableLeatherItem {

 "getColor"(arg0: $ItemStack$Type): integer
 "setColor"(arg0: $ItemStack$Type, arg1: integer): void
 "hasCustomColor"(arg0: $ItemStack$Type): boolean
 "clearColor"(arg0: $ItemStack$Type): void
}

export namespace $ColoredItem {
function setItemColor(arg0: $ItemStack$Type, arg1: integer): void
function dyeArmor(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredItem$Type = ($ColoredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredItem_ = $ColoredItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinpileBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CoinBlock, $CoinBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $CoinpileBlock extends $CoinBlock implements $IRotatableBlock, $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
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
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public "getRotationY"(arg0: $BlockState$Type): integer
public "getRotationY"(arg0: $Direction$Type): integer
public "getRotationYInv"(arg0: $Direction$Type): integer
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public "getFacing"(arg0: $BlockState$Type): $Direction
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
export type $CoinpileBlock$Type = ($CoinpileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinpileBlock_ = $CoinpileBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/ancient_coins/$AncientCoinType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AncientCoinType extends $Enum<($AncientCoinType)> {
static readonly "COPPER": $AncientCoinType
static readonly "IRON": $AncientCoinType
static readonly "GOLD": $AncientCoinType
static readonly "EMERALD": $AncientCoinType
static readonly "DIAMOND": $AncientCoinType
static readonly "NETHERITE_H": $AncientCoinType
static readonly "NETHERITE_E1": $AncientCoinType
static readonly "NETHERITE_R1": $AncientCoinType
static readonly "NETHERITE_O": $AncientCoinType
static readonly "NETHERITE_B": $AncientCoinType
static readonly "NETHERITE_R2": $AncientCoinType
static readonly "NETHERITE_I": $AncientCoinType
static readonly "NETHERITE_N": $AncientCoinType
static readonly "NETHERITE_E2": $AncientCoinType
static readonly "LAPIS": $AncientCoinType
static readonly "ENDER_PEARL": $AncientCoinType
readonly "fireResistant": boolean
readonly "tag": string


public "translationTag"(): string
public static "randomizingItem"(arg0: integer): $ItemStack
public static "randomizingItem"(): $ItemStack
public "resourceSafeName"(): string
public "initialKey"(): string
public "iconKey"(): string
public static "fromOrdinal"(arg0: integer, arg1: $AncientCoinType$Type): $AncientCoinType
public "texture"(): $ResourceLocation
public static "values"(): ($AncientCoinType)[]
public static "valueOf"(arg0: string): $AncientCoinType
public "next"(): $AncientCoinType
public "previous"(): $AncientCoinType
public static "random"(arg0: $RandomSource$Type): $AncientCoinType
public static "tags"(): $List<(string)>
public "icon"(): $Component
public "initial"(): $Component
public "asItem"(): $ItemStack
public "asItem"(arg0: integer): $ItemStack
public "asItem"(arg0: long): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientCoinType$Type = (("netherite_r2") | ("netherite_r1") | ("netherite_o") | ("netherite_n") | ("gold") | ("diamond") | ("netherite_b") | ("netherite_e2") | ("netherite_e1") | ("ender_pearl") | ("copper") | ("iron") | ("netherite_i") | ("lapis") | ("netherite_h") | ("emerald")) | ($AncientCoinType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientCoinType_ = $AncientCoinType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinMintBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CoinMintBlock extends $RotatableBlock implements $IEasyEntityBlock, $IVariantBlock {
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

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinMintBlock$Type = ($CoinMintBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMintBlock_ = $CoinMintBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$PortableATMItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IVariantItem, $IVariantItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TooltipItem, $TooltipItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$TooltipItem"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableATMItem extends $TooltipItem implements $IVariantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getMenuProvider"(arg0: $Item$Type): $MenuProvider
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getDefaultModel"(arg0: integer): $ResourceLocation
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public "getItemID"(): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableATMItem$Type = ($PortableATMItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableATMItem_ = $PortableATMItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$MoneyHolder$Slave, $MoneyHolder$Slave$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder$Slave"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$ISidedObject, $ISidedObject$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$ISidedObject"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BankReference extends $MoneyHolder$Slave implements $ISidedObject {


public "sortPriority"(): integer
public "allowedAccess"(arg0: $Player$Type): boolean
public "allowedAccess"(arg0: $PlayerReference$Type): boolean
public "get"(): $IBankAccount
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "load"(arg0: $CompoundTag$Type): $BankReference
public static "decode"(arg0: $FriendlyByteBuf$Type): $BankReference
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "save"(): $CompoundTag
public "isValid"(): boolean
public "getIcon"(): $IconData
public "isClient"(): boolean
public "canPersist"(arg0: $Player$Type): boolean
public "salaryPermission"(arg0: $PlayerReference$Type): integer
public "salaryPermission"(arg0: $Player$Type): integer
public "isSalaryTarget"(arg0: $Player$Type): boolean
public "isSalaryTarget"(arg0: $PlayerReference$Type): boolean
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
get "valid"(): boolean
get "icon"(): $IconData
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BankReference$Type = ($BankReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BankReference_ = $BankReference$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/notifications/categories/$TraderCategory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$NotificationCategory, $NotificationCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$NotificationCategoryType, $NotificationCategoryType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategoryType"

export class $TraderCategory extends $NotificationCategory {
static readonly "TYPE": $NotificationCategoryType<($TraderCategory)>
static readonly "GENERAL_TYPE": $NotificationCategoryType<(any)>
static readonly "GENERAL": $NotificationCategory

/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemLike$Type, arg1: $Component$Type, arg2: long)
constructor(arg0: $ItemLike$Type, arg1: $Component$Type, arg2: long, arg3: $IconData$Type)
constructor(arg0: $CompoundTag$Type)

public "saveAdditional"(arg0: $CompoundTag$Type): void
public "getName"(): $Component
public "matches"(arg0: $NotificationCategory$Type): boolean
public "getType"(): $NotificationCategoryType<($TraderCategory)>
public "getIcon"(): $IconData
get "name"(): $Component
get "type"(): $NotificationCategoryType<($TraderCategory)>
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderCategory$Type = ($TraderCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderCategory_ = $TraderCategory$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $PhotographCopyingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "transferNbt"(photographStack: $ItemStack$Type, recipeResultStack: $ItemStack$Type): $ItemStack
public "getRemainingItems"(pInv: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographCopyingRecipe$Type = ($PhotographCopyingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographCopyingRecipe_ = $PhotographCopyingRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$RotationHandler" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RotationHandlerType, $RotationHandlerType$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$RotationHandlerType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RotationHandler {


public "write"(): $JsonObject
public static "setup"(): void
public static "debugRegisteredHandlers"(): void
public static "getRotationType"(arg0: $RotationHandler$Type): $ResourceLocation
public static "getRotationType"(arg0: $RotationHandlerType$Type): $ResourceLocation
public static "registerRotationType"(arg0: $ResourceLocation$Type, arg1: $RotationHandlerType$Type): void
public static "parseRotationHandler"(arg0: $JsonElement$Type, arg1: string): $RotationHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationHandler$Type = ($RotationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationHandler_ = $RotationHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blockentity/$TraderBlockEntity" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$EasyBlockEntity, $EasyBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blockentity/$EasyBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IServerTicker, $IServerTicker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$IServerTicker"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$IUpgradeableBlockEntity, $IUpgradeableBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeableBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IOwnableBlockEntity, $IOwnableBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blockentity/$IOwnableBlockEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderBlockEntity<D extends $TraderData> extends $EasyBlockEntity implements $IOwnableBlockEntity, $IServerTicker, $IUpgradeableBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getUpgradeable"(): $IUpgradeable
public "getTraderData"(): D
public "getTraderID"(): long
public "flagAsLegitBreak"(): void
public "isSelfPickup"(): boolean
public "legitimateBreak"(): boolean
public "flagAsPickup"(): void
public "getRawTraderData"(): $TraderData
/**
 * 
 * @deprecated
 */
public "setTraderID"(arg0: long): void
public "supportsTraderPickup"(): boolean
public "PickupTrader"(arg0: $Player$Type, arg1: $TraderData$Type): $ItemStack
public "saveCurrentTraderAsCustomTrader"(): void
public "onBreak"(): void
public "markDirty"(): void
public "canBreak"(arg0: $Player$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getRenderBoundingBox"(): $AABB
public "initialize"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "setVariant"(arg0: $ResourceLocation$Type, arg1: boolean): void
public "onLoad"(): void
public "serverTick"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
/**
 * 
 * @deprecated
 */
public static "get"(arg0: $BlockEntity$Type): $IVariantDataStorage
public static "get"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IVariantDataStorage
public static "get"(arg0: $LootContext$Type): $IVariantDataStorage
get "upgradeable"(): $IUpgradeable
get "traderData"(): D
get "traderID"(): long
get "selfPickup"(): boolean
get "rawTraderData"(): $TraderData
set "traderID"(value: long)
get "renderBoundingBox"(): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockEntity$Type<D> = ($TraderBlockEntity<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockEntity_<D> = $TraderBlockEntity$Type<(D)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NotificationType<T extends $Notification> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullSupplier$Type<(T)>)

public "toString"(): string
public "load"(arg0: $CompoundTag$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotificationType$Type<T> = ($NotificationType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotificationType_<T> = $NotificationType$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export interface $IMoneyHolder extends $IMoneyHandler {

 "priority"(): integer
 "inversePriority"(): integer
 "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
 "getTooltipTitle"(): $Component
 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "getStoredMoney"(): $MoneyView
}

export namespace $IMoneyHolder {
function defaultTooltipFormat(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
function sortPayFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
function sortTakeFirst(arg0: $List$Type<($IMoneyHolder$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyHolder$Type = ($IMoneyHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyHolder_ = $IMoneyHolder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$ArmorDisplayBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ArmorDisplayBlock extends $TraderBlockTallRotatable implements $IItemTraderBlock, $IVariantBlock {
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

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorDisplayBlock$Type = ($ArmorDisplayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorDisplayBlock_ = $ArmorDisplayBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertData" {
import {$TextEntry, $TextEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/text/$TextEntry"
import {$AlertType, $AlertType$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$AlertType"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $AlertData {
readonly "type": $AlertType


public static "helpful"(arg0: $MutableComponent$Type): $AlertData
public static "helpful"(arg0: $TextEntry$Type): $AlertData
public static "neutral"(arg0: $MutableComponent$Type): $AlertData
public static "neutral"(arg0: $TextEntry$Type): $AlertData
public static "compare"(arg0: $AlertData$Type, arg1: $AlertData$Type): integer
public static "of"(arg0: $MutableComponent$Type, arg1: $AlertType$Type): $AlertData
public static "error"(arg0: $MutableComponent$Type): $AlertData
public static "error"(arg0: $TextEntry$Type): $AlertData
public static "warn"(arg0: $TextEntry$Type): $AlertData
public static "warn"(arg0: $MutableComponent$Type): $AlertData
public "getFormattedMessage"(): $MutableComponent
public "setShaderColor"(arg0: $EasyGuiGraphics$Type, arg1: float, arg2: boolean): void
get "formattedMessage"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlertData$Type = ($AlertData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlertData_ = $AlertData$Type;
}}
declare module "packages/io/github/mortuusars/exposure/block/$LightroomBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LightroomBlock extends $Block implements $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public static "getBlockTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, pIsMoving: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightroomBlock$Type = ($LightroomBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightroomBlock_ = $LightroomBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/menus/$MoneySlot" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EasyMultiBGSlot, $EasyMultiBGSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasyMultiBGSlot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MoneySlot extends $EasyMultiBGSlot {
static readonly "EMPTY_SLOT_BG": $ResourceLocation
static readonly "BACKGROUND": $Pair<($ResourceLocation), ($ResourceLocation)>
 "active": boolean
 "locked": boolean
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Player$Type)

public "mayPlace"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneySlot$Type = ($MoneySlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneySlot_ = $MoneySlot$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$WalletEnchantment" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $WalletEnchantment extends $Enchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory


public static "addWalletEnchantmentTooltips"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): void
public "addWalletTooltips"(arg0: $List$Type<($Component$Type)>, arg1: integer, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletEnchantment$Type = ($WalletEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletEnchantment_ = $WalletEnchantment$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/core/variants/$Color" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Color extends $Enum<($Color)> {
static readonly "WHITE": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "GRAY": $Color
static readonly "BLACK": $Color
static readonly "BROWN": $Color
static readonly "RED": $Color
static readonly "ORANGE": $Color
static readonly "YELLOW": $Color
static readonly "LIME": $Color
static readonly "GREEN": $Color
static readonly "CYAN": $Color
static readonly "LIGHT_BLUE": $Color
static readonly "BLUE": $Color
static readonly "PURPLE": $Color
static readonly "MAGENTA": $Color
static readonly "PINK": $Color
readonly "sortIndex": integer
readonly "hexColor": integer
readonly "mapColor": $MapColor
readonly "dyeTag": $TagKey<($Item)>


public static "sortByColor"(arg0: $Color$Type, arg1: $Color$Type): integer
public "getResourceSafeName"(): string
public "getPrettyName"(): string
public static "getFromPrettyName"(arg0: string): $Color
public static "getFromIndex"(arg0: long): $Color
public static "values"(): ($Color)[]
public static "valueOf"(arg0: string): $Color
public "getComponent"(): $MutableComponent
get "resourceSafeName"(): string
get "prettyName"(): string
get "component"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = (("magenta") | ("pink") | ("green") | ("light_gray") | ("lime") | ("black") | ("yellow") | ("light_blue") | ("brown") | ("cyan") | ("red") | ("orange") | ("gray") | ("white") | ("blue") | ("purple")) | ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MenuValidatorType, $MenuValidatorType$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidatorType"

export class $MenuValidator {
readonly "type": $MenuValidatorType
 "isThroughNetwork": boolean


public "stillValid"(arg0: $Player$Type): boolean
public static "load"(arg0: $CompoundTag$Type): $MenuValidator
public static "decode"(arg0: $FriendlyByteBuf$Type): $MenuValidator
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "save"(): void
public "isNull"(): boolean
get "null"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuValidator$Type = ($MenuValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuValidator_ = $MenuValidator$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/$VendingMachineLargeBlock" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemTraderBlock, $IItemTraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/traderblocks/interfaces/$IItemTraderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TraderBlockTallWideRotatable, $TraderBlockTallWideRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallWideRotatable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ItemPositionData, $ItemPositionData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/resourcepacks/data/item_trader/item_positions/$ItemPositionData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VendingMachineLargeBlock extends $TraderBlockTallWideRotatable implements $IItemTraderBlock, $IVariantBlock {
static readonly "TRADECOUNT": integer
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

public "makeTrader"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "traderType"(): $BlockEntityType<(any)>
public "getItemPositionData"(): $ItemPositionData
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "itemPositionData"(): $ItemPositionData
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VendingMachineLargeBlock$Type = ($VendingMachineLargeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VendingMachineLargeBlock_ = $VendingMachineLargeBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument$Info$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TraderArgument, $TraderArgument$Type} from "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TraderArgument$Info$Template implements $ArgumentTypeInfo$Template<($TraderArgument)> {


public "type"(): $ArgumentTypeInfo<($TraderArgument), (any)>
public "instantiate"(arg0: $CommandBuildContext$Type): $TraderArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderArgument$Info$Template$Type = ($TraderArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderArgument$Info$Template_ = $TraderArgument$Info$Template$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderStorageMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$MoneySlot, $MoneySlot$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/menus/$MoneySlot"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$EasyTabbedMenu, $EasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyTabbedMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$IValidatedMenu, $IValidatedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$IValidatedMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderStorageMenu extends $EasyTabbedMenu<($ITraderStorageMenu), ($TraderStorageTab)> implements $IValidatedMenu, $ITraderStorageMenu {
static readonly "SLOT_OFFSET": integer
readonly "player": $Player
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

constructor(arg0: integer, arg1: $Inventory$Type, arg2: long, arg3: $MenuValidator$Type)

public "setHeldItem"(arg0: $ItemStack$Type): void
public "getHeldItem"(): $ItemStack
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "getTrader"(): $TraderData
public "getPermissionLevel"(arg0: string): integer
public "getContext"(): $TradeContext
public "getValidator"(): $MenuValidator
public "removed"(arg0: $Player$Type): void
public "getPlayer"(): $Player
/**
 * 
 * @deprecated
 */
public "getCoinSlots"(): $List<($MoneySlot)>
public "clearContainer"(arg0: $Container$Type): void
/**
 * 
 * @deprecated
 */
public "SetCoinSlotsActive"(arg0: boolean): void
public "hasPermission"(arg0: string): boolean
public "SendMessage"(arg0: $LazyPacketData$Builder$Type): void
public "clearTab"(arg0: integer): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isClient"(): boolean
set "heldItem"(value: $ItemStack$Type)
get "heldItem"(): $ItemStack
get "trader"(): $TraderData
get "context"(): $TradeContext
get "validator"(): $MenuValidator
get "player"(): $Player
get "coinSlots"(): $List<($MoneySlot)>
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderStorageMenu$Type = ($TraderStorageMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderStorageMenu_ = $TraderStorageMenu$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$CompositionGuide" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $CompositionGuide {

constructor(id: string)

public "getId"(): string
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $CompositionGuide
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public "translate"(): $Component
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositionGuide$Type = ($CompositionGuide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositionGuide_ = $CompositionGuide$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ownership/$OwnerType" {
import {$Owner, $Owner$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $OwnerType {


public "load"(arg0: $CompoundTag$Type): $Owner
public static "create"(arg0: $ResourceLocation$Type, arg1: $Function$Type<($CompoundTag$Type), ($Owner$Type)>): $OwnerType
public "getID"(): $ResourceLocation
get "iD"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwnerType$Type = ($OwnerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwnerType_ = $OwnerType$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$AlbumPage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AlbumPage {
static readonly "PHOTOGRAPH_TAG": string
static readonly "NOTE_TAG": string
static readonly "NOTE_COMPONENT_TAG": string

constructor(photographStack: $ItemStack$Type, note: $Either$Type<(string), ($Component$Type)>)

public "isEditable"(): boolean
public static "fromTag"(tag: $CompoundTag$Type, editable: boolean): $AlbumPage
public "toTag"(tag: $CompoundTag$Type): $CompoundTag
public static "editable"(photographStack: $ItemStack$Type, note: string): $AlbumPage
public "toSigned"(): $AlbumPage
public "getPhotographStack"(): $ItemStack
public "setPhotographStack"(photographStack: $ItemStack$Type): $ItemStack
public "getNote"(): $Either<(string), ($Component)>
public "setNote"(note: $Either$Type<(string), ($Component$Type)>): void
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "signed"(photographStack: $ItemStack$Type, note: $Component$Type): $AlbumPage
get "photographStack"(): $ItemStack
set "photographStack"(value: $ItemStack$Type)
get "note"(): $Either<(string), ($Component)>
set "note"(value: $Either$Type<(string), ($Component$Type)>)
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumPage$Type = ($AlbumPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumPage_ = $AlbumPage$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$MoneyBagItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MoneyBagItem extends $BlockItem {
static readonly "PROPERTY": $ResourceLocation
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

public static "setContents"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public static "createItem"(arg0: $ItemLike$Type, arg1: $List$Type<($ItemStack$Type)>): $ItemStack
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "getSize"(arg0: $ItemStack$Type): integer
public static "getContents"(arg0: $ItemStack$Type): $List<($ItemStack)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyBagItem$Type = ($MoneyBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyBagItem_ = $MoneyBagItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$MagnetUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagnetUpgradeItem extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Supplier$Type<(integer)>, arg1: $Item$Properties$Type)

public "setDefaultValues"(arg0: $UpgradeData$Mutable$Type): void
set "defaultValues"(value: $UpgradeData$Mutable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeItem$Type = ($MagnetUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeItem_ = $MagnetUpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$IRuleLoadListener" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TradeRule, $TradeRule$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$TradeRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"

export interface $IRuleLoadListener {

 "afterLoading"(arg0: $ITradeRuleHost$Type, arg1: $List$Type<($CompoundTag$Type)>, arg2: $List$Type<($TradeRule$Type)>): void
 "beforeLoading"(arg0: $ITradeRuleHost$Type, arg1: $List$Type<($CompoundTag$Type)>, arg2: $List$Type<($TradeRule$Type)>): void
}

export namespace $IRuleLoadListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRuleLoadListener$Type = ($IRuleLoadListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRuleLoadListener_ = $IRuleLoadListener$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$ActiveMode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"

export class $TraderInterfaceBlockEntity$ActiveMode extends $Enum<($TraderInterfaceBlockEntity$ActiveMode)> {
static readonly "DISABLED": $TraderInterfaceBlockEntity$ActiveMode
static readonly "REDSTONE_OFF": $TraderInterfaceBlockEntity$ActiveMode
static readonly "REDSTONE_ONLY": $TraderInterfaceBlockEntity$ActiveMode
static readonly "ALWAYS_ON": $TraderInterfaceBlockEntity$ActiveMode
readonly "index": integer


public "getDisplayText"(): $Component
public "getNext"(): $TraderInterfaceBlockEntity$ActiveMode
public static "values"(): ($TraderInterfaceBlockEntity$ActiveMode)[]
public static "valueOf"(arg0: string): $TraderInterfaceBlockEntity$ActiveMode
public static "fromIndex"(arg0: integer): $TraderInterfaceBlockEntity$ActiveMode
public "isActive"(arg0: $TraderInterfaceBlockEntity$Type): boolean
get "displayText"(): $Component
get "next"(): $TraderInterfaceBlockEntity$ActiveMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlockEntity$ActiveMode$Type = (("redstone_off") | ("always_on") | ("disabled") | ("redstone_only")) | ($TraderInterfaceBlockEntity$ActiveMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlockEntity$ActiveMode_ = $TraderInterfaceBlockEntity$ActiveMode$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder" {
import {$Owner, $Owner$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ownership/$Owner"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TriConsumer, $TriConsumer$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$TriConsumer"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $LazyPacketData$Builder {


public "setBlockPos"(arg0: string, arg1: $BlockPos$Type): $LazyPacketData$Builder
public "setList"<T>(arg0: string, arg1: $List$Type<(T)>, arg2: $TriConsumer$Type<($LazyPacketData$Builder$Type), (string), (T)>): $LazyPacketData$Builder
public "setResourceLocation"(arg0: string, arg1: $ResourceLocation$Type): $LazyPacketData$Builder
public "setUUID"(arg0: string, arg1: $UUID$Type): $LazyPacketData$Builder
public "setItem"(arg0: string, arg1: $ItemStack$Type): $LazyPacketData$Builder
public "setCompound"(arg0: string, arg1: $CompoundTag$Type): $LazyPacketData$Builder
public "toString"(): string
public "setBoolean"(arg0: string, arg1: boolean): $LazyPacketData$Builder
public "setInt"(arg0: string, arg1: integer): $LazyPacketData$Builder
public "setLong"(arg0: string, arg1: long): $LazyPacketData$Builder
public "setFloat"(arg0: string, arg1: float): $LazyPacketData$Builder
public "setDouble"(arg0: string, arg1: double): $LazyPacketData$Builder
public "build"(): $LazyPacketData
public "setOwner"(arg0: string, arg1: $Owner$Type): $LazyPacketData$Builder
public "setText"(arg0: string, arg1: $Component$Type): $LazyPacketData$Builder
public "setFlag"(arg0: string): $LazyPacketData$Builder
public "setString"(arg0: string, arg1: string): $LazyPacketData$Builder
public "setMoneyValue"(arg0: string, arg1: $MoneyValue$Type): $LazyPacketData$Builder
set "flag"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyPacketData$Builder$Type = ($LazyPacketData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyPacketData$Builder_ = $LazyPacketData$Builder$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$ShutterOpeningEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ShutterOpeningEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, lightLevel: integer, shouldFlashFire: boolean)

public "shouldFlashFire"(): boolean
public "getCameraStack"(): $ItemStack
public "getLightLevel"(): integer
public "getPlayer"(): $Player
get "cameraStack"(): $ItemStack
get "lightLevel"(): integer
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShutterOpeningEventJS$Type = ($ShutterOpeningEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShutterOpeningEventJS_ = $ShutterOpeningEventJS$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$IEasyScreen, $IEasyScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IEasyScreen"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $ScreenPosition {
static readonly "ZERO": $ScreenPosition
readonly "x": integer
readonly "y": integer


public "offsetScreen"(arg0: $AbstractContainerScreen$Type<(any)>): $ScreenPosition
public static "getScreenCorner"(arg0: $AbstractContainerScreen$Type<(any)>): $ScreenPosition
public "isMouseInArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "isMouseInArea"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer): boolean
public "isMouseInArea"(arg0: double, arg1: double, arg2: integer, arg3: integer): boolean
public "asArea"(arg0: integer, arg1: integer): $ScreenArea
public static "ofOptional"(arg0: integer, arg1: integer): $Optional<($ScreenPosition)>
public "setPosition"(arg0: $AbstractWidget$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $IEasyScreen$Type, arg1: integer, arg2: integer): $ScreenPosition
public static "of"(arg0: $ScreenPosition$Type, arg1: integer, arg2: integer): $ScreenPosition
public static "of"(arg0: double, arg1: double): $ScreenPosition
public static "of"(arg0: integer, arg1: integer): $ScreenPosition
public "offset"(arg0: $IEasyScreen$Type): $ScreenPosition
public "offset"(arg0: $ScreenPosition$Type): $ScreenPosition
public "offset"(arg0: integer, arg1: integer): $ScreenPosition
public "offset"(arg0: $AbstractWidget$Type): $ScreenPosition
set "position"(value: $AbstractWidget$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenPosition$Type = ($ScreenPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenPosition_ = $ScreenPosition$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayEntry" {
import {$TextRenderUtil$TextFormatting, $TextRenderUtil$TextFormatting$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DisplayData, $DisplayData$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $DisplayEntry {


public "getTooltip"(): $List<($Component)>
public "isMouseOver"(arg0: integer, arg1: integer, arg2: $DisplayData$Type, arg3: integer, arg4: integer): boolean
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type, arg2: $List$Type<($Component$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: integer): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type, arg2: boolean): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: $TextRenderUtil$TextFormatting$Type): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg1: $List$Type<($Component$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $MoneyValue$Type, arg1: $List$Type<($Component$Type)>, arg2: boolean): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $MoneyValue$Type, arg1: $List$Type<($Component$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $MoneyValue$Type): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: integer, arg2: integer, arg3: $List$Type<($Component$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: integer, arg2: $List$Type<($Component$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Component$Type, arg1: integer, arg2: integer): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $List$Type<($Component$Type)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $List$Type<($Component$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $Consumer$Type<($List$Type<($Component$Type)>)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $ItemStack$Type, arg1: integer): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $Consumer$Type<($List$Type<($Component$Type)>)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg4: $ScreenPosition$Type): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $List$Type<($Component$Type)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>, arg4: $ScreenPosition$Type): $DisplayEntry
/**
 * 
 * @deprecated
 */
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $Consumer$Type<($List$Type<($Component$Type)>)>, arg3: $Pair$Type<($ResourceLocation$Type), ($ResourceLocation$Type)>): $DisplayEntry
public "render"(arg0: $EasyGuiGraphics$Type, arg1: integer, arg2: integer, arg3: $DisplayData$Type): void
public static "forMoney"(arg0: $MoneyValue$Type): $DisplayEntry
public "trySelfRenderTooltip"(arg0: $EasyGuiGraphics$Type): boolean
public static "forMoneyWithSetTooltip"(arg0: $MoneyValue$Type, arg1: $List$Type<($Component$Type)>): $DisplayEntry
public static "forMoneyWithAddedTooltip"(arg0: $MoneyValue$Type, arg1: $List$Type<($Component$Type)>): $DisplayEntry
get "tooltip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayEntry$Type = ($DisplayEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayEntry_ = $DisplayEntry$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$TerminalBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"

export class $TerminalBlock extends $RotatableBlock implements $IVariantBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalBlock$Type = ($TerminalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalBlock_ = $TerminalBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/filter/$IItemTradeFilter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemTradeFilter {

 "getCustomTooltip"(arg0: $ItemStack$Type): $List<($Component)>
 "getDisplayableItems"(arg0: $ItemStack$Type, arg1: $IItemHandler$Type): $List<($ItemStack)>
 "getFilter"(arg0: $ItemStack$Type): $Predicate<($ItemStack)>
}

export namespace $IItemTradeFilter {
function isInList(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTradeFilter$Type = ($IItemTradeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTradeFilter_ = $IItemTradeFilter$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CashRegisterBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CashRegisterBlock extends $RotatableBlock implements $EntityBlock, $IVariantBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CashRegisterBlock$Type = ($CashRegisterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CashRegisterBlock_ = $CashRegisterBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$BasicTradeEditTab" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$TraderStorageMenu, $TraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderStorageMenu"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TradeInteractionData, $TradeInteractionData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/client/$TradeInteractionData"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BasicTradeEditTab extends $TraderStorageTab implements $IClientTracker {
static readonly "INTERACTION_INPUT": integer
static readonly "INTERACTION_OUTPUT": integer
static readonly "INTERACTION_OTHER": integer
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_MONEY_STORAGE": integer
static readonly "TAB_TRADE_MULTI_PRICE": integer
static readonly "TAB_TRADER_INFO": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_SETTINGS_CLIPBOARD": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": M

constructor(arg0: $TraderStorageMenu$Type)

public "selectedCount"(): integer
public "allowTradeSelection"(): boolean
public "allTradesSelected"(): boolean
public "SendOtherInteractionMessage"(arg0: integer, arg1: $TradeInteractionData$Type, arg2: $ItemStack$Type): void
public "SelectAllTrades"(): void
public "ToggleTradeSelection"(arg0: integer): void
public "canOpenMultiEdit"(): boolean
public "OpenMultiEditTab"(): void
public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "sendOpenTabMessage"(arg0: integer, arg1: $LazyPacketData$Builder$Type): void
public "SendInputInteractionMessage"(arg0: integer, arg1: integer, arg2: $TradeInteractionData$Type, arg3: $ItemStack$Type): void
public "SendOutputInteractionMessage"(arg0: integer, arg1: integer, arg2: $TradeInteractionData$Type, arg3: $ItemStack$Type): void
public "removeTrade"(): void
public "addTrade"(): void
public "canOpen"(arg0: $Player$Type): boolean
public "isSelected"(arg0: $TraderData$Type, arg1: $TradeData$Type): boolean
public "createClientTab"(arg0: any): any
public "onTabClose"(): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isClient"(): boolean
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTradeEditTab$Type = ($BasicTradeEditTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTradeEditTab_ = $BasicTradeEditTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/integration/create/attributes/$CoinAttributeType" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemAttribute, $ItemAttribute$Type} from "packages/com/simibubi/create/content/logistics/item/filter/attribute/$ItemAttribute"
import {$ItemAttributeType, $ItemAttributeType$Type} from "packages/com/simibubi/create/content/logistics/item/filter/attribute/$ItemAttributeType"

export class $CoinAttributeType implements $ItemAttributeType {

constructor()

public "getAllAttributes"(arg0: $ItemStack$Type, arg1: $Level$Type): $List<($ItemAttribute)>
public "createAttribute"(): $ItemAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinAttributeType$Type = ($CoinAttributeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinAttributeType_ = $CoinAttributeType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$TaxCollectorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IOwnableBlock, $IOwnableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IOwnableBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TaxCollectorBlock extends $RotatableBlock implements $IOwnableBlock, $IEasyEntityBlock, $IVariantBlock {
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

public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxCollectorBlock$Type = ($TaxCollectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxCollectorBlock_ = $TaxCollectorBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/util/$ItemAndStack" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemAndStack<T extends $Item> {

constructor(stack: $ItemStack$Type)

public "toString"(): string
public "apply"(arg0: $BiConsumer$Type<(T), ($ItemStack$Type)>): $ItemAndStack<(T)>
public "getStack"(): $ItemStack
public "getItem"(): T
get "stack"(): $ItemStack
get "item"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAndStack$Type<T> = ($ItemAndStack<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAndStack_<T> = $ItemAndStack$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$LazyMessageMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$EasyMenu, $EasyMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$EasyMenu"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LazyMessageMenu extends $EasyMenu {
readonly "player": $Player
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


public "SendMessageToClient"(arg0: $LazyPacketData$Builder$Type): void
public "handleMessage"(arg0: $LazyPacketData$Type): void
public "builder"(): $LazyPacketData$Builder
public "addMessageListener"(arg0: $Consumer$Type<($LazyPacketData$Type)>): void
public "SendMessage"(arg0: $LazyPacketData$Builder$Type): void
public "SendMessageToServer"(arg0: $LazyPacketData$Builder$Type): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyMessageMenu$Type = ($LazyMessageMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyMessageMenu_ = $LazyMessageMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/data/$TradeReference" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TraderInterfaceTargets, $TraderInterfaceTargets$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/data/$TraderInterfaceTargets"
import {$TradeResult, $TradeResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeResult"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"

export class $TradeReference {


public "hasTrade"(): boolean
public "refreshTrade"(): void
public "getTradeIndex"(): integer
public "setLastResult"(arg0: $TradeResult$Type): void
public "getLocalTrade"(): $TradeData
public "getTrueTrade"(): $TradeData
public "getLastResult"(): $TradeResult
public static "load"(arg0: $TraderInterfaceTargets$Type, arg1: $CompoundTag$Type): $TradeReference
public static "of"(arg0: $TraderInterfaceTargets$Type, arg1: integer, arg2: $TradeData$Type): $TradeReference
public static "of"(arg0: $TraderInterfaceTargets$Type, arg1: integer): $TradeReference
public "save"(): $CompoundTag
get "tradeIndex"(): integer
set "lastResult"(value: $TradeResult$Type)
get "localTrade"(): $TradeData
get "trueTrade"(): $TradeData
get "lastResult"(): $TradeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeReference$Type = ($TradeReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeReference_ = $TradeReference$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$ISpawnReason" {
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"

export interface $ISpawnReason {

 "getSpawnReason"(): $MobSpawnType

(): $MobSpawnType
}

export namespace $ISpawnReason {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpawnReason$Type = ($ISpawnReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpawnReason_ = $ISpawnReason$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/$IPermissions" {
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IPermissions {

 "hasPermission"(arg0: $Player$Type, arg1: string): boolean
 "hasPermission"(arg0: $PlayerReference$Type, arg1: string): boolean
 "getPermissionLevel"(arg0: $PlayerReference$Type, arg1: string): integer
 "getPermissionLevel"(arg0: $Player$Type, arg1: string): integer
}

export namespace $IPermissions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPermissions$Type = ($IPermissions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPermissions_ = $IPermissions$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$CameraItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FlashMode, $FlashMode$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FlashMode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShutterSpeed, $ShutterSpeed$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$ShutterSpeed"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AttachmentType, $AttachmentType$Type} from "packages/io/github/mortuusars/exposure/camera/$AttachmentType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemAndStack, $ItemAndStack$Type} from "packages/io/github/mortuusars/exposure/util/$ItemAndStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilmRollItem, $FilmRollItem$Type} from "packages/io/github/mortuusars/exposure/item/$FilmRollItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$FocalRange, $FocalRange$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FocalRange"
import {$CompositionGuide, $CompositionGuide$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$CompositionGuide"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CameraItem extends $Item implements $IForgeItem {
static readonly "FILM_ATTACHMENT": $AttachmentType
static readonly "FLASH_ATTACHMENT": $AttachmentType
static readonly "LENS_ATTACHMENT": $AttachmentType
static readonly "FILTER_ATTACHMENT": $AttachmentType
static readonly "ATTACHMENTS": $List<($AttachmentType)>
static readonly "SHUTTER_SPEEDS": $List<($ShutterSpeed)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "openShutter"(player: $Player$Type, level: $Level$Type, stack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type, flashHasFired: boolean): void
public "closeShutter"(player: $Player$Type, stack: $ItemStack$Type): void
public "getFilm"(cameraStack: $ItemStack$Type): $Optional<($ItemAndStack<($FilmRollItem)>)>
public "useCamera"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "getShutterSpeed"(cameraStack: $ItemStack$Type): $ShutterSpeed
public "tryUseFlash"(player: $Player$Type, cameraStack: $ItemStack$Type): boolean
public "exposeFrameClientside"(player: $Player$Type, hand: $InteractionHand$Type, exposureId: string, flashHasFired: boolean, lightLevel: integer): void
public "hasInterplanarProjectorFilter"(cameraStack: $ItemStack$Type): boolean
public "getFocalLength"(cameraStack: $ItemStack$Type): float
public "getAttachment"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type): $Optional<($ItemStack)>
public "openCameraAttachmentsMenu"(player: $Player$Type, cameraSlotIndex: integer): void
public "isTooltipRemoved"(stack: $ItemStack$Type): boolean
public "setTooltipRemoved"(stack: $ItemStack$Type, removed: boolean): void
public "getAttachmentTypes"(cameraStack: $ItemStack$Type): $List<($AttachmentType)>
public "setAttachment"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type, attachmentStack: $ItemStack$Type): void
public "playCameraSound"(player: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float, pitchVariety: float): void
public "playCameraSound"(player: $Player$Type, originPlayer: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float, pitchVariety: float): void
public "playCameraSound"(player: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float): void
public "isInSelfieMode"(stack: $ItemStack$Type): boolean
public "setSelfieMode"(stack: $ItemStack$Type, selfie: boolean): void
public "setSelfieModeWithEffects"(player: $Player$Type, stack: $ItemStack$Type, selfie: boolean): void
public "isShutterOpen"(stack: $ItemStack$Type): boolean
public "setShutterOpen"(level: $Level$Type, stack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type, flashHasFired: boolean): void
public "setShutterClosed"(stack: $ItemStack$Type): void
public "addFrame"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, frameTag: $CompoundTag$Type, entities: $List$Type<($Entity$Type)>): void
public "addFrameData"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entitiesInFrame: $List$Type<($Entity$Type)>): void
public "addFrameToFilm"(cameraStack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "onFrameAdded"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entities: $List$Type<($Entity$Type)>): void
public "setFilm"(cameraStack: $ItemStack$Type, filmStack: $ItemStack$Type): void
public "getFlashMode"(cameraStack: $ItemStack$Type): $FlashMode
public "getFocalRange"(cameraStack: $ItemStack$Type): $FocalRange
public "getDefaultFocalRange"(): $FocalRange
public "spawnClientsideFlashEffects"(player: $Player$Type, cameraStack: $ItemStack$Type): void
public "getAttachmentTypeForSlot"(cameraStack: $ItemStack$Type, slot: integer): $Optional<($AttachmentType)>
public "onAttachmentChanged"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type): void
public "setZoom"(cameraStack: $ItemStack$Type, focalLength: double): void
public "getAllShutterSpeeds"(cameraStack: $ItemStack$Type): $List<($ShutterSpeed)>
public "setShutterSpeed"(cameraStack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type): void
public "getCompositionGuide"(cameraStack: $ItemStack$Type): $CompositionGuide
public "setCompositionGuide"(cameraStack: $ItemStack$Type, guide: $CompositionGuide$Type): void
public "setFlashMode"(cameraStack: $ItemStack$Type, flashMode: $FlashMode$Type): void
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, otherStack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "isActive"(stack: $ItemStack$Type): boolean
public "activate"(player: $Player$Type, stack: $ItemStack$Type): void
public "deactivate"(player: $Player$Type, stack: $ItemStack$Type): void
public "setActive"(stack: $ItemStack$Type, active: boolean): void
public "getUseDuration"(stack: $ItemStack$Type): integer
public "isRepairable"(arg0: $ItemStack$Type): boolean
set "shutterClosed"(value: $ItemStack$Type)
get "defaultFocalRange"(): $FocalRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraItem$Type = ($CameraItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraItem_ = $CameraItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/block/$FlashBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FlashBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(blockState: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "newBlockEntity"(pos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getFluidState"(pState: $BlockState$Type): $FluidState
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
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
export type $FlashBlock$Type = ($FlashBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlashBlock_ = $FlashBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$PaygateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TraderBlockRotatable, $TraderBlockRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockRotatable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"

export class $PaygateBlock extends $TraderBlockRotatable implements $IVariantBlock {
static readonly "POWERED": $BooleanProperty
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

public "getModelIndex"(arg0: $BlockState$Type): integer
public "modelsFromBlockState"(): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaygateBlock$Type = ($PaygateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaygateBlock_ = $PaygateBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$MoneyBagBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $MoneyBagBlock extends $FallingBlock implements $IRotatableBlock, $IEasyEntityBlock {
static readonly "SIZE": $IntegerProperty
static readonly "SHAPES": $ImmutableList<($VoxelShape)>
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

public "getRotationY"(arg0: $Direction$Type): integer
public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public static "getDropPosition"(arg0: $BlockPos$Type, arg1: integer): $Vec3
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getDropItem"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ItemStack
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public "getRotationY"(arg0: $BlockState$Type): integer
public "getRotationYInv"(arg0: $Direction$Type): integer
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public "getFacing"(arg0: $BlockState$Type): $Direction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyBagBlock$Type = ($MoneyBagBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyBagBlock_ = $MoneyBagBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IClientTracker {

 "isClient"(): boolean
 "isServer"(): boolean

(arg0: $Entity$Type): $IClientTracker
}

export namespace $IClientTracker {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientTracker$Type = ($IClientTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientTracker_ = $IClientTracker$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting" {
import {$TextRenderUtil$TextFormatting$Centering, $TextRenderUtil$TextFormatting$Centering$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$TextRenderUtil$TextFormatting$Centering"

export class $TextRenderUtil$TextFormatting {


public "bottomEdge"(): $TextRenderUtil$TextFormatting
public "leftEdge"(): $TextRenderUtil$TextFormatting
public "rightEdge"(): $TextRenderUtil$TextFormatting
public "centering"(): $TextRenderUtil$TextFormatting$Centering
public "topEdge"(): $TextRenderUtil$TextFormatting
public "centered"(): $TextRenderUtil$TextFormatting
public static "create"(): $TextRenderUtil$TextFormatting
public "color"(arg0: integer): $TextRenderUtil$TextFormatting
public "color"(): integer
public "middle"(): $TextRenderUtil$TextFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextRenderUtil$TextFormatting$Type = ($TextRenderUtil$TextFormatting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextRenderUtil$TextFormatting_ = $TextRenderUtil$TextFormatting$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$EasyMenuClientTab" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$EasyTab, $EasyTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$EasyTab"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$IEasyTabbedMenuScreen, $IEasyTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $EasyMenuClientTab<X extends T, M extends $IEasyTabbedMenu<(T)>, T extends $EasyMenuTab<(M), (T)>, S extends $IEasyTabbedMenuScreen<(M), (T), (S)>, C extends $EasyMenuClientTab<(X), (M), (T), (S), (C)>> extends $EasyTab {
readonly "screen": S
readonly "menu": M
readonly "commonTab": X

constructor(arg0: any, arg1: X)

public "getHoveredItem"(arg0: $ScreenPosition$Type): $Pair<($ItemStack), ($ScreenArea)>
public "tabVisible"(): boolean
public "getHoveredFluid"(arg0: $ScreenPosition$Type): $Pair<($FluidStack), ($ScreenArea)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasyMenuClientTab$Type<X, M, T, S, C> = ($EasyMenuClientTab<(X), (M), (T), (S), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasyMenuClientTab_<X, M, T, S, C> = $EasyMenuClientTab$Type<(X), (M), (T), (S), (C)>;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$ITNTThrowable" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITNTThrowable {

 "shootFromEntity"(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void

(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
}

export namespace $ITNTThrowable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITNTThrowable$Type = ($ITNTThrowable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITNTThrowable_ = $ITNTThrowable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$EjectionData, $EjectionData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ejection/$EjectionData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IServerTicker, $IServerTicker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$IServerTicker"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$TraderInterfaceBlockEntity$ActiveMode, $TraderInterfaceBlockEntity$ActiveMode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$ActiveMode"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PlayerReference, $PlayerReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$PlayerReference"
import {$TraderInterfaceMenu, $TraderInterfaceMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderInterfaceMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$IUpgradeableBlockEntity, $IUpgradeableBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeableBlockEntity"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IDumpable, $IDumpable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ejection/$IDumpable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EasyBlockEntity, $EasyBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blockentity/$EasyBlockEntity"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$StatTracker, $StatTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/api/stats/$StatTracker"
import {$TraderInterfaceBlockEntity$InteractionType, $TraderInterfaceBlockEntity$InteractionType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$InteractionType"
import {$SidedHandler, $SidedHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traderinterface/handlers/$SidedHandler"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TraderInterfaceTargets, $TraderInterfaceTargets$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/data/$TraderInterfaceTargets"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$FullTradeResult, $FullTradeResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$FullTradeResult"
import {$TradeReference, $TradeReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/data/$TradeReference"

export class $TraderInterfaceBlockEntity extends $EasyBlockEntity implements $IUpgradeable, $IDumpable, $IServerTicker, $IUpgradeableBlockEntity {
static readonly "INTERACTION_DELAY": integer
readonly "owner": $OwnerData
readonly "statTracker": $StatTracker
readonly "targets": $TraderInterfaceTargets
 "blockState": $BlockState


public "getUpgrades"(): $Container
public "allowUpgrade"(arg0: $UpgradeType$Type): boolean
public "flagAsRemovable"(): void
public "allowRemoval"(): boolean
public "buildEjectionData"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EjectionData
public "TryExecuteTrade"(arg0: $TradeReference$Type): $FullTradeResult
public "getReferencedPlayer"(): $PlayerReference
public "getBankAccount"(): $IBankAccount
public "getAccountReference"(): $BankReference
public "setModeDirty"(): void
public "isOnlineMode"(): boolean
public "setOnlineMode"(arg0: boolean): void
public "setOnlineModeDirty"(): void
public "getInteractionType"(): $TraderInterfaceBlockEntity$InteractionType
public "setInteractionType"(arg0: $TraderInterfaceBlockEntity$InteractionType$Type): void
public "getBlacklistedInteractions"(): $List<($TraderInterfaceBlockEntity$InteractionType)>
public "setInteractionDirty"(): void
public "getSelectableCount"(): integer
public "setUpgradeSlotsDirty"(): void
public "toggleTrader"(arg0: long): void
public "setTargetsDirty"(): void
public "toggleTradeIndex"(arg0: integer): void
public "acceptTradeChanges"(arg0: integer): void
public "deserializeTrade"(arg0: $CompoundTag$Type): $TradeData
public "setStatsDirty"(): void
public "getTradeContext"(arg0: $TraderData$Type): $TradeContext
public "setHandlerDirty"(arg0: $SidedHandler$Type<(any)>): void
public "sendHandlerMessage"(arg0: $ResourceLocation$Type, arg1: $CompoundTag$Type): void
public "receiveHandlerMessage"(arg0: $ResourceLocation$Type, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "onlineCheck"(): boolean
public "hasTraderPermissions"(arg0: $TraderData$Type): boolean
public "validTrader"(arg0: $TraderData$Type): boolean
public "validTrade"(arg0: $TradeReference$Type): boolean
public "validTraderType"(arg0: $TraderData$Type): boolean
public "initMenuTabs"(arg0: $TraderInterfaceMenu$Type): void
public "isOwner"(arg0: $Player$Type): boolean
public "openMenu"(arg0: $Player$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setMode"(arg0: $TraderInterfaceBlockEntity$ActiveMode$Type): void
public "getMode"(): $TraderInterfaceBlockEntity$ActiveMode
public "canAccess"(arg0: $Player$Type): boolean
public "isActive"(): boolean
public "getContents"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): $List<($ItemStack)>
public "initOwner"(arg0: $Entity$Type): void
public "serverTick"(): void
public "getOwnerName"(): $MutableComponent
public "getCapability"<C>(arg0: $Capability$Type<(C)>, arg1: $Direction$Type): $LazyOptional<(C)>
public "allowUpgrade"(arg0: $UpgradeItem$Type): boolean
public "quickInsertUpgrade"(arg0: $ItemStack$Type): boolean
public static "preCollected"(arg0: $List$Type<($ItemStack$Type)>, arg1: $Component$Type, arg2: $OwnerData$Type): $IDumpable
public "getUpgradeable"(): $IUpgradeable
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
/**
 * 
 * @deprecated
 */
public static "get"(arg0: $BlockEntity$Type): $IVariantDataStorage
public static "get"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IVariantDataStorage
public static "get"(arg0: $LootContext$Type): $IVariantDataStorage
get "upgrades"(): $Container
get "referencedPlayer"(): $PlayerReference
get "bankAccount"(): $IBankAccount
get "accountReference"(): $BankReference
get "onlineMode"(): boolean
set "onlineMode"(value: boolean)
get "interactionType"(): $TraderInterfaceBlockEntity$InteractionType
set "interactionType"(value: $TraderInterfaceBlockEntity$InteractionType$Type)
get "blacklistedInteractions"(): $List<($TraderInterfaceBlockEntity$InteractionType)>
get "selectableCount"(): integer
set "handlerDirty"(value: $SidedHandler$Type<(any)>)
get "updateTag"(): $CompoundTag
set "mode"(value: $TraderInterfaceBlockEntity$ActiveMode$Type)
get "mode"(): $TraderInterfaceBlockEntity$ActiveMode
get "active"(): boolean
get "ownerName"(): $MutableComponent
get "upgradeable"(): $IUpgradeable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceBlockEntity$Type = ($TraderInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceBlockEntity_ = $TraderInterfaceBlockEntity$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$TradeCostEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TradeEvent, $TradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent"

export class $TradeEvent$TradeCostEvent extends $TradeEvent {

constructor()
constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type, arg2: $MoneyValue$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $TradeData$Type, arg1: $TradeContext$Type)

public "giveDiscount"(arg0: integer): void
public "hikePrice"(arg0: integer): void
public "makeFree"(): void
public "forcedFree"(): boolean
public "makeNotFree"(): void
public "getPricePercentage"(): integer
public "setPricePercentage"(arg0: integer): void
public "getBaseCost"(): $MoneyValue
public "getCostResultIsFree"(): boolean
public "getCostResult"(): $MoneyValue
public "matches"(arg0: $TradeEvent$TradeCostEvent$Type): boolean
public "matches"(arg0: $TradeData$Type): boolean
public "getListenerList"(): $ListenerList
get "pricePercentage"(): integer
set "pricePercentage"(value: integer)
get "baseCost"(): $MoneyValue
get "costResultIsFree"(): boolean
get "costResult"(): $MoneyValue
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeEvent$TradeCostEvent$Type = ($TradeEvent$TradeCostEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeEvent$TradeCostEvent_ = $TradeEvent$TradeCostEvent$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/integration/create/attributes/$WalletAttributeType" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemAttribute, $ItemAttribute$Type} from "packages/com/simibubi/create/content/logistics/item/filter/attribute/$ItemAttribute"
import {$ItemAttributeType, $ItemAttributeType$Type} from "packages/com/simibubi/create/content/logistics/item/filter/attribute/$ItemAttributeType"

export class $WalletAttributeType implements $ItemAttributeType {

constructor()

public "getAllAttributes"(arg0: $ItemStack$Type, arg1: $Level$Type): $List<($ItemAttribute)>
public "createAttribute"(): $ItemAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletAttributeType$Type = ($WalletAttributeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletAttributeType_ = $WalletAttributeType$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$ChromaticSheetItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
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
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ChromaticSheetItem extends $Item {
static readonly "EXPOSURES_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getExposures"(stack: $ItemStack$Type): $List<($CompoundTag)>
public "addExposure"(stack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finalize"(level: $Level$Type, stack: $ItemStack$Type, idPrefix: string, player: $ServerPlayer$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChromaticSheetItem$Type = ($ChromaticSheetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChromaticSheetItem_ = $ChromaticSheetItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedSettingData$NodeAccess, $SavedSettingData$NodeAccess$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$NodeAccess"
import {$SavedSettingData$Mutable, $SavedSettingData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$Mutable"

export class $SavedSettingData {
static readonly "EMPTY": $SavedSettingData


public "makeMutable"(): $SavedSettingData$Mutable
public "hasNode"(arg0: string): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "write"(): $JsonObject
public static "read"(arg0: $JsonElement$Type): $SavedSettingData
public "save"(): $CompoundTag
public "getNode"(arg0: string): $SavedSettingData$NodeAccess
public static "parse"(arg0: $CompoundTag$Type): $SavedSettingData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SavedSettingData$Type = ($SavedSettingData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SavedSettingData_ = $SavedSettingData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$TraderSettingsClientTab" {
import {$TraderSettingsTab, $TraderSettingsTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TraderSettingsTab"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$IEasyTabbedMenuScreen, $IEasyTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$TraderStorageClientTab, $TraderStorageClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $TraderSettingsClientTab extends $TraderStorageClientTab<($TraderSettingsTab)> {
readonly "screen": S
readonly "menu": M
readonly "commonTab": X

constructor(arg0: any, arg1: $TraderSettingsTab$Type)

public "openTab"(arg0: integer): void
public "initialize"(arg0: $ScreenArea$Type, arg1: boolean): void
public "tick"(): void
public "getIcon"(): $IconData
public "shouldRenderInventoryText"(): boolean
public "showRightEdgeButtons"(): boolean
public "blockInventoryClosing"(): boolean
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderSettingsClientTab$Type = ($TraderSettingsClientTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderSettingsClientTab_ = $TraderSettingsClientTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ICapabilityBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICapabilityBlock {

 "getCapabilityBlockPos"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockPos
}

export namespace $ICapabilityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityBlock$Type = ($ICapabilityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityBlock_ = $ICapabilityBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/scroll/$IScrollable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScrollable {

 "validateScroll"(): void
 "handleScrollWheel"(arg0: double): boolean
 "setScroll"(arg0: integer): void
 "getMinScroll"(): integer
 "getMaxScroll"(): integer
 "currentScroll"(): integer
}

export namespace $IScrollable {
function calculateMaxScroll(arg0: integer, arg1: integer, arg2: integer): integer
function calculateMaxScroll(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollable$Type = ($IScrollable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollable_ = $IScrollable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$RotatableBlock" {
import {$EasyBlock, $EasyBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RotatableBlock extends $EasyBlock implements $IRotatableBlock {
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
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Function$Type<($Direction$Type), ($VoxelShape$Type)>)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public "getRotationY"(arg0: $BlockState$Type): integer
public "getRotationY"(arg0: $Direction$Type): integer
public "getRotationYInv"(arg0: $Direction$Type): integer
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public "getFacing"(arg0: $BlockState$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$Type = ($RotatableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatableBlock_ = $RotatableBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CouponItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IVariantItem, $IVariantItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CouponItem extends $Item implements $IVariantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "GetCouponCode"(arg0: $ItemStack$Type): integer
public static "GetCouponColor"(arg0: $ItemStack$Type): integer
public static "CreateCoupon"(arg0: $Item$Type, arg1: string, arg2: integer): $ItemStack
public static "CreateCoupon"(arg0: $Item$Type, arg1: string, arg2: integer, arg3: integer): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getDefaultModel"(arg0: integer): $ResourceLocation
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public "getItemID"(): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CouponItem$Type = ($CouponItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CouponItem_ = $CouponItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem extends $Item implements $IUpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $UpgradeType$Type, arg1: $Item$Properties$Type)

public static "noUniqueConflicts"(arg0: $UpgradeItem$Type, arg1: $Container$Type): boolean
public "getUpgradeType"(): $UpgradeType
public "addsTooltips"(): boolean
public static "getUpgradeData"(arg0: $ItemStack$Type): $UpgradeData
public static "setUpgradeData"(arg0: $ItemStack$Type, arg1: $UpgradeData$Type): void
public static "getUpgradeTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type): $List<($Component)>
public static "getUpgradeTooltip"(arg0: $ItemStack$Type, arg1: boolean, arg2: $Level$Type): $List<($Component)>
public "setDefaultValues"(arg0: $UpgradeData$Mutable$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onApplied"(arg0: $IUpgradeable$Type): void
get "upgradeType"(): $UpgradeType
set "defaultValues"(value: $UpgradeData$Mutable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type = ($UpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem_ = $UpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/bank/salary/$SalaryData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BankReference, $BankReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/reference/$BankReference"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$IBankAccount, $IBankAccount$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/$IBankAccount"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomTarget, $CustomTarget$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/bank/salary/$CustomTarget"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"

export class $SalaryData {
static readonly "PERM_VIEW": integer
static readonly "PERM_EDIT": integer

constructor(arg0: $IBankAccount$Type, arg1: $Function$Type<($SalaryData$Type), (integer)>)

public "getCustomTargetAccounts"(): $List<($BankReference)>
public "setAutoSalaryEnabled"(arg0: boolean): void
public "getCustomTargetSelections"(): $Set<(string)>
public "failedLastSalaryAttempt"(): boolean
public "forceOnlinePlayerList"(arg0: $List$Type<($UUID$Type)>): void
public "isAutoSalaryEnabled"(): boolean
public "setSalaryNotification"(arg0: boolean): void
public "setLoginRequiredForSalary"(arg0: boolean): void
public "getLoginRequiredForSalary"(): boolean
public "forceLastSalaryTime"(arg0: long): void
public "getSalaryNotification"(): boolean
public "getLastSalaryTime"(): long
public "getSalaryDelay"(): long
public "setSalaryDelay"(arg0: long): void
public "isSalaryCreative"(): boolean
public "setSalaryCreative"(arg0: $Player$Type, arg1: boolean): void
public "setSalary"(arg0: $MoneyValue$Type): void
public "getDirectTargets"(): $List<($BankReference)>
public "removeTarget"(arg0: $BankReference$Type): void
public "getCustomTargets"(): $List<($CustomTarget)>
public "addCustomTarget"(arg0: string): void
public "removeCustomTarget"(arg0: string): void
public "forcePaySalaries"(arg0: boolean): void
public "getAllTargets"(): $List<($BankReference)>
/**
 * 
 * @deprecated
 */
public "getTotalSalaryCost"(arg0: boolean): $MoneyValue
public "getTotalSalaryCost"(arg0: boolean, arg1: boolean): $MoneyValue
/**
 * 
 * @deprecated
 */
public "canAffordNextSalary"(arg0: boolean): boolean
public "canAffordNextSalary"(arg0: boolean, arg1: boolean): boolean
public "addTarget"(arg0: $BankReference$Type): void
public "getSalary"(): $MoneyValue
public "isTarget"(arg0: $Player$Type): boolean
public "getName"(): $Component
public "load"(arg0: $CompoundTag$Type): void
public "setName"(arg0: string): void
public "save"(): $CompoundTag
public "getInternalName"(): string
public "tick"(): void
public "onPlayerJoin"(arg0: $ServerPlayer$Type): void
public "HandleEditMessage"(arg0: $Player$Type, arg1: $LazyPacketData$Type): void
public "checkForOnlinePlayers"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "checkForOnlinePlayers"(): void
public "forceFailedLastSalary"(arg0: boolean): void
get "customTargetAccounts"(): $List<($BankReference)>
set "autoSalaryEnabled"(value: boolean)
get "customTargetSelections"(): $Set<(string)>
get "autoSalaryEnabled"(): boolean
set "salaryNotification"(value: boolean)
set "loginRequiredForSalary"(value: boolean)
get "loginRequiredForSalary"(): boolean
get "salaryNotification"(): boolean
get "lastSalaryTime"(): long
get "salaryDelay"(): long
set "salaryDelay"(value: long)
get "salaryCreative"(): boolean
set "salary"(value: $MoneyValue$Type)
get "directTargets"(): $List<($BankReference)>
get "customTargets"(): $List<($CustomTarget)>
get "allTargets"(): $List<($BankReference)>
get "salary"(): $MoneyValue
get "name"(): $Component
set "name"(value: string)
get "internalName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalaryData$Type = ($SalaryData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalaryData_ = $SalaryData$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$PhotographCopyingRecipe, $PhotographCopyingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe"

export class $PhotographCopyingRecipe$Serializer implements $RecipeSerializer<($PhotographCopyingRecipe)> {

constructor()

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $PhotographCopyingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $PhotographCopyingRecipe$Type): void
public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $PhotographCopyingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PhotographCopyingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographCopyingRecipe$Serializer$Type = ($PhotographCopyingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographCopyingRecipe$Serializer_ = $PhotographCopyingRecipe$Serializer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/discount_codes/$IDiscountCodeSource" {
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IDiscountCodeSource {

 "getDiscountCodes"(): $Set<(integer)>
 "containsCode"(arg0: string): boolean
 "consumeCode"(arg0: string): boolean
 "priority"(): integer
}

export namespace $IDiscountCodeSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDiscountCodeSource$Type = ($IDiscountCodeSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDiscountCodeSource_ = $IDiscountCodeSource$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/enchantments/$MoneyMendingEnchantment" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MoneyMendingEnchantment extends $Enchantment {
 "slots": ($EquipmentSlot)[]
 "rarity": $Enchantment$Rarity
readonly "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, ...arg1: ($EquipmentSlot$Type)[])

public static "getRepairCost"(arg0: $ItemStack$Type): $MoneyValue
public static "runEntityTick"(arg0: $LivingEntity$Type, arg1: $IMoneyHandler$Type): void
public static "addEnchantmentTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "isTreasureOnly"(): boolean
public "getMaxLevel"(): integer
get "treasureOnly"(): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyMendingEnchantment$Type = ($MoneyMendingEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyMendingEnchantment_ = $MoneyMendingEnchantment$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CoinJarItem$Colored" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CoinJarItem, $CoinJarItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$CoinJarItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ColoredItem, $ColoredItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/colored/$ColoredItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoinJarItem$Colored extends $CoinJarItem implements $ColoredItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setItemColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinJarItem$Colored$Type = ($CoinJarItem$Colored);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinJarItem$Colored_ = $CoinJarItem$Colored$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$LivingSensingExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingSensingExt {

 "doExtendedLOSCheck"(): void

(): void
}

export namespace $LivingSensingExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingSensingExt$Type = ($LivingSensingExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingSensingExt_ = $LivingSensingExt$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderType" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TraderType<T extends $TraderData> {
readonly "type": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullSupplier$Type<(T)>)

public "loadFromJson"(arg0: $JsonObject$Type): T
public "toString"(): string
public "load"(arg0: boolean, arg1: $CompoundTag$Type): T
public "create"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderType$Type<T> = ($TraderType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderType_<T> = $TraderType$Type<(T)>;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractNbtTransferringRecipe extends $CustomRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getTransferIngredient"(): $Ingredient
public "transferNbt"(transferIngredientStack: $ItemStack$Type, recipeResultStack: $ItemStack$Type): $ItemStack
public "assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "matches"(container: $CraftingContainer$Type, level: $Level$Type): boolean
public "getResult"(): $ItemStack
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
get "transferIngredient"(): $Ingredient
get "ingredients"(): $NonNullList<($Ingredient)>
get "result"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNbtTransferringRecipe$Type = ($AbstractNbtTransferringRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNbtTransferringRecipe_ = $AbstractNbtTransferringRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/info/$TraderInfoClientTab" {
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$IEasyTabbedMenuScreen, $IEasyTabbedMenuScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/tabbed/$IEasyTabbedMenuScreen"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$TraderInfoTab, $TraderInfoTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TraderInfoTab"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$TraderStorageClientTab, $TraderStorageClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageClientTab"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $TraderInfoClientTab extends $TraderStorageClientTab<($TraderInfoTab)> {
readonly "screen": S
readonly "menu": M
readonly "commonTab": X

constructor(arg0: any, arg1: $TraderInfoTab$Type)

public "openTab"(arg0: integer): void
public "initialize"(arg0: $ScreenArea$Type, arg1: boolean): void
public "tick"(): void
public "getIcon"(): $IconData
public "shouldRenderInventoryText"(): boolean
public "showRightEdgeButtons"(): boolean
public "blockInventoryClosing"(): boolean
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
get "icon"(): $IconData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInfoClientTab$Type = ($TraderInfoClientTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInfoClientTab_ = $TraderInfoClientTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$TooltipItem" {
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
import {$MultiLineTextEntry, $MultiLineTextEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/text/$MultiLineTextEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TooltipItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($List$Type<($Component$Type)>)>)

public static "insertTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $List$Type<($Component$Type)>): void
public static "insertTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type): void
public static "insertTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $MultiLineTextEntry$Type): void
public static "addTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $Supplier$Type<($List$Type<($Component$Type)>)>): void
public static "addTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $MultiLineTextEntry$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "combine"(...arg0: ($Supplier$Type<($List$Type<($Component$Type)>)>)[]): $Supplier<($List<($Component)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipItem$Type = ($TooltipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipItem_ = $TooltipItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IMultiBlock" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMultiBlock {

 "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IMultiBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiBlock$Type = ($IMultiBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiBlock_ = $IMultiBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TradeRulesTab" {
import {$TradeRuleType, $TradeRuleType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/rules/$TradeRuleType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$ITradeRuleHost, $ITradeRuleHost$Type} from "packages/io/github/lightman314/lightmanscurrency/common/traders/rules/$ITradeRuleHost"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TradeRulesTab extends $TraderStorageTab {
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_MONEY_STORAGE": integer
static readonly "TAB_TRADE_MULTI_PRICE": integer
static readonly "TAB_TRADER_INFO": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_SETTINGS_CLIPBOARD": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": M


public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "goBack"(): void
public "canOpen"(arg0: $Player$Type): boolean
public "getHost"(): $ITradeRuleHost
public "EditTradeRule"(arg0: $TradeRuleType$Type<(any)>, arg1: $LazyPacketData$Builder$Type): void
public "EditTradeRule"(arg0: $ResourceLocation$Type, arg1: $LazyPacketData$Builder$Type): void
public "hasBackButton"(): boolean
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
get "host"(): $ITradeRuleHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeRulesTab$Type = ($TradeRulesTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeRulesTab_ = $TradeRulesTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder" {
import {$IMoneyHandler, $IMoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MoneyHandler, $MoneyHandler$Type} from "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$MoneyHandler"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export class $MoneyHolder extends $MoneyHandler implements $IMoneyHolder {
static readonly "EMPTY": $IMoneyHolder

constructor()

public static "createFromHandler"(arg0: $IMoneyHandler$Type, arg1: $Component$Type, arg2: integer, arg3: integer): $IMoneyHolder
public static "createFromHandler"(arg0: $IMoneyHandler$Type, arg1: $Component$Type, arg2: integer): $IMoneyHolder
public "priority"(): integer
public "inversePriority"(): integer
public "formatTooltip"(arg0: $List$Type<($Component$Type)>): void
public "getTooltipTitle"(): $Component
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
get "tooltipTitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyHolder$Type = ($MoneyHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyHolder_ = $MoneyHolder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$SpeedUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeData$Mutable, $UpgradeData$Mutable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData$Mutable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$UpgradeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpeedUpgradeItem extends $UpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: integer, arg1: $Item$Properties$Type)

public "setDefaultValues"(arg0: $UpgradeData$Mutable$Type): void
set "defaultValues"(value: $UpgradeData$Mutable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedUpgradeItem$Type = ($SpeedUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeedUpgradeItem_ = $SpeedUpgradeItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$ATMBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TallRotatableBlock, $TallRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$TallRotatableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IVariantBlock, $IVariantBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/$IVariantBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IVariantDataStorage, $IVariantDataStorage$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/block/block_entity/$IVariantDataStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ATMBlock extends $TallRotatableBlock implements $IVariantBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getItemID"(): $ResourceLocation
public static "copyDataToItem"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $ItemStack$Type): void
public static "copyDataToItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public static "copyDataFromItem"(arg0: $IVariantDataStorage$Type, arg1: $ItemStack$Type): void
public "getModelIndex"(arg0: $BlockState$Type): integer
public "getBlockID"(): $ResourceLocation
public "isRotatable"(): boolean
public "modelsFromBlockState"(): integer
public "getCustomDefaultModel"(arg0: integer): $ResourceLocation
public static "tryUseWand"(arg0: $Player$Type, arg1: $BlockPos$Type): boolean
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
get "blockID"(): $ResourceLocation
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATMBlock$Type = ($ATMBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATMBlock_ = $ATMBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderInterfaceMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$TraderInterfaceTab, $TraderInterfaceTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceTab"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"
import {$EasyTabbedMenu, $EasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyTabbedMenu"
import {$TraderInterfaceBlockEntity$ActiveMode, $TraderInterfaceBlockEntity$ActiveMode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity$ActiveMode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderInterfaceMenu extends $EasyTabbedMenu<($TraderInterfaceMenu), ($TraderInterfaceTab)> {
static readonly "SLOT_OFFSET": integer
readonly "player": $Player
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

constructor(arg0: integer, arg1: $Inventory$Type, arg2: $TraderInterfaceBlockEntity$Type)

public "setOnlineMode"(arg0: boolean): void
public "getTradeContext"(arg0: $TraderData$Type): $TradeContext
public "changeMode"(arg0: $TraderInterfaceBlockEntity$ActiveMode$Type): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "getBE"(): $TraderInterfaceBlockEntity
public "HandleMessages"(arg0: $LazyPacketData$Type): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isClient"(): boolean
set "onlineMode"(value: boolean)
get "bE"(): $TraderInterfaceBlockEntity
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceMenu$Type = ($TraderInterfaceMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceMenu_ = $TraderInterfaceMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeableBlockEntity" {
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"

export interface $IUpgradeableBlockEntity {

 "getUpgradeable"(): $IUpgradeable
}

export namespace $IUpgradeableBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableBlockEntity$Type = ($IUpgradeableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableBlockEntity_ = $IUpgradeableBlockEntity$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/$IEasyTickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEasyTickable {

 "tick"(): void

(): void
}

export namespace $IEasyTickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEasyTickable$Type = ($IEasyTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEasyTickable_ = $IEasyTickable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ownership/$IOwnable" {
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"

export interface $IOwnable {

 "getOwner"(): $OwnerData

(): $OwnerData
}

export namespace $IOwnable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnable$Type = ($IOwnable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnable_ = $IOwnable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CoinJarItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoinJarItem extends $BlockItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinJarItem$Type = ($CoinJarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinJarItem_ = $CoinJarItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/mixin/client/$RenderStateShardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderStateShardAccessor {

 "getName"(): string

(): string
}

export namespace $RenderStateShardAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$Type = ($RenderStateShardAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderStateShardAccessor_ = $RenderStateShardAccessor$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$PhotographFrameItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhotographFrameItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographFrameItem$Type = ($PhotographFrameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographFrameItem_ = $PhotographFrameItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CashRegisterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CashRegisterItem extends $BlockItem {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CashRegisterItem$Type = ($CashRegisterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CashRegisterItem_ = $CashRegisterItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$TaxReferenceType, $TaxReferenceType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxReferenceType"

export class $TaxableReference {
readonly "type": $TaxReferenceType


public "stillValid"(arg0: boolean): boolean
public "equals"(arg0: any): boolean
public static "load"(arg0: $CompoundTag$Type): $TaxableReference
public "save"(): $CompoundTag
public "getTaxable"(arg0: boolean): $ITaxable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxableReference$Type = ($TaxableReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxableReference_ = $TaxableReference$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ejection/$IDumpable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EjectionData, $EjectionData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ejection/$EjectionData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IDumpable {

 "buildEjectionData"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EjectionData

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EjectionData
}

export namespace $IDumpable {
function preCollected(arg0: $List$Type<($ItemStack$Type)>, arg1: $Component$Type, arg2: $OwnerData$Type): $IDumpable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDumpable$Type = ($IDumpable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDumpable_ = $IDumpable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$CoinMintRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CoinMintRecipe implements $Recipe<($Container)> {
readonly "ingredientCount": integer

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: $Ingredient$Type, arg3: integer, arg4: $ItemStack$Type)

public "getOutputItem"(): $ItemStack
public "getInternalDuration"(): integer
public "getIngredient"(): $Ingredient
public "getId"(): $ResourceLocation
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getDuration"(): integer
public "isValid"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
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
get "outputItem"(): $ItemStack
get "internalDuration"(): integer
get "ingredient"(): $Ingredient
get "id"(): $ResourceLocation
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "duration"(): integer
get "valid"(): boolean
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $CoinMintRecipe$Type = ($CoinMintRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinMintRecipe_ = $CoinMintRecipe$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab" {
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderStorageTab extends $EasyMenuTab<($ITraderStorageMenu), ($TraderStorageTab)> {
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_MONEY_STORAGE": integer
static readonly "TAB_TRADE_MULTI_PRICE": integer
static readonly "TAB_TRADER_INFO": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_SETTINGS_CLIPBOARD": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": M


public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderStorageTab$Type = ($TraderStorageTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderStorageTab_ = $TraderStorageTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ejection/$EjectionData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EjectionDataType, $EjectionDataType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ejection/$EjectionDataType"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ISidedObject, $ISidedObject$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$ISidedObject"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EjectionData implements $ISidedObject {

constructor()

public "setChanged"(): void
public "getName"(): $Component
public "isEmpty"(): boolean
public "id"(): long
public "save"(): $CompoundTag
public "canAccess"(arg0: $Player$Type): boolean
public "getType"(): $EjectionDataType
public "getOwner"(): $OwnerData
public "getContents"(): $Container
public "setID"(arg0: long): void
public "isClient"(): boolean
public "canSplit"(): boolean
public "getSplitButtonIcon"(): $IconData
public "getSplitButtonTooltip"(): $List<($Component)>
public "splitContents"(): void
public "pushNotificationToOwner"(): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isServer"(): boolean
get "name"(): $Component
get "empty"(): boolean
get "type"(): $EjectionDataType
get "owner"(): $OwnerData
get "contents"(): $Container
set "iD"(value: long)
get "client"(): boolean
get "splitButtonIcon"(): $IconData
get "splitButtonTooltip"(): $List<($Component)>
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EjectionData$Type = ($EjectionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EjectionData_ = $EjectionData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$WidgetAddon" {
import {$EasyWidget, $EasyWidget$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$EasyWidget"

export class $WidgetAddon {

constructor()

public "attach"(arg0: $EasyWidget$Type): void
public "renderTick"(): void
public "visibleTick"(): void
public "activeTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetAddon$Type = ($WidgetAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetAddon_ = $WidgetAddon$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IWideBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$IRotatableBlock, $IRotatableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IRotatableBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMultiBlock, $IMultiBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IMultiBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWideBlock extends $IMultiBlock, $IRotatableBlock {

 "getIsRight"(arg0: $BlockState$Type): boolean
 "getIsLeft"(arg0: $BlockState$Type): boolean
 "getOtherSide"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
 "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "getRotationY"(arg0: $BlockState$Type): integer
 "getRotationY"(arg0: $Direction$Type): integer
 "getRotationYInv"(arg0: $Direction$Type): integer
 "getFacing"(arg0: $BlockState$Type): $Direction
}

export namespace $IWideBlock {
const ISLEFT: $BooleanProperty
function getBackwardPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getRightVect(arg0: $Direction$Type): $Vector3f
function getLeftVect(arg0: $Direction$Type): $Vector3f
function getForwardVect(arg0: $Direction$Type): $Vector3f
function getBackwardVect(arg0: $Direction$Type): $Vector3f
function getOffsetVect(arg0: $Direction$Type): $Vector3f
function getRelativeSide(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
function getActualSide(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
function getLeftPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getRightPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
function getForwardPos(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWideBlock$Type = ($IWideBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWideBlock_ = $IWideBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CommandTraderItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommandTraderItem extends $BlockItem {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandTraderItem$Type = ($CommandTraderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandTraderItem_ = $CommandTraderItem$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$IEntityData" {
import {$EntityFlags, $EntityFlags$Type} from "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags"

export interface $IEntityData {

 "getFlags"(): $EntityFlags

(): $EntityFlags
}

export namespace $IEntityData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityData$Type = ($IEntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityData_ = $IEntityData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/capability/money/$IMoneyHandler" {
import {$IMoneyViewer, $IMoneyViewer$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export interface $IMoneyHandler extends $IMoneyViewer {

 "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
 "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
 "getStoredMoney"(): $MoneyView
}

export namespace $IMoneyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyHandler$Type = ($IMoneyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyHandler_ = $IMoneyHandler$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxCollector" {
import {$ITaxableContext, $ITaxableContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxableContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$ITaxable, $ITaxable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"
import {$WorldArea, $WorldArea$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldArea"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITaxCollector extends $IClientTracker {

 "getTaxRate"(): integer
 "CalculateAndPayTaxes"(arg0: $ITaxable$Type, arg1: $MoneyValue$Type): $MoneyValue
 "IsInArea"(arg0: $ITaxable$Type): boolean
 "AcceptTaxable"(arg0: $ITaxable$Type): void
 "getArea"(): $WorldArea
 "getName"(): $MutableComponent
 "canAccess"(arg0: $Player$Type): boolean
 "getOwner"(): $OwnerData
 "getID"(): long
 "isServerEntry"(): boolean
 "TaxableWasRemoved"(arg0: $ITaxable$Type): void
 "PayTaxesDirectly"(arg0: $ITaxable$Type, arg1: $MoneyValue$Type): void
 "ShouldTax"(arg0: $ITaxableContext$Type): boolean
 "ShouldTax"(arg0: $ITaxable$Type): boolean
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITaxCollector {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaxCollector$Type = ($ITaxCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaxCollector_ = $ITaxCollector$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityFlags$FlagType, $EntityFlags$FlagType$Type} from "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags$FlagType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityFlags {
static readonly "TAG_ID": string
static readonly "SERVER_ENTITY_TAG_ID": string
 "ladderClimber": boolean
 "modifyArmor": boolean
 "modifyHeldItems": boolean
 "modifyAttributes": boolean
 "enchantGear": boolean
 "isThrownEntity": boolean
 "isVariedSize": boolean
 "canBreakBlocks": $EntityFlags$FlagType
 "canFly": $EntityFlags$FlagType
 "magicRes": float
 "projMult": float
 "explosionMult": float
 "serverSideEntityID": $ResourceLocation

constructor()

public "isShieldDisabled"(): boolean
public "disableShield"(): void
public static "get"(entity: $Entity$Type): $EntityFlags
public "load"(nbt: $CompoundTag$Type): void
public "save"(): $CompoundTag
get "shieldDisabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlags$Type = ($EntityFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlags_ = $EntityFlags$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"

export interface $ScreenAccessor {

 "addRenderableWidgetTo"<T extends ($GuiEventListener) & ($Renderable)>(arg0: T): T

(arg0: T): T
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/client/$TradeInteractionData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$LazyPacketData$Builder, $LazyPacketData$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData$Builder"

export class $TradeInteractionData extends $Record {
static readonly "DUMMY": $TradeInteractionData
static readonly "DUMMY_RIGHT": $TradeInteractionData

constructor(localMouseX: integer, localMouseY: integer, mouseButton: integer, shiftHeld: boolean, ctrlHeld: boolean, altHeld: boolean)

public "localMouseX"(): integer
public "localMouseY"(): integer
public "altHeld"(): boolean
public "ctrlHeld"(): boolean
public "mouseButton"(): integer
public "shiftHeld"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: $LazyPacketData$Type): $TradeInteractionData
public "encode"(arg0: $LazyPacketData$Builder$Type): $LazyPacketData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeInteractionData$Type = ($TradeInteractionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeInteractionData_ = $TradeInteractionData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NotificationCategory, $NotificationCategory$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$NotificationCategory"
import {$ISidedObject, $ISidedObject$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/$ISidedObject"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Notification implements $ISidedObject {


public "getChatMessage"(): $List<($Component)>
public "flagAsClient"(arg0: boolean): $Notification
public "flagAsClient"(): $Notification
public "hasTimeStamp"(): boolean
public "wasSeen"(): boolean
public "setSeen"(): void
public "getMessageLines"(): $List<($Component)>
public "getGeneralMessage"(): $List<($Component)>
public "getTimeStampMessage"(): $Component
public "onNewNotification"(arg0: $Notification$Type): boolean
public "getTimeStamp"(): long
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "getCount"(): integer
public "isClient"(): boolean
public "getCategory"(): $NotificationCategory
public "isServer"(): boolean
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
get "chatMessage"(): $List<($Component)>
get "messageLines"(): $List<($Component)>
get "generalMessage"(): $List<($Component)>
get "timeStampMessage"(): $Component
get "timeStamp"(): long
get "count"(): integer
get "client"(): boolean
get "category"(): $NotificationCategory
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Notification$Type = ($Notification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Notification_ = $Notification$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxable" {
import {$ITaxableContext, $ITaxableContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/$ITaxableContext"
import {$Notification, $Notification$Type} from "packages/io/github/lightman314/lightmanscurrency/api/notifications/$Notification"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$WorldPosition, $WorldPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/world/$WorldPosition"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITaxable extends $IClientTracker {

 "pushNotification"(arg0: $Supplier$Type<($Notification$Type)>): void
 "getWorldPosition"(): $WorldPosition
 "isNetworkAccessible"(): boolean
 "getPossibleContexts"(): $Set<($ITaxableContext)>
 "getName"(): $MutableComponent
 "getReference"(): $TaxableReference
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITaxable {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaxable$Type = ($ITaxable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaxable_ = $ITaxable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$InteractionSlotData" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $InteractionSlotData {
static readonly "FLUID_TYPE": string
static readonly "ENERGY_TYPE": string
readonly "type": string


public static "hasInteractionSlot"(arg0: $List$Type<($InteractionSlotData$Type)>, arg1: string): boolean
public "allowItemInSlot"(arg0: $ItemStack$Type): boolean
public static "allowItemInSlot"(arg0: $List$Type<($InteractionSlotData$Type)>, arg1: $ItemStack$Type): boolean
public "emptySlotBG"(): $Pair<($ResourceLocation), ($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionSlotData$Type = ($InteractionSlotData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionSlotData_ = $InteractionSlotData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/client/sprites/$FixedSizeSprite" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"

export interface $FixedSizeSprite {

 "render"(arg0: $EasyGuiGraphics$Type, arg1: $ScreenPosition$Type, arg2: boolean, arg3: boolean): void
 "render"(arg0: $EasyGuiGraphics$Type, arg1: integer, arg2: integer): void
 "render"(arg0: $EasyGuiGraphics$Type, arg1: integer, arg2: integer, arg3: $AbstractWidget$Type): void
 "render"(arg0: $EasyGuiGraphics$Type, arg1: $ScreenPosition$Type): void
 "render"(arg0: $EasyGuiGraphics$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean): void
 "render"(arg0: $EasyGuiGraphics$Type, arg1: $ScreenPosition$Type, arg2: $AbstractWidget$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $FixedSizeSprite {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FixedSizeSprite$Type = ($FixedSizeSprite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FixedSizeSprite_ = $FixedSizeSprite$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$WalletItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IVariantItem, $IVariantItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SoundEntry, $SoundEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/data/$SoundEntry"

export class $WalletItem extends $Item implements $IVariantItem {
static readonly "MAX_WALLET_SLOTS": integer
static readonly "SLOTS_PER_UPGRADE": integer
static readonly "DEFAULT_UPGRADE_LIMIT": integer
static readonly "DEFAULT_COIN_COLLECT_SOUND": $ResourceLocation
readonly "bonusMagnet": integer
readonly "indestructible": boolean
readonly "model": $ResourceLocation
readonly "upgradeLimit": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: integer, arg1: $ResourceLocation$Type, arg2: boolean, arg3: integer, arg4: integer, arg5: $List$Type<($SoundEntry$Type)>, arg6: $Item$Properties$Type)
constructor(arg0: integer, arg1: $ResourceLocation$Type, arg2: $Item$Properties$Type)

public static "lazyModel"(arg0: string): $ResourceLocation
public static "lazyModel"(arg0: $ResourceLocation$Type): $ResourceLocation
public "requiredModels"(): integer
public "getDefaultModel"(arg0: integer): $ResourceLocation
public static "BonusSlots"(arg0: $ItemStack$Type): integer
public static "validWalletStack"(arg0: $ItemStack$Type): boolean
public static "CanExchange"(arg0: $WalletItem$Type): boolean
public static "CanPickup"(arg0: $WalletItem$Type): boolean
public static "HasBankAccess"(arg0: $WalletItem$Type): boolean
public static "InventorySize"(arg0: $ItemStack$Type): integer
public static "getAutoExchange"(arg0: $ItemStack$Type): boolean
public static "getWalletInventory"(arg0: $ItemStack$Type): $SimpleContainer
public static "putWalletInventory"(arg0: $ItemStack$Type, arg1: $Container$Type): void
public static "toggleAutoExchange"(arg0: $ItemStack$Type): void
public static "QuickCollect"(arg0: $Player$Type, arg1: $Container$Type, arg2: boolean): void
public static "playCollectSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public static "getCoinCollectSound"(arg0: $Level$Type, arg1: $ItemStack$Type): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "isWallet"(arg0: $ItemStack$Type): boolean
public static "isWallet"(arg0: $Item$Type): boolean
public static "PickupCoin"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public static "isEmpty"(arg0: $ItemStack$Type): boolean
public "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
public "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "getValidVariants"(): $List<($ResourceLocation)>
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public "getItemID"(): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WalletItem$Type = ($WalletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WalletItem_ = $WalletItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$TradeComparisonResult" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ProductComparisonResult, $ProductComparisonResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/comparison/$ProductComparisonResult"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $TradeComparisonResult {

constructor()

public "ProductMatches"(): boolean
public "Identical"(): boolean
public "addProductResult"(arg0: boolean, arg1: boolean, arg2: integer): void
public "addProductResult"(arg0: $ProductComparisonResult$Type): void
public "setCompatible"(): void
public "addProductResults"(arg0: $Collection$Type<(any)>): void
public "comparePrices"(arg0: $MoneyValue$Type, arg1: $MoneyValue$Type): void
public "setTypeResult"(arg0: boolean): void
public "TypeMatches"(): boolean
public "getProductResultCount"(): integer
public "getProductResult"(arg0: integer): $ProductComparisonResult
public "isPriceExpensive"(): boolean
public "isPriceCheaper"(): boolean
public "PriceMatches"(): boolean
public "PriceIncompatible"(): boolean
public "priceDifference"(): $MoneyValue
public "isCompatible"(): boolean
set "typeResult"(value: boolean)
get "productResultCount"(): integer
get "priceExpensive"(): boolean
get "priceCheaper"(): boolean
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeComparisonResult$Type = ($TradeComparisonResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeComparisonResult_ = $TradeComparisonResult$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxReferenceType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TaxableReference, $TaxableReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/taxes/reference/$TaxableReference"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TaxReferenceType {
readonly "typeID": $ResourceLocation


public "load"(arg0: $CompoundTag$Type): $TaxableReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaxReferenceType$Type = ($TaxReferenceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaxReferenceType_ = $TaxReferenceType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IMoneyHolder, $IMoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MoneyHolder, $MoneyHolder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$MoneyHolder"
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MoneyValue, $MoneyValue$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue"

export class $MoneyStorage extends $MoneyHolder {
static readonly "EMPTY": $IMoneyHolder

constructor(arg0: $Runnable$Type)
constructor(arg0: $Runnable$Type, arg1: integer)

public "addValues"(arg0: $Collection$Type<($MoneyValue$Type)>): void
public "capValue"(arg0: $MoneyValue$Type): $MoneyValue
public "getAllValueText"(): $Component
public "safeLoad"(arg0: $CompoundTag$Type, arg1: string): void
public "insertMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "isMoneyTypeValid"(arg0: $MoneyValue$Type): boolean
public "GiveToPlayer"(arg0: $Player$Type): void
public "allValues"(): $List<($MoneyValue)>
public "extractMoney"(arg0: $MoneyValue$Type, arg1: boolean): $MoneyValue
public "removeValue"(arg0: $MoneyValue$Type): void
public "addValue"(arg0: $MoneyValue$Type): void
public "priority"(): integer
public "load"(arg0: $ListTag$Type): void
public "valueOf"(arg0: string): $MoneyValue
public "clear"(): void
public "isEmpty"(): boolean
public "containsValue"(arg0: $MoneyValue$Type): boolean
public "save"(): $ListTag
public "getTooltipTitle"(): $Component
public "getRandomValueText"(arg0: string): $Component
public "getRandomValueText"(): $Component
public "getRandomValueText"(arg0: $Component$Type): $Component
public static "defaultTooltipFormat"(arg0: $List$Type<($Component$Type)>, arg1: $Component$Type, arg2: $MoneyView$Type): void
public static "sortPayFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
public static "sortTakeFirst"(arg0: $List$Type<($IMoneyHolder$Type)>): void
get "allValueText"(): $Component
get "empty"(): boolean
get "tooltipTitle"(): $Component
get "randomValueText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyStorage$Type = ($MoneyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyStorage_ = $MoneyStorage$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$CoinItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoinItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinItem$Type = ($CoinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinItem_ = $CoinItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData$NodeAccess" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $SavedSettingData$NodeAccess {


public "hasBoolValue"(arg0: string): boolean
public "hasLongValue"(arg0: string): boolean
public "hasCompoundValue"(arg0: string): boolean
public "getCompoundValue"(arg0: string): $CompoundTag
public "forSubNode"(arg0: string): $SavedSettingData$NodeAccess
public "hasDoubleValue"(arg0: string): boolean
public "hasFloatValue"(arg0: string): boolean
public "hasIntValue"(arg0: string): boolean
public "getFloatValue"(arg0: string): float
public "getLongValue"(arg0: string): long
public "getStringValue"(arg0: string): string
public "hasStringValue"(arg0: string): boolean
public "getDoubleValue"(arg0: string): double
public "isEmpty"(): boolean
public "getBooleanValue"(arg0: string): boolean
public "getIntValue"(arg0: string): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SavedSettingData$NodeAccess$Type = ($SavedSettingData$NodeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SavedSettingData$NodeAccess_ = $SavedSettingData$NodeAccess$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/blocks/$CoinBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CoinBlock extends $FallingBlock {
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

public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoinBlock$Type = ($CoinBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoinBlock_ = $CoinBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe$ExtraData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $TicketStationRecipe$ExtraData extends $Record {
static readonly "EMPTY": $TicketStationRecipe$ExtraData

constructor(code: string, durability: integer)

public "durability"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "code"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketStationRecipe$ExtraData$Type = ($TicketStationRecipe$ExtraData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketStationRecipe$ExtraData_ = $TicketStationRecipe$ExtraData$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/easy/$WidgetRotation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WidgetRotation extends $Enum<($WidgetRotation)> {
static readonly "TOP": $WidgetRotation
static readonly "RIGHT": $WidgetRotation
static readonly "BOTTOM": $WidgetRotation
static readonly "LEFT": $WidgetRotation


public "counterClockwise"(): $WidgetRotation
public "clockwise"(): $WidgetRotation
public static "values"(): ($WidgetRotation)[]
public static "valueOf"(arg0: string): $WidgetRotation
public static "fromIndex"(arg0: integer): $WidgetRotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetRotation$Type = (("top") | ("left") | ("bottom") | ("right")) | ($WidgetRotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetRotation_ = $WidgetRotation$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallWideRotatable" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IWideBlock, $IWideBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IWideBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TraderBlockTallRotatable, $TraderBlockTallRotatable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockTallRotatable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TraderBlockTallWideRotatable extends $TraderBlockTallRotatable implements $IWideBlock {
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


public "removeOtherBlocks"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getIsRight"(arg0: $BlockState$Type): boolean
public "getIsLeft"(arg0: $BlockState$Type): boolean
public "getOtherSide"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public static "getBackwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightVect"(arg0: $Direction$Type): $Vector3f
public static "getLeftVect"(arg0: $Direction$Type): $Vector3f
public static "getForwardVect"(arg0: $Direction$Type): $Vector3f
public static "getBackwardVect"(arg0: $Direction$Type): $Vector3f
public static "getOffsetVect"(arg0: $Direction$Type): $Vector3f
public static "getRelativeSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getActualSide"(arg0: $Direction$Type, arg1: $Direction$Type): $Direction
public static "getLeftPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getRightPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
public static "getForwardPos"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockTallWideRotatable$Type = ($TraderBlockTallWideRotatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockTallWideRotatable_ = $TraderBlockTallWideRotatable$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType" {
import {$UpgradeData, $UpgradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $UpgradeType {

constructor()

public "getTooltip"(arg0: $UpgradeData$Type): $List<($Component)>
public "clearDataFromStack"(arg0: $ItemStack$Type): boolean
public "addTarget"(arg0: $ItemLike$Type): void
public "addTarget"(arg0: $Supplier$Type<(any)>): void
public "addTarget"(arg0: $Component$Type): void
public "getPossibleTargets"(): $List<($Component)>
public "getTooltipWithContext"(arg0: $UpgradeData$Type, arg1: $Level$Type): $List<($Component)>
public static "hasUpgrade"(arg0: $UpgradeType$Type, arg1: $Container$Type): boolean
public "isUnique"(): boolean
get "possibleTargets"(): $List<($Component)>
get "unique"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type = ($UpgradeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_ = $UpgradeType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<K, V, S> {

 "accept"(arg0: K, arg1: V, arg2: S): void

(arg0: K, arg1: V, arg2: S): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<K, V, S> = ($TriConsumer<(K), (V), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<K, V, S> = $TriConsumer$Type<(K), (V), (S)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$ITallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IMultiBlock, $IMultiBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IMultiBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITallBlock extends $IMultiBlock {

 "getIsTop"(arg0: $BlockState$Type): boolean
 "getIsBottom"(arg0: $BlockState$Type): boolean
 "getOtherHeight"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
 "isReplaceable"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}

export namespace $ITallBlock {
const ISBOTTOM: $BooleanProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITallBlock$Type = ($ITallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITallBlock_ = $ITallBlock$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/ejection/$EjectionDataType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EjectionData, $EjectionData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/ejection/$EjectionData"

export class $EjectionDataType {

constructor()

public "load"(arg0: $CompoundTag$Type): $EjectionData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EjectionDataType$Type = ($EjectionDataType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EjectionDataType_ = $EjectionDataType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/integration/create/attributes/$VariantAttributeType" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemAttribute, $ItemAttribute$Type} from "packages/com/simibubi/create/content/logistics/item/filter/attribute/$ItemAttribute"
import {$ItemAttributeType, $ItemAttributeType$Type} from "packages/com/simibubi/create/content/logistics/item/filter/attribute/$ItemAttributeType"

export class $VariantAttributeType implements $ItemAttributeType {

constructor()

public "getAllAttributes"(arg0: $ItemStack$Type, arg1: $Level$Type): $List<($ItemAttribute)>
public "createAttribute"(): $ItemAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantAttributeType$Type = ($VariantAttributeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantAttributeType_ = $VariantAttributeType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/attachments/$TraderAttachment" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TraderAttachment$TraderAttachmentType, $TraderAttachment$TraderAttachmentType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/attachments/$TraderAttachment$TraderAttachmentType"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TraderAttachment {


public "modifyDefaultPermissions"(arg0: $Map$Type<(string), (integer)>): void
public "handleSettingsChange"(arg0: $Player$Type, arg1: $LazyPacketData$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "getType"(): $TraderAttachment$TraderAttachmentType<(any)>
get "type"(): $TraderAttachment$TraderAttachmentType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderAttachment$Type = ($TraderAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderAttachment_ = $TraderAttachment$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DisplayEntry, $DisplayEntry$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/button/trade/$DisplayEntry"
import {$CurrencyType, $CurrencyType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/types/$CurrencyType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$OwnerData, $OwnerData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/player/$OwnerData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"

export class $MoneyValue {

constructor()

public static "loadFromJson"(arg0: $JsonObject$Type): $MoneyValue
public static "loadFromJson"(arg0: $JsonElement$Type): $MoneyValue
/**
 * 
 * @deprecated
 */
public "getDisplayEntry"(arg0: $List$Type<($Component$Type)>, arg1: boolean): $DisplayEntry
public static "safeLoad"(arg0: $CompoundTag$Type, arg1: string): $MoneyValue
public "subtractValue"(arg0: $MoneyValue$Type): $MoneyValue
public static "generateCustomUniqueName"(arg0: $ResourceLocation$Type, arg1: string): string
public "isValidPrice"(): boolean
public "percentageOfValue"(arg0: integer): $MoneyValue
public "percentageOfValue"(arg0: integer, arg1: boolean): $MoneyValue
public "multiplyValue"(arg0: double): $MoneyValue
public "allowInterest"(): boolean
public "getSmallestValue"(): $MoneyValue
public "fromCoreValue"(arg0: long): $MoneyValue
public "isFree"(): boolean
public "getCoreValue"(): long
public "addValue"(arg0: $MoneyValue$Type): $MoneyValue
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "load"(arg0: $CompoundTag$Type): $MoneyValue
public static "decode"(arg0: $FriendlyByteBuf$Type): $MoneyValue
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "isEmpty"(): boolean
public static "empty"(): $MoneyValue
public "containsValue"(arg0: $MoneyValue$Type): boolean
public "save"(): $CompoundTag
public "isInvalid"(): boolean
public "getString"(arg0: string): string
public "getString"(): string
public "getCurrency"(): $CurrencyType
public "getText"(arg0: $MutableComponent$Type): $MutableComponent
public "getText"(arg0: string): $MutableComponent
public "getText"(): $MutableComponent
public static "free"(): $MoneyValue
public "toJson"(): $JsonObject
public "sameType"(arg0: $MoneyValue$Type): boolean
public "onBlockBroken"(arg0: $OwnerData$Type): $List<($ItemStack)>
public "getUniqueName"(): string
get "validPrice"(): boolean
get "smallestValue"(): $MoneyValue
get "coreValue"(): long
get "invalid"(): boolean
get "string"(): string
get "currency"(): $CurrencyType
get "text"(): $MutableComponent
get "uniqueName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoneyValue$Type = ($MoneyValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoneyValue_ = $MoneyValue$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$PortableTerminalItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IVariantItem, $IVariantItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TooltipItem, $TooltipItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/$TooltipItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableTerminalItem extends $TooltipItem implements $IVariantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getDefaultModel"(arg0: integer): $ResourceLocation
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public "getItemID"(): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableTerminalItem$Type = ($PortableTerminalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableTerminalItem_ = $PortableTerminalItem$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$SensingExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SensingExt {

 "doLineOfSightExt"(): void

(): void
}

export namespace $SensingExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensingExt$Type = ($SensingExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SensingExt_ = $SensingExt$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot" {
import {$ScreenPosition, $ScreenPosition$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenPosition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IGhostSlotProvider, $IGhostSlotProvider$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IGhostSlotProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $GhostSlot<T> extends $Record {

constructor(area: $ScreenArea$Type, handler: $Consumer$Type<(T)>, clazz: $Class$Type<(T)>)

public "tryAccept"(arg0: any): void
public "asProvider"(): $IGhostSlotProvider
public "asProvider"(arg0: $Supplier$Type<(boolean)>): $IGhostSlotProvider
public static "simpleFluid"(arg0: $ScreenPosition$Type, arg1: $Consumer$Type<($FluidStack$Type)>): $GhostSlot<($FluidStack)>
public static "simpleItem"(arg0: $ScreenPosition$Type, arg1: $Consumer$Type<($ItemStack$Type)>): $GhostSlot<($ItemStack)>
public "clazz"(): $Class<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "handler"(): $Consumer<(T)>
public "area"(): $ScreenArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GhostSlot$Type<T> = ($GhostSlot<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GhostSlot_<T> = $GhostSlot$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$IMoneyCollectionMenu, $IMoneyCollectionMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/$IMoneyCollectionMenu"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$InteractionSlot, $InteractionSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/$InteractionSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$MenuValidator, $MenuValidator$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$MenuValidator"
import {$ITraderSource, $ITraderSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource"
import {$ITraderMenu, $ITraderMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderMenu"
import {$LazyMessageMenu, $LazyMessageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$LazyMessageMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IValidatedMenu, $IValidatedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/validation/$IValidatedMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderMenu extends $LazyMessageMenu implements $IValidatedMenu, $ITraderMenu, $IMoneyCollectionMenu {
static readonly "SLOT_OFFSET": integer
readonly "player": $Player
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

constructor(arg0: integer, arg1: $Inventory$Type, arg2: long, arg3: $MenuValidator$Type)

public "CollectStoredMoney"(): void
public "ExecuteTrade"(arg0: integer, arg1: integer): void
public "isSingleTrader"(): boolean
public "getSingleTrader"(): $TraderData
public "setHeldItem"(arg0: $ItemStack$Type): void
public "getHeldItem"(): $ItemStack
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "getInteractionSlot"(): $InteractionSlot
public "getContext"(arg0: $TraderData$Type): $TradeContext
public "getValidator"(): $MenuValidator
public "getSlots"(): $List<($Slot)>
public "removed"(arg0: $Player$Type): void
public "getPlayer"(): $Player
public "getCoinSlots"(): $List<($Slot)>
public "submitDiscountCode"(arg0: string): void
public "removeDiscountCode"(arg0: string): void
public "clearDiscountCodes"(): void
public "getTraderSource"(): $ITraderSource
public "getTypedDiscountCodes"(): $Set<(string)>
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
public "isClient"(): boolean
get "singleTrader"(): boolean
get "singleTrader"(): $TraderData
set "heldItem"(value: $ItemStack$Type)
get "heldItem"(): $ItemStack
get "interactionSlot"(): $InteractionSlot
get "validator"(): $MenuValidator
get "slots"(): $List<($Slot)>
get "player"(): $Player
get "coinSlots"(): $List<($Slot)>
get "traderSource"(): $ITraderSource
get "typedDiscountCodes"(): $Set<(string)>
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderMenu$Type = ($TraderMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderMenu_ = $TraderMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/data/$TraderInterfaceTargets" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TradeData, $TradeData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/trade/$TradeData"
import {$TraderInterfaceBlockEntity, $TraderInterfaceBlockEntity$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/blockentity/$TraderInterfaceBlockEntity"
import {$TradeReference, $TradeReference$Type} from "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/data/$TradeReference"

export class $TraderInterfaceTargets {

constructor(arg0: $TraderInterfaceBlockEntity$Type)

public "getTraderCount"(): integer
public "copyTrade"(arg0: $TradeData$Type): $TradeData
public "loadTrade"(arg0: $CompoundTag$Type): $TradeData
public "toggleTrader"(arg0: long): boolean
public "toggleTrade"(arg0: integer): boolean
public "getTradeReferences"(): $List<($TradeReference)>
public "loadFromOldData"(arg0: $CompoundTag$Type): void
public "getTraders"(): $List<($TraderData)>
public "getTrader"(): $TraderData
public "load"(arg0: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "tick"(arg0: $Predicate$Type<($TraderData$Type)>): boolean
get "traderCount"(): integer
get "tradeReferences"(): $List<($TradeReference)>
get "traders"(): $List<($TraderData)>
get "trader"(): $TraderData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceTargets$Type = ($TraderInterfaceTargets);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceTargets_ = $TraderInterfaceTargets$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/cards/$ATMCardItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IVariantItem, $IVariantItem$Type} from "packages/io/github/lightman314/lightmanscurrency/api/variants/item/$IVariantItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ColoredItem, $ColoredItem$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/colored/$ColoredItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ATMCardItem extends $Item implements $ColoredItem, $IVariantItem {
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
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "setItemColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type): integer
public "getValidVariants"(): $List<($ResourceLocation)>
public "requiredModels"(): integer
public "getDefaultModel"(arg0: integer): $ResourceLocation
public static "setItemVariant"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public static "getItemVariant"(arg0: $ItemStack$Type): $ResourceLocation
public "getItemID"(): $ResourceLocation
public static "setLocked"(arg0: $ItemStack$Type, arg1: boolean): void
public static "isLocked"(arg0: $ItemStack$Type): boolean
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
get "validVariants"(): $List<($ResourceLocation)>
get "itemID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATMCardItem$Type = ($ATMCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATMCardItem_ = $ATMCardItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$TraderBlockBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EasyBlock, $EasyBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/common/blocks/$EasyBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeable, $IUpgradeable$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeable"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ITraderBlock, $ITraderBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/blocks/$ITraderBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IEasyEntityBlock, $IEasyEntityBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/blocks/$IEasyEntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IUpgradeableBlock, $IUpgradeableBlock$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$IUpgradeableBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TraderBlockBase extends $EasyBlock implements $ITraderBlock, $IEasyEntityBlock, $IUpgradeableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $VoxelShape$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "getUpgradeable"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $IUpgradeable
public "canUseUpgradeItem"(arg0: $IUpgradeable$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "removeOtherBlocks"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "removeAllBlocks"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getAllowedTypes"(): $Collection<($BlockEntityType<(any)>)>
public "setPlacedByBase"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroyBase"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "getDropBlockItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getCapabilityBlockEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockEntity
public "canBreak"(arg0: $Player$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "getBlockEntity"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getCapabilityBlockPos"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockPos
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "allowedTypes"(): $Collection<($BlockEntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderBlockBase$Type = ($TraderBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderBlockBase_ = $TraderBlockBase$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$StackedPhotographsItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PhotographItem, $PhotographItem$Type} from "packages/io/github/mortuusars/exposure/item/$PhotographItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemAndStack, $ItemAndStack$Type} from "packages/io/github/mortuusars/exposure/util/$ItemAndStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StackedPhotographsItem extends $Item {
static readonly "PHOTOGRAPHS_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getPhotographsCount"(stack: $ItemStack$Type): integer
public "getStackLimit"(): integer
public "addPhotographOnTop"(stack: $ItemStack$Type, photographStack: $ItemStack$Type): void
public static "playAddSoundClientside"(player: $Player$Type): void
public "getPhotographs"(stack: $ItemStack$Type): $List<($ItemAndStack<($PhotographItem)>)>
public "getPhotographs"(stack: $ItemStack$Type, limit: integer): $List<($ItemAndStack<($PhotographItem)>)>
public "canAddPhotograph"(stack: $ItemStack$Type): boolean
public "addPhotograph"(stack: $ItemStack$Type, photographStack: $ItemStack$Type, index: integer): void
public "addPhotographToBottom"(stack: $ItemStack$Type, photographStack: $ItemStack$Type): void
public "removePhotograph"(stack: $ItemStack$Type, index: integer): $ItemAndStack<($PhotographItem)>
public "removeTopPhotograph"(stack: $ItemStack$Type): $ItemAndStack<($PhotographItem)>
public "removeBottomPhotograph"(stack: $ItemStack$Type): $ItemAndStack<($PhotographItem)>
public "getFirstIdOrTexture"(stack: $ItemStack$Type): $Either<(string), ($ResourceLocation)>
public "getTopPhotographs"(stack: $ItemStack$Type, count: integer): $List<($Either<(string), ($ResourceLocation)>)>
public static "playRemoveSoundClientside"(player: $Player$Type): void
public "cyclePhotographs"(stack: $ItemStack$Type, player: $Player$Type): boolean
public "getTooltipImage"(stack: $ItemStack$Type): $Optional<($TooltipComponent)>
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideStackedOnOther"(stack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
get "stackLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackedPhotographsItem$Type = ($StackedPhotographsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackedPhotographsItem_ = $StackedPhotographsItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/items/$AncientCoinItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICoinLike, $ICoinLike$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/coins/$ICoinLike"
import {$AncientCoinType, $AncientCoinType$Type} from "packages/io/github/lightman314/lightmanscurrency/common/items/ancient_coins/$AncientCoinType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AncientCoinItem extends $Item implements $ICoinLike {
static readonly "PROPERTY": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getAncientCoinType"(arg0: $ItemStack$Type): $AncientCoinType
public "isCoin"(arg0: $ItemStack$Type): boolean
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "verifyTagAfterLoad"(arg0: $CompoundTag$Type): void
public "isFromSideChain"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientCoinItem$Type = ($AncientCoinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientCoinItem_ = $AncientCoinItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/trader_interface/menu/$TraderInterfaceTab" {
import {$TraderInterfaceMenu, $TraderInterfaceMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/$TraderInterfaceMenu"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$EasyMenuTab, $EasyMenuTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$EasyMenuTab"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderInterfaceTab extends $EasyMenuTab<($TraderInterfaceMenu), ($TraderInterfaceTab)> {
static readonly "TAB_INFO": integer
static readonly "TAB_STORAGE": integer
static readonly "TAB_TRADER_SELECT": integer
static readonly "TAB_TRADE_SELECT": integer
static readonly "TAB_STATS": integer
static readonly "TAB_OWNERSHIP": integer
readonly "menu": M


public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "handleMessage"(arg0: $LazyPacketData$Type): void
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInterfaceTab$Type = ($TraderInterfaceTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInterfaceTab_ = $TraderInterfaceTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/$ISaveableSettingsHolder" {
import {$NodeSelections, $NodeSelections$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$NodeSelections"
import {$LoadContext$Builder, $LoadContext$Builder$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$LoadContext$Builder"
import {$SettingsNode, $SettingsNode$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/$SettingsNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$PrettyTextData, $PrettyTextData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/pretty/$PrettyTextData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SavedSettingData, $SavedSettingData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$SavedSettingData"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISaveableSettingsHolder extends $IClientTracker {

 "loadSettings"(arg0: $Player$Type, arg1: $SavedSettingData$Type, arg2: $NodeSelections$Type): void
 "saveSettings"(): $SavedSettingData
 "saveSettings"(arg0: $Player$Type, arg1: $NodeSelections$Type): $SavedSettingData
 "getAllSettingNodes"(): $List<($SettingsNode)>
 "buildLoadContext"(arg0: $LoadContext$Builder$Type): void
 "defaultNodeSelections"(arg0: $Player$Type): $NodeSelections
 "writePrettySettings"(arg0: $SavedSettingData$Type): $PrettyTextData
 "getName"(): $MutableComponent
 "getNode"(arg0: string): $SettingsNode
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ISaveableSettingsHolder {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISaveableSettingsHolder$Type = ($ISaveableSettingsHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISaveableSettingsHolder_ = $ISaveableSettingsHolder$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/slots/easy/$EasySlot" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $EasySlot extends $Slot {
static readonly "EMPTY_SLOT_BG": $ResourceLocation
static readonly "BACKGROUND": $Pair<($ResourceLocation), ($ResourceLocation)>
 "active": boolean
 "locked": boolean
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer)

public static "SetActive"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "SetActive"(arg0: $AbstractContainerMenu$Type): void
public static "SetActive"(arg0: $List$Type<(any)>, arg1: boolean): void
public static "SetActive"(arg0: $List$Type<(any)>): void
public "setChanged"(): void
public "remove"(arg0: integer): $ItemStack
public static "Lock"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "Lock"(arg0: $AbstractContainerMenu$Type): void
public "setListener"(arg0: $Runnable$Type): void
public "isActive"(): boolean
public "mayPlace"(arg0: $ItemStack$Type): boolean
public "mayPickup"(arg0: $Player$Type): boolean
public static "Unlock"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "Unlock"(arg0: $AbstractContainerMenu$Type): void
public static "SetInactive"(arg0: $AbstractContainerMenu$Type, arg1: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "SetInactive"(arg0: $AbstractContainerMenu$Type): void
public static "SetInactive"(arg0: $List$Type<(any)>): void
public static "SetLocked"(arg0: $AbstractContainerMenu$Type, arg1: boolean, arg2: $Function$Type<($EasySlot$Type), (boolean)>): void
public static "SetLocked"(arg0: $AbstractContainerMenu$Type, arg1: boolean): void
set "listener"(value: $Runnable$Type)
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasySlot$Type = ($EasySlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasySlot_ = $EasySlot$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$FilmRollItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFilmItem, $IFilmItem$Type} from "packages/io/github/mortuusars/exposure/item/$IFilmItem"
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
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilmRollItem extends $Item implements $IFilmItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(filmType: $FilmType$Type, barColor: integer, properties: $Item$Properties$Type)

public "canAddFrame"(filmStack: $ItemStack$Type): boolean
public "addFrame"(filmStack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "getType"(): $FilmType
public "getDefaultFrameSize"(): integer
public "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
public "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
public "getFrameSize"(filmStack: $ItemStack$Type): integer
public "getExposedFramesCount"(stack: $ItemStack$Type): integer
public "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
get "type"(): $FilmType
get "defaultFrameSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmRollItem$Type = ($FilmRollItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmRollItem_ = $FilmRollItem$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/core/$PermissionsTab" {
import {$TraderSettingsTab, $TraderSettingsTab$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TraderSettingsTab"
import {$IScrollable, $IScrollable$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/widget/scroll/$IScrollable"
import {$PermissionOption, $PermissionOption$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/permissions/$PermissionOption"
import {$IconData, $IconData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/icons/$IconData"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$EasyGuiGraphics, $EasyGuiGraphics$Type} from "packages/io/github/lightman314/lightmanscurrency/api/misc/client/rendering/$EasyGuiGraphics"
import {$TraderSettingsClientTab, $TraderSettingsClientTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$TraderSettingsClientTab"
import {$SettingsSubTab, $SettingsSubTab$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/screen/inventory/traderstorage/settings/$SettingsSubTab"
import {$ITraderStorageScreen, $ITraderStorageScreen$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageScreen"
import {$ScreenArea, $ScreenArea$Type} from "packages/io/github/lightman314/lightmanscurrency/client/util/$ScreenArea"

export class $PermissionsTab extends $SettingsSubTab implements $IScrollable {
static readonly "PERMISSIONS_PER_PAGE": integer
static readonly "ROW_HEIGHT": integer
readonly "parent": $TraderSettingsClientTab
readonly "commonTab": $TraderSettingsTab
readonly "screen": $ITraderStorageScreen
readonly "menu": $ITraderStorageMenu

constructor(arg0: $TraderSettingsClientTab$Type)

public "isOptionVisible"(arg0: $PermissionOption$Type): boolean
public "canOpen"(): boolean
public "initialize"(arg0: $ScreenArea$Type, arg1: boolean): void
public "tick"(): void
public "getIcon"(): $IconData
public "setScroll"(arg0: integer): void
public "getMaxScroll"(): integer
public "currentScroll"(): integer
public "renderBG"(arg0: $EasyGuiGraphics$Type): void
public "renderAfterWidgets"(arg0: $EasyGuiGraphics$Type): void
public "validateScroll"(): void
public "handleScrollWheel"(arg0: double): boolean
public static "calculateMaxScroll"(arg0: integer, arg1: integer, arg2: integer): integer
public static "calculateMaxScroll"(arg0: integer, arg1: integer): integer
public "getMinScroll"(): integer
get "icon"(): $IconData
set "scroll"(value: integer)
get "maxScroll"(): integer
get "minScroll"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionsTab$Type = ($PermissionsTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionsTab_ = $PermissionsTab$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilmType extends $Enum<($FilmType)> implements $StringRepresentable {
static readonly "BLACK_AND_WHITE": $FilmType
static readonly "COLOR": $FilmType
static readonly "CODEC": $StringRepresentable$EnumCodec<($FilmType)>
readonly "frameR": integer
readonly "frameG": integer
readonly "frameB": integer
readonly "filmR": float
readonly "filmG": float
readonly "filmB": float
readonly "filmA": float


public static "byName"(name: string): $FilmType
public static "values"(): ($FilmType)[]
public static "valueOf"(name: string): $FilmType
public "getSerializedName"(): string
public "createItemStack"(): $ItemStack
public "createDevelopedItemStack"(): $ItemStack
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmType$Type = (("color") | ("black_and_white")) | ($FilmType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmType_ = $FilmType$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/interfaces/$IGhostSlotProvider" {
import {$GhostSlot, $GhostSlot$Type} from "packages/io/github/lightman314/lightmanscurrency/client/gui/easy/$GhostSlot"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IGhostSlotProvider {

 "getGhostSlots"(): $List<($GhostSlot<(any)>)>

(): $List<($GhostSlot<(any)>)>
}

export namespace $IGhostSlotProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostSlotProvider$Type = ($IGhostSlotProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostSlotProvider_ = $IGhostSlotProvider$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/attachments/$TraderAttachment$TraderAttachmentType" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$TraderAttachment, $TraderAttachment$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/attachments/$TraderAttachment"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TraderAttachment$TraderAttachmentType<T extends $TraderAttachment> extends $Record {

constructor(id: $ResourceLocation$Type, builder: $Function$Type<($TraderData$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "builder"(): $Function<($TraderData), (T)>
public "id"(): $ResourceLocation
public "build"(arg0: $TraderData$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderAttachment$TraderAttachmentType$Type<T> = ($TraderAttachment$TraderAttachmentType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderAttachment$TraderAttachmentType_<T> = $TraderAttachment$TraderAttachmentType$Type<(T)>;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/$FullTradeResult" {
import {$TradeEvent$PostTradeEvent, $TradeEvent$PostTradeEvent$Type} from "packages/io/github/lightman314/lightmanscurrency/api/events/$TradeEvent$PostTradeEvent"
import {$TradeResult, $TradeResult$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeResult"

export class $FullTradeResult {
readonly "simpleResult": $TradeResult
readonly "data": $TradeEvent$PostTradeEvent


public "isSuccess"(): boolean
public static "failure"(arg0: $TradeResult$Type): $FullTradeResult
public static "success"(arg0: $TradeEvent$PostTradeEvent$Type): $FullTradeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FullTradeResult$Type = ($FullTradeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FullTradeResult_ = $FullTradeResult$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$ModifyFrameDataEventJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ModifyFrameDataEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entitiesInFrame: $List$Type<($Entity$Type)>)

public "getFrame"(): $CompoundTag
public "getEntitiesInFrame"(): $List<($Entity)>
public "getCameraStack"(): $ItemStack
public "getPlayer"(): $Player
get "frame"(): $CompoundTag
get "entitiesInFrame"(): $List<($Entity)>
get "cameraStack"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyFrameDataEventJS$Type = ($ModifyFrameDataEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyFrameDataEventJS_ = $ModifyFrameDataEventJS$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/upgrades/types/capacity/$CapacityUpgrade" {
import {$UpgradeType, $UpgradeType$Type} from "packages/io/github/lightman314/lightmanscurrency/api/upgrades/$UpgradeType"

export class $CapacityUpgrade extends $UpgradeType {
static "CAPACITY": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityUpgrade$Type = ($CapacityUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapacityUpgrade_ = $CapacityUpgrade$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/money/value/holder/$IMoneyViewer" {
import {$MoneyView, $MoneyView$Type} from "packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyView"

export interface $IMoneyViewer {

 "getStoredMoney"(): $MoneyView

(): $MoneyView
}

export namespace $IMoneyViewer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMoneyViewer$Type = ($IMoneyViewer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMoneyViewer_ = $IMoneyViewer$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TraderArgument$Info$Template, $TraderArgument$Info$Template$Type} from "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument$Info$Template"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TraderArgument, $TraderArgument$Type} from "packages/io/github/lightman314/lightmanscurrency/common/commands/arguments/$TraderArgument"

export class $TraderArgument$Info implements $ArgumentTypeInfo<($TraderArgument), ($TraderArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(arg0: $TraderArgument$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $TraderArgument$Info$Template
public "serializeToJson"(arg0: $TraderArgument$Info$Template$Type, arg1: $JsonObject$Type): void
public "unpack"(arg0: $TraderArgument$Type): $TraderArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderArgument$Info$Type = ($TraderArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderArgument$Info_ = $TraderArgument$Info$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/customer/$ITraderMenu" {
import {$TraderData, $TraderData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TraderData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$TradeContext, $TradeContext$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$TradeContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITraderSource, $ITraderSource$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/$ITraderSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITraderMenu extends $IClientTracker {

 "setHeldItem"(arg0: $ItemStack$Type): void
 "getHeldItem"(): $ItemStack
 "getContext"(arg0: $TraderData$Type): $TradeContext
 "getSlots"(): $List<($Slot)>
 "getPlayer"(): $Player
 "submitDiscountCode"(arg0: string): void
 "removeDiscountCode"(arg0: string): void
 "clearDiscountCodes"(): void
 "getTraderSource"(): $ITraderSource
 "getTypedDiscountCodes"(): $Set<(string)>
 "isClient"(): boolean
 "isServer"(): boolean
}

export namespace $ITraderMenu {
function entityWrapper(arg0: $Entity$Type): $IClientTracker
function forKnown(arg0: boolean): $IClientTracker
function forClient(): $IClientTracker
function forServer(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITraderMenu$Type = ($ITraderMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITraderMenu_ = $ITraderMenu$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/api/settings/data/$NodeSelections" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $NodeSelections {

constructor()

public "setNodeSelected"(arg0: string, arg1: boolean): void
public "addSubNode"(arg0: string, arg1: string): void
public "toggleNode"(arg0: string): void
public "toggleSubNode"(arg0: string, arg1: string): void
public "removeSubNode"(arg0: string, arg1: string): void
public "setSubNodes"(arg0: string, arg1: $Collection$Type<(string)>): void
public "nodeSelected"(arg0: string): boolean
public "subNodeSelected"(arg0: string, arg1: string): boolean
public "write"(): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $NodeSelections
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeSelections$Type = ($NodeSelections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeSelections_ = $NodeSelections$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/menus/traderstorage/core/$TraderInfoTab" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IClientTracker, $IClientTracker$Type} from "packages/io/github/lightman314/lightmanscurrency/common/util/$IClientTracker"
import {$ITraderStorageMenu, $ITraderStorageMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$ITraderStorageMenu"
import {$IEasyTabbedMenu, $IEasyTabbedMenu$Type} from "packages/io/github/lightman314/lightmanscurrency/common/menus/tabbed/$IEasyTabbedMenu"
import {$TraderStorageTab, $TraderStorageTab$Type} from "packages/io/github/lightman314/lightmanscurrency/api/traders/menu/storage/$TraderStorageTab"
import {$LazyPacketData, $LazyPacketData$Type} from "packages/io/github/lightman314/lightmanscurrency/api/network/$LazyPacketData"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TraderInfoTab extends $TraderStorageTab {
static readonly "TAB_TRADE_BASIC": integer
static readonly "TAB_TRADE_STORAGE": integer
static readonly "TAB_TRADE_ADVANCED": integer
static readonly "TAB_TRADE_MISC": integer
static readonly "TAB_MONEY_STORAGE": integer
static readonly "TAB_TRADE_MULTI_PRICE": integer
static readonly "TAB_TRADER_INFO": integer
static readonly "TAB_TRADER_SETTINGS": integer
static readonly "TAB_SETTINGS_CLIPBOARD": integer
static readonly "TAB_RULES_TRADER": integer
static readonly "TAB_RULES_TRADE": integer
readonly "menu": M

constructor(arg0: $ITraderStorageMenu$Type)

public "receiveMessage"(arg0: $LazyPacketData$Type): void
public "canOpen"(arg0: $Player$Type): boolean
public "createClientTab"(arg0: any): any
public static "entityWrapper"(arg0: $Entity$Type): $IClientTracker
public static "forKnown"(arg0: boolean): $IClientTracker
public static "forClient"(): $IClientTracker
public static "forServer"(): $IClientTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraderInfoTab$Type = ($TraderInfoTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraderInfoTab_ = $TraderInfoTab$Type;
}}
declare module "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$DurabilityData, $DurabilityData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/durability/$DurabilityData"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/io/github/lightman314/lightmanscurrency/util/$ItemRequirement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$TicketStationRecipeInput, $TicketStationRecipeInput$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/input/$TicketStationRecipeInput"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$TicketStationRecipe$ExtraData, $TicketStationRecipe$ExtraData$Type} from "packages/io/github/lightman314/lightmanscurrency/common/crafting/$TicketStationRecipe$ExtraData"

export interface $TicketStationRecipe extends $Recipe<($TicketStationRecipeInput)> {

 "validateDurability"(arg0: integer, arg1: boolean): integer
 "matchesTicketKioskSellItem"(arg0: $ItemStack$Type): boolean
 "allowIgnoreKioskRecipe"(): boolean
 "assembleWithKiosk"(arg0: $ItemStack$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
 "getKioskStorageRequirement"(arg0: $ItemStack$Type): $ItemRequirement
 "consumeModifier"(): boolean
 "validModifier"(arg0: $ItemStack$Type): boolean
 "jeiModifierList"(): $List<($ItemStack)>
 "validIngredient"(arg0: $ItemStack$Type): boolean
 "peekAtResult"(arg0: $Container$Type, arg1: $TicketStationRecipe$ExtraData$Type): $ItemStack
 "exampleResult"(): $ItemStack
 "validData"(arg0: $TicketStationRecipe$ExtraData$Type): boolean
 "validCode"(arg0: string): boolean
 "validDurability"(arg0: integer): boolean
 "requiredCodeInput"(): boolean
 "requiredDurabilityInput"(): boolean
 "getDurabilityData"(): $DurabilityData
 "getIngredient"(): $Ingredient
 "getToastSymbol"(): $ItemStack
 "matches"(arg0: $TicketStationRecipeInput$Type, arg1: $Level$Type): boolean
 "getId"(): $ResourceLocation
 "assemble"(arg0: $TicketStationRecipeInput$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "getRemainingItems"(arg0: $TicketStationRecipeInput$Type): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "getMod"(): string
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getType"(): $ResourceLocation
}

export namespace $TicketStationRecipe {
const CODE_PREDICATE: $Predicate<(string)>
const CODE_INPUT_PREDICATE: $Predicate<(string)>
function validCodeChar(arg0: character): boolean
function exampleModifierList(arg0: $TagKey$Type<($Item$Type)>, ...arg1: ($Item$Type)[]): $List<($ItemStack)>
function exampleTicketList(arg0: $Item$Type): $List<($ItemStack)>
function exampleTicketList(arg0: $RegistryObject$Type<(any)>): $List<($ItemStack)>
function exampleTicketList(arg0: $Ingredient$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketStationRecipe$Type = ($TicketStationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketStationRecipe_ = $TicketStationRecipe$Type;
}}
