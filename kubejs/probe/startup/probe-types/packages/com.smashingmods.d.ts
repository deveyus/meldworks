declare module "packages/com/smashingmods/chemlib/common/blocks/$ChemicalLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ChemicalLiquidBlock extends $LiquidBlock {
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

constructor(arg0: $Supplier$Type<(any)>, arg1: string)

public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalLiquidBlock$Type = ($ChemicalLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalLiquidBlock_ = $ChemicalLiquidBlock$Type;
}}
declare module "packages/com/smashingmods/chemlib/common/blocks/$LampBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChemicalBlock, $ChemicalBlock$Type} from "packages/com/smashingmods/chemlib/common/blocks/$ChemicalBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChemicalBlockType, $ChemicalBlockType$Type} from "packages/com/smashingmods/chemlib/api/$ChemicalBlockType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $LampBlock extends $ChemicalBlock {
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

constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalBlockType$Type, arg2: $List$Type<($ChemicalBlock$Type)>, arg3: $BlockBehaviour$Properties$Type)

public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LampBlock$Type = ($LampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LampBlock_ = $LampBlock$Type;
}}
declare module "packages/com/smashingmods/chemlib/api/$Chemical" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export interface $Chemical extends $ItemLike {

 "getChemicalName"(): string
 "getChemicalDescription"(): string
 "getFluidTypeReference"(): $Optional<($FluidType)>
 "clampMinColorValue"(arg0: integer, arg1: integer): integer
 "getMatterState"(): $MatterState
 "getEffects"(): $List<($MobEffectInstance)>
 "getAbbreviation"(): string
 "getColor"(): integer
 "asItem"(): $Item
}

export namespace $Chemical {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chemical$Type = ($Chemical);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chemical_ = $Chemical$Type;
}}
declare module "packages/com/smashingmods/chemlib/api/$Element" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MetalType, $MetalType$Type} from "packages/com/smashingmods/chemlib/api/$MetalType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Chemical, $Chemical$Type} from "packages/com/smashingmods/chemlib/api/$Chemical"

export interface $Element extends $Chemical {

 "getGroupName"(): string
 "getPeriod"(): integer
 "isArtificial"(): boolean
 "getAtomicNumber"(): integer
 "getMetalType"(): $MetalType
 "getGroup"(): integer
 "getChemicalName"(): string
 "getChemicalDescription"(): string
 "getFluidTypeReference"(): $Optional<($FluidType)>
 "clampMinColorValue"(arg0: integer, arg1: integer): integer
 "getMatterState"(): $MatterState
 "getEffects"(): $List<($MobEffectInstance)>
 "getAbbreviation"(): string
 "getColor"(): integer
 "asItem"(): $Item
}

export namespace $Element {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$Type = ($Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element_ = $Element$Type;
}}
declare module "packages/com/smashingmods/chemlib/api/$Compound" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Chemical, $Chemical$Type} from "packages/com/smashingmods/chemlib/api/$Chemical"

export interface $Compound extends $Chemical {

 "getComponents"(): $Map<(string), (integer)>
 "getChemicalName"(): string
 "getChemicalDescription"(): string
 "getFluidTypeReference"(): $Optional<($FluidType)>
 "clampMinColorValue"(arg0: integer, arg1: integer): integer
 "getMatterState"(): $MatterState
 "getEffects"(): $List<($MobEffectInstance)>
 "getAbbreviation"(): string
 "getColor"(): integer
 "asItem"(): $Item
}

export namespace $Compound {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Compound$Type = ($Compound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Compound_ = $Compound$Type;
}}
declare module "packages/com/smashingmods/chemlib/common/items/$CompoundItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Compound, $Compound$Type} from "packages/com/smashingmods/chemlib/api/$Compound"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompoundItem extends $Item implements $Compound {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: string, arg1: $MatterState$Type, arg2: $Map$Type<(string), (integer)>, arg3: string, arg4: string, arg5: $List$Type<($MobEffectInstance$Type)>, arg6: $CreativeModeTab$Type)
constructor(arg0: string, arg1: $MatterState$Type, arg2: $Map$Type<(string), (integer)>, arg3: string, arg4: string, arg5: $List$Type<($MobEffectInstance$Type)>)

public "getChemicalName"(): string
public "getChemicalDescription"(): string
public "getMatterState"(): $MatterState
public "buildAbbreviation"(): string
public static "getSubscript"(arg0: string): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEffects"(): $List<($MobEffectInstance)>
public "getAbbreviation"(): string
public "getNamespace"(): string
public "getComponents"(): $Map<(string), (integer)>
public "getColor"(): integer
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getFluidTypeReference"(): $Optional<($FluidType)>
public "clampMinColorValue"(arg0: integer, arg1: integer): integer
get "chemicalName"(): string
get "chemicalDescription"(): string
get "matterState"(): $MatterState
get "effects"(): $List<($MobEffectInstance)>
get "abbreviation"(): string
get "namespace"(): string
get "components"(): $Map<(string), (integer)>
get "color"(): integer
get "fluidTypeReference"(): $Optional<($FluidType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundItem$Type = ($CompoundItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundItem_ = $CompoundItem$Type;
}}
declare module "packages/com/smashingmods/chemlib/common/blocks/$ChemicalBlock" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$ChemicalBlockType, $ChemicalBlockType$Type} from "packages/com/smashingmods/chemlib/api/$ChemicalBlockType"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Chemical, $Chemical$Type} from "packages/com/smashingmods/chemlib/api/$Chemical"

export class $ChemicalBlock extends $Block implements $Chemical {
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

constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalBlockType$Type, arg2: $List$Type<($ChemicalBlock$Type)>, arg3: $BlockBehaviour$Properties$Type)

public "getChemicalName"(): string
public "getBlockType"(): $ChemicalBlockType
public "getChemicalDescription"(): string
public "getChemical"(): $Chemical
public "getMatterState"(): $MatterState
public "getBlockColor"(arg0: $ItemStack$Type, arg1: integer): $BlockColor
public "getEffects"(): $List<($MobEffectInstance)>
public "getAbbreviation"(): string
public "getColor"(): integer
public "getFluidTypeReference"(): $Optional<($FluidType)>
public "clampMinColorValue"(arg0: integer, arg1: integer): integer
get "chemicalName"(): string
get "blockType"(): $ChemicalBlockType
get "chemicalDescription"(): string
get "chemical"(): $Chemical
get "matterState"(): $MatterState
get "effects"(): $List<($MobEffectInstance)>
get "abbreviation"(): string
get "color"(): integer
get "fluidTypeReference"(): $Optional<($FluidType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalBlock$Type = ($ChemicalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalBlock_ = $ChemicalBlock$Type;
}}
declare module "packages/com/smashingmods/chemlib/api/$MetalType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $MetalType extends $Enum<($MetalType)> implements $StringRepresentable {
static readonly "METAL": $MetalType
static readonly "METALLOID": $MetalType
static readonly "NONMETAL": $MetalType


public static "values"(): ($MetalType)[]
public static "valueOf"(arg0: string): $MetalType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalType$Type = (("metalloid") | ("nonmetal") | ("metal")) | ($MetalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalType_ = $MetalType$Type;
}}
declare module "packages/com/smashingmods/chemlib/common/items/$ChemicalItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ChemicalItemType, $ChemicalItemType$Type} from "packages/com/smashingmods/chemlib/api/$ChemicalItemType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Chemical, $Chemical$Type} from "packages/com/smashingmods/chemlib/api/$Chemical"

export class $ChemicalItem extends $Item implements $Chemical {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: $Chemical$Type, arg1: $ChemicalItemType$Type, arg2: $Item$Properties$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $ChemicalItemType$Type, arg2: $Item$Properties$Type)

public "getChemicalName"(): string
public "getChemicalDescription"(): string
public "getChemical"(): $Chemical
public "getItemType"(): $ChemicalItemType
public "getMatterState"(): $MatterState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getEffects"(): $List<($MobEffectInstance)>
public "getAbbreviation"(): string
public "getNamespace"(): string
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getColor"(): integer
public "getFluidTypeReference"(): $Optional<($FluidType)>
public "clampMinColorValue"(arg0: integer, arg1: integer): integer
get "chemicalName"(): string
get "chemicalDescription"(): string
get "chemical"(): $Chemical
get "itemType"(): $ChemicalItemType
get "matterState"(): $MatterState
get "effects"(): $List<($MobEffectInstance)>
get "abbreviation"(): string
get "namespace"(): string
get "color"(): integer
get "fluidTypeReference"(): $Optional<($FluidType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalItem$Type = ($ChemicalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalItem_ = $ChemicalItem$Type;
}}
declare module "packages/com/smashingmods/chemlib/common/items/$ElementItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MetalType, $MetalType$Type} from "packages/com/smashingmods/chemlib/api/$MetalType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Element, $Element$Type} from "packages/com/smashingmods/chemlib/api/$Element"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElementItem extends $Item implements $Element {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor(arg0: string, arg1: integer, arg2: string, arg3: integer, arg4: integer, arg5: $MatterState$Type, arg6: $MetalType$Type, arg7: boolean, arg8: string, arg9: $List$Type<($MobEffectInstance$Type)>)

public "getChemicalName"(): string
public "getGroupName"(): string
public "getPeriod"(): integer
public "isArtificial"(): boolean
public "getChemicalDescription"(): string
public "getAtomicNumber"(): integer
public "getMetalType"(): $MetalType
public "getMatterState"(): $MatterState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getEffects"(): $List<($MobEffectInstance)>
public "getAbbreviation"(): string
public "getNamespace"(): string
public "getGroup"(): integer
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getColor"(): integer
public "getFluidTypeReference"(): $Optional<($FluidType)>
public "clampMinColorValue"(arg0: integer, arg1: integer): integer
get "chemicalName"(): string
get "groupName"(): string
get "period"(): integer
get "artificial"(): boolean
get "chemicalDescription"(): string
get "atomicNumber"(): integer
get "metalType"(): $MetalType
get "matterState"(): $MatterState
get "effects"(): $List<($MobEffectInstance)>
get "abbreviation"(): string
get "namespace"(): string
get "group"(): integer
get "color"(): integer
get "fluidTypeReference"(): $Optional<($FluidType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementItem$Type = ($ElementItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementItem_ = $ElementItem$Type;
}}
declare module "packages/com/smashingmods/chemlib/common/items/$ChemicalBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ChemicalBlock, $ChemicalBlock$Type} from "packages/com/smashingmods/chemlib/common/blocks/$ChemicalBlock"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MatterState, $MatterState$Type} from "packages/com/smashingmods/chemlib/api/$MatterState"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Chemical, $Chemical$Type} from "packages/com/smashingmods/chemlib/api/$Chemical"

export class $ChemicalBlockItem extends $BlockItem implements $Chemical {
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

constructor(arg0: $ChemicalBlock$Type, arg1: $Item$Properties$Type)

public "getChemicalName"(): string
public "getChemicalDescription"(): string
public "getChemical"(): $Chemical
public "getMatterState"(): $MatterState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEffects"(): $List<($MobEffectInstance)>
public "getAbbreviation"(): string
public "getColor"(): integer
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getFluidTypeReference"(): $Optional<($FluidType)>
public "clampMinColorValue"(arg0: integer, arg1: integer): integer
public "asItem"(): $Item
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "chemicalName"(): string
get "chemicalDescription"(): string
get "chemical"(): $Chemical
get "matterState"(): $MatterState
get "effects"(): $List<($MobEffectInstance)>
get "abbreviation"(): string
get "color"(): integer
get "fluidTypeReference"(): $Optional<($FluidType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalBlockItem$Type = ($ChemicalBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalBlockItem_ = $ChemicalBlockItem$Type;
}}
declare module "packages/com/smashingmods/chemlib/api/$ChemicalBlockType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ChemicalBlockType extends $Enum<($ChemicalBlockType)> implements $StringRepresentable {
static readonly "METAL": $ChemicalBlockType
static readonly "LAMP": $ChemicalBlockType


public static "values"(): ($ChemicalBlockType)[]
public static "valueOf"(arg0: string): $ChemicalBlockType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalBlockType$Type = (("metal") | ("lamp")) | ($ChemicalBlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalBlockType_ = $ChemicalBlockType$Type;
}}
declare module "packages/com/smashingmods/chemlib/common/items/$PeriodicTableItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PeriodicTableItem extends $Item {
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
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeriodicTableItem$Type = ($PeriodicTableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeriodicTableItem_ = $PeriodicTableItem$Type;
}}
declare module "packages/com/smashingmods/chemlib/api/$MatterState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $MatterState extends $Enum<($MatterState)> implements $StringRepresentable {
static readonly "SOLID": $MatterState
static readonly "LIQUID": $MatterState
static readonly "GAS": $MatterState


public static "values"(): ($MatterState)[]
public static "valueOf"(arg0: string): $MatterState
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterState$Type = (("solid") | ("liquid") | ("gas")) | ($MatterState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterState_ = $MatterState$Type;
}}
declare module "packages/com/smashingmods/chemlib/api/$ChemicalItemType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ChemicalItemType extends $Enum<($ChemicalItemType)> implements $StringRepresentable {
static readonly "COMPOUND": $ChemicalItemType
static readonly "DUST": $ChemicalItemType
static readonly "NUGGET": $ChemicalItemType
static readonly "INGOT": $ChemicalItemType
static readonly "PLATE": $ChemicalItemType


public static "values"(): ($ChemicalItemType)[]
public static "valueOf"(arg0: string): $ChemicalItemType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalItemType$Type = (("nugget") | ("plate") | ("ingot") | ("compound") | ("dust")) | ($ChemicalItemType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalItemType_ = $ChemicalItemType$Type;
}}
