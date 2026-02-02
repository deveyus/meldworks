declare module "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerBlockEntity$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SlicerBlockEntity$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerBlockEntity$Companion$Type = ($SlicerBlockEntity$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerBlockEntity$Companion_ = $SlicerBlockEntity$Companion$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/recipe/$CuttingProcessingRecipe$Serializer" {
import {$CuttingProcessingRecipe, $CuttingProcessingRecipe$Type} from "packages/com/possible_triangle/sliceanddice/recipe/$CuttingProcessingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CuttingProcessingRecipe$Serializer implements $RecipeSerializer<($CuttingProcessingRecipe)> {
static readonly "INSTANCE": $CuttingProcessingRecipe$Serializer


public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CuttingProcessingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CuttingProcessingRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CuttingProcessingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CuttingProcessingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$Serializer$Type = ($CuttingProcessingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe$Serializer_ = $CuttingProcessingRecipe$Serializer$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$WetAir$Companion" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WetAir$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "check"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WetAir$Companion$Type = ($WetAir$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WetAir$Companion_ = $WetAir$Companion$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/recipe/$CuttingProcessingRecipe$Companion" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeTypeInfo, $IRecipeTypeInfo$Type} from "packages/com/simibubi/create/foundation/recipe/$IRecipeTypeInfo"

export class $CuttingProcessingRecipe$Companion implements $IRecipeTypeInfo {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getSerializer"<T extends $RecipeSerializer<(any)>>(): T
public "getId"(): $ResourceLocation
public "getType"<T extends $RecipeType<(any)>>(): T
get "serializer"(): T
get "id"(): $ResourceLocation
get "type"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$Companion$Type = ($CuttingProcessingRecipe$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe$Companion_ = $CuttingProcessingRecipe$Companion$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SlicerBlockEntity, $SlicerBlockEntity$Type} from "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerBlockEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SlicerBlock extends $KineticBlock implements $IBE<($SlicerBlockEntity)>, $ICogWheel {
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

public "getBlockEntityType"(): $BlockEntityType<($SlicerBlockEntity)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getParticleTargetRadius"(): float
public "getParticleInitialRadius"(): float
public "getBlockEntityClass"(): $Class<($SlicerBlockEntity)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SlicerBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SlicerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SlicerBlockEntity$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SlicerBlockEntity
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "blockEntityType"(): $BlockEntityType<($SlicerBlockEntity)>
get "particleTargetRadius"(): float
get "particleInitialRadius"(): float
get "blockEntityClass"(): $Class<($SlicerBlockEntity)>
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "largeCog"(): boolean
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerBlock$Type = ($SlicerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerBlock_ = $SlicerBlock$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerBlock$Companion" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SprinklerBlock$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getSHAPE"(): $VoxelShape
get "sHAPE"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlock$Companion$Type = ($SprinklerBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlock$Companion_ = $SprinklerBlock$Companion$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TransportedItemStack, $TransportedItemStack$Type} from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DeferralBehaviour, $DeferralBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/simple/$DeferralBehaviour"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$PressingBehaviour, $PressingBehaviour$Type} from "packages/com/simibubi/create/content/kinetics/press/$PressingBehaviour"
import {$PressingBehaviour$PressingBehaviourSpecifics, $PressingBehaviour$PressingBehaviourSpecifics$Type} from "packages/com/simibubi/create/content/kinetics/press/$PressingBehaviour$PressingBehaviourSpecifics"
import {$BasinOperatingBlockEntity, $BasinOperatingBlockEntity$Type} from "packages/com/simibubi/create/content/processing/basin/$BasinOperatingBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlicerBlockEntity$Companion, $SlicerBlockEntity$Companion$Type} from "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerBlockEntity$Companion"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $SlicerBlockEntity extends $BasinOperatingBlockEntity implements $PressingBehaviour$PressingBehaviourSpecifics {
static readonly "Companion": $SlicerBlockEntity$Companion
 "basinChecker": $DeferralBehaviour
 "basinRemoved": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setHeldItem"(arg0: $ItemStack$Type): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getHeldItem"(): $ItemStack
public "startProcessingBasin"(): void
public "continueWithPreviousRecipe"(): boolean
public "getCorrectDirection"(): boolean
public "getCanProcess"(): boolean
public "getCuttingBehaviour"(): $PressingBehaviour
public "getRenderedHeadOffset"(arg0: float): float
public "tryProcessInBasin"(arg0: boolean): boolean
public "tryProcessOnBelt"(arg0: $TransportedItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): boolean
public "tryProcessInWorld"(arg0: $ItemEntity$Type, arg1: boolean): boolean
public "canProcessInBulk"(): boolean
public "onPressingCompleted"(): void
public "getParticleAmount"(): integer
public "getKineticSpeed"(): float
public "getRenderedHeadRotationSpeed"(): float
public "playSound"(): void
public "initialize"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
set "heldItem"(value: $ItemStack$Type)
get "heldItem"(): $ItemStack
get "correctDirection"(): boolean
get "canProcess"(): boolean
get "cuttingBehaviour"(): $PressingBehaviour
get "particleAmount"(): integer
get "kineticSpeed"(): float
get "renderedHeadRotationSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerBlockEntity$Type = ($SlicerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerBlockEntity_ = $SlicerBlockEntity$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/recipe/$CuttingProcessingRecipe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BasinRecipe, $BasinRecipe$Type} from "packages/com/simibubi/create/content/processing/basin/$BasinRecipe"
import {$CuttingProcessingRecipe$Companion, $CuttingProcessingRecipe$Companion$Type} from "packages/com/possible_triangle/sliceanddice/recipe/$CuttingProcessingRecipe$Companion"
import {$IAssemblyRecipe, $IAssemblyRecipe$Type} from "packages/com/simibubi/create/content/processing/sequenced/$IAssemblyRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ProcessingRecipeBuilder$ProcessingRecipeParams, $ProcessingRecipeBuilder$ProcessingRecipeParams$Type} from "packages/com/simibubi/create/content/processing/recipe/$ProcessingRecipeBuilder$ProcessingRecipeParams"
import {$SequencedAssemblySubCategory, $SequencedAssemblySubCategory$Type} from "packages/com/simibubi/create/compat/jei/category/sequencedAssembly/$SequencedAssemblySubCategory"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $CuttingProcessingRecipe extends $BasinRecipe implements $IAssemblyRecipe {
static readonly "Companion": $CuttingProcessingRecipe$Companion

constructor(arg0: $ProcessingRecipeBuilder$ProcessingRecipeParams$Type, arg1: $Ingredient$Type, arg2: boolean, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(arg0: $ProcessingRecipeBuilder$ProcessingRecipeParams$Type, arg1: $Ingredient$Type, arg2: boolean)

public "getTool"(): $Ingredient
public "getConverted"(): boolean
public "getDescriptionForAssembly"(): $Component
public "addRequiredMachines"(arg0: $Set$Type<($ItemLike$Type)>): void
public "addAssemblyIngredients"(arg0: $List$Type<(any)>): void
public "getJEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "component1"(): $ProcessingRecipeBuilder$ProcessingRecipeParams
public "component2"(): $Ingredient
public "component3"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $ProcessingRecipeBuilder$ProcessingRecipeParams$Type, arg1: $Ingredient$Type, arg2: boolean): $CuttingProcessingRecipe
public "getParams"(): $ProcessingRecipeBuilder$ProcessingRecipeParams
public "supportsAssembly"(): boolean
public "addAssemblyFluidIngredients"(arg0: $List$Type<($FluidIngredient$Type)>): void
get "tool"(): $Ingredient
get "converted"(): boolean
get "descriptionForAssembly"(): $Component
get "jEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
get "params"(): $ProcessingRecipeBuilder$ProcessingRecipeParams
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$Type = ($CuttingProcessingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe_ = $CuttingProcessingRecipe$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$WetAir" {
import {$WetAir$Companion, $WetAir$Companion$Type} from "packages/com/possible_triangle/sliceanddice/block/sprinkler/$WetAir$Companion"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AirBlock, $AirBlock$Type} from "packages/net/minecraft/world/level/block/$AirBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WetAir extends $AirBlock {
static readonly "Companion": $WetAir$Companion
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

public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "check"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WetAir$Type = ($WetAir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WetAir_ = $WetAir$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/slicer/$SlicerArmInteractionType" {
import {$ArmInteractionPointType, $ArmInteractionPointType$Type} from "packages/com/simibubi/create/content/kinetics/mechanicalArm/$ArmInteractionPointType"
import {$ArmInteractionPoint, $ArmInteractionPoint$Type} from "packages/com/simibubi/create/content/kinetics/mechanicalArm/$ArmInteractionPoint"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SlicerArmInteractionType extends $ArmInteractionPointType {
static readonly "INSTANCE": $SlicerArmInteractionType
static readonly "SORTED_TYPES_VIEW": $List<($ArmInteractionPointType)>


public "canCreatePoint"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "createPoint"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ArmInteractionPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerArmInteractionType$Type = ($SlicerArmInteractionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerArmInteractionType_ = $SlicerArmInteractionType$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/mixins/$RecipeManagerAccessor" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeManagerAccessor {

 "setByName"(arg0: $Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>): void
 "setRecipes"(arg0: $Map$Type<($RecipeType$Type<(any)>), ($Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>)>): void
 "getByName"(): $Map<($ResourceLocation), ($Recipe<(any)>)>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccessor$Type = ($RecipeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccessor_ = $RecipeManagerAccessor$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SprinklerBlock$Companion, $SprinklerBlock$Companion$Type} from "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerBlock$Companion"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SprinklerTile, $SprinklerTile$Type} from "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerTile"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SprinklerBlock extends $Block implements $IWrenchable, $IBE<($SprinklerTile)> {
static readonly "Companion": $SprinklerBlock$Companion
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

public "getBlockEntityType"(): $BlockEntityType<($SprinklerTile)>
public "getBlockEntityClass"(): $Class<($SprinklerTile)>
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SprinklerTile)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SprinklerTile$Type), ($InteractionResult$Type)>): $InteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SprinklerTile$Type)>): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SprinklerTile
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<($SprinklerTile)>
get "blockEntityClass"(): $Class<($SprinklerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlock$Type = ($SprinklerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlock_ = $SprinklerBlock$Type;
}}
declare module "packages/com/possible_triangle/sliceanddice/block/sprinkler/$SprinklerTile" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/api/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SprinklerTile extends $SmartBlockEntity implements $IHaveGoggleInformation {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "writeSafe"(arg0: $CompoundTag$Type): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "tick"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
public "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerTile$Type = ($SprinklerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerTile_ = $SprinklerTile$Type;
}}
