declare module "packages/li/cil/scannable/api/scanning/$ScannerModule" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScanResultProvider, $ScanResultProvider$Type} from "packages/li/cil/scannable/api/scanning/$ScanResultProvider"

export interface $ScannerModule {

 "getEnergyCost"(arg0: $ItemStack$Type): integer
 "hasResultProvider"(): boolean
 "getResultProvider"(): $ScanResultProvider
 "adjustGlobalRange"(range: float): float
}

export namespace $ScannerModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScannerModule$Type = ($ScannerModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScannerModule_ = $ScannerModule$Type;
}}
declare module "packages/li/cil/scannable/api/scanning/$ScanResultRenderContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ScanResultRenderContext extends $Enum<($ScanResultRenderContext)> {
static readonly "WORLD": $ScanResultRenderContext
static readonly "GUI": $ScanResultRenderContext


public static "values"(): ($ScanResultRenderContext)[]
public static "valueOf"(name: string): $ScanResultRenderContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScanResultRenderContext$Type = (("world") | ("gui")) | ($ScanResultRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScanResultRenderContext_ = $ScanResultRenderContext$Type;
}}
declare module "packages/li/cil/scannable/api/scanning/$ScanResultProvider" {
import {$ScanResultRenderContext, $ScanResultRenderContext$Type} from "packages/li/cil/scannable/api/scanning/$ScanResultRenderContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScanResult, $ScanResult$Type} from "packages/li/cil/scannable/api/scanning/$ScanResult"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $ScanResultProvider {

 "computeScanResults"(): void
 "collectScanResults"(arg0: $BlockGetter$Type, arg1: $Consumer$Type<($ScanResult$Type)>): void
 "initialize"(arg0: $Player$Type, arg1: $Collection$Type<($ItemStack$Type)>, arg2: $Vec3$Type, arg3: float, arg4: integer): void
 "reset"(): void
 "render"(arg0: $ScanResultRenderContext$Type, arg1: $MultiBufferSource$Type, arg2: $PoseStack$Type, arg3: $Camera$Type, arg4: float, arg5: $List$Type<($ScanResult$Type)>): void
}

export namespace $ScanResultProvider {
const REGISTRY: $ResourceKey<($Registry<($ScanResultProvider)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScanResultProvider$Type = ($ScanResultProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScanResultProvider_ = $ScanResultProvider$Type;
}}
declare module "packages/li/cil/scannable/common/item/$ConfigurableEntityScannerModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ScannerModuleItem, $ScannerModuleItem$Type} from "packages/li/cil/scannable/common/item/$ScannerModuleItem"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigurableEntityScannerModuleItem extends $ScannerModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public static "setEntityTypeAt"(stack: $ItemStack$Type, index: integer, entityType: $EntityType$Type<(any)>): void
public static "removeEntityTypeAt"(stack: $ItemStack$Type, index: integer): void
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "getEntityTypes"(stack: $ItemStack$Type): $List<($EntityType<(any)>)>
public static "isLocked"(stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableEntityScannerModuleItem$Type = ($ConfigurableEntityScannerModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableEntityScannerModuleItem_ = $ConfigurableEntityScannerModuleItem$Type;
}}
declare module "packages/li/cil/scannable/common/item/$ScannerModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ScannerModule, $ScannerModule$Type} from "packages/li/cil/scannable/api/scanning/$ScannerModule"
import {$ModItem, $ModItem$Type} from "packages/li/cil/scannable/common/item/$ModItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScannerModuleItem extends $ModItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public static "getModuleEnergyCost"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getModule"(): $ScannerModule
public static "getModule"(stack: $ItemStack$Type): $Optional<($ScannerModule)>
get "module"(): $ScannerModule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScannerModuleItem$Type = ($ScannerModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScannerModuleItem_ = $ScannerModuleItem$Type;
}}
declare module "packages/li/cil/scannable/common/item/$ScannerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ModItem, $ModItem$Type} from "packages/li/cil/scannable/common/item/$ModItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScannerItem extends $ModItem implements $IForgeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public static "isScanner"(stack: $ItemStack$Type): boolean
public "releaseUsing"(stack: $ItemStack$Type, level: $Level$Type, entity: $LivingEntity$Type, timeLeft: integer): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, count: integer): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(stack: $ItemStack$Type, level: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getBarColor"(stack: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "getUseDuration"(stack: $ItemStack$Type): integer
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScannerItem$Type = ($ScannerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScannerItem_ = $ScannerItem$Type;
}}
declare module "packages/li/cil/scannable/common/item/$ModItem" {
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

export class $ModItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any


public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItem$Type = ($ModItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModItem_ = $ModItem$Type;
}}
declare module "packages/li/cil/scannable/common/item/$ConfigurableBlockScannerModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ScannerModuleItem, $ScannerModuleItem$Type} from "packages/li/cil/scannable/common/item/$ScannerModuleItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigurableBlockScannerModuleItem extends $ScannerModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "rarity": $Rarity
 "renderProperties": any

constructor()

public static "addBlock"(stack: $ItemStack$Type, block: $Block$Type): boolean
public static "setBlockAt"(stack: $ItemStack$Type, index: integer, block: $Block$Type): void
public static "removeBlockAt"(stack: $ItemStack$Type, index: integer): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "isLocked"(stack: $ItemStack$Type): boolean
public static "getBlocks"(stack: $ItemStack$Type): $List<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableBlockScannerModuleItem$Type = ($ConfigurableBlockScannerModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableBlockScannerModuleItem_ = $ConfigurableBlockScannerModuleItem$Type;
}}
declare module "packages/li/cil/scannable/api/scanning/$ScanResult" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $ScanResult extends $Closeable {

 "getRenderBounds"(): $AABB
 "close"(): void
 "getPosition"(): $Vec3
}

export namespace $ScanResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScanResult$Type = ($ScanResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScanResult_ = $ScanResult$Type;
}}
