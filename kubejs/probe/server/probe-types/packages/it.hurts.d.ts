declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData$LevelingDataBuilder" {
import {$LevelingData, $LevelingData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData"

export class $LevelingData$LevelingDataBuilder {


public "initialCost"(arg0: integer): $LevelingData$LevelingDataBuilder
public "toString"(): string
public "step"(arg0: integer): $LevelingData$LevelingDataBuilder
public "build"(): $LevelingData
public "maxLevel"(arg0: integer): $LevelingData$LevelingDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelingData$LevelingDataBuilder$Type = ($LevelingData$LevelingDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelingData$LevelingDataBuilder_ = $LevelingData$LevelingDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/blocks/$ResearchingTableBlock" {
import {$StateDefinition$Builder, $StateDefinition$Builder$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition$Builder"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ResearchingTableBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "m_7926_"(arg0: $StateDefinition$Builder$Type<($Block$Type), ($BlockState$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResearchingTableBlock$Type = ($ResearchingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResearchingTableBlock_ = $ResearchingTableBlock$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/api/events/common/$FluidCollisionEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidCollisionEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $FluidState$Type)

public "getFluid"(): $FluidState
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "fluid"(): $FluidState
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCollisionEvent$Type = ($FluidCollisionEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCollisionEvent_ = $FluidCollisionEvent$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"

export class $CastType extends $Enum<($CastType)> {
static readonly "NONE": $CastType
static readonly "INSTANTANEOUS": $CastType
static readonly "INTERRUPTIBLE": $CastType
static readonly "CYCLICAL": $CastType
static readonly "TOGGLEABLE": $CastType
static readonly "CHARGEABLE": $CastType
static readonly "BY_ID": $IntFunction<($CastType)>


public static "values"(): ($CastType)[]
public static "valueOf"(arg0: string): $CastType
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastType$Type = (("chargeable") | ("toggleable") | ("instantaneous") | ("none") | ("interruptible") | ("cyclical")) | ($CastType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastType_ = $CastType$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/necklace/$HolyLocketItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Monster, $Monster$Type} from "packages/net/minecraft/world/entity/monster/$Monster"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HolyLocketItem extends $RelicItem implements $IRenderableCurio {
static readonly "TAG_TOGGLED": string
static readonly "TAG_CHARGE": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "gatherMonsters"(arg0: $Player$Type, arg1: $ItemStack$Type): $List<($Monster)>
public "getMaxCharges"(arg0: $ItemStack$Type): integer
public "setCharges"(arg0: $ItemStack$Type, arg1: integer): void
public "addCharge"(arg0: $ItemStack$Type, arg1: integer): void
public "getCharges"(arg0: $ItemStack$Type): integer
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "bodyParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolyLocketItem$Type = ($HolyLocketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HolyLocketItem_ = $HolyLocketItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData$AbilityDataBuilder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CastData, $CastData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData"
import {$StatData, $StatData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$AbilityData, $AbilityData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbilityData$AbilityDataBuilder {


public "requiredPoints"(arg0: integer): $AbilityData$AbilityDataBuilder
public "toString"(): string
public "build"(): $AbilityData
public "stat"(arg0: $StatData$Type): $AbilityData$AbilityDataBuilder
public "active"(arg0: $CastData$Type): $AbilityData$AbilityDataBuilder
public "icon"(arg0: $Function3$Type<($Player$Type), ($ItemStack$Type), (string), (string)>): $AbilityData$AbilityDataBuilder
public "maxLevel"(arg0: integer): $AbilityData$AbilityDataBuilder
public "requiredLevel"(arg0: integer): $AbilityData$AbilityDataBuilder
public "stats"(arg0: $Map$Type<(string), ($StatData$Type)>): $AbilityData$AbilityDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityData$AbilityDataBuilder$Type = ($AbilityData$AbilityDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityData$AbilityDataBuilder_ = $AbilityData$AbilityDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier$RelicSlotModifierBuilder" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RelicSlotModifier, $RelicSlotModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier"

export class $RelicSlotModifier$RelicSlotModifierBuilder {


public "clearModifiers"(): $RelicSlotModifier$RelicSlotModifierBuilder
public "modifiers"(arg0: $Collection$Type<(any)>): $RelicSlotModifier$RelicSlotModifierBuilder
public "toString"(): string
public "entry"(arg0: $Pair$Type<(string), (integer)>): $RelicSlotModifier$RelicSlotModifierBuilder
public "build"(): $RelicSlotModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicSlotModifier$RelicSlotModifierBuilder$Type = ($RelicSlotModifier$RelicSlotModifierBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicSlotModifier$RelicSlotModifierBuilder_ = $RelicSlotModifier$RelicSlotModifierBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/belt/$DrownedBeltItem" {
import {$RelicAttributeModifier, $RelicAttributeModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicSlotModifier, $RelicSlotModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrownedBeltItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "getSlotModifiers"(arg0: $ItemStack$Type): $RelicSlotModifier
public "getAttributeModifiers"(arg0: $ItemStack$Type): $RelicAttributeModifier
public "bodyParts"(): $List<(string)>
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrownedBeltItem$Type = ($DrownedBeltItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrownedBeltItem_ = $DrownedBeltItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/hands/$EnderHandItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderHandItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "bodyParts"(): $List<(string)>
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getModel"(arg0: $ItemStack$Type): $CurioModel
public "headParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderHandItem$Type = ($EnderHandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderHandItem_ = $EnderHandItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/misc/$LootCollection" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootCollection$LootCollectionBuilder, $LootCollection$LootCollectionBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/misc/$LootCollection$LootCollectionBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootCollection {
 "entries": $Map<(string), (float)>

constructor(arg0: $Map$Type<(string), (float)>, arg1: $Consumer$Type<($LootCollection$Type)>)

public "setEntries"(arg0: $Map$Type<(string), (float)>): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $LootCollection$LootCollectionBuilder
public "getEntries"(): $Map<(string), (float)>
public "getApplicator"(): $Consumer<($LootCollection)>
public "setApplicator"(arg0: $Consumer$Type<($LootCollection$Type)>): void
set "entries"(value: $Map$Type<(string), (float)>)
get "entries"(): $Map<(string), (float)>
get "applicator"(): $Consumer<($LootCollection)>
set "applicator"(value: $Consumer$Type<($LootCollection$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCollection$Type = ($LootCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCollection_ = $LootCollection$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/config/data/$LootConfigData" {
import {$LootData, $LootData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData"
import {$IRelicItem, $IRelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRelicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootConfigData {

constructor()
constructor(arg0: $Map$Type<(string), (float)>)

public "toData"(arg0: $IRelicItem$Type): $LootData
public "setEntries"(arg0: $Map$Type<(string), (float)>): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getEntries"(): $Map<(string), (float)>
set "entries"(value: $Map$Type<(string), (float)>)
get "entries"(): $Map<(string), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConfigData$Type = ($LootConfigData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConfigData_ = $LootConfigData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/feet/$MagmaWalkerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$FluidCollisionEvent, $FluidCollisionEvent$Type} from "packages/it/hurts/sskirillss/relics/api/events/common/$FluidCollisionEvent"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MagmaWalkerItem extends $RelicItem implements $IRenderableCurio {
static readonly "TAG_HEAT": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "bodyParts"(): $List<(string)>
public static "onFluidCollide"(arg0: $FluidCollisionEvent$Type): void
public "constructDefaultRelicData"(): $RelicData
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getModel"(arg0: $ItemStack$Type): $CurioModel
public static "onLivingAttack"(arg0: $LivingHurtEvent$Type): void
public "headParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagmaWalkerItem$Type = ($MagmaWalkerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagmaWalkerItem_ = $MagmaWalkerItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData$RelicDataBuilder" {
import {$LootData, $LootData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$LevelingData, $LevelingData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData"
import {$AbilitiesData, $AbilitiesData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData"
import {$StyleData, $StyleData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData"

export class $RelicData$RelicDataBuilder {


public "abilities"(arg0: $AbilitiesData$Type): $RelicData$RelicDataBuilder
public "leveling"(arg0: $LevelingData$Type): $RelicData$RelicDataBuilder
public "loot"(arg0: $LootData$Type): $RelicData$RelicDataBuilder
public "toString"(): string
public "build"(): $RelicData
public "style"(arg0: $StyleData$Type): $RelicData$RelicDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicData$RelicDataBuilder$Type = ($RelicData$RelicDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicData$RelicDataBuilder_ = $RelicData$RelicDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$RelicContainer" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$AbilityReference, $AbilityReference$Type} from "packages/it/hurts/sskirillss/relics/system/casts/abilities/$AbilityReference"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRelicContainer, $IRelicContainer$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$IRelicContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RelicContainer extends $Enum<($RelicContainer)> implements $IRelicContainer {
static readonly "CURIOS": $RelicContainer
static readonly "INVENTORY": $RelicContainer


public static "values"(): ($RelicContainer)[]
public static "valueOf"(arg0: string): $RelicContainer
public "gatherAbilities"(): $Function<($LivingEntity), ($List<($AbilityReference)>)>
public "gatherRelics"(): $Function<($LivingEntity), ($List<($ItemStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicContainer$Type = (("curios") | ("inventory")) | ($RelicContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicContainer_ = $RelicContainer$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData$LootDataBuilder" {
import {$LootData, $LootData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData"
import {$LootCollection, $LootCollection$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/misc/$LootCollection"

export class $LootData$LootDataBuilder {


public "toString"(): string
public "entry"(arg0: string, arg1: float): $LootData$LootDataBuilder
public "entry"(arg0: $LootCollection$Type): $LootData$LootDataBuilder
public "build"(): $LootData
public "collection"(arg0: $LootCollection$Type): $LootData$LootDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootData$LootDataBuilder$Type = ($LootData$LootDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootData$LootDataBuilder_ = $LootData$LootDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/feet/$AmphibianBootItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmphibianBootItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "bodyParts"(): $List<(string)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getModel"(arg0: $ItemStack$Type): $CurioModel
public "headParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmphibianBootItem$Type = ($AmphibianBootItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmphibianBootItem_ = $AmphibianBootItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbilityConfigData, $AbilityConfigData$Type} from "packages/it/hurts/sskirillss/relics/config/data/$AbilityConfigData"
import {$AbilityData$AbilityDataBuilder, $AbilityData$AbilityDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData$AbilityDataBuilder"
import {$CastData, $CastData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData"
import {$StatData, $StatData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbilityData {


public "toConfigData"(): $AbilityConfigData
public "setMaxLevel"(arg0: integer): void
public "setIcon"(arg0: $Function3$Type<($Player$Type), ($ItemStack$Type), (string), (string)>): void
public "setStats"(arg0: $Map$Type<(string), ($StatData$Type)>): void
public "setRequiredLevel"(arg0: integer): void
public "setRequiredPoints"(arg0: integer): void
public "setCastData"(arg0: $CastData$Type): void
public "getStats"(): $Map<(string), ($StatData)>
public "getCastData"(): $CastData
public "getRequiredLevel"(): integer
public "getRequiredPoints"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(arg0: string): $AbilityData$AbilityDataBuilder
public "getId"(): string
public "getIcon"(): $Function3<($Player), ($ItemStack), (string), (string)>
public "getMaxLevel"(): integer
set "maxLevel"(value: integer)
set "icon"(value: $Function3$Type<($Player$Type), ($ItemStack$Type), (string), (string)>)
set "stats"(value: $Map$Type<(string), ($StatData$Type)>)
set "requiredLevel"(value: integer)
set "requiredPoints"(value: integer)
set "castData"(value: $CastData$Type)
get "stats"(): $Map<(string), ($StatData)>
get "castData"(): $CastData
get "requiredLevel"(): integer
get "requiredPoints"(): integer
get "id"(): string
get "icon"(): $Function3<($Player), ($ItemStack), (string), (string)>
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityData$Type = ($AbilityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityData_ = $AbilityData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/hands/$RageGloveItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RageGloveItem extends $RelicItem implements $IRenderableCurio {
static readonly "TAG_STACKS": string
static readonly "TAG_TIME": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "bodyParts"(): $List<(string)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getModel"(arg0: $ItemStack$Type): $CurioModel
public "headParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RageGloveItem$Type = ($RageGloveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RageGloveItem_ = $RageGloveItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/$MagicMirrorItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicMirrorItem extends $RelicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "constructDefaultRelicData"(): $RelicData
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicMirrorItem$Type = ($MagicMirrorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicMirrorItem_ = $MagicMirrorItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleFactory$Type" {
import {$BasicColoredParticleOptions, $BasicColoredParticleOptions$Type} from "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleOptions"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BasicColoredParticleFactory$Type extends $ParticleType<($BasicColoredParticleOptions)> {

constructor()

public "codec"(): $Codec<($BasicColoredParticleOptions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicColoredParticleFactory$Type$Type = ($BasicColoredParticleFactory$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicColoredParticleFactory$Type_ = $BasicColoredParticleFactory$Type$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/effects/$AntiHealEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AntiHealEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AntiHealEffect$Type = ($AntiHealEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AntiHealEffect_ = $AntiHealEffect$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData$AbilitiesDataBuilder" {
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbilityData, $AbilityData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData"
import {$AbilitiesData, $AbilitiesData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData"

export class $AbilitiesData$AbilitiesDataBuilder {


public "abilities"(arg0: $Map$Type<(string), ($AbilityData$Type)>): $AbilitiesData$AbilitiesDataBuilder
public "ability"(arg0: $AbilityData$Type): $AbilitiesData$AbilitiesDataBuilder
public "toString"(): string
public "build"(): $AbilitiesData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilitiesData$AbilitiesDataBuilder$Type = ($AbilitiesData$AbilitiesDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilitiesData$AbilitiesDataBuilder_ = $AbilitiesData$AbilitiesDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/$SpaceDissectorItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpaceDissectorItem extends $RelicItem {
static readonly "TAG_PORTAL": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "constructDefaultRelicData"(): $RelicData
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpaceDissectorItem$Type = ($SpaceDissectorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpaceDissectorItem_ = $SpaceDissectorItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/feet/$IceSkatesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IceSkatesItem extends $RelicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceSkatesItem$Type = ($IceSkatesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IceSkatesItem_ = $IceSkatesItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData$CastDataBuilder" {
import {$RelicContainer, $RelicContainer$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$RelicContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CastData, $CastData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CastData$CastDataBuilder {


public "castPredicate"(arg0: string, arg1: $BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>): $CastData$CastDataBuilder
public "visibilityPredicates"(arg0: $List$Type<($BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>)>): $CastData$CastDataBuilder
public "castPredicates"(arg0: $Map$Type<(string), ($BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>)>): $CastData$CastDataBuilder
public "type"(arg0: $CastType$Type): $CastData$CastDataBuilder
public "toString"(): string
public "container"(...arg0: ($RelicContainer$Type)[]): $CastData$CastDataBuilder
public "build"(): $CastData
public "visibilityPredicate"(arg0: $BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>): $CastData$CastDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastData$CastDataBuilder$Type = ($CastData$CastDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastData$CastDataBuilder_ = $CastData$CastDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/effects/$ConfusionEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ConfusionEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfusionEffect$Type = ($ConfusionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfusionEffect_ = $ConfusionEffect$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/necklace/$JellyfishNecklaceItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JellyfishNecklaceItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "bodyParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JellyfishNecklaceItem$Type = ($JellyfishNecklaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JellyfishNecklaceItem_ = $JellyfishNecklaceItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData" {
import {$StyleData$StyleDataBuilder, $StyleData$StyleDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData$StyleDataBuilder"
import {$TooltipData, $TooltipData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$TooltipData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $StyleData {


public "getTooltip"(): $BiFunction<($Player), ($ItemStack), ($TooltipData)>
public "setTooltip"(arg0: $BiFunction$Type<($Player$Type), ($ItemStack$Type), ($TooltipData$Type)>): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $StyleData$StyleDataBuilder
get "tooltip"(): $BiFunction<($Player), ($ItemStack), ($TooltipData)>
set "tooltip"(value: $BiFunction$Type<($Player$Type), ($ItemStack$Type), ($TooltipData$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyleData$Type = ($StyleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyleData_ = $StyleData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/misc/$UpgradeOperation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeOperation extends $Enum<($UpgradeOperation)> {
static readonly "ADD": $UpgradeOperation
static readonly "MULTIPLY_BASE": $UpgradeOperation
static readonly "MULTIPLY_TOTAL": $UpgradeOperation


public static "values"(): ($UpgradeOperation)[]
public static "valueOf"(arg0: string): $UpgradeOperation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeOperation$Type = (("add") | ("multiply_base") | ("multiply_total")) | ($UpgradeOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeOperation_ = $UpgradeOperation$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/config/data/$AbilitiesConfigData" {
import {$AbilityConfigData, $AbilityConfigData$Type} from "packages/it/hurts/sskirillss/relics/config/data/$AbilityConfigData"
import {$IRelicItem, $IRelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRelicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbilitiesData, $AbilitiesData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData"

export class $AbilitiesConfigData {

constructor(arg0: $Map$Type<(string), ($AbilityConfigData$Type)>)
constructor()

public "toData"(arg0: $IRelicItem$Type): $AbilitiesData
public "setAbilities"(arg0: $Map$Type<(string), ($AbilityConfigData$Type)>): void
public "getAbilities"(): $Map<(string), ($AbilityConfigData)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
set "abilities"(value: $Map$Type<(string), ($AbilityConfigData$Type)>)
get "abilities"(): $Map<(string), ($AbilityConfigData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilitiesConfigData$Type = ($AbilitiesConfigData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilitiesConfigData_ = $AbilitiesConfigData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/$ICreativeTabEntry" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICreativeTabEntry {

 "processCreativeTab"(): $List<($ItemStack)>
}

export namespace $ICreativeTabEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreativeTabEntry$Type = ($ICreativeTabEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreativeTabEntry_ = $ICreativeTabEntry$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier" {
import {$RelicAttributeModifier$Modifier, $RelicAttributeModifier$Modifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier$Modifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicAttributeModifier$RelicAttributeModifierBuilder, $RelicAttributeModifier$RelicAttributeModifierBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier$RelicAttributeModifierBuilder"

export class $RelicAttributeModifier {


public "setAttributes"(arg0: $List$Type<($RelicAttributeModifier$Modifier$Type)>): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $RelicAttributeModifier$RelicAttributeModifierBuilder
public "getAttributes"(): $List<($RelicAttributeModifier$Modifier)>
set "attributes"(value: $List$Type<($RelicAttributeModifier$Modifier$Type)>)
get "attributes"(): $List<($RelicAttributeModifier$Modifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicAttributeModifier$Type = ($RelicAttributeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicAttributeModifier_ = $RelicAttributeModifier$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/misc/$LootCollection$LootCollectionBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LootCollection, $LootCollection$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/misc/$LootCollection"

export class $LootCollection$LootCollectionBuilder {
 "entries": $Map<(string), (float)>


public "toString"(): string
public "entry"(arg0: string, arg1: float): $LootCollection$LootCollectionBuilder
public "entry"(...arg0: (string)[]): $LootCollection$LootCollectionBuilder
public "entry"(arg0: $LootCollection$Type): $LootCollection$LootCollectionBuilder
public "entries"(arg0: $Map$Type<(string), (float)>): $LootCollection$LootCollectionBuilder
public "build"(): $LootCollection
public "applicator"(arg0: $Consumer$Type<($LootCollection$Type)>): $LootCollection$LootCollectionBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCollection$LootCollectionBuilder$Type = ($LootCollection$LootCollectionBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCollection$LootCollectionBuilder_ = $LootCollection$LootCollectionBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/$SolidSnowballItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemBase, $ItemBase$Type} from "packages/it/hurts/sskirillss/relics/items/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SolidSnowballItem extends $ItemBase {
static readonly "TAG_SNOW": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "processCreativeTab"(): $List<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidSnowballItem$Type = ($SolidSnowballItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidSnowballItem_ = $SolidSnowballItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/effects/$ParalysisEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ParalysisEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParalysisEffect$Type = ($ParalysisEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParalysisEffect_ = $ParalysisEffect$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier" {
import {$RelicSlotModifier$RelicSlotModifierBuilder, $RelicSlotModifier$RelicSlotModifierBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier$RelicSlotModifierBuilder"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"

export class $RelicSlotModifier {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): $List<($Pair<(string), (integer)>)>
public static "builder"(): $RelicSlotModifier$RelicSlotModifierBuilder
public "setModifiers"(arg0: $List$Type<($Pair$Type<(string), (integer)>)>): void
get "modifiers"(): $List<($Pair<(string), (integer)>)>
set "modifiers"(value: $List$Type<($Pair$Type<(string), (integer)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicSlotModifier$Type = ($RelicSlotModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicSlotModifier_ = $RelicSlotModifier$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$TooltipData" {
import {$TooltipData$TooltipDataBuilder, $TooltipData$TooltipDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$TooltipData$TooltipDataBuilder"

export class $TooltipData {


/**
 * 
 * @deprecated
 */
public "setIcon"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "isTextured"(): boolean
public "getBorderTop"(): integer
public "getBorderBottom"(): integer
public "getBackgroundTop"(): integer
public "getBackgroundBottom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $TooltipData$TooltipDataBuilder
/**
 * 
 * @deprecated
 */
public "getIcon"(): string
public "setBorderTop"(arg0: integer): void
public "setBorderBottom"(arg0: integer): void
public "setBackgroundTop"(arg0: integer): void
public "setBackgroundBottom"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setTextured"(arg0: boolean): void
set "icon"(value: string)
get "textured"(): boolean
get "borderTop"(): integer
get "borderBottom"(): integer
get "backgroundTop"(): integer
get "backgroundBottom"(): integer
get "icon"(): string
set "borderTop"(value: integer)
set "borderBottom"(value: integer)
set "backgroundTop"(value: integer)
set "backgroundBottom"(value: integer)
set "textured"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipData$Type = ($TooltipData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipData_ = $TooltipData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/entities/$ShadowSawEntity" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThrowableProjectile, $ThrowableProjectile$Type} from "packages/net/minecraft/world/entity/projectile/$ThrowableProjectile"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShadowSawEntity extends $ThrowableProjectile {
 "isReturning": boolean
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
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
constructor(arg0: $ItemStack$Type, arg1: $LivingEntity$Type)

public "getStack"(): $ItemStack
public "tick"(): void
public "isPushedByFluid"(): boolean
public "setStack"(arg0: $ItemStack$Type): void
get "stack"(): $ItemStack
get "pushedByFluid"(): boolean
set "stack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowSawEntity$Type = ($ShadowSawEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadowSawEntity_ = $ShadowSawEntity$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/$BlazingFlaskItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlazingFlaskItem extends $RelicItem {
static readonly "TAG_POSITION": string
static readonly "TAG_COUNT": string
static readonly "TAG_RADIUS": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getFireAround"(arg0: $ItemStack$Type, arg1: $Vec3$Type, arg2: $Level$Type): integer
public "getFireAround"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
public "constructDefaultRelicData"(): $RelicData
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazingFlaskItem$Type = ($BlazingFlaskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazingFlaskItem_ = $BlazingFlaskItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/$InfinityHamItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InfinityHamItem extends $RelicItem {
static readonly "TAG_PIECES": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "processCreativeTab"(): $List<($ItemStack)>
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "constructDefaultRelicData"(): $RelicData
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "isFoil"(arg0: $ItemStack$Type): boolean
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityHamItem$Type = ($InfinityHamItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityHamItem_ = $InfinityHamItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/back/$ArrowQuiverItem" {
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArrowQuiverItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public static "getArrows"(arg0: $ItemStack$Type): $List<($ItemStack)>
public "getSlotsAmount"(arg0: $ItemStack$Type): integer
public "insertStack"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public static "takeStack"(arg0: $ItemStack$Type): $Optional<($ItemStack)>
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "tickActiveAbilitySelection"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public static "takeArrow"(arg0: $ItemStack$Type): void
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "bodyParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrowQuiverItem$Type = ($ArrowQuiverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrowQuiverItem_ = $ArrowQuiverItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/api/events/common/$ContainerSlotClickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlayerContainerEvent, $PlayerContainerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerContainerEvent"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"

export class $ContainerSlotClickEvent extends $PlayerContainerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $AbstractContainerMenu$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $ItemStack$Type, arg5: $ItemStack$Type)

public "getHeldStack"(): $ItemStack
public "getSlotStack"(): $ItemStack
public "getSlot"(): $Slot
public "getAction"(): $ClickAction
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "heldStack"(): $ItemStack
get "slotStack"(): $ItemStack
get "slot"(): $Slot
get "action"(): $ClickAction
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerSlotClickEvent$Type = ($ContainerSlotClickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerSlotClickEvent_ = $ContainerSlotClickEvent$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/belt/$HunterBeltItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicSlotModifier, $RelicSlotModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HunterBeltItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "constructDefaultRelicData"(): $RelicData
public "getSlotModifiers"(arg0: $ItemStack$Type): $RelicSlotModifier
public "bodyParts"(): $List<(string)>
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HunterBeltItem$Type = ($HunterBeltItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HunterBeltItem_ = $HunterBeltItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleOptions" {
import {$BasicColoredParticleConstructor, $BasicColoredParticleConstructor$Type} from "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleConstructor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $BasicColoredParticleOptions implements $ParticleOptions {
static readonly "CODEC": $Codec<($BasicColoredParticleOptions)>
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($BasicColoredParticleOptions)>

constructor(arg0: $BasicColoredParticleConstructor$Type)

public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
public "getData"(): $BasicColoredParticleConstructor
public "getType"(): $ParticleType<($BasicColoredParticleOptions)>
get "data"(): $BasicColoredParticleConstructor
get "type"(): $ParticleType<($BasicColoredParticleOptions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicColoredParticleOptions$Type = ($BasicColoredParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicColoredParticleOptions_ = $BasicColoredParticleOptions$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/effects/$VanishingEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $VanishingEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanishingEffect$Type = ($VanishingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanishingEffect_ = $VanishingEffect$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier$RelicAttributeModifierBuilder" {
import {$RelicAttributeModifier, $RelicAttributeModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier"
import {$RelicAttributeModifier$Modifier, $RelicAttributeModifier$Modifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier$Modifier"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $RelicAttributeModifier$RelicAttributeModifierBuilder {


public "clearAttributes"(): $RelicAttributeModifier$RelicAttributeModifierBuilder
public "toString"(): string
public "build"(): $RelicAttributeModifier
public "attributes"(arg0: $Collection$Type<(any)>): $RelicAttributeModifier$RelicAttributeModifierBuilder
public "attribute"(arg0: $RelicAttributeModifier$Modifier$Type): $RelicAttributeModifier$RelicAttributeModifierBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicAttributeModifier$RelicAttributeModifierBuilder$Type = ($RelicAttributeModifier$RelicAttributeModifierBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicAttributeModifier$RelicAttributeModifierBuilder_ = $RelicAttributeModifier$RelicAttributeModifierBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder" {
import {$BasicColoredParticleConstructor, $BasicColoredParticleConstructor$Type} from "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleConstructor"

export class $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder {


public "scaleModifier"(arg0: float): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "physical"(arg0: boolean): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "diameter"(arg0: float): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "toString"(): string
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "color"(arg0: integer): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "color"(arg0: float, arg1: float, arg2: float): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "color"(arg0: integer, arg1: integer, arg2: integer): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "build"(): $BasicColoredParticleConstructor
public "roll"(arg0: float): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "lifetime"(arg0: integer): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder$Type = ($BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder_ = $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRelicContainer, $IRelicContainer$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$IRelicContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastData$CastDataBuilder, $CastData$CastDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData$CastDataBuilder"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CastData {


public "setCastPredicates"(arg0: $Map$Type<(string), ($BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>)>): void
public "setVisibilityPredicates"(arg0: $List$Type<($BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>)>): void
public "setContainer"(arg0: $List$Type<($IRelicContainer$Type)>): void
public "getCastPredicates"(): $Map<(string), ($BiFunction<($Player), ($ItemStack), (boolean)>)>
public "getVisibilityPredicates"(): $List<($BiFunction<($Player), ($ItemStack), (boolean)>)>
public "getContainer"(): $List<($IRelicContainer)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $CastData$CastDataBuilder
public "getType"(): $CastType
public "setType"(arg0: $CastType$Type): void
set "castPredicates"(value: $Map$Type<(string), ($BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>)>)
set "visibilityPredicates"(value: $List$Type<($BiFunction$Type<($Player$Type), ($ItemStack$Type), (boolean)>)>)
set "container"(value: $List$Type<($IRelicContainer$Type)>)
get "castPredicates"(): $Map<(string), ($BiFunction<($Player), ($ItemStack), (boolean)>)>
get "visibilityPredicates"(): $List<($BiFunction<($Player), ($ItemStack), (boolean)>)>
get "container"(): $List<($IRelicContainer)>
get "type"(): $CastType
set "type"(value: $CastType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastData$Type = ($CastData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastData_ = $CastData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/effects/$StunEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $StunEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StunEffect$Type = ($StunEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StunEffect_ = $StunEffect$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/effects/$BleedingEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BleedingEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BleedingEffect$Type = ($BleedingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BleedingEffect_ = $BleedingEffect$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/$BlockItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ICreativeTabEntry, $ICreativeTabEntry$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$ICreativeTabEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemBase extends $BlockItem implements $ICreativeTabEntry {
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

public "processCreativeTab"(): $List<($ItemStack)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemBase$Type = ($BlockItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemBase_ = $BlockItemBase$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/back/$MidnightRobeItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MidnightRobeItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "bodyParts"(): $List<(string)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MidnightRobeItem$Type = ($MidnightRobeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MidnightRobeItem_ = $MidnightRobeItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/config/data/$StatConfigData" {
import {$StatData, $StatData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData"
import {$IRelicItem, $IRelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRelicItem"
import {$UpgradeOperation, $UpgradeOperation$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/misc/$UpgradeOperation"

export class $StatConfigData {

constructor()
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $UpgradeOperation$Type, arg5: double)

public "setMinThresholdValue"(arg0: double): void
public "setMaxThresholdValue"(arg0: double): void
public "setUpgradeOperation"(arg0: $UpgradeOperation$Type): void
public "getMinInitialValue"(): double
public "getMaxInitialValue"(): double
public "getMinThresholdValue"(): double
public "getMaxThresholdValue"(): double
public "getUpgradeOperation"(): $UpgradeOperation
public "setMinInitialValue"(arg0: double): void
public "setMaxInitialValue"(arg0: double): void
public "toData"(arg0: $IRelicItem$Type, arg1: string, arg2: string): $StatData
public "setUpgradeModifier"(arg0: double): void
public "getUpgradeModifier"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
set "minThresholdValue"(value: double)
set "maxThresholdValue"(value: double)
set "upgradeOperation"(value: $UpgradeOperation$Type)
get "minInitialValue"(): double
get "maxInitialValue"(): double
get "minThresholdValue"(): double
get "maxThresholdValue"(): double
get "upgradeOperation"(): $UpgradeOperation
set "minInitialValue"(value: double)
set "maxInitialValue"(value: double)
set "upgradeModifier"(value: double)
get "upgradeModifier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatConfigData$Type = ($StatConfigData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatConfigData_ = $StatConfigData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData" {
import {$LootData, $LootData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData"
import {$LevelingData, $LevelingData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData"
import {$RelicData$RelicDataBuilder, $RelicData$RelicDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData$RelicDataBuilder"
import {$AbilitiesData, $AbilitiesData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData"
import {$StyleData, $StyleData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData"

export class $RelicData {


public "setAbilities"(arg0: $AbilitiesData$Type): void
public "setLeveling"(arg0: $LevelingData$Type): void
public "setStyle"(arg0: $StyleData$Type): void
public "setLoot"(arg0: $LootData$Type): void
public "getLeveling"(): $LevelingData
public "getLoot"(): $LootData
public "getStyle"(): $StyleData
public "getAbilities"(): $AbilitiesData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $RelicData$RelicDataBuilder
set "abilities"(value: $AbilitiesData$Type)
set "leveling"(value: $LevelingData$Type)
set "style"(value: $StyleData$Type)
set "loot"(value: $LootData$Type)
get "leveling"(): $LevelingData
get "loot"(): $LootData
get "style"(): $StyleData
get "abilities"(): $AbilitiesData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicData$Type = ($RelicData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicData_ = $RelicData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/feet/$IceBreakerItem" {
import {$RelicAttributeModifier, $RelicAttributeModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IceBreakerItem extends $RelicItem {
static readonly "TAG_FALLING_POINT": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "getAttributeModifiers"(arg0: $ItemStack$Type): $RelicAttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceBreakerItem$Type = ($IceBreakerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IceBreakerItem_ = $IceBreakerItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/$RelicExperienceBottleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemBase, $ItemBase$Type} from "packages/it/hurts/sskirillss/relics/items/$ItemBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RelicExperienceBottleItem extends $ItemBase {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "asProjectile"(arg0: $Level$Type, arg1: $Position$Type, arg2: $ItemStack$Type, arg3: $Direction$Type): $Projectile
public "isFoil"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicExperienceBottleItem$Type = ($RelicExperienceBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicExperienceBottleItem_ = $RelicExperienceBottleItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/back/$ElytraBoosterItem" {
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ContainerSlotClickEvent, $ContainerSlotClickEvent$Type} from "packages/it/hurts/sskirillss/relics/api/events/common/$ContainerSlotClickEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElytraBoosterItem extends $RelicItem implements $IRenderableCurio {
static readonly "TAG_FUEL": string
static readonly "TAG_SPEED": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "getBreathCapacity"(arg0: $ItemStack$Type): integer
public static "onSlotClick"(arg0: $ContainerSlotClickEvent$Type): void
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "bodyParts"(): $List<(string)>
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElytraBoosterItem$Type = ($ElytraBoosterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElytraBoosterItem_ = $ElytraBoosterItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/$ItemBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICreativeTabEntry, $ICreativeTabEntry$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$ICreativeTabEntry"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBase extends $Item implements $ICreativeTabEntry {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "processCreativeTab"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/config/data/$AbilityConfigData" {
import {$StatConfigData, $StatConfigData$Type} from "packages/it/hurts/sskirillss/relics/config/data/$StatConfigData"
import {$IRelicItem, $IRelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRelicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbilityData, $AbilityData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData"

export class $AbilityConfigData {

constructor()
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $Map$Type<(string), ($StatConfigData$Type)>)

public "toData"(arg0: $IRelicItem$Type, arg1: string): $AbilityData
public "setMaxLevel"(arg0: integer): void
public "setStats"(arg0: $Map$Type<(string), ($StatConfigData$Type)>): void
public "setRequiredLevel"(arg0: integer): void
public "setRequiredPoints"(arg0: integer): void
public "getStats"(): $Map<(string), ($StatConfigData)>
public "getRequiredLevel"(): integer
public "getRequiredPoints"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getMaxLevel"(): integer
set "maxLevel"(value: integer)
set "stats"(value: $Map$Type<(string), ($StatConfigData$Type)>)
set "requiredLevel"(value: integer)
set "requiredPoints"(value: integer)
get "stats"(): $Map<(string), ($StatConfigData)>
get "requiredLevel"(): integer
get "requiredPoints"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityConfigData$Type = ($AbilityConfigData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityConfigData_ = $AbilityConfigData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData$StatDataBuilder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$StatData, $StatData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData"
import {$UpgradeOperation, $UpgradeOperation$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/misc/$UpgradeOperation"

export class $StatData$StatDataBuilder {


public "upgradeModifier"(arg0: $UpgradeOperation$Type, arg1: double): $StatData$StatDataBuilder
public "formatValue"(arg0: $Function$Type<(double), (any)>): $StatData$StatDataBuilder
public "thresholdValue"(arg0: double, arg1: double): $StatData$StatDataBuilder
public "toString"(): string
public "build"(): $StatData
public "initialValue"(arg0: double, arg1: double): $StatData$StatDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatData$StatDataBuilder$Type = ($StatData$StatDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatData$StatDataBuilder_ = $StatData$StatDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$TooltipData$TooltipDataBuilder" {
import {$TooltipData, $TooltipData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$TooltipData"

export class $TooltipData$TooltipDataBuilder {


public "borderTop"(arg0: integer): $TooltipData$TooltipDataBuilder
public "borderBottom"(arg0: integer): $TooltipData$TooltipDataBuilder
/**
 * 
 * @deprecated
 */
public "textured"(arg0: boolean): $TooltipData$TooltipDataBuilder
public "toString"(): string
public "build"(): $TooltipData
/**
 * 
 * @deprecated
 */
public "icon"(arg0: string): $TooltipData$TooltipDataBuilder
public "backgroundTop"(arg0: integer): $TooltipData$TooltipDataBuilder
public "backgroundBottom"(arg0: integer): $TooltipData$TooltipDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipData$TooltipDataBuilder$Type = ($TooltipData$TooltipDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipData$TooltipDataBuilder_ = $TooltipData$TooltipDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$IRelicContainer" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AbilityReference, $AbilityReference$Type} from "packages/it/hurts/sskirillss/relics/system/casts/abilities/$AbilityReference"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IRelicContainer {

 "gatherAbilities"(): $Function<($LivingEntity), ($List<($AbilityReference)>)>
 "gatherRelics"(): $Function<($LivingEntity), ($List<($ItemStack)>)>
}

export namespace $IRelicContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRelicContainer$Type = ($IRelicContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRelicContainer_ = $IRelicContainer$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/feet/$AquaWalkerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$FluidCollisionEvent, $FluidCollisionEvent$Type} from "packages/it/hurts/sskirillss/relics/api/events/common/$FluidCollisionEvent"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AquaWalkerItem extends $RelicItem implements $IRenderableCurio {
static readonly "TAG_DRENCH": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "bodyParts"(): $List<(string)>
public static "onFluidCollide"(arg0: $FluidCollisionEvent$Type): void
public "constructDefaultRelicData"(): $RelicData
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getModel"(arg0: $ItemStack$Type): $CurioModel
public "headParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquaWalkerItem$Type = ($AquaWalkerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AquaWalkerItem_ = $AquaWalkerItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IRenderableCurio {

 "constructLayerDefinition"(): $LayerDefinition
 "headParts"(): $List<(string)>
 "bodyParts"(): $List<(string)>
 "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
 "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
 "getModel"(arg0: $ItemStack$Type): $CurioModel

(): $LayerDefinition
}

export namespace $IRenderableCurio {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderableCurio$Type = ($IRenderableCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderableCurio_ = $IRenderableCurio$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/charm/$SporeSackItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SporeSackItem extends $RelicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getMaxSpores"(arg0: $ItemStack$Type): integer
public "getSpores"(arg0: $ItemStack$Type): integer
public "setSpores"(arg0: $ItemStack$Type, arg1: integer): void
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "addSpores"(arg0: $ItemStack$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporeSackItem$Type = ($SporeSackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporeSackItem_ = $SporeSackItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/necklace/$ReflectionNecklaceItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReflectionNecklaceItem extends $RelicItem implements $IRenderableCurio {
static readonly "TAG_CHARGE": string
static readonly "TAG_TIME": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "bodyParts"(): $List<(string)>
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionNecklaceItem$Type = ($ReflectionNecklaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionNecklaceItem_ = $ReflectionNecklaceItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData" {
import {$LootConfigData, $LootConfigData$Type} from "packages/it/hurts/sskirillss/relics/config/data/$LootConfigData"
import {$LootData$LootDataBuilder, $LootData$LootDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData$LootDataBuilder"
import {$LootCollection, $LootCollection$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/misc/$LootCollection"

export class $LootData {


public "toConfigData"(): $LootConfigData
public "setCollection"(arg0: $LootCollection$Type): void
public "getCollection"(): $LootCollection
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $LootData$LootDataBuilder
set "collection"(value: $LootCollection$Type)
get "collection"(): $LootCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootData$Type = ($LootData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootData_ = $LootData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/system/casts/slots/base/$SlotReference" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SlotReference {

constructor()

public "gatherStack"(arg0: $Player$Type): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "deserializeNBT"(arg0: $CompoundTag$Type): $SlotReference
public "serializeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$Type = ($SlotReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotReference_ = $SlotReference$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/api/events/base/$RelicEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RelicEvent extends $Event {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type)

public "getEntity"(): $LivingEntity
public "getStack"(): $ItemStack
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
get "entity"(): $LivingEntity
get "stack"(): $ItemStack
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicEvent$Type = ($RelicEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicEvent_ = $RelicEvent$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/config/data/$LevelingConfigData" {
import {$LevelingData, $LevelingData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData"
import {$IRelicItem, $IRelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRelicItem"

export class $LevelingConfigData {

constructor()
constructor(arg0: integer, arg1: integer, arg2: integer)

public "toData"(arg0: $IRelicItem$Type): $LevelingData
public "setInitialCost"(arg0: integer): void
public "setMaxLevel"(arg0: integer): void
public "setStep"(arg0: integer): void
public "getInitialCost"(): integer
public "getStep"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getMaxLevel"(): integer
set "initialCost"(value: integer)
set "maxLevel"(value: integer)
set "step"(value: integer)
get "initialCost"(): integer
get "step"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelingConfigData$Type = ($LevelingConfigData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelingConfigData_ = $LevelingConfigData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$StatConfigData, $StatConfigData$Type} from "packages/it/hurts/sskirillss/relics/config/data/$StatConfigData"
import {$StatData$StatDataBuilder, $StatData$StatDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData$StatDataBuilder"
import {$UpgradeOperation, $UpgradeOperation$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/misc/$UpgradeOperation"

export class $StatData {


public "toConfigData"(): $StatConfigData
public "setUpgradeModifier"(arg0: $Pair$Type<($UpgradeOperation$Type), (double)>): void
public "setThresholdValue"(arg0: $Pair$Type<(double), (double)>): void
public "setFormatValue"(arg0: $Function$Type<(double), (any)>): void
public "getFormatValue"(): $Function<(double), (any)>
public "getInitialValue"(): $Pair<(double), (double)>
public "getUpgradeModifier"(): $Pair<($UpgradeOperation), (double)>
public "getThresholdValue"(): $Pair<(double), (double)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(arg0: string): $StatData$StatDataBuilder
public "getId"(): string
public "setInitialValue"(arg0: $Pair$Type<(double), (double)>): void
set "upgradeModifier"(value: $Pair$Type<($UpgradeOperation$Type), (double)>)
set "thresholdValue"(value: $Pair$Type<(double), (double)>)
set "formatValue"(value: $Function$Type<(double), (any)>)
get "formatValue"(): $Function<(double), (any)>
get "initialValue"(): $Pair<(double), (double)>
get "upgradeModifier"(): $Pair<($UpgradeOperation), (double)>
get "thresholdValue"(): $Pair<(double), (double)>
get "id"(): string
set "initialValue"(value: $Pair$Type<(double), (double)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatData$Type = ($StatData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatData_ = $StatData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/belt/$LeatherBeltItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CurioModel, $CurioModel$Type} from "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IRenderableCurio, $IRenderableCurio$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRenderableCurio"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicSlotModifier, $RelicSlotModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$ExperienceAddEvent, $ExperienceAddEvent$Type} from "packages/it/hurts/sskirillss/relics/api/events/leveling/$ExperienceAddEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LeatherBeltItem extends $RelicItem implements $IRenderableCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructLayerDefinition"(): $LayerDefinition
public "headParts"(): $List<(string)>
public static "onExperienceAdded"(arg0: $ExperienceAddEvent$Type): void
public "constructDefaultRelicData"(): $RelicData
public "getSlotModifiers"(arg0: $ItemStack$Type): $RelicSlotModifier
public "bodyParts"(): $List<(string)>
public "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "getTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getModel"(arg0: $ItemStack$Type): $CurioModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeatherBeltItem$Type = ($LeatherBeltItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeatherBeltItem_ = $LeatherBeltItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/$HorseFluteItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractHorse, $AbstractHorse$Type} from "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HorseFluteItem extends $RelicItem {
static readonly "TAG_ENTITY": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "releaseHorse"(arg0: $ItemStack$Type, arg1: $Entity$Type): void
public "catchHorse"(arg0: $AbstractHorse$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorseFluteItem$Type = ($HorseFluteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorseFluteItem_ = $HorseFluteItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/$ShadowGlaiveItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ShadowSawEntity, $ShadowSawEntity$Type} from "packages/it/hurts/sskirillss/relics/entities/$ShadowSawEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShadowGlaiveItem extends $RelicItem {
static readonly "TAG_CHARGES": string
static readonly "TAG_TIME": string
static readonly "TAG_SAW": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "processCreativeTab"(): $List<($ItemStack)>
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getSaw"(arg0: $ItemStack$Type, arg1: $Level$Type): $ShadowSawEntity
public "constructDefaultRelicData"(): $RelicData
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowGlaiveItem$Type = ($ShadowGlaiveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadowGlaiveItem_ = $ShadowGlaiveItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData$StyleDataBuilder" {
import {$TooltipData, $TooltipData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$TooltipData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$StyleData, $StyleData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData"

export class $StyleData$StyleDataBuilder {


public "toString"(): string
public "build"(): $StyleData
public "tooltip"(arg0: $BiFunction$Type<($Player$Type), ($ItemStack$Type), ($TooltipData$Type)>): $StyleData$StyleDataBuilder
public "tooltip"(arg0: $TooltipData$Type): $StyleData$StyleDataBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyleData$StyleDataBuilder$Type = ($StyleData$StyleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyleData$StyleDataBuilder_ = $StyleData$StyleDataBuilder$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/client/models/items/$CurioModel" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$ModelLayerLocation, $ModelLayerLocation$Type} from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CurioModel extends $HumanoidModel<($LivingEntity)> {
static readonly "OVERLAY_SCALE": float
static readonly "HAT_OVERLAY_SCALE": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "TOOT_HORN_XROT_BASE": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "head": $ModelPart
readonly "hat": $ModelPart
readonly "body": $ModelPart
readonly "rightArm": $ModelPart
readonly "leftArm": $ModelPart
readonly "rightLeg": $ModelPart
readonly "leftLeg": $ModelPart
 "leftArmPose": $HumanoidModel$ArmPose
 "rightArmPose": $HumanoidModel$ArmPose
 "crouching": boolean
 "swimAmount": float
readonly "scaleHead": boolean
readonly "babyYHeadOffset": float
readonly "babyZHeadOffset": float
readonly "babyHeadScale": float
readonly "babyBodyScale": float
readonly "bodyYOffset": float
 "attackTime": float
 "riding": boolean
 "young": boolean

constructor(arg0: $Item$Type)

public static "constructRoot"(arg0: $Item$Type): $ModelPart
public static "getLayerLocation"(arg0: $Item$Type): $ModelLayerLocation
public "getById"(arg0: string): $ModelPart
public "getRoot"(): $ModelPart
public "getItem"(): $Item
get "root"(): $ModelPart
get "item"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioModel$Type = ($CurioModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioModel_ = $CurioModel$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData" {
import {$AbilitiesConfigData, $AbilitiesConfigData$Type} from "packages/it/hurts/sskirillss/relics/config/data/$AbilitiesConfigData"
import {$AbilitiesData$AbilitiesDataBuilder, $AbilitiesData$AbilitiesDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData$AbilitiesDataBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbilityData, $AbilityData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData"

export class $AbilitiesData {


public "setAbilities"(arg0: $Map$Type<(string), ($AbilityData$Type)>): void
public "toConfigData"(): $AbilitiesConfigData
public "getAbilities"(): $Map<(string), ($AbilityData)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $AbilitiesData$AbilitiesDataBuilder
set "abilities"(value: $Map$Type<(string), ($AbilityData$Type)>)
get "abilities"(): $Map<(string), ($AbilityData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilitiesData$Type = ($AbilitiesData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilitiesData_ = $AbilitiesData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/ring/$BastionRingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BastionRingItem extends $RelicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BastionRingItem$Type = ($BastionRingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BastionRingItem_ = $BastionRingItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/api/events/leveling/$ExperienceAddEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RelicEvent, $RelicEvent$Type} from "packages/it/hurts/sskirillss/relics/api/events/base/$RelicEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ExperienceAddEvent extends $RelicEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer)

public "setAmount"(arg0: integer): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getAmount"(): integer
set "amount"(value: integer)
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceAddEvent$Type = ($ExperienceAddEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceAddEvent_ = $ExperienceAddEvent$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData" {
import {$LevelingData$LevelingDataBuilder, $LevelingData$LevelingDataBuilder$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData$LevelingDataBuilder"
import {$LevelingConfigData, $LevelingConfigData$Type} from "packages/it/hurts/sskirillss/relics/config/data/$LevelingConfigData"

export class $LevelingData {

constructor(arg0: integer, arg1: integer, arg2: integer)

public "toConfigData"(): $LevelingConfigData
public "setInitialCost"(arg0: integer): void
public "setMaxLevel"(arg0: integer): void
public "setStep"(arg0: integer): void
public "getInitialCost"(): integer
public "getStep"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $LevelingData$LevelingDataBuilder
public "getMaxLevel"(): integer
set "initialCost"(value: integer)
set "maxLevel"(value: integer)
set "step"(value: integer)
get "initialCost"(): integer
get "step"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelingData$Type = ($LevelingData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelingData_ = $LevelingData$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/hands/$WoolMittenItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WoolMittenItem extends $RelicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "constructDefaultRelicData"(): $RelicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoolMittenItem$Type = ($WoolMittenItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoolMittenItem_ = $WoolMittenItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/feet/$RollerSkatesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RollerSkatesItem extends $RelicItem {
static readonly "TAG_SKATING_DURATION": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "constructDefaultRelicData"(): $RelicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollerSkatesItem$Type = ($RollerSkatesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollerSkatesItem_ = $RollerSkatesItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier$Modifier" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"

export class $RelicAttributeModifier$Modifier {

constructor(arg0: $Holder$Type<($Attribute$Type)>, arg1: float, arg2: $AttributeModifier$Operation$Type)
constructor(arg0: $Holder$Type<($Attribute$Type)>, arg1: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getAttribute"(): $Holder<($Attribute)>
public "getMultiplier"(): float
public "getOperation"(): $AttributeModifier$Operation
get "attribute"(): $Holder<($Attribute)>
get "multiplier"(): float
get "operation"(): $AttributeModifier$Operation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicAttributeModifier$Modifier$Type = ($RelicAttributeModifier$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicAttributeModifier$Modifier_ = $RelicAttributeModifier$Modifier$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/$SpatialSignItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpatialSignItem extends $RelicItem {
static readonly "TAG_POSITION": string
static readonly "TAG_TIME": string
static readonly "TAG_WORLD": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "constructDefaultRelicData"(): $RelicData
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialSignItem$Type = ($SpatialSignItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialSignItem_ = $SpatialSignItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$CastData, $CastData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData"
import {$StatData, $StatData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbilitiesData, $AbilitiesData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData"
import {$StyleData, $StyleData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootData, $LootData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$ItemBase, $ItemBase$Type} from "packages/it/hurts/sskirillss/relics/items/$ItemBase"
import {$RelicAttributeModifier, $RelicAttributeModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$RelicSlotModifier, $RelicSlotModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$LevelingData, $LevelingData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData"
import {$IRelicItem, $IRelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$IRelicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbilityData, $AbilityData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData"

export class $RelicItem extends $ItemBase implements $ICurioItem, $IRelicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)
constructor()

public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
public "constructDefaultRelicData"(): $RelicData
public "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
public "getStatData"(arg0: string, arg1: string): $StatData
public "getLevelingData"(): $LevelingData
public "getLootData"(): $LootData
public "isItemResearched"(arg0: $Player$Type): boolean
public "setItemResearched"(arg0: $Player$Type, arg1: boolean): void
public "getMaxQuality"(): integer
public "getStatQuality"(arg0: $ItemStack$Type, arg1: string, arg2: string): integer
public "getAbilityInitialValue"(arg0: $ItemStack$Type, arg1: string, arg2: string): double
public "getStatByQuality"(arg0: string, arg1: string, arg2: integer): double
public "getAbilityQuality"(arg0: $ItemStack$Type, arg1: string): integer
public "getRelicQuality"(arg0: $ItemStack$Type): integer
public "getLevelingTag"(arg0: $ItemStack$Type): $CompoundTag
public "setLevelingTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "setPoints"(arg0: $ItemStack$Type, arg1: integer): void
public "addPoints"(arg0: $ItemStack$Type, arg1: integer): void
public "addLevel"(arg0: $ItemStack$Type, arg1: integer): void
public "getExperience"(arg0: $ItemStack$Type): integer
public "setExperience"(arg0: $ItemStack$Type, arg1: integer): void
public "getExperienceBetweenLevels"(arg0: integer, arg1: integer): integer
public "getLevelFromExperience"(arg0: $ItemStack$Type, arg1: integer): integer
public "addExperience"(arg0: $ItemStack$Type, arg1: integer): boolean
public "addExperience"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): boolean
public "spreadExperience"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer, arg3: double): void
public "spreadExperience"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
public "isMaxLevel"(arg0: $ItemStack$Type): boolean
public "dropExperience"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer): void
public "getExperienceLeftForLevel"(arg0: $ItemStack$Type, arg1: integer): integer
public "getExchanges"(arg0: $ItemStack$Type): integer
public "setExchanges"(arg0: $ItemStack$Type, arg1: integer): void
public "addExchanges"(arg0: $ItemStack$Type, arg1: integer): void
public "getExchangeCost"(arg0: $ItemStack$Type): integer
public "isExchangeAvailable"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "testAbilityCastPredicates"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
public "getAbilitiesTag"(arg0: $ItemStack$Type): $CompoundTag
public "setAbilitiesTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getAbilityTag"(arg0: $ItemStack$Type, arg1: string): $CompoundTag
public "setAbilityTag"(arg0: $ItemStack$Type, arg1: string, arg2: $CompoundTag$Type): void
public "getAbilityTempTag"(arg0: $ItemStack$Type, arg1: string): $CompoundTag
public "setAbilityTempTag"(arg0: $ItemStack$Type, arg1: string, arg2: $CompoundTag$Type): void
public "getAbilityInitialValues"(arg0: $ItemStack$Type, arg1: string): $Map<(string), (double)>
public "getAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: integer): double
public "getAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string): double
public "getAbilityPoints"(arg0: $ItemStack$Type, arg1: string): integer
public "setAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: double): void
public "addAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: double): void
public "addAbilityPoints"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "canUseAbility"(arg0: $ItemStack$Type, arg1: string): boolean
public "canSeeAbility"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
public "randomizeStat"(arg0: $ItemStack$Type, arg1: string, arg2: string): void
public "getUpgradeRequiredExperience"(arg0: $ItemStack$Type, arg1: string): integer
public "isAbilityMaxLevel"(arg0: $ItemStack$Type, arg1: string): boolean
public "mayUpgrade"(arg0: $ItemStack$Type, arg1: string): boolean
public "mayPlayerUpgrade"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
public "getRerollRequiredExperience"(arg0: string): integer
public "mayReroll"(arg0: $ItemStack$Type, arg1: string): boolean
public "mayPlayerReroll"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
public "getResetRequiredExperience"(arg0: $ItemStack$Type, arg1: string): integer
public "mayReset"(arg0: $ItemStack$Type, arg1: string): boolean
public "mayPlayerReset"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
public "getAbilityCooldownCap"(arg0: $ItemStack$Type, arg1: string): integer
public "setAbilityCooldownCap"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "setAbilityCooldown"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "isAbilityTicking"(arg0: $ItemStack$Type, arg1: string): boolean
public "isAbilityOnCooldown"(arg0: $ItemStack$Type, arg1: string): boolean
public "canPlayerUseActiveAbility"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
public "tickActiveAbilitySelection"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string): void
public "getSlotModifiers"(arg0: $ItemStack$Type): $RelicSlotModifier
public "setRelicData"(arg0: $RelicData$Type): void
public "getAbilitiesData"(): $AbilitiesData
public "getAbilityData"(arg0: string): $AbilityData
public "getPoints"(arg0: $ItemStack$Type): integer
public "getRelicData"(): $RelicData
public "getAbilityCooldown"(arg0: $ItemStack$Type, arg1: string): integer
public "addAbilityCooldown"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "getAttributeModifiers"(arg0: $ItemStack$Type): $RelicAttributeModifier
public "getStyleData"(): $StyleData
public "getTotalExperienceForLevel"(arg0: integer): integer
public "randomizeStats"(arg0: $ItemStack$Type, arg1: string): void
public "setAbilityPoints"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "getAbilityCastData"(arg0: string): $CastData
public "setAbilityTicking"(arg0: $ItemStack$Type, arg1: string, arg2: boolean): void
public "getLevel"(arg0: $ItemStack$Type): integer
public "setLevel"(arg0: $ItemStack$Type, arg1: integer): void
public "getItem"(): $Item
get "levelingData"(): $LevelingData
get "lootData"(): $LootData
get "maxQuality"(): integer
set "relicData"(value: $RelicData$Type)
get "abilitiesData"(): $AbilitiesData
get "relicData"(): $RelicData
get "styleData"(): $StyleData
get "item"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelicItem$Type = ($RelicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelicItem_ = $RelicItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleConstructor" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder, $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder$Type} from "packages/it/hurts/sskirillss/relics/client/particles/$BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder"

export class $BasicColoredParticleConstructor {


public "setDiameter"(arg0: float): void
public "setScaleModifier"(arg0: float): void
public "setPhysical"(arg0: boolean): void
public "setLifetime"(arg0: integer): void
public "getLifetime"(): integer
public "setRoll"(arg0: float): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $BasicColoredParticleConstructor$BasicColoredParticleConstructorBuilder
public "setColor"(arg0: $Color$Type): void
public "getRoll"(): float
public "getColor"(): $Color
public "getDiameter"(): float
public "isPhysical"(): boolean
public "getScaleModifier"(): float
set "diameter"(value: float)
set "scaleModifier"(value: float)
set "physical"(value: boolean)
set "lifetime"(value: integer)
get "lifetime"(): integer
set "roll"(value: float)
set "color"(value: $Color$Type)
get "roll"(): float
get "color"(): $Color
get "diameter"(): float
get "physical"(): boolean
get "scaleModifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicColoredParticleConstructor$Type = ($BasicColoredParticleConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicColoredParticleConstructor_ = $BasicColoredParticleConstructor$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/$IRelicItem" {
import {$RelicAttributeModifier, $RelicAttributeModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicAttributeModifier"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CastData, $CastData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/$CastData"
import {$StatData, $StatData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$StatData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastType"
import {$CastStage, $CastStage$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AbilitiesData, $AbilitiesData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilitiesData"
import {$StyleData, $StyleData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/style/$StyleData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootData, $LootData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/loot/$LootData"
import {$RelicSlotModifier, $RelicSlotModifier$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicSlotModifier"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$LevelingData, $LevelingData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$LevelingData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbilityData, $AbilityData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/leveling/$AbilityData"

export interface $IRelicItem {

 "constructDefaultRelicData"(): $RelicData
 "castActiveAbility"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string, arg3: $CastType$Type, arg4: $CastStage$Type): void
 "getStatData"(arg0: string, arg1: string): $StatData
 "getLevelingData"(): $LevelingData
 "getLootData"(): $LootData
 "isItemResearched"(arg0: $Player$Type): boolean
 "setItemResearched"(arg0: $Player$Type, arg1: boolean): void
 "getMaxQuality"(): integer
 "getStatQuality"(arg0: $ItemStack$Type, arg1: string, arg2: string): integer
 "getAbilityInitialValue"(arg0: $ItemStack$Type, arg1: string, arg2: string): double
 "getStatByQuality"(arg0: string, arg1: string, arg2: integer): double
 "getAbilityQuality"(arg0: $ItemStack$Type, arg1: string): integer
 "getRelicQuality"(arg0: $ItemStack$Type): integer
 "getLevelingTag"(arg0: $ItemStack$Type): $CompoundTag
 "setLevelingTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "setPoints"(arg0: $ItemStack$Type, arg1: integer): void
 "addPoints"(arg0: $ItemStack$Type, arg1: integer): void
 "addLevel"(arg0: $ItemStack$Type, arg1: integer): void
 "getExperience"(arg0: $ItemStack$Type): integer
 "setExperience"(arg0: $ItemStack$Type, arg1: integer): void
 "getExperienceBetweenLevels"(arg0: integer, arg1: integer): integer
 "getLevelFromExperience"(arg0: $ItemStack$Type, arg1: integer): integer
 "addExperience"(arg0: $ItemStack$Type, arg1: integer): boolean
 "addExperience"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): boolean
 "spreadExperience"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer, arg3: double): void
 "spreadExperience"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
 "isMaxLevel"(arg0: $ItemStack$Type): boolean
 "dropExperience"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: integer): void
 "getExperienceLeftForLevel"(arg0: $ItemStack$Type, arg1: integer): integer
 "getExchanges"(arg0: $ItemStack$Type): integer
 "setExchanges"(arg0: $ItemStack$Type, arg1: integer): void
 "addExchanges"(arg0: $ItemStack$Type, arg1: integer): void
 "getExchangeCost"(arg0: $ItemStack$Type): integer
 "isExchangeAvailable"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "testAbilityCastPredicates"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
 "getAbilitiesTag"(arg0: $ItemStack$Type): $CompoundTag
 "setAbilitiesTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getAbilityTag"(arg0: $ItemStack$Type, arg1: string): $CompoundTag
 "setAbilityTag"(arg0: $ItemStack$Type, arg1: string, arg2: $CompoundTag$Type): void
 "getAbilityTempTag"(arg0: $ItemStack$Type, arg1: string): $CompoundTag
 "setAbilityTempTag"(arg0: $ItemStack$Type, arg1: string, arg2: $CompoundTag$Type): void
 "getAbilityInitialValues"(arg0: $ItemStack$Type, arg1: string): $Map<(string), (double)>
 "getAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: integer): double
 "getAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string): double
 "getAbilityPoints"(arg0: $ItemStack$Type, arg1: string): integer
 "setAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: double): void
 "addAbilityValue"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: double): void
 "addAbilityPoints"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
 "canUseAbility"(arg0: $ItemStack$Type, arg1: string): boolean
 "canSeeAbility"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
 "randomizeStat"(arg0: $ItemStack$Type, arg1: string, arg2: string): void
 "getUpgradeRequiredExperience"(arg0: $ItemStack$Type, arg1: string): integer
 "isAbilityMaxLevel"(arg0: $ItemStack$Type, arg1: string): boolean
 "mayUpgrade"(arg0: $ItemStack$Type, arg1: string): boolean
 "mayPlayerUpgrade"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
 "getRerollRequiredExperience"(arg0: string): integer
 "mayReroll"(arg0: $ItemStack$Type, arg1: string): boolean
 "mayPlayerReroll"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
 "getResetRequiredExperience"(arg0: $ItemStack$Type, arg1: string): integer
 "mayReset"(arg0: $ItemStack$Type, arg1: string): boolean
 "mayPlayerReset"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
 "getAbilityCooldownCap"(arg0: $ItemStack$Type, arg1: string): integer
 "setAbilityCooldownCap"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
 "setAbilityCooldown"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
 "isAbilityTicking"(arg0: $ItemStack$Type, arg1: string): boolean
 "isAbilityOnCooldown"(arg0: $ItemStack$Type, arg1: string): boolean
 "canPlayerUseActiveAbility"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string): boolean
 "tickActiveAbilitySelection"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: string): void
 "getSlotModifiers"(arg0: $ItemStack$Type): $RelicSlotModifier
 "setRelicData"(arg0: $RelicData$Type): void
 "getAbilitiesData"(): $AbilitiesData
 "getAbilityData"(arg0: string): $AbilityData
 "getPoints"(arg0: $ItemStack$Type): integer
 "getRelicData"(): $RelicData
 "getAbilityCooldown"(arg0: $ItemStack$Type, arg1: string): integer
 "addAbilityCooldown"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
 "getAttributeModifiers"(arg0: $ItemStack$Type): $RelicAttributeModifier
 "getStyleData"(): $StyleData
 "getTotalExperienceForLevel"(arg0: integer): integer
 "randomizeStats"(arg0: $ItemStack$Type, arg1: string): void
 "setAbilityPoints"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
 "getAbilityCastData"(arg0: string): $CastData
 "setAbilityTicking"(arg0: $ItemStack$Type, arg1: string, arg2: boolean): void
 "getLevel"(arg0: $ItemStack$Type): integer
 "setLevel"(arg0: $ItemStack$Type, arg1: integer): void
 "getItem"(): $Item

(): $RelicData
}

export namespace $IRelicItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRelicItem$Type = ($IRelicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRelicItem_ = $IRelicItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/system/casts/abilities/$AbilityReference" {
import {$SlotReference, $SlotReference$Type} from "packages/it/hurts/sskirillss/relics/system/casts/slots/base/$SlotReference"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $AbilityReference {

constructor(arg0: string, arg1: $SlotReference$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "getSlot"(): $SlotReference
public "setId"(arg0: string): void
public "setSlot"(arg0: $SlotReference$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): $AbilityReference
public "serializeNBT"(): $CompoundTag
get "id"(): string
get "slot"(): $SlotReference
set "id"(value: string)
set "slot"(value: $SlotReference$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityReference$Type = ($AbilityReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityReference_ = $AbilityReference$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/ring/$ChorusInhibitorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RelicItem, $RelicItem$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/$RelicItem"
import {$RelicData, $RelicData$Type} from "packages/it/hurts/sskirillss/relics/items/relics/base/data/$RelicData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChorusInhibitorItem extends $RelicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getEyesPos"(arg0: $Player$Type, arg1: $ItemStack$Type): $BlockPos
public "constructDefaultRelicData"(): $RelicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusInhibitorItem$Type = ($ChorusInhibitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusInhibitorItem_ = $ChorusInhibitorItem$Type;
}}
declare module "packages/it/hurts/sskirillss/relics/items/relics/base/data/cast/misc/$CastStage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"

export class $CastStage extends $Enum<($CastStage)> {
static readonly "START": $CastStage
static readonly "TICK": $CastStage
static readonly "END": $CastStage
static readonly "BY_ID": $IntFunction<($CastStage)>


public static "values"(): ($CastStage)[]
public static "valueOf"(arg0: string): $CastStage
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastStage$Type = (("start") | ("end") | ("tick")) | ($CastStage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastStage_ = $CastStage$Type;
}}
