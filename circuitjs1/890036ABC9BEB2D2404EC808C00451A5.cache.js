var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.circuitjs1;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '890036ABC9BEB2D2404EC808C00451A5';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = 6.283185307179586, $intern_3 = {3:1, 5:1}, $intern_4 = {19:1, 16:1}, $intern_5 = {25:1, 21:1, 24:1, 19:1, 26:1, 16:1, 17:1}, $intern_6 = {3:1, 15:1}, $intern_7 = {3:1, 11:1, 15:1}, $intern_8 = {28:1, 27:1, 3:1, 10:1, 9:1}, $intern_9 = {27:1, 97:1, 3:1, 10:1, 9:1}, $intern_10 = {27:1, 98:1, 3:1, 10:1, 9:1}, $intern_11 = {27:1, 99:1, 3:1, 10:1, 9:1}, $intern_12 = {40:1, 3:1, 10:1, 9:1}, $intern_13 = {27:1, 129:1, 3:1, 10:1, 9:1}, $intern_14 = {27:1, 86:1, 3:1, 10:1, 9:1}, $intern_15 = {127:1, 3:1, 11:1, 15:1}, $intern_16 = {95:1, 3:1, 11:1, 15:1}, $intern_17 = {3:1}, $intern_18 = 1000, $intern_19 = 65535, $intern_20 = 4194303, $intern_21 = 1048575, $intern_22 = 524288, $intern_23 = 4194304, $intern_24 = 17592186044416, $intern_25 = -17592186044416, $intern_26 = 0.01, $intern_27 = {186:1, 3:1}, $intern_28 = 2048, $intern_29 = 65536, $intern_30 = 67108864, $intern_31 = {25:1, 21:1, 24:1, 19:1, 34:1, 26:1, 16:1, 17:1}, $intern_32 = {59:1, 67:1, 71:1, 78:1, 55:1, 56:1, 60:1, 61:1, 63:1, 62:1, 64:1, 65:1, 66:1, 69:1, 70:1, 68:1, 72:1, 76:1, 74:1, 75:1, 73:1, 77:1, 82:1, 81:1, 80:1, 79:1, 25:1, 21:1, 24:1, 39:1, 19:1, 26:1, 57:1, 58:1, 16:1, 17:1}, $intern_33 = {125:1, 59:1, 67:1, 71:1, 78:1, 55:1, 56:1, 60:1, 61:1, 63:1, 62:1, 64:1, 65:1, 66:1, 69:1, 70:1, 68:1, 72:1, 76:1, 74:1, 75:1, 73:1, 77:1, 82:1, 81:1, 80:1, 79:1, 25:1, 21:1, 88:1, 24:1, 185:1, 39:1, 19:1, 156:1, 26:1, 57:1, 58:1, 16:1, 17:1}, $intern_34 = {45:1, 29:1}, $intern_35 = {25:1, 21:1, 24:1, 19:1, 34:1, 26:1, 43:1, 16:1, 17:1}, $intern_36 = {25:1, 21:1, 24:1, 39:1, 19:1, 34:1, 26:1, 43:1, 16:1, 17:1}, $intern_37 = {188:1, 29:1}, $intern_38 = {125:1, 59:1, 67:1, 71:1, 78:1, 55:1, 56:1, 60:1, 61:1, 63:1, 62:1, 64:1, 65:1, 66:1, 69:1, 70:1, 68:1, 72:1, 76:1, 74:1, 75:1, 73:1, 77:1, 82:1, 81:1, 80:1, 79:1, 25:1, 21:1, 135:1, 88:1, 24:1, 304:1, 185:1, 157:1, 39:1, 19:1, 156:1, 26:1, 35:1, 112:1, 57:1, 58:1, 16:1, 17:1}, $intern_39 = {25:1, 21:1, 24:1, 19:1, 34:1, 26:1, 108:1, 16:1, 17:1}, $intern_40 = {25:1, 21:1, 24:1, 157:1, 19:1, 34:1, 26:1, 16:1, 17:1}, $intern_41 = {59:1, 67:1, 71:1, 78:1, 55:1, 56:1, 60:1, 61:1, 63:1, 62:1, 64:1, 65:1, 66:1, 69:1, 70:1, 68:1, 72:1, 76:1, 74:1, 75:1, 73:1, 77:1, 82:1, 81:1, 80:1, 79:1, 25:1, 21:1, 88:1, 24:1, 19:1, 26:1, 57:1, 58:1, 16:1, 17:1}, $intern_42 = {602:1, 29:1}, $intern_43 = {39:1, 19:1, 22:1, 16:1}, $intern_44 = {600:1, 29:1}, $intern_45 = {25:1, 21:1, 24:1, 19:1, 34:1, 26:1, 167:1, 16:1, 17:1}, $intern_46 = {125:1, 59:1, 67:1, 71:1, 78:1, 55:1, 56:1, 60:1, 61:1, 63:1, 62:1, 64:1, 65:1, 66:1, 69:1, 70:1, 68:1, 72:1, 76:1, 74:1, 75:1, 73:1, 77:1, 82:1, 81:1, 80:1, 79:1, 25:1, 21:1, 135:1, 88:1, 24:1, 39:1, 19:1, 26:1, 57:1, 58:1, 16:1, 17:1}, $intern_47 = {100:1, 3:1, 10:1, 9:1}, $intern_48 = {30:1, 3:1}, $intern_49 = 0.48, $intern_50 = {102:1, 3:1, 5:1}, $intern_51 = 1.0E-9, $intern_52 = 1000000000000, $intern_53 = 1.0E-6, $intern_54 = 1000000000, $intern_55 = 0.001, $intern_56 = 1000000, $intern_57 = {4:1, 8:1}, $intern_58 = 0.6366197723675814, $intern_59 = 0.15915494309189535, $intern_60 = {4:1, 8:1, 48:1}, $intern_61 = {4:1, 8:1, 33:1, 48:1}, $intern_62 = 10000000000, $intern_63 = 100000000, $intern_64 = 4294901760, $intern_65 = {4:1, 8:1, 117:1}, $intern_66 = {115:1, 4:1, 8:1}, $intern_67 = 1.0E-8, $intern_68 = 19.331142470520007, $intern_69 = 38.662284941040014, $intern_70 = 0.025865, $intern_71 = 1.4142135623730951, $intern_72 = 0.16666666666666666, $intern_73 = {4:1, 8:1, 85:1}, $intern_74 = {4:1, 8:1, 116:1}, $intern_75 = 0.8297872340425532, $intern_76 = 0.0625, $intern_77 = {10:1, 121:1}, $intern_78 = {101:1}, $intern_79 = {3:1, 107:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_7(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_1(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(217, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_14(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 217);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + $wnd.Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance && (instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(196, 1, {});
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate((1 + $wnd.Math.cos($intern_2)) / 2);
}
;
_.onStart = function onStart(){
  this.onUpdate((1 + $wnd.Math.cos($intern_1)) / 2);
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 196);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(365, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 365);
defineClass(637, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 637);
defineClass(211, 1, {211:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 211);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(585, 637, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 585);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(586, 211, {211:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 586);
function $cancelAnimationFrame(this$static, requestId){
  $remove_10(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {650:1, 3:1, 5:1}, 212, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray(this$static.animationRequests, curAnimations), 650);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_10(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(587, 637, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_6(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 587);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(161, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 161);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(588, 161, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 588);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(212, 211, {211:1, 212:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 212);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function $setAriaHaspopupProperty(element, value_0){
  $set_0(($clinit_Property() , HASPOPUP), element, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_3, 189, 8, [($clinit_Boolean() , value_0?true:false)]));
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(12, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 12);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(471, 12, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 471);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(470, 12, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 470);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(472, 12, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 472);
function $getAriaValue(this$static, value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_2($append_2(buf, this$static.getSingleValue(item_0)), ' ');
  }
  return $trim(buf.string);
}

function $set_0(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(this$static, values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(300, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 300);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(44, 300, {}, AriaValueAttribute);
_.getSingleValue = function getSingleValue(value_0){
  return castTo(value_0, 648).id_0;
}
;
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 44);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(473, 12, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 473);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(474, 12, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 474);
function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(475, 12, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 475);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(476, 12, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 476);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(477, 12, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 477);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(478, 12, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 478);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(479, 12, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 479);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(480, 12, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 480);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(481, 12, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 481);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(482, 12, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 482);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(483, 12, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 483);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(484, 12, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 484);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(485, 12, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 485);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(487, 12, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 487);
function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(486, 12, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 486);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(488, 12, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 488);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(489, 12, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 489);
function $init(this$static, elementId){
  this$static.id_0 = elementId;
}

function Id(element){
  $init(this, element.id);
}

defineClass(208, 1, {648:1, 208:1}, Id);
var Lcom_google_gwt_aria_client_Id_2_classLit = createForClass('com.google.gwt.aria.client', 'Id', 208);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(490, 12, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 490);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(491, 12, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 491);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(494, 12, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 494);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(492, 12, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 492);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(493, 12, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 493);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(495, 12, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 495);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(496, 12, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 496);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(497, 12, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 497);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(498, 12, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 498);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(503, 12, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 503);
function $setAriaActivedescendantProperty(element, value_0){
  $set_0(($clinit_Property() , ACTIVEDESCENDANT), element, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_Id_2_classLit, 1), $intern_3, 208, 0, [value_0]));
}

function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(499, 12, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 499);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(502, 12, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 502);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(500, 12, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 500);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(501, 12, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 501);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(504, 12, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 504);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(505, 12, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 505);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(506, 12, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 506);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(507, 12, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 507);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(49, 300, {}, PrimitiveValueAttribute);
_.getSingleValue = function getSingleValue_0(value_0){
  return value_0 == null?'null':toString_7(value_0);
}
;
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 49);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(508, 12, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 508);
function $clinit_Property(){
  $clinit_Property = emptyMethod;
  ACTIVEDESCENDANT = new AriaValueAttribute('aria-activedescendant');
  new PrimitiveValueAttribute('aria-atomic');
  new AriaValueAttribute('aria-autocomplete');
  new AriaValueAttribute('aria-controls');
  new AriaValueAttribute('aria-describedby');
  new AriaValueAttribute('aria-dropeffect');
  new AriaValueAttribute('aria-flowto');
  HASPOPUP = new PrimitiveValueAttribute('aria-haspopup');
  new PrimitiveValueAttribute('aria-label');
  new AriaValueAttribute('aria-labelledby');
  new PrimitiveValueAttribute('aria-level');
  new AriaValueAttribute('aria-live');
  new PrimitiveValueAttribute('aria-multiline');
  new PrimitiveValueAttribute('aria-multiselectable');
  new AriaValueAttribute('aria-orientation');
  new AriaValueAttribute('aria-owns');
  new PrimitiveValueAttribute('aria-posinset');
  new PrimitiveValueAttribute('aria-readonly');
  new AriaValueAttribute('aria-relevant');
  new PrimitiveValueAttribute('aria-required');
  new PrimitiveValueAttribute('aria-setsize');
  new AriaValueAttribute('aria-sort');
  new PrimitiveValueAttribute('aria-valuemax');
  new PrimitiveValueAttribute('aria-valuemin');
  new PrimitiveValueAttribute('aria-valuenow');
  new PrimitiveValueAttribute('aria-valuetext');
}

var ACTIVEDESCENDANT, HASPOPUP;
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(510, 12, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 510);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(509, 12, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 509);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(511, 12, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 511);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  $putStringValue(ROLES_MAP, 'region', REGION);
  $putStringValue(ROLES_MAP, 'alert', ALERT);
  $putStringValue(ROLES_MAP, 'dialog', DIALOG);
  $putStringValue(ROLES_MAP, 'alertdialog', ALERTDIALOG);
  $putStringValue(ROLES_MAP, 'application', APPLICATION);
  $putStringValue(ROLES_MAP, 'document', DOCUMENT);
  $putStringValue(ROLES_MAP, 'article', ARTICLE);
  $putStringValue(ROLES_MAP, 'banner', BANNER);
  $putStringValue(ROLES_MAP, 'button', BUTTON);
  $putStringValue(ROLES_MAP, 'checkbox', CHECKBOX);
  $putStringValue(ROLES_MAP, 'gridcell', GRIDCELL);
  $putStringValue(ROLES_MAP, 'columnheader', COLUMNHEADER);
  $putStringValue(ROLES_MAP, 'group', GROUP);
  $putStringValue(ROLES_MAP, 'combobox', COMBOBOX);
  $putStringValue(ROLES_MAP, 'complementary', COMPLEMENTARY);
  $putStringValue(ROLES_MAP, 'contentinfo', CONTENTINFO);
  $putStringValue(ROLES_MAP, 'definition', DEFINITION);
  $putStringValue(ROLES_MAP, 'list', LIST);
  $putStringValue(ROLES_MAP, 'directory', DIRECTORY);
  $putStringValue(ROLES_MAP, 'form', FORM);
  $putStringValue(ROLES_MAP, 'grid', GRID);
  $putStringValue(ROLES_MAP, 'heading', HEADING);
  $putStringValue(ROLES_MAP, 'img', IMG);
  $putStringValue(ROLES_MAP, 'link', LINK);
  $putStringValue(ROLES_MAP, 'listbox', LISTBOX);
  $putStringValue(ROLES_MAP, 'listitem', LISTITEM);
  $putStringValue(ROLES_MAP, 'log', LOG);
  $putStringValue(ROLES_MAP, 'main', MAIN);
  $putStringValue(ROLES_MAP, 'marquee', MARQUEE);
  $putStringValue(ROLES_MAP, 'math', MATH);
  $putStringValue(ROLES_MAP, 'menu', MENU);
  $putStringValue(ROLES_MAP, 'menubar', MENUBAR);
  $putStringValue(ROLES_MAP, 'menuitem', MENUITEM);
  $putStringValue(ROLES_MAP, 'menuitemcheckbox', MENUITEMCHECKBOX);
  $putStringValue(ROLES_MAP, 'option', OPTION);
  $putStringValue(ROLES_MAP, 'radio', RADIO);
  $putStringValue(ROLES_MAP, 'menuitemradio', MENUITEMRADIO);
  $putStringValue(ROLES_MAP, 'navigation', NAVIGATION);
  $putStringValue(ROLES_MAP, 'note', NOTE);
  $putStringValue(ROLES_MAP, 'presentation', PRESENTATION);
  $putStringValue(ROLES_MAP, 'progressbar', PROGRESSBAR);
  $putStringValue(ROLES_MAP, 'radiogroup', RADIOGROUP);
  $putStringValue(ROLES_MAP, 'row', ROW);
  $putStringValue(ROLES_MAP, 'rowgroup', ROWGROUP);
  $putStringValue(ROLES_MAP, 'rowheader', ROWHEADER);
  $putStringValue(ROLES_MAP, 'search', SEARCH);
  $putStringValue(ROLES_MAP, 'separator', SEPARATOR);
  $putStringValue(ROLES_MAP, 'scrollbar', SCROLLBAR);
  $putStringValue(ROLES_MAP, 'slider', SLIDER);
  $putStringValue(ROLES_MAP, 'spinbutton', SPINBUTTON);
  $putStringValue(ROLES_MAP, 'status', STATUS);
  $putStringValue(ROLES_MAP, 'tab', TAB);
  $putStringValue(ROLES_MAP, 'tablist', TABLIST);
  $putStringValue(ROLES_MAP, 'tabpanel', TABPANEL);
  $putStringValue(ROLES_MAP, 'textbox', TEXTBOX);
  $putStringValue(ROLES_MAP, 'timer', TIMER);
  $putStringValue(ROLES_MAP, 'toolbar', TOOLBAR);
  $putStringValue(ROLES_MAP, 'tooltip', TOOLTIP);
  $putStringValue(ROLES_MAP, 'tree', TREE);
  $putStringValue(ROLES_MAP, 'treegrid', TREEGRID);
  $putStringValue(ROLES_MAP, 'treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(514, 12, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 514);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(512, 12, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 512);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(513, 12, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 513);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(515, 12, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 515);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(516, 12, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 516);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(517, 12, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 517);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(518, 12, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 518);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(519, 12, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 519);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  new AriaValueAttribute('aria-pressed');
  new AriaValueAttribute('aria-selected');
}

var HIDDEN;
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(520, 12, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 520);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(523, 12, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 523);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(521, 12, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 521);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(522, 12, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 522);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(524, 12, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 524);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(525, 12, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 525);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(526, 12, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 526);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(527, 12, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 527);
function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(530, 12, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 530);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(528, 12, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 528);
function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(529, 12, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 529);
function $addStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + styleSuffix, true);
}

function $addStyleName(this$static){
  setStyleName(this$static.element, 'topSpace', true);
}

function $getAbsoluteTop(this$static){
  return $getAbsoluteTop_0(this$static.element);
}

function $getOffsetHeight(this$static){
  return $getPropertyInt(this$static.element, 'offsetHeight');
}

function $getOffsetWidth(this$static){
  return $getPropertyInt(this$static.element, 'offsetWidth');
}

function $removeStyleDependentName(this$static){
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'current', false);
}

function $resolvePotentialElement(){
  throw toJs(new UnsupportedOperationException);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, elem);
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  this$static.element.style['height'] = height;
}

function $setStyleName(this$static, style){
  $setClassName(this$static.getStyleElement(), style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.getStyleElement(), style, add_0);
}

function $setStylePrimaryName(this$static){
  setStylePrimaryName(this$static.element, 'topButton');
}

function $setVisible(this$static){
  setVisible(this$static.element, false);
}

function $setWidth(this$static, width_0){
  this$static.element.style['width'] = width_0;
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem.className || '';
  spaceIdx = $indexOf_0(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (style.length == 0) {
    throw toJs(new IllegalArgumentException_0('Style names cannot be empty'));
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (style.length == 0) {
    throw toJs(new IllegalArgumentException_0('Style names cannot be empty'));
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineClass(16, 1, $intern_4);
_.getStyleElement = function getStyleElement(){
  return this.element;
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.setHeight_0 = function setHeight(height){
  $setHeight(this, height);
}
;
_.setWidth_0 = function setWidth(width_0){
  $setWidth(this, width_0);
}
;
_.toString_0 = function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 16);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?null:this$static.sinkEvents(typeInt);
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler(this$static, handler, type_0){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      this$static.element.__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_1(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 34)) {
    castTo(this$static.parent_0, 34).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?sinkEvents_0(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(17, 16, $intern_5);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent_0 = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents(eventBitsToAdd){
  $sinkEvents(this, eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 17);
function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = this$static.getTabIndex();
  -1 == tabIndex && this$static.setTabIndex(0);
}

function FocusWidget(elem){
  $setElement_0(this, elem);
}

defineClass(198, 17, {59:1, 67:1, 71:1, 78:1, 55:1, 56:1, 60:1, 61:1, 63:1, 62:1, 64:1, 65:1, 66:1, 69:1, 70:1, 68:1, 72:1, 76:1, 74:1, 75:1, 73:1, 77:1, 82:1, 81:1, 80:1, 79:1, 25:1, 21:1, 24:1, 19:1, 26:1, 57:1, 58:1, 16:1, 17:1});
_.getTabIndex = function getTabIndex(){
  return this.element.tabIndex;
}
;
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(this.element, index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 198);
var detector;
defineClass(628, 1, {});
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetector_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetector', 628);
function Canvas$CanvasElementSupportDetectedNo(){
}

defineClass(200, 628, {}, Canvas$CanvasElementSupportDetectedNo);
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetectedNo_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetectedNo', 200);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(9, 1, {3:1, 10:1, 9:1});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 9);
function $clinit_Context2d$LineCap(){
  $clinit_Context2d$LineCap = emptyMethod;
  BUTT = new Context2d$LineCap('BUTT', 0, 'butt');
  ROUND = new Context2d$LineCap('ROUND', 1, 'round');
  SQUARE = new Context2d$LineCap('SQUARE', 2, 'square');
}

function Context2d$LineCap(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_0(){
  $clinit_Context2d$LineCap();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit, 1), $intern_3, 140, 0, [BUTT, ROUND, SQUARE]);
}

defineClass(140, 9, {140:1, 3:1, 10:1, 9:1}, Context2d$LineCap);
var BUTT, ROUND, SQUARE;
var Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/LineCap', 140, values_0);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function Duration(){
  this.start_0 = now_1();
}

defineClass(352, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 352);
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 103, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument_0(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_3, 15, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause);
  checkCriticalArgument_0(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_3, 15, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
  ;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(15, 1, $intern_6);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_3(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 15);
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(11, 15, $intern_7);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 11);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(41, 11, $intern_7, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 41);
defineClass(191, 41, $intern_7);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 191);
defineClass(313, 191, $intern_7);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 313);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_7(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(120, 313, {120:1, 3:1, 11:1, 15:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 120);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(603, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 603);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getModuleBaseURL(){
  $clinit_Impl();
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].execute_0();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 15)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 120)?castTo(e, 120).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(329, 603, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 329);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_1(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_1(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(614, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 614);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(314, 614, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 103, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 314);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_1(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_0(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals_1(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(615, 614, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 103, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_1(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 615);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(315, 615, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 315);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = this$static.className || '';
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function $getAbsoluteLeft(this$static){
  var doc, scrollingElement;
  return doc = this$static.ownerDocument , $getBoundingClientRectLeft(this$static) + $getScrollLeft((scrollingElement = $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body , scrollingElement?scrollingElement:doc.documentElement));
}

function $getAbsoluteTop_0(this$static){
  var doc, scrollingElement;
  return doc = this$static.ownerDocument , $getBoundingClientRectTop(this$static) + (((scrollingElement = $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body , scrollingElement?scrollingElement:doc.documentElement).scrollTop || 0) | 0);
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = this$static.className || '';
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || (checkCriticalStringElementIndex(idx - 1, nameList.length) , nameList.charCodeAt(idx - 1) == 32)) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && (checkCriticalStringElementIndex(last, nameList.length) , nameList.charCodeAt(last) == 32)) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $setHref(this$static, href_0){
  this$static.href = href_0;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    container.innerHTML = '<' + tagName + '/>' || '';
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $eventGetMouseWheelVelocityY(evt){
  return Math.round(-evt.wheelDelta / 40) || 0;
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getTagName(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || $equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function $selectAdd(select, option, before){
  before?select.add(option, before.index):select.add(option);
}

function $setInnerText(elem, text_0){
  elem.innerText = text_0 || '';
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

var currentEventTarget;
function $getScrollLeft(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -((elem.scrollLeft || 0) | 0);
  }
  return (elem.scrollLeft || 0) | 0;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getBodyOffsetLeft(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
}

function $getClientHeight(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getScrollHeight(this$static){
  return (($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollLeft_0(this$static){
  var scrollingElement;
  return $getScrollLeft((scrollingElement = $equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body , scrollingElement?scrollingElement:this$static.documentElement));
}

function $getScrollTop(this$static){
  var scrollingElement;
  return ((scrollingElement = $equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body , scrollingElement?scrollingElement:this$static.documentElement).scrollTop || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setSelectedIndex(this$static, index_0){
  this$static.selectedIndex = index_0;
}

function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
  FLEX = new Style$Display$18;
  INLINE_FLEX = new Style$Display$19;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Display();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_3, 28, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL, FLEX, INLINE_FLEX]);
}

defineClass(28, 9, $intern_8);
var BLOCK, FLEX, INITIAL, INLINE, INLINE_BLOCK, INLINE_FLEX, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 28, values_1);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(392, 28, $intern_8, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 392, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(401, 28, $intern_8, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 401, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(402, 28, $intern_8, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 402, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(403, 28, $intern_8, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 403, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(404, 28, $intern_8, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 404, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(405, 28, $intern_8, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 405, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(406, 28, $intern_8, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 406, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(407, 28, $intern_8, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 407, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(408, 28, $intern_8, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 408, null);
function Style$Display$18(){
  Style$Display.call(this, 'FLEX', 17);
}

defineClass(409, 28, $intern_8, Style$Display$18);
var Lcom_google_gwt_dom_client_Style$Display$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/18', 409, null);
function Style$Display$19(){
  Style$Display.call(this, 'INLINE_FLEX', 18);
}

defineClass(410, 28, $intern_8, Style$Display$19);
var Lcom_google_gwt_dom_client_Style$Display$19_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/19', 410, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(393, 28, $intern_8, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 393, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(394, 28, $intern_8, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 394, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(395, 28, $intern_8, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 395, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(396, 28, $intern_8, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 396, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(397, 28, $intern_8, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 397, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(398, 28, $intern_8, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 398, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(399, 28, $intern_8, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 399, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(400, 28, $intern_8, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 400, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_3, 97, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(97, 9, $intern_9);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 97, values_2);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(411, 97, $intern_9, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 411, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(412, 97, $intern_9, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 412, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(413, 97, $intern_9, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 413, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(414, 97, $intern_9, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 414, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_3, 98, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(98, 9, $intern_10);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 98, values_3);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(415, 98, $intern_10, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 415, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(416, 98, $intern_10, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 416, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(417, 98, $intern_10, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 417, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(418, 98, $intern_10, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 418, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_3, 99, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(99, 9, $intern_11);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 99, values_4);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(419, 99, $intern_11, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 419, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(420, 99, $intern_11, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 420, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(421, 99, $intern_11, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 421, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(422, 99, $intern_11, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 422, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_3, 40, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(40, 9, $intern_12);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 40, values_5);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(383, 40, $intern_12, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 383, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(384, 40, $intern_12, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 384, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(385, 40, $intern_12, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 385, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(386, 40, $intern_12, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 386, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(387, 40, $intern_12, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 387, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(388, 40, $intern_12, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 388, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(389, 40, $intern_12, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 389, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(390, 40, $intern_12, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 390, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(391, 40, $intern_12, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 391, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_3, 129, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(129, 9, $intern_13);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 129, values_6);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(423, 129, $intern_13, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 423, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(424, 129, $intern_13, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 424, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$WhiteSpace();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_3, 86, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(86, 9, $intern_14);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 86, values_7);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(425, 86, $intern_14, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 425, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(426, 86, $intern_14, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 426, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(427, 86, $intern_14, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 427, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(428, 86, $intern_14, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 428, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(429, 86, $intern_14, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 429, null);
function $getRelativeX(this$static, target){
  var doc, scrollingElement;
  return ((this$static.clientX || 0) | 0) - (doc = target.ownerDocument , $getBoundingClientRectLeft(target) + $getScrollLeft((scrollingElement = $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body , scrollingElement?scrollingElement:doc.documentElement))) + $getScrollLeft(target) + $getScrollLeft_0(target.ownerDocument);
}

defineClass(623, 1, {});
_.toString_0 = function toString_4(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 623);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(624, 623, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 624);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 107);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_0(), 50);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(630, 624, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 630);
function $clinit_BlurEvent(){
  $clinit_BlurEvent = emptyMethod;
  TYPE = new DomEvent$Type('blur', new BlurEvent);
}

function $dispatch(handler){
  !handler.this$01.shownChildMenu && $selectItem(handler.this$01, null);
}

function BlurEvent(){
}

defineClass(469, 630, {}, BlurEvent);
_.dispatch = function dispatch(handler){
  $dispatch(castTo(handler, 640));
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'BlurEvent', 469);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('change', new ChangeEvent);
}

function ChangeEvent(){
}

defineClass(456, 630, {}, ChangeEvent);
_.dispatch = function dispatch_0(handler){
  castTo(handler, 641).onChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 456);
defineClass(631, 630, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 631);
function $getX(this$static){
  var doc, e, relativeElem, scrollingElement;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ((e.clientX || 0) | 0) - (doc = relativeElem.ownerDocument , $getBoundingClientRectLeft(relativeElem) + $getScrollLeft((scrollingElement = $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body , scrollingElement?scrollingElement:doc.documentElement))) + $getScrollLeft(relativeElem) + $getScrollLeft_0(relativeElem.ownerDocument);
  }
  return (this$static.nativeEvent.clientX || 0) | 0;
}

function $getY(this$static){
  var doc, e, relativeElem, scrollingElement;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ((e.clientY || 0) | 0) - (doc = relativeElem.ownerDocument , $getBoundingClientRectTop(relativeElem) + (((scrollingElement = $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body , scrollingElement?scrollingElement:doc.documentElement).scrollTop || 0) | 0)) + ((relativeElem.scrollTop || 0) | 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return (this$static.nativeEvent.clientY || 0) | 0;
}

defineClass(632, 631, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 632);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(444, 632, {}, ClickEvent);
_.dispatch = function dispatch_1(handler){
  castTo(handler, 45).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 444);
defineClass(345, 1, {});
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_5(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 345);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(111, 345, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 111);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo($unsafeGet(registered, eventName), 107);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(50, 111, {50:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 50);
function maybeSwapArrowKeysForRtl(code_0, isRtl){
  isRtl && (code_0 == 39?(code_0 = 37):code_0 == 37 && (code_0 = 39));
  return code_0;
}

function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('mousedown', new MouseDownEvent);
}

function MouseDownEvent(){
}

defineClass(450, 632, {}, MouseDownEvent);
_.dispatch = function dispatch_2(handler){
  castTo(handler, 214).onMouseDown(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseDownEvent', 450);
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('mousemove', new MouseMoveEvent);
}

function MouseMoveEvent(){
}

defineClass(451, 632, {}, MouseMoveEvent);
_.dispatch = function dispatch_3(handler){
  castTo(handler, 302).onMouseMove(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseMoveEvent', 451);
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('mouseout', new MouseOutEvent);
}

function MouseOutEvent(){
}

defineClass(452, 632, {}, MouseOutEvent);
_.dispatch = function dispatch_4(handler){
  castTo(handler, 215).onMouseOut(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOutEvent', 452);
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_5 = new DomEvent$Type('mouseover', new MouseOverEvent);
}

function MouseOverEvent(){
}

defineClass(457, 632, {}, MouseOverEvent);
_.dispatch = function dispatch_5(handler){
  castTo(handler, 601).onMouseOver(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOverEvent', 457);
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = emptyMethod;
  TYPE_6 = new DomEvent$Type('mouseup', new MouseUpEvent);
}

function MouseUpEvent(){
}

defineClass(453, 632, {}, MouseUpEvent);
_.dispatch = function dispatch_6(handler){
  castTo(handler, 303).onMouseUp(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseUpEvent', 453);
function $clinit_MouseWheelEvent(){
  $clinit_MouseWheelEvent = emptyMethod;
  TYPE_7 = new DomEvent$Type('mousewheel', new MouseWheelEvent_0);
  new DomEvent$Type('DOMMouseScroll', new MouseWheelEvent_0);
}

function MouseWheelEvent_0(){
}

defineClass(235, 632, {}, MouseWheelEvent_0);
_.dispatch = function dispatch_7(handler){
  castTo(handler, 134).onMouseWheel(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_google_gwt_event_dom_client_MouseWheelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseWheelEvent', 235);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(464, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 464);
defineClass(634, 631, {});
var Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent', 634);
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = emptyMethod;
  TYPE_8 = new DomEvent$Type('touchcancel', new TouchCancelEvent);
}

function $dispatch_0(this$static, handler){
  !!this$static.nativeEvent && (this$static.nativeEvent.returnValue = false , undefined);
  handler.dragging = false;
}

function TouchCancelEvent(){
}

defineClass(461, 634, {}, TouchCancelEvent);
_.dispatch = function dispatch_8(handler){
  $dispatch_0(this, castTo(handler, 643));
}
;
_.getAssociatedType_0 = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchCancelEvent', 461);
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = emptyMethod;
  TYPE_9 = new DomEvent$Type('touchend', new TouchEndEvent);
}

function $dispatch_1(this$static, handler){
  $onTouchEnd(handler, this$static);
}

function TouchEndEvent(){
}

defineClass(460, 634, {}, TouchEndEvent);
_.dispatch = function dispatch_9(handler){
  $dispatch_1(this, castTo(handler, 644));
}
;
_.getAssociatedType_0 = function getAssociatedType_10(){
  return TYPE_9;
}
;
var TYPE_9;
var Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEndEvent', 460);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = emptyMethod;
  TYPE_10 = new DomEvent$Type('touchmove', new TouchMoveEvent);
}

function $dispatch_2(this$static, handler){
  var t;
  !!this$static.nativeEvent && (this$static.nativeEvent.returnValue = false , undefined);
  t = this$static.nativeEvent.touches[0];
  $doMouseMove(handler, $getRelativeX(t, handler.element));
}

function TouchMoveEvent(){
}

defineClass(459, 634, {}, TouchMoveEvent);
_.dispatch = function dispatch_10(handler){
  $dispatch_2(this, castTo(handler, 645));
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchMoveEvent', 459);
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = emptyMethod;
  TYPE_11 = new DomEvent$Type('touchstart', new TouchStartEvent);
}

function $dispatch_3(this$static, handler){
  var t;
  !!this$static.nativeEvent && (this$static.nativeEvent.returnValue = false , undefined);
  handler.dragging = false;
  t = this$static.nativeEvent.touches[0];
  $doMouseDown(handler, $getRelativeX(t, handler.element), false);
}

function TouchStartEvent(){
}

defineClass(458, 634, {}, TouchStartEvent);
_.dispatch = function dispatch_11(handler){
  $dispatch_3(this, castTo(handler, 642));
}
;
_.getAssociatedType_0 = function getAssociatedType_12(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchStartEvent', 458);
function CloseEvent_0(autoClosed){
  this.autoClosed = autoClosed;
}

function fire_0(source, autoClosed){
  var event_0;
  if (TYPE_12) {
    event_0 = new CloseEvent_0(autoClosed);
    source.fireEvent_0(event_0);
  }
}

defineClass(546, 624, {}, CloseEvent_0);
_.dispatch = function dispatch_12(handler){
  castTo(handler, 602).onClose(this);
}
;
_.getAssociatedType = function getAssociatedType_13(){
  return TYPE_12;
}
;
_.autoClosed = false;
var TYPE_12;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 546);
function ResizeEvent(width_0){
  this.width_0 = width_0;
}

function fire_1(source, width_0){
  var event_0;
  if (TYPE_13) {
    event_0 = new ResizeEvent(width_0);
    $fireEvent_0(source, event_0);
  }
}

defineClass(447, 624, {}, ResizeEvent);
_.dispatch = function dispatch_13(handler){
  castTo(handler, 188).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_14(){
  return TYPE_13;
}
;
_.width_0 = 0;
var TYPE_13;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 447);
function ValueChangeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_14) {
    event_0 = new ValueChangeEvent;
    source.fireEvent_0(event_0);
  }
}

defineClass(589, 624, {}, ValueChangeEvent);
_.dispatch = function dispatch_14(handler){
  castTo(handler, 600).onValueChange(this);
}
;
_.getAssociatedType = function getAssociatedType_15(){
  return TYPE_14;
}
;
var TYPE_14;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 589);
function $addHandler_0(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent_0(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 127)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(126, 1, {21:1}, HandlerManager, HandlerManager_0);
_.fireEvent_0 = function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 126);
defineClass(625, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 625);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_6(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l_0;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  if (!handler) {
    throw toJs(new NullPointerException_0('Cannot add a null handler'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l_0 = $ensureHandlerList(this$static, type_0, null) , l_0.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l_0;
  l_0 = $ensureHandlerList(this$static, type_0, source);
  l_0.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(castTo(handler, 29));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 15)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l_0, removed, sourceMap;
  l_0 = $getHandlerList(this$static, type_0, source);
  removed = l_0.remove_1(handler);
  removed && l_0.isEmpty() && (sourceMap = castTo($get_0(this$static.map_0, type_0), 155) , castTo($remove_12(sourceMap.hashCodeMap, source), 107) , sourceMap.hashCodeMap.size_0 + sourceMap.stringMap.size_0 == 0 && $remove_6(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 155);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 107);
  if (!handlers) {
    handlers = new ArrayList;
    $put_0(sourceMap.hashCodeMap, source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 155);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 107);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_2(c$iterator), 599);
        c.execute_0();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(347, 625, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 347);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(348, 347, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 348);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(465, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 465);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:castTo(causes.iterator().next_0(), 15));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_0(), 15);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_0(), 15);
    first?(first = false):(b.string += '; ' , b);
    $append_2(b, t.getMessage());
  }
  return b.string;
}

defineClass(127, 41, $intern_15, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 127);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(231, 127, $intern_15, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 231);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new Request$RequestImplIE8And9$1(xhr);
  callback.onResponseReceived(this$static, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  this$static.callback.onError(this$static, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(325, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 325);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(328, 161, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 328);
defineClass(621, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 621);
defineClass(326, 621, {});
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 326);
function Request$RequestImplIE8And9$1($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineClass(327, 326, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 327);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 120)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(null);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 120)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $sendRequest(this$static, callback){
  throwIfNull('callback', callback);
  return $doSend(this$static, callback);
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(159, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 159);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(324, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 324);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(137, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_6(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 137);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(95, 11, $intern_16, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 95);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(449, 95, $intern_16, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 449);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(574, 95, $intern_16, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 574);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0(name_0 + ' cannot be null'));
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function $getDefaultNative(){
  return ['USD', 'US$', 2, 'US$', '$'];
}

function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_6(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = buf.string.substr(0, 0)):0 > oldLength && (buf.string += valueOf_0(initUnidimensionalArray(C_classLit, $intern_17, 13, -oldLength, 15, 1)));
  }
}

function $format(this$static, date, timeZone){
  var ch_0, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()));
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_1(add_2(fromDouble_0(date.jsdate.getTime()), diff));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_1(add_2(fromDouble_0(date.jsdate.getTime()), diff));
  }
  toAppendTo = new StringBuilder_0;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch_0 = $charAt_0(this$static.pattern, i);
    if (ch_0 >= 97 && ch_0 <= 122 || ch_0 >= 65 && ch_0 <= 90) {
      for (j = i + 1; j < n && $charAt_0(this$static.pattern, j) == ch_0; ++j)
      ;
      $subFormat(toAppendTo, ch_0, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch_0 == 39) {
      ++i;
      if (i < n && $charAt_0(this$static.pattern, i) == 39) {
        toAppendTo.string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt_0(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw toJs(new IllegalArgumentException_0("Missing trailing '"));
        }
        j + 1 < n && $charAt_0(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_2(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.string += String.fromCharCode(ch_0);
      ++i;
    }
  }
  return toAppendTo.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value_0;
  time = fromDouble_0(date.jsdate.getTime());
  if (compare_0(time, 0) < 0) {
    value_0 = $intern_18 - toInt(mod(neg_0(time), $intern_18));
    value_0 == $intern_18 && (value_0 = 0);
  }
   else {
    value_0 = toInt(mod(time, $intern_18));
  }
  if (count == 1) {
    value_0 = $wnd.Math.min((value_0 + 50) / 100 | 0, 9);
    $append_0(buf, 48 + value_0 & $intern_19);
  }
   else if (count == 2) {
    value_0 = $wnd.Math.min((value_0 + 5) / 10 | 0, 99);
    $zeroPaddingNumber(buf, value_0, 2);
  }
   else {
    $zeroPaddingNumber(buf, value_0, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_0]);
      break;
    case 4:
      $append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_0]);
      break;
    case 3:
      $append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_0]);
      break;
    default:$zeroPaddingNumber(buf, value_0 + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getFullYear() - 1900 + 1900;
  value_0 < 0 && (value_0 = -value_0);
  switch (count) {
    case 1:
      buf.string += value_0;
      break;
    case 2:
      $zeroPaddingNumber(buf, value_0 % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value_0, count);
  }
}

function $getNextCharCountInPattern(start_0){
  var ch_0, next;
  ch_0 = (checkCriticalStringElementIndex(start_0, 'yyyyMMdd-HHmm'.length) , 'yyyyMMdd-HHmm'.charCodeAt(start_0));
  next = start_0 + 1;
  while (next < 'yyyyMMdd-HHmm'.length && (checkCriticalStringElementIndex(next, 'yyyyMMdd-HHmm'.length) , 'yyyyMMdd-HHmm'.charCodeAt(next) == ch_0)) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(castTo($get_1(this$static.patternParts, i), 152))) {
      if (!abut && i + 1 < len && $isNumeric(castTo($get_1(this$static.patternParts, i + 1), 152))) {
        abut = true;
        castTo($get_1(this$static.patternParts, i), 152).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_0('MLydhHmsSDkK', fromCodePoint($charAt_0(part.text_0, 0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $parsePattern(this$static){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < 'yyyyMMdd-HHmm'.length; i++) {
    ch_0 = (checkCriticalStringElementIndex(i, 'yyyyMMdd-HHmm'.length) , 'yyyyMMdd-HHmm'.charCodeAt(i));
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < 'yyyyMMdd-HHmm'.length && (checkCriticalStringElementIndex(i + 1, 'yyyyMMdd-HHmm'.length) , 'yyyyMMdd-HHmm'.charCodeAt(i + 1) == 32)) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < 'yyyyMMdd-HHmm'.length && (checkCriticalStringElementIndex(i + 1, 'yyyyMMdd-HHmm'.length) , 'yyyyMMdd-HHmm'.charCodeAt(i + 1) == 39)) {
          buf.string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.string += String.fromCharCode(ch_0);
      }
      continue;
    }
    if ($indexOf_0('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch_0)) > 0) {
      $addPart(this$static, buf, 0);
      buf.string += String.fromCharCode(ch_0);
      count = $getNextCharCountInPattern(i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < 'yyyyMMdd-HHmm'.length && (checkCriticalStringElementIndex(i + 1, 'yyyyMMdd-HHmm'.length) , 'yyyyMMdd-HHmm'.charCodeAt(i + 1) == 39)) {
        buf.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.string += String.fromCharCode(ch_0);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $subFormat(buf, ch_0, count, adjustedDate, adjustedTime, timezone){
  var value_0, value0, value1, value10, value2, value3, value4, value5, value6, value7, value8, value9;
  switch (ch_0) {
    case 71:
      value0 = adjustedDate.jsdate.getFullYear() - 1900 >= -1900?1:0;
      count >= 4?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Before Christ', 'Anno Domini'])[value0]):$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['BC', 'AD'])[value0]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value1 = adjustedTime.jsdate.getHours();
      value1 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value1, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value2 = adjustedDate.jsdate.getDay();
      count == 5?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value2]):count == 4?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value2]):$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value2]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['AM', 'PM'])[1]):$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['AM', 'PM'])[0]);
      break;
    case 104:
      value3 = adjustedTime.jsdate.getHours() % 12;
      value3 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value3, count);
      break;
    case 75:
      value4 = adjustedTime.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value4, count);
      break;
    case 72:
      value5 = adjustedTime.jsdate.getHours();
      $zeroPaddingNumber(buf, value5, count);
      break;
    case 99:
      value6 = adjustedDate.jsdate.getDay();
      count == 5?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value6]):count == 4?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value6]):count == 3?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value6]):$zeroPaddingNumber(buf, value6, 1);
      break;
    case 76:
      value7 = adjustedDate.jsdate.getMonth();
      count == 5?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value7]):count == 4?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value7]):count == 3?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value7]):$zeroPaddingNumber(buf, value7 + 1, count);
      break;
    case 81:
      value8 = adjustedDate.jsdate.getMonth() / 3 | 0;
      count < 4?$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Q1', 'Q2', 'Q3', 'Q4'])[value8]):$append_2(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value8]);
      break;
    case 100:
      value9 = adjustedDate.jsdate.getDate();
      $zeroPaddingNumber(buf, value9, count);
      break;
    case 109:
      value10 = adjustedTime.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value10, count);
      break;
    case 115:
      value_0 = adjustedTime.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_0, count);
      break;
    case 122:
      count < 4?$append_2(buf, timezone.tzNames[0]):$append_2(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_2(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_2(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_2(buf, $getISOTimeZoneString(timezone)):$append_2(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $zeroPaddingNumber(buf, value_0, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; i++) {
    value_0 < b && (buf.string += '0' , buf);
    b *= 10;
  }
  buf.string += value_0;
}

defineClass(569, 1, {});
var Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat', 569);
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = emptyMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap;
}

function DateTimeFormat(){
  $clinit_DateTimeFormat();
  this.patternParts = new ArrayList;
  this.pattern = 'yyyyMMdd-HHmm';
  $parsePattern(this);
}

function getFormat(dtfi){
  $clinit_DateTimeFormat_0();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0));
  dtf = null;
  dtfi == defaultDtfi && (dtf = castTo($getStringValue(cache, 'yyyyMMdd-HHmm'), 210));
  if (!dtf) {
    dtf = new DateTimeFormat;
    dtfi == defaultDtfi && $putStringValue(cache, 'yyyyMMdd-HHmm', dtf);
  }
  return dtf;
}

defineClass(210, 569, {210:1}, DateTimeFormat);
var cache;
var Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 210);
defineClass(638, 1, {});
var Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DefaultDateTimeFormatInfo', 638);
defineClass(639, 638, {});
var Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'DefaultDateTimeFormatInfo', 639);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_3, 139, 0, [RTL, LTR, DEFAULT]);
}

defineClass(139, 9, {139:1, 3:1, 10:1, 9:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 139, values_8);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_0 = new LocaleInfo;
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl);
  return this$static.dateTimeFormatInfo;
}

function $getNumberConstants(this$static){
  !this$static.numberConstants && (this$static.numberConstants = new NumberConstantsImpl_);
  return this$static.numberConstants;
}

function LocaleInfo(){
}

defineClass(454, 1, {}, LocaleInfo);
var instance_0;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 454);
function $clinit_NumberFormat(){
  $clinit_NumberFormat = emptyMethod;
  $getNumberConstants(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0));
}

function $addExponent(this$static, digits){
  var exponentDigits, i;
  digits.string += 'E';
  if (this$static.exponent < 0) {
    this$static.exponent = -this$static.exponent;
    digits.string += '-';
  }
  exponentDigits = '' + this$static.exponent;
  for (i = exponentDigits.length; i < this$static.minExponentDigits; ++i) {
    digits.string += '0';
  }
  digits.string += exponentDigits;
}

function $addZeroAndDecimal(this$static, digits, decimalSeparator){
  if (this$static.digitsLength == 0) {
    digits.string = digits.string.substr(0, 0) + '0' + digits.string.substr(0);
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
  if (this$static.decimalPosition < this$static.digitsLength || this$static.decimalSeparatorAlwaysShown) {
    $insert_4(digits, this$static.decimalPosition, String.fromCharCode(decimalSeparator));
    ++this$static.digitsLength;
  }
}

function $adjustFractionDigits(this$static, digits){
  var requiredDigits, toRemove;
  requiredDigits = this$static.decimalPosition + this$static.minimumFractionDigits;
  if (this$static.digitsLength < requiredDigits) {
    while (this$static.digitsLength < requiredDigits) {
      digits.string += '0';
      ++this$static.digitsLength;
    }
  }
   else {
    toRemove = this$static.decimalPosition + this$static.maximumFractionDigits;
    toRemove > this$static.digitsLength && (toRemove = this$static.digitsLength);
    while (toRemove > requiredDigits && $charAt_0(digits.string, toRemove - 1) == 48) {
      --toRemove;
    }
    if (toRemove < this$static.digitsLength) {
      $delete(digits, toRemove, this$static.digitsLength);
      this$static.digitsLength = toRemove;
    }
  }
}

function $computeExponent(this$static, digits){
  var remainder, strip;
  strip = 0;
  while (strip < this$static.digitsLength - 1 && $charAt_0(digits.string, strip) == 48) {
    ++strip;
  }
  if (strip > 0) {
    digits.string = digits.string.substr(0, 0) + '' + $substring(digits.string, strip);
    this$static.digitsLength -= strip;
    this$static.exponent -= strip;
  }
  if (this$static.maximumIntegerDigits > this$static.minimumIntegerDigits && this$static.maximumIntegerDigits > 0) {
    this$static.exponent += this$static.decimalPosition - 1;
    remainder = this$static.exponent % this$static.maximumIntegerDigits;
    remainder < 0 && (remainder += this$static.maximumIntegerDigits);
    this$static.decimalPosition = remainder + 1;
    this$static.exponent -= remainder;
  }
   else {
    this$static.exponent += this$static.decimalPosition - this$static.minimumIntegerDigits;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
  if (this$static.digitsLength == 1 && $charAt_0(digits.string, 0) == 48) {
    this$static.exponent = 0;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
}

function $format_0(this$static, number){
  var buf, isNegative, preRound, scale;
  if (isNaN(number)) {
    return 'NaN';
  }
  isNegative = number < 0 || number == 0 && 1 / number < 0;
  isNegative && (number = -number);
  buf = new StringBuilder;
  if (!isNaN(number) && !isFinite(number)) {
    $append_2(buf, isNegative?this$static.negativePrefix:this$static.positivePrefix);
    buf.string += '\u221E';
    $append_2(buf, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
    return buf.string;
  }
  number *= this$static.multiplier;
  scale = toScaledString(buf, number);
  preRound = buf.string.length + scale + this$static.maximumFractionDigits + 3;
  if (preRound > 0 && preRound < buf.string.length && $charAt_0(buf.string, preRound) == 57) {
    $propagateCarry(this$static, buf, preRound - 1);
    scale += buf.string.length - preRound;
    $delete(buf, preRound, buf.string.length);
  }
  $format_1(this$static, isNegative, buf, scale);
  return buf.string;
}

function $format_1(this$static, isNegative, digits, scale){
  var currentGroupingSize, decimalSeparator, groupingSeparator, useExponent, zeroChar;
  if (this$static.isCurrencyFormat) {
    decimalSeparator = (checkCriticalStringElementIndex(0, '.'.length) , '.'.charCodeAt(0));
    groupingSeparator = (checkCriticalStringElementIndex(0, ','.length) , ','.charCodeAt(0));
  }
   else {
    decimalSeparator = (checkCriticalStringElementIndex(0, '.'.length) , '.'.charCodeAt(0));
    groupingSeparator = (checkCriticalStringElementIndex(0, ','.length) , ','.charCodeAt(0));
  }
  this$static.exponent = 0;
  this$static.digitsLength = digits.string.length;
  this$static.decimalPosition = this$static.digitsLength + scale;
  useExponent = this$static.useExponentialNotation;
  currentGroupingSize = this$static.groupingSize;
  this$static.decimalPosition > 1024 && (useExponent = true);
  useExponent && $computeExponent(this$static, digits);
  $processLeadingZeros(this$static, digits);
  $roundValue(this$static, digits);
  $insertGroupingSeparators(this$static, digits, groupingSeparator, currentGroupingSize);
  $adjustFractionDigits(this$static, digits);
  $addZeroAndDecimal(this$static, digits, decimalSeparator);
  useExponent && $addExponent(this$static, digits);
  zeroChar = (checkCriticalStringElementIndex(0, '0'.length) , '0'.charCodeAt(0));
  zeroChar != 48 && $localizeDigits(digits, zeroChar);
  $insert_4(digits, 0, isNegative?this$static.negativePrefix:this$static.positivePrefix);
  $append_2(digits, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
}

function $getDigit(ch_0){
  var zeroChar;
  if (48 <= ch_0 && ch_0 <= 57) {
    return ch_0 - 48;
  }
   else {
    zeroChar = (checkCriticalStringElementIndex(0, '0'.length) , '0'.charCodeAt(0));
    return zeroChar <= ch_0 && ch_0 <= zeroChar + 9?ch_0 - zeroChar:-1;
  }
}

function $insertGroupingSeparators(this$static, digits, groupingSeparator, g){
  var i;
  if (g > 0) {
    for (i = g; i < this$static.decimalPosition; i += g + 1) {
      $insert_4(digits, this$static.decimalPosition - i, String.fromCharCode(groupingSeparator));
      ++this$static.decimalPosition;
      ++this$static.digitsLength;
    }
  }
}

function $localizeDigits(digits, zero){
  var ch_0, i, n;
  n = digits.string.length;
  for (i = 0; i < n; ++i) {
    ch_0 = $charAt_0(digits.string, i);
    ch_0 >= 48 && ch_0 <= 57 && $setCharAt(digits, i, ch_0 - 48 + zero & $intern_19);
  }
}

function $parse_0(this$static, text_0){
  var pos, result;
  pos = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [0]);
  result = $parse_1(this$static, text_0, pos);
  if (pos[0] == 0 || pos[0] != text_0.length) {
    throw toJs(new NumberFormatException(text_0));
  }
  return result;
}

function $parse_1(this$static, text_0, inOutPos){
  var gotNegative, gotNegativePrefix, gotNegativeSuffix, gotPositive, gotPositivePrefix, gotPositiveSuffix, ret, tempPos, valueOnly;
  gotPositivePrefix = $startsWith_0(text_0, this$static.positivePrefix, inOutPos[0]);
  gotNegativePrefix = $startsWith_0(text_0, this$static.negativePrefix, inOutPos[0]);
  gotPositiveSuffix = $endsWith(text_0, this$static.positiveSuffix);
  gotNegativeSuffix = $endsWith(text_0, this$static.negativeSuffix);
  gotPositive = gotPositivePrefix && gotPositiveSuffix;
  gotNegative = gotNegativePrefix && gotNegativeSuffix;
  if (gotPositive && gotNegative) {
    this$static.positivePrefix.length > this$static.negativePrefix.length?(gotNegative = false):this$static.positivePrefix.length < this$static.negativePrefix.length?(gotPositive = false):this$static.positiveSuffix.length > this$static.negativeSuffix.length?(gotNegative = false):this$static.positiveSuffix.length < this$static.negativeSuffix.length?(gotPositive = false):(gotNegative = false);
  }
   else if (!gotPositive && !gotNegative) {
    throw toJs(new NumberFormatException(text_0 + ' does not have either positive or negative affixes'));
  }
  if (gotPositive) {
    inOutPos[0] += this$static.positivePrefix.length;
    valueOnly = $substring_0(text_0, inOutPos[0], text_0.length - this$static.positiveSuffix.length);
  }
   else {
    inOutPos[0] += this$static.negativePrefix.length;
    valueOnly = $substring_0(text_0, inOutPos[0], text_0.length - this$static.negativeSuffix.length);
  }
  if ($equals_1(valueOnly, '\u221E')) {
    inOutPos[0] += '\u221E'.length;
    ret = Infinity;
  }
   else if ($equals_1(valueOnly, 'NaN')) {
    inOutPos[0] += 'NaN'.length;
    ret = NaN;
  }
   else {
    tempPos = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [0]);
    ret = $parseNumber(this$static, valueOnly, tempPos);
    inOutPos[0] += tempPos[0];
  }
  gotPositive?(inOutPos[0] += this$static.positiveSuffix.length):gotNegative && (inOutPos[0] += this$static.negativeSuffix.length);
  gotNegative && (ret = -ret);
  return ret;
}

function $parseAffix(this$static, pattern, start_0, affix, inNegativePattern){
  var ch_0, inQuote, len, pos;
  $delete(affix, 0, affix.string.length);
  inQuote = false;
  len = pattern.length;
  for (pos = start_0; pos < len; ++pos) {
    ch_0 = (checkCriticalStringElementIndex(pos, pattern.length) , pattern.charCodeAt(pos));
    if (ch_0 == 39) {
      if (pos + 1 < len && (checkCriticalStringElementIndex(pos + 1, pattern.length) , pattern.charCodeAt(pos + 1) == 39)) {
        ++pos;
        affix.string += "'";
      }
       else {
        inQuote = !inQuote;
      }
      continue;
    }
    if (inQuote) {
      affix.string += String.fromCharCode(ch_0);
    }
     else {
      switch (ch_0) {
        case 35:
        case 48:
        case 44:
        case 46:
        case 59:
          return pos - start_0;
        case 164:
          this$static.isCurrencyFormat = true;
          if (pos + 1 < len && (checkCriticalStringElementIndex(pos + 1, pattern.length) , pattern.charCodeAt(pos + 1) == 164)) {
            ++pos;
            if (pos < len - 2 && (checkCriticalStringElementIndex(pos + 1, pattern.length) , pattern.charCodeAt(pos + 1) == 164) && (checkCriticalStringElementIndex(pos + 2, pattern.length) , pattern.charCodeAt(pos + 2) == 164)) {
              pos += 2;
              $append_2(affix, $getSimpleCurrencySymbol(this$static.currencyData));
            }
             else {
              $append_2(affix, this$static.currencyData[0]);
            }
          }
           else {
            $append_2(affix, this$static.currencyData[1]);
          }

          break;
        case 37:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw toJs(new IllegalArgumentException_0('Too many percent/per mille characters in pattern "' + pattern + '"'));
            }
            this$static.multiplier = 100;
          }

          affix.string += '%';
          break;
        case 8240:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw toJs(new IllegalArgumentException_0('Too many percent/per mille characters in pattern "' + pattern + '"'));
            }
            this$static.multiplier = $intern_18;
          }

          affix.string += '\u2030';
          break;
        case 45:
          affix.string += '-';
          break;
        default:affix.string += String.fromCharCode(ch_0);
      }
    }
  }
  return len - start_0;
}

function $parseNumber(this$static, text_0, pos){
  var ch_0, decimal, digit, grouping, normalizedText, ret, sawDecimal, sawDigit, sawExponent, scale;
  sawDecimal = false;
  sawExponent = false;
  sawDigit = false;
  scale = 1;
  decimal = this$static.isCurrencyFormat?'.':'.';
  grouping = this$static.isCurrencyFormat?',':',';
  normalizedText = new StringBuilder;
  for (; pos[0] < text_0.length; ++pos[0]) {
    ch_0 = $charAt_0(text_0, pos[0]);
    digit = $getDigit(ch_0);
    if (digit >= 0 && digit <= 9) {
      $append_0(normalizedText, digit + 48 & $intern_19);
      sawDigit = true;
    }
     else if (ch_0 == (checkCriticalStringElementIndex(0, decimal.length) , decimal.charCodeAt(0))) {
      if (sawDecimal || sawExponent) {
        break;
      }
      normalizedText.string += '.';
      sawDecimal = true;
    }
     else if (ch_0 == (checkCriticalStringElementIndex(0, grouping.length) , grouping.charCodeAt(0))) {
      if (sawDecimal || sawExponent) {
        break;
      }
      continue;
    }
     else if (ch_0 == (checkCriticalStringElementIndex(0, 'E'.length) , 'E'.charCodeAt(0))) {
      if (sawExponent) {
        break;
      }
      normalizedText.string += 'E';
      sawExponent = true;
    }
     else if (ch_0 == 43 || ch_0 == 45) {
      normalizedText.string += String.fromCharCode(ch_0);
    }
     else if (ch_0 == (checkCriticalStringElementIndex(0, '%'.length) , '%'.charCodeAt(0))) {
      if (scale != 1) {
        break;
      }
      scale = 100;
      if (sawDigit) {
        ++pos[0];
        break;
      }
    }
     else if (ch_0 == (checkCriticalStringElementIndex(0, '\u2030'.length) , '\u2030'.charCodeAt(0))) {
      if (scale != 1) {
        break;
      }
      scale = $intern_18;
      if (sawDigit) {
        ++pos[0];
        break;
      }
    }
     else {
      break;
    }
  }
  try {
    ret = __parseAndValidateDouble(normalizedText.string);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 96)) {
      throw toJs(new NumberFormatException(text_0));
    }
     else 
      throw toJs($e0);
  }
  ret = ret / scale;
  return ret;
}

function $parsePattern_0(this$static, pattern){
  var affix, pos;
  pos = 0;
  affix = new StringBuilder;
  pos += $parseAffix(this$static, pattern, 0, affix, false);
  this$static.positivePrefix = affix.string;
  pos += $parseTrunk(this$static, pattern, pos, false);
  pos += $parseAffix(this$static, pattern, pos, affix, false);
  this$static.positiveSuffix = affix.string;
  if (pos < pattern.length && (checkCriticalStringElementIndex(pos, pattern.length) , pattern.charCodeAt(pos) == 59)) {
    ++pos;
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativePrefix = affix.string;
    pos += $parseTrunk(this$static, pattern, pos, true);
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativeSuffix = affix.string;
  }
   else {
    this$static.negativePrefix = '-' + this$static.positivePrefix;
    this$static.negativeSuffix = this$static.positiveSuffix;
  }
}

function $parseTrunk(this$static, pattern, start_0, ignorePattern){
  var ch_0, decimalPos, digitLeftCount, digitRightCount, effectiveDecimalPos, groupingCount, len, loop, n, pos, totalDigits, zeroDigitCount;
  decimalPos = -1;
  digitLeftCount = 0;
  zeroDigitCount = 0;
  digitRightCount = 0;
  groupingCount = -1;
  len = pattern.length;
  pos = start_0;
  loop = true;
  for (; pos < len && loop; ++pos) {
    ch_0 = (checkCriticalStringElementIndex(pos, pattern.length) , pattern.charCodeAt(pos));
    switch (ch_0) {
      case 35:
        zeroDigitCount > 0?++digitRightCount:++digitLeftCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 48:
        if (digitRightCount > 0) {
          throw toJs(new IllegalArgumentException_0("Unexpected '0' in pattern \"" + pattern + '"'));
        }

        ++zeroDigitCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 44:
        groupingCount = 0;
        break;
      case 46:
        if (decimalPos >= 0) {
          throw toJs(new IllegalArgumentException_0('Multiple decimal separators in pattern "' + pattern + '"'));
        }

        decimalPos = digitLeftCount + zeroDigitCount + digitRightCount;
        break;
      case 69:
        if (!ignorePattern) {
          if (this$static.useExponentialNotation) {
            throw toJs(new IllegalArgumentException_0('Multiple exponential symbols in pattern "' + pattern + '"'));
          }
          this$static.useExponentialNotation = true;
          this$static.minExponentDigits = 0;
        }

        while (pos + 1 < len && (checkCriticalStringElementIndex(pos + 1, pattern.length) , pattern.charCodeAt(pos + 1) == 48)) {
          ++pos;
          ignorePattern || ++this$static.minExponentDigits;
        }

        if (!ignorePattern && digitLeftCount + zeroDigitCount < 1 || this$static.minExponentDigits < 1) {
          throw toJs(new IllegalArgumentException_0('Malformed exponential pattern "' + pattern + '"'));
        }

        loop = false;
        break;
      default:--pos;
        loop = false;
    }
  }
  if (zeroDigitCount == 0 && digitLeftCount > 0 && decimalPos >= 0) {
    n = decimalPos;
    decimalPos == 0 && ++n;
    digitRightCount = digitLeftCount - n;
    digitLeftCount = n - 1;
    zeroDigitCount = 1;
  }
  if (decimalPos < 0 && digitRightCount > 0 || decimalPos >= 0 && (decimalPos < digitLeftCount || decimalPos > digitLeftCount + zeroDigitCount) || groupingCount == 0) {
    throw toJs(new IllegalArgumentException_0('Malformed pattern "' + pattern + '"'));
  }
  if (ignorePattern) {
    return pos - start_0;
  }
  totalDigits = digitLeftCount + zeroDigitCount + digitRightCount;
  this$static.maximumFractionDigits = decimalPos >= 0?totalDigits - decimalPos:0;
  if (decimalPos >= 0) {
    this$static.minimumFractionDigits = digitLeftCount + zeroDigitCount - decimalPos;
    this$static.minimumFractionDigits < 0 && (this$static.minimumFractionDigits = 0);
  }
  effectiveDecimalPos = decimalPos >= 0?decimalPos:totalDigits;
  this$static.minimumIntegerDigits = effectiveDecimalPos - digitLeftCount;
  if (this$static.useExponentialNotation) {
    this$static.maximumIntegerDigits = digitLeftCount + this$static.minimumIntegerDigits;
    this$static.maximumFractionDigits == 0 && this$static.minimumIntegerDigits == 0 && (this$static.minimumIntegerDigits = 1);
  }
  this$static.groupingSize = groupingCount > 0?groupingCount:0;
  this$static.decimalSeparatorAlwaysShown = decimalPos == 0 || decimalPos == totalDigits;
  return pos - start_0;
}

function $processLeadingZeros(this$static, digits){
  var i, prefix, strip;
  if (this$static.decimalPosition > this$static.digitsLength) {
    while (this$static.digitsLength < this$static.decimalPosition) {
      digits.string += '0';
      ++this$static.digitsLength;
    }
  }
  if (!this$static.useExponentialNotation) {
    if (this$static.decimalPosition < this$static.minimumIntegerDigits) {
      prefix = new StringBuilder;
      while (this$static.decimalPosition < this$static.minimumIntegerDigits) {
        prefix.string += '0';
        ++this$static.decimalPosition;
        ++this$static.digitsLength;
      }
      $insert_4(digits, 0, prefix.string);
    }
     else if (this$static.decimalPosition > this$static.minimumIntegerDigits) {
      strip = this$static.decimalPosition - this$static.minimumIntegerDigits;
      for (i = 0; i < strip; ++i) {
        if ($charAt_0(digits.string, i) != 48) {
          strip = i;
          break;
        }
      }
      if (strip > 0) {
        digits.string = digits.string.substr(0, 0) + '' + $substring(digits.string, strip);
        this$static.digitsLength -= strip;
        this$static.decimalPosition -= strip;
      }
    }
  }
}

function $propagateCarry(this$static, digits, i){
  var carry, digit;
  carry = true;
  while (carry && i >= 0) {
    digit = $charAt_0(digits.string, i);
    if (digit == 57) {
      $setCharAt(digits, i--, 48);
    }
     else {
      $setCharAt(digits, i, digit + 1 & $intern_19);
      carry = false;
    }
  }
  if (carry) {
    digits.string = digits.string.substr(0, 0) + '1' + digits.string.substr(0);
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
}

function $roundValue(this$static, digits){
  var i;
  if (this$static.digitsLength > this$static.decimalPosition + this$static.maximumFractionDigits && $charAt(digits, this$static.decimalPosition + this$static.maximumFractionDigits) >= 53) {
    i = this$static.decimalPosition + this$static.maximumFractionDigits - 1;
    $propagateCarry(this$static, digits, i);
  }
}

function NumberFormat(pattern, cdata, userSuppliedPattern){
  if (!cdata) {
    throw toJs(new IllegalArgumentException_0('Unknown currency code'));
  }
  this.pattern = pattern;
  this.currencyData = cdata;
  $parsePattern_0(this, this.pattern);
  if (!userSuppliedPattern && this.isCurrencyFormat) {
    this.minimumFractionDigits = this.currencyData[2] & 7;
    this.maximumFractionDigits = this.minimumFractionDigits;
  }
}

function NumberFormat_0(pattern, cdata){
  $clinit_NumberFormat();
  NumberFormat.call(this, pattern, cdata, true);
}

function toScaledString(buf, val){
  var dot, expDigits, expIdx, scale, startLen;
  startLen = buf.string.length;
  $append_2(buf, val.toPrecision(20));
  scale = 0;
  expIdx = $indexOf_1(buf.string, 'e', startLen);
  expIdx < 0 && (expIdx = $indexOf_1(buf.string, 'E', startLen));
  if (expIdx >= 0) {
    expDigits = expIdx + 1;
    expDigits < buf.string.length && $charAt_0(buf.string, expDigits) == 43 && ++expDigits;
    expDigits < buf.string.length && (scale = __parseAndValidateInt($substring(buf.string, expDigits)));
    $delete(buf, expIdx, buf.string.length);
  }
  dot = $indexOf_1(buf.string, '.', startLen);
  if (dot >= 0) {
    buf.string = $substring_0(buf.string, 0, dot) + '' + $substring(buf.string, dot + 1);
    scale -= buf.string.length - dot;
  }
  return scale;
}

defineClass(168, 1, {}, NumberFormat_0);
_.decimalPosition = 0;
_.decimalSeparatorAlwaysShown = false;
_.digitsLength = 0;
_.exponent = 0;
_.groupingSize = 3;
_.isCurrencyFormat = false;
_.maximumFractionDigits = 3;
_.maximumIntegerDigits = 40;
_.minExponentDigits = 0;
_.minimumFractionDigits = 0;
_.minimumIntegerDigits = 1;
_.multiplier = 1;
_.negativePrefix = '-';
_.negativeSuffix = '';
_.positivePrefix = '';
_.positiveSuffix = '';
_.useExponentialNotation = false;
var Lcom_google_gwt_i18n_client_NumberFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'NumberFormat', 168);
function $getISOTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_17, 13, 15, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_19;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_19;
  data_0[4] = data_0[4] + (offset % 60 / 10 | 0) & $intern_19;
  data_0[5] = data_0[5] + offset % 10 & $intern_19;
  return valueOf_1(data_0, data_0.length);
}

function $getRFCTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_17, 13, 15, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_19;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_19;
  data_0[3] = data_0[3] + (offset % 60 / 10 | 0) & $intern_19;
  data_0[4] = data_0[4] + offset % 10 & $intern_19;
  return valueOf_1(data_0, data_0.length);
}

function TimeZone(){
}

function composeGMTString(offset){
  var data_0;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_17, 13, 15, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data_0[3] = 43;
    offset = -offset;
  }
  data_0[4] = data_0[4] + ((offset / 60 | 0) / 10 | 0) & $intern_19;
  data_0[5] = data_0[5] + (offset / 60 | 0) % 10 & $intern_19;
  data_0[7] = data_0[7] + (offset % 60 / 10 | 0) & $intern_19;
  data_0[8] = data_0[8] + offset % 10 & $intern_19;
  return valueOf_1(data_0, data_0.length);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 2, 6, 1);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = offset / 60 | 0;
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + ('' + mins);
}

defineClass(591, 1, {}, TimeZone);
_.standardOffset = 0;
var Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client', 'TimeZone', 591);
function NumberConstantsImpl_(){
}

defineClass(571, 1, {}, NumberConstantsImpl_);
var Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.constants', 'NumberConstantsImpl_', 571);
function $getSimpleCurrencySymbol(this$static){
  return this$static[4] || this$static[1];
}

function DateTimeFormatInfoImpl(){
}

defineClass(590, 639, {}, DateTimeFormatInfoImpl);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 590);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineClass(152, 1, {152:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count = 0;
var Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat/PatternPart', 152);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  leafElementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_20;
  a1 = value_0 >> 22 & $intern_20;
  a2 = value_0 < 0?$intern_21:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l_0, m, h){
  return {l:l_0, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_22 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder_0 = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder_0 = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder_0 = neg(a);
      aIsMinValue && (remainder_0 = sub_0(remainder_0, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder_0 = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_20;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_20;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l_0, m;
  l_0 = a.l;
  if ((l_0 & l_0 - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l_0 == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l_0 != 0) {
    return numberOfTrailingZeros(l_0);
  }
  if (h == 0 && m != 0 && l_0 == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l_0 == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_23 + a.h * $intern_24;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_20;
  a.m = sum1 & $intern_20;
  a.h = sum2 & $intern_21;
  return true;
}

var remainder_0;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_20, sum1 & $intern_20, sum2 & $intern_21);
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_24) {
    a2 = round_int(value_0 / $intern_24);
    value_0 -= a2 * $intern_24;
  }
  a1 = 0;
  if (value_0 >= $intern_23) {
    a1 = round_int(value_0 / $intern_23);
    value_0 -= a1 * $intern_23;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_20;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_20;
  c2 += c1 >> 22;
  c1 &= $intern_20;
  c2 &= $intern_21;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_20;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_20;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21;
  return create0(neg0, neg1, neg2);
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_20, res1 & $intern_20, res2 & $intern_21);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_22) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_21:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_21:0;
    res1 = negative?$intern_20:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_20, res1 & $intern_20, res2 & $intern_21);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_21;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_20, res1 & $intern_20, res2 & $intern_21);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_20, sum1 & $intern_20, sum2 & $intern_21);
}

function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_23 + a.h * $intern_24;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_20, $intern_20, 524287);
  MIN_VALUE = create0(0, 0, $intern_22);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 15)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function add_2(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul(add_1(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_23;
  }
  if (a2 == $intern_21) {
    return big_0.l + big_0.m * $intern_23 - $intern_24;
  }
  return big_0;
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_25 < value_0 && value_0 < $intern_24) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gt(a, b){
  return compare_0(a, b) > 0;
}

function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_0(a, b) < 0;
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder_0));
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function neg_0(a){
  var result;
  if (isSmallLong0(a)) {
    result = 0 - a;
    if (!isNaN(result)) {
      return result;
    }
  }
  return createLongEmul(neg(a));
}

function neq(a, b){
  return compare_0(a, b) != 0;
}

function or_0(a, b){
  return createLongEmul(or(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_24;
    a3 = $intern_21;
  }
  a1 = round_int(value_0 / $intern_23);
  a0 = round_int(value_0 - a1 * $intern_23);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return a.l | a.m << 22;
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new circuitjs1);
}

function $adjustHorizontalConstraints(this$static, parentWidth, l_0){
  var leftPx, rightPx, widthPx;
  leftPx = l_0.left_0 * $getUnitSize(this$static, l_0.leftUnit, false);
  rightPx = l_0.right * $getUnitSize(this$static, l_0.rightUnit, false);
  widthPx = l_0.width_0 * $getUnitSize(this$static, l_0.widthUnit, false);
  if (l_0.setLeft && !l_0.setTargetLeft) {
    l_0.setLeft = false;
    if (l_0.setWidth) {
      l_0.setTargetRight = true;
      l_0.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l_0.targetRightUnit, false);
    }
     else {
      l_0.setTargetWidth = true;
      l_0.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l_0.targetWidthUnit, false);
    }
  }
   else if (l_0.setWidth && !l_0.setTargetWidth) {
    l_0.setWidth = false;
    if (l_0.setLeft) {
      l_0.setTargetRight = true;
      l_0.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l_0.targetRightUnit, false);
    }
     else {
      l_0.setTargetLeft = true;
      l_0.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l_0.targetLeftUnit, false);
    }
  }
   else if (l_0.setRight && !l_0.setTargetRight) {
    l_0.setRight = false;
    if (l_0.setWidth) {
      l_0.setTargetLeft = true;
      l_0.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l_0.targetLeftUnit, false);
    }
     else {
      l_0.setTargetWidth = true;
      l_0.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l_0.targetWidthUnit, false);
    }
  }
  l_0.setLeft = l_0.setTargetLeft;
  l_0.setRight = l_0.setTargetRight;
  l_0.setWidth = l_0.setTargetWidth;
  l_0.leftUnit = l_0.targetLeftUnit;
  l_0.rightUnit = l_0.targetRightUnit;
  l_0.widthUnit = l_0.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l_0){
  var bottomPx, heightPx, topPx;
  topPx = l_0.top_0 * $getUnitSize(this$static, l_0.topUnit, true);
  bottomPx = l_0.bottom * $getUnitSize(this$static, l_0.bottomUnit, true);
  heightPx = l_0.height * $getUnitSize(this$static, l_0.heightUnit, true);
  if (l_0.setTop && !l_0.setTargetTop) {
    l_0.setTop = false;
    if (l_0.setHeight) {
      l_0.setTargetBottom = true;
      l_0.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l_0.targetBottomUnit, true);
    }
     else {
      l_0.setTargetHeight = true;
      l_0.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l_0.targetHeightUnit, true);
    }
  }
   else if (l_0.setHeight && !l_0.setTargetHeight) {
    l_0.setHeight = false;
    if (l_0.setTop) {
      l_0.setTargetBottom = true;
      l_0.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l_0.targetBottomUnit, true);
    }
     else {
      l_0.setTargetTop = true;
      l_0.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l_0.targetTopUnit, true);
    }
  }
   else if (l_0.setBottom && !l_0.setTargetBottom) {
    l_0.setBottom = false;
    if (l_0.setHeight) {
      l_0.setTargetTop = true;
      l_0.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l_0.targetTopUnit, true);
    }
     else {
      l_0.setTargetHeight = true;
      l_0.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l_0.targetHeightUnit, true);
    }
  }
  l_0.setTop = l_0.setTargetTop;
  l_0.setBottom = l_0.setTargetBottom;
  l_0.setHeight = l_0.setTargetHeight;
  l_0.topUnit = l_0.targetTopUnit;
  l_0.bottomUnit = l_0.targetBottomUnit;
  l_0.heightUnit = l_0.targetHeightUnit;
}

function $attachChild(this$static, child, userObject){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer(container, child, userObject);
  $add_6(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration, callback){
  var child, l_0, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new ArrayList$1(this$static.layers); l$iterator0.i < l$iterator0.this$01.array.length;) {
      l_0 = castTo($next_2(l$iterator0), 128);
      l_0.left_0 = l_0.sourceLeft = l_0.targetLeft;
      l_0.top_0 = l_0.sourceTop = l_0.targetTop;
      l_0.right = l_0.sourceRight = l_0.targetRight;
      l_0.bottom = l_0.sourceBottom = l_0.targetBottom;
      l_0.width_0 = l_0.sourceWidth = l_0.targetWidth;
      l_0.height = l_0.sourceHeight = l_0.targetHeight;
      l_0.setLeft = l_0.setTargetLeft;
      l_0.setTop = l_0.setTargetTop;
      l_0.setRight = l_0.setTargetRight;
      l_0.setBottom = l_0.setTargetBottom;
      l_0.setWidth = l_0.setTargetWidth;
      l_0.setHeight = l_0.setTargetHeight;
      l_0.leftUnit = l_0.targetLeftUnit;
      l_0.topUnit = l_0.targetTopUnit;
      l_0.rightUnit = l_0.targetRightUnit;
      l_0.bottomUnit = l_0.targetBottomUnit;
      l_0.widthUnit = l_0.targetWidthUnit;
      l_0.heightUnit = l_0.targetHeightUnit;
      $layout_0(this$static.impl, l_0);
      !!callback && (child = l_0.userObject , instanceOf(child, 108) && castTo(child, 108).onResize_0());
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new ArrayList$1(this$static.layers); l$iterator.i < l$iterator.this$01.array.length;) {
    l_0 = castTo($next_2(l$iterator), 128);
    $adjustHorizontalConstraints(this$static, parentWidth, l_0);
    $adjustVerticalConstraints(this$static, parentHeight, l_0);
  }
  this$static.animation = new Layout$1(this$static, callback);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_10(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImplIE8;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(232, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 232);
function Layout$1(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
  Animation.call(this);
}

defineClass(382, 196, {}, Layout$1);
_.onCancel = function onCancel_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onComplete = function onComplete_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onUpdate = function onUpdate(progress){
  var child, l_0, l$iterator;
  for (l$iterator = new ArrayList$1(this.this$01.layers); l$iterator.i < l$iterator.this$01.array.length;) {
    l_0 = castTo($next_2(l$iterator), 128);
    l_0.setTargetLeft && (l_0.left_0 = l_0.sourceLeft + (l_0.targetLeft - l_0.sourceLeft) * progress);
    l_0.setTargetRight && (l_0.right = l_0.sourceRight + (l_0.targetRight - l_0.sourceRight) * progress);
    l_0.setTargetTop && (l_0.top_0 = l_0.sourceTop + (l_0.targetTop - l_0.sourceTop) * progress);
    l_0.setTargetBottom && (l_0.bottom = l_0.sourceBottom + (l_0.targetBottom - l_0.sourceBottom) * progress);
    l_0.setTargetWidth && (l_0.width_0 = l_0.sourceWidth + (l_0.targetWidth - l_0.sourceWidth) * progress);
    l_0.setTargetHeight && (l_0.height = l_0.sourceHeight + (l_0.targetHeight - l_0.sourceHeight) * progress);
    $layout_0(this.this$01.impl, l_0);
    !!this.val$callback2 && (child = l_0.userObject , instanceOf(child, 108) && castTo(child, 108).onResize_0());
  }
}
;
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 382);
function $setBottomHeight(this$static, bottom, bottomUnit, height, heightUnit){
  this$static.setTargetBottom = this$static.setTargetHeight = true;
  this$static.setTargetTop = false;
  this$static.targetBottom = bottom;
  this$static.targetHeight = height;
  this$static.targetBottomUnit = bottomUnit;
  this$static.targetHeightUnit = heightUnit;
}

function $setLeftRight(this$static, left, leftUnit, right, rightUnit){
  this$static.setTargetLeft = this$static.setTargetRight = true;
  this$static.setTargetWidth = false;
  this$static.targetLeft = left;
  this$static.targetRight = right;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetRightUnit = rightUnit;
}

function $setLeftWidth(this$static, left, leftUnit, width_0, widthUnit){
  this$static.setTargetLeft = this$static.setTargetWidth = true;
  this$static.setTargetRight = false;
  this$static.targetLeft = left;
  this$static.targetWidth = width_0;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setRightWidth(this$static, right, rightUnit, width_0, widthUnit){
  this$static.setTargetRight = this$static.setTargetWidth = true;
  this$static.setTargetLeft = false;
  this$static.targetRight = right;
  this$static.targetWidth = width_0;
  this$static.targetRightUnit = rightUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setTopBottom(this$static, top_0, topUnit, bottom, bottomUnit){
  this$static.setTargetTop = this$static.setTargetBottom = true;
  this$static.setTargetHeight = false;
  this$static.targetTop = top_0;
  this$static.targetBottom = bottom;
  this$static.targetTopUnit = topUnit;
  this$static.targetBottomUnit = bottomUnit;
}

function $setTopHeight(this$static, top_0, topUnit, height, heightUnit){
  this$static.setTargetTop = this$static.setTargetHeight = true;
  this$static.setTargetBottom = false;
  this$static.targetTop = top_0;
  this$static.targetHeight = height;
  this$static.targetTopUnit = topUnit;
  this$static.targetHeightUnit = heightUnit;
}

function Layout$Layer(container, child, userObject){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineClass(128, 1, {128:1}, Layout$Layer);
_.bottom = 0;
_.height = 0;
_.left_0 = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 128);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container;
  container = $createElement($doc, 'div');
  container.appendChild(child);
  container.style['position'] = ($clinit_Style$Position() , 'absolute');
  container.style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  $fillParent(child);
  parent_0.insertBefore(container, null);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['left'] = ($clinit_Style$Unit() , '0.0px');
  style['top'] = '0.0px';
  style['right'] = '0.0px';
  style['bottom'] = '0.0px';
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ((this$static.relativeRuler.offsetWidth || 0) | 0) / 10;
    case 3:
      return ((this$static.relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.1;
    case 8:
      return ((fixedRuler.offsetWidth || 0) | 0) * $intern_26;
    case 6:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.254;
    case 4:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.00353;
    case 5:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  parent_0.style['position'] = ($clinit_Style$Position() , 'relative');
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $removeChild_1(container, child){
  var parent_0, parent0, style;
  parent0 = $getParentElement(container);
  !!parent0 && parent0.removeChild(container);
  $getParentElement(child) == container && (parent_0 = $getParentElement(child) , !!parent_0 && parent_0.removeChild(child));
  style = child.style;
  style['position'] = '';
  style['left'] = '';
  style['top'] = '';
  style['width'] = '';
  style['height'] = '';
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $createElement($doc, 'div');
  ruler.innerHTML = '&nbsp;';
  style = ruler.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['zIndex'] = '-32767';
  style['top'] = -20 + heightUnit.getType();
  style['width'] = 10 + widthUnit.getType();
  style['height'] = 10 + heightUnit.getType();
  style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  $set_0(($clinit_State() , HIDDEN), ruler, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_3, 189, 8, [($clinit_Boolean() , true)]));
  return ruler;
}

defineClass(633, 1, {});
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 633);
function $layout_0(this$static, layer){
  var oldDisplay, style;
  style = layer.container.style;
  setLayer(layer.container, layer);
  if (layer.visible) {
    oldDisplay = style['display'];
    style['display'] = '';
    oldDisplay.length > 0 && $updateVisibility(this$static, layer.container);
  }
   else {
    style['display'] = ($clinit_Style$Display() , 'none');
  }
  layer.setLeft?$setValue(this$static, layer, 'left', layer.left_0, layer.leftUnit, false, false):(style['left'] = '' , undefined);
  layer.setRight?$setValue(this$static, layer, 'right', layer.right, layer.rightUnit, false, false):(style['right'] = '' , undefined);
  layer.setTop?$setValue(this$static, layer, 'top', layer.top_0, layer.topUnit, true, false):(style['top'] = '' , undefined);
  layer.setBottom?$setValue(this$static, layer, 'bottom', layer.bottom, layer.bottomUnit, true, false):(style['bottom'] = '' , undefined);
  layer.setWidth?$setValue(this$static, layer, 'width', layer.width_0, layer.widthUnit, false, true):(style['width'] = '' , undefined);
  layer.setHeight?$setValue(this$static, layer, 'height', layer.height, layer.heightUnit, true, true):(style['height'] = '' , undefined);
  style = layer.child.style;
  switch (2) {
    case 2:
      style['left'] = ($clinit_Style$Unit() , '0.0px');
      style['right'] = '0.0px';
  }
  switch (2) {
    case 2:
      style['top'] = ($clinit_Style$Unit() , '0.0px');
      style['bottom'] = '0.0px';
  }
}

function $removeLayerRefs(parent_0){
  for (var i = 0; i < parent_0.childNodes.length; ++i) {
    var container = parent_0.childNodes[i];
    container.__layer && (container.__layer = null);
  }
}

function $setValue(this$static, layer, prop, value_0, unit, vertical, noNegative){
  switch (unit.ordinal) {
    case 0:
    case 1:
      break;
    default:value_0 = value_0 * $getUnitSizeInPixels(this$static, layer.container, unit, vertical);
      value_0 = round_int(value_0 + 0.5);
      $clinit_Style$Unit();
  }
  noNegative && value_0 < 0 && (value_0 = 0);
  layer.container.style[prop] = value_0 + 'px';
}

function $updateVisibility(this$static, container){
  var i, layer, node, nodes;
  layer = container.__layer;
  !!layer && $layout_0(this$static, layer);
  nodes = container.childNodes;
  for (i = 0; i < nodes.length; ++i) {
    node = nodes[i];
    node.nodeType == 1 && $updateVisibility(this$static, node);
  }
}

function LayoutImplIE8(){
  $clinit_LayoutImpl();
}

function setLayer(container, layer){
  container.__layer = layer;
}

defineClass(467, 633, {}, LayoutImplIE8);
var Lcom_google_gwt_layout_client_LayoutImplIE8_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImplIE8', 467);
function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function $test(this$static, input_0){
  return this$static.test(input_0);
}

function ImageResourcePrototype(url_0){
  this.left_0 = 0;
  this.top_0 = 0;
  this.height = 9;
  this.width_0 = 5;
  this.url_0 = url_0;
}

defineClass(572, 1, {}, ImageResourcePrototype);
_.height = 0;
_.left_0 = 0;
_.top_0 = 0;
_.width_0 = 0;
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 572);
function $append(this$static, styles){
  $append_2(this$static.sb, styles.css);
  return this$static;
}

function SafeStylesBuilder(){
  this.sb = new StringBuilder;
}

defineClass(575, 1, {}, SafeStylesBuilder);
var Lcom_google_gwt_safecss_shared_SafeStylesBuilder_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesBuilder', 575);
function SafeStylesString(css){
  verifySafeStylesConstraints(css);
  this.css = css;
}

defineClass(119, 1, {649:1, 119:1, 3:1}, SafeStylesString);
_.equals_0 = function equals_1(obj){
  if (!instanceOf(obj, 119)) {
    return false;
  }
  return $equals_1(this.css, castTo(castTo(obj, 649), 119).css);
}
;
_.hashCode_0 = function hashCode_3(){
  return getHashCode_0(this.css);
}
;
var Lcom_google_gwt_safecss_shared_SafeStylesString_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesString', 119);
function verifySafeStylesConstraints(styles){
  if (styles == null) {
    throw toJs(new NullPointerException_0('css is null'));
  }
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(594, 1, $intern_27, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals_0 = function equals_2(obj){
  if (!instanceOf(obj, 186)) {
    return false;
  }
  return $equals_1(this.html, castTo(obj, 186).asString());
}
;
_.hashCode_0 = function hashCode_4(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 594);
function SafeHtmlString(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(84, 1, $intern_27, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals_0 = function equals_3(obj){
  if (!instanceOf(obj, 186)) {
    return false;
  }
  return $equals_1(this.html, castTo(obj, 186).asString());
}
;
_.hashCode_0 = function hashCode_5(){
  return getHashCode_0(this.html);
}
;
_.toString_0 = function toString_8(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 84);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString('');
  HTML_CHARS_RE = new RegExp('[&<>\'"]');
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  if (!$test(HTML_CHARS_RE, s)) {
    return s;
  }
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, HTML_CHARS_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(154, 1, {646:1, 154:1}, SafeUriString);
_.equals_0 = function equals_4(obj){
  if (!instanceOf(obj, 154)) {
    return false;
  }
  return $equals_1(this.uri_0, castTo(castTo(obj, 646), 154).uri_0);
}
;
_.hashCode_0 = function hashCode_6(){
  return getHashCode_0(this.uri_0);
}
;
_.toString_0 = function toString_9(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 154);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function $setItem(this$static, data_0){
  $setItem_0(this$static.storage, 'circuitClipboard', data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(169, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 169);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem(storage, key){
  return $wnd[storage].getItem(key);
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

defineClass(636, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 636);
function PassthroughParser(){
}

defineClass(582, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 582);
function PassthroughRenderer(){
}

defineClass(581, 636, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 581);
defineClass(595, 1, {29:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper', 595);
function dispatchEvent_1(evt, elem){
  var eventListener, maybeListener;
  eventListener = (maybeListener = elem.__listener , isMyListener(maybeListener)?maybeListener:null);
  if (!eventListener) {
    return false;
  }
  dispatchEvent_2(evt, elem, eventListener);
  return true;
}

function dispatchEvent_2(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    evt.returnValue = false;
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

function sinkEvents_0(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_1(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_1('CSS1Compat', allowedModes[0]) && $equals_1('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_15 && (TYPE_15 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler_0(handlers_0, TYPE_15, handler);
}

function getTypeInt(typeName){
  return $eventGetTypeInt(typeName);
}

function releaseCapture_0(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function setCapture_0(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

function sinkEvents_1(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var handlers_0;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_15 && !!handlers && $isEventHandled(handlers, TYPE_15)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent_0(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(344, 624, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_15(handler){
  castTo(handler, 598).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType_16(){
  return TYPE_15;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_15, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 344);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImplIE8;
  historyEventSource = new History$HistoryEventSource;
  token = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || hashToken.length == 0) {
    return '';
  }
  return $decode(hashToken.substr(1));
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals_1(hashToken, token)) {
    token = hashToken;
    fire_2(historyEventSource);
  }
}

var historyEventSource, token;
function $addValueChangeHandler(this$static, handler){
  return $addHandler_0(this$static.handlers, (!TYPE_14 && (TYPE_14 = new GwtEvent$Type) , TYPE_14), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(578, 1, {21:1}, History$HistoryEventSource);
_.fireEvent_0 = function fireEvent_1(event_0){
  $fireEvent_0(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 578);
defineClass(579, 1, {});
_.attachListener = function attachListener(){
  var handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}
;
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 579);
function History$HistoryImplIE8(){
  this.attachListener();
}

defineClass(580, 579, {}, History$HistoryImplIE8);
_.attachListener = function attachListener_0(){
  var handler = $entry(onHashChanged);
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = function(){
    var ex;
    try {
      handler();
    }
     catch (e) {
      ex = e;
    }
    if (oldHandler != null) {
      try {
        oldHandler();
      }
       catch (e) {
        ex = ex || e;
      }
    }
    if (ex != null) {
      throw ex;
    }
  }
  ;
}
;
var Lcom_google_gwt_user_client_History$HistoryImplIE8_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImplIE8', 580);
function $decode(toDecode){
  return $wnd.decodeURI(toDecode.replace('%23', '#'));
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_12?TYPE_12:(TYPE_12 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_13 && (TYPE_13 = new GwtEvent$Type) , TYPE_13), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function confirm_0(msg){
  return $wnd.confirm(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), false);
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent_0(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), width_0);
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_16 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(346, 624, {}, Window$ClosingEvent);
_.dispatch = function dispatch_16(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_17(){
  return TYPE_16;
}
;
var TYPE_16;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 346);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(194, 126, {21:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 194);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return $intern_28;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_29;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_22;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_23;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return $intern_30;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return isMyListener(maybeListener)?maybeListener:null;
}

function isMyListener(object){
  return !instanceOfJso(object) && instanceOf(object, 24);
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_2($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = ($clinit_Impl() , $moduleName).replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $insertChild(parent_0, child, index_0){
  index_0 >= parent_0.children.length?parent_0.appendChild(child):parent_0.insertBefore(child, parent_0.children[index_0]);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & $intern_28 && (elem.onfocus = bits & $intern_28?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & 32768 && (elem.nodeName == 'IFRAME'?bits & 32768?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & 32768?callDispatchUnhandledEvent:null));
  chMask & $intern_29 && (elem.onerror = bits & $intern_29?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & $intern_22 && (elem.onpaste = bits & $intern_22?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_0();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(445, 1, {}, WindowImplIE$1);
_.execute_0 = function execute_0(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 445);
function WindowImplIE$2(){
}

defineClass(446, 1, {}, WindowImplIE$2);
_.execute_0 = function execute_1(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 446);
function $adopt(this$static, child){
  $setParent(child, this$static);
}

defineClass(627, 17, $intern_31);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 627);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_4(this$static.children_0, child);
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.children_0.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $getWidgetIndex(this$static, child){
  return $indexOf(this$static.children_0, child);
}

function $insert(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_3(this$static.children_0, child, beforeIndex);
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static){
  return $remove_3(this$static, $get(this$static.children_0));
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    $removeChild($getParentElement(elem), elem);
    $remove_5(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
  this.children_0 = new WidgetCollection(this);
}

defineClass(164, 627, $intern_31);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children_0);
}
;
_.remove = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 164);
function $add_0(this$static, w){
  $add(this$static, w, this$static.element);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(436, 164, $intern_31);
_.remove = function remove_1(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 436);
function create_1(resource){
  return new ClippedImagePrototype(resource.url_0, resource.left_0, resource.top_0, resource.width_0, resource.height);
}

defineClass(635, 1, {});
var Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbstractImagePrototype', 635);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ($clinit_LocaleInfo() , ALIGN_LEFT);
  ALIGN_LOCALE_END = ALIGN_RIGHT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_END, ALIGN_LOCALE_START, ALIGN_RIGHT;
function Anchor_0(text_0, href_0){
  $setElement(this, $createElement($doc, 'a'));
  this.element.className = 'gwt-Anchor';
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
  $setHref(this.element, href_0);
}

defineClass(153, 198, {59:1, 67:1, 71:1, 78:1, 55:1, 56:1, 60:1, 61:1, 63:1, 62:1, 64:1, 65:1, 66:1, 69:1, 70:1, 68:1, 72:1, 76:1, 74:1, 75:1, 73:1, 77:1, 82:1, 81:1, 80:1, 79:1, 25:1, 21:1, 135:1, 88:1, 24:1, 185:1, 157:1, 39:1, 19:1, 156:1, 26:1, 57:1, 58:1, 16:1, 17:1}, Anchor_0);
_.getTabIndex = function getTabIndex_0(){
  return this.element.tabIndex;
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  $setTabIndex(this.element, index_0);
}
;
var Lcom_google_gwt_user_client_ui_Anchor_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Anchor', 153);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_0(), 17);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 15)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(378, 231, $intern_15, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 378);
function AttachDetachException$1(){
}

defineClass(379, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_2(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 379);
function AttachDetachException$2(){
}

defineClass(380, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_3(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 380);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(234, 198, $intern_32);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 234);
function Button(html){
  ButtonBase.call(this, $doc.createElement("<BUTTON type='button'><\/BUTTON>"));
  this.element.className = 'gwt-Button';
  $setInnerHTML(this.element, html);
}

defineClass(47, 234, $intern_32, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 47);
function $setCellVerticalAlignment(td, align_0){
  td.style['verticalAlign'] = align_0.verticalAlignString;
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = $createElement($doc, 'table');
  this.body_0 = $createElement($doc, 'tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(233, 164, $intern_31);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 233);
function $addValueChangeHandler_0(this$static, handler){
  if (!this$static.valueChangeHandlerInitialized) {
    $addDomHandler(this$static, new CheckBox$1(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
    this$static.valueChangeHandlerInitialized = true;
  }
  return $addHandler(this$static, handler, (!TYPE_14 && (TYPE_14 = new GwtEvent$Type) , TYPE_14));
}

function $getValue(this$static){
  return this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?true:false):($clinit_Boolean() , this$static.inputElem.defaultChecked?true:false);
}

function $setValue_0(this$static, value_0){
  var oldValue;
  value_0 == null && (value_0 = ($clinit_Boolean() , FALSE));
  oldValue = this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?true:false):($clinit_Boolean() , this$static.inputElem.defaultChecked?true:false);
  $setChecked(this$static.inputElem, (checkCriticalNotNull(value_0) , value_0));
  $setDefaultChecked(this$static.inputElem, (checkCriticalNotNull(value_0) , value_0));
  checkCriticalNotNull(value_0);
  if (value_0 == oldValue) {
    return;
  }
}

function CheckBox(elem){
  var uid;
  ButtonBase.call(this, $createElement($doc, 'span'));
  this.inputElem = elem;
  this.labelElem = $createElement($doc, 'label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  this.inputElem['id'] = uid;
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper(this.labelElem);
  !!this.inputElem && (this.inputElem.tabIndex = 0 , undefined);
}

function CheckBox_0(label_0){
  var e;
  CheckBox.call(this, (e = $doc.createElement('INPUT') , e.type = 'checkbox' , e.value = 'on' , e));
  this.element.className = 'gwt-CheckBox';
  $setTextOrHtml(this.directionalTextHelper, label_0, false);
}

defineClass(209, 234, $intern_33);
_.getTabIndex = function getTabIndex_1(){
  return this.inputElem.tabIndex;
}
;
_.onLoad = function onLoad_0(){
  this.inputElem.__listener = this;
}
;
_.onUnload = function onUnload_0(){
  this.inputElem.__listener = null;
  $setValue_0(this, this.attached?($clinit_Boolean() , this.inputElem.checked?true:false):($clinit_Boolean() , this.inputElem.defaultChecked?true:false));
}
;
_.setTabIndex = function setTabIndex_1(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents_1(this.inputElem, eventBitsToAdd | (this.inputElem.__eventBits || 0)):this.eventsToSink == -1?sinkEvents_0(this.element, eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
_.valueChangeHandlerInitialized = false;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 209);
function CheckBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(568, 1, $intern_34, CheckBox$1);
_.onClick = function onClick(event_0){
  var lastArg;
  fire_2((lastArg = this.this$01 , $getValue(this.this$01) , lastArg));
}
;
var Lcom_google_gwt_user_client_ui_CheckBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox/1', 568);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw toJs(new IllegalStateException_0('initWidget() is not called yet'));
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw toJs(new IllegalStateException_0('Composite.initWidget() may only be called once.'));
  }
  if (!widget) {
    throw toJs(new NullPointerException_0('widget cannot be null'));
  }
  $removeFromParent(widget);
  elem = widget.element;
  this$static.element = elem;
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(629, 17, $intern_5);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  this.element.__listener = this;
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this.widget);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 629);
function $remove_2(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    $appendChild(this$static.getContainerElement(), resolve(this$static.widget.element));
    $setParent(w, this$static);
  }
}

function SimplePanel(elem){
  $setElement_0(this, elem);
}

defineClass(195, 627, $intern_31);
_.getContainerElement = function getContainerElement(){
  return this.element;
}
;
_.iterator = function iterator_1(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_2(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 195);
function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    this$static.element.style['visibility'] = 'hidden';
    this$static.isAnimationEnabled = false;
    this$static.show();
  }
  elem = this$static.element;
  elem.style['left'] = ($clinit_Style$Unit() , '0.0px');
  elem.style['top'] = '0.0px';
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, $wnd.Math.max($getScrollLeft_0($doc) + left, 0), $wnd.Math.max($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      this$static.element.style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      this$static.element.style['visibility'] = 'visible';
      $run(this$static.resizeAnimation, 200, now_1(), null);
    }
     else {
      this$static.element.style['visibility'] = 'visible';
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl(this$static.element, target);
  }
  return false;
}

function $getOffsetHeight_0(this$static){
  return $getPropertyInt(this$static.element, 'offsetHeight');
}

function $getOffsetWidth_0(this$static){
  return $getPropertyInt(this$static.element, 'offsetWidth');
}

function $hide(this$static, autoClosed){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_0(this$static, autoClosed);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight_0(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth_0(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = $eventGetTypeInt(nativeEvent.type);
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        return;
      }

    case 4:
    case 1048576:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        this$static.hide(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_23:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case $intern_28:
      {
        target = nativeEvent.srcElement;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setAnimationType(this$static, type_0){
  this$static.animType = type_0?type_0:($clinit_PopupPanel$AnimationType() , CENTER_1);
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element;
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setPopupPositionAndShow(this$static, callback){
  this$static.element.style['visibility'] = 'hidden';
  this$static.show();
  callback.setPosition($getPropertyInt(this$static.element, 'offsetWidth'), $getPropertyInt(this$static.element, 'offsetHeight'));
  this$static.element.style['visibility'] = 'visible';
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

function PopupPanel(){
  SimplePanel.call(this, $createElement($doc, 'div'));
  this.glassResizer = new PopupPanel$1;
  this.animType = ($clinit_PopupPanel$AnimationType() , CENTER_1);
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, $createElement($doc, 'div'));
  $setPopupPosition(this, 0, 0);
  $getParentElement($getFirstChildElement(this.element)).className = 'gwt-PopupPanel';
  $getFirstChildElement(this.element).className = 'popupContent';
}

defineClass(43, 195, $intern_35);
_.getContainerElement = function getContainerElement_0(){
  return $getFirstChildElement(this.element);
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getParentElement($getFirstChildElement(this.element));
}
;
_.hide = function hide(autoClosed){
  $hide(this, autoClosed);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  event_0.isFirstHandler && false && (event_0.isCanceled = true);
}
;
_.onUnload = function onUnload_1(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight_0 = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setWidth_0 = function setWidth_0(width_0){
  this.desiredWidth = width_0;
  $maybeUpdateSize(this);
  width_0.length == 0 && (this.desiredWidth = null);
}
;
_.show = function show(){
  $show(this);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 43);
function $setWidget_1(this$static, w){
  $setWidget(this$static.decPanel, w);
  $maybeUpdateSize(this$static);
}

function DecoratedPopupPanel(autoHide, modal, prefix){
  var rowStyles;
  PopupPanel.call(this);
  this.autoHide = autoHide;
  this.autoHideOnHistoryEvents = autoHide;
  this.modal = modal;
  rowStyles = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [prefix + 'Top', prefix + 'Middle', prefix + 'Bottom']);
  this.decPanel = new DecoratorPanel(rowStyles);
  $setStyleName(this.decPanel, '');
  setStylePrimaryName($getParentElement($getFirstChildElement(this.element)), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName($getFirstChildElement(this.element), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, prefix + 'Content', true);
}

defineClass(227, 43, $intern_35);
_.doAttachChildren = function doAttachChildren_1(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $onDetach(this.decPanel);
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1(this.decPanel);
}
;
_.remove = function remove_3(w){
  return $remove_2(this.decPanel, w);
}
;
var Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratedPopupPanel', 227);
function $getCellElement(this$static){
  var td, tr;
  tr = this$static.tbody.children[0];
  td = tr.children[1];
  return $getFirstChildElement(td);
}

function DecoratorPanel(rowStyles){
  var i, row, table, trElem;
  SimplePanel.call(this, $createElement($doc, 'table'));
  table = this.element;
  this.tbody = $createElement($doc, 'tbody');
  $appendChild(table, resolve(this.tbody));
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; i++) {
    row = (trElem = $createElement($doc, 'tr') , trElem.className = rowStyles[i] || '' , undefined , $clinit_LocaleInfo() , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement(row.children[1]));
  }
  this.element.className = 'gwt-DecoratorPanel';
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $createElement($doc, 'td');
  inner = $createElement($doc, 'div');
  $appendChild(tdElem, resolve(inner));
  tdElem.className = styleName || '';
  inner.className = styleName + 'Inner' || '';
  return tdElem;
}

defineClass(576, 195, $intern_31, DecoratorPanel);
_.getContainerElement = function getContainerElement_1(){
  return this.containerElem;
}
;
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratorPanel', 576);
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, $getX(event_0), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(($getX(event_0) , $getY(event_0) , this$static));
}

function $hide_0(this$static, autoClosed){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static, autoClosed);
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl($getParentElement($getCellElement(this$static.decPanel)), target);
  }
  return false;
}

function $onMouseDown(this$static, x_0, y_0){
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x_0;
    this$static.dragStartY = y_0;
  }
}

function $onMouseMove(this$static, x_0, y_0){
  var absX, absY;
  if (this$static.dragging) {
    absX = x_0 + $getAbsoluteLeft(this$static.element);
    absY = y_0 + $getAbsoluteTop_0(this$static.element);
    if (absX < this$static.clientLeft_0 || absX >= this$static.windowWidth || absY < this$static.clientTop_0) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element);
}

function $setText(this$static, text_0){
  $setText_0(this$static.caption, text_0);
}

function $show_0(this$static){
  !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this$static)));
  $show(this$static);
}

function DialogBox(){
  DialogBox_0.call(this, new DialogBox$CaptionImpl);
}

function DialogBox_0(captionWidget){
  var mouseHandler, td;
  DecoratedPopupPanel.call(this, false, true, 'dialog');
  $removeFromParent(captionWidget);
  this.caption = captionWidget;
  td = $getCellElement(this.decPanel);
  $appendChild(td, resolve(this.caption.element));
  $adopt(this, this.caption);
  $getParentElement($getFirstChildElement(this.element)).className = 'gwt-DialogBox';
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft_0 = $getBodyOffsetLeft($doc);
  this.clientTop_0 = $getBodyOffsetTop($doc);
  mouseHandler = new DialogBox$MouseHandler(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_2));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_6));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_3));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_5));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_4));
}

defineClass(104, 227, $intern_36);
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.hide = function hide_0(autoClosed){
  $hide_0(this, autoClosed);
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $getTypeInt(event_0.nativeEvent) == 4 && $isCaptionEvent(this, nativeEvent) && (nativeEvent.returnValue = false , undefined);
  event_0.isFirstHandler && false && (event_0.isCanceled = true);
}
;
_.show = function show_0(){
  $show_0(this);
}
;
_.clientLeft_0 = 0;
_.clientTop_0 = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.windowWidth = 0;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox', 104);
function DialogBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(197, 1, $intern_37, DialogBox$1);
_.onResize = function onResize_0(event_0){
  this.this$01.windowWidth = event_0.width_0;
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/1', 197);
function $clinit_HasAutoHorizontalAlignment(){
  $clinit_HasAutoHorizontalAlignment = emptyMethod;
  ALIGN_CONTENT_START = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
}

var ALIGN_CONTENT_START;
function $setHorizontalAlignment(this$static, align_0){
  this$static.autoHorizontalAlignment = align_0;
  $updateHorizontalAlignment(this$static);
}

function $updateHorizontalAlignment(this$static){
  var align_0;
  !this$static.autoHorizontalAlignment?(align_0 = null):this$static.autoHorizontalAlignment?(align_0 = this$static.autoHorizontalAlignment):(align_0 = this$static.autoHorizontalAlignment == ($clinit_HasAutoHorizontalAlignment() , ALIGN_CONTENT_START)?startOf(this$static.directionalTextHelper.textDir):endOf(this$static.directionalTextHelper.textDir));
  if (align_0 != this$static.horzAlign) {
    this$static.horzAlign = align_0;
    this$static.element.style['textAlign'] = !this$static.horzAlign?'':this$static.horzAlign.textAlignString;
  }
}

function LabelBase(element){
  $setElement_0(this, element);
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(112, 17, {25:1, 21:1, 88:1, 24:1, 304:1, 157:1, 19:1, 156:1, 26:1, 112:1, 16:1, 17:1});
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 112);
function $setText_0(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
  $updateHorizontalAlignment(this$static);
}

function Label(element){
  LabelBase.call(this, ($equalsIgnoreCase('span', $getTagName(element)) , element));
}

function Label_0(text_0){
  LabelBase.call(this, $createElement($doc, 'div'));
  this.element.className = 'gwt-Label';
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
  $updateHorizontalAlignment(this);
}

function Label_1(text_0){
  Label_0.call(this, text_0);
  this.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal');
}

defineClass(35, 112, $intern_38, Label_0, Label_1);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 35);
function HTML(){
  Label.call(this, $createElement($doc, 'div'));
  this.element.className = 'gwt-HTML';
}

function HTML_0(html){
  HTML.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
  $updateHorizontalAlignment(this);
}

defineClass(163, 35, $intern_38, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 163);
function DialogBox$CaptionImpl(){
  HTML.call(this);
  this.element.className = 'Caption';
}

defineClass(374, 163, $intern_38, DialogBox$CaptionImpl);
var Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/CaptionImpl', 374);
function DialogBox$MouseHandler(this$0){
  this.this$01 = this$0;
}

defineClass(375, 1, {214:1, 302:1, 215:1, 601:1, 303:1, 29:1}, DialogBox$MouseHandler);
_.onMouseDown = function onMouseDown(event_0){
  $beginDragging(this.this$01, event_0);
}
;
_.onMouseMove = function onMouseMove(event_0){
  $continueDragging(this.this$01, event_0);
}
;
_.onMouseOut = function onMouseOut(event_0){
}
;
_.onMouseOver = function onMouseOver(event_0){
}
;
_.onMouseUp = function onMouseUp(event_0){
  $endDragging(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/MouseHandler', 375);
function $setTextOrHtml(this$static, content_0, isHtml){
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(203, 1, {88:1}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 203);
function $addEast(this$static, widget, size_0){
  $insert_0(this$static, widget, ($clinit_DockLayoutPanel$Direction() , EAST), size_0);
}

function $doLayout(this$static){
  var bottom, child, child$iterator, data_0, layer, left, right, top_0;
  left = 0;
  top_0 = 0;
  right = 0;
  bottom = 0;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_0(child$iterator);
    data_0 = castTo(child.layoutData, 165);
    layer = data_0.layer;
    if (data_0.hidden) {
      layer.visible = false;
      continue;
    }
    switch ($getResolvedDirection(data_0.direction_0).ordinal) {
      case 0:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopHeight(layer, top_0, this$static.unit, data_0.size_0, this$static.unit);
        top_0 += data_0.size_0;
        break;
      case 2:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setBottomHeight(layer, bottom, this$static.unit, data_0.size_0, this$static.unit);
        bottom += data_0.size_0;
        break;
      case 3:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setLeftWidth(layer, left, this$static.unit, data_0.size_0, this$static.unit);
        left += data_0.size_0;
        break;
      case 1:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setRightWidth(layer, right, this$static.unit, data_0.size_0, this$static.unit);
        right += data_0.size_0;
        break;
      case 4:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
    }
    layer.visible = true;
  }
}

function $getResolvedDirection(direction){
  if (direction == ($clinit_DockLayoutPanel$Direction() , LINE_START)) {
    return $clinit_LocaleInfo() , WEST;
  }
   else if (direction == LINE_END) {
    return $clinit_LocaleInfo() , EAST;
  }
  return direction;
}

function $insert_0(this$static, widget, direction, size_0){
  var children, data_0, layer;
  $removeFromParent(widget);
  children = this$static.children_0;
  $insert_3(children, widget, children.size_0);
  direction == ($clinit_DockLayoutPanel$Direction() , CENTER_0) && (this$static.center = widget);
  layer = $attachChild(this$static.layout, widget.element, widget);
  data_0 = new DockLayoutPanel$LayoutData(direction, size_0, layer);
  widget.layoutData = data_0;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function DockLayoutPanel(unit){
  ComplexPanel.call(this);
  this.unit = unit;
  $setElement(this, $createElement($doc, 'div'));
  this.layout = new Layout(this.element);
  this.layoutCmd = new DockLayoutPanel$DockAnimateCommand(this, this.layout);
}

defineClass(376, 164, $intern_39, DockLayoutPanel);
_.onAttach = function onAttach_2(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
  $removeLayerRefs(this.layout.parentElem);
}
;
_.onResize_0 = function onResize_1(){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this.children_0); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_0(child$iterator);
    instanceOf(child, 108) && castTo(child, 108).onResize_0();
  }
}
;
_.remove = function remove_4(w){
  var data_0, removed;
  removed = $remove_0(this, w);
  if (removed) {
    w == this.center && (this.center = null);
    data_0 = castTo(w.layoutData, 165);
    $removeChild_0(this.layout, data_0.layer);
  }
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel', 376);
function $clinit_DockLayoutPanel$Direction(){
  $clinit_DockLayoutPanel$Direction = emptyMethod;
  NORTH = new DockLayoutPanel$Direction('NORTH', 0);
  EAST = new DockLayoutPanel$Direction('EAST', 1);
  SOUTH = new DockLayoutPanel$Direction('SOUTH', 2);
  WEST = new DockLayoutPanel$Direction('WEST', 3);
  CENTER_0 = new DockLayoutPanel$Direction('CENTER', 4);
  LINE_START = new DockLayoutPanel$Direction('LINE_START', 5);
  LINE_END = new DockLayoutPanel$Direction('LINE_END', 6);
}

function DockLayoutPanel$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_DockLayoutPanel$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit, 1), $intern_3, 105, 0, [NORTH, EAST, SOUTH, WEST, CENTER_0, LINE_START, LINE_END]);
}

defineClass(105, 9, {105:1, 3:1, 10:1, 9:1}, DockLayoutPanel$Direction);
var CENTER_0, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'DockLayoutPanel/Direction', 105, values_9);
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

function LayoutCommand(layout){
  this.layout = layout;
}

defineClass(230, 1, {}, LayoutCommand);
_.doBeforeLayout = function doBeforeLayout(){
}
;
_.execute_0 = function execute_4(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  this.doBeforeLayout();
  $layout(this.layout, this.duration, new LayoutCommand$1);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 230);
function DockLayoutPanel$DockAnimateCommand(this$0, layout){
  this.this$01 = this$0;
  LayoutCommand.call(this, layout);
}

defineClass(377, 230, {}, DockLayoutPanel$DockAnimateCommand);
_.doBeforeLayout = function doBeforeLayout_0(){
  $doLayout(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$DockAnimateCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/DockAnimateCommand', 377);
function DockLayoutPanel$LayoutData(direction, size_0, layer){
  this.direction_0 = direction;
  this.size_0 = size_0;
  this.layer = layer;
}

defineClass(165, 1, {165:1}, DockLayoutPanel$LayoutData);
_.hidden = false;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/LayoutData', 165);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_TOP;
function HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

defineClass(367, 1, {}, HasHorizontalAlignment$AutoHorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 367);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

function endOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_END);
}

function startOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_START);
}

defineClass(162, 367, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 162);
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(199, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 199);
function $add_1(this$static, w){
  var td, td_0;
  td = (td_0 = $createElement($doc, 'td') , td_0['align'] = this$static.horzAlign.textAlignString , undefined , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $setHorizontalAlignment_0(this$static, align_0){
  this$static.horzAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = $createElement($doc, 'tr');
  $appendChild(this.body_0, resolve(this.tableRow));
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(130, 233, $intern_40, HorizontalPanel);
_.remove = function remove_5(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove_0(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 130);
function LayoutCommand$1(){
}

defineClass(381, 1, {}, LayoutCommand$1);
var Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand/1', 381);
function $add_2(this$static, widget){
  $insert_1(this$static, widget, this$static.children_0.size_0);
}

function $insert_1(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent(widget);
  $insert_3(this$static.children_0, widget, beforeIndex);
  layer = $attachChild(this$static.layout, widget.element, widget);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function $onResize(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_0(child$iterator);
    instanceOf(child, 108) && castTo(child, 108).onResize_0();
  }
}

defineClass(432, 164, $intern_39);
_.onAttach = function onAttach_3(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_2(){
  $onDetach(this);
  $removeLayerRefs(this.layout.parentElem);
}
;
_.onResize_0 = function onResize_2(){
  $onResize(this);
}
;
_.remove = function remove_6(w){
  var removed;
  removed = $remove_0(this, w);
  removed && $removeChild_0(this.layout, castTo(w.layoutData, 128));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 432);
function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = this$static.element;
  option = $createElement($doc, 'option');
  option.text = item_0;
  option.removeAttribute('bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

defineClass(567, 198, $intern_41);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 567);
defineClass(596, 595, {29:1});
var Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper', 596);
function ListenerWrapper$WrappedPopupListener(listener){
  this.listener = listener;
}

defineClass(597, 596, $intern_42, ListenerWrapper$WrappedPopupListener);
_.onClose = function onClose(event_0){
  $onPopupClosed(this.listener, (castTo(event_0.source, 43) , event_0.autoClosed));
}
;
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedPopupListener_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedPopupListener', 597);
function $addItem(this$static, item_0){
  return $insertItem_1(this$static, item_0, this$static.allItems.array.length);
}

function $addItemElement(this$static, beforeIndex, tdElem){
  var tr;
  if (this$static.vertical) {
    tr = $createElement($doc, 'tr');
    insertChild(this$static.body_0, tr, beforeIndex);
    $appendChild(tr, resolve(tdElem));
  }
   else {
    tr = this$static.body_0.children[0];
    $insertChild(tr, resolve(tdElem), beforeIndex);
  }
}

function $addSeparator(this$static, separator){
  return $insertSeparator(this$static, separator, this$static.allItems.array.length);
}

function $close(this$static, focus_0){
  if (this$static.parentMenu) {
    $hide(this$static.parentMenu.popup, !focus_0);
    focus_0 && $focus(this$static.parentMenu);
  }
}

function $doItemAction(this$static, item_0, fireCommand, focus_0){
  var cmd;
  if (!item_0.enabled) {
    return;
  }
  $selectItem(this$static, item_0);
  if (fireCommand && !!item_0.command) {
    this$static.parentMenu?$close(this$static, false):$selectItem(this$static, null);
    this$static.element.blur();
    cmd = item_0.command;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new MenuBar$1(cmd));
    if (this$static.shownChildMenu) {
      $onHide(this$static.shownChildMenu, focus_0);
      $hide(this$static.popup, false);
      this$static.shownChildMenu = null;
      $selectItem(this$static, null);
    }
  }
   else if (item_0.subMenu) {
    if (!this$static.shownChildMenu) {
      $openPopup(this$static, item_0);
    }
     else if (item_0.subMenu != this$static.shownChildMenu) {
      $onHide(this$static.shownChildMenu, focus_0);
      $hide(this$static.popup, false);
      $openPopup(this$static, item_0);
    }
     else if (fireCommand && !this$static.autoOpen) {
      $onHide(this$static.shownChildMenu, focus_0);
      $hide(this$static.popup, false);
      this$static.shownChildMenu = null;
      $selectItem(this$static, item_0);
    }
  }
   else if (this$static.autoOpen && !!this$static.shownChildMenu) {
    $onHide(this$static.shownChildMenu, focus_0);
    $hide(this$static.popup, false);
    this$static.shownChildMenu = null;
  }
}

function $findItem(this$static, hItem){
  var item_0, item$iterator;
  for (item$iterator = new ArrayList$1(this$static.items); item$iterator.i < item$iterator.this$01.array.length;) {
    item_0 = castTo($next_2(item$iterator), 22);
    if (isOrHasChildImpl(item_0.element, hItem)) {
      return item_0;
    }
  }
  return null;
}

function $focus(this$static){
  $focus_0(this$static.element);
}

function $init_0(this$static, vertical, subMenuIcon){
  var outer, table, tr, e;
  this$static.subMenuIcon = subMenuIcon;
  table = $createElement($doc, 'table');
  this$static.body_0 = $createElement($doc, 'tbody');
  $appendChild(table, resolve(this$static.body_0));
  if (!vertical) {
    tr = $createElement($doc, 'tr');
    $appendChild(this$static.body_0, resolve(tr));
  }
  this$static.vertical = vertical;
  outer = (e = $createElement($doc, 'div') , e.tabIndex = 0 , undefined , e);
  $appendChild(outer, resolve(table));
  this$static.element = outer;
  $clinit_Roles();
  $set(MENUBAR, this$static.element);
  this$static.eventsToSink == -1?sinkEvents_0(this$static.element, 2225 | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= 2225);
  this$static.element.className = 'gwt-MenuBar';
  vertical?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'vertical', true):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'horizontal', true);
  this$static.element.style['outline'] = '0px';
  this$static.element.setAttribute('hideFocus', 'true');
  $addDomHandler(this$static, new MenuBar$2(this$static), ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
}

function $insertItem_1(this$static, item_0, beforeIndex){
  var i, itemsIndex;
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.array.length) {
    throw toJs(new IndexOutOfBoundsException);
  }
  $add_5(this$static.allItems, beforeIndex, item_0);
  itemsIndex = 0;
  for (i = 0; i < beforeIndex; i++) {
    instanceOf($get_1(this$static.allItems, i), 22) && ++itemsIndex;
  }
  $add_5(this$static.items, itemsIndex, item_0);
  $addItemElement(this$static, beforeIndex, item_0.element);
  item_0.parentMenu = this$static;
  $setStyleName_0(item_0, getStylePrimaryName(item_0.element) + '-' + 'selected', false);
  $updateSubmenuIcon(this$static, item_0);
  return item_0;
}

function $insertSeparator(this$static, separator, beforeIndex){
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.array.length) {
    throw toJs(new IndexOutOfBoundsException);
  }
  this$static.vertical && (separator.element['colSpan'] = 2 , undefined);
  $addItemElement(this$static, beforeIndex, separator.element);
  $add_5(this$static.allItems, beforeIndex, separator);
  return separator;
}

function $itemOver(this$static, item_0, focus_0){
  if (!item_0) {
    if (!!this$static.selectedItem && !!this$static.shownChildMenu && this$static.shownChildMenu == this$static.selectedItem.subMenu) {
      return;
    }
  }
  if (!!item_0 && !item_0.enabled) {
    return;
  }
  $selectItem(this$static, item_0);
  focus_0 && this$static.focusOnHover && $focus_0(this$static.element);
  !!item_0 && (!!this$static.shownChildMenu || !!this$static.parentMenu || this$static.autoOpen) && $doItemAction(this$static, item_0, false, this$static.focusOnHover);
}

function $moveSelectionDown(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    $selectNextItem(this$static);
  }
   else {
    if (!!this$static.selectedItem.subMenu && this$static.selectedItem.subMenu.items.array.length != 0 && (!this$static.shownChildMenu || !this$static.shownChildMenu.selectedItem)) {
      !this$static.shownChildMenu && $doItemAction(this$static, this$static.selectedItem, false, true);
      $focus(this$static.selectedItem.subMenu);
    }
     else 
      !!this$static.parentMenu && (this$static.parentMenu.vertical?$selectNextItem(this$static.parentMenu):$moveSelectionDown(this$static.parentMenu));
  }
}

function $moveSelectionUp(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  !this$static.shownChildMenu && this$static.vertical?$selectPrevItem(this$static):!!this$static.parentMenu && this$static.parentMenu.vertical?$selectPrevItem(this$static.parentMenu):$close(this$static, true);
}

function $moveToNextItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  if (this$static.vertical) {
    if (!!this$static.selectedItem.subMenu && this$static.selectedItem.subMenu.items.array.length != 0 && (!this$static.shownChildMenu || !this$static.shownChildMenu.selectedItem)) {
      !this$static.shownChildMenu && $doItemAction(this$static, this$static.selectedItem, false, true);
      $focus(this$static.selectedItem.subMenu);
    }
     else 
      !!this$static.parentMenu && (this$static.parentMenu.vertical?$moveToNextItem(this$static.parentMenu):$selectNextItem(this$static.parentMenu));
  }
   else {
    $selectNextItem(this$static);
  }
}

function $moveToPrevItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical?!!this$static.parentMenu && !this$static.parentMenu.vertical?$selectPrevItem(this$static.parentMenu):$close(this$static, true):$selectPrevItem(this$static);
}

function $onHide(this$static, focus_0){
  if (this$static.shownChildMenu) {
    $onHide(this$static.shownChildMenu, focus_0);
    $hide(this$static.popup, false);
    focus_0 && $focus_0(this$static.element);
  }
}

function $onPopupClosed(this$static, autoClosed){
  autoClosed && (this$static.parentMenu?$close(this$static, false):$selectItem(this$static, null));
  $onHide(this$static, !autoClosed && this$static.focusOnHover);
  fire_0(this$static, false);
  this$static.shownChildMenu = null;
  this$static.popup = null;
  !!this$static.parentMenu && !!this$static.parentMenu.popup && (this$static.parentMenu.popup.previewAllNativeEvents = true , undefined);
}

function $openPopup(this$static, item_0){
  !!this$static.parentMenu && !!this$static.parentMenu.popup && (this$static.parentMenu.popup.previewAllNativeEvents = false , undefined);
  this$static.shownChildMenu = item_0.subMenu;
  $selectItem(this$static.shownChildMenu, null);
  this$static.shownChildMenu.parentMenu = this$static;
  this$static.popup = new MenuBar$MenuPopup(this$static);
  $setWidget_1(this$static.popup, this$static.shownChildMenu);
  $addHandler(this$static.popup, new ListenerWrapper$WrappedPopupListener(this$static), TYPE_12?TYPE_12:(TYPE_12 = new GwtEvent$Type));
  $setPopupPositionAndShow(this$static.popup, new MenuBar$3(this$static, item_0));
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem, nextItem$iterator;
  if (!this$static.selectedItem) {
    for (nextItem$iterator = new ArrayList$1(this$static.items); nextItem$iterator.i < nextItem$iterator.this$01.array.length;) {
      nextItem = castTo($next_2(nextItem$iterator), 22);
      if (nextItem.enabled) {
        $selectItem(this$static, nextItem);
        break;
      }
    }
    return true;
  }
  return false;
}

function $selectItem(this$static, item_0){
  var td, tr;
  if (item_0 == this$static.selectedItem) {
    return;
  }
  if (this$static.selectedItem) {
    $setSelectionStyle(this$static.selectedItem);
    if (this$static.vertical) {
      tr = $getParentElement(this$static.selectedItem.element);
      if (tr.children.length == 2) {
        td = tr.children[1];
        setStyleName(td, 'subMenuIcon-selected', false);
      }
    }
  }
  if (item_0) {
    $setStyleName_0(item_0, getStylePrimaryName(item_0.element) + '-' + 'selected', true);
    if (this$static.vertical) {
      tr = $getParentElement(item_0.element);
      if (tr.children.length == 2) {
        td = tr.children[1];
        setStyleName(td, 'subMenuIcon-selected', true);
      }
    }
    $clinit_Roles();
    $setAriaActivedescendantProperty(this$static.element, new Id(item_0.element));
  }
  this$static.selectedItem = item_0;
}

function $selectNextItem(this$static){
  var firstIndex, index_0, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index_0 = $indexOf_2(this$static.items, this$static.selectedItem, 0);
  firstIndex = index_0;
  while (true) {
    index_0 = index_0 + 1;
    index_0 == this$static.items.array.length && (index_0 = 0);
    if (index_0 == firstIndex) {
      itemToBeSelected = castTo($get_1(this$static.items, firstIndex), 22);
      break;
    }
     else {
      itemToBeSelected = castTo($get_1(this$static.items, index_0), 22);
      if (itemToBeSelected.enabled) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
  !!this$static.shownChildMenu && $doItemAction(this$static, itemToBeSelected, false, true);
}

function $selectPrevItem(this$static){
  var firstIndex, index_0, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index_0 = $indexOf_2(this$static.items, this$static.selectedItem, 0);
  firstIndex = index_0;
  while (true) {
    index_0 = index_0 - 1;
    index_0 < 0 && (index_0 = this$static.items.array.length - 1);
    if (index_0 == firstIndex) {
      itemToBeSelected = castTo($get_1(this$static.items, firstIndex), 22);
      break;
    }
     else {
      itemToBeSelected = castTo($get_1(this$static.items, index_0), 22);
      if (itemToBeSelected.enabled) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
  !!this$static.shownChildMenu && $doItemAction(this$static, itemToBeSelected, false, true);
}

function $updateSubmenuIcon(this$static, item_0){
  var container, idx, submenu, td, tdCount, tr;
  if (!this$static.vertical) {
    return;
  }
  idx = $indexOf_2(this$static.allItems, item_0, 0);
  if (idx == -1) {
    return;
  }
  container = this$static.vertical?this$static.body_0:this$static.body_0.children[0];
  tr = container.children[idx];
  tdCount = tr.children.length;
  submenu = item_0.subMenu;
  if (!submenu) {
    tdCount == 2 && $removeChild(tr, tr.children[1]);
    item_0.element['colSpan'] = 2;
  }
   else if (tdCount == 1) {
    item_0.element['colSpan'] = 1;
    td = $createElement($doc, 'td');
    td['vAlign'] = 'middle';
    $setInnerHTML(td, $getSafeHtml_0(this$static.subMenuIcon).html);
    td.className = 'subMenuIcon';
    $appendChild(tr, resolve(td));
  }
}

function MenuBar(){
  MenuBar_0.call(this, false);
}

function MenuBar_0(vertical){
  this.allItems = new ArrayList;
  this.items = new ArrayList;
  $init_0(this, vertical, create_1(($clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer() , menuBarSubMenuIcon)));
}

defineClass(42, 17, $intern_5, MenuBar, MenuBar_0);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  var item_0, keyCode;
  item_0 = $findItem(this, event_0.srcElement);
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      {
        $focus_0(this.element);
        !!item_0 && $doItemAction(this, item_0, true, true);
        break;
      }

    case 16:
      {
        !!item_0 && $itemOver(this, item_0, true);
        break;
      }

    case 32:
      {
        !!item_0 && $itemOver(this, null, false);
        break;
      }

    case $intern_28:
      {
        $selectFirstItemIfNoneSelected(this);
        break;
      }

    case 128:
      {
        keyCode = event_0.keyCode | 0;
        $clinit_LocaleInfo();
        keyCode = maybeSwapArrowKeysForRtl(keyCode, false);
        switch (keyCode) {
          case 37:
            $moveToPrevItem(this);
            event_0.cancelBubble = true;
            event_0.returnValue = false;
            break;
          case 39:
            $moveToNextItem(this);
            event_0.cancelBubble = true;
            event_0.returnValue = false;
            break;
          case 38:
            $moveSelectionUp(this);
            event_0.cancelBubble = true;
            event_0.returnValue = false;
            break;
          case 40:
            $moveSelectionDown(this);
            event_0.cancelBubble = true;
            event_0.returnValue = false;
            break;
          case 27:
            this.parentMenu?$close(this, false):$selectItem(this, null);
            !this.parentMenu && !!this.popup && $hide(this.popup, false);
            event_0.cancelBubble = true;
            event_0.returnValue = false;
            break;
          case 9:
            this.parentMenu?$close(this, false):$selectItem(this, null);
            !this.parentMenu && !!this.popup && $hide(this.popup, false);
            break;
          case 13:
            if (!$selectFirstItemIfNoneSelected(this)) {
              $doItemAction(this, this.selectedItem, true, true);
              event_0.cancelBubble = true;
              event_0.returnValue = false;
            }

        }
        break;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach_3(){
  !!this.popup && $hide(this.popup, false);
  $onDetach(this);
}
;
_.autoOpen = false;
_.focusOnHover = true;
_.subMenuIcon = null;
_.vertical = false;
var Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar', 42);
function MenuBar$1(val$cmd){
  this.val$cmd2 = val$cmd;
}

defineClass(357, 1, {}, MenuBar$1);
_.execute_0 = function execute_5(){
  this.val$cmd2.execute_0();
}
;
var Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/1', 357);
function MenuBar$2(this$0){
  this.this$01 = this$0;
}

defineClass(358, 1, {640:1, 29:1}, MenuBar$2);
var Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/2', 358);
function MenuBar$3(this$0, val$item){
  this.this$01 = this$0;
  this.val$item2 = val$item;
}

defineClass(359, 1, {}, MenuBar$3);
_.setPosition = function setPosition(offsetWidth, offsetHeight){
  this.this$01.vertical?$positionNextTo(this.this$01.popup, this.val$item2):$positionBelow(this.this$01.popup, this.val$item2);
}
;
var Lcom_google_gwt_user_client_ui_MenuBar$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/3', 359);
function $leftOf(object){
  return $getAbsoluteLeft(object.element);
}

function $positionBelow(this$static, target){
  var left, top_0;
  top_0 = $getAbsoluteTop(this$static.this$01) + $getOffsetHeight(this$static.this$01);
  left = this$static.towardsEast?$getAbsoluteLeft(target.element):$getAbsoluteLeft(target.element) + $getPropertyInt(target.element, 'offsetWidth') - $getPropertyInt(this$static.element, 'offsetWidth');
  $setPositionInClient(this$static, left, top_0);
}

function $positionNextTo(this$static, target){
  var left, leftIfTowardEast, leftIfTowardWest, offsetTop, overflowIfTowardsEast, overflowIfTowardsWest, top_0;
  offsetTop = $getAbsoluteTop_0(target.subMenu.element) - $getAbsoluteTop_0(this$static.element);
  top_0 = $getAbsoluteTop_0(target.element) - offsetTop;
  leftIfTowardEast = $rightOf(this$static.this$01);
  leftIfTowardWest = $leftOf(this$static.this$01) - $getPropertyInt(this$static.element, 'offsetWidth');
  overflowIfTowardsEast = leftIfTowardEast + $getPropertyInt(this$static.element, 'offsetWidth') - ($getScrollLeft_0($doc) + $getClientWidth($doc));
  overflowIfTowardsWest = $getScrollLeft_0($doc) - leftIfTowardWest;
  overflowIfTowardsEast <= 0 && overflowIfTowardsWest <= 0?!!this$static.this$01.parentMenu && !!this$static.this$01.parentMenu.popup && (this$static.towardsEast = this$static.this$01.parentMenu.popup.towardsEast):(this$static.towardsEast = overflowIfTowardsEast < overflowIfTowardsWest);
  left = this$static.towardsEast?leftIfTowardEast:leftIfTowardWest;
  $setPositionInClient(this$static, left, top_0);
}

function $rightOf(object){
  return $getAbsoluteLeft(object.element) + $getPropertyInt(object.element, 'offsetWidth');
}

function $setPositionInClient(this$static, left, top_0){
  if ($getPropertyInt(this$static.element, 'offsetWidth') < $getClientWidth($doc)) {
    left = $wnd.Math.min(left, $getScrollLeft_0($doc) + $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth'));
    left = $wnd.Math.max($getScrollLeft_0($doc), left);
  }
  $setPopupPosition(this$static, left, top_0);
}

function MenuBar$MenuPopup(this$0){
  var primaryStyleName;
  this.this$01 = this$0;
  DecoratedPopupPanel.call(this, true, false, 'menuPopup');
  this.towardsEast = ($clinit_LocaleInfo() , true);
  $setAnimationType(this, ($clinit_PopupPanel$AnimationType() , ONE_WAY_CORNER));
  this.isAnimationEnabled = false;
  $getParentElement($getFirstChildElement(this.element)).className = 'gwt-MenuBarPopup';
  primaryStyleName = getStylePrimaryName(this$0.element);
  $equals_1('gwt-MenuBar', primaryStyleName) || setStyleName($getParentElement($getFirstChildElement(this.element)), primaryStyleName + 'Popup', true);
  this.previewAllNativeEvents = true;
}

defineClass(356, 227, $intern_35, MenuBar$MenuPopup);
_.onPreviewNativeEvent = function onPreviewNativeEvent_1(event_0){
  var parentMenuElement, target;
  if (!event_0.isCanceled) {
    switch ($getTypeInt(event_0.nativeEvent)) {
      case 4:
        target = event_0.nativeEvent.srcElement;
        parentMenuElement = this.this$01.element;
        if (isOrHasChildImpl(parentMenuElement, target)) {
          event_0.isCanceled = true;
          return;
        }

        event_0.isFirstHandler && false && (event_0.isCanceled = true);
        event_0.isCanceled && $selectItem(this.this$01, null);
        return;
    }
  }
  event_0.isFirstHandler && false && (event_0.isCanceled = true);
}
;
_.towardsEast = false;
var Lcom_google_gwt_user_client_ui_MenuBar$MenuPopup_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/MenuPopup', 356);
var menuBarSubMenuIcon;
function $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer(){
  $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer = emptyMethod;
  menuBarSubMenuIcon = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString(($clinit_LocaleInfo() , 'data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs='))));
}

function $setEnabled(this$static, enabled){
  enabled?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'disabled', false):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'disabled', true);
  this$static.enabled = enabled;
}

function $setScheduledCommand(this$static, cmd){
  this$static.command = cmd;
}

function $setSelectionStyle(this$static){
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'selected', false);
}

function $setSubMenu(this$static, subMenu){
  this$static.subMenu = subMenu;
  !!this$static.parentMenu && $updateSubmenuIcon(this$static.parentMenu, this$static);
  if (subMenu) {
    subMenu.element.tabIndex = -1;
    $clinit_Roles();
    $setAriaHaspopupProperty(this$static.element, true);
  }
   else {
    $clinit_Roles();
    $setAriaHaspopupProperty(this$static.element, false);
  }
}

function MenuItem(html, cmd){
  MenuItem_4.call(this, html.html, cmd);
}

function MenuItem_0(html, subMenu){
  MenuItem_5.call(this, html.html, subMenu);
}

function MenuItem_1(text_0, cmd){
  MenuItem_3.call(this, text_0, false);
  this.command = cmd;
}

function MenuItem_2(text_0, subMenu){
  MenuItem_3.call(this, text_0, false);
  $setSubMenu(this, subMenu);
}

function MenuItem_3(text_0, asHTML){
  $setElement_0(this, $createElement($doc, 'td'));
  $setStyleName_0(this, getStylePrimaryName(this.element) + '-' + 'selected', false);
  asHTML?$setInnerHTML(this.element, text_0):$setInnerText(this.element, text_0);
  this.element.className = 'gwt-MenuItem';
  $setAttribute(this.element, 'id', $createUniqueId($doc));
  $clinit_Roles();
  $set(MENUITEM, this.element);
}

function MenuItem_4(text_0, cmd){
  MenuItem_3.call(this, text_0, true);
  this.command = cmd;
}

function MenuItem_5(text_0, subMenu){
  MenuItem_3.call(this, text_0, true);
  $setSubMenu(this, subMenu);
}

defineClass(22, 16, $intern_43, MenuItem, MenuItem_0, MenuItem_1, MenuItem_2);
_.enabled = true;
var Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuItem', 22);
function MenuItemSeparator(){
  var div;
  $setElement_0(this, $createElement($doc, 'td'));
  this.element.className = 'gwt-MenuItemSeparator';
  div = $createElement($doc, 'div');
  $appendChild(this.element, resolve(div));
  div.className = 'menuSeparatorInner';
}

defineClass(166, 16, $intern_4, MenuItemSeparator);
var Lcom_google_gwt_user_client_ui_MenuItemSeparator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuItemSeparator', 166);
function $onResize_0(){
  var height, width_0, winHeight, winWidth;
  null.$_nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.$_nullMethod(($clinit_Style$Display() , 'none'));
  null.$_nullMethod(($clinit_Style$Unit() , '0.0px'));
  null.$_nullMethod('0.0px');
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.$_nullMethod($wnd.Math.max(width_0, winWidth) + 'px');
  null.$_nullMethod($wnd.Math.max(height, winHeight) + 'px');
  null.$_nullMethod('block');
}

function PopupPanel$1(){
}

defineClass(362, 1, $intern_37, PopupPanel$1);
_.onResize = function onResize_3(event_0){
  $onResize_0();
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 362);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(363, 1, {29:1, 598:1}, PopupPanel$3);
_.onPreviewNativeEvent = function onPreviewNativeEvent_2(event_0){
  $previewNativeEvent(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 363);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(364, 1, $intern_44, PopupPanel$4);
_.onValueChange = function onValueChange(event_0){
  this.this$01.autoHideOnHistoryEvents && this.this$01.hide(false);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 364);
function $clinit_PopupPanel$AnimationType(){
  $clinit_PopupPanel$AnimationType = emptyMethod;
  CENTER_1 = new PopupPanel$AnimationType('CENTER', 0);
  ONE_WAY_CORNER = new PopupPanel$AnimationType('ONE_WAY_CORNER', 1);
  ROLL_DOWN = new PopupPanel$AnimationType('ROLL_DOWN', 2);
}

function PopupPanel$AnimationType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_PopupPanel$AnimationType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit, 1), $intern_3, 138, 0, [CENTER_1, ONE_WAY_CORNER, ROLL_DOWN]);
}

defineClass(138, 9, {138:1, 3:1, 10:1, 9:1}, PopupPanel$AnimationType);
var CENTER_1, ONE_WAY_CORNER, ROLL_DOWN;
var Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'PopupPanel/AnimationType', 138, values_10);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize_0();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
  this$static.curPanel.element.style['clip'] = 'rect(auto, auto, auto, auto)';
  this$static.curPanel.element.style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    this$static.curPanel.element.style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
  this$static.curPanel.element.style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight_0);
  width_0 = round_int(progress * this$static.offsetWidth_0);
  switch (this$static.curPanel.animType.ordinal) {
    case 2:
      right = this$static.offsetWidth_0;
      bottom = height;
      break;
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
      break;
    case 1:
      $clinit_LocaleInfo();
      right = width_0;
      bottom = height;
  }
  $setClip(this$static.curPanel.element, 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.curPanel.animType != ($clinit_PopupPanel$AnimationType() , CENTER_1) && !showing && (animate = false);
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      this$static.curPanel.element.style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      this$static.curPanel.element.style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      $add_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, 200, now_1(), null);
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this);
  this.curPanel = panel;
}

defineClass(360, 196, {}, PopupPanel$ResizeAnimation);
_.onComplete = function onComplete_1(){
  $onComplete(this);
}
;
_.onStart = function onStart_0(){
  this.offsetHeight_0 = $getOffsetHeight_0(this.curPanel);
  this.offsetWidth_0 = $getOffsetWidth_0(this.curPanel);
  this.curPanel.element.style['overflow'] = 'hidden';
  $onUpdate(this, (1 + $wnd.Math.cos($intern_1)) / 2);
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate(this, progress);
}
;
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 360);
function PopupPanel$ResizeAnimation$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(361, 161, {}, PopupPanel$ResizeAnimation$1);
_.run = function run_1(){
  this.this$11.showTimer = null;
  $run_0(this.this$11, 200, null);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation/1', 361);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $setText_1(this$static, text_0){
  $setText_3(this$static.impl, text_0);
}

function RichTextArea(){
  this.impl = new RichTextAreaImplIE8toIE10;
  $setElement(this, this.impl.elem);
  this.element.className = 'gwt-RichTextArea';
}

defineClass(577, 198, $intern_32, RichTextArea);
_.onAttach = function onAttach_4(){
  $onAttach_0(this);
  $initElement(this.impl);
}
;
_.onDetach = function onDetach_4(){
  $onDetach(this);
  $uninitElement(this.impl);
}
;
var Lcom_google_gwt_user_client_ui_RichTextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RichTextArea', 577);
function RootLayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
  this.layout = new Layout(this.element);
  this.layoutCmd = new LayoutCommand(this.layout);
  addResizeHandler(new RootLayoutPanel$1(this));
}

function get_0(){
  if (!singleton_0) {
    singleton_0 = new RootLayoutPanel;
    $add_0(($clinit_RootPanel() , get_1()), singleton_0);
  }
  return singleton_0;
}

defineClass(433, 432, $intern_39, RootLayoutPanel);
_.onLoad = function onLoad_1(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 433);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(434, 1, $intern_37, RootLayoutPanel$1);
_.onResize = function onResize_4(event_0){
  $onResize(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 434);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  this.element = elem , undefined;
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_11(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset_4(widgetsToDetach.map_0);
    $reset_4(rootPanels);
  }
}

function get_1(){
  $clinit_RootPanel();
  var rp;
  rp = castTo($get_0(rootPanels, null), 167);
  if (rp) {
    return rp;
  }
  if ($size(rootPanels) == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_LocaleInfo();
  }
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_7(widgetsToDetach, rp);
  return rp;
}

defineClass(167, 436, $intern_45);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 167);
function RootPanel$1(){
}

defineClass(438, 1, {}, RootPanel$1);
_.execute_1 = function execute_6(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 438);
function RootPanel$2(){
}

defineClass(439, 1, $intern_42, RootPanel$2);
_.onClose = function onClose_0(closeEvent){
  detachWidgets();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 439);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(437, 167, $intern_45, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 437);
function $next(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw toJs(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(228, 1, {}, SimplePanel$1);
_.next_0 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasElement;
}
;
_.remove_0 = function remove_7(){
  !!this.returned && this.this$01.remove(this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 228);
function $getText(this$static){
  return $getPropertyString(this$static.element, 'value');
}

function $setText_2(this$static, text_0){
  this$static.element['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
  $clinit_LocaleInfo();
}

defineClass(562, 198, $intern_46);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var type_0;
  type_0 = $eventGetTypeInt(event_0.type);
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_2(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 562);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  ValueBoxBase.call(this, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser) , elem));
}

defineClass(299, 562, $intern_46);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 299);
function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $createElement($doc, 'textarea'));
  this.element.className = 'gwt-TextArea';
}

defineClass(183, 299, $intern_46, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 183);
function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  TextBoxBase.call(this, element);
  this.element.className = 'gwt-TextBox';
}

defineClass(301, 299, $intern_46, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 301);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_2 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_ValueBoxBase$TextAlignment();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_3, 100, 0, [CENTER_2, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(100, 9, $intern_47);
var CENTER_2, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 100, values_11);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(563, 100, $intern_47, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 563, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(564, 100, $intern_47, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 564, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(565, 100, $intern_47, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 565, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(566, 100, $intern_47, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 566, null);
function $add_3(this$static, w){
  var td, tr;
  tr = $createElement($doc, 'tr');
  td = $createAlignedTd(this$static);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $createAlignedTd(this$static){
  var td;
  td = $createElement($doc, 'td');
  td['align'] = this$static.horzAlign.textAlignString;
  $setCellVerticalAlignment(td, this$static.vertAlign);
  return td;
}

function $insert_2(this$static, w, beforeIndex){
  var td, tr;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  tr = $createElement($doc, 'tr');
  td = $createAlignedTd(this$static);
  $appendChild(tr, resolve(td));
  insertChild(this$static.body_0, tr, beforeIndex);
  $insert(this$static, w, td, beforeIndex);
}

function $remove_3(this$static, w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove_0(this$static, w);
  removed && $removeChild(this$static.body_0, $getParentElement(td));
  return removed;
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(93, 233, $intern_40, VerticalPanel);
_.remove = function remove_8(w){
  return $remove_3(this, w);
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 93);
function $add_4(this$static, w){
  $insert_3(this$static, w, this$static.size_0);
}

function $get(this$static){
  if (0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  return this$static.array[0];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_3(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 17, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_4(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_5(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_4(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 17, 4, 0, 1);
}

defineClass(455, 1, {}, WidgetCollection);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 455);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(145, 1, {}, WidgetCollection$WidgetIterator);
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_0 = function remove_9(){
  if (!this.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this.this$01.parent_0.remove(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 145);
function $clinit_ClippedImageImpl(){
  $clinit_ClippedImageImpl = emptyMethod;
  clearImage = ($clinit_UriUtils() , new SafeUriString(getModuleBaseURL() + 'clear.cache.gif'));
}

function $getSafeHtml(url_0, left, top_0, width_0, height){
  var builder;
  builder = new SafeStylesBuilder;
  $append($append($append(builder, new SafeStylesString('width:' + width_0 + ($clinit_Style$Unit() , 'px') + ';')), new SafeStylesString('height:' + height + 'px' + ';')), new SafeStylesString('background:' + ('url(' + url_0.uri_0 + ') ' + 'no-repeat ' + (-left + 'px ') + (-top_0 + 'px')) + ';'));
  return !template && (template = new ClippedImageImpl_TemplateImpl) , $image(clearImage, new SafeStylesString((new SafeStylesString(builder.sb.string)).css));
}

var clearImage, template;
function $image(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<img src='";
  $append_2(sb, htmlEscape(arg0.uri_0));
  sb.string += "' style='";
  $append_2(sb, htmlEscape(arg1.css));
  sb.string += "' border='0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function ClippedImageImpl_TemplateImpl(){
}

defineClass(583, 1, {}, ClippedImageImpl_TemplateImpl);
var Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImageImpl_TemplateImpl', 583);
function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function $getSafeHtml_0(this$static){
  return $getSafeHtml(this$static.url_0, this$static.left_0, this$static.top_0, this$static.width_0, this$static.height);
}

function ClippedImagePrototype(url_0, left, top_0, width_0, height){
  $clinit_ClippedImagePrototype();
  this.url_0 = url_0;
  this.left_0 = left;
  this.top_0 = top_0;
  this.width_0 = width_0;
  this.height = height;
}

defineClass(468, 635, {}, ClippedImagePrototype);
_.height = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url_0 = null;
_.width_0 = 0;
var Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImagePrototype', 468);
function $focus_0(elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}

function $setClip(popup, rect){
  popup.style['clip'] = rect;
}

defineClass(584, 1, {});
_.createElement_0 = function createElement(){
  return $createElement($doc, 'textarea');
}
;
var Lcom_google_gwt_user_client_ui_impl_RichTextAreaImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'RichTextAreaImpl', 584);
function $setHTMLImpl(this$static, html){
  this$static.elem.contentWindow.document.body.innerHTML = html;
}

function $setText_3(this$static, text_0){
  var elem;
  !this$static.beforeInitPlaceholder?(elem = this$static.elem , elem.contentWindow.document.body.innerText = text_0 , undefined):$setInnerText(this$static.beforeInitPlaceholder, text_0);
}

function $uninitElement(this$static){
  var enabled, html;
  if (this$static.initializing) {
    this$static.initializing = false;
    return;
  }
  $unhookEvents(this$static);
  html = !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:this$static.beforeInitPlaceholder.innerHTML;
  enabled = !this$static.beforeInitPlaceholder?$isEnabledImpl(this$static):!this$static.beforeInitPlaceholder['disabled'];
  this$static.beforeInitPlaceholder = $createElement($doc, 'div');
  $setInnerHTML(this$static.beforeInitPlaceholder, html);
  !this$static.beforeInitPlaceholder?$setEnabledImpl(this$static, enabled):(this$static.beforeInitPlaceholder['disabled'] = !enabled , undefined);
}

defineClass(592, 584, {});
_.createElement_0 = function createElement_0(){
  return $doc.createElement('iframe');
}
;
_.onElementInitialized = function onElementInitialized(){
  if (!this.initializing) {
    return;
  }
  this.initializing = false;
  if (this.beforeInitPlaceholder) {
    $setHTMLImpl(this, this.beforeInitPlaceholder.innerHTML);
    $setEnabledImpl(this, !this.beforeInitPlaceholder?$isEnabledImpl(this):!this.beforeInitPlaceholder['disabled']);
    this.beforeInitPlaceholder = null;
  }
  $hookEvents(this);
  if (this.isPendingFocus) {
    this.isPendingFocus = false;
    this.initializing?(this.isPendingFocus = true):(this.elem.contentWindow.focus() , undefined);
  }
}
;
_.onElementInitializing = function onElementInitializing(){
  this.initializing = true;
  this.isPendingFocus = false;
}
;
_.initializing = false;
_.isPendingFocus = false;
var Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'RichTextAreaImplStandard', 592);
function $hookEvents(this$static){
  var elem = this$static.elem;
  var body_0 = elem.contentWindow.document.body;
  var handler = $entry(function(evt){
    evt = evt || elem.contentWindow.event;
    dispatchEvent_1(evt, elem);
  }
  );
  body_0.onkeydown = body_0.onkeyup = body_0.onkeypress = body_0.onmousedown = body_0.onmouseup = body_0.onmousemove = body_0.onmouseover = body_0.onmouseout = body_0.onclick = handler;
  elem.contentWindow.onfocus = elem.contentWindow.onblur = handler;
}

function $initElement(this$static){
  var _this = this$static;
  _this.onElementInitializing();
  setTimeout($entry(function(){
    if (_this.initializing == false) {
      return;
    }
    var elem = _this.elem;
    var doc = elem.contentWindow.document;
    if (!doc.body) {
      setTimeout(arguments.callee, 50);
      return;
    }
    doc.body.contentEditable = true;
    _this.onElementInitialized();
  }
  , 1));
}

function $isEnabledImpl(this$static){
  var elem = this$static.elem;
  return elem.contentWindow.document.body.contentEditable.toLowerCase() == 'true';
}

function $setEnabledImpl(this$static, enabled){
  var elem = this$static.elem;
  elem.contentWindow.document.body.contentEditable = enabled;
}

function $unhookEvents(this$static){
  var elem = this$static.elem;
  var body_0 = elem.contentWindow.document.body;
  if (body_0) {
    body_0.onkeydown = body_0.onkeyup = body_0.onkeypress = body_0.onmousedown = body_0.onmouseup = body_0.onmousemove = body_0.onmouseover = body_0.onmouseout = body_0.onclick = null;
    elem.contentWindow.onfocus = elem.contentWindow.onblur = null;
  }
}

function RichTextAreaImplIE8toIE10(){
  this.elem = this.createElement_0();
  this.beforeInitPlaceholder = $createElement($doc, 'div');
}

defineClass(593, 592, {}, RichTextAreaImplIE8toIE10);
_.createElement_0 = function createElement_1(){
  var elem;
  elem = $doc.createElement('iframe');
  elem['src'] = 'about:blank';
  return elem;
}
;
var Lcom_google_gwt_user_client_ui_impl_RichTextAreaImplIE8toIE10_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'RichTextAreaImplIE8toIE10', 593);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_1('ie8', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(187, 15, $intern_6);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 187);
defineClass(51, 187, $intern_6);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 51);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_7('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 15)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 15):null);
}

defineClass(306, 51, $intern_6, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 306);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(349, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 349);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(350, 1, {599:1}, SimpleEventBus$2);
_.execute_0 = function execute_7(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 350);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(351, 1, {599:1}, SimpleEventBus$3);
_.execute_0 = function execute_8(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 351);
function $$init_0(this$static){
}

function $adjustBbox(this$static, x1, y1, x2, y2){
  var q;
  if (x1 > x2) {
    q = x1;
    x1 = x2;
    x2 = q;
  }
  if (y1 > y2) {
    q = y1;
    y1 = y2;
    y2 = q;
  }
  x1 = min_1(this$static.boundingBox.x_0, x1);
  y1 = min_1(this$static.boundingBox.y_0, y1);
  x2 = max_1(this$static.boundingBox.x_0 + this$static.boundingBox.width_0, x2);
  y2 = max_1(this$static.boundingBox.y_0 + this$static.boundingBox.height, y2);
  $setBounds(this$static.boundingBox, x1, y1, x2 - x1, y2 - y1);
}

function $adjustBbox_0(this$static, p1, p2){
  $adjustBbox(this$static, p1.x_0, p1.y_0, p2.x_0, p2.y_0);
}

function $allocNodes(this$static){
  var n;
  n = this$static.getPostCount() + this$static.getInternalNodeCount();
  if (this$static.nodes == null || this$static.nodes.length != n) {
    this$static.nodes = initUnidimensionalArray(I_classLit, $intern_17, 13, n, 15, 1);
    this$static.volts = initUnidimensionalArray(D_classLit, $intern_48, 13, n, 15, 1);
  }
}

function $calcArrow(a, b, al, aw){
  var adx, ady, l_0, p1, p2, poly;
  poly = new Polygon;
  p1 = new Point;
  p2 = new Point;
  adx = b.x_0 - a.x_0;
  ady = b.y_0 - a.y_0;
  l_0 = $wnd.Math.sqrt(adx * adx + ady * ady);
  $addPoint(poly, b.x_0, b.y_0);
  $interpPoint2(a, b, p1, p2, 1 - al / l_0, aw);
  $addPoint(poly, p1.x_0, p1.y_0);
  $addPoint(poly, p2.x_0, p2.y_0);
  return poly;
}

function $calcLeads(this$static, len){
  if (this$static.dn < len || len == 0) {
    this$static.lead1 = this$static.point1;
    this$static.lead2 = this$static.point2;
    return;
  }
  this$static.lead1 = $interpPoint(this$static.point1, this$static.point2, (this$static.dn - len) / (2 * this$static.dn));
  this$static.lead2 = $interpPoint(this$static.point1, this$static.point2, (this$static.dn + len) / (2 * this$static.dn));
}

function $createPolygon(a, b, c){
  var p;
  p = new Polygon;
  $addPoint(p, a.x_0, a.y_0);
  $addPoint(p, b.x_0, b.y_0);
  $addPoint(p, c.x_0, c.y_0);
  return p;
}

function $createPolygon_0(a, b, c, d){
  var p;
  p = new Polygon;
  $addPoint(p, a.x_0, a.y_0);
  $addPoint(p, b.x_0, b.y_0);
  $addPoint(p, c.x_0, c.y_0);
  $addPoint(p, d.x_0, d.y_0);
  return p;
}

function $createPolygon_1(a){
  var i, p;
  p = new Polygon;
  for (i = 0; i != a.length; i++)
    $addPoint(p, a[i].x_0, a[i].y_0);
  return p;
}

function $draw2Leads(this$static, g){
  $setVoltageColor(this$static, g, this$static.volts[0]);
  drawThickLine_0();
  $setVoltageColor(this$static, g, this$static.volts[1]);
  drawThickLine_0();
}

function $drawCenteredText(this$static, g, x_0, y_0, cx){
  var h2, w;
  w = round_int(null.$_nullMethod().$_nullMethod());
  h2 = g.currentFontSize / 2 | 0;
  null.$_nullMethod();
  null.$_nullMethod();
  if (cx) {
    null.$_nullMethod();
    $adjustBbox(this$static, x_0 - (w / 2 | 0), y_0 - h2, x_0 + (w / 2 | 0), y_0 + h2);
  }
   else {
    $adjustBbox(this$static, x_0, y_0 - h2, x_0 + w, y_0 + h2);
  }
  cx && null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
}

function $drawCoil(this$static, g, p1, p2, v1, v2){
  var len, loop;
  len = distance(p1, p2);
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod($getHexValue($getVoltageColor(this$static, g, v1)));
  null.$_nullMethod($getHexValue($getVoltageColor(this$static, g, v2)));
  null.$_nullMethod();
  null.$_nullMethod(($clinit_Context2d$LineCap() , ROUND).value_0);
  len > 24?null.$_nullMethod():null.$_nullMethod();
  for (loop = 0; loop != 3; loop++) {
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
  }
  null.$_nullMethod();
}

function $drawDots(g, pa, pb, pos){
  var di, dn, dx, dy;
  if (!sim.simRunning || pos == 0 || !sim.dotsCheckItem.on)
    return;
  dx = pb.x_0 - pa.x_0;
  dy = pb.y_0 - pa.y_0;
  dn = $wnd.Math.sqrt(dx * dx + dy * dy);
  $setColor(g, sim.conventionCheckItem.on?($clinit_Color() , yellow):($clinit_Color() , cyan));
  pos %= 16;
  pos < 0 && (pos += 16);
  for (di = pos; di < dn; di += 16) {
    null.$_nullMethod();
  }
}

function $drawHandles(this$static, g, c){
  $setColor(g, c);
  this$static.lastHandleGrabbed == -1?null.$_nullMethod():this$static.lastHandleGrabbed == 0 && null.$_nullMethod();
  this$static.numHandles == 2 && (this$static.lastHandleGrabbed == -1?null.$_nullMethod():this$static.lastHandleGrabbed == 1 && null.$_nullMethod());
}

function $drawPosts(this$static, g){
  var i;
  if (!sim.dragElm && !(this$static.iAmMouseElm || this$static.selected))
    return;
  if (sim.mouseMode == 2 || sim.mouseMode == 3)
    return;
  for (i = 0; i != this$static.getPostCount(); i++) {
    this$static.getPost(i);
    $setColor(g, whiteColor);
    $fillOval();
  }
}

function $drawValues(this$static, g, s, hs){
  var dpx;
  if (s == null)
    return;
  $setFont(g, unitsFont);
  round_int(null.$_nullMethod().$_nullMethod());
  $setColor(g, whiteColor);
  dpx = round_int(this$static.dpx1 * hs);
  dpx == 0?null.$_nullMethod():null.$_nullMethod();
}

function $getHandleGrabbedClose(this$static, xtest, ytest){
  this$static.lastHandleGrabbed = -1;
  distanceSq(this$static.x_0, this$static.y_0, this$static.x2, this$static.y2) >= 256 && (distanceSq(this$static.x_0, this$static.y_0, xtest, ytest) <= 25?(this$static.lastHandleGrabbed = 0):distanceSq(this$static.x2, this$static.y2, xtest, ytest) <= 25 && (this$static.lastHandleGrabbed = 1));
  return this$static.lastHandleGrabbed;
}

function $getPostVoltage(this$static, x_0){
  return this$static.volts[x_0];
}

function $getSchmittPolygon(this$static, gsize, ctr){
  var h1, h2, hs, len, pts;
  pts = $newPointArray(6);
  hs = 3 * gsize;
  h1 = 3 * gsize;
  h2 = h1 * 2;
  len = distance(this$static.lead1, this$static.lead2);
  pts[0] = $interpPoint_0(this$static.lead1, this$static.lead2, ctr - h2 / len, hs);
  pts[1] = $interpPoint_0(this$static.lead1, this$static.lead2, ctr + h1 / len, hs);
  pts[2] = $interpPoint_0(this$static.lead1, this$static.lead2, ctr + h1 / len, -hs);
  pts[3] = $interpPoint_0(this$static.lead1, this$static.lead2, ctr + h2 / len, -hs);
  pts[4] = $interpPoint_0(this$static.lead1, this$static.lead2, ctr - h1 / len, -hs);
  pts[5] = $interpPoint_0(this$static.lead1, this$static.lead2, ctr - h1 / len, hs);
  return $createPolygon_1(pts);
}

function $getVoltageColor(this$static, g, volts){
  var c;
  if (this$static.iAmMouseElm || this$static.selected) {
    return selectColor;
  }
  if (!sim.voltsCheckItem.on) {
    if (!sim.powerCheckItem.on)
      return whiteColor;
    return g.lastColor;
  }
  c = round_int((volts + voltageRange) * (colorScaleCount - 1) / (voltageRange * 2));
  c < 0 && (c = 0);
  c >= colorScaleCount && (c = colorScaleCount - 1);
  return colorScale[c];
}

function $interpPoint(a, b, f){
  var p;
  p = new Point;
  p.x_0 = round_int($wnd.Math.floor(a.x_0 * (1 - f) + b.x_0 * f + $intern_49));
  p.y_0 = round_int($wnd.Math.floor(a.y_0 * (1 - f) + b.y_0 * f + $intern_49));
  return p;
}

function $interpPoint_0(a, b, f, g){
  var p;
  p = new Point;
  $interpPoint_2(a, b, p, f, g);
  return p;
}

function $interpPoint_1(a, b, c, f){
  c.x_0 = round_int($wnd.Math.floor(a.x_0 * (1 - f) + b.x_0 * f + $intern_49));
  c.y_0 = round_int($wnd.Math.floor(a.y_0 * (1 - f) + b.y_0 * f + $intern_49));
}

function $interpPoint_2(a, b, c, f, g){
  var gx, gy;
  gx = b.y_0 - a.y_0;
  gy = a.x_0 - b.x_0;
  g /= $wnd.Math.sqrt(gx * gx + gy * gy);
  c.x_0 = round_int($wnd.Math.floor(a.x_0 * (1 - f) + b.x_0 * f + g * gx + $intern_49));
  c.y_0 = round_int($wnd.Math.floor(a.y_0 * (1 - f) + b.y_0 * f + g * gy + $intern_49));
}

function $interpPoint2(a, b, c, d, f, g){
  var gx, gy;
  gx = b.y_0 - a.y_0;
  gy = a.x_0 - b.x_0;
  g /= $wnd.Math.sqrt(gx * gx + gy * gy);
  c.x_0 = round_int($wnd.Math.floor(a.x_0 * (1 - f) + b.x_0 * f + g * gx + $intern_49));
  c.y_0 = round_int($wnd.Math.floor(a.y_0 * (1 - f) + b.y_0 * f + g * gy + $intern_49));
  d.x_0 = round_int($wnd.Math.floor(a.x_0 * (1 - f) + b.x_0 * f - g * gx + $intern_49));
  d.y_0 = round_int($wnd.Math.floor(a.y_0 * (1 - f) + b.y_0 * f - g * gy + $intern_49));
}

function $movePoint(this$static, n, dx, dy){
  var oldx, oldx2, oldy, oldy2;
  oldx = this$static.x_0;
  oldy = this$static.y_0;
  oldx2 = this$static.x2;
  oldy2 = this$static.y2;
  if (n == 0) {
    this$static.x_0 += dx;
    this$static.y_0 += dy;
  }
   else {
    this$static.x2 += dx;
    this$static.y2 += dy;
  }
  if (this$static.x_0 == this$static.x2 && this$static.y_0 == this$static.y2) {
    this$static.x_0 = oldx;
    this$static.y_0 = oldy;
    this$static.x2 = oldx2;
    this$static.y2 = oldy2;
  }
  this$static.setPoints();
}

function $needsHighlight(this$static){
  return this$static.iAmMouseElm || this$static.selected;
}

function $newPointArray(n){
  var a;
  a = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, $intern_50, 14, n, 0, 1);
  while (n > 0)
    a[--n] = new Point;
  return a;
}

function $reset(this$static){
  var i;
  for (i = 0; i != this$static.getPostCount() + this$static.getInternalNodeCount(); i++)
    this$static.volts[i] = 0;
  this$static.curcount_0 = 0;
}

function $setBbox(this$static, x1, y1, x2, y2){
  var q;
  if (x1 > x2) {
    q = x1;
    x1 = x2;
    x2 = q;
  }
  if (y1 > y2) {
    q = y1;
    y1 = y2;
    y2 = q;
  }
  $setBounds(this$static.boundingBox, x1, y1, x2 - x1 + 1, y2 - y1 + 1);
}

function $setBbox_0(this$static, p1, p2, w){
  var dpx, dpy;
  $setBbox(this$static, p1.x_0, p1.y_0, p2.x_0, p2.y_0);
  dpx = round_int(this$static.dpx1 * w);
  dpy = round_int(this$static.dpy1 * w);
  $adjustBbox(this$static, p1.x_0 + dpx, p1.y_0 + dpy, p1.x_0 - dpx, p1.y_0 - dpy);
}

function $setPoints(this$static){
  this$static.dx = this$static.x2 - this$static.x_0;
  this$static.dy = this$static.y2 - this$static.y_0;
  this$static.dn = $wnd.Math.sqrt(this$static.dx * this$static.dx + this$static.dy * this$static.dy);
  this$static.dpx1 = this$static.dy / this$static.dn;
  this$static.dpy1 = -this$static.dx / this$static.dn;
  this$static.dsign = this$static.dy == 0?sign(this$static.dx):sign(this$static.dy);
  this$static.point1 = new Point_0(this$static.x_0, this$static.y_0);
  this$static.point2 = new Point_0(this$static.x2, this$static.y2);
}

function $setPowerColor(this$static, g, w0){
  var i;
  if (!sim.powerCheckItem.on || this$static.iAmMouseElm || this$static.selected)
    return;
  w0 *= powerMult;
  i = round_int((colorScaleCount / 2 | 0) + (colorScaleCount / 2 | 0) * -w0);
  i < 0 && (i = 0);
  i >= colorScaleCount && (i = colorScaleCount - 1);
  $setColor(g, colorScale[i]);
}

function $setPowerColor_0(this$static, g){
  if (!sim.powerCheckItem.on || this$static.iAmMouseElm || this$static.selected)
    return;
  $setPowerColor(this$static, g, this$static.getPower());
}

function $setSelected(this$static, x_0){
  this$static.selected = x_0;
}

function $setVoltageColor(this$static, g, volts){
  $setColor(g, $getVoltageColor(this$static, g, volts));
}

function $updateDotCount(cur, cc){
  var cadd;
  if (!sim.simRunning)
    return cc;
  cadd = cur * currentMult;
  cadd %= 8;
  return cc + cadd;
}

function CircuitElm(xx, yy){
  $$init_0(this);
  this.x_0 = this.x2 = xx;
  this.y_0 = this.y2 = yy;
  this.flags = this.getDefaultFlags();
  $allocNodes(this);
  this.boundingBox = new Rectangle;
  $setBounds(this.boundingBox, min_1(this.x_0, this.x2), min_1(this.y_0, this.y2), abs_0(this.x2 - this.x_0) + 1, abs_0(this.y2 - this.y_0) + 1);
}

function CircuitElm_0(xa, ya, xb, yb, f){
  $$init_0(this);
  this.x_0 = xa;
  this.y_0 = ya;
  this.x2 = xb;
  this.y2 = yb;
  this.flags = f;
  $allocNodes(this);
  this.boundingBox = new Rectangle;
  $setBounds(this.boundingBox, min_1(this.x_0, this.x2), min_1(this.y_0, this.y2), abs_0(this.x2 - this.x_0) + 1, abs_0(this.y2 - this.y_0) + 1);
}

function abs_0(x_0){
  return x_0 < 0?-x_0:x_0;
}

function distance(p1, p2){
  var x_0, y_0;
  x_0 = p1.x_0 - p2.x_0;
  y_0 = p1.y_0 - p2.y_0;
  return $wnd.Math.sqrt(x_0 * x_0 + y_0 * y_0);
}

function drawThickCircle(){
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
}

function drawThickLine(){
  null.$_nullMethod();
  $drawLine();
  null.$_nullMethod();
}

function drawThickLine_0(){
  null.$_nullMethod();
  $drawLine();
  null.$_nullMethod();
}

function drawThickPolygon(c){
  null.$_nullMethod();
  $drawPolyline(c);
  null.$_nullMethod();
}

function max_1(a, b){
  return a > b?a:b;
}

function min_1(a, b){
  return a < b?a:b;
}

function myGetUnitText(v, u, sf){
  var s, sp, va;
  sp = '';
  if (sf)
    s = shortFormat;
  else {
    s = showFormat;
    sp = ' ';
  }
  va = $wnd.Math.abs(v);
  if (va < 1.0E-14)
    return '0' + sp + u;
  if (va < $intern_51)
    return $format_0(s, v * $intern_52) + sp + 'p' + u;
  if (va < $intern_53)
    return $format_0(s, v * $intern_54) + sp + 'n' + u;
  if (va < $intern_55)
    return $format_0(s, v * $intern_56) + sp + muString + u;
  if (va < 1)
    return $format_0(s, v * $intern_18) + sp + 'm' + u;
  if (va < $intern_18)
    return $format_0(s, v) + sp + u;
  if (va < $intern_56)
    return $format_0(s, v * $intern_55) + sp + 'k' + u;
  if (va < $intern_54)
    return $format_0(s, v * $intern_53) + sp + 'M' + u;
  return $format_0(s, v * $intern_51) + sp + 'G' + u;
}

function setColorScale(){
  var i, n1, n2, v;
  for (i = 0; i != colorScaleCount; i++) {
    v = i * 2 / colorScaleCount - 1;
    if (v < 0) {
      n1 = round_int(128 * -v) + 127;
      n2 = round_int(127 * (1 + v));
      colorScale[i] = new Color(n1, n2, n2);
    }
     else {
      n1 = round_int(128 * v) + 127;
      n2 = round_int(127 * (1 - v));
      sim.alternativeColorCheckItem.on?(colorScale[i] = new Color(n2, n2, n1)):(colorScale[i] = new Color(n2, n1, n2));
    }
  }
}

function sign(x_0){
  return x_0 < 0?-1:x_0 == 0?0:1;
}

defineClass(4, 1, $intern_57);
_.calculateCurrent = function calculateCurrent(){
}
;
_.creationFailed = function creationFailed(){
  return this.x_0 == this.x2 && this.y_0 == this.y2;
}
;
_.delete_0 = function delete_0(){
}
;
_.drag = function drag(xx, yy){
  xx = $snapGrid(sim, xx);
  yy = $snapGrid(sim, yy);
  this.noDiagonal && ($wnd.Math.abs(this.x_0 - xx) < $wnd.Math.abs(this.y_0 - yy)?(xx = this.x_0):(yy = this.y_0));
  this.x2 = xx;
  this.y2 = yy;
  this.setPoints();
}
;
_.draggingDone = function draggingDone(){
}
;
_.draw = function draw(g){
}
;
_.getCurrentIntoNode = function getCurrentIntoNode(n){
  return n == 0 && this.getPostCount() == 2?-this.current_0:this.current_0;
}
;
_.getDefaultFlags = function getDefaultFlags(){
  return 0;
}
;
_.getDumpType = function getDumpType(){
  throw toJs(new IllegalStateException);
}
;
_.getEditInfo = function getEditInfo(n){
  return null;
}
;
_.getInfo = function getInfo(arr){
}
;
_.getInternalNodeCount = function getInternalNodeCount(){
  return 0;
}
;
_.getPost = function getPost(n){
  return n == 0?this.point1:n == 1?this.point2:null;
}
;
_.getPostCount = function getPostCount(){
  return 2;
}
;
_.getPower = function getPower(){
  return this.getVoltageDiff() * this.current_0;
}
;
_.getScopeUnits = function getScopeUnits(x_0){
  return x_0 == 3?1:x_0 == 1?2:0;
}
;
_.getShortcut = function getShortcut(){
  return 0;
}
;
_.getVoltageDiff = function getVoltageDiff(){
  return this.volts[0] - this.volts[1];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount(){
  return 0;
}
;
_.setCurrent = function setCurrent(x_0, c){
  this.current_0 = c;
}
;
_.setEditValue = function setEditValue(n, ei){
}
;
_.setMouseElm = function setMouseElm(v){
  this.iAmMouseElm = v;
}
;
_.setNodeVoltage = function setNodeVoltage(n, c){
  this.volts[n] = c;
  this.calculateCurrent();
}
;
_.setPoints = function setPoints(){
  $setPoints(this);
}
;
_.curcount_0 = 0;
_.current_0 = 0;
_.dn = 0;
_.dpx1 = 0;
_.dpy1 = 0;
_.dsign = 0;
_.dx = 0;
_.dy = 0;
_.flags = 0;
_.iAmMouseElm = false;
_.lastHandleGrabbed = -1;
_.noDiagonal = false;
_.numHandles = 2;
_.selected = false;
_.x_0 = 0;
_.x2 = 0;
_.y_0 = 0;
_.y2 = 0;
var colorScale, colorScaleCount = 32, currentMult = 0, lightGrayColor, powerMult = 0, ps1, ps2, selectColor, shortFormat, showFormat, sim, unitsFont, voltageRange = 5, whiteColor;
var Lcom_lushprojects_circuitjs1_client_CircuitElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CircuitElm', 4);
function $drawWaveform(this$static, g, center){
  var i, s, xc, yc;
  $setColor(g, this$static.iAmMouseElm || this$static.selected?selectColor:($clinit_Color() , gray));
  $setPowerColor_0(this$static, g);
  xc = center.x_0;
  yc = center.y_0;
  drawThickCircle();
  $adjustBbox(this$static, xc - 17, yc - 17, xc + 17, yc + 17);
  switch (this$static.waveform) {
    case 2:
      round_int(16 * this$static.dutyCycle - 8 + xc);
      drawThickLine();
      drawThickLine();
      drawThickLine();
      drawThickLine();
      drawThickLine();
      break;
    case 5:
      yc += 4;
      drawThickLine();
      drawThickLine();
      drawThickLine();
      drawThickLine();
      break;
    case 4:
      drawThickLine();
      drawThickLine();
      drawThickLine();
      break;
    case 3:
      {
        drawThickLine();
        drawThickLine();
        drawThickLine();
        drawThickLine();
        break;
      }

    case 1:
      {
        null.$_nullMethod();
        null.$_nullMethod();
        for (i = -10; i <= 10; i++) {
          yc + round_int(0.95 * $wnd.Math.sin(i * $intern_1 / 10) * 8);
          i == -10?null.$_nullMethod():null.$_nullMethod();
        }
        null.$_nullMethod();
        null.$_nullMethod();
        break;
      }

  }
  if (sim.showValuesCheckItem.on) {
    s = myGetUnitText(this$static.frequency, 'Hz', true);
    (this$static.dx == 0 || this$static.dy == 0) && $drawValues(this$static, g, s, 17);
  }
}

function $getEditInfo(this$static, n){
  var ei;
  if (n == 0)
    return new EditInfo(this$static.waveform == 0?'Voltage':'Max Voltage', this$static.maxVoltage, -20, 20);
  if (n == 1) {
    ei = new EditInfo('Waveform', this$static.waveform, -1, -1);
    ei.choice = new Choice;
    $insertItem(ei.choice, LS('D/C'));
    $insertItem(ei.choice, LS('A/C'));
    $insertItem(ei.choice, LS('Square Wave'));
    $insertItem(ei.choice, LS('Triangle'));
    $insertItem(ei.choice, LS('Sawtooth'));
    $insertItem(ei.choice, LS('Pulse'));
    $select(ei.choice, this$static.waveform);
    return ei;
  }
  if (this$static.waveform == 0)
    return null;
  if (n == 2)
    return new EditInfo('Frequency (Hz)', this$static.frequency, 4, 500);
  if (n == 3)
    return new EditInfo('DC Offset (V)', this$static.bias, -20, 20);
  if (n == 4)
    return $setDimensionless(new EditInfo('Phase Offset (degrees)', this$static.phaseShift * 180 / $intern_1, -180, 180));
  if (n == 5 && (this$static.waveform == 5 || this$static.waveform == 2))
    return $setDimensionless(new EditInfo('Duty Cycle', this$static.dutyCycle * 100, 0, 100));
  return null;
}

function $triangleFunc(x_0){
  if (x_0 < $intern_1)
    return x_0 * $intern_58 - 1;
  return 1 - (x_0 - $intern_1) * $intern_58;
}

function VoltageElm(xx, yy, wf){
  CircuitElm.call(this, xx, yy);
  this.waveform = wf;
  this.maxVoltage = 5;
  this.frequency = 40;
  this.dutyCycle = 0.5;
  this.freqTimeZero = 0;
  this.curcount_0 = 0;
}

function VoltageElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.maxVoltage = 5;
  this.frequency = 40;
  this.waveform = 0;
  this.dutyCycle = 0.5;
  try {
    this.waveform = (new Integer_0($nextToken(st))).value_0;
    this.frequency = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.maxVoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.bias = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.phaseShift = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.dutyCycle = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  if ((this.flags & 2) != 0) {
    this.flags &= -3;
    this.phaseShift = 1.5707963267948966;
  }
  (this.flags & 4) == 0 && this.waveform == 5 && (this.dutyCycle = $intern_59);
  this.freqTimeZero = 0;
  this.curcount_0 = 0;
}

defineClass(48, 4, $intern_60, VoltageElm_0);
_.draw = function draw_0(g){
  var plusPoint;
  $setBbox(this, this.x_0, this.y_0, this.x2, this.y2);
  $draw2Leads(this, g);
  if (this.waveform == 0) {
    $setPowerColor_0(this, g);
    $setVoltageColor(this, g, this.volts[0]);
    $interpPoint2(this.lead1, this.lead2, ps1, ps2, 0, 10);
    drawThickLine_0();
    $setVoltageColor(this, g, this.volts[1]);
    $setBbox_0(this, this.point1, this.point2, 16);
    $interpPoint2(this.lead1, this.lead2, ps1, ps2, 1, 16);
    drawThickLine_0();
  }
   else {
    $setBbox_0(this, this.point1, this.point2, 17);
    $interpPoint_1(this.lead1, this.lead2, ps1, 0.5);
    $drawWaveform(this, g, ps1);
    $setColor(g, ($clinit_Color() , white));
    $setFont(g, unitsFont);
    plusPoint = $interpPoint_0(this.point1, this.point2, (this.dn / 2 + 17 + 4) / this.dn, 10 * this.dsign);
    plusPoint.y_0 += 4;
    round_int(null.$_nullMethod().$_nullMethod());
    null.$_nullMethod();
  }
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  if (sim.dragElm != this) {
    if (this.waveform == 0)
      $drawDots(g, this.point1, this.point2, this.curcount_0);
    else {
      $drawDots(g, this.point1, this.lead1, this.curcount_0);
      $drawDots(g, this.point2, this.lead2, -this.curcount_0);
    }
  }
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_0(){
  return 118;
}
;
_.getEditInfo = function getEditInfo_0(n){
  return $getEditInfo(this, n);
}
;
_.getInfo = function getInfo_0(arr){
  var i;
  switch (this.waveform) {
    case 0:
    case 6:
      arr[0] = 'voltage source';
      break;
    case 1:
      arr[0] = 'A/C source';
      break;
    case 2:
      arr[0] = 'square wave gen';
      break;
    case 5:
      arr[0] = 'pulse gen';
      break;
    case 4:
      arr[0] = 'sawtooth gen';
      break;
    case 3:
      arr[0] = 'triangle gen';
  }
  arr[1] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
  arr[2] = (instanceOf(this, 33)?'V = ':'Vd = ') + myGetUnitText(this.getVoltageDiff(), 'V', false);
  if (this.waveform != 0 && this.waveform != 6) {
    arr[3] = 'f = ' + myGetUnitText(this.frequency, 'Hz', false);
    arr[4] = 'Vmax = ' + myGetUnitText(this.maxVoltage, 'V', false);
    i = 5;
    this.waveform == 1 && this.bias == 0 && (arr[i++] = 'V(rms) = ' + myGetUnitText(this.maxVoltage / 1.41421356, 'V', false));
    this.bias != 0?(arr[i++] = 'Voff = ' + myGetUnitText(this.bias, 'V', false)):this.frequency > 500 && (arr[i++] = 'wavelength = ' + myGetUnitText(299790000 / this.frequency, 'm', false));
    arr[i++] = 'P = ' + myGetUnitText(-this.getVoltageDiff() * this.current_0, 'W', false);
  }
  if (this.waveform == 0 && this.current_0 != 0 && sim.showResistanceInVoltageSources) {
    arr[3] = '(R = ' + myGetUnitText(this.maxVoltage / this.current_0, ohmString, false) + ')';
    arr[4] = 'P = ' + myGetUnitText(-this.getVoltageDiff() * this.current_0, 'W', false);
  }
}
;
_.getPower = function getPower_0(){
  return -this.getVoltageDiff() * this.current_0;
}
;
_.getVoltage = function getVoltage(){
  var w;
  w = $intern_2 * (sim.t - this.freqTimeZero) * this.frequency + this.phaseShift;
  switch (this.waveform) {
    case 0:
      return this.maxVoltage + this.bias;
    case 1:
      return $wnd.Math.sin(w) * this.maxVoltage + this.bias;
    case 2:
      return this.bias + (w % $intern_2 > $intern_2 * this.dutyCycle?-this.maxVoltage:this.maxVoltage);
    case 3:
      return this.bias + $triangleFunc(w % $intern_2) * this.maxVoltage;
    case 4:
      return this.bias + w % $intern_2 * (this.maxVoltage / $intern_1) - this.maxVoltage;
    case 5:
      return w % $intern_2 < $intern_2 * this.dutyCycle?this.maxVoltage + this.bias:this.bias;
    default:return 0;
  }
}
;
_.getVoltageDiff = function getVoltageDiff_0(){
  return this.volts[1] - this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_0(){
  return 1;
}
;
_.setEditValue = function setEditValue_0(n, ei){
  var maxfreq, oldfreq, ow;
  n == 0 && (this.maxVoltage = ei.value_0);
  n == 3 && (this.bias = ei.value_0);
  if (n == 2) {
    oldfreq = this.frequency;
    this.frequency = ei.value_0;
    maxfreq = 1 / (8 * sim.timeStep);
    this.frequency > maxfreq && (confirm_0(LS('Adjust timestep to allow for higher frequencies?'))?(sim.timeStep = 1 / (32 * this.frequency)):(this.frequency = maxfreq));
    this.freqTimeZero = sim.t - oldfreq * (sim.t - this.freqTimeZero) / this.frequency;
  }
  if (n == 1) {
    ow = this.waveform;
    this.waveform = ei.choice.element.selectedIndex;
    if (this.waveform == 0 && ow != 0) {
      ei.newDialog = true;
      this.bias = 0;
    }
     else 
      this.waveform != ow && (ei.newDialog = true);
    this.waveform == 5 && ow != 5?(this.dutyCycle = $intern_59):ow == 5 && this.waveform != 5 && (this.dutyCycle = 0.5);
    this.setPoints();
  }
  n == 4 && (this.phaseShift = ei.value_0 * $intern_1 / 180);
  n == 5 && (this.dutyCycle = ei.value_0 * $intern_26);
}
;
_.setPoints = function setPoints_0(){
  $setPoints(this);
  $calcLeads(this, this.waveform == 0 || this.waveform == 6?8:34);
}
;
_.bias = 0;
_.dutyCycle = 0;
_.freqTimeZero = 0;
_.frequency = 0;
_.maxVoltage = 0;
_.phaseShift = 0;
_.waveform = 0;
var Lcom_lushprojects_circuitjs1_client_VoltageElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'VoltageElm', 48);
function $drawRailText(this$static, g){
  $setColor(g, this$static.iAmMouseElm || this$static.selected?selectColor:whiteColor);
  $setPowerColor_0(this$static, g);
  $drawCenteredText(this$static, g, this$static.x2, this$static.y2, true);
}

function RailElm(xx, yy){
  VoltageElm.call(this, xx, yy, 0);
  this.numHandles = 1;
}

function RailElm_0(xx, yy, wf){
  VoltageElm.call(this, xx, yy, wf);
  this.numHandles = 1;
}

function RailElm_1(xa, ya, xb, yb, f, st){
  VoltageElm_0.call(this, xa, ya, xb, yb, f, st);
  this.numHandles = 1;
}

defineClass(33, 48, $intern_61, RailElm, RailElm_1);
_.draw = function draw_1(g){
  $setBbox_0(this, this.point1, this.point2, 17);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  this.drawRail(g);
  $drawPosts(this, g);
  this.curcount_0 = $updateDotCount(-this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.lead1, this.curcount_0);
}
;
_.drawRail = function drawRail(g){
  var s, v;
  if (this.waveform == 2 && (this.flags & 1) != 0)
    $drawRailText(this, g);
  else if (this.waveform == 0 || this.waveform == 6) {
    $setColor(g, this.iAmMouseElm || this.selected?selectColor:whiteColor);
    $setPowerColor_0(this, g);
    v = this.getVoltage();
    $wnd.Math.abs(v) < 1?(s = $format_0(showFormat, v) + ' V'):(s = myGetUnitText(v, 'V', true));
    this.getVoltage() > 0 && '+' + s;
    $drawCenteredText(this, g, this.x2, this.y2, true);
  }
   else {
    $drawWaveform(this, g, this.point2);
  }
}
;
_.getDumpType = function getDumpType_1(){
  return 82;
}
;
_.getPostCount = function getPostCount_0(){
  return 1;
}
;
_.getShortcut = function getShortcut_0(){
  return 86;
}
;
_.getVoltageDiff = function getVoltageDiff_1(){
  return this.volts[0];
}
;
_.setPoints = function setPoints_1(){
  $setPoints(this);
  $calcLeads(this, this.waveform == 0 || this.waveform == 6?8:34);
  this.lead1 = $interpPoint(this.point1, this.point2, 1 - 17 / this.dn);
}
;
var Lcom_lushprojects_circuitjs1_client_RailElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'RailElm', 33);
function ACRailElm(xx, yy){
  RailElm_0.call(this, xx, yy, 1);
}

defineClass(535, 33, $intern_61, ACRailElm);
_.getShortcut = function getShortcut_1(){
  return 0;
}
;
var Lcom_lushprojects_circuitjs1_client_ACRailElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ACRailElm', 535);
function ACVoltageElm(xx, yy){
  VoltageElm.call(this, xx, yy, 1);
}

defineClass(534, 48, $intern_60, ACVoltageElm);
var Lcom_lushprojects_circuitjs1_client_ACVoltageElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ACVoltageElm', 534);
function $drawChip(this$static, g){
  var a, b, f, i, oldfont, p;
  oldfont = g.currentFont;
  f = new Font(10 * this$static.csize);
  $setFont(g, f);
  for (i = 0; i != this$static.getPostCount(); i++) {
    p = this$static.pins[i];
    $setVoltageColor(this$static, g, this$static.volts[i]);
    a = p.post;
    b = p.stub;
    drawThickLine_0();
    p.curcount = $updateDotCount(p.current, p.curcount);
    $drawDots(g, b, a, p.curcount);
    if (p.bubble) {
      $setColor(g, sim.printableCheckItem.on?($clinit_Color() , white):($clinit_Color() , black));
      drawThickCircle();
      $setColor(g, lightGrayColor);
      drawThickCircle();
    }
    $setColor(g, whiteColor);
    round_int(null.$_nullMethod().$_nullMethod());
    null.$_nullMethod();
    p.lineOver && $drawLine();
  }
  $setColor(g, this$static.iAmMouseElm || this$static.selected?selectColor:lightGrayColor);
  drawThickPolygon(4);
  this$static.clockPointsX != null && $drawPolyline(3);
  $drawPosts(this$static, g);
  $setFont(g, oldfont);
}

function $getEditInfo_0(this$static, n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Flip X', (this$static.flags & 1024) != 0);
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Flip Y', (this$static.flags & $intern_28) != 0);
    return ei;
  }
  return null;
}

function $getInfo(this$static, arr){
  var a, i, p, t;
  arr[0] = this$static.getChipName();
  a = 1;
  for (i = 0; i != this$static.getPostCount(); i++) {
    p = this$static.pins[i];
    arr[a] != null?(arr[a] += '; '):(arr[a] = '');
    t = p.text_0;
    p.lineOver && (t += "'");
    p.clock && (t = 'Clk');
    arr[a] += t + ' = ' + myGetUnitText(this$static.volts[i], 'V', false);
    i % 2 == 1 && ++a;
  }
}

function $setEditValue(this$static, n, ei){
  if (n == 0) {
    $getState(ei.checkbox)?(this$static.flags |= 1024):(this$static.flags &= -1025);
    $setPoints_0(this$static);
  }
  if (n == 1) {
    $getState(ei.checkbox)?(this$static.flags |= $intern_28):(this$static.flags &= -2049);
    $setPoints_0(this$static);
  }
}

function $setPoints_0(this$static){
  var i, p, x0, xr, xs, y0, yr, ys;
  this$static.clockPointsX = null;
  this$static.x2 - this$static.x_0 > this$static.sizeX * this$static.cspc2 && this$static == sim.dragElm && $setSize(this$static, 2);
  x0 = this$static.x_0 + this$static.cspc2;
  y0 = this$static.y_0;
  xr = x0 - this$static.cspc;
  yr = y0 - this$static.cspc;
  xs = this$static.sizeX * this$static.cspc2;
  ys = this$static.sizeY * this$static.cspc2;
  this$static.rectPointsX = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [xr, xr + xs, xr + xs, xr]);
  this$static.rectPointsY = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [yr, yr, yr + ys, yr + ys]);
  $setBbox(this$static, xr, yr, this$static.rectPointsX[2], this$static.rectPointsY[2]);
  for (i = 0; i != this$static.getPostCount(); i++) {
    p = this$static.pins[i];
    switch (p.side) {
      case 0:
        $setPoint(p, x0, y0, 1, 0, 0, -1, 0, 0);
        break;
      case 1:
        $setPoint(p, x0, y0, 1, 0, 0, 1, 0, ys - this$static.cspc2);
        break;
      case 2:
        $setPoint(p, x0, y0, 0, 1, -1, 0, 0, 0);
        break;
      case 3:
        $setPoint(p, x0, y0, 0, 1, 1, 0, xs - this$static.cspc2, 0);
    }
  }
}

function $setSize(this$static, s){
  this$static.csize = s;
  this$static.cspc = 8 * s;
  this$static.cspc2 = this$static.cspc * 2;
  this$static.flags &= -2;
  this$static.flags |= s == 1?1:0;
}

function ChipElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.needsBits() && (this.bits = instanceOf(this, 178)?10:4);
  this.noDiagonal = true;
  this.setupPins();
  $setSize(this, sim.smallGridCheckItem.on?1:2);
}

function ChipElm_0(xa, ya, xb, yb, f, st){
  var i;
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.needsBits() && (this.bits = (new Integer_0($nextToken(st))).value_0);
  this.noDiagonal = true;
  this.setupPins();
  $setSize(this, (f & 1) != 0?1:2);
  for (i = 0; i != this.getPostCount(); i++) {
    if (this.pins == null)
      this.volts[i] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    else if (this.pins[i].state) {
      this.volts[i] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
      this.pins[i].value_0 = this.volts[i] > 2.5;
    }
  }
}

defineClass(18, 4, $intern_57);
_.drag = function drag_0(xx, yy){
  yy = $snapGrid(sim, yy);
  if (xx < this.x_0)
  ;
  else {
    this.y_0 = this.y2 = yy;
    this.x2 = $snapGrid(sim, xx);
  }
  $setPoints_0(this);
}
;
_.draw = function draw_2(g){
  $drawChip(this, g);
}
;
_.getChipName = function getChipName(){
  return 'chip';
}
;
_.getEditInfo = function getEditInfo_1(n){
  return $getEditInfo_0(this, n);
}
;
_.getInfo = function getInfo_1(arr){
  $getInfo(this, arr);
}
;
_.getPost = function getPost_0(n){
  return this.pins[n].post;
}
;
_.needsBits = function needsBits(){
  return false;
}
;
_.setCurrent = function setCurrent_0(x_0, c){
  var i;
  for (i = 0; i != this.getPostCount(); i++)
    this.pins[i].output && this.pins[i].voltSource == x_0 && (this.pins[i].current = c);
}
;
_.setEditValue = function setEditValue_1(n, ei){
  $setEditValue(this, n, ei);
}
;
_.setPoints = function setPoints_2(){
  $setPoints_0(this);
}
;
_.bits = 0;
_.csize = 0;
_.cspc = 0;
_.cspc2 = 0;
_.sizeX = 0;
_.sizeY = 0;
var Lcom_lushprojects_circuitjs1_client_ChipElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ChipElm', 18);
function ADCElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function ADCElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(278, 18, $intern_57, ADCElm, ADCElm_0);
_.getChipName = function getChipName_0(){
  return 'ADC';
}
;
_.getDumpType = function getDumpType_2(){
  return 167;
}
;
_.getPostCount = function getPostCount_1(){
  return this.bits + 2;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_1(){
  return this.bits;
}
;
_.needsBits = function needsBits_0(){
  return true;
}
;
_.setupPins = function setupPins(){
  var i;
  this.sizeX = 2;
  this.sizeY = this.bits > 2?this.bits:2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, this.bits + 2, 0, 1);
  for (i = 0; i != this.bits; i++) {
    this.pins[i] = new ChipElm$Pin(this, this.bits - 1 - i, 3, 'D' + i);
    this.pins[i].output = true;
  }
  this.pins[this.bits] = new ChipElm$Pin(this, 0, 2, 'In');
  this.pins[this.bits + 1] = new ChipElm$Pin(this, this.sizeY - 1, 2, 'V+');
  $allocNodes(this);
}
;
var Lcom_lushprojects_circuitjs1_client_ADCElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ADCElm', 278);
function $drawWaveform_0(this$static, g, center){
  var xc, yc;
  $setColor(g, this$static.iAmMouseElm || this$static.selected?selectColor:($clinit_Color() , gray));
  $setPowerColor_0(this$static, g);
  xc = center.x_0;
  yc = center.y_0;
  drawThickCircle();
  $adjustBbox(this$static, xc - 17, yc - 17, xc + 17, yc + 17);
}

function AMElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.maxVoltage = 5;
  this.carrierfreq = $intern_18;
  this.signalfreq = 40;
  this.freqTimeZero = 0;
  this.curcount_0 = 0;
}

function AMElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.carrierfreq = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.signalfreq = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.maxVoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  (this.flags & 2) != 0 && (this.flags &= -3);
  this.freqTimeZero = 0;
  this.curcount_0 = 0;
}

defineClass(252, 4, $intern_57, AMElm, AMElm_0);
_.draw = function draw_3(g){
  var f, w;
  $setBbox_0(this, this.point1, this.point2, 17);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  f = new Font(12);
  $setFont(g, f);
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:whiteColor);
  $setPowerColor_0(this, g);
  w = $intern_2 * (sim.t - this.freqTimeZero);
  ($wnd.Math.sin(w * this.signalfreq) + 1) / 2 * $wnd.Math.sin(w * this.carrierfreq) * this.maxVoltage;
  $drawCenteredText(this, g, this.x2, this.y2, true);
  $drawWaveform_0(this, g, this.point2);
  $drawPosts(this, g);
  this.curcount_0 = $updateDotCount(-this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.lead1, this.curcount_0);
}
;
_.getDumpType = function getDumpType_3(){
  return 200;
}
;
_.getEditInfo = function getEditInfo_2(n){
  if (n == 0)
    return new EditInfo('Max Voltage', this.maxVoltage, -20, 20);
  if (n == 1)
    return new EditInfo('Carrier Frequency (Hz)', this.carrierfreq, 4, 500);
  if (n == 2)
    return new EditInfo('Signal Frequency (Hz)', this.signalfreq, 4, 500);
  return null;
}
;
_.getInfo = function getInfo_2(arr){
  arr[0] = 'AM Source';
  arr[1] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
  arr[2] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
  arr[3] = 'cf = ' + myGetUnitText(this.carrierfreq, 'Hz', false);
  arr[4] = 'sf = ' + myGetUnitText(this.signalfreq, 'Hz', false);
  arr[5] = 'Vmax = ' + myGetUnitText(this.maxVoltage, 'V', false);
}
;
_.getPostCount = function getPostCount_2(){
  return 1;
}
;
_.getPower = function getPower_1(){
  return -this.volts[0] * this.current_0;
}
;
_.getVoltageDiff = function getVoltageDiff_2(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_2(){
  return 1;
}
;
_.setEditValue = function setEditValue_2(n, ei){
  n == 0 && (this.maxVoltage = ei.value_0);
  n == 1 && (this.carrierfreq = ei.value_0);
  n == 2 && (this.signalfreq = ei.value_0);
}
;
_.setPoints = function setPoints_3(){
  $setPoints(this);
  this.lead1 = $interpPoint(this.point1, this.point2, 1 - 17 / this.dn);
}
;
_.carrierfreq = 0;
_.freqTimeZero = 0;
_.maxVoltage = 0;
_.signalfreq = 0;
var Lcom_lushprojects_circuitjs1_client_AMElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AMElm', 252);
function AboutBox(){
  PopupPanel.call(this);
  this.vp = new VerticalPanel;
  $setWidget_0(this, this.vp);
  $setWidth(this.vp, '400px');
  $add_3(this.vp, new HTML_0('<p>Circuit Simulator version 2.1.14js (isharp).<\/p><p>Original by Paul Falstad.<br><a href="http://www.falstad.com/" target="_blank">http://www.falstad.com/<\/a><\/p><p>JavaScript conversion by Iain Sharp.<br><a href="http://lushprojects.com/" target="_blank">http://lushprojects.com/<\/a><\/p><p>Thanks to: Edward Calver for 15 new components and other improvements; Rodrigo Hausen for file import/export and many other UI improvements; J. Mike Rollins for the Zener diode code; Julius Schmidt for the spark gap code and some examples; Dustin Soodak for help with the user interface improvements; Jacob Calvert for the T Flip Flop; Ben Hayden for scope spectrum; Thomas Reitinger for the German translation; Krystian S\u0142awi\u0144ski for the Polish translation; Andre Adrian for improved emitter coupled oscillator; Felthry for many examples; Colin Howell for code improvements.<\/p><p style="font-size:9px">This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 2 of the License, or (at your option) any later version.<\/p><p style="font-size:9px">This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.<\/p><p style="font-size:9px">For details of licensing see <A href="http://www.gnu.org/licenses/" target="_blank">http://www.gnu.org/licenses/<\/A>.<\/p><p style="font-size:9px">Source code (Paul):<A href="https://github.com/pfalstad/circuitjs1" target="_blank">https://github.com/pfalstad/circuitjs1<\/A><\/p><p style="font-size:9px">Source code (Iain):<A href="https://github.com/sharpie7/circuitjs1" target="_blank">https://github.com/sharpie7/circuitjs1<\/A><\/p>'));
  $add_3(this.vp, this.okButton = new Button('OK'));
  $addDomHandler(this.okButton, new AboutBox$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $center(this);
  $show(this);
}

defineClass(556, 43, $intern_35, AboutBox);
var Lcom_lushprojects_circuitjs1_client_AboutBox_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AboutBox', 556);
function AboutBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(557, 1, $intern_34, AboutBox$1);
_.onClick = function onClick_0(event_0){
  $hide(this.this$01, false);
}
;
var Lcom_lushprojects_circuitjs1_client_AboutBox$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AboutBox/1', 557);
function $$init_1(this$static){
  this$static.rmsI = 0;
  this$static.selectedValue = 0;
}

function AmmeterElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $$init_1(this);
  this.flags = 1;
}

function AmmeterElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $$init_1(this);
  this.meter = (new Integer_0($nextToken(st))).value_0;
}

defineClass(296, 4, $intern_57, AmmeterElm, AmmeterElm_0);
_.draw = function draw_4(g){
  var s;
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $fillPolygon(this.arrowPoly);
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $setBbox_0(this, this.point1, this.point2, 3);
  s = 'A';
  switch (this.meter) {
    case 0:
      s = myGetUnitText(this.current_0, 'A', false);
      break;
    case 1:
      s = myGetUnitText(this.rmsI, 'A(rms)', false);
  }
  $drawValues(this, g, s, 4);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_4(){
  return 370;
}
;
_.getEditInfo = function getEditInfo_3(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('Value', this.selectedValue, -1, -1);
    ei.choice = new Choice;
    $insertItem(ei.choice, LS('Current'));
    $insertItem(ei.choice, LS('RMS Current'));
    $select(ei.choice, this.meter);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_3(arr){
  arr[0] = 'Ammeter';
  switch (this.meter) {
    case 0:
      arr[1] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
      break;
    case 1:
      arr[1] = 'Irms = ' + myGetUnitText(this.rmsI, 'A', false);
  }
}
;
_.getPower = function getPower_2(){
  return 0;
}
;
_.getVoltageDiff = function getVoltageDiff_3(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_3(){
  return 1;
}
;
_.setEditValue = function setEditValue_3(n, ei){
  n == 0 && (this.meter = ei.choice.element.selectedIndex);
}
;
_.setPoints = function setPoints_4(){
  $setPoints(this);
  this.mid = $interpPoint(this.point1, this.point2, 0.6);
  this.arrowPoly = $calcArrow(this.point1, this.mid, 14, 7);
}
;
_.meter = 0;
_.rmsI = 0;
_.selectedValue = 0;
var Lcom_lushprojects_circuitjs1_client_AmmeterElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AmmeterElm', 296);
function $setPoints_1(this$static){
  $setPoints(this$static);
  $calcLeads(this$static, 32);
  this$static.ps = new Point;
  this$static.point3 = $interpPoint_0(this$static.point1, this$static.point2, 0.5, -16);
  $interpPoint_0(this$static.point1, this$static.point2, 0.5, -8);
}

function AnalogSwitchElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.r_on = 20;
  this.r_off = $intern_62;
}

function AnalogSwitchElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.r_on = 20;
  this.r_off = $intern_62;
  try {
    this.r_on = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.r_off = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
}

defineClass(174, 4, $intern_57, AnalogSwitchElm, AnalogSwitchElm_0);
_.calculateCurrent = function calculateCurrent_0(){
  this.current_0 = (this.volts[0] - this.volts[1]) / this.resistance;
}
;
_.drag = function drag_1(xx, yy){
  var q1, q2;
  xx = $snapGrid(sim, xx);
  yy = $snapGrid(sim, yy);
  abs_0(this.x_0 - xx) < abs_0(this.y_0 - yy)?(xx = this.x_0):(yy = this.y_0);
  q1 = abs_0(this.x_0 - xx) + abs_0(this.y_0 - yy);
  q2 = (q1 / 2 | 0) % sim.gridSize;
  if (q2 != 0)
    return;
  this.x2 = xx;
  this.y2 = yy;
  this.setPoints();
}
;
_.draw = function draw_5(g){
  var hs;
  hs = this.open_0?16:0;
  $setBbox_0(this, this.point1, this.point2, 16);
  $draw2Leads(this, g);
  $setColor(g, lightGrayColor);
  $interpPoint_2(this.lead1, this.lead2, this.ps, 1, hs);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  this.open_0 || (this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0) , sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0));
  $drawPosts(this, g);
}
;
_.getCurrentIntoNode = function getCurrentIntoNode_0(n){
  if (n == 2)
    return 0;
  if (n == 0)
    return -this.current_0;
  return this.current_0;
}
;
_.getDumpType = function getDumpType_5(){
  return 159;
}
;
_.getEditInfo = function getEditInfo_4(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Normally closed', (this.flags & 1) != 0);
    return ei;
  }
  if (n == 1)
    return new EditInfo('On Resistance (ohms)', this.r_on, 0, 0);
  if (n == 2)
    return new EditInfo('Off Resistance (ohms)', this.r_off, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_4(arr){
  arr[0] = 'analog switch';
  arr[1] = this.open_0?'open':'closed';
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[4] = 'Vc = ' + myGetUnitText(this.volts[2], 'V', false);
}
;
_.getPost = function getPost_1(n){
  return n == 0?this.point1:n == 1?this.point2:this.point3;
}
;
_.getPostCount = function getPostCount_3(){
  return 3;
}
;
_.setEditValue = function setEditValue_4(n, ei){
  n == 0 && (this.flags = $getState(ei.checkbox)?this.flags | 1:this.flags & -2);
  n == 1 && ei.value_0 > 0 && (this.r_on = ei.value_0);
  n == 2 && ei.value_0 > 0 && (this.r_off = ei.value_0);
}
;
_.setPoints = function setPoints_5(){
  $setPoints_1(this);
}
;
_.open_0 = false;
_.r_off = 0;
_.r_on = 0;
_.resistance = 0;
var Lcom_lushprojects_circuitjs1_client_AnalogSwitchElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AnalogSwitchElm', 174);
function AnalogSwitch2Elm(xx, yy){
  AnalogSwitchElm.call(this, xx, yy);
}

function AnalogSwitch2Elm_0(xa, ya, xb, yb, f, st){
  AnalogSwitchElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(256, 174, $intern_57, AnalogSwitch2Elm, AnalogSwitch2Elm_0);
_.calculateCurrent = function calculateCurrent_1(){
  this.open_0?(this.current_0 = (this.volts[0] - this.volts[2]) / this.r_on):(this.current_0 = (this.volts[0] - this.volts[1]) / this.r_on);
}
;
_.draw = function draw_6(g){
  var position;
  $setBbox_0(this, this.point1, this.point2, 16);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  $setColor(g, lightGrayColor);
  position = this.open_0?1:0;
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.point1, this.lead1, this.curcount_0);
  $drawDots(g, this.swpoles[position], this.swposts[position], this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_6(){
  return 160;
}
;
_.getInfo = function getInfo_5(arr){
  arr[0] = 'analog switch (SPDT)';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
}
;
_.getPost = function getPost_2(n){
  return n == 0?this.point1:n == 3?this.ctlPoint:this.swposts[n - 1];
}
;
_.getPostCount = function getPostCount_4(){
  return 4;
}
;
_.setPoints = function setPoints_6(){
  $setPoints_1(this);
  $calcLeads(this, 32);
  this.swposts = $newPointArray(2);
  this.swpoles = $newPointArray(2);
  $interpPoint2(this.lead1, this.lead2, this.swpoles[0], this.swpoles[1], 1, 16);
  $interpPoint2(this.point1, this.point2, this.swposts[0], this.swposts[1], 1, 16);
  this.ctlPoint = $interpPoint_0(this.point1, this.point2, 0.5, 16);
}
;
var Lcom_lushprojects_circuitjs1_client_AnalogSwitch2Elm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AnalogSwitch2Elm', 256);
function $createEuroGatePolygon(this$static){
  var pts;
  pts = $newPointArray(4);
  $interpPoint2(this$static.lead1, this$static.lead2, pts[0], pts[1], 0, this$static.hs2);
  $interpPoint2(this$static.lead1, this$static.lead2, pts[3], pts[2], 1, this$static.hs2);
  this$static.gatePoly = $createPolygon_1(pts);
}

function $setPoints_2(this$static){
  var hs, i, i0;
  $setPoints(this$static);
  this$static.dn > 150 && this$static == sim.dragElm && $setSize_0(this$static, 2);
  hs = this$static.gheight;
  this$static.ww = this$static.gwidth2;
  this$static.ww > this$static.dn / 2 && (this$static.ww = round_int(this$static.dn / 2));
  this$static.isInverting() && this$static.ww + 8 > this$static.dn / 2 && (this$static.ww = round_int(this$static.dn / 2 - 8));
  $calcLeads(this$static, this$static.ww * 2);
  this$static.inPosts = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, $intern_50, 14, this$static.inputCount, 0, 1);
  this$static.inGates = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, $intern_50, 14, this$static.inputCount, 0, 1);
  $allocNodes(this$static);
  i0 = -this$static.inputCount / 2 | 0;
  for (i = 0; i != this$static.inputCount; ++i , i0++) {
    i0 == 0 && (this$static.inputCount & 1) == 0 && ++i0;
    this$static.inPosts[i] = $interpPoint_0(this$static.point1, this$static.point2, 0, hs * i0);
    this$static.inGates[i] = $interpPoint_0(this$static.lead1, this$static.lead2, 0, hs * i0);
    this$static.volts[i] = this$static.lastOutput ^ this$static.isInverting()?5:0;
  }
  this$static.hs2 = this$static.gwidth * ((this$static.inputCount / 2 | 0) + 1);
  $setBbox_0(this$static, this$static.point1, this$static.point2, this$static.hs2);
  (this$static.flags & 2) != 0 && (this$static.schmittPoly = $getSchmittPolygon(this$static, this$static.gsize, 0.4699999988079071));
}

function $setSize_0(this$static, s){
  this$static.gsize = s;
  this$static.gwidth = 7 * s;
  this$static.gwidth2 = 14 * s;
  this$static.gheight = 8 * s;
  this$static.flags &= -2;
  this$static.flags |= s == 1?1:0;
}

function GateElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.inputCount = 2;
  this.noDiagonal = true;
  this.inputCount = 2;
  this.highVoltage = lastHighVoltage;
  lastSchmitt && (this.flags |= 2);
  $setSize_0(this, sim.smallGridCheckItem.on?1:2);
}

function GateElm_0(xa, ya, xb, yb, f, st){
  var lastOutputVoltage;
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.inputCount = 2;
  this.inputCount = (new Integer_0($nextToken(st))).value_0;
  lastOutputVoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.noDiagonal = true;
  this.highVoltage = 5;
  try {
    this.highVoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.lastOutput = lastOutputVoltage > this.highVoltage * 0.5;
  $setSize_0(this, (f & 1) != 0?1:2);
}

defineClass(176, 4, $intern_57);
_.draw = function draw_7(g){
  var center, i;
  for (i = 0; i != this.inputCount; i++) {
    $setVoltageColor(this, g, this.volts[i]);
    drawThickLine_0();
  }
  $setVoltageColor(this, g, this.volts[this.inputCount]);
  drawThickLine_0();
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  drawThickPolygon(this.gatePoly.npoints);
  if (sim.euroGatesCheckItem.on) {
    center = $interpPoint(this.point1, this.point2, 0.5);
    $drawCenteredText(this, g, (this.getGateText() , center.x_0), center.y_0 - 6 * this.gsize, true);
  }
  null.$_nullMethod();
  (this.flags & 2) != 0 && $drawPolyline(this.schmittPoly.npoints);
  null.$_nullMethod();
  if (this.linePoints != null)
    for (i = 0; i != this.linePoints.length - 1; i++)
      drawThickLine_0();
  this.isInverting() && drawThickCircle();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.lead2, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getEditInfo = function getEditInfo_5(n){
  var ei;
  if (n == 0)
    return $setDimensionless(new EditInfo('# of Inputs', this.inputCount, 1, 8));
  if (n == 1)
    return new EditInfo('High Voltage (V)', this.highVoltage, 1, 10);
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Schmitt Inputs', (this.flags & 2) != 0);
    return ei;
  }
  return null;
}
;
_.getGateText = function getGateText(){
  return null;
}
;
_.getInfo = function getInfo_6(arr){
  arr[0] = this.getGateName();
  arr[1] = 'Vout = ' + myGetUnitText(this.volts[this.inputCount], 'V', false);
  arr[2] = 'Iout = ' + myGetUnitText(this.current_0, 'A', false);
}
;
_.getPost = function getPost_3(n){
  if (n == this.inputCount)
    return this.point2;
  return this.inPosts[n];
}
;
_.getPostCount = function getPostCount_5(){
  return this.inputCount + 1;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_4(){
  return 1;
}
;
_.isInverting = function isInverting(){
  return false;
}
;
_.setEditValue = function setEditValue_5(n, ei){
  if (n == 0) {
    this.inputCount = round_int(ei.value_0);
    this.setPoints();
  }
  n == 1 && (this.highVoltage = lastHighVoltage = ei.value_0);
  if (n == 2) {
    $getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3);
    lastSchmitt = (this.flags & 2) != 0;
    this.setPoints();
  }
}
;
_.setPoints = function setPoints_7(){
  $setPoints_2(this);
}
;
_.gheight = 0;
_.gsize = 0;
_.gwidth = 0;
_.gwidth2 = 0;
_.highVoltage = 0;
_.hs2 = 0;
_.inputCount = 0;
_.lastOutput = false;
_.ww = 0;
var lastHighVoltage = 5, lastSchmitt = false;
var Lcom_lushprojects_circuitjs1_client_GateElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'GateElm', 176);
function AndGateElm(xx, yy){
  GateElm.call(this, xx, yy);
}

function AndGateElm_0(xa, ya, xb, yb, f, st){
  GateElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(177, 176, $intern_57, AndGateElm, AndGateElm_0);
_.getDumpType = function getDumpType_7(){
  return 150;
}
;
_.getGateName = function getGateName(){
  return 'AND gate';
}
;
_.getGateText = function getGateText_0(){
  return '&';
}
;
_.getShortcut = function getShortcut_2(){
  return 50;
}
;
_.setPoints = function setPoints_8(){
  var a, b, i, triPoints;
  $setPoints_2(this);
  if (sim.euroGatesCheckItem.on) {
    $createEuroGatePolygon(this);
  }
   else {
    triPoints = $newPointArray(23);
    $interpPoint2(this.lead1, this.lead2, triPoints[0], triPoints[22], 0, this.hs2);
    for (i = 0; i != 10; i++) {
      a = i * 0.1;
      b = $wnd.Math.sqrt(1 - a * a);
      $interpPoint2(this.lead1, this.lead2, triPoints[i + 1], triPoints[21 - i], 0.5 + a / 2, b * this.hs2);
    }
    triPoints[11] = new Point_1(this.lead2);
    this.gatePoly = $createPolygon_1(triPoints);
  }
  if (this.isInverting()) {
    $interpPoint(this.point1, this.point2, 0.5 + (this.ww + 4) / this.dn);
    this.lead2 = $interpPoint(this.point1, this.point2, 0.5 + (this.ww + 8) / this.dn);
  }
}
;
var Lcom_lushprojects_circuitjs1_client_AndGateElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AndGateElm', 177);
function AntennaElm(xx, yy){
  RailElm_0.call(this, xx, yy, 1);
}

function AntennaElm_0(xa, ya, xb, yb, f, st){
  RailElm_1.call(this, xa, ya, xb, yb, f, st);
  this.waveform = 1;
}

defineClass(245, 33, $intern_61, AntennaElm, AntennaElm_0);
_.drawRail = function drawRail_0(g){
  $drawRailText(this, g);
}
;
_.getDumpType = function getDumpType_8(){
  return 65;
}
;
_.getEditInfo = function getEditInfo_6(n){
  return null;
}
;
_.getShortcut = function getShortcut_3(){
  return 0;
}
;
_.getVoltage = function getVoltage_0(){
  var fm;
  this.fmphase += $intern_2 * (2200 + $wnd.Math.sin($intern_2 * sim.t * 13) * 100) * sim.timeStep;
  fm = 3 * $wnd.Math.sin(this.fmphase);
  return $wnd.Math.sin($intern_2 * sim.t * 3000) * (1.3 + $wnd.Math.sin($intern_2 * sim.t * 12)) * 3 + $wnd.Math.sin($intern_2 * sim.t * 2710) * (1.3 + $wnd.Math.sin($intern_2 * sim.t * 13)) * 3 + $wnd.Math.sin($intern_2 * sim.t * 2433) * (1.3 + $wnd.Math.sin($intern_2 * sim.t * 14)) * 3 + fm;
}
;
_.fmphase = 0;
var Lcom_lushprojects_circuitjs1_client_AntennaElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AntennaElm', 245);
function $$init_2(this$static){
  this$static.samplingRateChoices = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [8000, 11025, 16000, 22050, 44100]);
}

function $createButton(this$static){
  var label_0;
  label_0 = '&#9654; Play Audio';
  this$static.labelNum > 1 && (label_0 += ' ' + this$static.labelNum);
  $addWidgetToVerticalPanel(sim, this$static.button_0 = new Button(label_0));
  $setStylePrimaryName(this$static.button_0);
  $addDomHandler(this$static.button_0, new AudioOutputElm$1(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}

function $play(this$static){
  var adj, arr, base, ct, i, max_0, min_0, mult, s;
  arr = [];
  ct = this$static.dataPtr;
  base = 0;
  if (this$static.dataFull) {
    ct = this$static.dataCount;
    base = this$static.dataPtr;
  }
  if (ct * this$static.sampleStep < 0.05) {
    alert_0(LS('Audio data is not ready yet.  Increase simulation speed to make data ready sooner.'));
    return;
  }
  max_0 = -100000000;
  min_0 = $intern_63;
  for (i = 0; i != ct; i++) {
    this$static.data_0[i] > max_0 && (max_0 = this$static.data_0[i]);
    this$static.data_0[i] < min_0 && (min_0 = this$static.data_0[i]);
  }
  adj = -(max_0 + min_0) / 2;
  mult = 32766 / (max_0 + adj);
  for (i = 0; i != ct; i++) {
    s = round_int((this$static.data_0[(i + base) % this$static.dataCount] + adj) * mult);
    arr[arr.length] = s;
  }
  playJS(arr, this$static.samplingRate);
}

function $setDataCount(this$static){
  this$static.dataCount = round_int(this$static.samplingRate * this$static.duration);
  this$static.data_0 = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.dataCount, 15, 1);
  this$static.dataStart = sim.t;
  this$static.dataPtr = 0;
  this$static.dataFull = false;
  this$static.sampleStep = 1 / this$static.samplingRate;
}

function $setTimeStep(this$static){
  var target;
  target = this$static.sampleStep / 8;
  if (sim.timeStep != target) {
    if (okToChangeTimeStep || confirm_0(LS('Adjust timestep for best audio quality and performance?'))) {
      sim.timeStep = target;
      okToChangeTimeStep = true;
    }
  }
}

function AudioOutputElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $$init_2(this);
  this.duration = 1;
  this.samplingRate = lastSamplingRate;
  this.labelNum = 0;
  $setDataCount(this);
  $createButton(this);
}

function AudioOutputElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $$init_2(this);
  this.duration = __parseAndValidateDouble($nextToken(st));
  this.samplingRate = __parseAndValidateInt($nextToken(st));
  this.labelNum = __parseAndValidateInt($nextToken(st));
  $setDataCount(this);
  $createButton(this);
}

function playJS(samples, sampleRate){
  var Wav = function(opt_params){
    this._sampleRate = opt_params && opt_params.sampleRate?opt_params.sampleRate:44100;
    this._channels = opt_params && opt_params.channels?opt_params.channels:2;
    this._eof = true;
    this._bufferNeedle = 0;
  }
  ;
  Wav.prototype.setBuffer = function(buffer){
    this._buffer = this.getWavInt16Array(buffer);
    this._bufferNeedle = 0;
    this._internalBuffer = '';
    this._hasOutputHeader = false;
    this._eof = false;
  }
  ;
  Wav.prototype.getBuffer = function(len){
    var rt;
    if (this._bufferNeedle + len >= this._buffer.length) {
      rt = new Int16Array(this._buffer.length - this._bufferNeedle);
      this._eof = true;
    }
     else {
      rt = new Int16Array(len);
    }
    for (var i = 0; i < rt.length; i++) {
      rt[i] = this._buffer[i + this._bufferNeedle];
    }
    this._bufferNeedle += rt.length;
    return rt.buffer;
  }
  ;
  Wav.prototype.eof = function(){
    return this._eof;
  }
  ;
  Wav.prototype.getWavInt16Array = function(buffer){
    var intBuffer = new Int16Array(buffer.length + 23), tmp;
    intBuffer[0] = 18770;
    intBuffer[1] = 17990;
    intBuffer[2] = 2 * buffer.length + 15 & $intern_19;
    intBuffer[3] = (2 * buffer.length + 15 & $intern_64) >> 16;
    intBuffer[4] = 16727;
    intBuffer[5] = 17750;
    intBuffer[6] = 28006;
    intBuffer[7] = 8308;
    intBuffer[8] = 18;
    intBuffer[9] = 0;
    intBuffer[10] = 1;
    intBuffer[11] = this._channels;
    intBuffer[12] = this._sampleRate & $intern_19;
    intBuffer[13] = (this._sampleRate & $intern_64) >> 16;
    intBuffer[14] = 2 * this._channels * this._sampleRate & $intern_19;
    intBuffer[15] = (2 * this._channels * this._sampleRate & $intern_64) >> 16;
    intBuffer[16] = 4;
    intBuffer[17] = 16;
    intBuffer[18] = 0;
    intBuffer[19] = 24932;
    intBuffer[20] = 24948;
    intBuffer[21] = 2 * buffer.length & $intern_19;
    intBuffer[22] = (2 * buffer.length & $intern_64) >> 16;
    for (var i = 0; i < buffer.length; i++)
      intBuffer[i + 23] = buffer[i];
    return intBuffer;
  }
  ;
  var i_0 = 0, wav = new Wav({sampleRate:sampleRate, channels:1});
  wav.setBuffer(samples);
  var srclist = [];
  while (!wav.eof()) {
    srclist.push(wav.getBuffer($intern_18));
  }
  var oldblob = $doc.audioBlob;
  var oldobj = $doc.audioObject;
  if (oldblob) {
    oldobj.parentNode.removeChild(oldobj);
    URL.revokeObjectURL(oldblob);
  }
  var b = new Blob(srclist, {type:'audio/wav'});
  var url_0 = URL.createObjectURL(b);
  $doc.audioBlob = url_0;
  var audio = $doc.createElement('audio');
  $doc.audioObject = audio;
  audio.src = url_0;
  $doc.body.appendChild(audio);
  audio.play();
}

defineClass(179, 4, {179:1, 4:1, 8:1}, AudioOutputElm, AudioOutputElm_0);
_.delete_0 = function delete_1(){
  $removeWidgetFromVerticalPanel(sim, this.button_0);
}
;
_.draggingDone = function draggingDone_0(){
  $setTimeStep(this);
}
;
_.draw = function draw_8(g){
  var f, selected, textWidth;
  selected = this.iAmMouseElm || this.selected;
  f = new Font(14);
  $setFont(g, f);
  textWidth = round_int(null.$_nullMethod().$_nullMethod());
  $setColor(g, ($clinit_Color() , darkGray));
  null.$_nullMethod();
  $setColor(g, selected?selectColor:whiteColor);
  $interpPoint_1(this.point1, this.point2, this.lead1, 1 - (textWidth / 2 + 8) / this.dn);
  $setBbox_0(this, this.point1, this.lead1, 0);
  $drawCenteredText(this, g, this.x2, this.y2, true);
  $setVoltageColor(this, g, this.volts[0]);
  selected && $setColor(g, selectColor);
  drawThickLine_0();
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_9(){
  return 211;
}
;
_.getEditInfo = function getEditInfo_7(n){
  var ei, i;
  if (n == 0) {
    ei = new EditInfo('Duration (s)', this.duration, 0, 5);
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('Sampling Rate', 0, -1, -1);
    ei.choice = new Choice;
    for (i = 0; i != this.samplingRateChoices.length; i++) {
      $insertItem(ei.choice, LS(this.samplingRateChoices[i] + ''));
      this.samplingRateChoices[i] == this.samplingRate && $select(ei.choice, i);
    }
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_7(arr){
  var ct, dur;
  arr[0] = 'audio output';
  arr[1] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
  ct = this.dataFull?this.dataCount:this.dataPtr;
  dur = this.sampleStep * ct;
  arr[2] = 'start = ' + myGetUnitText(this.dataFull?sim.t - this.duration:this.dataStart, 's', false);
  arr[3] = 'dur = ' + myGetUnitText(dur, 's', false);
  arr[4] = 'samples = ' + ct + (this.dataFull?'':'/' + this.dataCount);
}
;
_.getPostCount = function getPostCount_6(){
  return 1;
}
;
_.getVoltageDiff = function getVoltageDiff_4(){
  return this.volts[0];
}
;
_.setEditValue = function setEditValue_6(n, ei){
  var nsr;
  if (n == 0 && ei.value_0 > 0) {
    this.duration = ei.value_0;
    $setDataCount(this);
  }
  if (n == 1) {
    nsr = this.samplingRateChoices[ei.choice.element.selectedIndex];
    if (nsr != this.samplingRate) {
      this.samplingRate = nsr;
      lastSamplingRate = nsr;
      $setDataCount(this);
      $setTimeStep(this);
    }
  }
}
;
_.setPoints = function setPoints_9(){
  $setPoints(this);
  this.lead1 = new Point;
}
;
_.dataCount = 0;
_.dataFull = false;
_.dataPtr = 0;
_.dataStart = 0;
_.duration = 0;
_.labelNum = 0;
_.sampleStep = 0;
_.samplingRate = 0;
var lastSamplingRate = 8000, okToChangeTimeStep = false;
var Lcom_lushprojects_circuitjs1_client_AudioOutputElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AudioOutputElm', 179);
function AudioOutputElm$1(this$0){
  this.this$01 = this$0;
}

defineClass(463, 1, $intern_34, AudioOutputElm$1);
_.onClick = function onClick_1(event_0){
  $play(this.this$01);
}
;
var Lcom_lushprojects_circuitjs1_client_AudioOutputElm$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'AudioOutputElm/1', 463);
function GraphicElm(xx, yy){
  CircuitElm.call(this, xx, yy);
}

function GraphicElm_0(xa, ya, xb, yb, flags){
  CircuitElm_0.call(this, xa, ya, xb, yb, flags);
}

defineClass(117, 4, $intern_65);
_.getPostCount = function getPostCount_7(){
  return 0;
}
;
var Lcom_lushprojects_circuitjs1_client_GraphicElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'GraphicElm', 117);
function BoxElm(xx, yy){
  GraphicElm.call(this, xx, yy);
  this.x2 = xx;
  this.y2 = yy;
  $setBbox(this, this.x_0, this.y_0, this.x2, this.y2);
}

function BoxElm_0(xa, ya, xb, yb, f){
  GraphicElm_0.call(this, xa, ya, xb, yb, f);
  this.x2 = xb;
  this.y2 = yb;
  $setBbox(this, this.x_0, this.y_0, this.x2, this.y2);
}

defineClass(282, 117, $intern_65, BoxElm, BoxElm_0);
_.creationFailed = function creationFailed_0(){
  return $wnd.Math.abs(this.x2 - this.x_0) < 32 || $wnd.Math.abs(this.y2 - this.y_0) < 32;
}
;
_.drag = function drag_2(xx, yy){
  this.x2 = xx;
  this.y2 = yy;
}
;
_.draw = function draw_9(g){
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:($clinit_Color() , GRAY));
  $setBbox(this, this.x_0, this.y_0, this.x2, this.y2);
  setLineDash(g.context, 16, 6);
  this.x_0 < this.x2 && this.y_0 < this.y2?null.$_nullMethod():this.x_0 > this.x2 && this.y_0 < this.y2?null.$_nullMethod():this.x_0 < this.x2 && this.y_0 > this.y2?null.$_nullMethod():null.$_nullMethod();
  setLineDash(g.context, 0, 0);
}
;
_.getDumpType = function getDumpType_10(){
  return 98;
}
;
_.getEditInfo = function getEditInfo_8(n){
  return null;
}
;
_.getInfo = function getInfo_8(arr){
}
;
_.getShortcut = function getShortcut_4(){
  return 0;
}
;
_.setEditValue = function setEditValue_7(n, ei){
}
;
var Lcom_lushprojects_circuitjs1_client_BoxElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'BoxElm', 282);
function CC2Elm(xx, yy){
  ChipElm.call(this, xx, yy);
  this.gain = 1;
}

function CC2Elm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  this.gain = $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(206, 18, $intern_57, CC2Elm, CC2Elm_0);
_.draw = function draw_10(g){
  this.pins[2].current = this.pins[0].current * this.gain;
  $drawChip(this, g);
}
;
_.getChipName = function getChipName_1(){
  return 'CC2';
}
;
_.getDumpType = function getDumpType_11(){
  return 179;
}
;
_.getInfo = function getInfo_9(arr){
  arr[0] = this.gain == 1?'CCII+~':'CCII-~';
  arr[1] = 'X,Y = ' + myGetUnitText(this.volts[0], 'V', false);
  arr[2] = 'Z = ' + myGetUnitText(this.volts[2], 'V', false);
  arr[3] = 'I = ' + myGetUnitText(this.pins[0].current, 'A', false);
}
;
_.getPostCount = function getPostCount_8(){
  return 3;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_5(){
  return 1;
}
;
_.setupPins = function setupPins_0(){
  this.sizeX = 2;
  this.sizeY = 3;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 3, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, 'X');
  this.pins[0].output = true;
  this.pins[1] = new ChipElm$Pin(this, 2, 2, 'Y');
  this.pins[2] = new ChipElm$Pin(this, 1, 3, 'Z');
}
;
_.gain = 0;
var Lcom_lushprojects_circuitjs1_client_CC2Elm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CC2Elm', 206);
function CC2NegElm(xx, yy){
  ChipElm.call(this, xx, yy);
  this.gain = -1;
}

defineClass(462, 206, $intern_57, CC2NegElm);
var Lcom_lushprojects_circuitjs1_client_CC2NegElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CC2NegElm', 462);
function VCCSElm(xx, yy){
  var parser;
  ChipElm.call(this, xx, yy);
  this.inputCount = 2;
  this.exprString = '.1*(a-b)';
  parser = new ExprParser(this.exprString);
  $parseExpression(parser);
  this.setupPins();
}

function VCCSElm_0(xa, ya, xb, yb, f, st){
  var parser;
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  this.inputCount = __parseAndValidateInt($nextToken(st));
  this.exprString = unescape_0($nextToken(st));
  parser = new ExprParser(this.exprString);
  $parseExpression(parser);
  this.setupPins();
}

defineClass(114, 18, $intern_57, VCCSElm, VCCSElm_0);
_.draw = function draw_11(g){
  $drawChip(this, g);
}
;
_.getChipName = function getChipName_2(){
  return 'VCCS~';
}
;
_.getDumpType = function getDumpType_12(){
  return 213;
}
;
_.getEditInfo = function getEditInfo_9(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('<a href="customfunction.html" target="_blank">Output Function<\/a>', 0, -1, -1);
    ei.text_0 = this.exprString;
    return ei;
  }
  if (n == 1)
    return $setDimensionless(new EditInfo('# of Inputs', this.inputCount, 1, 8));
  return null;
}
;
_.getInfo = function getInfo_10(arr){
  var i;
  $getInfo(this, arr);
  for (i = 0; arr[i] != null; i++)
  ;
  arr[i] = 'I = ' + myGetUnitText(this.pins[this.inputCount].current, 'A', false);
}
;
_.getPostCount = function getPostCount_9(){
  return this.inputCount + 2;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_6(){
  return 0;
}
;
_.setEditValue = function setEditValue_8(n, ei){
  var parser;
  if (n == 0) {
    this.exprString = $getPropertyString(ei.textf.element, 'value');
    parser = new ExprParser(this.exprString);
    $parseExpression(parser);
    return;
  }
  if (n == 1) {
    if (ei.value_0 < 0 || ei.value_0 > 8)
      return;
    this.inputCount = round_int(ei.value_0);
    this.setupPins();
    $allocNodes(this);
    $setPoints_0(this);
  }
}
;
_.setupPins = function setupPins_1(){
  var i;
  this.sizeX = 2;
  this.sizeY = this.inputCount > 2?this.inputCount:2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, this.inputCount + 2, 0, 1);
  for (i = 0; i != this.inputCount; i++)
    this.pins[i] = new ChipElm$Pin(this, i, 2, String.fromCharCode(65 + i & $intern_19));
  this.pins[this.inputCount] = new ChipElm$Pin(this, 0, 3, 'C+');
  this.pins[this.inputCount + 1] = new ChipElm$Pin(this, 1, 3, 'C-');
  new ExprState;
}
;
_.inputCount = 0;
var Lcom_lushprojects_circuitjs1_client_VCCSElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'VCCSElm', 114);
function $setupPins(this$static){
  this$static.sizeX = 2;
  this$static.sizeY = 2;
  this$static.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 3, 0, 1);
  this$static.pins[0] = new ChipElm$Pin(this$static, 0, 2, 'C+');
  this$static.pins[1] = new ChipElm$Pin(this$static, 1, 2, 'C-');
  this$static.pins[1].output = true;
  this$static.pins[2] = new ChipElm$Pin(this$static, 0, 3, 'O+');
  this$static.pins[2].output = true;
  this$static.pins[3] = new ChipElm$Pin(this$static, 1, 3, 'O-');
  new ExprState;
}

function CCCSElm(xx, yy){
  var parser;
  VCCSElm.call(this, xx, yy);
  this.exprString = '2*i';
  parser = new ExprParser(this.exprString);
  $parseExpression(parser);
}

function CCCSElm_0(xa, ya, xb, yb, f, st){
  VCCSElm_0.call(this, xa, ya, xb, yb, f, st);
  this.inputCount = 2;
  $setupPins(this);
}

defineClass(293, 114, $intern_57, CCCSElm, CCCSElm_0);
_.getChipName = function getChipName_3(){
  return 'CCCS';
}
;
_.getDumpType = function getDumpType_13(){
  return 215;
}
;
_.getPostCount = function getPostCount_10(){
  return 4;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_7(){
  return 1;
}
;
_.setCurrent = function setCurrent_1(vn, c){
  if (this.pins[1].voltSource == vn) {
    this.pins[0].current = -c;
    this.pins[1].current = c;
  }
}
;
_.setupPins = function setupPins_2(){
  $setupPins(this);
}
;
var Lcom_lushprojects_circuitjs1_client_CCCSElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CCCSElm', 293);
function $setupPins_0(this$static){
  this$static.sizeX = 2;
  this$static.sizeY = 2;
  this$static.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 3, 0, 1);
  this$static.pins[0] = new ChipElm$Pin(this$static, 0, 2, 'C+');
  this$static.pins[1] = new ChipElm$Pin(this$static, 1, 2, 'C-');
  this$static.pins[1].output = true;
  this$static.pins[2] = new ChipElm$Pin(this$static, 0, 3, 'V+');
  this$static.pins[2].output = true;
  this$static.pins[3] = new ChipElm$Pin(this$static, 1, 3, 'V-');
  new ExprState;
}

function CCVSElm(xx, yy){
  var parser;
  VCCSElm.call(this, xx, yy);
  this.exprString = '2*i';
  parser = new ExprParser(this.exprString);
  $parseExpression(parser);
}

function CCVSElm_0(xa, ya, xb, yb, f, st){
  VCCSElm_0.call(this, xa, ya, xb, yb, f, st);
  this.inputCount = 2;
  $setupPins_0(this);
}

defineClass(292, 114, $intern_57, CCVSElm, CCVSElm_0);
_.getChipName = function getChipName_4(){
  return 'CCVS';
}
;
_.getDumpType = function getDumpType_14(){
  return 214;
}
;
_.getPostCount = function getPostCount_11(){
  return 4;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_8(){
  return 2;
}
;
_.setCurrent = function setCurrent_2(vn, c){
  if (this.pins[1].voltSource == vn) {
    this.pins[0].current = -c;
    this.pins[1].current = c;
  }
  if (this.pins[2].voltSource == vn) {
    this.pins[2].current = c;
    this.pins[3].current = -c;
  }
}
;
_.setupPins = function setupPins_3(){
  $setupPins_0(this);
}
;
var Lcom_lushprojects_circuitjs1_client_CCVSElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CCVSElm', 292);
function $draw(this$static, g){
  var i, s;
  $setBbox_0(this$static, this$static.point1, this$static.point2, 12);
  $setVoltageColor(this$static, g, this$static.volts[0]);
  drawThickLine_0();
  $setPowerColor_0(this$static, g);
  drawThickLine_0();
  sim.powerCheckItem.on && $setColor(g, ($clinit_Color() , gray));
  $setVoltageColor(this$static, g, this$static.volts[1]);
  drawThickLine_0();
  $setPowerColor_0(this$static, g);
  if (this$static.platePoints == null)
    drawThickLine_0();
  else {
    for (i = 0; i != 7; i++)
      drawThickLine_0();
  }
  this$static.curcount_0 = $updateDotCount(this$static.current_0, this$static.curcount_0);
  if (sim.dragElm != this$static) {
    $drawDots(g, this$static.point1, this$static.lead1, this$static.curcount_0);
    $drawDots(g, this$static.point2, this$static.lead2, -this$static.curcount_0);
  }
  $drawPosts(this$static, g);
  if (sim.showValuesCheckItem.on) {
    s = myGetUnitText(this$static.capacitance, 'F', true);
    $drawValues(this$static, g, s, 12);
  }
}

function $getEditInfo_1(this$static, n){
  var ei;
  if (n == 0)
    return new EditInfo('Capacitance (F)', this$static.capacitance, 0, 0);
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Trapezoidal Approximation', (this$static.flags & 2) == 0);
    return ei;
  }
  return null;
}

function $getInfo_0(this$static, arr){
  arr[0] = 'capacitor';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this$static.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this$static.volts[0] - this$static.volts[1]), 'V', false);
  arr[3] = 'C = ' + myGetUnitText(this$static.capacitance, 'F', false);
  arr[4] = 'P = ' + myGetUnitText((this$static.volts[0] - this$static.volts[1]) * this$static.current_0, 'W', false);
}

function $setPoints_3(this$static){
  var f;
  $setPoints(this$static);
  f = (this$static.dn / 2 - 4) / this$static.dn;
  this$static.lead1 = $interpPoint(this$static.point1, this$static.point2, f);
  this$static.lead2 = $interpPoint(this$static.point1, this$static.point2, 1 - f);
  this$static.plate1 = $newPointArray(2);
  this$static.plate2 = $newPointArray(2);
  $interpPoint2(this$static.point1, this$static.point2, this$static.plate1[0], this$static.plate1[1], f, 12);
  $interpPoint2(this$static.point1, this$static.point2, this$static.plate2[0], this$static.plate2[1], 1 - f, 12);
}

function CapacitorElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.capacitance = 1.0E-5;
}

function CapacitorElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.capacitance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(115, 4, $intern_66, CapacitorElm, CapacitorElm_0);
_.calculateCurrent = function calculateCurrent_2(){
  var voltdiff;
  voltdiff = this.volts[0] - this.volts[1];
  this.compResistance > 0 && (this.current_0 = voltdiff / this.compResistance + this.curSourceValue);
}
;
_.draw = function draw_12(g){
  $draw(this, g);
}
;
_.getDumpType = function getDumpType_15(){
  return 99;
}
;
_.getEditInfo = function getEditInfo_10(n){
  return $getEditInfo_1(this, n);
}
;
_.getInfo = function getInfo_11(arr){
  $getInfo_0(this, arr);
}
;
_.getShortcut = function getShortcut_5(){
  return 99;
}
;
_.setEditValue = function setEditValue_9(n, ei){
  n == 0 && ei.value_0 > 0 && (this.capacitance = ei.value_0);
  n == 1 && ($getState(ei.checkbox)?(this.flags &= -3):(this.flags |= 2));
}
;
_.setNodeVoltage = function setNodeVoltage_0(n, c){
  var voltdiff;
  this.volts[n] = c;
  voltdiff = this.volts[0] - this.volts[1];
  this.compResistance > 0 && (this.current_0 = voltdiff / this.compResistance + this.curSourceValue);
}
;
_.setPoints = function setPoints_10(){
  $setPoints_3(this);
}
;
_.capacitance = 0;
_.compResistance = 0;
_.curSourceValue = 0;
var Lcom_lushprojects_circuitjs1_client_CapacitorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CapacitorElm', 115);
function $getState(this$static){
  return $booleanValue(this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?true:false):($clinit_Boolean() , this$static.inputElem.defaultChecked?true:false));
}

function Checkbox(s, b){
  CheckBox_0.call(this, LS(s));
  $setValue_0(this, ($clinit_Boolean() , b?true:false));
}

defineClass(23, 209, $intern_33, Checkbox);
var Lcom_lushprojects_circuitjs1_client_Checkbox_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Checkbox', 23);
function CheckboxAlignedMenuItem(s, cmd){
  MenuItem.call(this, ($clinit_SafeHtmlUtils() , new SafeHtmlString(checkBoxHtml + '&nbsp;<\/div>' + s)), cmd);
}

defineClass(435, 22, $intern_43, CheckboxAlignedMenuItem);
var Lcom_lushprojects_circuitjs1_client_CheckboxAlignedMenuItem_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CheckboxAlignedMenuItem', 435);
function $$init_3(this$static){
  this$static.on = false;
  this$static.name_0 = '';
  this$static.shortcut = '';
  this$static.extcmd = null;
}

function $addShortcut(this$static, s){
  this$static.shortcut = s;
}

function $setState_0(this$static, newstate){
  var s;
  this$static.on = newstate;
  this$static.on?(s = checkBoxHtml + '&#10004;<\/div>' + this$static.name_0):(s = checkBoxHtml + '&nbsp;<\/div>' + this$static.name_0);
  if (this$static.shortcut != '')
    if (this$static.shortcut.length == 1) {
      s = s + '<div style="display:inline-block;width:20px;right:10px;text-align:center;position:absolute;">' + this$static.shortcut + '<\/div>';
    }
     else {
      s = s + '<span style="display:inline-block; width: 60px;"><\/span>';
      s = s + '<div style="display:inline-block;right:10px;text-align:right;position:absolute;">' + this$static.shortcut + '<\/div>';
    }
  $setInnerHTML(this$static.element, s);
}

function CheckboxMenuItem(s){
  MenuItem_1.call(this, s, null);
  $$init_3(this);
  this.command = this;
  this.name_0 = s;
  $setState_0(this, false);
}

function CheckboxMenuItem_0(s, cmd){
  MenuItem_1.call(this, s, null);
  $$init_3(this);
  this.command = this;
  this.extcmd = cmd;
  this.name_0 = s;
  $setState_0(this, false);
}

function CheckboxMenuItem_1(s, c){
  CheckboxMenuItem.call(this, s);
  this.shortcut = c;
}

defineClass(53, 22, $intern_43, CheckboxMenuItem, CheckboxMenuItem_0, CheckboxMenuItem_1);
_.execute_0 = function execute_9(){
  $setState_0(this, !this.on);
  !!this.extcmd && this.extcmd.execute_0();
}
;
_.on = false;
var checkBoxHtml = '<div style="display:inline-block;width:15px;">';
var Lcom_lushprojects_circuitjs1_client_CheckboxMenuItem_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CheckboxMenuItem', 53);
function $setPoint(this$static, px, py, dx, dy, dax, day, sx, sy){
  var xa, ya;
  if ((this$static.this$01.flags & 1024) != 0) {
    dx = -dx;
    dax = -dax;
    px += this$static.this$01.cspc2 * (this$static.this$01.sizeX - 1);
    sx = -sx;
  }
  if ((this$static.this$01.flags & $intern_28) != 0) {
    dy = -dy;
    day = -day;
    py += this$static.this$01.cspc2 * (this$static.this$01.sizeY - 1);
    sy = -sy;
  }
  xa = px + this$static.this$01.cspc2 * dx * this$static.pos + sx;
  ya = py + this$static.this$01.cspc2 * dy * this$static.pos + sy;
  this$static.post = new Point_0(xa + dax * this$static.this$01.cspc2, ya + day * this$static.this$01.cspc2);
  this$static.stub = new Point_0(xa + dax * this$static.this$01.cspc, ya + day * this$static.this$01.cspc);
  new Point_0(xa, ya);
  if (this$static.clock) {
    this$static.this$01.clockPointsX = initUnidimensionalArray(I_classLit, $intern_17, 13, 3, 15, 1);
    this$static.this$01.clockPointsY = initUnidimensionalArray(I_classLit, $intern_17, 13, 3, 15, 1);
    this$static.this$01.clockPointsX[0] = xa + dax * this$static.this$01.cspc - (dx * this$static.this$01.cspc / 2 | 0);
    this$static.this$01.clockPointsY[0] = ya + day * this$static.this$01.cspc - (dy * this$static.this$01.cspc / 2 | 0);
    this$static.this$01.clockPointsX[1] = xa;
    this$static.this$01.clockPointsY[1] = ya;
    this$static.this$01.clockPointsX[2] = xa + dax * this$static.this$01.cspc + (dx * this$static.this$01.cspc / 2 | 0);
    this$static.this$01.clockPointsY[2] = ya + day * this$static.this$01.cspc + (dy * this$static.this$01.cspc / 2 | 0);
  }
}

function ChipElm$Pin(this$0, p, s, t){
  this.this$01 = this$0;
  this.pos = p;
  this.side = s;
  this.text_0 = t;
}

defineClass(6, 1, {6:1}, ChipElm$Pin);
_.bubble = false;
_.clock = false;
_.curcount = 0;
_.current = 0;
_.lineOver = false;
_.output = false;
_.pos = 0;
_.side = 0;
_.state = false;
_.value_0 = false;
_.voltSource = 0;
var Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ChipElm/Pin', 6);
function $select(this$static, i){
  $setSelectedIndex(this$static.element, i);
}

function Choice(){
  FocusWidget.call(this, $createElement($doc, 'select'));
  this.element.className = 'gwt-ListBox';
}

defineClass(151, 567, $intern_41, Choice);
var Lcom_lushprojects_circuitjs1_client_Choice_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Choice', 151);
function $addWidgetToVerticalPanel(this$static, w){
  $add_3(this$static.verticalPanel, w);
}

function $analyzeCircuit(this$static){
  var ce, changed, cln, closure, cn, cnl, g, i, inodes, ivs, j, k, kn, matrixSize, n, posts, pt, vscount;
  if (null.$_nullField.length == 0) {
    this$static.postDrawList = new Vector;
    this$static.badConnectionList = new Vector;
    return;
  }
  this$static.stopMessage = null;
  vscount = 0;
  this$static.nodeList = new Vector;
  this$static.postCountMap = new HashMap;
  $calculateWireClosure(this$static);
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
  }
  cn = new CircuitNode;
  $addElement(this$static.nodeList, cn);
  nodeList = new HashMap;
  for (i = 0; i != null.$_nullField.length; i++) {
    ce = $getElm(i);
    inodes = null.$_nullMethod();
    ivs = null.$_nullMethod();
    posts = null.$_nullMethod();
    for (j = 0; j != posts; j++) {
      pt = null.$_nullMethod();
      g = castTo($get_0(this$static.postCountMap, pt), 20);
      $put(this$static.postCountMap, pt, valueOf(!g?1:g.value_0 + 1));
      cln = castTo($get_0(this$static.nodeMap, pt), 193);
      if (!cln || cln.node == -1) {
        cn = new CircuitNode;
        cnl = new CircuitNodeLink;
        cnl.num = j;
        cnl.elm = ce;
        $addElement(cn.links_0, cnl);
        null.$_nullMethod();
        cln?(cln.node = this$static.nodeList.arrayList.array.length):$put(this$static.nodeMap, pt, new CirSim$NodeMapEntry(this$static.nodeList.arrayList.array.length));
        $addElement(this$static.nodeList, cn);
      }
       else {
        n = cln.node;
        cnl = new CircuitNodeLink;
        cnl.num = j;
        cnl.elm = ce;
        $addElement($getCircuitNode(this$static, n).links_0, cnl);
        null.$_nullMethod();
        n == 0 && null.$_nullMethod();
      }
    }
    for (j = 0; j != inodes; j++) {
      cn = new CircuitNode;
      cn.internal = true;
      cnl = new CircuitNodeLink;
      cnl.num = j + posts;
      cnl.elm = ce;
      $addElement(cn.links_0, cnl);
      null.$_nullMethod();
      $addElement(this$static.nodeList, cn);
    }
    vscount += ivs;
  }
  $makePostDrawList(this$static);
  if (!$calcWireInfo(this$static))
    return;
  this$static.nodeMap = null;
  this$static.voltageSources = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_CircuitElm_2_classLit, $intern_3, 4, vscount, 0, 1);
  vscount = 0;
  this$static.circuitNonLinear = false;
  for (i = 0; i != null.$_nullField.length; i++) {
    ce = $getElm(i);
    null.$_nullMethod() && (this$static.circuitNonLinear = true);
    ivs = null.$_nullMethod();
    for (j = 0; j != ivs; j++) {
      this$static.voltageSources[vscount] = ce;
      null.$_nullMethod(vscount++);
    }
  }
  matrixSize = this$static.nodeList.arrayList.array.length - 1 + vscount;
  this$static.circuitMatrix = initMultidimensionalArray(D_classLit, [$intern_3, $intern_48], [30, 13], 15, [matrixSize, matrixSize], 2);
  this$static.circuitRightSide = initUnidimensionalArray(D_classLit, $intern_48, 13, matrixSize, 15, 1);
  this$static.origMatrix = initMultidimensionalArray(D_classLit, [$intern_3, $intern_48], [30, 13], 15, [matrixSize, matrixSize], 2);
  this$static.origRightSide = initUnidimensionalArray(D_classLit, $intern_48, 13, matrixSize, 15, 1);
  this$static.circuitMatrixSize = this$static.circuitMatrixFullSize = matrixSize;
  this$static.circuitRowInfo = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_RowInfo_2_classLit, $intern_3, 192, matrixSize, 0, 1);
  this$static.circuitPermute = initUnidimensionalArray(I_classLit, $intern_17, 13, matrixSize, 15, 1);
  for (i = 0; i != matrixSize; i++)
    this$static.circuitRowInfo[i] = new RowInfo;
  this$static.circuitNeedsMap = false;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    null.$_nullMethod();
  }
  closure = initUnidimensionalArray(Z_classLit, $intern_17, 13, this$static.nodeList.arrayList.array.length, 16, 1);
  changed = true;
  closure[0] = true;
  while (changed) {
    changed = false;
    for (i = 0; i != null.$_nullField.length; i++) {
      $getElm(i);
      for (j = 0; j < null.$_nullMethod(); j++) {
        if (!closure[null.$_nullMethod()]) {
          null.$_nullMethod() && (closure[null.$_nullMethod()] = changed = true);
          continue;
        }
        for (k = 0; k != null.$_nullMethod(); k++) {
          if (j == k)
            continue;
          kn = null.$_nullMethod();
          if (null.$_nullMethod() && !closure[kn]) {
            closure[kn] = true;
            changed = true;
          }
        }
      }
    }
    if (changed)
      continue;
    for (i = 0; i != this$static.nodeList.arrayList.array.length; i++)
      if (!closure[i] && !$getCircuitNode(this$static, i).internal) {
        console.log('node ' + i + ' unconnected');
        $stampResistor(this$static, i);
        closure[i] = true;
        changed = true;
        break;
      }
  }
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
  }
  $simplifyMatrix(this$static, matrixSize);
  if (!this$static.circuitNonLinear) {
    if (!$lu_factor(this$static.circuitMatrix, this$static.circuitMatrixSize, this$static.circuitPermute)) {
      $stop(this$static, LS('Singular matrix!'));
      return;
    }
  }
  this$static.showResistanceInVoltageSources = true;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
  }
}

function $anySelectedButMouse(this$static){
  var i;
  for (i = 0; i != null.$_nullField.length; i++)
    if ($getElm(i) != this$static.mouseElm && $getElm(i).$_nullField)
      return true;
  return false;
}

function $calcWireCurrents(this$static){
  var cur, i, j;
  for (i = 0; i != this$static.wireInfoList.arrayList.array.length; i++) {
    throwClassCastExceptionUnlessNull($get_3(this$static.wireInfoList, i));
    cur = 0;
    null.$_nullMethod();
    for (j = 0; j != null.$_nullField.length; j++) {
      null.$_nullMethod();
      cur += null.$_nullMethod();
    }
    null.$_nullField == 0?null.$_nullMethod():null.$_nullMethod();
  }
}

function $calcWireInfo(this$static){
  var ce, cn1, cnl, i, isReady0, isReady1, j, moved, neighbors0, neighbors1, notReady, pt, wire;
  moved = 0;
  for (i = 0; i != this$static.wireInfoList.arrayList.array.length; i++) {
    throwClassCastExceptionUnlessNull($get_3(this$static.wireInfoList, i));
    wire = null.$_nullField;
    cn1 = castTo($get_3(this$static.nodeList, null.$_nullField[0]), 87);
    neighbors0 = new Vector;
    neighbors1 = new Vector;
    isReady0 = true;
    isReady1 = true;
    for (j = 0; j != cn1.links_0.arrayList.array.length; j++) {
      cnl = castTo($get_3(cn1.links_0, j), 94);
      ce = cnl.elm;
      if (ce == wire)
        continue;
      pt = cnl.elm.getPost(cnl.num);
      notReady = instanceOf(ce, 142) && !castTo(ce, 142).hasWireInfo;
      if (pt.x_0 == null.$_nullField && pt.y_0 == null.$_nullField) {
        $add_6(neighbors0.arrayList, ce);
        notReady && (isReady0 = false);
      }
       else if (pt.x_0 == null.$_nullField && pt.y_0 == null.$_nullField) {
        $add_6(neighbors1.arrayList, ce);
        notReady && (isReady1 = false);
      }
    }
    if (isReady0)
    ;
    else if (isReady1)
    ;
    else {
      $add_9(this$static.wireInfoList, throwClassCastExceptionUnlessNull($remove_14(this$static.wireInfoList, i--)));
      ++moved;
      if (moved > this$static.wireInfoList.arrayList.array.length * 2) {
        $stop(this$static, LS('wire loop detected'));
        return false;
      }
    }
  }
  return true;
}

function $calculateWireClosure(this$static){
  var i;
  this$static.nodeMap = new HashMap;
  this$static.wireInfoList = new Vector;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    continue;
  }
}

function $canDelayWireProcessing(this$static){
  var i;
  for (i = 0; i != this$static.scopeCount; i++)
    if (this$static.scopes[i].$_nullMethod())
      return false;
  return true;
}

function $centreCircuit(this$static){
  var bounds, scale;
  bounds = $getCircuitBounds();
  scale = 1;
  !!bounds && (scale = $wnd.Math.min(this$static.circuitArea.width_0 / (bounds.width_0 + 140), this$static.circuitArea.height / (bounds.height + 100)));
  scale = $wnd.Math.min(scale, 1.5);
  this$static.transform[0] = this$static.transform[3] = scale;
  this$static.transform[1] = this$static.transform[2] = this$static.transform[4] = this$static.transform[5] = 0;
  if (bounds) {
    this$static.transform[4] = (this$static.circuitArea.width_0 - bounds.width_0 * scale) / 2 - bounds.x_0 * scale;
    this$static.transform[5] = (this$static.circuitArea.height - bounds.height * scale) / 2 - bounds.y_0 * scale;
  }
}

function $clearSelection(){
  var i;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
  }
}

function $combineAll(this$static){
  var i;
  for (i = this$static.scopeCount - 2; i >= 0; i--) {
    this$static.scopes[i].$_nullMethod(this$static.scopes[i + 1]);
    this$static.scopes[i + 1].$_nullMethod();
  }
}

function $combineScope(this$static, s){
  if (s == 0) {
    if (this$static.scopeCount < 2)
      return;
    s = 1;
  }
  this$static.scopes[s - 1].$_nullMethod(this$static.scopes[s]);
  this$static.scopes[s].$_nullMethod();
}

function $composeMainMenu(this$static, mainMenuBar){
  var achipMenuBar, activeBlocMenuBar, activeMenuBar, chipMenuBar, gateMenuBar, inputMenuBar, mi, otherMenuBar, outputMenuBar, passMenuBar;
  $addItem(mainMenuBar, $getClassCheckItem(this$static, LS('Add Wire'), 'WireElm'));
  $addItem(mainMenuBar, $getClassCheckItem(this$static, LS('Add Resistor'), 'ResistorElm'));
  passMenuBar = new MenuBar_0(true);
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Capacitor'), 'CapacitorElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Capacitor (polarized)'), 'PolarCapacitorElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Inductor'), 'InductorElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Switch'), 'SwitchElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Push Switch'), 'PushSwitchElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add SPDT Switch'), 'Switch2Elm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Potentiometer'), 'PotElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Transformer'), 'TransformerElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Tapped Transformer'), 'TappedTransformerElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Transmission Line'), 'TransLineElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Relay'), 'RelayElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Memristor'), 'MemristorElm'));
  $addItem(passMenuBar, $getClassCheckItem(this$static, LS('Add Spark Gap'), 'SparkGapElm'));
  $addItem(mainMenuBar, new MenuItem_0(($clinit_SafeHtmlUtils() , new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Passive Components'))), passMenuBar));
  inputMenuBar = new MenuBar_0(true);
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Ground'), 'GroundElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Voltage Source (2-terminal)'), 'DCVoltageElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add A/C Voltage Source (2-terminal)'), 'ACVoltageElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Voltage Source (1-terminal)'), 'RailElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add A/C Voltage Source (1-terminal)'), 'ACRailElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Square Wave Source (1-terminal)'), 'SquareRailElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Clock'), 'ClockElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add A/C Sweep'), 'SweepElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Variable Voltage'), 'VarRailElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Antenna'), 'AntennaElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add AM Source'), 'AMElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add FM Source'), 'FMElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Current Source'), 'CurrentElm'));
  $addItem(inputMenuBar, $getClassCheckItem(this$static, LS('Add Noise Generator'), 'NoiseElm'));
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Inputs and Sources')), inputMenuBar));
  outputMenuBar = new MenuBar_0(true);
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Analog Output'), 'OutputElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add LED'), 'LEDElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Lamp'), 'LampElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Text'), 'TextElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Box'), 'BoxElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Voltmeter/Scobe Probe'), 'ProbeElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Ohmmeter'), 'OhmMeterElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Labeled Node'), 'LabeledNodeElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Test Point'), 'TestPointElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Ammeter'), 'AmmeterElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Data Export'), 'DataRecorderElm'));
  $addItem(outputMenuBar, $getClassCheckItem(this$static, LS('Add Audio Output'), 'AudioOutputElm'));
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Outputs and Labels')), outputMenuBar));
  activeMenuBar = new MenuBar_0(true);
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Diode'), 'DiodeElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Zener Diode'), 'ZenerElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Transistor (bipolar, NPN)'), 'NTransistorElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Transistor (bipolar, PNP)'), 'PTransistorElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add MOSFET (N-Channel)'), 'NMosfetElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add MOSFET (P-Channel)'), 'PMosfetElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add JFET (N-Channel)'), 'NJfetElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add JFET (P-Channel)'), 'PJfetElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add SCR'), 'SCRElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Darlington Pair (NPN)'), 'NDarlingtonElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Darlington Pair (PNP)'), 'PDarlingtonElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Tunnel Diode'), 'TunnelDiodeElm'));
  $addItem(activeMenuBar, $getClassCheckItem(this$static, LS('Add Triode'), 'TriodeElm'));
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Active Components')), activeMenuBar));
  activeBlocMenuBar = new MenuBar_0(true);
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Op Amp (- on top)'), 'OpAmpElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Op Amp (+ on top)'), 'OpAmpSwapElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Analog Switch (SPST)'), 'AnalogSwitchElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Analog Switch (SPDT)'), 'AnalogSwitch2Elm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Tristate Buffer'), 'TriStateElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Schmitt Trigger'), 'SchmittElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Schmitt Trigger (Inverting)'), 'InvertingSchmittElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add CCII+'), 'CC2Elm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add CCII-'), 'CC2NegElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Comparator (Hi-Z/GND output)'), 'ComparatorElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add OTA (LM13700 style)'), 'OTAElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Voltage-Controlled Voltage Source'), 'VCVSElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Voltage-Controlled Current Source'), 'VCCSElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Current-Controlled Voltage Source'), 'CCVSElm'));
  $addItem(activeBlocMenuBar, $getClassCheckItem(this$static, LS('Add Current-Controlled Current Source'), 'CCCSElm'));
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Active Building Blocks')), activeBlocMenuBar));
  gateMenuBar = new MenuBar_0(true);
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add Logic Input'), 'LogicInputElm'));
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add Logic Output'), 'LogicOutputElm'));
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add Inverter'), 'InverterElm'));
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add NAND Gate'), 'NandGateElm'));
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add NOR Gate'), 'NorGateElm'));
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add AND Gate'), 'AndGateElm'));
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add OR Gate'), 'OrGateElm'));
  $addItem(gateMenuBar, $getClassCheckItem(this$static, LS('Add XOR Gate'), 'XorGateElm'));
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Logic Gates, Input and Output')), gateMenuBar));
  chipMenuBar = new MenuBar_0(true);
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add D Flip-Flop'), 'DFlipFlopElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add JK Flip-Flop'), 'JKFlipFlopElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add T Flip-Flop'), 'TFlipFlopElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add 7 Segment LED'), 'SevenSegElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add 7 Segment Decoder'), 'SevenSegDecoderElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Multiplexer'), 'MultiplexerElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Demultiplexer'), 'DeMultiplexerElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add SIPO shift register'), 'SipoShiftElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add PISO shift register'), 'PisoShiftElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Counter'), 'CounterElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Decade Counter'), 'DecadeElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Latch'), 'LatchElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Sequence generator'), 'SeqGenElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Full Adder'), 'FullAdderElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Half Adder'), 'HalfAdderElm'));
  $addItem(chipMenuBar, $getClassCheckItem(this$static, LS('Add Custom Logic'), 'UserDefinedLogicElm'));
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Digital Chips')), chipMenuBar));
  achipMenuBar = new MenuBar_0(true);
  $addItem(achipMenuBar, $getClassCheckItem(this$static, LS('Add 555 Timer'), 'TimerElm'));
  $addItem(achipMenuBar, $getClassCheckItem(this$static, LS('Add Phase Comparator'), 'PhaseCompElm'));
  $addItem(achipMenuBar, $getClassCheckItem(this$static, LS('Add DAC'), 'DACElm'));
  $addItem(achipMenuBar, $getClassCheckItem(this$static, LS('Add ADC'), 'ADCElm'));
  $addItem(achipMenuBar, $getClassCheckItem(this$static, LS('Add VCO'), 'VCOElm'));
  $addItem(achipMenuBar, $getClassCheckItem(this$static, LS('Add Monostable'), 'MonostableElm'));
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Analog and Hybrid Chips')), achipMenuBar));
  otherMenuBar = new MenuBar_0(true);
  $addItem(otherMenuBar, mi = $getClassCheckItem(this$static, LS('Drag All'), 'DragAll'));
  $addShortcut(mi, LS('(Alt-drag)'));
  $addItem(otherMenuBar, mi = $getClassCheckItem(this$static, LS('Drag Row'), 'DragRow'));
  $addShortcut(mi, LS('(A-S-drag)'));
  $addItem(otherMenuBar, mi = $getClassCheckItem(this$static, LS('Drag Column'), 'DragColumn'));
  $addShortcut(mi, this$static.isMac?LS('(A-Cmd-drag)'):LS('(A-M-drag)'));
  $addItem(otherMenuBar, $getClassCheckItem(this$static, LS('Drag Selected'), 'DragSelected'));
  $addItem(otherMenuBar, mi = $getClassCheckItem(this$static, LS('Drag Post'), 'DragPost'));
  $addShortcut(mi, '(' + this$static.ctrlMetaKey + '-drag)');
  $addItem(mainMenuBar, new MenuItem_0(new SafeHtmlString(checkBoxHtml + LS('&nbsp;<\/div>Drag')), otherMenuBar));
  $addItem(mainMenuBar, mi = $getClassCheckItem(this$static, LS('Select/Drag Sel'), 'Select'));
  $addShortcut(mi, LS('(space or Shift-drag)'));
}

function $dialogIsShowing(){
  if (!!editDialog_0 && editDialog_0.showing)
    return true;
  if (!!customLogicEditDialog && customLogicEditDialog.showing)
    return true;
  if (!!exportAsUrlDialog && exportAsUrlDialog.showing)
    return true;
  if (!!exportAsTextDialog && exportAsTextDialog.showing)
    return true;
  if (!!exportAsLocalFileDialog && exportAsLocalFileDialog.showing)
    return true;
  if (!!scrollValuePopup && scrollValuePopup.showing)
    return true;
  if (!!aboutBox && aboutBox.showing)
    return true;
  if (!!importFromTextDialog && importFromTextDialog.showing)
    return true;
  if (!!importFromDropboxDialog && importFromDropboxDialog.showing)
    return true;
  return false;
}

function $doCopy(this$static){
  var i;
  this$static.clipboard = '';
  for (i = null.$_nullField.length - 1; i >= 0; i--) {
    $getElm(i);
    null.$_nullField && (this$static.clipboard += null.$_nullMethod() + '\n');
  }
  $writeClipboardToStorage(this$static);
  (this$static.clipboard == null || this$static.clipboard.length == 0) && $readClipboardFromStorage(this$static);
  $setEnabled(this$static.pasteItem, this$static.clipboard != null && this$static.clipboard.length > 0);
}

function $doCut(this$static){
  var i;
  $pushUndo(this$static);
  this$static.clipboard = '';
  for (i = null.$_nullField.length - 1; i >= 0; i--) {
    $getElm(i);
    if (null.$_nullField) {
      this$static.clipboard += null.$_nullMethod() + '\n';
      null.$_nullMethod();
      null.$_nullMethod();
    }
  }
  $writeClipboardToStorage(this$static);
  (this$static.clipboard == null || this$static.clipboard.length == 0) && $readClipboardFromStorage(this$static);
  $setEnabled(this$static.pasteItem, this$static.clipboard != null && this$static.clipboard.length > 0);
  this$static.analyzeFlag = true;
}

function $doDelete(this$static){
  var ce, hasDeleted, i;
  $pushUndo(this$static);
  hasDeleted = false;
  for (i = null.$_nullField.length - 1; i >= 0; i--) {
    $getElm(i);
    if (null.$_nullField) {
      null.$_nullMethod();
      null.$_nullMethod();
      hasDeleted = true;
    }
  }
  if (!hasDeleted) {
    for (i = null.$_nullField.length - 1; i >= 0; i--) {
      ce = $getElm(i);
      if (ce == this$static.mouseElm) {
        null.$_nullMethod();
        null.$_nullMethod();
        hasDeleted = true;
        $setMouseElm(this$static, null);
        break;
      }
    }
  }
  hasDeleted && (this$static.analyzeFlag = true);
}

function $doDuplicate(this$static){
  var i, s;
  s = '';
  for (i = null.$_nullField.length - 1; i >= 0; i--) {
    $getElm(i);
    null.$_nullField && (s += null.$_nullMethod() + '\n');
  }
  $doPaste(this$static, s);
}

function $doEdit(this$static, eable){
  $clearSelection();
  $pushUndo(this$static);
  if (editDialog_0) {
    editDialog_0.element.style['visibility'] = 'hidden';
    editDialog_0 = null;
  }
  editDialog_0 = new EditDialog(eable, this$static);
  $show_0(editDialog_0);
}

function $doPaste(this$static, dump_0){
  var bb, i, lastArg, newbb, oldbb, oldsz, spaceh, spacew;
  $pushUndo(this$static);
  $clearSelection();
  oldbb = null;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    bb = null.$_nullField;
    oldbb?(oldbb = $union(oldbb, bb)):(oldbb = bb);
  }
  oldsz = null.$_nullField.length;
  if (dump_0 != null) {
    $readSetup_1(this$static, $getBytes((lastArg = dump_0 , $clinit_EmulatedCharset() , lastArg)), dump_0.length, true, false);
    null.$_nullMethod();
  }
   else {
    $readClipboardFromStorage(this$static);
    $readSetup_0(this$static, this$static.clipboard);
  }
  newbb = null;
  for (i = oldsz; i != null.$_nullField.length; i++) {
    $getElm(i);
    bb = null.$_nullField;
    newbb?(newbb = $union(newbb, bb)):(newbb = bb);
  }
  if (!!oldbb && !!newbb && $intersects(oldbb, newbb)) {
    spacew = this$static.circuitArea.width_0 - oldbb.width_0 - newbb.width_0;
    spaceh = this$static.circuitArea.height - oldbb.height - newbb.height;
    spacew > spaceh?$snapGrid(this$static, oldbb.x_0 + oldbb.width_0 - newbb.x_0 + this$static.gridSize):$snapGrid(this$static, oldbb.y_0 + oldbb.height - newbb.y_0 + this$static.gridSize);
    for (i = oldsz; i != null.$_nullField.length; i++) {
      $getElm(i);
      null.$_nullMethod();
    }
  }
  this$static.analyzeFlag = true;
}

function $doRedo(this$static){
  var s;
  if (null.$_nullField.length == 0)
    return;
  null.$_nullMethod($dumpCircuit(this$static));
  s = null.$_nullMethod();
  $readSetup_1(this$static, $getBytes(($clinit_EmulatedCharset() , s)), s.length, false, false);
  null.$_nullMethod();
  null.$_nullMethod();
  $setEnabled(this$static.redoItem, null.$_nullField.length > 0);
  $setEnabled(this$static.undoItem, null.$_nullField.length > 0);
}

function $doSelectAll(){
  var i;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
  }
}

function $doSwitch(this$static, x_0, y_0){
  var se;
  if (!this$static.mouseElm || !instanceOf(this$static.mouseElm, 85))
    return false;
  se = castTo(this$static.mouseElm, 85);
  if (!$contains(se.getSwitchRect(), x_0, y_0))
    return false;
  se.toggle();
  se.momentary && (this$static.heldSwitchElm = se);
  this$static.analyzeFlag = true;
  return true;
}

function $doUndo(this$static){
  var s;
  if (null.$_nullField.length == 0)
    return;
  null.$_nullMethod($dumpCircuit(this$static));
  s = null.$_nullMethod();
  $readSetup_1(this$static, $getBytes(($clinit_EmulatedCharset() , s)), s.length, false, false);
  null.$_nullMethod();
  null.$_nullMethod();
  $setEnabled(this$static.redoItem, null.$_nullField.length > 0);
  $setEnabled(this$static.undoItem, null.$_nullField.length > 0);
}

function $dragAll(this$static, x_0, y_0){
  var dx, dy;
  dx = x_0 - this$static.dragScreenX;
  dy = y_0 - this$static.dragScreenY;
  if (dx == 0 && dy == 0)
    return;
  this$static.transform[4] += dx;
  this$static.transform[5] += dy;
  this$static.dragScreenX = x_0;
  this$static.dragScreenY = y_0;
}

function $dragColumn(this$static, x_0){
  var dx, i;
  dx = x_0 - this$static.dragGridX;
  if (dx == 0)
    return;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    null.$_nullField == this$static.dragGridX && null.$_nullMethod();
    null.$_nullField == this$static.dragGridX && null.$_nullMethod();
  }
  $removeZeroLengthElements(this$static);
}

function $dragPost(this$static, x_0, y_0){
  var dx, dy;
  this$static.draggingPost == -1 && (this$static.draggingPost = distanceSq(this$static.mouseElm.x_0, this$static.mouseElm.y_0, x_0, y_0) > distanceSq(this$static.mouseElm.x2, this$static.mouseElm.y2, x_0, y_0)?1:0);
  dx = x_0 - this$static.dragGridX;
  dy = y_0 - this$static.dragGridY;
  if (dx == 0 && dy == 0)
    return;
  $movePoint(this$static.mouseElm, this$static.draggingPost, dx, dy);
  this$static.analyzeFlag = true;
}

function $dragRow(this$static, y_0){
  var dy, i;
  dy = y_0 - this$static.dragGridY;
  if (dy == 0)
    return;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    null.$_nullField == this$static.dragGridY && null.$_nullMethod();
    null.$_nullField == this$static.dragGridY && null.$_nullMethod();
  }
  $removeZeroLengthElements(this$static);
}

function $dragSelected(this$static, x_0, y_0){
  var allowed, dx, dy, i, me;
  me = false;
  !!this$static.mouseElm && !this$static.mouseElm.selected && $setSelected(this$static.mouseElm, me = true);
  if (!$onlyGraphicsElmsSelected(this$static)) {
    x_0 = x_0 + this$static.gridRound & this$static.gridMask;
    y_0 = y_0 + this$static.gridRound & this$static.gridMask;
  }
  dx = x_0 - this$static.dragGridX;
  dy = y_0 - this$static.dragGridY;
  if (dx == 0 && dy == 0) {
    me && (this$static.mouseElm.selected = false , undefined);
    return false;
  }
  allowed = true;
  for (i = 0; allowed && i != null.$_nullField.length; i++) {
    $getElm(i);
    null.$_nullField && !null.$_nullMethod() && (allowed = false);
  }
  if (allowed) {
    for (i = 0; i != null.$_nullField.length; i++) {
      $getElm(i);
      null.$_nullField && null.$_nullMethod();
    }
    this$static.analyzeFlag = true;
  }
  me && (this$static.mouseElm.selected = false , undefined);
  return allowed;
}

function $dragSplitter(this$static, y_0){
  var h;
  h = null.$_nullMethod().$_nullMethod();
  h < 1 && (h = 1);
  this$static.scopeHeightFraction = 1 - y_0 / h;
  this$static.scopeHeightFraction < 0.1 && (this$static.scopeHeightFraction = 0.1);
  this$static.scopeHeightFraction > 0.9 && (this$static.scopeHeightFraction = 0.9);
  $setCircuitArea(this$static);
}

function $dumpCircuit(this$static){
  var dump_0, f, i;
  clearDumpedFlags();
  f = this$static.dotsCheckItem.on?1:0;
  f |= this$static.smallGridCheckItem.on?2:0;
  f |= this$static.voltsCheckItem.on?0:4;
  f |= this$static.powerCheckItem.on?8:0;
  f |= this$static.showValuesCheckItem.on?0:16;
  dump_0 = '$ ' + f + ' ' + this$static.timeStep + ' ' + $getIterCount() + ' ' + null.$_nullField + ' ' + voltageRange + ' ' + null.$_nullField + '\n';
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    dump_0 += null.$_nullMethod() + '\n';
  }
  for (i = 0; i != this$static.scopeCount; i++) {
    this$static.scopes[i].$_nullMethod();
  }
  this$static.hintType != -1 && (dump_0 += 'h ' + this$static.hintType + ' ' + this$static.hintItem1 + ' ' + this$static.hintItem2 + '\n');
  return dump_0;
}

function $getCircuitBounds(){
  var i, maxx, maxy, minx, miny;
  minx = $intern_18;
  maxx = 0;
  miny = $intern_18;
  maxy = 0;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    if (!null.$_nullMethod()) {
      minx = $min(null.$_nullField, $min(null.$_nullField, minx));
      maxx = $max(null.$_nullField, $max(null.$_nullField, maxx));
    }
    miny = $min(null.$_nullField, $min(null.$_nullField, miny));
    maxy = $max(null.$_nullField, $max(null.$_nullField, maxy));
  }
  if (minx > maxx)
    return null;
  return new Rectangle_0(minx, miny, maxx - minx, maxy - miny);
}

function $getCircuitNode(this$static, n){
  if (n >= this$static.nodeList.arrayList.array.length)
    return null;
  return castTo($get_3(this$static.nodeList, n), 87);
}

function $getClassCheckItem(this$static, s, t){
  var elm, mi, shortcut;
  shortcut = '';
  elm = constructElement(t, 0, 0);
  if (elm) {
    if (elm.getShortcut() > 0) {
      shortcut += charToString(elm.getShortcut() & $intern_19);
      this$static.shortcuts[elm.getShortcut()] = t;
    }
    elm.delete_0();
  }
  shortcut == ''?(mi = new CheckboxMenuItem(s)):(mi = new CheckboxMenuItem_1(s, shortcut));
  $setScheduledCommand(mi, new MyCommand('main', t));
  $add_9(this$static.mainMenuItems, mi);
  $add_9(this$static.mainMenuItemNames, t);
  return mi;
}

function $getElm(n){
  if (n >= null.$_nullField.length)
    return null;
  return null.$_nullMethod();
}

function $getIterCount(){
  if (null.$_nullField == 0)
    return 0;
  return 0.1 * $wnd.Math.exp((null.$_nullField - 61) / 24);
}

function $getOptionFromStorage(key, val){
  var s, stor;
  stor = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  if (!stor)
    return val;
  s = $getItem(stor.storage, key);
  if (s == null)
    return val;
  return s == 'true';
}

function $init_1(this$static){
  var cct, convention, drawMenuBar, euroGates, euroRes, euroSetting, m, os, printable, qp, usRes, val, val0, width_0;
  printable = false;
  convention = true;
  euroRes = false;
  usRes = false;
  unitsFont = new Font(12);
  sim = this$static;
  colorScale = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_Color_2_classLit, $intern_3, 32, colorScaleCount, 0, 1);
  ps1 = new Point;
  ps2 = new Point;
  showFormat = ($clinit_NumberFormat() , new NumberFormat_0('####.##', $getDefaultNative()));
  shortFormat = new NumberFormat_0('####.#', $getDefaultNative());
  qp = new QueryParameters;
  try {
    cct = castToString($getStringValue(qp.map_0, 'cct'));
    cct != null && $replace_0(cct, '%24', '$');
    castToString($getStringValue(qp.map_0, 'startCircuit'));
    castToString($getStringValue(qp.map_0, 'startLabel'));
    castToString($getStringValue(qp.map_0, 'startCircuitLink'));
    euroRes = (val0 = castToString($getStringValue(qp.map_0, 'euroResistors')) , val0 != null && (val0 == '1' || $equalsIgnoreCase(val0, 'true')));
    usRes = (val = castToString($getStringValue(qp.map_0, 'usResistors')) , val != null && (val == '1' || $equalsIgnoreCase(val, 'true')));
    printable = $getBooleanValue(qp, 'whiteBackground', $getOptionFromStorage('whiteBackground', false));
    convention = $getBooleanValue(qp, 'conventionalCurrent', $getOptionFromStorage('conventionalCurrent', true));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  euroRes?(euroSetting = true):usRes?(euroSetting = false):(euroSetting = $getOptionFromStorage('euroResistors', !$weAreInUS()));
  euroGates = $getOptionFromStorage('euroGates', $weAreInGermany());
  this$static.transform = initUnidimensionalArray(D_classLit, $intern_48, 13, 6, 15, 1);
  os = $wnd.navigator.platform;
  this$static.isMac = os.toLowerCase().indexOf('mac') != -1;
  this$static.ctrlMetaKey = this$static.isMac?'Cmd':'Ctrl';
  this$static.shortcuts = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 127, 6, 1);
  this$static.layoutPanel = new DockLayoutPanel(($clinit_Style$Unit() , PX));
  this$static.fileMenuBar = new MenuBar_0(true);
  this$static.importFromLocalFileItem = new MenuItem_1(LS('Import From Local File'), new MyCommand('file', 'importfromlocalfile'));
  $setEnabled(this$static.importFromLocalFileItem, !!($wnd.File && $wnd.FileReader));
  $addItem(this$static.fileMenuBar, this$static.importFromLocalFileItem);
  this$static.importFromTextItem = new MenuItem_1(LS('Import From Text'), new MyCommand('file', 'importfromtext'));
  $addItem(this$static.fileMenuBar, this$static.importFromTextItem);
  this$static.importFromDropboxItem = new MenuItem_1(LS('Import From Dropbox'), new MyCommand('file', 'importfromdropbox'));
  $addItem(this$static.fileMenuBar, this$static.importFromDropboxItem);
  this$static.exportAsUrlItem = new MenuItem_1(LS('Export As Link'), new MyCommand('file', 'exportasurl'));
  $addItem(this$static.fileMenuBar, this$static.exportAsUrlItem);
  this$static.exportAsLocalFileItem = new MenuItem_1(LS('Export As Local File'), new MyCommand('file', 'exportaslocalfile'));
  $setEnabled(this$static.exportAsLocalFileItem, !!('download' in $doc.createElement('a')));
  $addItem(this$static.fileMenuBar, this$static.exportAsLocalFileItem);
  this$static.exportAsTextItem = new MenuItem_1(LS('Export As Text'), new MyCommand('file', 'exportastext'));
  $addItem(this$static.fileMenuBar, this$static.exportAsTextItem);
  $addSeparator(this$static.fileMenuBar, new MenuItemSeparator);
  this$static.aboutItem = new MenuItem_1(LS('About'), null);
  $addItem(this$static.fileMenuBar, this$static.aboutItem);
  $setScheduledCommand(this$static.aboutItem, new MyCommand('file', 'about'));
  width_0 = $getOffsetWidth(get_0());
  VERTICALPANELWIDTH = width_0 / 5 | 0;
  VERTICALPANELWIDTH > 166 && (VERTICALPANELWIDTH = 166);
  VERTICALPANELWIDTH < 128 && (VERTICALPANELWIDTH = 128);
  this$static.menuBar = new MenuBar;
  $addItem(this$static.menuBar, new MenuItem_2(LS('File'), this$static.fileMenuBar));
  this$static.verticalPanel = new VerticalPanel;
  VERTICALPANELWIDTH == 166?new HorizontalPanel:new VerticalPanel;
  m = new MenuBar_0(true);
  $addItem(m, this$static.undoItem = $menuItemWithShortcut(LS('Undo'), LS('Ctrl-Z'), new MyCommand('edit', 'undo')));
  $addItem(m, this$static.redoItem = $menuItemWithShortcut(LS('Redo'), LS('Ctrl-Y'), new MyCommand('edit', 'redo')));
  $addSeparator(m, new MenuItemSeparator);
  $addItem(m, $menuItemWithShortcut(LS('Cut'), LS('Ctrl-X'), new MyCommand('edit', 'cut')));
  $addItem(m, $menuItemWithShortcut(LS('Copy'), LS('Ctrl-C'), new MyCommand('edit', 'copy')));
  $addItem(m, this$static.pasteItem = $menuItemWithShortcut(LS('Paste'), LS('Ctrl-V'), new MyCommand('edit', 'paste')));
  $setEnabled(this$static.pasteItem, false);
  $addItem(m, $menuItemWithShortcut(LS('Duplicate'), LS('Ctrl-D'), new MyCommand('edit', 'duplicate')));
  $addSeparator(m, new MenuItemSeparator);
  $addItem(m, $menuItemWithShortcut(LS('Select All'), LS('Ctrl-A'), new MyCommand('edit', 'selectAll')));
  $addSeparator(m, new MenuItemSeparator);
  $addItem(m, new MenuItem_1($weAreInUS()?LS('Center Circuit'):LS('Centre Circuit'), new MyCommand('edit', 'centrecircuit')));
  $addItem(m, $menuItemWithShortcut(LS('Zoom 100%'), '0', new MyCommand('edit', 'zoom100')));
  $addItem(m, $menuItemWithShortcut(LS('Zoom In'), '+', new MyCommand('edit', 'zoomin')));
  $addItem(m, $menuItemWithShortcut(LS('Zoom Out'), '-', new MyCommand('edit', 'zoomout')));
  $addItem(this$static.menuBar, new MenuItem_2(LS('Edit'), m));
  drawMenuBar = new MenuBar_0(true);
  drawMenuBar.autoOpen = true;
  $addItem(this$static.menuBar, new MenuItem_2(LS('Draw'), drawMenuBar));
  m = new MenuBar_0(true);
  $addItem(m, new MenuItem_1(LS('Stack All'), new MyCommand('scopes', 'stackAll')));
  $addItem(m, new MenuItem_1(LS('Unstack All'), new MyCommand('scopes', 'unstackAll')));
  $addItem(m, new MenuItem_1(LS('Combine All'), new MyCommand('scopes', 'combineAll')));
  $addItem(this$static.menuBar, new MenuItem_2(LS('Scopes'), m));
  this$static.optionsMenuBar = m = new MenuBar_0(true);
  $addItem(this$static.menuBar, new MenuItem_2(LS('Options'), this$static.optionsMenuBar));
  $addItem(m, this$static.dotsCheckItem = new CheckboxMenuItem(LS('Show Current')));
  $setState_0(this$static.dotsCheckItem, true);
  $addItem(m, this$static.voltsCheckItem = new CheckboxMenuItem_0(LS('Show Voltage'), new CirSim$2(this$static)));
  $setState_0(this$static.voltsCheckItem, true);
  $addItem(m, this$static.powerCheckItem = new CheckboxMenuItem_0(LS('Show Power'), new CirSim$3(this$static)));
  $addItem(m, this$static.showValuesCheckItem = new CheckboxMenuItem(LS('Show Values')));
  $setState_0(this$static.showValuesCheckItem, true);
  $addItem(m, this$static.smallGridCheckItem = new CheckboxMenuItem_0(LS('Small Grid'), new CirSim$4(this$static)));
  $addItem(m, this$static.crossHairCheckItem = new CheckboxMenuItem_0(LS('Show Cursor Cross Hairs'), new CirSim$5(this$static)));
  $setState_0(this$static.crossHairCheckItem, $getOptionFromStorage('crossHair', false));
  $addItem(m, this$static.euroResistorCheckItem = new CheckboxMenuItem_0(LS('European Resistors'), new CirSim$6(this$static)));
  $setState_0(this$static.euroResistorCheckItem, euroSetting);
  $addItem(m, this$static.euroGatesCheckItem = new CheckboxMenuItem_0(LS('IEC Gates'), new CirSim$7(this$static)));
  $setState_0(this$static.euroGatesCheckItem, euroGates);
  $addItem(m, this$static.printableCheckItem = new CheckboxMenuItem_0(LS('White Background'), new CirSim$8(this$static)));
  $setState_0(this$static.printableCheckItem, printable);
  $addItem(m, this$static.alternativeColorCheckItem = new CheckboxMenuItem_0(LS('Alt Color for Volts & Pwr'), new CirSim$9(this$static)));
  $setState_0(this$static.alternativeColorCheckItem, $getOptionFromStorage('alternativeColor', false));
  $addItem(m, this$static.conventionCheckItem = new CheckboxMenuItem_0(LS('Conventional Current Motion'), new CirSim$10(this$static)));
  $setState_0(this$static.conventionCheckItem, convention);
  $addItem(m, new CheckboxAlignedMenuItem(LS('Other Options...'), new MyCommand('options', 'other')));
  this$static.mainMenuBar = new MenuBar_0(true);
  this$static.mainMenuBar.autoOpen = true;
  $composeMainMenu(this$static, this$static.mainMenuBar);
  $composeMainMenu(this$static, drawMenuBar);
  $insert_0(this$static.layoutPanel, this$static.menuBar, ($clinit_DockLayoutPanel$Direction() , NORTH), 30);
  $addEast(this$static.layoutPanel, this$static.verticalPanel, VERTICALPANELWIDTH);
  $add_2(get_0(), this$static.layoutPanel);
  !detector && (detector = new Canvas$CanvasElementSupportDetectedNo);
  $add_0(($clinit_RootPanel() , get_1()), new Label_0('Not working. You need a browser that supports the CANVAS element.'));
  return;
}

function $inverseTransformX(this$static, x_0){
  return round_int((x_0 - this$static.transform[4]) / this$static.transform[0]);
}

function $inverseTransformY(this$static, y_0){
  return round_int((y_0 - this$static.transform[5]) / this$static.transform[3]);
}

function $loadFileFromURL(this$static, url_0){
  var requestBuilder;
  requestBuilder = new RequestBuilder(($clinit_RequestBuilder() , GET), url_0);
  try {
    $sendRequest(requestBuilder, new CirSim$15(this$static));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 95))
      throw toJs($e0);
  }
}

function $lu_factor(a, n, ipvt){
  var i, j, k, largest, largestRow, mult, q, row_all_zeros, x_0;
  for (i = 0; i != n; i++) {
    row_all_zeros = true;
    for (j = 0; j != n; j++) {
      if (a[i][j] != 0) {
        row_all_zeros = false;
        break;
      }
    }
    if (row_all_zeros)
      return false;
  }
  for (j = 0; j != n; j++) {
    for (i = 0; i != j; i++) {
      q = a[i][j];
      for (k = 0; k != i; k++)
        q -= a[i][k] * a[k][j];
      a[i][j] = q;
    }
    largest = 0;
    largestRow = -1;
    for (i = j; i != n; i++) {
      q = a[i][j];
      for (k = 0; k != j; k++)
        q -= a[i][k] * a[k][j];
      a[i][j] = q;
      x_0 = $wnd.Math.abs(q);
      if (x_0 >= largest) {
        largest = x_0;
        largestRow = i;
      }
    }
    if (j != largestRow) {
      for (k = 0; k != n; k++) {
        x_0 = a[largestRow][k];
        a[largestRow][k] = a[j][k];
        a[j][k] = x_0;
      }
    }
    ipvt[j] = largestRow;
    if (a[j][j] == 0) {
      $clinit_System();
      a[j][j] = 1.0E-18;
    }
    if (j != n - 1) {
      mult = 1 / a[j][j];
      for (i = j + 1; i != n; i++)
        a[i][j] *= mult;
    }
  }
  return true;
}

function $lu_solve(a, n, ipvt, b){
  var bi, i, j, row, swap, tot;
  for (i = 0; i != n; i++) {
    row = ipvt[i];
    swap = b[row];
    b[row] = b[i];
    b[i] = swap;
    if (swap != 0)
      break;
  }
  bi = i++;
  for (; i < n; i++) {
    row = ipvt[i];
    tot = b[row];
    b[row] = b[i];
    for (j = bi; j < i; j++)
      tot -= a[i][j] * b[j];
    b[i] = tot;
  }
  for (i = n - 1; i >= 0; i--) {
    tot = b[i];
    for (j = i + 1; j != n; j++)
      tot -= a[i][j] * b[j];
    b[i] = tot / a[i][i];
  }
}

function $makePostDrawList(this$static){
  var bad, cn, entry, entry$iterator, j, k, pc;
  this$static.postDrawList = new Vector;
  this$static.badConnectionList = new Vector;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.postCountMap)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    castTo(entry.getValue(), 20).value_0 != 2 && $add_9(this$static.postDrawList, castTo(entry.getKey(), 14));
    if (castTo(entry.getValue(), 20).value_0 == 1) {
      bad = false;
      cn = castTo(entry.getKey(), 14);
      for (j = 0; j != null.$_nullField.length && !bad; j++) {
        $getElm(j);
        if (!null.$_nullMethod())
          continue;
        pc = null.$_nullMethod();
        for (k = 0; k != pc; k++)
          if (null.$_nullMethod().$_nullMethod())
            break;
        k == pc && (bad = true);
      }
      bad && $add_9(this$static.badConnectionList, cn);
    }
  }
  this$static.postCountMap = null;
}

function $max(a, b){
  return a > b?a:b;
}

function $menuItemWithShortcut(text_0, shortcut, cmd){
  var sn;
  sn = '<div style="display:inline-block;width:80px;">' + text_0 + '<\/div>' + shortcut;
  return new MenuItem(($clinit_SafeHtmlUtils() , new SafeHtmlString(sn)), cmd);
}

function $menuPerformed(this$static, menu, item_0){
  var sp, dump_0, dump_1, dump_2;
  item_0 == 'about' && (aboutBox = new AboutBox);
  if (item_0 == 'importfromlocalfile') {
    $pushUndo(this$static);
    $doc.getElementById('LoadFileElement').click();
  }
  item_0 == 'importfromtext' && (importFromTextDialog = new ImportFromTextDialog(this$static));
  item_0 == 'importfromdropbox' && (importFromDropboxDialog = new ImportFromDropboxDialog(this$static));
  item_0 == 'exportasurl' && (dump_0 = $dumpCircuit(this$static) , exportAsUrlDialog = new ExportAsUrlDialog(dump_0) , $show_0(exportAsUrlDialog) , undefined);
  item_0 == 'exportaslocalfile' && (dump_1 = $dumpCircuit(this$static) , exportAsLocalFileDialog = new ExportAsLocalFileDialog(dump_1) , $show_0(exportAsLocalFileDialog) , undefined);
  item_0 == 'exportastext' && (dump_2 = $dumpCircuit(this$static) , exportAsTextDialog = new ExportAsTextDialog(this$static, dump_2) , $show_0(exportAsTextDialog) , undefined);
  menu == 'options' && item_0 == 'other' && $doEdit(this$static, new EditOptions(this$static));
  item_0 == 'undo' && $doUndo(this$static);
  item_0 == 'redo' && $doRedo(this$static);
  if (item_0 == 'cut') {
    menu != 'elm' && (this$static.menuElm = null);
    $doCut(this$static);
  }
  if (item_0 == 'copy') {
    menu != 'elm' && (this$static.menuElm = null);
    $doCopy(this$static);
  }
  item_0 == 'paste' && $doPaste(this$static, null);
  if (item_0 == 'duplicate') {
    menu != 'elm' && (this$static.menuElm = null);
    $doDuplicate(this$static);
  }
  item_0 == 'flip' && (null.$_nullMethod() , this$static.analyzeFlag = true);
  item_0 == 'selectAll' && $doSelectAll();
  if (item_0 == 'centrecircuit') {
    $pushUndo(this$static);
    $centreCircuit(this$static);
  }
  item_0 == 'stackAll' && $stackAll(this$static);
  item_0 == 'unstackAll' && $unstackAll(this$static);
  item_0 == 'combineAll' && $combineAll(this$static);
  item_0 == 'zoomin' && $zoomCircuit(this$static, 20);
  item_0 == 'zoomout' && $zoomCircuit(this$static, -20);
  item_0 == 'zoom100' && $setCircuitScale(this$static, 1);
  menu == 'elm' && item_0 == 'edit' && $doEdit(this$static, this$static.menuElm);
  if (item_0 == 'delete') {
    menu != 'elm' && (this$static.menuElm = null);
    $doDelete(this$static);
  }
  if (menu == 'scopepop') {
    $pushUndo(this$static);
    item_0 == 'remove' && this$static.scopes[this$static.menuScope].$_nullMethod();
    item_0 == 'removeplot' && this$static.scopes[this$static.menuScope].$_nullMethod();
    item_0 == 'speed2' && this$static.scopes[this$static.menuScope].$_nullMethod();
    item_0 == 'speed1/2' && this$static.scopes[this$static.menuScope].$_nullMethod();
    item_0 == 'maxscale' && this$static.scopes[this$static.menuScope].$_nullMethod();
    item_0 == 'stack' && $stackScope(this$static, this$static.menuScope);
    item_0 == 'unstack' && $unstackScope(this$static, this$static.menuScope);
    item_0 == 'combine' && $combineScope(this$static, this$static.menuScope);
    item_0 == 'selecty' && this$static.scopes[this$static.menuScope].$_nullMethod();
    item_0 == 'reset' && this$static.scopes[this$static.menuScope].$_nullMethod();
    (item_0.indexOf('show') == 0 || item_0 == 'plotxy' || item_0 == 'showfft') && this$static.scopes[this$static.menuScope].$_nullMethod();
  }
  if (menu == 'circuits' && item_0.indexOf('setup ') == 0) {
    $pushUndo(this$static);
    sp = $indexOf_1(item_0, fromCodePoint(32), 6);
    $readSetupFile(this$static, item_0.substr(6, sp - 6), item_0.substr(sp + 1));
  }
  if (menu == 'main') {
    this$static.mouseMode = 0;
    $setCursorStyle(this$static, 'cursorCross');
    item_0.length > 0 && (this$static.mouseModeStr = item_0);
    $compareTo(item_0, 'DragAll') == 0?(this$static.mouseMode = 1 , $setCursorStyle(this$static, 'cursorPointer')):$compareTo(item_0, 'DragRow') == 0?(this$static.mouseMode = 2 , $setCursorStyle(this$static, 'cursorPointer')):$compareTo(item_0, 'DragColumn') == 0?(this$static.mouseMode = 3 , $setCursorStyle(this$static, 'cursorPointer')):$compareTo(item_0, 'DragSelected') == 0?(this$static.mouseMode = 4 , $setCursorStyle(this$static, 'cursorPointer')):$compareTo(item_0, 'DragPost') == 0?(this$static.mouseMode = 5 , $setCursorStyle(this$static, 'cursorPointer')):$compareTo(item_0, 'Select') == 0 && (this$static.mouseMode = 6 , $setCursorStyle(this$static, 'cursorPointer'));
    this$static.tempMouseMode = this$static.mouseMode;
  }
}

function $min(a, b){
  return a < b?a:b;
}

function $mouseDragged(this$static, e){
  var gx, gy, success;
  if ((e.nativeEvent.button | 0) == 2) {
    if (!(!!e.nativeEvent.metaKey || !!e.nativeEvent.shiftKey || !!e.nativeEvent.ctrlKey || !!e.nativeEvent.altKey))
      return;
  }
  if (this$static.tempMouseMode == 7) {
    $dragSplitter(this$static, ($getX(e) , $getY(e)));
    return;
  }
  gx = $inverseTransformX(this$static, $getX(e));
  gy = $inverseTransformY(this$static, $getY(e));
  if (!$contains(this$static.circuitArea, $getX(e), $getY(e)))
    return;
  !!this$static.dragElm && this$static.dragElm.drag(gx, gy);
  success = true;
  switch (this$static.tempMouseMode) {
    case 1:
      $dragAll(this$static, $getX(e), $getY(e));
      break;
    case 2:
      $dragRow(this$static, gy + this$static.gridRound & this$static.gridMask);
      break;
    case 3:
      $dragColumn(this$static, gx + this$static.gridRound & this$static.gridMask);
      break;
    case 5:
      !!this$static.mouseElm && $dragPost(this$static, gx + this$static.gridRound & this$static.gridMask, gy + this$static.gridRound & this$static.gridMask);
      break;
    case 6:
      if (!this$static.mouseElm)
        $selectArea(this$static, gx, gy);
      else {
        $clinit_System();
        if (lt(sub_1(fromDouble_0(Date.now()), this$static.mouseDownTime), 150))
          return;
        this$static.tempMouseMode = 4;
        success = $dragSelected(this$static, gx, gy);
      }

      break;
    case 4:
      success = $dragSelected(this$static, gx, gy);
  }
  if (success) {
    this$static.dragScreenX = $getX(e);
    this$static.dragScreenY = $getY(e);
    this$static.dragGridX = $inverseTransformX(this$static, this$static.dragScreenX);
    this$static.dragGridY = $inverseTransformY(this$static, this$static.dragScreenY);
    if (!(this$static.tempMouseMode == 4 && $onlyGraphicsElmsSelected(this$static))) {
      this$static.dragGridX = $snapGrid(this$static, this$static.dragGridX);
      this$static.dragGridY = $snapGrid(this$static, this$static.dragGridY);
    }
  }
}

function $mouseSelect(this$static, e){
  var area, bestArea, bestDist, ce, dist, gx, gy, i, j, jn, newMouseElm, pt, sx, sy, isOverSplitter;
  newMouseElm = null;
  this$static.mouseCursorX = $getX(e);
  this$static.mouseCursorY = $getY(e);
  sx = $getX(e);
  sy = $getY(e);
  gx = round_int((sx - this$static.transform[4]) / this$static.transform[0]);
  gy = round_int((sy - this$static.transform[5]) / this$static.transform[3]);
  this$static.dragGridX = gx + this$static.gridRound & this$static.gridMask;
  this$static.dragGridY = gy + this$static.gridRound & this$static.gridMask;
  this$static.dragScreenX = sx;
  this$static.dragScreenY = sy;
  this$static.draggingPost = -1;
  this$static.mousePost = -1;
  if (isOverSplitter = sx >= 0 && sx < this$static.circuitArea.width_0 && sy >= this$static.circuitArea.height - 5 && sy < this$static.circuitArea.height , isOverSplitter != this$static.mouseWasOverSplitter && (isOverSplitter?$setCursorStyle(this$static, 'cursorSplitter'):$setMouseMode(this$static, this$static.mouseMode)) , this$static.mouseWasOverSplitter = isOverSplitter , isOverSplitter) {
    $setMouseElm(this$static, null);
    return;
  }
  if (!!this$static.mouseElm && $getHandleGrabbedClose(this$static.mouseElm, gx, gy) >= 0) {
    newMouseElm = this$static.mouseElm;
  }
   else {
    bestDist = $intern_63;
    bestArea = $intern_63;
    for (i = 0; i != null.$_nullField.length; i++) {
      ce = $getElm(i);
      if (null.$_nullMethod()) {
        area = null.$_nullField * null.$_nullField;
        jn = null.$_nullMethod();
        jn > 2 && (jn = 2);
        for (j = 0; j != jn; j++) {
          null.$_nullMethod();
          dist = distanceSq(gx, gy, null.$_nullField, null.$_nullField);
          if (dist <= bestDist && area <= bestArea) {
            bestDist = dist;
            bestArea = area;
            newMouseElm = ce;
          }
        }
        if (null.$_nullMethod() == 0 && area <= bestArea) {
          newMouseElm = ce;
          bestArea = area;
        }
      }
    }
  }
  this$static.scopeSelected = -1;
  if (!newMouseElm) {
    for (i = 0; i != this$static.scopeCount; i++) {
      if (null.$_nullMethod()) {
        newMouseElm = null.$_nullMethod();
        if (null.$_nullField) {
          null.$_nullMethod();
          null.$_nullMethod();
        }
        this$static.scopeSelected = i;
      }
    }
    for (i = 0; i != null.$_nullField.length; i++) {
      ce = $getElm(i);
      if (this$static.mouseMode == 5) {
        if (null.$_nullMethod() > 0) {
          newMouseElm = ce;
          break;
        }
      }
      jn = null.$_nullMethod();
      for (j = 0; j != jn; j++) {
        null.$_nullMethod();
        if (distanceSq(null.$_nullField, null.$_nullField, gx, gy) < 26) {
          newMouseElm = ce;
          this$static.mousePost = j;
          break;
        }
      }
    }
  }
   else {
    this$static.mousePost = -1;
    for (i = 0; i != newMouseElm.getPostCount(); i++) {
      pt = newMouseElm.getPost(i);
      distanceSq(pt.x_0, pt.y_0, gx, gy) < 26 && (this$static.mousePost = i);
    }
  }
  $setMouseElm(this$static, newMouseElm);
}

function $onlyGraphicsElmsSelected(this$static){
  var i;
  if (!!this$static.mouseElm && !instanceOf(this$static.mouseElm, 117))
    return false;
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    if (null.$_nullField)
      return false;
  }
  return true;
}

function $pushUndo(this$static){
  var s;
  s = $dumpCircuit(this$static);
  if (null.$_nullField.length > 0 && $compareTo(s, null.$_nullMethod()) == 0)
    return;
  null.$_nullMethod();
  $setEnabled(this$static.redoItem, null.$_nullField.length > 0);
  $setEnabled(this$static.undoItem, null.$_nullField.length > 0);
}

function $readClipboardFromStorage(this$static){
  var stor;
  stor = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  if (!stor)
    return;
  this$static.clipboard = $getItem(stor.storage, 'circuitClipboard');
}

function $readOptions(this$static, st){
  var flags, sp;
  flags = (new Integer_0($nextToken(st))).value_0;
  $setState_0(this$static.dotsCheckItem, (flags & 1) != 0);
  $setState_0(this$static.smallGridCheckItem, (flags & 2) != 0);
  $setState_0(this$static.voltsCheckItem, (flags & 4) == 0);
  $setState_0(this$static.powerCheckItem, (flags & 8) == 8);
  $setState_0(this$static.showValuesCheckItem, (flags & 16) == 0);
  this$static.timeStep = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  sp = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  round_int($wnd.Math.log(10 * sp) * 24 + 61.5);
  null.$_nullMethod();
  null.$_nullMethod((new Integer_0($nextToken(st))).value_0);
  voltageRange = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  try {
    null.$_nullMethod((new Integer_0($nextToken(st))).value_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  $setGrid(this$static);
}

function $readSetup(this$static, text_0){
  var lastArg;
  $readSetup_1(this$static, $getBytes((lastArg = text_0 , $clinit_EmulatedCharset() , lastArg)), text_0.length, false, true);
  null.$_nullMethod();
  null.$_nullMethod();
}

function $readSetup_0(this$static, text_0){
  var lastArg;
  $readSetup_1(this$static, $getBytes((lastArg = text_0 , $clinit_EmulatedCharset() , lastArg)), text_0.length, true, false);
  null.$_nullMethod();
}

function $readSetup_1(this$static, b, len, retain, centre){
  var ee, f, i, l_0, line, linelen, newce, p, sc, st, tint, type_0, x1, x2, y1, y2;
  if (!retain) {
    this$static.scopeSelected = -1;
    this$static.mouseElm = null;
    for (i = 0; i != null.$_nullField.length; i++) {
      $getElm(i);
      null.$_nullMethod();
    }
    this$static.hintType = -1;
    this$static.timeStep = 5.0E-6;
    $setState_0(this$static.dotsCheckItem, false);
    $setState_0(this$static.smallGridCheckItem, false);
    $setState_0(this$static.powerCheckItem, false);
    $setState_0(this$static.voltsCheckItem, true);
    $setState_0(this$static.showValuesCheckItem, true);
    $setGrid(this$static);
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
    voltageRange = 5;
    this$static.scopeCount = 0;
    this$static.lastIterTime = 0;
  }
  for (p = 0; p < len;) {
    linelen = len - p;
    for (l_0 = 0; l_0 != len - p; l_0++)
      if (b[l_0 + p] == 10 || b[l_0 + p] == 13) {
        linelen = l_0++;
        l_0 + p < b.length && b[l_0 + p] == 10 && ++l_0;
        break;
      }
    line = valueOf_0($decodeString(b, p, ($clinit_EmulatedCharset() , linelen)));
    st = new StringTokenizer(line, ' +\t\n\r\f');
    while ($hasMoreTokens(st)) {
      type_0 = $nextToken(st);
      tint = (checkCriticalStringElementIndex(0, type_0.length) , type_0.charCodeAt(0));
      try {
        if (tint == 111) {
          sc = new Scope;
          $undump(sc, st);
          this$static.scopes[this$static.scopeCount++] = sc;
          break;
        }
        if (tint == 104) {
          this$static.hintType = (new Integer_0($nextToken(st))).value_0;
          this$static.hintItem1 = (new Integer_0($nextToken(st))).value_0;
          this$static.hintItem2 = (new Integer_0($nextToken(st))).value_0;
          break;
        }
        if (tint == 36) {
          $readOptions(this$static, st);
          break;
        }
        if (tint == 33) {
          new CustomLogicModel_1(st);
          break;
        }
        if (tint == 37 || tint == 63 || tint == 66) {
          break;
        }
        tint >= 48 && tint <= 57 && (tint = (new Integer_0(type_0)).value_0);
        x1 = (new Integer_0($nextToken(st))).value_0;
        y1 = (new Integer_0($nextToken(st))).value_0;
        x2 = (new Integer_0($nextToken(st))).value_0;
        y2 = (new Integer_0($nextToken(st))).value_0;
        f = (new Integer_0($nextToken(st))).value_0;
        newce = createCe(tint, x1, y1, x2, y2, f, st);
        if (!newce) {
          $clinit_System();
          break;
        }
        newce.setPoints();
        null.$_nullMethod();
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 11)) {
          ee = $e0;
          $printStackTraceImpl(ee, ($clinit_System() , err_0), '');
          console.log('exception while undumping ' + ee);
          break;
        }
         else 
          throw toJs($e0);
      }
      break;
    }
    p += l_0;
  }
  $setPowerBarEnable(this$static);
  this$static.analyzeFlag = true;
  centre && $centreCircuit(this$static);
}

function $readSetupFile(this$static, str, title_0){
  var url_0;
  this$static.t = 0;
  $clinit_System();
  url_0 = getModuleBaseURL() + 'circuits/' + str + '?v=' + round_int(null.$_nullMethod());
  $loadFileFromURL(this$static, url_0);
  title_0 != null && null.$_nullMethod();
}

function $removeWidgetFromVerticalPanel(this$static, w){
  $remove_3(this$static.verticalPanel, w);
}

function $removeZeroLengthElements(this$static){
  var i;
  for (i = null.$_nullField.length - 1; i >= 0; i--) {
    $getElm(i);
    if (null.$_nullField == null.$_nullField && null.$_nullField == null.$_nullField) {
      null.$_nullMethod();
      null.$_nullMethod();
    }
  }
  this$static.analyzeFlag = true;
}

function $runCircuit(this$static, didAnalyze){
  var cn, cnl, debugprint, delayWireProcessing, i, iter, j, ji, k, lit, printit, res, ri, steprate, subiter, tm, x_0;
  if (this$static.circuitMatrix == null || null.$_nullField.length == 0) {
    this$static.circuitMatrix = null;
    return;
  }
  debugprint = this$static.dumpMatrix;
  this$static.dumpMatrix = false;
  steprate = fromDouble_0(160 * $getIterCount());
  tm = ($clinit_System() , fromDouble_0(Date.now()));
  lit = this$static.lastIterTime;
  if (compare_0(lit, 0) == 0) {
    this$static.lastIterTime = tm;
    return;
  }
  if (gte_0($intern_18, mul_0(steprate, sub_1(tm, this$static.lastIterTime))) && !didAnalyze)
    return;
  delayWireProcessing = $canDelayWireProcessing(this$static);
  for (iter = 1;; iter++) {
    for (i = 0; i != null.$_nullField.length; i++) {
      $getElm(i);
      null.$_nullMethod();
    }
    ++this$static.steps;
    for (subiter = 0; subiter != 5000; subiter++) {
      this$static.converged = true;
      for (i = 0; i != this$static.circuitMatrixSize; i++)
        this$static.circuitRightSide[i] = this$static.origRightSide[i];
      if (this$static.circuitNonLinear) {
        for (i = 0; i != this$static.circuitMatrixSize; i++)
          for (j = 0; j != this$static.circuitMatrixSize; j++)
            this$static.circuitMatrix[i][j] = this$static.origMatrix[i][j];
      }
      for (i = 0; i != null.$_nullField.length; i++) {
        $getElm(i);
        null.$_nullMethod();
      }
      if (this$static.stopMessage != null)
        return;
      printit = debugprint;
      debugprint = false;
      for (j = 0; j != this$static.circuitMatrixSize; j++) {
        for (i = 0; i != this$static.circuitMatrixSize; i++) {
          x_0 = this$static.circuitMatrix[i][j];
          if (isNaN(x_0) || !isNaN(x_0) && !isFinite(x_0)) {
            $stop(this$static, LS('nan/infinite matrix!'));
            return;
          }
        }
      }
      if (printit) {
        for (j = 0; j != this$static.circuitMatrixSize; j++) {
          x_0 = '';
          for (i = 0; i != this$static.circuitMatrixSize; i++)
            x_0 += this$static.circuitMatrix[j][i] + ',';
          x_0 += '\n';
          console.log(x_0);
        }
        console.log('');
      }
      if (this$static.circuitNonLinear) {
        if (this$static.converged && subiter > 0)
          break;
        if (!$lu_factor(this$static.circuitMatrix, this$static.circuitMatrixSize, this$static.circuitPermute)) {
          $stop(this$static, LS('Singular matrix!'));
          return;
        }
      }
      $lu_solve(this$static.circuitMatrix, this$static.circuitMatrixSize, this$static.circuitPermute, this$static.circuitRightSide);
      for (j = 0; j != this$static.circuitMatrixFullSize; j++) {
        ri = this$static.circuitRowInfo[j];
        ri.type_0 == 1?(res = ri.value_0):(res = this$static.circuitRightSide[ri.mapCol]);
        if (isNaN(res)) {
          this$static.converged = false;
          break;
        }
        if (j < this$static.nodeList.arrayList.array.length - 1) {
          cn = $getCircuitNode(this$static, j + 1);
          for (k = 0; k != cn.links_0.arrayList.array.length; k++) {
            cnl = castTo($elementAt(cn.links_0, k), 94);
            cnl.elm.setNodeVoltage(cnl.num, res);
          }
        }
         else {
          ji = j - (this$static.nodeList.arrayList.array.length - 1);
          this$static.voltageSources[ji].setCurrent(ji, res);
        }
      }
      if (!this$static.circuitNonLinear)
        break;
    }
    subiter > 5 && (console.log('converged after ' + subiter + ' iterations\n') , undefined);
    if (subiter == 5000) {
      $stop(this$static, LS('Convergence failed!'));
      break;
    }
    this$static.t += this$static.timeStep;
    for (i = 0; i != null.$_nullField.length; i++) {
      $getElm(i);
      null.$_nullMethod();
    }
    delayWireProcessing || $calcWireCurrents(this$static);
    for (i = 0; i != this$static.scopeCount; i++)
      this$static.scopes[i].$_nullMethod();
    tm = fromDouble_0(Date.now());
    lit = tm;
    if (gte_0((iter + 1) * $intern_18, mul_0(steprate, sub_1(tm, this$static.lastIterTime))) || gt(sub_1(tm, this$static.lastFrameTime), 500))
      break;
  }
  this$static.lastIterTime = lit;
  delayWireProcessing && $calcWireCurrents(this$static);
}

function $scrollValues(this$static, x_0, y_0, deltay){
  !!this$static.mouseElm && !$dialogIsShowing() && this$static.scopeSelected == -1 && (instanceOf(this$static.mouseElm, 144) || instanceOf(this$static.mouseElm, 115) || instanceOf(this$static.mouseElm, 143)) && (scrollValuePopup = new ScrollValuePopup(x_0, y_0, deltay, this$static.mouseElm, this$static));
}

function $selectArea(this$static, x_0, y_0){
  var i, x1, x2, y1, y2;
  x1 = $min(x_0, this$static.initDragGridX);
  x2 = $max(x_0, this$static.initDragGridX);
  y1 = $min(y_0, this$static.initDragGridY);
  y2 = $max(y_0, this$static.initDragGridY);
  this$static.selectedArea = new Rectangle_0(x1, y1, x2 - x1, y2 - y1);
  for (i = 0; i != null.$_nullField.length; i++) {
    $getElm(i);
    null.$_nullMethod();
  }
}

function $setCanvasSize(this$static){
  $getOffsetWidth(get_0());
  $getOffsetHeight(get_0());
  $setCircuitArea(this$static);
}

function $setCircuitArea(this$static){
  var h, height, width_0;
  height = null.$_nullMethod().$_nullMethod();
  width_0 = null.$_nullMethod().$_nullMethod();
  h = round_int(height * this$static.scopeHeightFraction);
  this$static.circuitArea = new Rectangle_0(0, 0, width_0, height - h);
}

function $setCircuitScale(this$static, newScale){
  var cx, cy;
  cx = $inverseTransformX(this$static, this$static.circuitArea.width_0 / 2 | 0);
  cy = $inverseTransformY(this$static, this$static.circuitArea.height / 2 | 0);
  this$static.transform[0] = this$static.transform[3] = newScale;
  this$static.transform[4] = (this$static.circuitArea.width_0 / 2 | 0) - cx * newScale;
  this$static.transform[5] = (this$static.circuitArea.height / 2 | 0) - cy * newScale;
}

function $setCursorStyle(this$static, s){
  this$static.lastCursorStyle != null && null.$_nullMethod();
  null.$_nullMethod();
  this$static.lastCursorStyle = s;
}

function $setGrid(this$static){
  this$static.gridSize = this$static.smallGridCheckItem.on?8:16;
  this$static.gridMask = ~(this$static.gridSize - 1);
  this$static.gridRound = (this$static.gridSize / 2 | 0) - 1;
}

function $setMouseElm(this$static, ce){
  if (ce != this$static.mouseElm) {
    !!this$static.mouseElm && this$static.mouseElm.setMouseElm(false);
    !!ce && ce.setMouseElm(true);
    this$static.mouseElm = ce;
  }
}

function $setMouseMode(this$static, mode){
  this$static.mouseMode = mode;
  mode == 0?$setCursorStyle(this$static, 'cursorCross'):$setCursorStyle(this$static, 'cursorPointer');
}

function $setOptionInStorage(key, val){
  var stor;
  stor = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  if (!stor)
    return;
  $setItem_0(stor.storage, key, val?'true':'false');
}

function $setPowerBarEnable(this$static){
  if (this$static.powerCheckItem.on) {
    null.$_nullMethod();
    null.$_nullMethod();
  }
   else {
    null.$_nullMethod();
    null.$_nullMethod();
  }
}

function $setupScopes(this$static){
  var colct, colh, h, i, iw, j, pos, r, row, speed, w;
  pos = -1;
  for (i = 0; i < this$static.scopeCount; i++) {
    if (this$static.scopes[i].$_nullMethod()) {
      for (j = i; j != this$static.scopeCount; j++)
        this$static.scopes[j] = this$static.scopes[j + 1];
      --this$static.scopeCount;
      --i;
      continue;
    }
    pos = this$static.scopes[i].$_nullField;
  }
  while (this$static.scopeCount > 0 && (this$static.scopes[this$static.scopeCount - 1].$_nullMethod() , true))
    --this$static.scopeCount;
  h = null.$_nullMethod() - this$static.circuitArea.height;
  pos = 0;
  for (i = 0; i != this$static.scopeCount; i++)
    this$static.scopeColCount[i] = 0;
  for (i = 0; i != this$static.scopeCount; i++) {
    pos = $max(this$static.scopes[i].$_nullField, pos);
    ++this$static.scopeColCount[this$static.scopes[i].$_nullField];
  }
  colct = pos + 1;
  iw = 120;
  colct <= 2 && (iw = 180);
  w = (null.$_nullMethod() - iw) / colct | 0;
  w < 20 && (w = 20);
  pos = -1;
  colh = 0;
  row = 0;
  speed = 0;
  for (i = 0; i != this$static.scopeCount; i++) {
    if (null.$_nullField > pos) {
      pos = null.$_nullField;
      colh = h / this$static.scopeColCount[pos] | 0;
      row = 0;
      speed = null.$_nullField;
    }
    null.$_nullField != speed && null.$_nullMethod();
    r = new Rectangle_0(pos * w, null.$_nullMethod() - h + colh * row, w - 10, colh);
    ++row;
    $equals_0(r, null.$_nullField) || null.$_nullMethod();
  }
}

function $simplifyMatrix(this$static, matrixSize){
  var elt, i, ii, j, newmatx, newrs, nn, q, qp, qv, re, ri, rri, rsadd;
  for (i = 0; i != matrixSize; i++) {
    qp = -1;
    qv = 0;
    re = this$static.circuitRowInfo[i];
    if (re.lsChanges || re.dropRow || re.rsChanges)
      continue;
    rsadd = 0;
    for (j = 0; j != matrixSize; j++) {
      q = this$static.circuitMatrix[i][j];
      if (this$static.circuitRowInfo[j].type_0 == 1) {
        rsadd -= this$static.circuitRowInfo[j].value_0 * q;
        continue;
      }
      if (q == 0)
        continue;
      if (qp == -1) {
        qp = j;
        qv = q;
        continue;
      }
      break;
    }
    if (j == matrixSize) {
      if (qp == -1) {
        $stop(this$static, LS('Matrix error'));
        return;
      }
      elt = this$static.circuitRowInfo[qp];
      if (elt.type_0 != 0) {
        $clinit_System();
        continue;
      }
      elt.type_0 = 1;
      elt.value_0 = (this$static.circuitRightSide[i] + rsadd) / qv;
      this$static.circuitRowInfo[i].dropRow = true;
      i = -1;
    }
  }
  nn = 0;
  for (i = 0; i != matrixSize; i++) {
    elt = this$static.circuitRowInfo[i];
    if (elt.type_0 == 0) {
      elt.mapCol = nn++;
      continue;
    }
    elt.type_0 == 1 && (elt.mapCol = -1);
  }
  newmatx = initMultidimensionalArray(D_classLit, [$intern_3, $intern_48], [30, 13], 15, [nn, nn], 2);
  newrs = initUnidimensionalArray(D_classLit, $intern_48, 13, nn, 15, 1);
  ii = 0;
  for (i = 0; i != matrixSize; i++) {
    rri = this$static.circuitRowInfo[i];
    if (rri.dropRow) {
      rri.mapRow = -1;
      continue;
    }
    newrs[ii] = this$static.circuitRightSide[i];
    rri.mapRow = ii;
    for (j = 0; j != matrixSize; j++) {
      ri = this$static.circuitRowInfo[j];
      ri.type_0 == 1?(newrs[ii] -= ri.value_0 * this$static.circuitMatrix[i][j]):(newmatx[ii][ri.mapCol] += this$static.circuitMatrix[i][j]);
    }
    ++ii;
  }
  this$static.circuitMatrix = newmatx;
  this$static.circuitRightSide = newrs;
  matrixSize = this$static.circuitMatrixSize = nn;
  for (i = 0; i != matrixSize; i++)
    this$static.origRightSide[i] = this$static.circuitRightSide[i];
  for (i = 0; i != matrixSize; i++)
    for (j = 0; j != matrixSize; j++)
      this$static.origMatrix[i][j] = this$static.circuitMatrix[i][j];
  this$static.circuitNeedsMap = true;
}

function $snapGrid(this$static, x_0){
  return x_0 + this$static.gridRound & this$static.gridMask;
}

function $stackAll(this$static){
  var i;
  for (i = 0; i != this$static.scopeCount; i++) {
  }
}

function $stackScope(this$static, s){
  if (s == 0) {
    if (this$static.scopeCount < 2)
      return;
    s = 1;
  }
  if (this$static.scopes[s].$_nullField == this$static.scopes[s - 1].$_nullField)
    return;
  for (++s; s < this$static.scopeCount; s++)
    --this$static.scopes[s].$_nullField;
}

function $stampMatrix(this$static, i, j, x_0){
  var ri;
  if (i > 0 && j > 0) {
    if (this$static.circuitNeedsMap) {
      i = this$static.circuitRowInfo[i - 1].mapRow;
      ri = this$static.circuitRowInfo[j - 1];
      if (ri.type_0 == 1) {
        this$static.circuitRightSide[i] -= x_0 * ri.value_0;
        return;
      }
      j = ri.mapCol;
    }
     else {
      --i;
      --j;
    }
    this$static.circuitMatrix[i][j] += x_0;
  }
}

function $stampResistor(this$static, n2){
  var a;
  if (isNaN($intern_67) || !isNaN($intern_67) && !isFinite($intern_67)) {
    $clinit_System();
    a = 0;
    a = a / 0 | 0;
  }
  $stampMatrix(this$static, 0, 0, $intern_67);
  $stampMatrix(this$static, n2, n2, $intern_67);
  $stampMatrix(this$static, 0, n2, -1.0E-8);
  $stampMatrix(this$static, n2, 0, -1.0E-8);
}

function $stop(this$static, s){
  this$static.stopMessage = s;
  this$static.circuitMatrix = null;
  this$static.simRunning = false;
  null.$_nullMethod(($clinit_SafeHtmlUtils() , (new SafeHtmlString(LS('Run&nbsp;/&nbsp;<strong>STOP<\/strong>'))).html));
  null.$_nullMethod();
  this$static.analyzeFlag = false;
}

function $unstackAll(this$static){
  var i;
  for (i = 0; i != this$static.scopeCount; i++) {
  }
}

function $unstackScope(this$static, s){
  if (s == 0) {
    if (this$static.scopeCount < 2)
      return;
    s = 1;
  }
  if (this$static.scopes[s].$_nullField != this$static.scopes[s - 1].$_nullField)
    return;
  for (; s < this$static.scopeCount; s++)
    ++this$static.scopes[s].$_nullField;
}

function $updateCircuit(this$static){
  var badnodes, c, ce, ct, didAnalyze, e, g, i, inc, info, mydrawstarttime, myrunstarttime, mystarttime, oldfont, sysTime, x_0;
  mystarttime = ($clinit_System() , fromDouble_0(Date.now()));
  didAnalyze = this$static.analyzeFlag;
  if (this$static.analyzeFlag) {
    $analyzeCircuit(this$static);
    this$static.analyzeFlag = false;
  }
  $setupScopes(this$static);
  g = new Graphics(this$static.backcontext);
  selectColor = ($clinit_Color() , cyan);
  if (this$static.printableCheckItem.on) {
    whiteColor = black;
    lightGrayColor = black;
    $setColor(g, white);
  }
   else {
    whiteColor = white;
    lightGrayColor = lightGray;
    $setColor(g, black);
  }
  null.$_nullMethod().$_nullMethod();
  null.$_nullMethod().$_nullMethod();
  null.$_nullMethod();
  myrunstarttime = fromDouble_0(Date.now());
  if (this$static.simRunning) {
    try {
      $runCircuit(this$static, didAnalyze);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 11)) {
        e = $e0;
        console.log('exception in runCircuit ' + e);
        $printStackTraceImpl(e, err_0, '');
        return;
      }
       else 
        throw toJs($e0);
    }
    this$static.myruntime = add_2(this$static.myruntime, sub_1(fromDouble_0(Date.now()), myrunstarttime));
  }
  sysTime = fromDouble_0(Date.now());
  if (this$static.simRunning) {
    if (neq(this$static.lastTime, 0)) {
      inc = toInt(sub_1(sysTime, this$static.lastTime));
      c = null.$_nullField;
      c = $wnd.Math.exp(c / 3.5 - 14.2);
      currentMult = 1.7 * inc * c;
      this$static.conventionCheckItem.on || (currentMult = -currentMult);
    }
    this$static.lastTime = sysTime;
  }
   else 
    this$static.lastTime = 0;
  if (gte_0(sub_1(sysTime, this$static.secTime), $intern_18)) {
    this$static.frames_0 = 0;
    this$static.steps = 0;
    this$static.secTime = sysTime;
  }
  powerMult = $wnd.Math.exp(null.$_nullField / 4.762 - 7);
  oldfont = unitsFont;
  $setFont(g, oldfont);
  mydrawstarttime = fromDouble_0(Date.now());
  null.$_nullMethod(($clinit_Context2d$LineCap() , ROUND).value_0);
  null.$_nullMethod();
  for (i = 0; i != null.$_nullField.length; i++) {
    this$static.powerCheckItem.on && $setColor(g, gray);
    $getElm(i).$_nullMethod();
  }
  this$static.mydrawtime = add_2(this$static.mydrawtime, sub_1(fromDouble_0(Date.now()), mydrawstarttime));
  if (this$static.mouseMode != 2 && this$static.mouseMode != 3) {
    for (i = 0; i != this$static.postDrawList.arrayList.array.length; i++) {
      $setColor((castTo($get_3(this$static.postDrawList, i), 14) , g), whiteColor);
      $fillOval();
    }
  }
  if (this$static.tempMouseMode == 2 || this$static.tempMouseMode == 3 || this$static.tempMouseMode == 5 || this$static.tempMouseMode == 4)
    for (i = 0; i != null.$_nullField.length; i++) {
      ce = $getElm(i);
      if (ce != this$static.mouseElm || this$static.tempMouseMode != 5) {
        $setColor(g, gray);
        $fillOval();
        $fillOval();
      }
       else {
        null.$_nullMethod(cyan);
      }
    }
  this$static.tempMouseMode == 6 && !!this$static.mouseElm && $drawHandles(this$static.mouseElm, g, cyan);
  if (!!this$static.dragElm && (this$static.dragElm.x_0 != this$static.dragElm.x2 || this$static.dragElm.y_0 != this$static.dragElm.y2)) {
    this$static.dragElm.draw(g);
    $drawHandles(this$static.dragElm, g, cyan);
  }
  for (i = 0; i != this$static.badConnectionList.arrayList.array.length; i++) {
    castTo($get_3(this$static.badConnectionList, i), 14);
    $setColor(g, red);
    $fillOval();
  }
  if (this$static.selectedArea) {
    $setColor(g, selectColor);
    null.$_nullMethod();
  }
  if (this$static.crossHairCheckItem.on && this$static.mouseCursorX >= 0 && this$static.mouseCursorX <= this$static.circuitArea.width_0 && this$static.mouseCursorY <= this$static.circuitArea.height) {
    $setColor(g, gray);
    $snapGrid(this$static, $inverseTransformX(this$static, this$static.mouseCursorX));
    $snapGrid(this$static, $inverseTransformY(this$static, this$static.mouseCursorY));
    $inverseTransformY(this$static, this$static.circuitArea.height);
    $drawLine();
    $inverseTransformX(this$static, this$static.circuitArea.width_0);
    $drawLine();
  }
  null.$_nullMethod();
  this$static.printableCheckItem.on?$setColor(g, white):$setColor(g, black);
  null.$_nullMethod() - this$static.circuitArea.height;
  null.$_nullMethod();
  $setFont(g, oldfont);
  ct = this$static.scopeCount;
  this$static.stopMessage != null && (ct = 0);
  for (i = 0; i != ct; i++)
    this$static.scopes[i].$_nullMethod();
  if (this$static.mouseWasOverSplitter) {
    $setColor(g, cyan);
    null.$_nullMethod();
    $drawLine();
    null.$_nullMethod();
  }
  $setColor(g, whiteColor);
  if (this$static.stopMessage != null) {
    null.$_nullMethod();
  }
   else {
    info = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 10, 6, 1);
    if (this$static.mouseElm) {
      if (this$static.mousePost == -1) {
        this$static.mouseElm.getInfo(info);
        info[0] = LS(info[0]);
        info[1] != null && (info[1] = LS(info[1]));
      }
       else 
        info[0] = 'V = ' + myGetUnitText($getPostVoltage(this$static.mouseElm, this$static.mousePost), 'V', false);
    }
     else {
      info[0] = 't = ' + myGetUnitText(this$static.t, 's', false);
      info[1] = LS('time step = ') + myGetUnitText(this$static.timeStep, 's', false);
    }
    if (this$static.hintType != -1) {
      for (i = 0; info[i] != null; i++)
      ;
      $getElm(this$static.hintItem1);
      $getElm(this$static.hintItem2);
      this$static.hintType = -1;
    }
    x_0 = 0;
    ct != 0 && (x_0 = this$static.scopes[ct - 1].$_nullMethod() + 20);
    $max(x_0, null.$_nullMethod() * 2 / 3 | 0);
    for (i = 0; info[i] != null; i++)
    ;
    badnodes = this$static.badConnectionList.arrayList.array.length;
    badnodes > 0 && (info[i++] = badnodes + (badnodes == 1?LS(' bad connection'):LS(' bad connections')));
    for (i = 0; info[i] != null; i++)
      null.$_nullMethod();
  }
  ++this$static.frames_0;
  $setColor(g, white);
  null.$_nullMethod(null.$_nullMethod());
  this$static.lastFrameTime = this$static.lastTime;
  this$static.mytime = sub_1(add_2(this$static.mytime, fromDouble_0(Date.now())), mystarttime);
  this$static.myframes = add_2(this$static.myframes, 1);
}

function $updateModels(){
  var i;
  for (i = 0; i != null.$_nullField.length; i++)
    null.$_nullMethod().$_nullMethod();
}

function $weAreInGermany(){
  try {
    l = navigator.languages?navigator.languages[0]:navigator.language || navigator.userLanguage;
    return l.toUpperCase().startsWith('DE');
  }
   catch (e) {
    return 0;
  }
}

function $weAreInUS(){
  try {
    l = navigator.languages?navigator.languages[0]:navigator.language || navigator.userLanguage;
    if (l.length > 2) {
      l = l.slice(-2).toUpperCase();
      return l == 'US' || l == 'CA';
    }
     else {
      return 0;
    }
  }
   catch (e) {
    return 0;
  }
}

function $writeClipboardToStorage(this$static){
  var stor;
  stor = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  if (!stor)
    return;
  $setItem(stor, this$static.clipboard);
}

function $zoomCircuit(this$static, dy){
  var newScale, oldScale, val;
  oldScale = this$static.transform[0];
  val = dy * $intern_26;
  newScale = $wnd.Math.max(oldScale + val, 0.2);
  newScale = $wnd.Math.min(newScale, 2.5);
  $setCircuitScale(this$static, newScale);
}

function CirSim(){
  this.mainMenuItems = new Vector;
  this.mainMenuItemNames = new Vector;
  new CirSim$1(this);
  this.postDrawList = new Vector;
  this.badConnectionList = new Vector;
}

function LS(s){
  var ix, sm;
  if (s == null)
    return null;
  sm = castToString($getStringValue(localizationMap, s));
  if (sm != null)
    return sm;
  ix = $indexOf_0(s, fromCodePoint(126));
  if (ix < 0)
    return s;
  s = s.substr(0, ix);
  sm = castToString($getStringValue(localizationMap, s));
  if (sm != null)
    return sm;
  return s;
}

function console_0(text_0){
  console.log(text_0);
}

function constructElement(n, x1, y1){
  if (n == 'GroundElm')
    return new GroundElm(x1, y1);
  if (n == 'ResistorElm')
    return new ResistorElm(x1, y1);
  if (n == 'RailElm')
    return new RailElm(x1, y1);
  if (n == 'SwitchElm')
    return new SwitchElm(x1, y1);
  if (n == 'Switch2Elm')
    return new Switch2Elm(x1, y1);
  if (n == 'NTransistorElm')
    return new NTransistorElm(x1, y1);
  if (n == 'PTransistorElm')
    return new PTransistorElm(x1, y1);
  if (n == 'WireElm')
    return new WireElm(x1, y1);
  if (n == 'CapacitorElm')
    return new CapacitorElm(x1, y1);
  if (n == 'PolarCapacitorElm')
    return new PolarCapacitorElm(x1, y1);
  if (n == 'InductorElm')
    return new InductorElm(x1, y1);
  if (n == 'DCVoltageElm')
    return new DCVoltageElm(x1, y1);
  if (n == 'VarRailElm')
    return new VarRailElm(x1, y1);
  if (n == 'PotElm')
    return new PotElm(x1, y1);
  if (n == 'OutputElm')
    return new OutputElm(x1, y1);
  if (n == 'CurrentElm')
    return new CurrentElm(x1, y1);
  if (n == 'ProbeElm')
    return new ProbeElm(x1, y1);
  if (n == 'DiodeElm')
    return new DiodeElm(x1, y1);
  if (n == 'ZenerElm')
    return new ZenerElm(x1, y1);
  if (n == 'ACVoltageElm')
    return new ACVoltageElm(x1, y1);
  if (n == 'ACRailElm')
    return new ACRailElm(x1, y1);
  if (n == 'SquareRailElm')
    return new SquareRailElm(x1, y1);
  if (n == 'SweepElm')
    return new SweepElm(x1, y1);
  if (n == 'LEDElm')
    return new LEDElm(x1, y1);
  if (n == 'AntennaElm')
    return new AntennaElm(x1, y1);
  if (n == 'LogicInputElm')
    return new LogicInputElm(x1, y1);
  if (n == 'LogicOutputElm')
    return new LogicOutputElm(x1, y1);
  if (n == 'TransformerElm')
    return new TransformerElm(x1, y1);
  if (n == 'TappedTransformerElm')
    return new TappedTransformerElm(x1, y1);
  if (n == 'TransLineElm')
    return new TransLineElm(x1, y1);
  if (n == 'RelayElm')
    return new RelayElm(x1, y1);
  if (n == 'MemristorElm')
    return new MemristorElm(x1, y1);
  if (n == 'SparkGapElm')
    return new SparkGapElm(x1, y1);
  if (n == 'ClockElm')
    return new ClockElm(x1, y1);
  if (n == 'AMElm')
    return new AMElm(x1, y1);
  if (n == 'FMElm')
    return new FMElm(x1, y1);
  if (n == 'LampElm')
    return new LampElm(x1, y1);
  if (n == 'PushSwitchElm')
    return new PushSwitchElm(x1, y1);
  if (n == 'OpAmpElm')
    return new OpAmpElm(x1, y1);
  if (n == 'OpAmpSwapElm')
    return new OpAmpSwapElm(x1, y1);
  if (n == 'NMosfetElm')
    return new NMosfetElm(x1, y1);
  if (n == 'PMosfetElm')
    return new PMosfetElm(x1, y1);
  if (n == 'NJfetElm')
    return new NJfetElm(x1, y1);
  if (n == 'PJfetElm')
    return new PJfetElm(x1, y1);
  if (n == 'AnalogSwitchElm')
    return new AnalogSwitchElm(x1, y1);
  if (n == 'AnalogSwitch2Elm')
    return new AnalogSwitch2Elm(x1, y1);
  if (n == 'SchmittElm')
    return new SchmittElm(x1, y1);
  if (n == 'InvertingSchmittElm')
    return new InvertingSchmittElm(x1, y1);
  if (n == 'TriStateElm')
    return new TriStateElm(x1, y1);
  if (n == 'SCRElm')
    return new SCRElm(x1, y1);
  if (n == 'DiacElm')
    return new DiacElm(x1, y1);
  if (n == 'TriacElm')
    return new TriacElm(x1, y1);
  if (n == 'TriodeElm')
    return new TriodeElm(x1, y1);
  if (n == 'TunnelDiodeElm')
    return new TunnelDiodeElm(x1, y1);
  if (n == 'CC2Elm')
    return new CC2Elm(x1, y1);
  if (n == 'CC2NegElm')
    return new CC2NegElm(x1, y1);
  if (n == 'InverterElm')
    return new InverterElm(x1, y1);
  if (n == 'NandGateElm')
    return new NandGateElm(x1, y1);
  if (n == 'NorGateElm')
    return new NorGateElm(x1, y1);
  if (n == 'AndGateElm')
    return new AndGateElm(x1, y1);
  if (n == 'OrGateElm')
    return new OrGateElm(x1, y1);
  if (n == 'XorGateElm')
    return new XorGateElm(x1, y1);
  if (n == 'DFlipFlopElm')
    return new DFlipFlopElm(x1, y1);
  if (n == 'JKFlipFlopElm')
    return new JKFlipFlopElm(x1, y1);
  if (n == 'SevenSegElm')
    return new SevenSegElm(x1, y1);
  if (n == 'MultiplexerElm')
    return new MultiplexerElm(x1, y1);
  if (n == 'DeMultiplexerElm')
    return new DeMultiplexerElm(x1, y1);
  if (n == 'SipoShiftElm')
    return new SipoShiftElm(x1, y1);
  if (n == 'PisoShiftElm')
    return new PisoShiftElm(x1, y1);
  if (n == 'PhaseCompElm')
    return new PhaseCompElm(x1, y1);
  if (n == 'CounterElm')
    return new CounterElm(x1, y1);
  if (n == 'DecadeElm')
    return new DecadeElm(x1, y1);
  if (n == 'TimerElm')
    return new TimerElm(x1, y1);
  if (n == 'DACElm')
    return new DACElm(x1, y1);
  if (n == 'ADCElm')
    return new ADCElm(x1, y1);
  if (n == 'LatchElm')
    return new LatchElm(x1, y1);
  if (n == 'SeqGenElm')
    return new SeqGenElm(x1, y1);
  if (n == 'VCOElm')
    return new VCOElm(x1, y1);
  if (n == 'BoxElm')
    return new BoxElm(x1, y1);
  if (n == 'TextElm')
    return new TextElm(x1, y1);
  if (n == 'TFlipFlopElm')
    return new TFlipFlopElm(x1, y1);
  if (n == 'SevenSegDecoderElm')
    return new SevenSegDecoderElm(x1, y1);
  if (n == 'FullAdderElm')
    return new FullAdderElm(x1, y1);
  if (n == 'HalfAdderElm')
    return new HalfAdderElm(x1, y1);
  if (n == 'MonostableElm')
    return new MonostableElm(x1, y1);
  if (n == 'LabeledNodeElm')
    return new LabeledNodeElm(x1, y1);
  if (n == 'UserDefinedLogicElm')
    return new CustomLogicElm(x1, y1);
  if (n == 'TestPointElm')
    return new TestPointElm(x1, y1);
  if (n == 'AmmeterElm')
    return new AmmeterElm(x1, y1);
  if (n == 'DataRecorderElm')
    return new DataRecorderElm(x1, y1);
  if (n == 'AudioOutputElm')
    return new AudioOutputElm(x1, y1);
  if (n == 'NDarlingtonElm')
    return new NDarlingtonElm(x1, y1);
  if (n == 'PDarlingtonElm')
    return new PDarlingtonElm(x1, y1);
  if (n == 'ComparatorElm')
    return new ComparatorElm(x1, y1);
  if (n == 'OTAElm')
    return new OTAElm(x1, y1);
  if (n == 'NoiseElm')
    return new NoiseElm(x1, y1);
  if (n == 'VCVSElm')
    return new VCVSElm(x1, y1);
  if (n == 'VCCSElm')
    return new VCCSElm(x1, y1);
  if (n == 'CCVSElm')
    return new CCVSElm(x1, y1);
  if (n == 'CCCSElm')
    return new CCCSElm(x1, y1);
  if (n == 'OhmMeterElm')
    return new OhmMeterElm(x1, y1);
  return null;
}

function createCe(tint, x1, y1, x2, y2, f, st){
  if (tint == 103)
    return new GroundElm_0(x1, y1, x2, y2, f);
  if (tint == 114)
    return new ResistorElm_0(x1, y1, x2, y2, f, st);
  if (tint == 82)
    return new RailElm_1(x1, y1, x2, y2, f, st);
  if (tint == 115)
    return new SwitchElm_0(x1, y1, x2, y2, f, st);
  if (tint == 83)
    return new Switch2Elm_0(x1, y1, x2, y2, f, st);
  if (tint == 116)
    return new TransistorElm(x1, y1, x2, y2, f, st);
  if (tint == 119)
    return new WireElm_0(x1, y1, x2, y2, f);
  if (tint == 99)
    return new CapacitorElm_0(x1, y1, x2, y2, f, st);
  if (tint == 209)
    return new PolarCapacitorElm_0(x1, y1, x2, y2, f, st);
  if (tint == 108)
    return new InductorElm_0(x1, y1, x2, y2, f, st);
  if (tint == 118)
    return new VoltageElm_0(x1, y1, x2, y2, f, st);
  if (tint == 172)
    return new VarRailElm_0(x1, y1, x2, y2, f, st);
  if (tint == 174)
    return new PotElm_0(x1, y1, x2, y2, f, st);
  if (tint == 79)
    return new OutputElm_0(x1, y1, x2, y2, f);
  if (tint == 105)
    return new CurrentElm_0(x1, y1, x2, y2, f, st);
  if (tint == 112)
    return new ProbeElm_0(x1, y1, x2, y2, f, st);
  if (tint == 100)
    return new DiodeElm_0(x1, y1, x2, y2, f, st);
  if (tint == 122)
    return new ZenerElm_0(x1, y1, x2, y2, f, st);
  if (tint == 170)
    return new SweepElm_0(x1, y1, x2, y2, f, st);
  if (tint == 162)
    return new LEDElm_0(x1, y1, x2, y2, f, st);
  if (tint == 65)
    return new AntennaElm_0(x1, y1, x2, y2, f, st);
  if (tint == 76)
    return new LogicInputElm_0(x1, y1, x2, y2, f, st);
  if (tint == 77)
    return new LogicOutputElm_0(x1, y1, x2, y2, f, st);
  if (tint == 84)
    return new TransformerElm_0(x1, y1, x2, y2, f, st);
  if (tint == 169)
    return new TappedTransformerElm_0(x1, y1, x2, y2, f, st);
  if (tint == 171)
    return new TransLineElm_0(x1, y1, x2, y2, f, st);
  if (tint == 178)
    return new RelayElm_0(x1, y1, x2, y2, f, st);
  if (tint == 109)
    return new MemristorElm_0(x1, y1, x2, y2, f, st);
  if (tint == 187)
    return new SparkGapElm_0(x1, y1, x2, y2, f, st);
  if (tint == 200)
    return new AMElm_0(x1, y1, x2, y2, f, st);
  if (tint == 201)
    return new FMElm_0(x1, y1, x2, y2, f, st);
  if (tint == 110)
    return new NoiseElm_0(x1, y1, x2, y2, f, st);
  if (tint == 181)
    return new LampElm_0(x1, y1, x2, y2, f, st);
  if (tint == 97)
    return new OpAmpElm_0(x1, y1, x2, y2, f, st);
  if (tint == 102)
    return new MosfetElm(x1, y1, x2, y2, f, st);
  if (tint == 106)
    return new JfetElm(x1, y1, x2, y2, f, st);
  if (tint == 159)
    return new AnalogSwitchElm_0(x1, y1, x2, y2, f, st);
  if (tint == 160)
    return new AnalogSwitch2Elm_0(x1, y1, x2, y2, f, st);
  if (tint == 180)
    return new TriStateElm_0(x1, y1, x2, y2, f, st);
  if (tint == 182)
    return new SchmittElm_0(x1, y1, x2, y2, f, st);
  if (tint == 183)
    return new InvertingSchmittElm_0(x1, y1, x2, y2, f, st);
  if (tint == 177)
    return new SCRElm_0(x1, y1, x2, y2, f, st);
  if (tint == 203)
    return new DiacElm_0(x1, y1, x2, y2, f, st);
  if (tint == 206)
    return new TriacElm_0(x1, y1, x2, y2, f, st);
  if (tint == 173)
    return new TriodeElm_0(x1, y1, x2, y2, f, st);
  if (tint == 175)
    return new TunnelDiodeElm_0(x1, y1, x2, y2, f);
  if (tint == 179)
    return new CC2Elm_0(x1, y1, x2, y2, f, st);
  if (tint == 73)
    return new InverterElm_0(x1, y1, x2, y2, f, st);
  if (tint == 151)
    return new NandGateElm_0(x1, y1, x2, y2, f, st);
  if (tint == 153)
    return new NorGateElm_0(x1, y1, x2, y2, f, st);
  if (tint == 150)
    return new AndGateElm_0(x1, y1, x2, y2, f, st);
  if (tint == 152)
    return new OrGateElm_0(x1, y1, x2, y2, f, st);
  if (tint == 154)
    return new XorGateElm_0(x1, y1, x2, y2, f, st);
  if (tint == 155)
    return new DFlipFlopElm_0(x1, y1, x2, y2, f, st);
  if (tint == 156)
    return new JKFlipFlopElm_0(x1, y1, x2, y2, f, st);
  if (tint == 157)
    return new SevenSegElm_0(x1, y1, x2, y2, f, st);
  if (tint == 184)
    return new MultiplexerElm_0(x1, y1, x2, y2, f, st);
  if (tint == 185)
    return new DeMultiplexerElm_0(x1, y1, x2, y2, f, st);
  if (tint == 189)
    return new SipoShiftElm_0(x1, y1, x2, y2, f, st);
  if (tint == 186)
    return new PisoShiftElm_0(x1, y1, x2, y2, f, st);
  if (tint == 161)
    return new PhaseCompElm_0(x1, y1, x2, y2, f, st);
  if (tint == 164)
    return new CounterElm_0(x1, y1, x2, y2, f, st);
  if (tint == 163)
    return new DecadeElm_0(x1, y1, x2, y2, f, st);
  if (tint == 165)
    return new TimerElm_0(x1, y1, x2, y2, f, st);
  if (tint == 166)
    return new DACElm_0(x1, y1, x2, y2, f, st);
  if (tint == 167)
    return new ADCElm_0(x1, y1, x2, y2, f, st);
  if (tint == 168)
    return new LatchElm_0(x1, y1, x2, y2, f, st);
  if (tint == 188)
    return new SeqGenElm_0(x1, y1, x2, y2, f, st);
  if (tint == 158)
    return new VCOElm_0(x1, y1, x2, y2, f, st);
  if (tint == 98)
    return new BoxElm_0(x1, y1, x2, y2, f);
  if (tint == 120)
    return new TextElm_0(x1, y1, x2, y2, f, st);
  if (tint == 193)
    return new TFlipFlopElm_0(x1, y1, x2, y2, f, st);
  if (tint == 197)
    return new SevenSegDecoderElm_0(x1, y1, x2, y2, f, st);
  if (tint == 196)
    return new FullAdderElm_0(x1, y1, x2, y2, f, st);
  if (tint == 195)
    return new HalfAdderElm_0(x1, y1, x2, y2, f, st);
  if (tint == 194)
    return new MonostableElm_0(x1, y1, x2, y2, f, st);
  if (tint == 207)
    return new LabeledNodeElm_0(x1, y1, x2, y2, f, st);
  if (tint == 208)
    return new CustomLogicElm_0(x1, y1, x2, y2, f, st);
  if (tint == 210)
    return new DataRecorderElm_0(x1, y1, x2, y2, f, st);
  if (tint == 211)
    return new AudioOutputElm_0(x1, y1, x2, y2, f, st);
  if (tint == 212)
    return new VCVSElm_0(x1, y1, x2, y2, f, st);
  if (tint == 213)
    return new VCCSElm_0(x1, y1, x2, y2, f, st);
  if (tint == 214)
    return new CCVSElm_0(x1, y1, x2, y2, f, st);
  if (tint == 215)
    return new CCCSElm_0(x1, y1, x2, y2, f, st);
  if (tint == 216)
    return new OhmMeterElm_0(x1, y1, x2, y2, f, st);
  if (tint == 368)
    return new TestPointElm_0(x1, y1, x2, y2, f, st);
  if (tint == 370)
    return new AmmeterElm_0(x1, y1, x2, y2, f, st);
  if (tint == 400)
    return new DarlingtonElm(x1, y1, x2, y2, f, st);
  if (tint == 401)
    return new ComparatorElm_0(x1, y1, x2, y2, f, st);
  if (tint == 402)
    return new OTAElm_0(x1, y1, x2, y2, f, st);
  return null;
}

defineClass(308, 1, {45:1, 214:1, 302:1, 215:1, 303:1, 134:1, 29:1, 598:1}, CirSim);
_.onClick = function onClick_2(e){
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  (e.nativeEvent.button | 0) == 4 && $scrollValues(this, (e.nativeEvent.clientX || 0) | 0, (e.nativeEvent.clientY || 0) | 0, 0);
}
;
_.onMouseDown = function onMouseDown_0(e){
  var gx, gy, x0, y0;
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  $getX(e);
  $getY(e);
  this.mouseDownTime = ($clinit_System() , fromDouble_0(Date.now()));
  (this.clipboard == null || this.clipboard.length == 0) && $readClipboardFromStorage(this);
  $setEnabled(this.pasteItem, this.clipboard != null && this.clipboard.length > 0);
  if ((e.nativeEvent.button | 0) != 1)
    return;
  $mouseSelect(this, e);
  this.mouseDragging = true;
  if (this.mouseWasOverSplitter) {
    this.tempMouseMode = 7;
    return;
  }
  if ((e.nativeEvent.button | 0) == 1) {
    this.tempMouseMode = this.mouseMode;
    !!e.nativeEvent.altKey && !!e.nativeEvent.metaKey?(this.tempMouseMode = 3):!!e.nativeEvent.altKey && !!e.nativeEvent.shiftKey?(this.tempMouseMode = 2):e.nativeEvent.shiftKey?(this.tempMouseMode = 6):e.nativeEvent.altKey?(this.tempMouseMode = 1):(!!e.nativeEvent.ctrlKey || !!e.nativeEvent.metaKey) && (this.tempMouseMode = 5);
  }
  gx = $inverseTransformX(this, $getX(e));
  gy = $inverseTransformY(this, $getY(e));
  if ($doSwitch(this, gx, gy)) {
    return;
  }
  this.tempMouseMode == 6 && !!this.mouseElm && $getHandleGrabbedClose(this.mouseElm, gx, gy) >= 0 && !$anySelectedButMouse(this) && (this.tempMouseMode = 5);
  this.tempMouseMode != 6 && this.tempMouseMode != 4 && $clearSelection();
  $pushUndo(this);
  this.initDragGridX = gx;
  this.initDragGridY = gy;
  if (this.tempMouseMode != 0)
    return;
  x0 = gx + this.gridRound & this.gridMask;
  y0 = gy + this.gridRound & this.gridMask;
  if (!$contains(this.circuitArea, $getX(e), $getY(e)))
    return;
  this.dragElm = constructElement(this.mouseModeStr, x0, y0);
}
;
_.onMouseMove = function onMouseMove_0(e){
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  this.mouseCursorX = $getX(e);
  this.mouseCursorY = $getY(e);
  if (this.mouseDragging) {
    $mouseDragged(this, e);
    return;
  }
  $mouseSelect(this, e);
}
;
_.onMouseOut = function onMouseOut_0(e){
  this.mouseCursorX = -1;
}
;
_.onMouseUp = function onMouseUp_0(e){
  var circuitChanged;
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  this.mouseDragging = false;
  this.tempMouseMode == 6 && !this.selectedArea && $clearSelection();
  this.tempMouseMode = this.mouseMode;
  this.selectedArea = null;
  circuitChanged = false;
  if (this.heldSwitchElm) {
    $mouseUp(this.heldSwitchElm);
    this.heldSwitchElm = null;
    circuitChanged = true;
  }
  if (this.dragElm) {
    if (this.dragElm.creationFailed()) {
      this.dragElm.delete_0();
      (this.mouseMode == 6 || this.mouseMode == 4) && $clearSelection();
    }
     else {
      null.$_nullMethod();
      this.dragElm.draggingDone();
      circuitChanged = true;
    }
    this.dragElm = null;
  }
  circuitChanged && (this.analyzeFlag = true);
  !!this.dragElm && this.dragElm.delete_0();
  this.dragElm = null;
}
;
_.onMouseWheel = function onMouseWheel(e){
  var zoomOnly;
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  zoomOnly = ($clinit_System() , lt(fromDouble_0(Date.now()), add_2(this.zoomTime, $intern_18)));
  zoomOnly || $scrollValues(this, (e.nativeEvent.clientX || 0) | 0, (e.nativeEvent.clientY || 0) | 0, $eventGetMouseWheelVelocityY(e.nativeEvent));
  if (instanceOf(this.mouseElm, 134) && !zoomOnly)
    castTo(this.mouseElm, 134).onMouseWheel(e);
  else if (this.scopeSelected != -1)
    this.scopes[this.scopeSelected].$_nullMethod();
  else if (!$dialogIsShowing()) {
    $zoomCircuit(this, $eventGetMouseWheelVelocityY(e.nativeEvent));
    this.zoomTime = fromDouble_0(Date.now());
  }
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_3(e){
  var c, cc, code_0, t;
  cc = e.nativeEvent.keyCode || 0;
  t = $getTypeInt(e.nativeEvent);
  code_0 = e.nativeEvent.keyCode | 0;
  if ($dialogIsShowing()) {
    if (!!scrollValuePopup && scrollValuePopup.showing && (t & 128) != 0) {
      (code_0 == 27 || code_0 == 32) && $close_0(scrollValuePopup, false);
      code_0 == 13 && $close_0(scrollValuePopup, true);
    }
    if (!!editDialog_0 && editDialog_0.showing && (t & 128) != 0) {
      code_0 == 27 && ($hide_0(editDialog_0, false) , editDialog_0 = null);
      if (code_0 == 13) {
        $apply(editDialog_0);
        $hide_0(editDialog_0, false);
        editDialog_0 = null;
      }
    }
    return;
  }
  if ((t & 128) != 0) {
    if (code_0 == 8 || code_0 == 46) {
      this.menuElm = null;
      $doDelete(this);
      e.isCanceled = true;
    }
    if (code_0 == 27) {
      this.mouseMode = 6;
      $setCursorStyle(this, 'cursorPointer');
      this.mouseModeStr = 'Select';
      this.tempMouseMode = this.mouseMode;
      e.isCanceled = true;
    }
    if (!!e.nativeEvent.ctrlKey || !!e.nativeEvent.metaKey) {
      if (code_0 == 67) {
        $menuPerformed(this, 'key', 'copy');
        e.isCanceled = true;
      }
      if (code_0 == 88) {
        $menuPerformed(this, 'key', 'cut');
        e.isCanceled = true;
      }
      if (code_0 == 86) {
        $menuPerformed(this, 'key', 'paste');
        e.isCanceled = true;
      }
      if (code_0 == 90) {
        $menuPerformed(this, 'key', 'undo');
        e.isCanceled = true;
      }
      if (code_0 == 89) {
        $menuPerformed(this, 'key', 'redo');
        e.isCanceled = true;
      }
      if (code_0 == 68) {
        $menuPerformed(this, 'key', 'duplicate');
        e.isCanceled = true;
      }
      if (code_0 == 65) {
        $menuPerformed(this, 'key', 'selectAll');
        e.isCanceled = true;
      }
    }
  }
  if ((t & 256) != 0) {
    if (cc == 45) {
      $menuPerformed(this, 'key', 'zoomout');
      e.isCanceled = true;
    }
    if (cc == 43 || cc == 61) {
      $menuPerformed(this, 'key', 'zoomin');
      e.isCanceled = true;
    }
    if (cc == 48) {
      $menuPerformed(this, 'key', 'zoom100');
      e.isCanceled = true;
    }
    if (cc > 32 && cc < 127) {
      c = this.shortcuts[cc];
      e.isCanceled = true;
      if (c == null)
        return;
      this.mouseMode = 0;
      $setCursorStyle(this, 'cursorCross');
      this.mouseModeStr = c;
      this.tempMouseMode = this.mouseMode;
    }
    if (cc == 32) {
      this.mouseMode = 6;
      $setCursorStyle(this, 'cursorPointer');
      this.mouseModeStr = 'Select';
      this.tempMouseMode = this.mouseMode;
      e.isCanceled = true;
    }
  }
}
;
_.analyzeFlag = false;
_.circuitMatrixFullSize = 0;
_.circuitMatrixSize = 0;
_.circuitNeedsMap = false;
_.circuitNonLinear = false;
_.converged = false;
_.dragGridX = 0;
_.dragGridY = 0;
_.dragScreenX = 0;
_.dragScreenY = 0;
_.draggingPost = 0;
_.dumpMatrix = false;
_.frames_0 = 0;
_.gridMask = 0;
_.gridRound = 0;
_.gridSize = 0;
_.hintItem1 = 0;
_.hintItem2 = 0;
_.hintType = -1;
_.initDragGridX = 0;
_.initDragGridY = 0;
_.isMac = false;
_.lastFrameTime = 0;
_.lastIterTime = 0;
_.lastTime = 0;
_.menuScope = -1;
_.mouseCursorX = -1;
_.mouseCursorY = -1;
_.mouseDownTime = 0;
_.mouseDragging = false;
_.mouseElm = null;
_.mouseMode = 6;
_.mouseModeStr = 'Select';
_.mousePost = -1;
_.mouseWasOverSplitter = false;
_.mydrawtime = 0;
_.myframes = 1;
_.myruntime = 0;
_.mytime = 0;
_.scopeCount = 0;
_.scopeHeightFraction = 0.2;
_.scopeSelected = -1;
_.secTime = 0;
_.showResistanceInVoltageSources = false;
_.simRunning = false;
_.steps = 0;
_.t = 0;
_.tempMouseMode = 6;
_.timeStep = 0;
_.zoomTime = 0;
var VERTICALPANELWIDTH = 166, aboutBox, customLogicEditDialog, editDialog_0, exportAsLocalFileDialog, exportAsTextDialog, exportAsUrlDialog, importFromDropboxDialog, importFromTextDialog, localizationMap, muString = '\u03BC', ohmString = '\u03A9', scrollValuePopup;
var Lcom_lushprojects_circuitjs1_client_CirSim_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim', 308);
function CirSim$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(333, 161, {}, CirSim$1);
_.run = function run_2(){
  $updateCircuit(this.this$01);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/1', 333);
function CirSim$10(this$0){
  this.this$01 = this$0;
}

defineClass(342, 1, {}, CirSim$10);
_.execute_0 = function execute_10(){
  $setOptionInStorage('conventionalCurrent', this.this$01.conventionCheckItem.on);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$10_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/10', 342);
function CirSim$15(this$0){
  this.this$01 = this$0;
  this.val$centre2 = true;
}

defineClass(343, 1, {}, CirSim$15);
_.onError = function onError(request, exception){
}
;
_.onResponseReceived = function onResponseReceived(request, response){
  var lastArg, statusCode, text_0;
  statusCode = response.xmlHttpRequest.status;
  if ((statusCode == 1223?204:statusCode) == 200) {
    text_0 = response.xmlHttpRequest.responseText;
    $readSetup_1(this.this$01, $getBytes((lastArg = text_0 , $clinit_EmulatedCharset() , lastArg)), text_0.length, false, this.val$centre2);
  }
   else 
  ;
}
;
_.val$centre2 = false;
var Lcom_lushprojects_circuitjs1_client_CirSim$15_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/15', 343);
function CirSim$2(this$0){
  this.this$01 = this$0;
}

defineClass(334, 1, {}, CirSim$2);
_.execute_0 = function execute_11(){
  this.this$01.voltsCheckItem.on && $setState_0(this.this$01.powerCheckItem, false);
  $setPowerBarEnable(this.this$01);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$2_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/2', 334);
function CirSim$3(this$0){
  this.this$01 = this$0;
}

defineClass(335, 1, {}, CirSim$3);
_.execute_0 = function execute_12(){
  this.this$01.powerCheckItem.on && $setState_0(this.this$01.voltsCheckItem, false);
  $setPowerBarEnable(this.this$01);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$3_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/3', 335);
function CirSim$4(this$0){
  this.this$01 = this$0;
}

defineClass(336, 1, {}, CirSim$4);
_.execute_0 = function execute_13(){
  $setGrid(this.this$01);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$4_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/4', 336);
function CirSim$5(this$0){
  this.this$01 = this$0;
}

defineClass(337, 1, {}, CirSim$5);
_.execute_0 = function execute_14(){
  $setOptionInStorage('crossHair', this.this$01.crossHairCheckItem.on);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$5_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/5', 337);
function CirSim$6(this$0){
  this.this$01 = this$0;
}

defineClass(338, 1, {}, CirSim$6);
_.execute_0 = function execute_15(){
  $setOptionInStorage('euroResistors', this.this$01.euroResistorCheckItem.on);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$6_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/6', 338);
function CirSim$7(this$0){
  this.this$01 = this$0;
}

defineClass(339, 1, {}, CirSim$7);
_.execute_0 = function execute_16(){
  var i;
  $setOptionInStorage('euroGates', this.this$01.euroGatesCheckItem.on);
  for (i = 0; i != null.$_nullField.length; i++)
    $getElm(i).$_nullMethod();
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$7_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/7', 339);
function CirSim$8(this$0){
  this.this$01 = this$0;
}

defineClass(340, 1, {}, CirSim$8);
_.execute_0 = function execute_17(){
  var i;
  for (i = 0; i < this.this$01.scopeCount; i++)
    this.this$01.scopes[i].$_nullMethod(this.this$01.scopes[i].$_nullField);
  $setOptionInStorage('whiteBackground', this.this$01.printableCheckItem.on);
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$8_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/8', 340);
function CirSim$9(this$0){
  this.this$01 = this$0;
}

defineClass(341, 1, {}, CirSim$9);
_.execute_0 = function execute_18(){
  $setOptionInStorage('alternativeColor', this.this$01.alternativeColorCheckItem.on);
  setColorScale();
}
;
var Lcom_lushprojects_circuitjs1_client_CirSim$9_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/9', 341);
function CirSim$NodeMapEntry(n){
  this.node = n;
}

defineClass(193, 1, {193:1}, CirSim$NodeMapEntry);
_.node = 0;
var Lcom_lushprojects_circuitjs1_client_CirSim$NodeMapEntry_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CirSim/NodeMapEntry', 193);
function CircuitNode(){
  this.links_0 = new Vector;
}

defineClass(87, 1, {87:1}, CircuitNode);
_.internal = false;
var Lcom_lushprojects_circuitjs1_client_CircuitNode_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CircuitNode', 87);
function CircuitNodeLink(){
}

defineClass(94, 1, {94:1}, CircuitNodeLink);
_.num = 0;
var Lcom_lushprojects_circuitjs1_client_CircuitNodeLink_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CircuitNodeLink', 94);
function ClockElm(xx, yy){
  RailElm_0.call(this, xx, yy, 2);
  this.maxVoltage = 2.5;
  this.bias = 2.5;
  this.frequency = 100;
  this.flags |= 1;
}

defineClass(537, 33, $intern_61, ClockElm);
_.getShortcut = function getShortcut_6(){
  return 0;
}
;
var Lcom_lushprojects_circuitjs1_client_ClockElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ClockElm', 537);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  white = new Color(255, 255, 255);
  lightGray = new Color(192, 192, 192);
  gray = new Color(128, 128, 128);
  GRAY = new Color(128, 128, 128);
  new Color(64, 64, 64);
  darkGray = new Color(64, 64, 64);
  black = new Color(0, 0, 0);
  red = new Color(255, 0, 0);
  new Color(255, 175, 175);
  new Color(255, 200, 0);
  yellow = new Color(255, 255, 0);
  new Color(0, 255, 0);
  new Color(255, 0, 255);
  cyan = new Color(0, 255, 255);
  new Color(0, 0, 255);
  new Color_0;
}

function $$init_4(this$static){
}

function $getHexValue(this$static){
  var number, number0, number1;
  if (this$static.colorText != null) {
    return this$static.colorText;
  }
  return '#' + $pad((number0 = this$static.r >>> 0 , number0.toString(16))) + $pad((number1 = this$static.g >>> 0 , number1.toString(16))) + $pad((number = this$static.b >>> 0 , number.toString(16)));
}

function $pad(in_0){
  if (in_0.length == 0) {
    return '00';
  }
  if (in_0.length == 1) {
    return '0' + in_0;
  }
  return in_0;
}

function Color(r, g, b){
  $clinit_Color();
  $$init_4(this);
  this.r = r;
  this.g = g;
  this.b = b;
}

function Color_0(){
  $$init_4(this);
  this.colorText = '';
}

defineClass(32, 1, {32:1}, Color, Color_0);
_.toString_0 = function toString_10(){
  if (this.colorText != null) {
    return this.colorText;
  }
  return 'red=' + this.r + ', green=' + this.g + ', blue=' + this.b;
}
;
_.b = 0;
_.colorText = null;
_.g = 0;
_.r = 0;
var GRAY, black, cyan, darkGray, gray, lightGray, red, white, yellow;
var Lcom_lushprojects_circuitjs1_client_Color_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Color', 32);
function $$init_5(this$static){
  this$static.compElmList = new Vector;
  this$static.compNodeList = new Vector;
  this$static.numPosts = 0;
  this$static.numNodes = 0;
  this$static.voltageSources = new Vector;
}

function $getCurrentIntoNode(this$static, n){
  var c, cnLinks, i;
  c = 0;
  cnLinks = castTo($get_3(this$static.compNodeList, n), 87).links_0;
  for (i = 0; i < cnLinks.arrayList.array.length; i++) {
    c += (checkArrayElementIndex(i, cnLinks.arrayList.array.length) , castTo($get_1(cnLinks.arrayList, i), 94)).elm.getCurrentIntoNode((checkArrayElementIndex(i, cnLinks.arrayList.array.length) , castTo($get_1(cnLinks.arrayList, i), 94)).num);
  }
  return c;
}

function $loadComposite(this$static, stIn, model, externalNodes){
  var ceType, cn, cnLink, cnt, compNodeHash, dumpedCe, entry, entry$iterator, flags, i, i0, j, key, line, modelLinet, newce, nodeOfThisPost, stCe, stModel, thisPost, tint, vsRecord;
  compNodeHash = new HashMap;
  modelLinet = new StringTokenizer(model, '\r');
  while ($hasMoreTokens(modelLinet)) {
    line = $nextToken(modelLinet);
    stModel = new StringTokenizer(line, ' +\t\n\r\f');
    ceType = $nextToken(stModel);
    newce = constructElement(ceType, 0, 0);
    if (stIn) {
      tint = newce.getDumpType();
      dumpedCe = $nextToken(stIn);
      stCe = new StringTokenizer(dumpedCe, '_');
      flags = (new Integer_0($nextToken(stCe))).value_0;
      newce = createCe(tint, 0, 0, 0, 0, flags, stCe);
    }
    $add_9(this$static.compElmList, newce);
    thisPost = 0;
    while ($hasMoreTokens(stModel)) {
      nodeOfThisPost = (new Integer_0($nextToken(stModel))).value_0;
      cnLink = new CircuitNodeLink;
      cnLink.num = thisPost;
      cnLink.elm = newce;
      if ($containsKey(compNodeHash, valueOf(nodeOfThisPost))) {
        cn = castTo($get_0(compNodeHash, valueOf(nodeOfThisPost)), 87);
        $add_9(cn.links_0, cnLink);
      }
       else {
        cn = new CircuitNode;
        $add_9(cn.links_0, cnLink);
        $put(compNodeHash, valueOf(nodeOfThisPost), cn);
      }
      ++thisPost;
    }
  }
  this$static.numPosts = externalNodes.length;
  for (i0 = 0; i0 < externalNodes.length; i0++) {
    if ($containsKey(compNodeHash, valueOf(externalNodes[i0]))) {
      $add_9(this$static.compNodeList, castTo($get_0(compNodeHash, valueOf(externalNodes[i0])), 87));
      $remove_6(compNodeHash, valueOf(externalNodes[i0]));
    }
     else 
      throw toJs(new IllegalArgumentException);
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(compNodeHash)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    key = castTo(entry.getKey(), 20).value_0;
    $add_9(this$static.compNodeList, castTo($get_0(compNodeHash, valueOf(key)), 87));
  }
  this$static.numNodes = this$static.compNodeList.arrayList.array.length;
  this$static.posts = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, $intern_50, 14, this$static.numPosts, 0, 1);
  for (i = 0; i < this$static.compElmList.arrayList.array.length; i++) {
    cnt = castTo($get_3(this$static.compElmList, i), 4).getVoltageSourceCount();
    for (j = 0; j < cnt; j++) {
      vsRecord = new VoltageSourceRecord;
      vsRecord.elm = castTo($get_3(this$static.compElmList, i), 4);
      vsRecord.vsNumForElement = j;
      $add_9(this$static.voltageSources, vsRecord);
    }
  }
}

function $setPost(this$static, n, p){
  this$static.posts[n] = p;
}

function CompositeElm(xa, ya, xb, yb, f, st, s, externalNodes){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $$init_5(this);
  $loadComposite(this, st, s, externalNodes);
  $allocNodes(this);
}

function CompositeElm_0(xx, yy, s, externalNodes){
  CircuitElm.call(this, xx, yy);
  $$init_5(this);
  $loadComposite(this, null, s, externalNodes);
  $allocNodes(this);
}

defineClass(133, 4, $intern_57);
_.delete_1 = function delete_2(){
  var i;
  for (i = 0; i < this.compElmList.arrayList.array.length; i++)
    castTo($get_3(this.compElmList, i), 4).delete_0();
}
;
_.delete_0 = function(){
  this.delete_1();
}
;
_.getCurrentIntoNode = function getCurrentIntoNode_1(n){
  return $getCurrentIntoNode(this, n);
}
;
_.getDumpType = function(){
  return this.getDumpType_0();
}
;
_.getInternalNodeCount = function getInternalNodeCount_0(){
  return this.numNodes - this.numPosts;
}
;
_.getPost = function getPost_4(n){
  return this.posts[n];
}
;
_.getPostCount = function getPostCount_12(){
  return this.numPosts;
}
;
_.getPower_0 = function getPower_3(){
  var i, power;
  power = 0;
  for (i = 0; i < this.compElmList.arrayList.array.length; i++)
    power += castTo($get_3(this.compElmList, i), 4).getPower();
  return power;
}
;
_.getPower = function(){
  return this.getPower_0();
}
;
_.getVoltageSourceCount_0 = function getVoltageSourceCount_9(){
  return this.voltageSources.arrayList.array.length;
}
;
_.getVoltageSourceCount = function(){
  return this.getVoltageSourceCount_0();
}
;
_.setCurrent_0 = function setCurrent_3(vsn, c){
  var i;
  for (i = 0; i < this.voltageSources.arrayList.array.length; i++)
    castTo($get_3(this.voltageSources, i), 149).vsNode == vsn && castTo($get_3(this.voltageSources, i), 149).elm.setCurrent(castTo($get_3(this.voltageSources, i), 149).vsNumForElement, c);
}
;
_.setCurrent = function(vsn, c){
  this.setCurrent_0(vsn, c);
}
;
_.setNodeVoltage_0 = function setNodeVoltage_1(n, c){
  var cnLinks, i;
  this.volts[n] = c;
  cnLinks = castTo($get_3(this.compNodeList, n), 87).links_0;
  for (i = 0; i < cnLinks.arrayList.array.length; i++) {
    (checkArrayElementIndex(i, cnLinks.arrayList.array.length) , castTo($get_1(cnLinks.arrayList, i), 94)).elm.setNodeVoltage((checkArrayElementIndex(i, cnLinks.arrayList.array.length) , castTo($get_1(cnLinks.arrayList, i), 94)).num, c);
  }
  this.volts[n] = c;
}
;
_.setNodeVoltage = function(n, c){
  this.setNodeVoltage_0(n, c);
}
;
_.numNodes = 0;
_.numPosts = 0;
var Lcom_lushprojects_circuitjs1_client_CompositeElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CompositeElm', 133);
function $clinit_ComparatorElm(){
  $clinit_ComparatorElm = emptyMethod;
  modelExternalNodes = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [2, 1, 4]);
}

function $setSize_1(this$static, s){
  this$static.opsize = s;
  this$static.opheight = 8 * s;
  this$static.opwidth = 13 * s;
  this$static.flags = this$static.flags & -3 | (s == 1?2:0);
}

function ComparatorElm(xx, yy){
  $clinit_ComparatorElm();
  CompositeElm_0.call(this, xx, yy, modelString, modelExternalNodes);
  this.noDiagonal = true;
  $setSize_1(this, sim.smallGridCheckItem.on?1:2);
}

function ComparatorElm_0(xa, ya, xb, yb, f, st){
  $clinit_ComparatorElm();
  CompositeElm.call(this, xa, ya, xb, yb, f, st, modelString, modelExternalNodes);
  this.noDiagonal = true;
  $setSize_1(this, (f & 2) != 0?1:2);
}

defineClass(297, 133, $intern_57, ComparatorElm, ComparatorElm_0);
_.draw = function draw_13(g){
  $setBbox_0(this, this.point1, this.point2, this.opheight * 2);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  $setPowerColor_0(this, g);
  drawThickPolygon(this.triangle.npoints);
  $setFont(g, this.plusFont);
  $drawCenteredText(this, g, this.textp[0].x_0, this.textp[0].y_0 - 2, true);
  $drawCenteredText(this, g, this.textp[1].x_0, this.textp[1].y_0, true);
  $drawCenteredText(this, g, this.textp[2].x_0, this.textp[2].y_0, true);
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(-$getCurrentIntoNode(this, 2), this.curcount_0);
  $drawDots(g, this.point2, this.lead2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType_0 = function getDumpType_16(){
  return 401;
}
;
_.getInfo = function getInfo_12(arr){
  arr[0] = 'Comparator';
  arr[1] = 'V+ = ' + myGetUnitText(this.volts[1], 'V', false);
  arr[2] = 'V- = ' + myGetUnitText(this.volts[0], 'V', false);
}
;
_.setPoints = function setPoints_11(){
  var hs, tris, ww;
  $setPoints(this);
  this.dn > 150 && this == sim.dragElm && $setSize_1(this, 2);
  ww = this.opwidth;
  ww > this.dn / 2 && (ww = round_int(this.dn / 2));
  $calcLeads(this, ww * 2);
  hs = this.opheight * this.dsign;
  this.in1p = $newPointArray(2);
  this.in2p = $newPointArray(2);
  this.textp = $newPointArray(3);
  $interpPoint2(this.point1, this.point2, this.in1p[0], this.in2p[0], 0, hs);
  $interpPoint2(this.lead1, this.lead2, this.in1p[1], this.in2p[1], 0, hs);
  $interpPoint2(this.lead1, this.lead2, this.textp[0], this.textp[1], 0.2, hs);
  $interpPoint_2(this.lead1, this.lead2, this.textp[2], 0.5, 0);
  tris = $newPointArray(2);
  $interpPoint2(this.lead1, this.lead2, tris[0], tris[1], 0, hs * 2);
  this.triangle = $createPolygon(tris[0], tris[1], this.lead2);
  this.plusFont = new Font(this.opsize == 2?14:10);
  $setPost(this, 0, this.in1p[0]);
  $setPost(this, 1, this.in2p[0]);
  $setPost(this, 2, this.point2);
}
;
_.opheight = 0;
_.opsize = 0;
_.opwidth = 0;
var modelExternalNodes, modelString = 'OpAmpElm 1 2 3\rAnalogSwitchElm 4 5 3\rGroundElm 5';
var Lcom_lushprojects_circuitjs1_client_ComparatorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ComparatorElm', 297);
function $getPostCount(this$static){
  if ((this$static.flags & 2) != 0)
    return this$static.bits + 3;
  return this$static.bits + 2;
}

function CounterElm(xx, yy){
  ChipElm.call(this, xx, yy);
  this.invertreset = false;
}

function CounterElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  this.invertreset = false;
  $hasMoreTokens(st)?(this.invertreset = $booleanValue(($clinit_Boolean() , $equalsIgnoreCase('true', $nextToken(st))))):(this.invertreset = true);
  this.pins[1].bubble = this.invertreset;
}

defineClass(275, 18, $intern_57, CounterElm, CounterElm_0);
_.getChipName = function getChipName_5(){
  return 'Counter';
}
;
_.getDumpType = function getDumpType_17(){
  return 164;
}
;
_.getEditInfo = function getEditInfo_11(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Flip X', (this.flags & 1024) != 0);
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Flip Y', (this.flags & $intern_28) != 0);
    return ei;
  }
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Invert reset pin', this.invertreset);
    return ei;
  }
  return null;
}
;
_.getPostCount = function getPostCount_13(){
  return $getPostCount(this);
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_10(){
  return this.bits;
}
;
_.needsBits = function needsBits_1(){
  return true;
}
;
_.setEditValue = function setEditValue_10(n, ei){
  if (n == 0) {
    $getState(ei.checkbox)?(this.flags |= 1024):(this.flags &= -1025);
    $setPoints_0(this);
  }
  if (n == 1) {
    $getState(ei.checkbox)?(this.flags |= $intern_28):(this.flags &= -2049);
    $setPoints_0(this);
  }
  if (n == 2) {
    if ($getState(ei.checkbox)) {
      this.invertreset = true;
      this.pins[1].bubble = true;
    }
     else {
      this.invertreset = false;
      this.pins[1].bubble = false;
    }
    $setPoints_0(this);
  }
}
;
_.setupPins = function setupPins_4(){
  var i, ii;
  this.sizeX = 2;
  this.sizeY = this.bits > 2?this.bits:2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, $getPostCount(this), 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, '');
  this.pins[0].clock = true;
  this.pins[1] = new ChipElm$Pin(this, this.sizeY - 1, 2, 'R');
  this.pins[1].bubble = this.invertreset;
  for (i = 0; i != this.bits; i++) {
    ii = i + 2;
    this.pins[ii] = new ChipElm$Pin(this, i, 3, 'Q' + (this.bits - i - 1));
    this.pins[ii].output = this.pins[ii].state = true;
  }
  (this.flags & 2) != 0 && (this.pins[this.bits + 2] = new ChipElm$Pin(this, this.sizeY - 2, 2, 'En'));
  $allocNodes(this);
}
;
_.invertreset = false;
var Lcom_lushprojects_circuitjs1_client_CounterElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CounterElm', 275);
function $setPoints_4(this$static){
  var p2;
  $setPoints(this$static);
  $calcLeads(this$static, 26);
  $interpPoint(this$static.lead1, this$static.lead2, 0.25);
  $interpPoint(this$static.lead1, this$static.lead2, 0.6);
  this$static.center = $interpPoint(this$static.lead1, this$static.lead2, 0.5);
  p2 = $interpPoint(this$static.lead1, this$static.lead2, 0.75);
  this$static.arrow = $calcArrow(this$static.center, p2, 4, 4);
}

function CurrentElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.currentValue = $intern_26;
}

function CurrentElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  try {
    this.currentValue = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 11)) {
      this.currentValue = $intern_26;
    }
     else 
      throw toJs($e0);
  }
}

defineClass(170, 4, $intern_57, CurrentElm, CurrentElm_0);
_.draw = function draw_14(g){
  var s;
  $draw2Leads(this, g);
  $setVoltageColor(this, g, (this.volts[0] + this.volts[1]) / 2);
  $setPowerColor_0(this, g);
  drawThickCircle();
  drawThickLine_0();
  $fillPolygon(this.arrow);
  $setBbox_0(this, this.point1, this.point2, 12);
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  if (sim.showValuesCheckItem.on) {
    s = myGetUnitText(this.currentValue, 'A', true);
    (this.dx == 0 || this.dy == 0) && $drawValues(this, g, s, 12);
  }
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_18(){
  return 105;
}
;
_.getEditInfo = function getEditInfo_12(n){
  if (n == 0)
    return new EditInfo('Current (A)', this.currentValue, 0, 0.1);
  return null;
}
;
_.getInfo = function getInfo_13(arr){
  arr[0] = 'current source';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[1] - this.volts[0]), 'V', false);
}
;
_.getVoltageDiff = function getVoltageDiff_5(){
  return this.volts[1] - this.volts[0];
}
;
_.setEditValue = function setEditValue_11(n, ei){
  this.currentValue = ei.value_0;
}
;
_.setPoints = function setPoints_12(){
  $setPoints_4(this);
}
;
_.currentValue = 0;
var Lcom_lushprojects_circuitjs1_client_CurrentElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CurrentElm', 170);
function $fixPinName(p){
  if ($startsWith(p.text_0, '/')) {
    p.text_0 = p.text_0.substr(1);
    p.lineOver = true;
  }
  if ($compareTo(p.text_0.toLowerCase(), 'clk'.toLowerCase()) == 0) {
    p.text_0 = '';
    p.clock = true;
  }
}

function $setupPins_1(this$static){
  var i;
  if (this$static.modelName == null) {
    this$static.postCount = this$static.bits;
    $allocNodes(this$static);
    return;
  }
  this$static.model = getModelWithName(this$static.modelName);
  this$static.inputCount = this$static.model.inputs.length;
  this$static.outputCount = this$static.model.outputs.length;
  this$static.sizeY = this$static.inputCount > this$static.outputCount?this$static.inputCount:this$static.outputCount;
  this$static.sizeY == 0 && (this$static.sizeY = 1);
  this$static.sizeX = 2;
  this$static.postCount = this$static.inputCount + this$static.outputCount;
  this$static.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, this$static.postCount, 0, 1);
  for (i = 0; i != this$static.inputCount; i++) {
    this$static.pins[i] = new ChipElm$Pin(this$static, i, 2, this$static.model.inputs[i]);
    $fixPinName(this$static.pins[i]);
  }
  for (i = 0; i != this$static.outputCount; i++) {
    this$static.pins[i + this$static.inputCount] = new ChipElm$Pin(this$static, i, 3, this$static.model.outputs[i]);
    this$static.pins[i + this$static.inputCount].output = true;
    $fixPinName(this$static.pins[i + this$static.inputCount]);
  }
}

function CustomLogicElm(xx, yy){
  ChipElm.call(this, xx, yy);
  this.modelName = lastModelName;
  $setupPins_1(this);
}

function CustomLogicElm_0(xa, ya, xb, yb, f, st){
  var i;
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  this.modelName = $nextToken(st);
  this.model = getModelWithNameOrCopy(this.modelName, this.model);
  $setupPins_1(this);
  $allocNodes(this);
  $setPoints_0(this);
  for (i = 0; i != this.postCount; i++) {
    if (this.pins[i].output) {
      this.volts[i] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
      this.pins[i].value_0 = this.volts[i] > 2.5;
    }
  }
}

defineClass(289, 18, $intern_57, CustomLogicElm, CustomLogicElm_0);
_.getDumpType = function getDumpType_19(){
  return 208;
}
;
_.getEditInfo = function getEditInfo_13(n){
  var ei;
  if (n == 2) {
    ei = new EditInfo('Model Name', 0, -1, -1);
    ei.text_0 = this.modelName;
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.button_0 = new Button('Edit Model');
    return ei;
  }
  return $getEditInfo_0(this, n);
}
;
_.getInfo = function getInfo_14(arr){
  $getInfo(this, arr);
  arr[0] = this.model.infoText;
}
;
_.getPostCount = function getPostCount_14(){
  return this.postCount;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_11(){
  return this.outputCount;
}
;
_.setEditValue = function setEditValue_12(n, ei){
  var editDialog;
  if (n == 2) {
    this.modelName = lastModelName = $getText(ei.textf);
    this.model = getModelWithNameOrCopy(this.modelName, this.model);
    $setupPins_1(this);
    $allocNodes(this);
    $setPoints_0(this);
    return;
  }
  if (n == 3) {
    editDialog = new EditDialog(this.model, sim);
    customLogicEditDialog = editDialog;
    !editDialog.resizeHandlerRegistration && (editDialog.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(editDialog)));
    $show(editDialog);
    return;
  }
  $setEditValue(this, n, ei);
}
;
_.setupPins = function setupPins_5(){
  $setupPins_1(this);
}
;
_.inputCount = 0;
_.outputCount = 0;
_.postCount = 0;
var lastModelName = 'default';
var Lcom_lushprojects_circuitjs1_client_CustomLogicElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CustomLogicElm', 289);
function $arrayToList(arr){
  var i, x_0;
  if (arr == null)
    return '';
  if (arr.length == 0)
    return '';
  x_0 = arr[0];
  for (i = 1; i < arr.length; i++)
    x_0 += ',' + arr[i];
  return x_0;
}

function $parseRules(this$static){
  var i, j, lines, newRl, rl, s, s0, used, x_0;
  lines = $split_0(this$static.rules_0, '\n');
  this$static.rulesLeft = new Vector;
  this$static.rulesRight = new Vector;
  for (i = 0; i != lines.length; i++) {
    s = lines[i].toLowerCase();
    if (s.length == 0 || $equals_1(s.substr(0, 1), '#'))
      continue;
    s0 = $split_0($replaceAll(s, ' ', ''), '=');
    if (s0.length != 2) {
      $wnd.alert('Error on line ' + (i + 1) + ' of model description');
      return;
    }
    if (s0[0].length < this$static.inputs.length) {
      alert_0('Model must have >= ' + this$static.inputs.length + ' digits on left side');
      return;
    }
    if (s0[0].length > this$static.inputs.length + this$static.outputs.length) {
      alert_0('Model must have <= ' + (this$static.inputs.length + this$static.outputs.length) + ' digits on left side');
      return;
    }
    if (s0[1].length != this$static.outputs.length) {
      alert_0('Model must have ' + this$static.outputs.length + ' digits on right side');
      return;
    }
    rl = s0[0];
    used = initUnidimensionalArray(Z_classLit, $intern_17, 13, 26, 16, 1);
    newRl = '';
    for (j = 0; j != rl.length; j++) {
      x_0 = (checkCriticalStringElementIndex(j, rl.length) , rl.charCodeAt(j));
      if (x_0 == 63 || x_0 == 43 || x_0 == 45 || x_0 == 48 || x_0 == 49) {
        newRl += String.fromCharCode(x_0);
        continue;
      }
      if (x_0 < 97 || x_0 > 122) {
        $wnd.alert('Error on line ' + (i + 1) + ' of model description');
        return;
      }
      if (used[x_0 - 97]) {
        newRl += String.fromCharCode(x_0 + 65 - 97 & $intern_19);
        continue;
      }
      used[x_0 - 97] = true;
      newRl += String.fromCharCode(x_0);
    }
    $add_9(this$static.rulesLeft, newRl);
    $add_9(this$static.rulesRight, s0[1]);
  }
}

function CustomLogicModel(){
  this.inputs = $split_0('A,B', ',');
  this.outputs = $split_0('C,D', ',');
  this.rulesLeft = new Vector;
  this.rulesRight = new Vector;
  this.rules_0 = '';
}

function CustomLogicModel_0(copy){
  this.flags = copy.flags;
  this.inputs = copy.inputs;
  this.outputs = copy.outputs;
  this.infoText = copy.infoText;
  this.rules_0 = copy.rules_0;
  this.rulesLeft = copy.rulesLeft;
  this.rulesRight = copy.rulesRight;
}

function CustomLogicModel_1(st){
  this.name_0 = unescape_0($nextToken(st));
  this.flags = (new Integer_0($nextToken(st))).value_0;
  this.inputs = $split_0(unescape_0($nextToken(st)), ',');
  this.outputs = $split_0(unescape_0($nextToken(st)), ',');
  this.infoText = unescape_0($nextToken(st));
  this.rules_0 = unescape_0($nextToken(st));
  $parseRules(this);
  $putStringValue(modelMap, this.name_0, this);
}

function clearDumpedFlags(){
  var it, pair;
  if (!modelMap)
    return;
  it = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(modelMap)).this$01);
  while (it.hasNext) {
    pair = $next_1(it);
    castTo(pair.getValue(), 123).dumped = false;
  }
}

function getModelWithName(name_0){
  var lm;
  !modelMap && (modelMap = new HashMap);
  lm = castTo($getStringValue(modelMap, name_0), 123);
  if (lm)
    return lm;
  lm = new CustomLogicModel;
  lm.name_0 = name_0;
  lm.infoText = $equals_1(name_0, 'default')?'custom logic':name_0;
  $putStringValue(modelMap, name_0, lm);
  return lm;
}

function getModelWithNameOrCopy(name_0, oldmodel){
  var lm;
  !modelMap && (modelMap = new HashMap);
  lm = castTo($getStringValue(modelMap, name_0), 123);
  if (lm)
    return lm;
  lm = new CustomLogicModel_0(oldmodel);
  lm.name_0 = name_0;
  lm.infoText = name_0;
  $putStringValue(modelMap, name_0, lm);
  return lm;
}

function unescape_0(s){
  var c, i;
  if ($equals_1(s, '\\0'))
    return '';
  for (i = 0; i < s.length; i++) {
    checkCriticalStringElementIndex(i, s.length);
    if (s.charCodeAt(i) == 92) {
      c = (checkCriticalStringElementIndex(i + 1, s.length) , s.charCodeAt(i + 1));
      c == 110?(s = s.substr(0, i) + '\n' + s.substr(i + 2)):c == 115?(s = s.substr(0, i) + ' ' + s.substr(i + 2)):c == 112?(s = s.substr(0, i) + '+' + s.substr(i + 2)):c == 113?(s = s.substr(0, i) + '=' + s.substr(i + 2)):c == 104?(s = s.substr(0, i) + '#' + s.substr(i + 2)):c == 97?(s = s.substr(0, i) + '&' + s.substr(i + 2)):(s = s.substr(0, i) + ('' + s.substr(i + 1)));
    }
  }
  return s;
}

defineClass(123, 1, {123:1, 8:1}, CustomLogicModel, CustomLogicModel_0, CustomLogicModel_1);
_.getEditInfo = function getEditInfo_14(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('Inputs', 0, -1, -1);
    ei.text_0 = $arrayToList(this.inputs);
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('Outputs', 0, -1, -1);
    ei.text_0 = $arrayToList(this.outputs);
    return ei;
  }
  if (n == 2) {
    ei = new EditInfo('Info Text', 0, -1, -1);
    ei.text_0 = this.infoText;
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('<a href="customlogic.html" target="_blank">Definition<\/a>', 0, -1, -1);
    ei.textArea = new TextArea_0;
    ei.textArea.element.rows = 5;
    $setText_2(ei.textArea, this.rules_0);
    return ei;
  }
  return null;
}
;
_.setEditValue = function setEditValue_13(n, ei){
  n == 0 && (this.inputs = $split_0($getText(ei.textf), ','));
  n == 1 && (this.outputs = $split_0($getText(ei.textf), ','));
  n == 2 && (this.infoText = $getText(ei.textf));
  if (n == 3) {
    this.rules_0 = $getText(ei.textArea);
    $parseRules(this);
  }
  n == 4 && ($getState(ei.checkbox)?(this.flags |= FLAG_SCHMITT):(this.flags &= ~FLAG_SCHMITT));
  $updateModels();
}
;
_.dumped = false;
_.flags = 0;
var FLAG_SCHMITT = 1, modelMap;
var Lcom_lushprojects_circuitjs1_client_CustomLogicModel_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'CustomLogicModel', 123);
function DACElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function DACElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(277, 18, $intern_57, DACElm, DACElm_0);
_.getChipName = function getChipName_6(){
  return 'DAC';
}
;
_.getDumpType = function getDumpType_20(){
  return 166;
}
;
_.getPostCount = function getPostCount_15(){
  return this.bits + 2;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_12(){
  return 1;
}
;
_.needsBits = function needsBits_2(){
  return true;
}
;
_.setupPins = function setupPins_6(){
  var i;
  this.sizeX = 2;
  this.sizeY = this.bits > 2?this.bits:2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, this.bits + 2, 0, 1);
  for (i = 0; i != this.bits; i++)
    this.pins[i] = new ChipElm$Pin(this, this.bits - 1 - i, 2, 'D' + i);
  this.pins[this.bits] = new ChipElm$Pin(this, 0, 3, 'O');
  this.pins[this.bits].output = true;
  this.pins[this.bits + 1] = new ChipElm$Pin(this, this.sizeY - 1, 3, 'V+');
  $allocNodes(this);
}
;
var Lcom_lushprojects_circuitjs1_client_DACElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DACElm', 277);
function DCVoltageElm(xx, yy){
  VoltageElm.call(this, xx, yy, 0);
}

defineClass(533, 48, $intern_60, DCVoltageElm);
_.getShortcut = function getShortcut_7(){
  return 118;
}
;
var Lcom_lushprojects_circuitjs1_client_DCVoltageElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DCVoltageElm', 533);
function $setupPins_2(this$static){
  this$static.sizeX = 2;
  this$static.sizeY = 3;
  this$static.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 4 + ((this$static.flags & 2) != 0 || (this$static.flags & 4) != 0?1:0) + ((this$static.flags & 4) != 0?1:0), 0, 1);
  this$static.pins[0] = new ChipElm$Pin(this$static, 0, 2, 'D');
  this$static.pins[1] = new ChipElm$Pin(this$static, 0, 3, 'Q');
  this$static.pins[1].output = this$static.pins[1].state = true;
  this$static.pins[2] = new ChipElm$Pin(this$static, (this$static.flags & 4) != 0?1:2, 3, 'Q');
  this$static.pins[2].output = true;
  this$static.pins[2].lineOver = true;
  this$static.pins[3] = new ChipElm$Pin(this$static, 1, 2, '');
  this$static.pins[3].clock = true;
  if ((this$static.flags & 4) != 0) {
    this$static.pins[5] = new ChipElm$Pin(this$static, 2, 2, 'S');
    this$static.pins[4] = new ChipElm$Pin(this$static, 2, 3, 'R');
  }
   else {
    ((this$static.flags & 2) != 0 || (this$static.flags & 4) != 0) && (this$static.pins[4] = new ChipElm$Pin(this$static, 2, 2, 'R'));
  }
}

function DFlipFlopElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function DFlipFlopElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  this.pins[2].value_0 = !this.pins[1].value_0;
}

defineClass(267, 18, $intern_57, DFlipFlopElm, DFlipFlopElm_0);
_.getChipName = function getChipName_7(){
  return 'D flip-flop';
}
;
_.getDumpType = function getDumpType_21(){
  return 155;
}
;
_.getEditInfo = function getEditInfo_15(n){
  var ei;
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Reset Pin', (this.flags & 2) != 0 || (this.flags & 4) != 0);
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Set Pin', (this.flags & 4) != 0);
    return ei;
  }
  return $getEditInfo_0(this, n);
}
;
_.getPostCount = function getPostCount_16(){
  return 4 + ((this.flags & 2) != 0 || (this.flags & 4) != 0?1:0) + ((this.flags & 4) != 0?1:0);
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_13(){
  return 2;
}
;
_.setEditValue = function setEditValue_14(n, ei){
  if (n == 2) {
    $getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3);
    $setupPins_2(this);
    $allocNodes(this);
    $setPoints_0(this);
  }
  if (n == 3) {
    $getState(ei.checkbox)?(this.flags |= 4):(this.flags &= -5);
    $setupPins_2(this);
    $allocNodes(this);
    $setPoints_0(this);
  }
  $setEditValue(this, n, ei);
}
;
_.setupPins = function setupPins_7(){
  $setupPins_2(this);
}
;
var Lcom_lushprojects_circuitjs1_client_DFlipFlopElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DFlipFlopElm', 267);
function $clinit_DarlingtonElm(){
  $clinit_DarlingtonElm = emptyMethod;
  modelExternalNodes_0 = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [0, 1, 2]);
}

function DarlingtonElm(xa, ya, xb, yb, f, st){
  $clinit_DarlingtonElm();
  CompositeElm.call(this, xa, ya, xb, yb, f, st, modelString_0, modelExternalNodes_0);
  this.pnp = (new Integer_0($nextToken(st))).value_0;
  this.noDiagonal = true;
}

function DarlingtonElm_0(xx, yy, pnpflag){
  CompositeElm_0.call(this, xx, yy, modelString_0, modelExternalNodes_0);
  this.pnp = pnpflag?-1:1;
  castTo($get_3(this.compElmList, 0), 116).pnp = this.pnp;
  castTo($get_3(this.compElmList, 1), 116).pnp = this.pnp;
  this.noDiagonal = true;
}

defineClass(207, 133, $intern_57, DarlingtonElm);
_.draw = function draw_15(g){
  $setBbox_0(this, this.point1, this.point2, 16);
  $setPowerColor_0(this, g);
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  drawThickLine_0();
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  $setColor(g, lightGrayColor);
  $fillPolygon(this.arrowPoly);
  $setVoltageColor(this, g, this.volts[0]);
  sim.powerCheckItem.on && $setColor(g, ($clinit_Color() , gray));
  drawThickLine_0();
  this.curcount_b = $updateDotCount($getCurrentIntoNode(this, 0), this.curcount_b);
  $drawDots(g, this.base, this.point1, this.curcount_b);
  this.curcount_c = $updateDotCount($getCurrentIntoNode(this, 1), this.curcount_c);
  $drawDots(g, this.coll[1], this.coll[0], this.curcount_c);
  this.curcount_e = $updateDotCount($getCurrentIntoNode(this, 2), this.curcount_e);
  $drawDots(g, this.emit[1], this.emit[0], this.curcount_e);
  $setVoltageColor(this, g, this.volts[0]);
  $setPowerColor_0(this, g);
  $fillPolygon(this.rectPoly);
  if ((this.iAmMouseElm || this.selected || sim.dragElm == this) && this.dy == 0) {
    $setColor(g, ($clinit_Color() , white));
    sign(this.dx);
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
  }
  $drawPosts(this, g);
}
;
_.getDumpType_0 = function getDumpType_22(){
  return 400;
}
;
_.getInfo = function getInfo_15(arr){
  var vbc, vbe, vce;
  arr[0] = LS('darlington pair') + ' (' + (this.pnp == -1?'PNP)':'NPN)');
  vbc = this.volts[0] - this.volts[1];
  vbe = this.volts[0] - this.volts[2];
  vce = this.volts[1] - this.volts[2];
  arr[1] = 'Ic = ' + myGetUnitText(-$getCurrentIntoNode(this, 1), 'A', false);
  arr[2] = 'Ib = ' + myGetUnitText(-$getCurrentIntoNode(this, 0), 'A', false);
  arr[3] = 'Vbe = ' + myGetUnitText(vbe, 'V', false);
  arr[4] = 'Vbc = ' + myGetUnitText(vbc, 'V', false);
  arr[5] = 'Vce = ' + myGetUnitText(vce, 'V', false);
}
;
_.setPoints = function setPoints_13(){
  var hs2, pt;
  $setPoints(this);
  hs2 = 16 * this.dsign * this.pnp;
  this.coll = $newPointArray(2);
  this.coll2 = $newPointArray(2);
  this.emit = $newPointArray(2);
  $interpPoint2(this.point1, this.point2, this.coll[0], this.emit[0], 1, hs2);
  this.coll2[0] = $interpPoint_0(this.point1, this.point2, 1, hs2 - 5 * this.dsign * this.pnp);
  this.rect = $newPointArray(4);
  $interpPoint2(this.point1, this.point2, this.rect[0], this.rect[1], 1 - 16 / this.dn, 16);
  $interpPoint2(this.point1, this.point2, this.rect[2], this.rect[3], 1 - 13 / this.dn, 16);
  $interpPoint2(this.point1, this.point2, this.coll[1], this.emit[1], 1 - 13 / this.dn, 6 * this.dsign * this.pnp);
  this.coll2[1] = $interpPoint_0(this.point1, this.point2, 1 - 13 / this.dn, this.dsign * this.pnp);
  this.base = new Point;
  $interpPoint_1(this.point1, this.point2, this.base, 1 - 16 / this.dn);
  this.rectPoly = $createPolygon_0(this.rect[0], this.rect[2], this.rect[3], this.rect[1]);
  if (this.pnp == 1)
    this.arrowPoly = $calcArrow(this.emit[1], this.emit[0], 8, 4);
  else {
    pt = $interpPoint_0(this.point1, this.point2, 1 - 11 / this.dn, -5 * this.dsign * this.pnp);
    this.arrowPoly = $calcArrow(this.emit[0], pt, 8, 4);
  }
  $setPost(this, 0, this.point1);
  $setPost(this, 1, this.coll[0]);
  $setPost(this, 2, this.emit[0]);
}
;
_.curcount_b = 0;
_.curcount_c = 0;
_.curcount_e = 0;
_.pnp = 0;
var modelExternalNodes_0, modelString_0 = 'NTransistorElm 0 1 3\rNTransistorElm 3 1 2';
var Lcom_lushprojects_circuitjs1_client_DarlingtonElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DarlingtonElm', 207);
function $setDataCount_0(this$static, ct){
  this$static.dataCount = ct;
  this$static.data_0 = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.dataCount, 15, 1);
  this$static.dataPtr = 0;
  this$static.dataFull = false;
}

function DataRecorderElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $setDataCount_0(this, 10240);
}

function DataRecorderElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $setDataCount_0(this, __parseAndValidateInt($nextToken(st)));
}

defineClass(290, 4, $intern_57, DataRecorderElm, DataRecorderElm_0);
_.draw = function draw_16(g){
  var f, selected;
  selected = this.iAmMouseElm || this.selected;
  f = new Font(14);
  $setFont(g, f);
  $setColor(g, selected?selectColor:whiteColor);
  $interpPoint_1(this.point1, this.point2, this.lead1, 1 - ((round_int(null.$_nullMethod().$_nullMethod()) / 2 | 0) + 8) / this.dn);
  $setBbox_0(this, this.point1, this.lead1, 0);
  $drawCenteredText(this, g, this.x2, this.y2, true);
  $setVoltageColor(this, g, this.volts[0]);
  selected && $setColor(g, selectColor);
  drawThickLine_0();
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_23(){
  return 210;
}
;
_.getEditInfo = function getEditInfo_16(n){
  var a, dataStr, date, dtf, ei, fname, i, url_0, datain, oldblob, blob, url_1;
  if (n == 0) {
    ei = $setDimensionless(new EditInfo('# of Data Points', this.dataCount, -1, -1));
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    dataStr = '# time step = ' + sim.timeStep + ' sec\n';
    if (this.dataFull) {
      for (i = 0; i != this.dataCount; i++)
        dataStr += this.data_0[(i + this.dataPtr) % this.dataCount] + '\n';
    }
     else {
      for (i = 0; i != this.dataPtr; i++)
        dataStr += this.data_0[i] + '\n';
    }
    url_0 = (datain = [''] , datain[0] = dataStr , oldblob = $doc.recorderBlob , oldblob && URL.revokeObjectURL(oldblob) , blob = new Blob(datain, {type:'text/plain'}) , url_1 = URL.createObjectURL(blob) , $doc.recorderBlob = url_1 , url_1);
    date = new Date_0;
    dtf = ($clinit_DateTimeFormat_0() , getFormat($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0))));
    fname = 'data-' + $format(dtf, date, null) + '.circuitjs.txt';
    a = new Anchor_0(fname, url_0);
    $setAttribute(a.element, 'Download', fname);
    ei.anchor = a;
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_16(arr){
  arr[0] = 'data export';
  arr[1] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
  arr[2] = (this.dataFull?this.dataCount:this.dataPtr) + '/' + this.dataCount;
}
;
_.getPostCount = function getPostCount_17(){
  return 1;
}
;
_.getVoltageDiff = function getVoltageDiff_6(){
  return this.volts[0];
}
;
_.setEditValue = function setEditValue_15(n, ei){
  n == 0 && ei.value_0 > 0 && $setDataCount_0(this, round_int(ei.value_0));
  if (n == 1)
    return;
}
;
_.setPoints = function setPoints_14(){
  $setPoints(this);
  this.lead1 = new Point;
}
;
_.dataCount = 0;
_.dataFull = false;
_.dataPtr = 0;
var Lcom_lushprojects_circuitjs1_client_DataRecorderElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DataRecorderElm', 290);
function DeMultiplexerElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function DeMultiplexerElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(271, 18, $intern_57, DeMultiplexerElm, DeMultiplexerElm_0);
_.getChipName = function getChipName_8(){
  return 'Demultiplexer';
}
;
_.getDumpType = function getDumpType_24(){
  return 185;
}
;
_.getPostCount = function getPostCount_18(){
  return 7;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_14(){
  return 4;
}
;
_.setupPins = function setupPins_8(){
  this.sizeX = 3;
  this.sizeY = 5;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 7, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 3, 'Q0');
  this.pins[0].output = true;
  this.pins[1] = new ChipElm$Pin(this, 1, 3, 'Q1');
  this.pins[1].output = true;
  this.pins[2] = new ChipElm$Pin(this, 2, 3, 'Q2');
  this.pins[2].output = true;
  this.pins[3] = new ChipElm$Pin(this, 3, 3, 'Q3');
  this.pins[3].output = true;
  this.pins[4] = new ChipElm$Pin(this, 0, 1, 'S0');
  this.pins[5] = new ChipElm$Pin(this, 1, 1, 'S1');
  this.pins[6] = new ChipElm$Pin(this, 0, 2, 'Q');
}
;
var Lcom_lushprojects_circuitjs1_client_DeMultiplexerElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DeMultiplexerElm', 271);
function DecadeElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function DecadeElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(178, 18, {4:1, 178:1, 8:1}, DecadeElm, DecadeElm_0);
_.getChipName = function getChipName_9(){
  return 'decade counter';
}
;
_.getDumpType = function getDumpType_25(){
  return 163;
}
;
_.getPostCount = function getPostCount_19(){
  return this.bits + 2;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_15(){
  return this.bits;
}
;
_.needsBits = function needsBits_3(){
  return true;
}
;
_.setupPins = function setupPins_9(){
  var i, ii;
  this.sizeX = this.bits > 2?this.bits:2;
  this.sizeY = 2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, this.bits + 2, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 1, 2, '');
  this.pins[0].clock = true;
  this.pins[1] = new ChipElm$Pin(this, this.sizeX - 1, 1, 'R');
  this.pins[1].bubble = true;
  for (i = 0; i != this.bits; i++) {
    ii = i + 2;
    this.pins[ii] = new ChipElm$Pin(this, i, 0, 'Q' + i);
    this.pins[ii].output = this.pins[ii].state = true;
  }
  $allocNodes(this);
}
;
var Lcom_lushprojects_circuitjs1_client_DecadeElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DecadeElm', 178);
function DiacElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.offresistance = $intern_54;
  this.onresistance = $intern_18;
  this.breakdown = $intern_18;
  this.holdcurrent = $intern_55;
  this.state = false;
}

function DiacElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.onresistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.offresistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.breakdown = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.holdcurrent = $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(260, 4, $intern_57, DiacElm, DiacElm_0);
_.calculateCurrent = function calculateCurrent_3(){
  var vd;
  vd = this.volts[0] - this.volts[1];
  this.state?(this.current_0 = vd / this.onresistance):(this.current_0 = vd / this.offresistance);
}
;
_.draw = function draw_17(g){
  $setBbox_0(this, this.point1, this.point2, 6);
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_26(){
  return 203;
}
;
_.getEditInfo = function getEditInfo_17(n){
  if (n == 0)
    return new EditInfo('On resistance (ohms)', this.onresistance, 0, 0);
  if (n == 1)
    return new EditInfo('Off resistance (ohms)', this.offresistance, 0, 0);
  if (n == 2)
    return new EditInfo('Breakdown voltage (volts)', this.breakdown, 0, 0);
  if (n == 3)
    return new EditInfo('Hold current (amps)', this.holdcurrent, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_17(arr){
  arr[0] = 'spark gap';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = this.state?'on':'off';
  arr[4] = 'Ron = ' + myGetUnitText(this.onresistance, ohmString, false);
  arr[5] = 'Roff = ' + myGetUnitText(this.offresistance, ohmString, false);
  arr[6] = 'Vbrkdn = ' + myGetUnitText(this.breakdown, 'V', false);
  arr[7] = 'Ihold = ' + myGetUnitText(this.holdcurrent, 'A', false);
}
;
_.setEditValue = function setEditValue_16(n, ei){
  ei.value_0 > 0 && n == 0 && (this.onresistance = ei.value_0);
  ei.value_0 > 0 && n == 1 && (this.offresistance = ei.value_0);
  ei.value_0 > 0 && n == 2 && (this.breakdown = ei.value_0);
  ei.value_0 > 0 && n == 3 && (this.holdcurrent = ei.value_0);
}
;
_.setPoints = function setPoints_15(){
  $setPoints(this);
  $calcLeads(this, 32);
  new Point;
  new Point;
}
;
_.breakdown = 0;
_.holdcurrent = 0;
_.offresistance = 0;
_.onresistance = 0;
_.state = false;
var Lcom_lushprojects_circuitjs1_client_DiacElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DiacElm', 260);
function $calculateCurrent(this$static, voltdiff){
  if (voltdiff >= 0 || this$static.zvoltage == 0)
    return this$static.leakage * ($wnd.Math.exp(voltdiff * $intern_68) - 1);
  return this$static.leakage * ($wnd.Math.exp(voltdiff * $intern_68) - $wnd.Math.exp((-voltdiff - this$static.zoffset) * $intern_69) - 1);
}

function $setup(this$static, fw, zv){
  this$static.fwdrop = fw;
  this$static.zvoltage = zv;
  this$static.leakage = 1 / ($wnd.Math.exp(this$static.fwdrop * $intern_68) - 1);
  0.05173 * $wnd.Math.log(0.05173 / ($wnd.Math.sqrt(2) * this$static.leakage));
  $intern_70 * $wnd.Math.log($intern_70 / ($wnd.Math.sqrt(2) * this$static.leakage));
  this$static.zvoltage == 0?(this$static.zoffset = 0):(this$static.zoffset = this$static.zvoltage - $wnd.Math.log(-(1 + -0.005 / this$static.leakage)) / $intern_69);
}

function Diode(){
}

defineClass(118, 1, {}, Diode);
_.fwdrop = 0;
_.leakage = 0;
_.zoffset = 0;
_.zvoltage = 0;
var Lcom_lushprojects_circuitjs1_client_Diode_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Diode', 118);
function $draw_0(this$static, g){
  var v1, v2;
  $setBbox_0(this$static, this$static.point1, this$static.point2, 8);
  v1 = this$static.volts[0];
  v2 = this$static.volts[1];
  $draw2Leads(this$static, g);
  $setPowerColor_0(this$static, g);
  $setColor(g, $getVoltageColor(this$static, g, v1));
  $fillPolygon(this$static.poly_0);
  $setColor(g, $getVoltageColor(this$static, g, v2));
  drawThickLine_0();
  this$static.curcount_0 = $updateDotCount(this$static.current_0, this$static.curcount_0);
  sim.dragElm != this$static && $drawDots(g, this$static.point1, this$static.point2, this$static.curcount_0);
  $drawPosts(this$static, g);
}

function $getEditInfo_2(this$static, n){
  if (n == 0)
    return new EditInfo('Fwd Voltage @ 1A', this$static.fwdrop, 10, $intern_18);
  return null;
}

function $getInfo_1(this$static, arr){
  arr[0] = 'diode';
  arr[1] = 'I = ' + myGetUnitText(this$static.current_0, 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText(this$static.volts[0] - this$static.volts[1], 'V', false);
  arr[3] = 'P = ' + myGetUnitText((this$static.volts[0] - this$static.volts[1]) * this$static.current_0, 'W', false);
  arr[4] = 'Vf = ' + myGetUnitText(this$static.fwdrop, 'V', false);
  arr[5] = 'P = ' + myGetUnitText((this$static.volts[0] - this$static.volts[1]) * this$static.current_0, 'W', false);
}

function $setPoints_5(this$static){
  var pa;
  $setPoints(this$static);
  $calcLeads(this$static, 16);
  this$static.cathode_0 = $newPointArray(2);
  pa = $newPointArray(2);
  $interpPoint2(this$static.lead1, this$static.lead2, pa[0], pa[1], 0, 8);
  $interpPoint2(this$static.lead1, this$static.lead2, this$static.cathode_0[0], this$static.cathode_0[1], 1, 8);
  this$static.poly_0 = $createPolygon(pa[0], pa[1], this$static.lead2);
}

function DiodeElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.diode = new Diode;
  this.fwdrop = 0.805904783;
  this.zvoltage = 0;
  $setup(this.diode, this.fwdrop, this.zvoltage);
}

function DiodeElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.diode = new Diode;
  this.fwdrop = 0.805904783;
  this.zvoltage = 0;
  if ((f & 1) > 0) {
    try {
      this.fwdrop = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (!instanceOf($e0, 11))
        throw toJs($e0);
    }
  }
  $setup(this.diode, this.fwdrop, this.zvoltage);
}

defineClass(131, 4, $intern_57, DiodeElm, DiodeElm_0);
_.calculateCurrent = function calculateCurrent_4(){
  this.current_0 = $calculateCurrent(this.diode, this.volts[0] - this.volts[1]);
}
;
_.draw = function draw_18(g){
  $draw_0(this, g);
}
;
_.getDumpType = function getDumpType_27(){
  return 100;
}
;
_.getEditInfo = function getEditInfo_18(n){
  return $getEditInfo_2(this, n);
}
;
_.getInfo = function getInfo_18(arr){
  $getInfo_1(this, arr);
}
;
_.getShortcut = function getShortcut_8(){
  return 100;
}
;
_.setEditValue = function setEditValue_17(n, ei){
  this.fwdrop = ei.value_0;
  $setup(this.diode, this.fwdrop, this.zvoltage);
}
;
_.setPoints = function setPoints_16(){
  $setPoints_5(this);
}
;
_.fwdrop = 0;
_.zvoltage = 0;
var Lcom_lushprojects_circuitjs1_client_DiodeElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'DiodeElm', 131);
function $apply(this$static){
  var d, ei, i;
  for (i = 0; i != this$static.einfocount; i++) {
    ei = this$static.einfos[i];
    if (!!ei.textf && ei.text_0 == null) {
      try {
        d = $parseUnits(this$static, ei);
        ei.value_0 = d;
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 11))
          throw toJs($e0);
      }
    }
    if (ei.button_0)
      continue;
    this$static.elm.setEditValue(i, ei);
  }
  this$static.cframe.analyzeFlag = true;
}

function $buildDialog(this$static){
  var ei, i, idx, l_0, name_0;
  for (i = 0;; i++) {
    this$static.einfos[i] = this$static.elm.getEditInfo(i);
    if (!this$static.einfos[i])
      break;
    ei = this$static.einfos[i];
    idx = $getWidgetIndex(this$static.vp, this$static.hp);
    name_0 = LS(ei.name_0);
    $startsWith(ei.name_0, '<')?$insert_2(this$static.vp, l_0 = new HTML_0(name_0), idx):$insert_2(this$static.vp, l_0 = new Label_0(name_0), idx);
    i != 0 && !!l_0 && (l_0.element.className = 'topSpace' , undefined);
    idx = $getWidgetIndex(this$static.vp, this$static.hp);
    if (ei.choice) {
      $insert_2(this$static.vp, ei.choice, idx);
      $addDomHandler(ei.choice, new EditDialog$4(this$static), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
    }
     else if (ei.checkbox) {
      $insert_2(this$static.vp, ei.checkbox, idx);
      $addValueChangeHandler_0(ei.checkbox, new EditDialog$5(this$static));
    }
     else if (ei.button_0) {
      $insert_2(this$static.vp, ei.button_0, idx);
      $addDomHandler(ei.button_0, new EditDialog$6(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
    }
     else if (ei.textArea) {
      $insert_2(this$static.vp, ei.textArea, idx);
    }
     else if (ei.anchor) {
      $insert_2(this$static.vp, ei.anchor, idx);
    }
     else {
      $insert_2(this$static.vp, ei.textf = new TextBox, idx);
      ei.text_0 != null && $setText_2(ei.textf, ei.text_0);
      ei.text_0 == null && $setText_2(ei.textf, $unitString(this$static, ei));
    }
  }
  this$static.einfocount = i;
}

function $clearDialog(this$static){
  while ($get(this$static.vp.children_0) != this$static.hp)
    $remove(this$static.vp);
}

function $diffFromInteger(x_0){
  return $wnd.Math.abs(x_0 - toDouble_0(fromDouble_0($wnd.Math.round(x_0))));
}

function $itemStateChanged(this$static, e){
  var changed, ei, i, src_0;
  src_0 = e.source;
  changed = false;
  for (i = 0; i != this$static.einfocount; i++) {
    ei = this$static.einfos[i];
    if (maskUndefined(ei.choice) === maskUndefined(src_0) || maskUndefined(ei.checkbox) === maskUndefined(src_0) || maskUndefined(ei.button_0) === maskUndefined(src_0)) {
      maskUndefined(ei.button_0) === maskUndefined(src_0) && $apply(this$static);
      this$static.elm.setEditValue(i, ei);
      ei.newDialog && (changed = true);
      this$static.cframe.analyzeFlag = true;
    }
  }
  if (changed) {
    $clearDialog(this$static);
    $buildDialog(this$static);
  }
}

function $parseUnits(this$static, ei){
  var len, mult, rmsMult, s, suffixlength, uc;
  s = $getText(ei.textf);
  s = $trim(s);
  rmsMult = 1;
  suffixlength = 'rms'.length;
  if ($equals_1(s.substr(s.length - suffixlength, suffixlength), 'rms')) {
    s = $trim($substring_0(s, 0, s.length - 3));
    rmsMult = $intern_71;
  }
  s = $replaceAll(s, '([0-9]+)([pPnNuUmMkKgG])([0-9]+)', '$1.$3$2');
  len = s.length;
  uc = (checkCriticalStringElementIndex(len - 1, s.length) , s.charCodeAt(len - 1));
  mult = 1;
  switch (uc) {
    case 112:
    case 80:
      mult = 1.0E-12;
      break;
    case 110:
    case 78:
      mult = $intern_51;
      break;
    case 117:
    case 85:
      mult = $intern_53;
      break;
    case 109:
      mult = ei.forceLargeM?$intern_56:$intern_55;
      break;
    case 107:
    case 75:
      mult = $intern_18;
      break;
    case 77:
      mult = $intern_56;
      break;
    case 71:
    case 103:
      mult = $intern_54;
  }
  mult != 1 && (s = $trim(s.substr(0, len - 1)));
  return $parse_0(this$static.noCommaFormat, s) * mult * rmsMult;
}

function $unitString(this$static, ei){
  if (!!this$static.elm && instanceOf(this$static.elm, 48) && $wnd.Math.abs(ei.value_0) > 1.0E-4 && $diffFromInteger(ei.value_0 * 10000) > $diffFromInteger(ei.value_0 * 10000 / $intern_71))
    return $unitString_0(this$static, ei, ei.value_0 / $intern_71) + 'rms';
  return $unitString_0(this$static, ei, ei.value_0);
}

function $unitString_0(this$static, ei, v){
  var va;
  va = $wnd.Math.abs(v);
  if (ei.dimensionless)
    return $format_0(this$static.noCommaFormat, v);
  if (v == 0)
    return '0';
  if (va < $intern_51)
    return $format_0(this$static.noCommaFormat, v * $intern_52) + 'p';
  if (va < $intern_53)
    return $format_0(this$static.noCommaFormat, v * $intern_54) + 'n';
  if (va < $intern_55)
    return $format_0(this$static.noCommaFormat, v * $intern_56) + 'u';
  if (va < 1 && !ei.forceLargeM)
    return $format_0(this$static.noCommaFormat, v * $intern_18) + 'm';
  if (va < $intern_18)
    return $format_0(this$static.noCommaFormat, v);
  if (va < $intern_56)
    return $format_0(this$static.noCommaFormat, v * $intern_55) + 'k';
  if (va < $intern_54)
    return $format_0(this$static.noCommaFormat, v * $intern_53) + 'M';
  return $format_0(this$static.noCommaFormat, v * $intern_51) + 'G';
}

function EditDialog(ce, f){
  DialogBox.call(this);
  $setText(this, LS('Edit Component'));
  this.cframe = f;
  this.elm = ce;
  this.vp = new VerticalPanel;
  $setWidget_1(this, this.vp);
  this.einfos = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_EditInfo_2_classLit, $intern_3, 7, 10, 0, 1);
  this.noCommaFormat = ($clinit_NumberFormat() , new NumberFormat_0('####.##########', $getDefaultNative()));
  this.hp = new HorizontalPanel;
  $setWidth(this.hp, '100%');
  $setHorizontalAlignment_0(this.hp, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  $setStyleName(this.hp, 'topSpace');
  $add_3(this.vp, this.hp);
  $add_1(this.hp, this.applyButton = new Button(LS('Apply')));
  $addDomHandler(this.applyButton, new EditDialog$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $add_1(this.hp, this.okButton = new Button(LS('OK')));
  $addDomHandler(this.okButton, new EditDialog$2(this), (null , TYPE_1));
  $setHorizontalAlignment_0(this.hp, ALIGN_RIGHT);
  $add_1(this.hp, this.cancelButton = new Button(LS('Cancel')));
  $addDomHandler(this.cancelButton, new EditDialog$3(this), (null , TYPE_1));
  $buildDialog(this);
  $center(this);
}

defineClass(229, 104, $intern_36, EditDialog);
_.einfocount = 0;
var Lcom_lushprojects_circuitjs1_client_EditDialog_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditDialog', 229);
function EditDialog$1(this$0){
  this.this$01 = this$0;
}

defineClass(368, 1, $intern_34, EditDialog$1);
_.onClick = function onClick_3(event_0){
  $apply(this.this$01);
}
;
var Lcom_lushprojects_circuitjs1_client_EditDialog$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditDialog/1', 368);
function EditDialog$2(this$0){
  this.this$01 = this$0;
}

defineClass(369, 1, $intern_34, EditDialog$2);
_.onClick = function onClick_4(event_0){
  $apply(this.this$01);
  $hide_0(this.this$01, false);
  editDialog_0 = null;
}
;
var Lcom_lushprojects_circuitjs1_client_EditDialog$2_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditDialog/2', 369);
function EditDialog$3(this$0){
  this.this$01 = this$0;
}

defineClass(370, 1, $intern_34, EditDialog$3);
_.onClick = function onClick_5(event_0){
  $hide_0(this.this$01, false);
  editDialog_0 = null;
}
;
var Lcom_lushprojects_circuitjs1_client_EditDialog$3_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditDialog/3', 370);
function EditDialog$4(this$0){
  this.this$01 = this$0;
}

defineClass(371, 1, {641:1, 29:1}, EditDialog$4);
_.onChange = function onChange(e){
  $itemStateChanged(this.this$01, e);
}
;
var Lcom_lushprojects_circuitjs1_client_EditDialog$4_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditDialog/4', 371);
function EditDialog$5(this$0){
  this.this$01 = this$0;
}

defineClass(372, 1, $intern_44, EditDialog$5);
_.onValueChange = function onValueChange_0(e){
  $itemStateChanged(this.this$01, e);
}
;
var Lcom_lushprojects_circuitjs1_client_EditDialog$5_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditDialog/5', 372);
function EditDialog$6(this$0){
  this.this$01 = this$0;
}

defineClass(373, 1, $intern_34, EditDialog$6);
_.onClick = function onClick_6(event_0){
  $itemStateChanged(this.this$01, event_0);
}
;
var Lcom_lushprojects_circuitjs1_client_EditDialog$6_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditDialog/6', 373);
function $setDimensionless(this$static){
  this$static.dimensionless = true;
  return this$static;
}

function EditInfo(n, val, mn, mx){
  this.name_0 = n;
  this.value_0 = val;
  if (mn == 0 && mx == 0 && val > 0) {
    this.minval = $intern_62;
    while (this.minval > val / 100)
      this.minval /= 10;
  }
   else {
    this.minval = mn;
  }
  this.forceLargeM = this.name_0.indexOf('(ohms)') > 0 || this.name_0.indexOf('(Hz)') > 0;
  this.dimensionless = false;
}

defineClass(7, 1, {7:1}, EditInfo);
_.dimensionless = false;
_.forceLargeM = false;
_.minval = 0;
_.newDialog = false;
_.value_0 = 0;
var Lcom_lushprojects_circuitjs1_client_EditInfo_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditInfo', 7);
function EditOptions(s){
  this.sim = s;
}

defineClass(561, 1, {8:1}, EditOptions);
_.getEditInfo = function getEditInfo_19(n){
  if (n == 0)
    return new EditInfo('Time step size (s)', this.sim.timeStep, 0, 0);
  if (n == 1)
    return new EditInfo('Range for voltage color (V)', voltageRange, 0, 0);
  return null;
}
;
_.setEditValue = function setEditValue_18(n, ei){
  if (n == 0 && ei.value_0 > 0) {
    this.sim.timeStep = ei.value_0;
    okToChangeTimeStep = false;
  }
  n == 1 && ei.value_0 > 0 && (voltageRange = ei.value_0);
}
;
var Lcom_lushprojects_circuitjs1_client_EditOptions_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'EditOptions', 561);
function ExportAsLocalFileDialog(data_0){
  var a, date, dtf, fname, okButton, url_0, datain, oldblob, blob, url_1;
  DialogBox.call(this);
  this.vp = new VerticalPanel;
  $setWidget_1(this, this.vp);
  $setText(this, LS('Export as Local File'));
  $add_3(this.vp, new Label_0(LS('Click on the link below to save your circuit')));
  url_0 = (datain = [''] , datain[0] = data_0 , oldblob = $doc.exportBlob , oldblob && URL.revokeObjectURL(oldblob) , blob = new Blob(datain, {type:'text/plain'}) , url_1 = URL.createObjectURL(blob) , $doc.exportBlob = url_1 , url_1);
  date = new Date_0;
  dtf = ($clinit_DateTimeFormat_0() , getFormat($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0))));
  fname = 'circuit-' + $format(dtf, date, null) + '.circuitjs.txt';
  a = new Anchor_0(fname, url_0);
  $setAttribute(a.element, 'Download', fname);
  $add_3(this.vp, a);
  $add_3(this.vp, okButton = new Button(LS('OK')));
  $addDomHandler(okButton, new ExportAsLocalFileDialog$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $center(this);
}

defineClass(430, 104, $intern_36, ExportAsLocalFileDialog);
var Lcom_lushprojects_circuitjs1_client_ExportAsLocalFileDialog_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsLocalFileDialog', 430);
function ExportAsLocalFileDialog$1(this$0){
  this.this$01 = this$0;
}

defineClass(431, 1, $intern_34, ExportAsLocalFileDialog$1);
_.onClick = function onClick_7(event_0){
  $hide_0(this.this$01, false);
}
;
var Lcom_lushprojects_circuitjs1_client_ExportAsLocalFileDialog$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsLocalFileDialog/1', 431);
function ExportAsTextDialog(asim, s){
  var hp, importButton, la2, okButton, ta;
  DialogBox.call(this);
  this.sim = asim;
  this.vp = new VerticalPanel;
  $setWidget_1(this, this.vp);
  $setText(this, LS('Export as Text'));
  $add_3(this.vp, new Label_0(LS('Text file for this circuit is...')));
  $add_3(this.vp, ta = new TextArea_0);
  ta.element.style['width'] = '300px';
  ta.element.style['height'] = '200px';
  ta.element['value'] = s;
  this.textArea = ta;
  $add_3(this.vp, la2 = new Label_1(LS('To save this file select it all (eg click in text and type control-A) and copy to your clipboard (eg control-C) before pasting to an empty text file (eg on Windows Notepad) and saving as a new file.')));
  la2.element.style['width'] = '300px';
  hp = new HorizontalPanel;
  hp.element.style['width'] = '100%';
  $setHorizontalAlignment_0(hp, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  hp.element.className = 'topSpace';
  $add_3(this.vp, hp);
  $add_1(hp, okButton = new Button(LS('OK')));
  $setHorizontalAlignment_0(hp, ALIGN_RIGHT);
  $add_1(hp, importButton = new Button(LS('Re-Import')));
  $addDomHandler(okButton, new ExportAsTextDialog$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addDomHandler(importButton, new ExportAsTextDialog$2(this), (null , TYPE_1));
  $center(this);
}

defineClass(551, 104, $intern_36, ExportAsTextDialog);
var Lcom_lushprojects_circuitjs1_client_ExportAsTextDialog_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsTextDialog', 551);
function ExportAsTextDialog$1(this$0){
  this.this$01 = this$0;
}

defineClass(552, 1, $intern_34, ExportAsTextDialog$1);
_.onClick = function onClick_8(event_0){
  $hide_0(this.this$01, false);
}
;
var Lcom_lushprojects_circuitjs1_client_ExportAsTextDialog$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsTextDialog/1', 552);
function ExportAsTextDialog$2(this$0){
  this.this$01 = this$0;
}

defineClass(553, 1, $intern_34, ExportAsTextDialog$2);
_.onClick = function onClick_9(event_0){
  var s;
  $pushUndo(this.this$01.sim);
  $hide_0(this.this$01, false);
  s = $getText(this.this$01.textArea);
  s != null && $readSetup(this.this$01.sim, s);
}
;
var Lcom_lushprojects_circuitjs1_client_ExportAsTextDialog$2_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsTextDialog/2', 553);
function ExportAsUrlDialog(dump_0){
  var hp, la1, la2, okButton, query, start_0, hex, number, regex, replace, regexp;
  DialogBox.call(this);
  start_0 = $split_0($wnd.location.href, '\\?');
  dump_0 = (hex = (number = 32 >>> 0 , number.toString(16)) , regex = '\\u' + $substring('0000', hex.length) + hex , replace = String.fromCharCode(43) , dump_0.replace(new RegExp(regex, 'g'), replace));
  query = (throwIfNull('decodedURL', dump_0) , '?cct=' + encodeURI(dump_0));
  dump_0 = start_0[0] + query;
  this.requrl = (throwIfNull('decodedURLComponent', query) , regexp = /%20/g , encodeURIComponent(query).replace(regexp, '+'));
  this.vp = new VerticalPanel;
  $setWidget_1(this, this.vp);
  $setText(this, LS('Export as URL'));
  $add_3(this.vp, new Label_0(LS('URL for this circuit is...')));
  if (dump_0.length > 2000) {
    $add_3(this.vp, la1 = new Label_1(LS('Warning: this URL is longer than 2000 characters and may not work in some browsers.')));
    la1.element.style['width'] = '300px';
  }
  $add_3(this.vp, tb = new RichTextArea);
  $setText_1(tb, dump_0);
  $add_3(this.vp, la2 = new Label_1(LS('To save this URL select it all (eg click in text and type control-A) and copy to your clipboard (eg control-C) before pasting to a suitable place.')));
  la2.element.style['width'] = '300px';
  hp = new HorizontalPanel;
  hp.element.style['width'] = '100%';
  hp.element.className = 'topSpace';
  $setHorizontalAlignment_0(hp, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  $add_1(hp, okButton = new Button(LS('OK')));
  $add_3(this.vp, hp);
  $setHorizontalAlignment_0(hp, ALIGN_RIGHT);
  $add_1(hp, this.shortButton = new Button(LS('Create short URL')));
  $addDomHandler(this.shortButton, new ExportAsUrlDialog$2(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addDomHandler(okButton, new ExportAsUrlDialog$3(this), (null , TYPE_1));
  $center(this);
}

function createShort(urlin){
  var requestBuilder, url_0;
  url_0 = 'shortrelay.php?v=' + urlin;
  $setText_1(tb, 'Waiting for short URL for web service...');
  requestBuilder = new RequestBuilder(($clinit_RequestBuilder() , GET), url_0);
  try {
    $sendRequest(requestBuilder, new ExportAsUrlDialog$1);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 95))
      throw toJs($e0);
  }
}

defineClass(547, 104, $intern_36, ExportAsUrlDialog);
var tb;
var Lcom_lushprojects_circuitjs1_client_ExportAsUrlDialog_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsUrlDialog', 547);
function ExportAsUrlDialog$1(){
}

defineClass(548, 1, {}, ExportAsUrlDialog$1);
_.onError = function onError_0(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_0(request, response){
  var statusCode, text_0;
  statusCode = response.xmlHttpRequest.status;
  if ((statusCode == 1223?204:statusCode) == 200) {
    text_0 = response.xmlHttpRequest.responseText;
    $setText_1(tb, text_0);
  }
   else {
    text_0 = 'Shortner error:' + response.xmlHttpRequest.statusText;
    $setText_1(tb, text_0);
  }
}
;
var Lcom_lushprojects_circuitjs1_client_ExportAsUrlDialog$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsUrlDialog/1', 548);
function ExportAsUrlDialog$2(this$0){
  this.this$01 = this$0;
}

defineClass(549, 1, $intern_34, ExportAsUrlDialog$2);
_.onClick = function onClick_10(event_0){
  $setVisible(this.this$01.shortButton);
  createShort(this.this$01.requrl);
}
;
var Lcom_lushprojects_circuitjs1_client_ExportAsUrlDialog$2_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsUrlDialog/2', 549);
function ExportAsUrlDialog$3(this$0){
  this.this$01 = this$0;
}

defineClass(550, 1, $intern_34, ExportAsUrlDialog$3);
_.onClick = function onClick_11(event_0){
  $hide_0(this.this$01, false);
}
;
var Lcom_lushprojects_circuitjs1_client_ExportAsUrlDialog$3_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExportAsUrlDialog/3', 550);
function Expr(){
}

function Expr_0(){
}

function Expr_1(e1, e2){
  this.children_0 = new Vector;
  $add_9(this.children_0, e1);
  !!e2 && $add_9(this.children_0, e2);
}

defineClass(54, 1, {}, Expr, Expr_0, Expr_1);
var Lcom_lushprojects_circuitjs1_client_Expr_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Expr', 54);
function $getToken(this$static){
  var c, i;
  while (this$static.pos < this$static.tlen && $charAt_0(this$static.text_0, this$static.pos) == 32)
    ++this$static.pos;
  if (this$static.pos == this$static.tlen) {
    this$static.token = '';
    return;
  }
  i = this$static.pos;
  c = $charAt_0(this$static.text_0, i);
  if (c >= 48 && c <= 57 || c == 46) {
    for (i = this$static.pos; i != this$static.tlen; i++) {
      if (!($charAt_0(this$static.text_0, i) >= 48 && $charAt_0(this$static.text_0, i) <= 57 || $charAt_0(this$static.text_0, i) == 46))
        break;
    }
  }
   else if (c >= 97 && c <= 122) {
    for (i = this$static.pos; i != this$static.tlen; i++) {
      if (!($charAt_0(this$static.text_0, i) >= 97 && $charAt_0(this$static.text_0, i) <= 122))
        break;
    }
  }
   else {
    ++i;
  }
  this$static.token = $substring_0(this$static.text_0, this$static.pos, i);
  this$static.pos = i;
}

function $parse_2(this$static){
  var e;
  e = $parseMult(this$static);
  while (true) {
    if ($skip(this$static, '+'))
      e = new Expr_1(e, $parseMult(this$static));
    else if ($skip(this$static, '-'))
      e = new Expr_1(e, $parseMult(this$static));
    else 
      break;
  }
  return e;
}

function $parseExpression(this$static){
  var e;
  if (this$static.token.length == 0)
    return new Expr_0;
  e = $parse_2(this$static);
  return e;
}

function $parseFunc(this$static){
  var e;
  !$skip(this$static, '(');
  e = $parse_2(this$static);
  !$skip(this$static, ')');
  return new Expr_1(e, null);
}

function $parseFuncMulti(this$static){
  var args, e, e1, enext;
  args = 1;
  !$skip(this$static, '(');
  e1 = $parse_2(this$static);
  e = new Expr_1(e1, null);
  while ($skip(this$static, ',')) {
    enext = $parse_2(this$static);
    $add_9(e.children_0, enext);
    ++args;
  }
  !$skip(this$static, ')');
  return e;
}

function $parseMult(this$static){
  var e;
  e = $parseUminus(this$static);
  while (true) {
    if ($skip(this$static, '*'))
      e = new Expr_1(e, $parseUminus(this$static));
    else if ($skip(this$static, '/'))
      e = new Expr_1(e, $parseUminus(this$static));
    else 
      break;
  }
  return e;
}

function $parsePow(this$static){
  var e;
  e = $parseTerm(this$static);
  while (true) {
    if ($skip(this$static, '^'))
      e = new Expr_1(e, $parseTerm(this$static));
    else 
      break;
  }
  return e;
}

function $parseTerm(this$static){
  var c, e;
  if ($skip(this$static, '(')) {
    e = $parse_2(this$static);
    !$skip(this$static, ')');
    return e;
  }
  if ($skip(this$static, 't'))
    return new Expr;
  if (this$static.token.length == 1) {
    c = $charAt_0(this$static.token, 0);
    if (c >= 97 && c <= 105) {
      $getToken(this$static);
      return new Expr;
    }
  }
  if ($skip(this$static, 'pi'))
    return new Expr_0;
  if ($skip(this$static, 'sin'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'cos'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'abs'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'exp'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'log'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'sqrt'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'tan'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'tri'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'saw'))
    return $parseFunc(this$static);
  if ($skip(this$static, 'min'))
    return $parseFuncMulti(this$static);
  if ($skip(this$static, 'max'))
    return $parseFuncMulti(this$static);
  if ($skip(this$static, 'pwl'))
    return $parseFuncMulti(this$static);
  if ($skip(this$static, 'mod'))
    return $parseFuncMulti(this$static);
  if ($skip(this$static, 'step'))
    return $parseFuncMulti(this$static);
  if ($skip(this$static, 'select'))
    return $parseFuncMulti(this$static);
  if ($skip(this$static, 'clamp'))
    return $parseFuncMulti(this$static);
  try {
    e = ($doubleValue(__parseAndValidateDouble(this$static.token)) , new Expr_0);
    $getToken(this$static);
    return e;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 11)) {
      console_0('unrecognized token: ' + this$static.token + '\n');
      return new Expr_0;
    }
     else 
      throw toJs($e0);
  }
}

function $parseUminus(this$static){
  $skip(this$static, '+');
  if ($skip(this$static, '-'))
    return new Expr_1($parsePow(this$static), null);
  return $parsePow(this$static);
}

function $skip(this$static, s){
  if ($compareTo(this$static.token, s) != 0)
    return false;
  $getToken(this$static);
  return true;
}

function ExprParser(s){
  this.text_0 = s.toLowerCase();
  this.tlen = this.text_0.length;
  this.pos = 0;
  $getToken(this);
}

defineClass(150, 1, {}, ExprParser);
_.pos = 0;
_.tlen = 0;
var Lcom_lushprojects_circuitjs1_client_ExprParser_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExprParser', 150);
function ExprState(){
  this.values = initUnidimensionalArray(D_classLit, $intern_48, 13, 9, 15, 1);
  this.values[4] = 2.718281828459045;
}

defineClass(182, 1, {}, ExprState);
var Lcom_lushprojects_circuitjs1_client_ExprState_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ExprState', 182);
function $$init_6(this$static){
  this$static.lasttime = 0;
  this$static.funcx = 0;
}

function $drawWaveform_1(this$static, g, center){
  var xc, yc;
  $setColor(g, this$static.iAmMouseElm || this$static.selected?selectColor:($clinit_Color() , gray));
  $setPowerColor_0(this$static, g);
  xc = center.x_0;
  yc = center.y_0;
  drawThickCircle();
  $adjustBbox(this$static, xc - 17, yc - 17, xc + 17, yc + 17);
}

function FMElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $$init_6(this);
  this.deviation = 200;
  this.maxVoltage = 5;
  this.carrierfreq = 800;
  this.signalfreq = 40;
  this.freqTimeZero = 0;
  this.curcount_0 = 0;
}

function FMElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $$init_6(this);
  this.carrierfreq = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.signalfreq = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.maxVoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.deviation = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  (this.flags & 2) != 0 && (this.flags &= -3);
  this.freqTimeZero = 0;
  this.curcount_0 = 0;
}

defineClass(253, 4, $intern_57, FMElm, FMElm_0);
_.draw = function draw_19(g){
  var f, deltaT, signalamplitude, w;
  $setBbox_0(this, this.point1, this.point2, 17);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  f = new Font(12);
  $setFont(g, f);
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:whiteColor);
  $setPowerColor_0(this, g);
  deltaT = sim.t - this.lasttime;
  this.lasttime = sim.t;
  signalamplitude = $wnd.Math.sin($intern_2 * (sim.t - this.freqTimeZero) * this.signalfreq);
  this.funcx += deltaT * (this.carrierfreq + signalamplitude * this.deviation);
  w = $intern_2 * this.funcx;
  $wnd.Math.sin(w) * this.maxVoltage;
  $drawCenteredText(this, g, this.x2, this.y2, true);
  $drawWaveform_1(this, g, this.point2);
  $drawPosts(this, g);
  this.curcount_0 = $updateDotCount(-this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.lead1, this.curcount_0);
}
;
_.getDumpType = function getDumpType_28(){
  return 201;
}
;
_.getEditInfo = function getEditInfo_20(n){
  if (n == 0)
    return new EditInfo('Max Voltage', this.maxVoltage, -20, 20);
  if (n == 1)
    return new EditInfo('Carrier Frequency (Hz)', this.carrierfreq, 4, 500);
  if (n == 2)
    return new EditInfo('Signal Frequency (Hz)', this.signalfreq, 4, 500);
  if (n == 3)
    return new EditInfo('Deviation (Hz)', this.deviation, 4, 500);
  return null;
}
;
_.getInfo = function getInfo_19(arr){
  arr[0] = 'FM Source';
  arr[1] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
  arr[2] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
  arr[3] = 'cf = ' + myGetUnitText(this.carrierfreq, 'Hz', false);
  arr[4] = 'sf = ' + myGetUnitText(this.signalfreq, 'Hz', false);
  arr[5] = 'dev =' + myGetUnitText(this.deviation, 'Hz', false);
  arr[6] = 'Vmax = ' + myGetUnitText(this.maxVoltage, 'V', false);
}
;
_.getPostCount = function getPostCount_20(){
  return 1;
}
;
_.getPower = function getPower_4(){
  return -this.volts[0] * this.current_0;
}
;
_.getVoltageDiff = function getVoltageDiff_7(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_16(){
  return 1;
}
;
_.setEditValue = function setEditValue_19(n, ei){
  n == 0 && (this.maxVoltage = ei.value_0);
  n == 1 && (this.carrierfreq = ei.value_0);
  n == 2 && (this.signalfreq = ei.value_0);
  n == 3 && (this.deviation = ei.value_0);
}
;
_.setPoints = function setPoints_17(){
  $setPoints(this);
  this.lead1 = $interpPoint(this.point1, this.point2, 1 - 17 / this.dn);
}
;
_.carrierfreq = 0;
_.deviation = 0;
_.freqTimeZero = 0;
_.funcx = 0;
_.lasttime = 0;
_.maxVoltage = 0;
_.signalfreq = 0;
var Lcom_lushprojects_circuitjs1_client_FMElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'FMElm', 253);
function Font(size_0){
  this.size_0 = size_0;
}

defineClass(52, 1, {}, Font);
_.size_0 = 0;
var Lcom_lushprojects_circuitjs1_client_Font_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Font', 52);
function FullAdderElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function FullAdderElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(286, 18, $intern_57, FullAdderElm, FullAdderElm_0);
_.getChipName = function getChipName_10(){
  return 'Full Adder';
}
;
_.getDumpType = function getDumpType_29(){
  return 196;
}
;
_.getPostCount = function getPostCount_21(){
  return 5;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_17(){
  return 2;
}
;
_.setupPins = function setupPins_10(){
  this.sizeX = 2;
  this.sizeY = 3;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 5, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 2, 3, 'S');
  this.pins[0].output = true;
  this.pins[1] = new ChipElm$Pin(this, 0, 3, 'C');
  this.pins[1].output = true;
  this.pins[2] = new ChipElm$Pin(this, 0, 2, 'A');
  this.pins[3] = new ChipElm$Pin(this, 1, 2, 'B');
  this.pins[4] = new ChipElm$Pin(this, 2, 2, 'Cin');
}
;
var Lcom_lushprojects_circuitjs1_client_FullAdderElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'FullAdderElm', 286);
function $drawLine(){
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
}

function $drawPolyline(n){
  var i;
  null.$_nullMethod();
  for (i = 0; i < n; i++) {
    i == 0?null.$_nullMethod():null.$_nullMethod();
  }
  null.$_nullMethod();
  null.$_nullMethod();
}

function $fillOval(){
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
}

function $fillPolygon(p){
  var i;
  null.$_nullMethod();
  for (i = 0; i < p.npoints; i++) {
    i == 0?null.$_nullMethod():null.$_nullMethod();
  }
  null.$_nullMethod();
  null.$_nullMethod();
}

function $setColor(this$static, color_0){
  var colorString;
  if (color_0) {
    colorString = $getHexValue(color_0);
    null.$_nullMethod(colorString);
    null.$_nullMethod(colorString);
  }
   else {
    $clinit_System();
  }
  this$static.lastColor = color_0;
}

function $setFont(this$static, f){
  if (f) {
    null.$_nullMethod();
    this$static.currentFontSize = f.size_0;
    this$static.currentFont = f;
  }
}

function Graphics(context){
  this.context = context;
}

function distanceSq(x1, y1, x2, y2){
  x2 -= x1;
  y2 -= y1;
  return x2 * x2 + y2 * y2;
}

function setLineDash(context, a, b){
  a == 0?context.setLineDash([]):context.setLineDash([a, b]);
}

defineClass(448, 1, {}, Graphics);
_.currentFont = null;
_.currentFontSize = 0;
var Lcom_lushprojects_circuitjs1_client_Graphics_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Graphics', 448);
function GroundElm(xx, yy){
  CircuitElm.call(this, xx, yy);
}

function GroundElm_0(xa, ya, xb, yb, f){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
}

defineClass(236, 4, $intern_57, GroundElm, GroundElm_0);
_.draw = function draw_20(g){
  var a, b, i;
  $setColor(g, $getVoltageColor(this, g, 0));
  drawThickLine_0();
  for (i = 0; i != 3; i++) {
    a = 10 - i * 4;
    b = i * 5;
    $interpPoint2(this.point1, this.point2, ps1, ps2, 1 + b / this.dn, a);
    drawThickLine_0();
  }
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $interpPoint_1(this.point1, this.point2, ps2, 1 + 11 / this.dn);
  $setBbox_0(this, this.point1, ps2, 11);
  $drawPosts(this, g);
}
;
_.getCurrentIntoNode = function getCurrentIntoNode_2(n){
  return -this.current_0;
}
;
_.getDumpType = function getDumpType_30(){
  return 103;
}
;
_.getInfo = function getInfo_20(arr){
  arr[0] = 'ground';
  arr[1] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
}
;
_.getPostCount = function getPostCount_22(){
  return 1;
}
;
_.getShortcut = function getShortcut_9(){
  return 103;
}
;
_.getVoltageDiff = function getVoltageDiff_8(){
  return 0;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_18(){
  return 1;
}
;
_.setCurrent = function setCurrent_4(x_0, c){
  this.current_0 = -c;
}
;
var Lcom_lushprojects_circuitjs1_client_GroundElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'GroundElm', 236);
function HalfAdderElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function HalfAdderElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(287, 18, $intern_57, HalfAdderElm, HalfAdderElm_0);
_.getChipName = function getChipName_11(){
  return 'Half Adder';
}
;
_.getDumpType = function getDumpType_31(){
  return 195;
}
;
_.getPostCount = function getPostCount_23(){
  return 4;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_19(){
  return 2;
}
;
_.setupPins = function setupPins_11(){
  this.sizeX = 2;
  this.sizeY = 2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 4, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 3, 'S');
  this.pins[0].output = true;
  this.pins[1] = new ChipElm$Pin(this, 1, 3, 'C');
  this.pins[1].output = true;
  this.pins[2] = new ChipElm$Pin(this, 0, 2, 'A');
  this.pins[3] = new ChipElm$Pin(this, 1, 2, 'B');
}
;
var Lcom_lushprojects_circuitjs1_client_HalfAdderElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'HalfAdderElm', 287);
function $doDropboxImport(){
  var options = {success:function(files){
    function reqListener(){
      var text_0 = xhr.responseText;
      $pushUndo(sim_0);
      $readSetup(sim_0, text_0);
    }

    try {
      if (files[0].bytes < 100000) {
        var xhr = new XMLHttpRequest;
        xhr.addEventListener('load', reqListener);
      }
      xhr.open('GET', files[0].link, false);
      xhr.send();
    }
     catch (err) {
    }
  }
  , linkType:'direct', multiselect:false};
  $wnd.Dropbox.choose(options);
}

function ImportFromDropbox(asim){
  sim_0 = asim;
  $doDropboxImport();
}

function isSupported(){
  try {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
      return false;
    return !!$wnd.Dropbox.isBrowserSupported();
  }
   catch (err) {
    return false;
  }
}

defineClass(573, 1, {}, ImportFromDropbox);
var sim_0;
var Lcom_lushprojects_circuitjs1_client_ImportFromDropbox_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromDropbox', 573);
function ImportFromDropboxDialog(csim){
  DialogBox.call(this);
  sim_1 = csim;
  this.vp = new VerticalPanel;
  $setWidget_1(this, this.vp);
  $setText(this, LS('Import from Dropbox'));
  if (isSupported()) {
    $add_3(this.vp, new Label_0(LS('To open a file in your dropbox account using the chooser click below.')));
    this.chooserButton = new Button(LS('Open Dropbox Chooser'));
    $add_3(this.vp, this.chooserButton);
    $addDomHandler(this.chooserButton, new ImportFromDropboxDialog$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
    this.la = new Label_0(LS('To open a shared Dropbox file from a Dropbox link paste the link below...'));
  }
   else {
    $add_3(this.vp, new Label_0("This site, or your browser doesn't support the Dropbox chooser so you can't pick a file from your dropbox account."));
    this.la = new Label_0('You can open a shared Dropbox file if you have a link. Paste the Dropbox link below...');
    $setStyleName(this.la, 'topSpace');
  }
  $add_3(this.vp, this.la);
  this.ta = new TextArea_0;
  $setWidth(this.ta, '300px');
  $setHeight(this.ta, '200px');
  $add_3(this.vp, this.ta);
  this.hp = new HorizontalPanel;
  $setWidth(this.hp, '100%');
  $add_3(this.vp, this.hp);
  $setHorizontalAlignment_0(this.hp, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  this.importButton = new Button(LS('Import From Dropbox Link'));
  $addDomHandler(this.importButton, new ImportFromDropboxDialog$2(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $add_1(this.hp, this.importButton);
  $setHorizontalAlignment_0(this.hp, ALIGN_RIGHT);
  this.cancelButton = new Button(LS('Cancel'));
  $add_1(this.hp, this.cancelButton);
  $addDomHandler(this.cancelButton, new ImportFromDropboxDialog$3(this), (null , TYPE_1));
  $center(this);
}

function doDropboxImport(link_0){
  function reqListener(){
    var text_0 = xhr.responseText;
    $pushUndo(sim_1);
    $readSetup(sim_1, text_0);
  }

  try {
    var xhr = new XMLHttpRequest;
    xhr.addEventListener('load', reqListener);
    xhr.open('GET', link_0, false);
    xhr.send();
  }
   catch (err) {
  }
}

function doImportDropboxLink(link_0, validateIsDropbox){
  if ((checkCriticalNotNull(validateIsDropbox) , validateIsDropbox) && link_0.indexOf('https://www.dropbox.com/') != 0) {
    $wnd.alert('Dropbox links must start https://www.dropbox.com/');
    return;
  }
  link_0 = $replace_0(link_0, 'www.dropbox.com', 'dl.dropboxusercontent.com');
  doDropboxImport(link_0);
}

defineClass(440, 104, $intern_36, ImportFromDropboxDialog);
var sim_1;
var Lcom_lushprojects_circuitjs1_client_ImportFromDropboxDialog_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromDropboxDialog', 440);
function ImportFromDropboxDialog$1(this$0){
  this.this$01 = this$0;
}

defineClass(441, 1, $intern_34, ImportFromDropboxDialog$1);
_.onClick = function onClick_12(event_0){
  $hide_0(this.this$01, false);
  new ImportFromDropbox(sim_1);
}
;
var Lcom_lushprojects_circuitjs1_client_ImportFromDropboxDialog$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromDropboxDialog/1', 441);
function ImportFromDropboxDialog$2(this$0){
  this.this$01 = this$0;
}

defineClass(442, 1, $intern_34, ImportFromDropboxDialog$2);
_.onClick = function onClick_13(event_0){
  $hide_0(this.this$01, false);
  doImportDropboxLink($getText(this.this$01.ta), ($clinit_Boolean() , true));
}
;
var Lcom_lushprojects_circuitjs1_client_ImportFromDropboxDialog$2_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromDropboxDialog/2', 442);
function ImportFromDropboxDialog$3(this$0){
  this.this$01 = this$0;
}

defineClass(443, 1, $intern_34, ImportFromDropboxDialog$3);
_.onClick = function onClick_14(event_0){
  $hide_0(this.this$01, false);
}
;
var Lcom_lushprojects_circuitjs1_client_ImportFromDropboxDialog$3_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromDropboxDialog/3', 443);
function ImportFromTextDialog(asim){
  var cancelButton, okButton;
  DialogBox.call(this);
  this.sim = asim;
  this.vp = new VerticalPanel;
  $setWidget_1(this, this.vp);
  $setText(this, LS('Import from Text'));
  $add_3(this.vp, new Label_0(LS('Paste the text file for your circuit here...')));
  $add_3(this.vp, this.textArea = new TextArea_0);
  $setWidth(this.textArea, '300px');
  $setHeight(this.textArea, '200px');
  this.hp = new HorizontalPanel;
  $add_3(this.vp, this.hp);
  $add_1(this.hp, okButton = new Button(LS('OK')));
  $addDomHandler(okButton, new ImportFromTextDialog$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $add_1(this.hp, cancelButton = new Button(LS('Cancel')));
  $addDomHandler(cancelButton, new ImportFromTextDialog$2(this), (null , TYPE_1));
  $center(this);
  !this.resizeHandlerRegistration && (this.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this)));
  $show(this);
}

defineClass(558, 104, $intern_36, ImportFromTextDialog);
var Lcom_lushprojects_circuitjs1_client_ImportFromTextDialog_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromTextDialog', 558);
function ImportFromTextDialog$1(this$0){
  this.this$01 = this$0;
}

defineClass(559, 1, $intern_34, ImportFromTextDialog$1);
_.onClick = function onClick_15(event_0){
  var s;
  $pushUndo(this.this$01.sim);
  $hide_0(this.this$01, false);
  s = $getText(this.this$01.textArea);
  s != null && $readSetup(this.this$01.sim, s);
}
;
var Lcom_lushprojects_circuitjs1_client_ImportFromTextDialog$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromTextDialog/1', 559);
function ImportFromTextDialog$2(this$0){
  this.this$01 = this$0;
}

defineClass(560, 1, $intern_34, ImportFromTextDialog$2);
_.onClick = function onClick_16(event_0){
  $hide_0(this.this$01, false);
}
;
var Lcom_lushprojects_circuitjs1_client_ImportFromTextDialog$2_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ImportFromTextDialog/2', 560);
function $calculateCurrent_0(this$static, voltdiff){
  this$static.compResistance > 0 && (this$static.current = voltdiff / this$static.compResistance + this$static.curSourceValue);
  return this$static.current;
}

function $setup_0(this$static, cr, f){
  this$static.current = cr;
  this$static.flags = f;
}

function Inductor(){
}

defineClass(180, 1, {}, Inductor);
_.compResistance = 0;
_.curSourceValue = 0;
_.current = 0;
_.flags = 0;
var Lcom_lushprojects_circuitjs1_client_Inductor_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Inductor', 180);
function InductorElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.ind = new Inductor;
  this.inductance = 1;
  $setup_0(this.ind, this.current_0, this.flags);
}

function InductorElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.ind = new Inductor;
  this.inductance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.current_0 = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  $setup_0(this.ind, this.current_0, this.flags);
}

defineClass(143, 4, {4:1, 8:1, 143:1}, InductorElm, InductorElm_0);
_.calculateCurrent = function calculateCurrent_5(){
  var voltdiff;
  voltdiff = this.volts[0] - this.volts[1];
  this.current_0 = $calculateCurrent_0(this.ind, voltdiff);
}
;
_.draw = function draw_21(g){
  var s, v1, v2;
  v1 = this.volts[0];
  v2 = this.volts[1];
  $setBbox_0(this, this.point1, this.point2, 8);
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  $drawCoil(this, g, this.lead1, this.lead2, v1, v2);
  if (sim.showValuesCheckItem.on) {
    s = myGetUnitText(this.inductance, 'H', true);
    $drawValues(this, g, s, 8);
  }
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_32(){
  return 108;
}
;
_.getEditInfo = function getEditInfo_21(n){
  var ei;
  if (n == 0)
    return new EditInfo('Inductance (H)', this.inductance, 0, 0);
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Trapezoidal Approximation', (this.ind.flags & 2) == 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_21(arr){
  arr[0] = 'inductor';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = 'L = ' + myGetUnitText(this.inductance, 'H', false);
  arr[4] = 'P = ' + myGetUnitText((this.volts[0] - this.volts[1]) * this.current_0, 'W', false);
}
;
_.getShortcut = function getShortcut_10(){
  return 76;
}
;
_.setEditValue = function setEditValue_20(n, ei){
  n == 0 && ei.value_0 > 0 && (this.inductance = ei.value_0);
  n == 1 && ($getState(ei.checkbox)?(this.flags &= -3):(this.flags |= 2));
  $setup_0(this.ind, this.current_0, this.flags);
}
;
_.setPoints = function setPoints_18(){
  $setPoints(this);
  $calcLeads(this, 32);
}
;
_.inductance = 0;
var Lcom_lushprojects_circuitjs1_client_InductorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'InductorElm', 143);
function InverterElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.noDiagonal = true;
  this.slewRate = 0.5;
  this.highVoltage = lastHighVoltage;
}

function InverterElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.noDiagonal = true;
  this.slewRate = 0.5;
  this.highVoltage = 5;
  try {
    this.slewRate = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.highVoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
}

defineClass(264, 4, $intern_57, InverterElm, InverterElm_0);
_.draw = function draw_22(g){
  $drawPosts(this, g);
  $draw2Leads(this, g);
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  drawThickPolygon(this.gatePoly.npoints);
  sim.euroGatesCheckItem.on && $drawCenteredText(this, g, this.center.x_0, this.center.y_0 - 6, true);
  drawThickCircle();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.lead2, this.point2, this.curcount_0);
}
;
_.getDumpType = function getDumpType_33(){
  return 73;
}
;
_.getEditInfo = function getEditInfo_22(n){
  if (n == 0)
    return new EditInfo('Slew Rate (V/ns)', this.slewRate, 0, 0);
  if (n == 1)
    return new EditInfo('High Voltage (V)', this.highVoltage, 1, 10);
  return null;
}
;
_.getInfo = function getInfo_22(arr){
  arr[0] = 'inverter';
  arr[1] = 'Vi = ' + myGetUnitText(this.volts[0], 'V', false);
  arr[2] = 'Vo = ' + myGetUnitText(this.volts[1], 'V', false);
}
;
_.getShortcut = function getShortcut_11(){
  return 49;
}
;
_.getVoltageDiff = function getVoltageDiff_9(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_20(){
  return 1;
}
;
_.setEditValue = function setEditValue_21(n, ei){
  n == 0 && (this.slewRate = ei.value_0);
  n == 1 && (this.highVoltage = lastHighVoltage = ei.value_0);
}
;
_.setPoints = function setPoints_19(){
  var l2, pts, triPoints, ww;
  $setPoints(this);
  ww = 16;
  16 > this.dn / 2 && (ww = round_int(this.dn / 2));
  this.lead1 = $interpPoint(this.point1, this.point2, 0.5 - ww / this.dn);
  this.lead2 = $interpPoint(this.point1, this.point2, 0.5 + (ww + 2) / this.dn);
  $interpPoint(this.point1, this.point2, 0.5 + (ww - 2) / this.dn);
  if (sim.euroGatesCheckItem.on) {
    pts = $newPointArray(4);
    l2 = $interpPoint(this.point1, this.point2, 0.5 + (ww - 5) / this.dn);
    $interpPoint2(this.lead1, l2, pts[0], pts[1], 0, 16);
    $interpPoint2(this.lead1, l2, pts[3], pts[2], 1, 16);
    this.gatePoly = $createPolygon_1(pts);
    this.center = $interpPoint(this.lead1, l2, 0.5);
  }
   else {
    triPoints = $newPointArray(3);
    $interpPoint2(this.lead1, this.lead2, triPoints[0], triPoints[1], 0, 16);
    triPoints[2] = $interpPoint(this.point1, this.point2, 0.5 + (ww - 5) / this.dn);
    this.gatePoly = $createPolygon_1(triPoints);
  }
  $setBbox_0(this, this.point1, this.point2, 16);
}
;
_.highVoltage = 0;
_.slewRate = 0;
var Lcom_lushprojects_circuitjs1_client_InverterElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'InverterElm', 264);
function $setPoints_6(this$static){
  var triPoints, ww;
  $setPoints(this$static);
  ww = 16;
  16 > this$static.dn / 2 && (ww = round_int(this$static.dn / 2));
  this$static.lead1 = $interpPoint(this$static.point1, this$static.point2, 0.5 - ww / this$static.dn);
  this$static.lead2 = $interpPoint(this$static.point1, this$static.point2, 0.5 + (ww + 2) / this$static.dn);
  $interpPoint(this$static.point1, this$static.point2, 0.5 + (ww - 2) / this$static.dn);
  triPoints = $newPointArray(3);
  $interpPoint2(this$static.lead1, this$static.lead2, triPoints[0], triPoints[1], 0, 16);
  triPoints[2] = $interpPoint(this$static.point1, this$static.point2, 0.5 + (ww - 5) / this$static.dn);
  this$static.gatePoly = $createPolygon_1(triPoints);
  this$static.symbolPoly = $getSchmittPolygon(this$static, 1, 0.30000001192092896);
  $setBbox_0(this$static, this$static.point1, this$static.point2, 16);
}

function InvertingSchmittElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.noDiagonal = true;
  this.slewRate = 0.5;
  this.lowerTrigger = 1.66;
  this.upperTrigger = 3.33;
}

function InvertingSchmittElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.noDiagonal = true;
  try {
    this.slewRate = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.lowerTrigger = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.upperTrigger = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 11)) {
      this.slewRate = 0.5;
      this.lowerTrigger = 1.66;
      this.upperTrigger = 3.33;
    }
     else 
      throw toJs($e0);
  }
}

defineClass(175, 4, $intern_57, InvertingSchmittElm, InvertingSchmittElm_0);
_.draw = function draw_23(g){
  $drawPosts(this, g);
  $draw2Leads(this, g);
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  drawThickPolygon(this.gatePoly.npoints);
  null.$_nullMethod();
  $drawPolyline(this.symbolPoly.npoints);
  null.$_nullMethod();
  drawThickCircle();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.lead2, this.point2, this.curcount_0);
}
;
_.getDumpType = function getDumpType_34(){
  return 183;
}
;
_.getEditInfo = function getEditInfo_23(n){
  if (n == 0) {
    this.dlt = this.lowerTrigger;
    return new EditInfo('Lower threshold (V)', this.lowerTrigger, $intern_26, 5);
  }
  if (n == 1) {
    this.dut = this.upperTrigger;
    return new EditInfo('Upper threshold (V)', this.upperTrigger, $intern_26, 5);
  }
  if (n == 2)
    return new EditInfo('Slew Rate (V/ns)', this.slewRate, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_23(arr){
  arr[0] = 'InvertingSchmitt';
  arr[1] = 'Vi = ' + myGetUnitText(this.volts[0], 'V', false);
  arr[2] = 'Vo = ' + myGetUnitText(this.volts[1], 'V', false);
}
;
_.getVoltageDiff = function getVoltageDiff_10(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_21(){
  return 1;
}
;
_.setEditValue = function setEditValue_22(n, ei){
  n == 0 && (this.dlt = ei.value_0);
  n == 1 && (this.dut = ei.value_0);
  n == 2 && (this.slewRate = ei.value_0);
  if (this.dlt > this.dut) {
    this.upperTrigger = this.dlt;
    this.lowerTrigger = this.dut;
  }
   else {
    this.upperTrigger = this.dut;
    this.lowerTrigger = this.dlt;
  }
}
;
_.setPoints = function setPoints_20(){
  $setPoints_6(this);
}
;
_.dlt = 0;
_.dut = 0;
_.lowerTrigger = 0;
_.slewRate = 0;
_.upperTrigger = 0;
var Lcom_lushprojects_circuitjs1_client_InvertingSchmittElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'InvertingSchmittElm', 175);
function $setupPins_3(this$static){
  this$static.sizeX = 2;
  this$static.sizeY = 3;
  this$static.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 5 + ((this$static.flags & 2) != 0?1:0), 0, 1);
  this$static.pins[0] = new ChipElm$Pin(this$static, 0, 2, 'J');
  this$static.pins[1] = new ChipElm$Pin(this$static, 1, 2, '');
  this$static.pins[1].clock = true;
  this$static.pins[1].bubble = true;
  this$static.pins[2] = new ChipElm$Pin(this$static, 2, 2, 'K');
  this$static.pins[3] = new ChipElm$Pin(this$static, 0, 3, 'Q');
  this$static.pins[3].output = this$static.pins[3].state = true;
  this$static.pins[4] = new ChipElm$Pin(this$static, 2, 3, 'Q');
  this$static.pins[4].output = true;
  this$static.pins[4].lineOver = true;
  (this$static.flags & 2) != 0 && (this$static.pins[5] = new ChipElm$Pin(this$static, 1, 3, 'R'));
}

function JKFlipFlopElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function JKFlipFlopElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  this.pins[4].value_0 = !this.pins[3].value_0;
}

defineClass(268, 18, $intern_57, JKFlipFlopElm, JKFlipFlopElm_0);
_.getChipName = function getChipName_12(){
  return 'JK flip-flop';
}
;
_.getDumpType = function getDumpType_35(){
  return 156;
}
;
_.getEditInfo = function getEditInfo_24(n){
  var ei;
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Reset Pin', (this.flags & 2) != 0);
    return ei;
  }
  return $getEditInfo_0(this, n);
}
;
_.getPostCount = function getPostCount_24(){
  return 5 + ((this.flags & 2) != 0?1:0);
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_22(){
  return 2;
}
;
_.setEditValue = function setEditValue_23(n, ei){
  if (n == 2) {
    $getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3);
    $setupPins_3(this);
    $allocNodes(this);
    $setPoints_0(this);
  }
  $setEditValue(this, n, ei);
}
;
_.setupPins = function setupPins_12(){
  $setupPins_3(this);
}
;
var Lcom_lushprojects_circuitjs1_client_JKFlipFlopElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'JKFlipFlopElm', 268);
function $$init_7(this$static){
  this$static.FLAG_PNP = 1;
  this$static.FLAG_SHOWVT = 2;
  this$static.FLAG_DIGITAL = 4;
  this$static.FLAG_FLIP = 8;
  this$static.FLAG_HIDE_BULK = 16;
  this$static.FLAGS_GLOBAL = this$static.FLAG_HIDE_BULK | this$static.FLAG_DIGITAL;
  this$static.gm = 0;
}

function $getEditInfo_3(this$static, n){
  var ei;
  if (n == 0)
    return new EditInfo('Threshold Voltage', this$static.pnp * this$static.vt, $intern_26, 5);
  if (n == 1)
    return new EditInfo('Beta', this$static.beta_0, $intern_26, 5);
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Digital Symbol', (this$static.flags & this$static.FLAG_DIGITAL) != 0);
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Show Bulk', (this$static.flags & (this$static.FLAG_DIGITAL | this$static.FLAG_HIDE_BULK)) == 0);
    return ei;
  }
  if (n == 4) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Swap D/S', (this$static.flags & this$static.FLAG_FLIP) != 0);
    return ei;
  }
  return null;
}

function $getFetInfo(this$static, arr, n){
  arr[0] = LS((this$static.pnp == -1?'p-':'n-') + n);
  arr[0] += ' (Vt = ' + myGetUnitText(this$static.pnp * this$static.vt, 'V', false) + ')';
  arr[1] = (this$static.pnp == 1?'Ids = ':'Isd = ') + myGetUnitText(this$static.ids, 'A', false);
  arr[2] = 'Vgs = ' + myGetUnitText(this$static.volts[0] - this$static.volts[this$static.pnp == -1?2:1], 'V', false);
  arr[3] = (this$static.pnp == 1?'Vds = ':'Vsd = ') + myGetUnitText(this$static.volts[2] - this$static.volts[1], 'V', false);
  arr[4] = LS('off');
  arr[5] = 'gm = ' + myGetUnitText(this$static.gm, 'A/V', false);
  arr[6] = 'P = ' + myGetUnitText(this$static.ids * (this$static.volts[2] - this$static.volts[1]), 'W', false);
}

function $setPoints_7(this$static){
  var dist, hs2;
  $setPoints(this$static);
  this$static.flags &= ~this$static.FLAGS_GLOBAL;
  this$static.flags |= globalFlags;
  hs2 = 16 * this$static.dsign;
  (this$static.flags & this$static.FLAG_FLIP) != 0 && (hs2 = -hs2);
  this$static.src_0 = $newPointArray(3);
  this$static.drn = $newPointArray(3);
  $interpPoint2(this$static.point1, this$static.point2, this$static.src_0[0], this$static.drn[0], 1, -hs2);
  $interpPoint2(this$static.point1, this$static.point2, this$static.src_0[1], this$static.drn[1], 1 - 22 / this$static.dn, -hs2);
  $interpPoint2(this$static.point1, this$static.point2, this$static.src_0[2], this$static.drn[2], 1 - 22 / this$static.dn, -hs2 * 4 / 3 | 0);
  this$static.gate = $newPointArray(3);
  $interpPoint2(this$static.point1, this$static.point2, this$static.gate[0], this$static.gate[2], 1 - 28 / this$static.dn, hs2 / 2 | 0);
  $interpPoint_1(this$static.gate[0], this$static.gate[2], this$static.gate[1], 0.5);
  if ((this$static.flags & (this$static.FLAG_DIGITAL | this$static.FLAG_HIDE_BULK)) == 0) {
    this$static.body_0 = $newPointArray(2);
    $interpPoint_1(this$static.src_0[0], this$static.drn[0], this$static.body_0[0], 0.5);
    $interpPoint_1(this$static.src_0[1], this$static.drn[1], this$static.body_0[1], 0.5);
  }
  if ((this$static.flags & this$static.FLAG_DIGITAL) != 0) {
    if (this$static.pnp == -1) {
      $interpPoint_1(this$static.point1, this$static.point2, this$static.gate[1], 1 - 36 / this$static.dn);
      dist = this$static.dsign < 0?32:31;
      $interpPoint(this$static.point1, this$static.point2, 1 - dist / this$static.dn);
    }
  }
   else {
    this$static.pnp == 1?(this$static.flags & (this$static.FLAG_DIGITAL | this$static.FLAG_HIDE_BULK)) == 0?(this$static.arrowPoly_0 = $calcArrow(this$static.body_0[0], this$static.body_0[1], 12, 5)):(this$static.arrowPoly_0 = $calcArrow(this$static.src_0[1], this$static.src_0[0], 10, 4)):(this$static.flags & (this$static.FLAG_DIGITAL | this$static.FLAG_HIDE_BULK)) == 0?(this$static.arrowPoly_0 = $calcArrow(this$static.body_0[1], this$static.body_0[0], 12, 5)):(this$static.arrowPoly_0 = $calcArrow(this$static.drn[0], this$static.drn[1], 12, 5));
  }
}

function MosfetElm(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $$init_7(this);
  this.pnp = (f & this.FLAG_PNP) != 0?-1:1;
  this.noDiagonal = true;
  this.vt = this.getDefaultThreshold();
  this.beta_0 = this.getDefaultBeta();
  try {
    this.vt = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.beta_0 = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  globalFlags = this.flags & this.FLAGS_GLOBAL;
}

function MosfetElm_0(xx, yy, pnpflag){
  CircuitElm.call(this, xx, yy);
  $$init_7(this);
  this.pnp = pnpflag?-1:1;
  this.flags = pnpflag?this.FLAG_PNP:0;
  this.noDiagonal = true;
  this.beta_0 = this.getDefaultBeta();
  this.vt = this.getDefaultThreshold();
}

defineClass(147, 4, $intern_57, MosfetElm);
_.draw = function draw_24(g){
  var enhancement, i, v;
  (this.flags & this.FLAGS_GLOBAL) != globalFlags && this.setPoints();
  $setBbox_0(this, this.point1, this.point2, 16);
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  $setPowerColor_0(this, g);
  enhancement = this.vt > 0 && (this.flags & (this.FLAG_DIGITAL | this.FLAG_HIDE_BULK)) == 0;
  for (i = 0; i != 6; i++) {
    if ((i == 1 || i == 4) && enhancement)
      continue;
    v = this.volts[1] + (this.volts[2] - this.volts[1]) * i / 6;
    $setColor(g, $getVoltageColor(this, g, v));
    $interpPoint_1(this.src_0[1], this.drn[1], ps1, i * $intern_72);
    $interpPoint_1(this.src_0[1], this.drn[1], ps2, (i + 1) * $intern_72);
    drawThickLine_0();
  }
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  if ((this.flags & (this.FLAG_DIGITAL | this.FLAG_HIDE_BULK)) == 0) {
    $setVoltageColor(this, g, this.pnp == -1?this.volts[2]:this.volts[1]);
    drawThickLine_0();
    drawThickLine_0();
  }
  if ((this.flags & this.FLAG_DIGITAL) == 0) {
    $setVoltageColor(this, g, this.pnp == -1?this.volts[2]:this.volts[1]);
    $fillPolygon(this.arrowPoly_0);
  }
  sim.powerCheckItem.on && $setColor(g, ($clinit_Color() , gray));
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  drawThickLine_0();
  (this.flags & this.FLAG_DIGITAL) != 0 && this.pnp == -1 && drawThickCircle();
  if ((this.flags & this.FLAG_SHOWVT) != 0) {
    $setColor(g, whiteColor);
    $setFont(g, unitsFont);
    $drawCenteredText(this, g, this.x2 + 2, this.y2, false);
  }
  if ((this.iAmMouseElm || this.selected || sim.dragElm == this) && this.dy == 0) {
    $setColor(g, ($clinit_Color() , white));
    $setFont(g, unitsFont);
    sign(this.dx);
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
  }
  this.curcount_0 = $updateDotCount(-this.ids, this.curcount_0);
  $drawDots(g, this.src_0[0], this.src_0[1], this.curcount_0);
  $drawDots(g, this.src_0[1], this.drn[1], this.curcount_0);
  $drawDots(g, this.drn[1], this.drn[0], this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDefaultBeta = function getDefaultBeta(){
  return 0.02;
}
;
_.getDefaultThreshold = function getDefaultThreshold(){
  return 1.5;
}
;
_.getDumpType = function getDumpType_36(){
  return 102;
}
;
_.getEditInfo = function getEditInfo_25(n){
  return $getEditInfo_3(this, n);
}
;
_.getInfo = function getInfo_24(arr){
  $getFetInfo(this, arr, 'MOSFET');
}
;
_.getPost = function getPost_5(n){
  return n == 0?this.point1:n == 1?this.src_0[0]:this.drn[0];
}
;
_.getPostCount = function getPostCount_25(){
  return 3;
}
;
_.getPower = function getPower_5(){
  return this.ids * (this.volts[2] - this.volts[1]);
}
;
_.getVoltageDiff = function getVoltageDiff_11(){
  return this.volts[2] - this.volts[1];
}
;
_.setEditValue = function setEditValue_24(n, ei){
  n == 0 && (this.vt = this.pnp * ei.value_0);
  n == 1 && (this.beta_0 = ei.value_0);
  if (n == 2) {
    globalFlags = $getState(ei.checkbox)?globalFlags | this.FLAG_DIGITAL:globalFlags & ~this.FLAG_DIGITAL;
    this.setPoints();
  }
  if (n == 3) {
    globalFlags = $getState(ei.checkbox)?globalFlags & ~this.FLAG_HIDE_BULK:globalFlags | this.FLAG_HIDE_BULK;
    this.setPoints();
  }
  if (n == 4) {
    this.flags = $getState(ei.checkbox)?this.flags | this.FLAG_FLIP:this.flags & ~this.FLAG_FLIP;
    this.setPoints();
  }
}
;
_.setPoints = function setPoints_21(){
  $setPoints_7(this);
}
;
_.FLAGS_GLOBAL = 0;
_.FLAG_DIGITAL = 0;
_.FLAG_FLIP = 0;
_.FLAG_HIDE_BULK = 0;
_.FLAG_PNP = 0;
_.FLAG_SHOWVT = 0;
_.beta_0 = 0;
_.gm = 0;
_.ids = 0;
_.pnp = 0;
_.vt = 0;
var globalFlags = 0;
var Lcom_lushprojects_circuitjs1_client_MosfetElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'MosfetElm', 147);
function JfetElm(xa, ya, xb, yb, f, st){
  MosfetElm.call(this, xa, ya, xb, yb, f, st);
  this.noDiagonal = true;
  this.diode = new Diode;
  $setup(this.diode, 0.8, 0);
}

function JfetElm_0(xx, yy, pnpflag){
  MosfetElm_0.call(this, xx, yy, pnpflag);
  this.noDiagonal = true;
  this.diode = new Diode;
  $setup(this.diode, 0.8, 0);
}

defineClass(205, 147, $intern_57, JfetElm);
_.calculateCurrent = function calculateCurrent_6(){
  this.gateCurrent = this.pnp * $calculateCurrent(this.diode, this.pnp * (this.volts[0] - this.volts[1]));
}
;
_.draw = function draw_25(g){
  $setBbox_0(this, this.point1, this.point2, 16);
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $fillPolygon(this.arrowPoly);
  $setPowerColor_0(this, g);
  $fillPolygon(this.gatePoly);
  this.curcountd = $updateDotCount(-this.ids, this.curcountd);
  this.curcountg = $updateDotCount(this.gateCurrent, this.curcountg);
  this.curcounts = $updateDotCount(-this.gateCurrent - this.ids, this.curcounts);
  if (this.curcountd != 0 || this.curcounts != 0) {
    $drawDots(g, this.src_0[0], this.src_0[1], this.curcounts);
    $drawDots(g, this.src_0[1], this.src_0[2], this.curcounts + 8);
    $drawDots(g, this.drn[0], this.drn[1], -this.curcountd);
    $drawDots(g, this.drn[1], this.drn[2], -(this.curcountd + 8));
    $drawDots(g, this.point1, this.gatePt, this.curcountg);
  }
  $drawPosts(this, g);
}
;
_.getDefaultBeta = function getDefaultBeta_0(){
  return 0.00125;
}
;
_.getDefaultThreshold = function getDefaultThreshold_0(){
  return -4;
}
;
_.getDumpType = function getDumpType_37(){
  return 106;
}
;
_.getEditInfo = function getEditInfo_26(n){
  if (n < 2)
    return $getEditInfo_3(this, n);
  return null;
}
;
_.getInfo = function getInfo_25(arr){
  $getFetInfo(this, arr, 'JFET');
}
;
_.setPoints = function setPoints_22(){
  var hs2, ra, x_0;
  $setPoints_7(this);
  hs2 = 16 * this.dsign;
  this.src_0 = $newPointArray(3);
  this.drn = $newPointArray(3);
  $interpPoint2(this.point1, this.point2, this.src_0[0], this.drn[0], 1, -hs2);
  $interpPoint2(this.point1, this.point2, this.src_0[1], this.drn[1], 1, -hs2 / 2 | 0);
  $interpPoint2(this.point1, this.point2, this.src_0[2], this.drn[2], 1 - 10 / this.dn, -hs2 / 2 | 0);
  this.gatePt = $interpPoint(this.point1, this.point2, 1 - 14 / this.dn);
  ra = $newPointArray(4);
  $interpPoint2(this.point1, this.point2, ra[0], ra[1], 1 - 13 / this.dn, 16);
  $interpPoint2(this.point1, this.point2, ra[2], ra[3], 1 - 10 / this.dn, 16);
  this.gatePoly = $createPolygon_0(ra[0], ra[1], ra[3], ra[2]);
  if (this.pnp == -1) {
    x_0 = $interpPoint(this.gatePt, this.point1, 18 / this.dn);
    this.arrowPoly = $calcArrow(this.gatePt, x_0, 8, 3);
  }
   else 
    this.arrowPoly = $calcArrow(this.point1, this.gatePt, 8, 3);
}
;
_.curcountd = 0;
_.curcountg = 0;
_.curcounts = 0;
_.gateCurrent = 0;
var Lcom_lushprojects_circuitjs1_client_JfetElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'JfetElm', 205);
function LEDElm(xx, yy){
  DiodeElm.call(this, xx, yy);
  this.fwdrop = 2.1024259;
  $setup(this.diode, this.fwdrop, this.zvoltage);
  this.maxBrightnessCurrent = $intern_26;
  this.colorR = 1;
  this.colorG = this.colorB = 0;
}

function LEDElm_0(xa, ya, xb, yb, f, st){
  DiodeElm_0.call(this, xa, ya, xb, yb, f, st);
  (f & 1) == 0 && (this.fwdrop = 2.1024259);
  $setup(this.diode, this.fwdrop, this.zvoltage);
  this.colorR = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.colorG = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.colorB = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.maxBrightnessCurrent = $intern_26;
  try {
    this.maxBrightnessCurrent = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
}

defineClass(244, 131, $intern_57, LEDElm, LEDElm_0);
_.draw = function draw_26(g){
  var cc, cr, w;
  if (this.iAmMouseElm || this.selected || this == sim.dragElm) {
    $draw_0(this, g);
    return;
  }
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setColor(g, ($clinit_Color() , gray));
  cr = 12;
  drawThickCircle();
  cr -= 4;
  w = this.current_0 / this.maxBrightnessCurrent;
  w > 0 && (w = 255 * (1 + 0.2 * $wnd.Math.log(w)));
  w > 255 && (w = 255);
  w < 0 && (w = 0);
  cc = new Color(round_int(this.colorR * w), round_int(this.colorG * w), round_int(this.colorB * w));
  $setColor(g, cc);
  $fillOval();
  $setBbox_0(this, this.point1, this.point2, cr);
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.point1, this.ledLead1, this.curcount_0);
  $drawDots(g, this.point2, this.ledLead2, -this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_38(){
  return 162;
}
;
_.getEditInfo = function getEditInfo_27(n){
  if (n == 0)
    return $getEditInfo_2(this, 0);
  if (n == 1)
    return $setDimensionless(new EditInfo('Red Value (0-1)', this.colorR, 0, 1));
  if (n == 2)
    return $setDimensionless(new EditInfo('Green Value (0-1)', this.colorG, 0, 1));
  if (n == 3)
    return $setDimensionless(new EditInfo('Blue Value (0-1)', this.colorB, 0, 1));
  if (n == 4)
    return new EditInfo('Max Brightness Current (A)', this.maxBrightnessCurrent, 0, 0.1);
  return null;
}
;
_.getInfo = function getInfo_26(arr){
  $getInfo_1(this, arr);
  arr[0] = 'LED';
}
;
_.getShortcut = function getShortcut_12(){
  return 108;
}
;
_.setEditValue = function setEditValue_25(n, ei){
  n == 0 && (this.fwdrop = ei.value_0 , $setup(this.diode, this.fwdrop, this.zvoltage));
  n == 1 && (this.colorR = ei.value_0);
  n == 2 && (this.colorG = ei.value_0);
  n == 3 && (this.colorB = ei.value_0);
  n == 4 && (this.maxBrightnessCurrent = ei.value_0);
}
;
_.setPoints = function setPoints_23(){
  $setPoints_5(this);
  this.ledLead1 = $interpPoint(this.point1, this.point2, 0.5 - 12 / this.dn);
  this.ledLead2 = $interpPoint(this.point1, this.point2, 0.5 + 12 / this.dn);
  $interpPoint(this.point1, this.point2, 0.5);
}
;
_.colorB = 0;
_.colorG = 0;
_.colorR = 0;
_.maxBrightnessCurrent = 0;
var Lcom_lushprojects_circuitjs1_client_LEDElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'LEDElm', 244);
function LabeledNodeElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.text_0 = 'label';
}

function LabeledNodeElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.text_0 = $nextToken(st);
  while ($hasMoreTokens(st))
    this.text_0 += ' ' + $nextToken(st);
}

defineClass(237, 4, $intern_57, LabeledNodeElm, LabeledNodeElm_0);
_.draw = function draw_27(g){
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:whiteColor);
  $setPowerColor_0(this, g);
  $drawCenteredText(this, g, this.x2, this.y2, true);
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.point1, this.lead1, this.curcount_0);
  $interpPoint_1(this.point1, this.point2, ps2, 1 + 11 / this.dn);
  $setBbox_0(this, this.point1, ps2, 17);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_39(){
  return 207;
}
;
_.getEditInfo = function getEditInfo_28(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('Text', 0, -1, -1);
    ei.text_0 = this.text_0;
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_27(arr){
  arr[0] = this.text_0;
  arr[1] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
  arr[2] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
}
;
_.getInternalNodeCount = function getInternalNodeCount_1(){
  var nn;
  if (!nodeList)
    return 0;
  nn = castTo($getStringValue(nodeList, this.text_0), 20);
  if (nn) {
    return 0;
  }
  return 1;
}
;
_.getPostCount = function getPostCount_26(){
  return 1;
}
;
_.getVoltageDiff = function getVoltageDiff_12(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_23(){
  return 1;
}
;
_.setCurrent = function setCurrent_5(x_0, c){
  this.current_0 = -c;
}
;
_.setEditValue = function setEditValue_26(n, ei){
  n == 0 && (this.text_0 = $getText(ei.textf));
}
;
_.setPoints = function setPoints_24(){
  $setPoints(this);
  this.lead1 = $interpPoint(this.point1, this.point2, 1 - 17 / this.dn);
}
;
var nodeList;
var Lcom_lushprojects_circuitjs1_client_LabeledNodeElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'LabeledNodeElm', 237);
function $getTempColor(this$static){
  var x_0;
  if (this$static.temp < 1200) {
    x_0 = round_int(255 * (this$static.temp - 800) / 400);
    x_0 < 0 && (x_0 = 0);
    return new Color(x_0, 0, 0);
  }
  if (this$static.temp < 1700) {
    x_0 = round_int(255 * (this$static.temp - 1200) / 500);
    x_0 < 0 && (x_0 = 0);
    return new Color(255, x_0, 0);
  }
  if (this$static.temp < 2400) {
    x_0 = round_int(255 * (this$static.temp - 1700) / 700);
    x_0 < 0 && (x_0 = 0);
    return new Color(255, 255, x_0);
  }
  return $clinit_Color() , white;
}

function LampElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.temp = 300;
  this.nom_pow = 100;
  this.nom_v = 120;
  this.warmTime = 0.4;
  this.coolTime = 0.4;
}

function LampElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.temp = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  isNaN(this.temp) && (this.temp = 300);
  this.nom_pow = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.nom_v = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.warmTime = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.coolTime = $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(255, 4, $intern_57, LampElm, LampElm_0);
_.calculateCurrent = function calculateCurrent_7(){
  this.current_0 = (this.volts[0] - this.volts[1]) / this.resistance;
  this.resistance == 0 && (this.current_0 = 0);
}
;
_.draw = function draw_28(g){
  var cc, v1, v2;
  v1 = this.volts[0];
  v2 = this.volts[1];
  $setBbox_0(this, this.point1, this.point2, 4);
  $adjustBbox(this, this.bulb.x_0 - this.bulbR, this.bulb.y_0 - this.bulbR, this.bulb.x_0 + this.bulbR, this.bulb.y_0 + this.bulbR);
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  $setColor(g, $getTempColor(this));
  $fillOval();
  $setColor(g, ($clinit_Color() , white));
  drawThickCircle();
  $setColor(g, $getVoltageColor(this, g, v1));
  drawThickLine_0();
  $setColor(g, $getVoltageColor(this, g, v2));
  drawThickLine_0();
  $setColor(g, $getVoltageColor(this, g, (v1 + v2) * 0.5));
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  if (sim.dragElm != this) {
    $drawDots(g, this.point1, this.lead1, this.curcount_0);
    cc = this.curcount_0 + (this.dn - 16) / 2;
    $drawDots(g, this.lead1, this.filament[0], cc);
    cc += 24;
    $drawDots(g, this.filament[0], this.filament[1], cc);
    cc += 16;
    $drawDots(g, this.filament[1], this.lead2, cc);
    cc += 24;
    $drawDots(g, this.lead2, this.point2, this.curcount_0);
  }
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_40(){
  return 181;
}
;
_.getEditInfo = function getEditInfo_29(n){
  if (n == 0)
    return new EditInfo('Nominal Power', this.nom_pow, 0, 0);
  if (n == 1)
    return new EditInfo('Nominal Voltage', this.nom_v, 0, 0);
  if (n == 2)
    return new EditInfo('Warmup Time (s)', this.warmTime, 0, 0);
  if (n == 3)
    return new EditInfo('Cooldown Time (s)', this.coolTime, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_28(arr){
  arr[0] = 'lamp';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = 'R = ' + myGetUnitText(this.resistance, ohmString, false);
  arr[4] = 'P = ' + myGetUnitText((this.volts[0] - this.volts[1]) * this.current_0, 'W', false);
  arr[5] = 'T = ' + round_int(this.temp) + ' K';
}
;
_.getScopeUnits = function getScopeUnits_0(x_0){
  return x_0 == 2?3:x_0 == 3?1:x_0 == 1?2:0;
}
;
_.setEditValue = function setEditValue_27(n, ei){
  n == 0 && ei.value_0 > 0 && (this.nom_pow = ei.value_0);
  n == 1 && ei.value_0 > 0 && (this.nom_v = ei.value_0);
  n == 2 && ei.value_0 > 0 && (this.warmTime = ei.value_0);
  n == 3 && ei.value_0 > 0 && (this.coolTime = ei.value_0);
}
;
_.setPoints = function setPoints_25(){
  var br;
  $setPoints(this);
  $calcLeads(this, 16);
  this.bulbLead = $newPointArray(2);
  this.filament = $newPointArray(2);
  this.bulbR = 20;
  this.filament[0] = $interpPoint_0(this.lead1, this.lead2, 0, 24);
  this.filament[1] = $interpPoint_0(this.lead1, this.lead2, 1, 24);
  br = 24 - $wnd.Math.sqrt(this.bulbR * this.bulbR - 256);
  this.bulbLead[0] = $interpPoint_0(this.lead1, this.lead2, 0, br);
  this.bulbLead[1] = $interpPoint_0(this.lead1, this.lead2, 1, br);
  this.bulb = $interpPoint(this.filament[0], this.filament[1], 0.5);
}
;
_.bulbR = 0;
_.coolTime = 0;
_.nom_pow = 0;
_.nom_v = 0;
_.resistance = 0;
_.temp = 0;
_.warmTime = 0;
var Lcom_lushprojects_circuitjs1_client_LampElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'LampElm', 255);
function LatchElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function LatchElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(279, 18, $intern_57, LatchElm, LatchElm_0);
_.getChipName = function getChipName_13(){
  return 'Latch';
}
;
_.getDumpType = function getDumpType_41(){
  return 168;
}
;
_.getPostCount = function getPostCount_27(){
  return this.bits * 2 + 1;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_24(){
  return this.bits;
}
;
_.needsBits = function needsBits_4(){
  return true;
}
;
_.setupPins = function setupPins_13(){
  var i;
  this.sizeX = 2;
  this.sizeY = this.bits + 1;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, this.bits * 2 + 1, 0, 1);
  for (i = 0; i != this.bits; i++)
    this.pins[i] = new ChipElm$Pin(this, this.bits - 1 - i, 2, 'I' + i);
  for (i = 0; i != this.bits; i++) {
    this.pins[i + this.bits] = new ChipElm$Pin(this, this.bits - 1 - i, 3, 'O');
    this.pins[i + this.bits].output = true;
  }
  this.pins[this.bits * 2] = new ChipElm$Pin(this, this.bits, 2, 'Ld');
  $allocNodes(this);
}
;
var Lcom_lushprojects_circuitjs1_client_LatchElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'LatchElm', 279);
function $getEditInfo_4(this$static, n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Momentary Switch', this$static.momentary);
    return ei;
  }
  return null;
}

function $mouseUp(this$static){
  this$static.momentary && this$static.toggle();
}

function $setPoints_8(this$static){
  $setPoints(this$static);
  $calcLeads(this$static, 32);
  this$static.ps = new Point;
  this$static.ps2 = new Point;
}

function SwitchElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.momentary = false;
  this.position = 0;
  this.posCount = 2;
}

function SwitchElm_0(xa, ya, xb, yb, f, st){
  var str;
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  str = $nextToken(st);
  $compareTo(str, 'true') == 0?(this.position = instanceOf(this, 146)?0:1):$compareTo(str, 'false') == 0?(this.position = instanceOf(this, 146)?1:0):(this.position = (new Integer_0(str)).value_0);
  this.momentary = $booleanValue(($clinit_Boolean() , $equalsIgnoreCase('true', $nextToken(st))));
  this.posCount = 2;
}

function SwitchElm_1(xx, yy, mm){
  CircuitElm.call(this, xx, yy);
  this.position = mm?1:0;
  this.momentary = mm;
  this.posCount = 2;
}

defineClass(85, 4, $intern_73, SwitchElm, SwitchElm_0);
_.calculateCurrent = function calculateCurrent_8(){
  this.position == 1 && (this.current_0 = 0);
}
;
_.draw = function draw_29(g){
  var hs1, hs2;
  hs1 = this.position == 1?0:2;
  hs2 = this.position == 1?16:2;
  $setBbox_0(this, this.point1, this.point2, 16);
  $draw2Leads(this, g);
  this.position == 0 && (this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0) , sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0));
  this.iAmMouseElm || this.selected || $setColor(g, whiteColor);
  $interpPoint_2(this.lead1, this.lead2, this.ps, 0, hs1);
  $interpPoint_2(this.lead1, this.lead2, this.ps2, 1, hs2);
  drawThickLine_0();
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_42(){
  return 115;
}
;
_.getEditInfo = function getEditInfo_30(n){
  return $getEditInfo_4(this, n);
}
;
_.getInfo = function getInfo_29(arr){
  arr[0] = this.momentary?'push switch (SPST)':'switch (SPST)';
  if (this.position == 1) {
    arr[1] = 'open';
    arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.getVoltageDiff()), 'V', false);
  }
   else {
    arr[1] = 'closed';
    arr[2] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
    arr[3] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  }
}
;
_.getShortcut = function getShortcut_13(){
  return 115;
}
;
_.getSwitchRect = function getSwitchRect(){
  $interpPoint_2(this.lead1, this.lead2, this.ps, 0, 16);
  return $union($union(new Rectangle_1(this.lead1), new Rectangle_1(this.lead2)), new Rectangle_1(this.ps));
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_25(){
  return this.position == 1?0:1;
}
;
_.setEditValue = function setEditValue_28(n, ei){
  n == 0 && (this.momentary = $getState(ei.checkbox));
}
;
_.setPoints = function setPoints_26(){
  $setPoints_8(this);
}
;
_.toggle = function toggle(){
  ++this.position;
  this.position >= this.posCount && (this.position = 0);
}
;
_.momentary = false;
_.posCount = 0;
_.position = 0;
var Lcom_lushprojects_circuitjs1_client_SwitchElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SwitchElm', 85);
function LogicInputElm(xx, yy){
  SwitchElm_1.call(this, xx, yy, false);
  this.numHandles = 1;
  this.hiV = 5;
  this.loV = 0;
}

function LogicInputElm_0(xa, ya, xb, yb, f, st){
  SwitchElm_0.call(this, xa, ya, xb, yb, f, st);
  this.numHandles = 1;
  try {
    this.hiV = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.loV = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 11)) {
      this.hiV = 5;
      this.loV = 0;
    }
     else 
      throw toJs($e0);
  }
  (this.flags & 1) != 0 && (this.posCount = 3);
}

defineClass(146, 85, {4:1, 8:1, 146:1, 85:1}, LogicInputElm, LogicInputElm_0);
_.draw = function draw_30(g){
  var f, oldf;
  oldf = g.currentFont;
  f = new Font(20);
  $setFont(g, f);
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:whiteColor);
  $setBbox_0(this, this.point1, this.lead1, 0);
  $drawCenteredText(this, g, this.x2, this.y2, true);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.point1, this.lead1, this.curcount_0);
  $drawPosts(this, g);
  $setFont(g, oldf);
}
;
_.getDumpType = function getDumpType_43(){
  return 76;
}
;
_.getEditInfo = function getEditInfo_31(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, 0, 0);
    ei.checkbox = new Checkbox('Momentary Switch', this.momentary);
    return ei;
  }
  if (n == 1)
    return new EditInfo('High Voltage', this.hiV, 10, -10);
  if (n == 2)
    return new EditInfo('Low Voltage', this.loV, 10, -10);
  if (n == 3) {
    ei = new EditInfo('', 0, 0, 0);
    ei.checkbox = new Checkbox('Numeric', (this.flags & 3) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_30(arr){
  arr[0] = 'logic input';
  arr[1] = this.position == 0?'low':'high';
  (this.flags & 3) != 0 && (arr[1] = '' + this.position);
  arr[1] += ' (' + myGetUnitText(this.volts[0], 'V', false) + ')';
  arr[2] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
}
;
_.getPostCount = function getPostCount_28(){
  return 1;
}
;
_.getShortcut = function getShortcut_14(){
  return 105;
}
;
_.getSwitchRect = function getSwitchRect_0(){
  return new Rectangle_0(this.x2 - 10, this.y2 - 10, 20, 20);
}
;
_.getVoltageDiff = function getVoltageDiff_13(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_26(){
  return 1;
}
;
_.setCurrent = function setCurrent_6(vs, c){
  this.current_0 = -c;
}
;
_.setEditValue = function setEditValue_29(n, ei){
  n == 0 && (this.momentary = $getState(ei.checkbox));
  n == 1 && (this.hiV = ei.value_0);
  n == 2 && (this.loV = ei.value_0);
  n == 3 && ($getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3));
}
;
_.setPoints = function setPoints_27(){
  $setPoints_8(this);
  this.lead1 = $interpPoint(this.point1, this.point2, 1 - 12 / this.dn);
}
;
_.hiV = 0;
_.loV = 0;
var Lcom_lushprojects_circuitjs1_client_LogicInputElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'LogicInputElm', 146);
function LogicOutputElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.threshold = 2.5;
}

function LogicOutputElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  try {
    this.threshold = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 11)) {
      this.threshold = 2.5;
    }
     else 
      throw toJs($e0);
  }
}

defineClass(173, 4, {4:1, 8:1, 173:1}, LogicOutputElm, LogicOutputElm_0);
_.draw = function draw_31(g){
  var f, oldf, s;
  oldf = g.currentFont;
  f = new Font(20);
  $setFont(g, f);
  $setColor(g, lightGrayColor);
  s = this.volts[0] < this.threshold?'L':'H';
  (this.flags & 1) != 0?this.volts[0] > 3.75?(s = '2'):this.volts[0] > 1.25?(s = '1'):(s = '0'):(this.flags & 3) != 0 && (s = this.volts[0] < this.threshold?'0':'1');
  this.value_0 = s;
  $setBbox_0(this, this.point1, this.lead1, 0);
  $drawCenteredText(this, g, this.x2, this.y2, true);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $drawPosts(this, g);
  $setFont(g, oldf);
}
;
_.getDumpType = function getDumpType_44(){
  return 77;
}
;
_.getEditInfo = function getEditInfo_32(n){
  var ei;
  if (n == 0)
    return new EditInfo('Threshold', this.threshold, 10, -10);
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Current Required', (this.flags & 4) != 0);
    return ei;
  }
  if (n == 2) {
    ei = new EditInfo('', 0, 0, 0);
    ei.checkbox = new Checkbox('Numeric', (this.flags & 3) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_31(arr){
  arr[0] = 'logic output';
  arr[1] = this.volts[0] < this.threshold?'low':'high';
  (this.flags & 3) != 0 && (arr[1] = this.value_0);
  arr[2] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
}
;
_.getPostCount = function getPostCount_29(){
  return 1;
}
;
_.getShortcut = function getShortcut_15(){
  return 111;
}
;
_.getVoltageDiff = function getVoltageDiff_14(){
  return this.volts[0];
}
;
_.setEditValue = function setEditValue_30(n, ei){
  n == 0 && (this.threshold = ei.value_0);
  n == 1 && ($getState(ei.checkbox)?(this.flags = 4):(this.flags &= -5));
  n == 2 && ($getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3));
}
;
_.setPoints = function setPoints_28(){
  $setPoints(this);
  this.lead1 = $interpPoint(this.point1, this.point2, 1 - 12 / this.dn);
}
;
_.threshold = 0;
var Lcom_lushprojects_circuitjs1_client_LogicOutputElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'LogicOutputElm', 173);
function MemristorElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.r_on = 100;
  this.r_off = 160 * this.r_on;
  this.dopeWidth = 0;
  this.totalWidth = $intern_67;
  this.mobility = 1.0E-10;
  this.resistance = 100;
}

function MemristorElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.r_on = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.r_off = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.dopeWidth = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.totalWidth = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.mobility = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  try {
    this.current_0 = __parseAndValidateDouble($nextToken(st));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.resistance = 100;
}

defineClass(250, 4, $intern_57, MemristorElm, MemristorElm_0);
_.calculateCurrent = function calculateCurrent_9(){
  this.current_0 = (this.volts[0] - this.volts[1]) / this.resistance;
}
;
_.draw = function draw_32(g){
  var hs, i, nx, ox, v, v1, v2;
  ox = 0;
  v1 = this.volts[0];
  v2 = this.volts[1];
  hs = 2 + round_int(8 * (1 - this.dopeWidth / this.totalWidth));
  $setBbox_0(this, this.point1, this.point2, hs);
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  for (i = 0; i <= 6; i++) {
    nx = (i & 1) == 0?1:-1;
    i == 6 && (nx = 0);
    v = v1 + (v2 - v1) * i / 6;
    $setColor(g, $getVoltageColor(this, g, v));
    $interpPoint_2(this.lead1, this.lead2, ps1, i * $intern_72, hs * ox);
    $interpPoint_2(this.lead1, this.lead2, ps2, i * $intern_72, hs * nx);
    drawThickLine_0();
    if (i == 6)
      break;
    $interpPoint_2(this.lead1, this.lead2, ps1, (i + 1) * $intern_72, hs * nx);
    drawThickLine_0();
    ox = nx;
  }
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_45(){
  return 109;
}
;
_.getEditInfo = function getEditInfo_33(n){
  if (n == 0)
    return new EditInfo('Min Resistance (ohms)', this.r_on, 0, 0);
  if (n == 1)
    return new EditInfo('Max Resistance (ohms)', this.r_off, 0, 0);
  if (n == 2)
    return new EditInfo('Width of Doped Region (nm)', this.dopeWidth * $intern_54, 0, 0);
  if (n == 3)
    return new EditInfo('Total Width (nm)', this.totalWidth * $intern_54, 0, 0);
  if (n == 4)
    return new EditInfo('Mobility (um^2/(s*V))', this.mobility * $intern_52, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_32(arr){
  arr[0] = 'memristor';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = 'R = ' + myGetUnitText(this.resistance, ohmString, false);
  arr[4] = 'P = ' + myGetUnitText((this.volts[0] - this.volts[1]) * this.current_0, 'W', false);
}
;
_.getScopeUnits = function getScopeUnits_1(x_0){
  return x_0 == 2?3:x_0 == 3?1:x_0 == 1?2:0;
}
;
_.setEditValue = function setEditValue_31(n, ei){
  n == 0 && (this.r_on = ei.value_0);
  n == 1 && (this.r_off = ei.value_0);
  n == 2 && (this.dopeWidth = ei.value_0 * $intern_51);
  n == 3 && (this.totalWidth = ei.value_0 * $intern_51);
  n == 4 && (this.mobility = ei.value_0 * 1.0E-12);
}
;
_.setPoints = function setPoints_29(){
  $setPoints(this);
  $calcLeads(this, 32);
  new Point;
  new Point;
}
;
_.dopeWidth = 0;
_.mobility = 0;
_.r_off = 0;
_.r_on = 0;
_.resistance = 0;
_.totalWidth = 0;
var Lcom_lushprojects_circuitjs1_client_MemristorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'MemristorElm', 250);
function $$init_8(this$static){
  this$static.retriggerable = false;
  this$static.delay = $intern_26;
}

function MonostableElm(xx, yy){
  ChipElm.call(this, xx, yy);
  $$init_8(this);
}

function MonostableElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  $$init_8(this);
  this.retriggerable = $booleanValue(($clinit_Boolean() , $equalsIgnoreCase('true', $nextToken(st))));
  this.delay = $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(288, 18, $intern_57, MonostableElm, MonostableElm_0);
_.getChipName = function getChipName_14(){
  return 'Monostable';
}
;
_.getDumpType = function getDumpType_46(){
  return 194;
}
;
_.getEditInfo = function getEditInfo_34(n){
  var ei;
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Retriggerable', this.retriggerable);
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('Period (s)', this.delay, $intern_55, 0.1);
    return ei;
  }
  return $getEditInfo_0(this, n);
}
;
_.getPostCount = function getPostCount_30(){
  return 3;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_27(){
  return 2;
}
;
_.setEditValue = function setEditValue_32(n, ei){
  n == 2 && (this.retriggerable = $getState(ei.checkbox));
  n == 3 && (this.delay = ei.value_0);
  $setEditValue(this, n, ei);
}
;
_.setupPins = function setupPins_14(){
  this.sizeX = 2;
  this.sizeY = 2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 3, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, '');
  this.pins[0].clock = true;
  this.pins[1] = new ChipElm$Pin(this, 0, 3, 'Q');
  this.pins[1].output = true;
  this.pins[2] = new ChipElm$Pin(this, 1, 3, 'Q');
  this.pins[2].output = true;
  this.pins[2].lineOver = true;
}
;
_.delay = 0;
_.retriggerable = false;
var Lcom_lushprojects_circuitjs1_client_MonostableElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'MonostableElm', 288);
function MultiplexerElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function MultiplexerElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(270, 18, $intern_57, MultiplexerElm, MultiplexerElm_0);
_.getChipName = function getChipName_15(){
  return 'Multiplexer';
}
;
_.getDumpType = function getDumpType_47(){
  return 184;
}
;
_.getPostCount = function getPostCount_31(){
  return 7;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_28(){
  return 1;
}
;
_.setupPins = function setupPins_15(){
  this.sizeX = 3;
  this.sizeY = 5;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 7, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, 'I0');
  this.pins[1] = new ChipElm$Pin(this, 1, 2, 'I1');
  this.pins[2] = new ChipElm$Pin(this, 2, 2, 'I2');
  this.pins[3] = new ChipElm$Pin(this, 3, 2, 'I3');
  this.pins[4] = new ChipElm$Pin(this, 1, 1, 'S0');
  this.pins[5] = new ChipElm$Pin(this, 2, 1, 'S1');
  this.pins[6] = new ChipElm$Pin(this, 0, 3, 'Q');
  this.pins[6].output = true;
}
;
var Lcom_lushprojects_circuitjs1_client_MultiplexerElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'MultiplexerElm', 270);
function MyCommand(name_0, item_0){
  this.menuName = name_0;
  this.itemName = item_0;
}

defineClass(36, 1, {}, MyCommand);
_.execute_0 = function execute_19(){
  $menuPerformed(mysim, this.menuName, this.itemName);
}
;
var Lcom_lushprojects_circuitjs1_client_MyCommand_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'MyCommand', 36);
function NDarlingtonElm(xx, yy){
  $clinit_DarlingtonElm();
  DarlingtonElm_0.call(this, xx, yy, false);
}

defineClass(544, 207, $intern_57, NDarlingtonElm);
var Lcom_lushprojects_circuitjs1_client_NDarlingtonElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'NDarlingtonElm', 544);
function NJfetElm(xx, yy){
  JfetElm_0.call(this, xx, yy, false);
}

defineClass(542, 205, $intern_57, NJfetElm);
var Lcom_lushprojects_circuitjs1_client_NJfetElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'NJfetElm', 542);
function NMosfetElm(xx, yy){
  MosfetElm_0.call(this, xx, yy, false);
}

defineClass(540, 147, $intern_57, NMosfetElm);
_.getShortcut = function getShortcut_16(){
  return 78;
}
;
var Lcom_lushprojects_circuitjs1_client_NMosfetElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'NMosfetElm', 540);
function $setPoints_9(this$static){
  var hs2, pt;
  $setPoints(this$static);
  (this$static.flags & 1) != 0 && (this$static.dsign = -this$static.dsign);
  hs2 = 16 * this$static.dsign * this$static.pnp;
  this$static.coll = $newPointArray(2);
  this$static.emit = $newPointArray(2);
  $interpPoint2(this$static.point1, this$static.point2, this$static.coll[0], this$static.emit[0], 1, hs2);
  this$static.rect = $newPointArray(4);
  $interpPoint2(this$static.point1, this$static.point2, this$static.rect[0], this$static.rect[1], 1 - 16 / this$static.dn, 16);
  $interpPoint2(this$static.point1, this$static.point2, this$static.rect[2], this$static.rect[3], 1 - 13 / this$static.dn, 16);
  $interpPoint2(this$static.point1, this$static.point2, this$static.coll[1], this$static.emit[1], 1 - 13 / this$static.dn, 6 * this$static.dsign * this$static.pnp);
  this$static.base = new Point;
  $interpPoint_1(this$static.point1, this$static.point2, this$static.base, 1 - 16 / this$static.dn);
  this$static.rectPoly = $createPolygon_0(this$static.rect[0], this$static.rect[2], this$static.rect[3], this$static.rect[1]);
  if (this$static.pnp == 1)
    this$static.arrowPoly = $calcArrow(this$static.emit[1], this$static.emit[0], 8, 4);
  else {
    pt = $interpPoint_0(this$static.point1, this$static.point2, 1 - 11 / this$static.dn, -5 * this$static.dsign * this$static.pnp);
    this$static.arrowPoly = $calcArrow(this$static.emit[0], pt, 8, 4);
  }
}

function TransistorElm(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.pnp = (new Integer_0($nextToken(st))).value_0;
  this.beta_0 = 100;
  try {
    this.lastvbe = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.lastvbc = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.volts[0] = 0;
    this.volts[1] = -this.lastvbe;
    this.volts[2] = -this.lastvbc;
    this.beta_0 = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  $intern_70 * $wnd.Math.log($intern_70 / ($wnd.Math.sqrt(2) * 1.0E-13));
  this.noDiagonal = true;
}

function TransistorElm_0(xx, yy, pnpflag){
  CircuitElm.call(this, xx, yy);
  this.pnp = pnpflag?-1:1;
  this.beta_0 = 100;
  $intern_70 * $wnd.Math.log($intern_70 / ($wnd.Math.sqrt(2) * 1.0E-13));
  this.noDiagonal = true;
}

defineClass(116, 4, $intern_74, TransistorElm);
_.draw = function draw_33(g){
  $setBbox_0(this, this.point1, this.point2, 16);
  $setPowerColor_0(this, g);
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  $setColor(g, lightGrayColor);
  $fillPolygon(this.arrowPoly);
  $setVoltageColor(this, g, this.volts[0]);
  sim.powerCheckItem.on && $setColor(g, ($clinit_Color() , gray));
  drawThickLine_0();
  this.curcount_b = $updateDotCount(-this.ib, this.curcount_b);
  $drawDots(g, this.base, this.point1, this.curcount_b);
  this.curcount_c = $updateDotCount(-this.ic, this.curcount_c);
  $drawDots(g, this.coll[1], this.coll[0], this.curcount_c);
  this.curcount_e = $updateDotCount(-this.ie, this.curcount_e);
  $drawDots(g, this.emit[1], this.emit[0], this.curcount_e);
  $setVoltageColor(this, g, this.volts[0]);
  $setPowerColor_0(this, g);
  $fillPolygon(this.rectPoly);
  if ((this.iAmMouseElm || this.selected || sim.dragElm == this) && this.dy == 0) {
    $setColor(g, ($clinit_Color() , white));
    sign(this.dx);
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
  }
  $drawPosts(this, g);
}
;
_.getCurrentIntoNode = function getCurrentIntoNode_3(n){
  if (n == 0)
    return -this.ib;
  if (n == 1)
    return -this.ic;
  return -this.ie;
}
;
_.getDumpType = function getDumpType_48(){
  return 116;
}
;
_.getEditInfo = function getEditInfo_35(n){
  var ei;
  if (n == 0)
    return $setDimensionless(new EditInfo('Beta/hFE', this.beta_0, 10, $intern_18));
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Swap E/C', (this.flags & 1) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_33(arr){
  var vbc, vbe, vce;
  arr[0] = LS('transistor') + ' (' + (this.pnp == -1?'PNP)':'NPN)') + ' beta=' + $format_0(showFormat, this.beta_0);
  vbc = this.volts[0] - this.volts[1];
  vbe = this.volts[0] - this.volts[2];
  vce = this.volts[1] - this.volts[2];
  vbc * this.pnp > 0.2?(arr[1] = vbe * this.pnp > 0.2?'saturation':'reverse active'):(arr[1] = vbe * this.pnp > 0.2?'fwd active':'cutoff');
  arr[1] = LS(arr[1]);
  arr[2] = 'Ic = ' + myGetUnitText(this.ic, 'A', false);
  arr[3] = 'Ib = ' + myGetUnitText(this.ib, 'A', false);
  arr[4] = 'Vbe = ' + myGetUnitText(vbe, 'V', false);
  arr[5] = 'Vbc = ' + myGetUnitText(vbc, 'V', false);
  arr[6] = 'Vce = ' + myGetUnitText(vce, 'V', false);
  arr[7] = 'P = ' + myGetUnitText((this.volts[0] - this.volts[2]) * this.ib + (this.volts[1] - this.volts[2]) * this.ic, 'W', false);
}
;
_.getPost = function getPost_6(n){
  return n == 0?this.point1:n == 1?this.coll[0]:this.emit[0];
}
;
_.getPostCount = function getPostCount_32(){
  return 3;
}
;
_.getPower = function getPower_6(){
  return (this.volts[0] - this.volts[2]) * this.ib + (this.volts[1] - this.volts[2]) * this.ic;
}
;
_.getScopeUnits = function getScopeUnits_2(x_0){
  switch (x_0) {
    case 1:
    case 2:
    case 3:
      return 1;
    default:return 0;
  }
}
;
_.setEditValue = function setEditValue_33(n, ei){
  if (n == 0) {
    this.beta_0 = ei.value_0;
    $intern_70 * $wnd.Math.log($intern_70 / ($wnd.Math.sqrt(2) * 1.0E-13));
    this.noDiagonal = true;
  }
  if (n == 1) {
    $getState(ei.checkbox)?(this.flags |= 1):(this.flags &= -2);
    $setPoints_9(this);
  }
}
;
_.setPoints = function setPoints_30(){
  $setPoints_9(this);
}
;
_.beta_0 = 0;
_.curcount_b = 0;
_.curcount_c = 0;
_.curcount_e = 0;
_.ib = 0;
_.ic = 0;
_.ie = 0;
_.lastvbc = 0;
_.lastvbe = 0;
_.pnp = 0;
var Lcom_lushprojects_circuitjs1_client_TransistorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TransistorElm', 116);
function NTransistorElm(xx, yy){
  TransistorElm_0.call(this, xx, yy, false);
}

defineClass(531, 116, $intern_74, NTransistorElm);
_.getShortcut = function getShortcut_17(){
  return 110;
}
;
var Lcom_lushprojects_circuitjs1_client_NTransistorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'NTransistorElm', 531);
function NandGateElm(xx, yy){
  AndGateElm.call(this, xx, yy);
}

function NandGateElm_0(xa, ya, xb, yb, f, st){
  AndGateElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(265, 177, $intern_57, NandGateElm, NandGateElm_0);
_.getDumpType = function getDumpType_49(){
  return 151;
}
;
_.getGateName = function getGateName_0(){
  return 'NAND gate';
}
;
_.getShortcut = function getShortcut_18(){
  return 64;
}
;
_.isInverting = function isInverting_0(){
  return true;
}
;
var Lcom_lushprojects_circuitjs1_client_NandGateElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'NandGateElm', 265);
function NoiseElm(xx, yy){
  RailElm_0.call(this, xx, yy, 1);
}

function NoiseElm_0(xa, ya, xb, yb, f, st){
  RailElm_1.call(this, xa, ya, xb, yb, f, st);
  this.waveform = 1;
}

defineClass(254, 33, $intern_61, NoiseElm, NoiseElm_0);
_.drawRail = function drawRail_1(g){
  $drawRailText(this, (LS('Noise') , g));
}
;
_.getDumpType = function getDumpType_50(){
  return 110;
}
;
_.getEditInfo = function getEditInfo_36(n){
  if (n == 0)
    return $getEditInfo(this, 0);
  return null;
}
;
_.getShortcut = function getShortcut_19(){
  return 0;
}
;
_.getVoltage = function getVoltage_1(){
  return this.val_0;
}
;
_.val_0 = 0;
var Lcom_lushprojects_circuitjs1_client_NoiseElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'NoiseElm', 254);
function OrGateElm(xx, yy){
  GateElm.call(this, xx, yy);
}

function OrGateElm_0(xa, ya, xb, yb, f, st){
  GateElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(132, 176, $intern_57, OrGateElm, OrGateElm_0);
_.getDumpType = function getDumpType_51(){
  return 152;
}
;
_.getGateName = function getGateName_1(){
  return 'OR gate';
}
;
_.getGateText = function getGateText_1(){
  return '\u22651';
}
;
_.getShortcut = function getShortcut_20(){
  return 51;
}
;
_.setPoints = function setPoints_31(){
  var a, b, i, triPoints, ww2;
  $setPoints_2(this);
  if (sim.euroGatesCheckItem.on) {
    $createEuroGatePolygon(this);
    this.linePoints = null;
  }
   else {
    triPoints = $newPointArray(38);
    instanceOf(this, 148) && (this.linePoints = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, $intern_50, 14, 5, 0, 1));
    for (i = 0; i != 16; i++) {
      a = i / 16;
      b = 1 - a * a;
      $interpPoint2(this.lead1, this.lead2, triPoints[i], triPoints[32 - i], 0.5 + a / 2, b * this.hs2);
    }
    ww2 = this.ww == 0?this.dn * 2:this.ww * 2;
    for (i = 0; i != 5; i++) {
      a = (i - 2) / 2;
      b = 4 * (1 - a * a) - 2;
      $interpPoint_2(this.lead1, this.lead2, triPoints[33 + i], b / ww2, a * this.hs2);
      instanceOf(this, 148) && (this.linePoints[i] = $interpPoint_0(this.lead1, this.lead2, (b - 5) / ww2, a * this.hs2));
    }
    triPoints[16] = new Point_1(this.lead2);
    this.gatePoly = $createPolygon_1(triPoints);
  }
  if (this.isInverting()) {
    $interpPoint(this.point1, this.point2, 0.5 + (this.ww + 4) / this.dn);
    this.lead2 = $interpPoint(this.point1, this.point2, 0.5 + (this.ww + 8) / this.dn);
  }
}
;
var Lcom_lushprojects_circuitjs1_client_OrGateElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'OrGateElm', 132);
function NorGateElm(xx, yy){
  OrGateElm.call(this, xx, yy);
}

function NorGateElm_0(xa, ya, xb, yb, f, st){
  OrGateElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(266, 132, $intern_57, NorGateElm, NorGateElm_0);
_.getDumpType = function getDumpType_52(){
  return 153;
}
;
_.getGateName = function getGateName_2(){
  return 'NOR gate';
}
;
_.getShortcut = function getShortcut_21(){
  return 35;
}
;
_.isInverting = function isInverting_1(){
  return true;
}
;
var Lcom_lushprojects_circuitjs1_client_NorGateElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'NorGateElm', 266);
function $clinit_OTAElm(){
  $clinit_OTAElm = emptyMethod;
  modelExternalNodes_1 = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_17, 13, 15, [7, 5, 15, 1, 13]);
}

function $$init_9(this$static){
  this$static.curCount0 = 0;
  this$static.curCount1 = 0;
  this$static.curCount2 = 0;
  this$static.curCount3 = 0;
  this$static.posVolt = 9;
  this$static.negVolt = -9;
}

function OTAElm(xx, yy){
  $clinit_OTAElm();
  CompositeElm_0.call(this, xx, yy, modelString_1, modelExternalNodes_1);
  $$init_9(this);
  this.noDiagonal = true;
  castTo($get_3(this.compElmList, 0), 33).maxVoltage = this.negVolt;
  castTo($get_3(this.compElmList, 1), 33).maxVoltage = this.posVolt;
}

function OTAElm_0(xa, ya, xb, yb, f, st){
  $clinit_OTAElm();
  CompositeElm.call(this, xa, ya, xb, yb, f, st, modelString_1, modelExternalNodes_1);
  $$init_9(this);
  this.noDiagonal = true;
  castTo($get_3(this.compElmList, 0), 33).maxVoltage = this.negVolt;
  castTo($get_3(this.compElmList, 1), 33).maxVoltage = this.posVolt;
}

defineClass(298, 133, $intern_57, OTAElm, OTAElm_0);
_.draw = function draw_34(g){
  $setBbox_0(this, this.point1, this.point2, 48);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[3]);
  drawThickLine_0();
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  $setPowerColor_0(this, g);
  drawThickPolygon(this.triangle.npoints);
  $fillPolygon(this.arrowPoly1);
  $fillPolygon(this.arrowPoly2);
  drawThickLine_0();
  drawThickLine_0();
  drawThickCircle();
  drawThickCircle();
  $setFont(g, this.plusFont);
  $drawCenteredText(this, g, this.textp[0].x_0, this.textp[0].y_0 - 2, true);
  $drawCenteredText(this, g, this.textp[1].x_0, this.textp[1].y_0, true);
  this.curCount0 = $updateDotCount(-$getCurrentIntoNode(this, 0), this.curCount0);
  $drawDots(g, this.in1p[0], this.in1p[1], this.curCount0);
  this.curCount1 = $updateDotCount(-$getCurrentIntoNode(this, 1), this.curCount1);
  $drawDots(g, this.in2p[0], this.in2p[1], this.curCount0);
  this.curCount2 = $updateDotCount(-$getCurrentIntoNode(this, 2), this.curCount2);
  $drawDots(g, this.in3p[0], this.in3p[1], this.curCount2);
  this.curCount3 = $updateDotCount(-$getCurrentIntoNode(this, 3), this.curCount3);
  $drawDots(g, this.in4p[0], this.in4p[1], this.curCount3);
  $drawPosts(this, g);
}
;
_.getDumpType_0 = function getDumpType_53(){
  return 402;
}
;
_.getEditInfo = function getEditInfo_37(n){
  if (n == 0)
    return new EditInfo('Positive Supply Voltage (5-20V)', this.posVolt, 5, 20);
  if (n == 1)
    return new EditInfo('Negative Supply Voltage (V)', this.negVolt, -20, -5);
  return null;
}
;
_.getInfo = function getInfo_34(arr){
  arr[0] = 'OTA (LM13700 style)';
  arr[1] = 'Iabc = ' + myGetUnitText(-$getCurrentIntoNode(this, 3), 'A', false);
  arr[2] = 'V+ - V- = ' + myGetUnitText(this.volts[0] - this.volts[1], 'V', false);
}
;
_.setEditValue = function setEditValue_34(n, ei){
  n == 0 && (this.posVolt = ei.value_0);
  n == 1 && (this.negVolt = ei.value_0);
  castTo($get_3(this.compElmList, 0), 33).maxVoltage = this.negVolt;
  castTo($get_3(this.compElmList, 1), 33).maxVoltage = this.posVolt;
}
;
_.setPoints = function setPoints_32(){
  var d1, d2, hs, tris;
  $setPoints(this);
  if (this.dn > 94) {
    this.lead1 = $interpPoint_0(this.point1, this.point2, 1 - 94 / this.dn, 0);
    this.lead2 = this.point2;
    this.point2bis = this.point2;
  }
   else {
    this.lead1 = this.point1;
    this.lead2 = $interpPoint_0(this.point1, this.point2, 94 / this.dn, 0);
    this.point2bis = this.lead2;
  }
  hs = 32 * this.dsign;
  this.in1p = $newPointArray(2);
  this.in2p = $newPointArray(2);
  this.in3p = $newPointArray(2);
  this.in4p = $newPointArray(2);
  this.textp = $newPointArray(2);
  this.bar1 = $newPointArray(2);
  this.bar2 = $newPointArray(2);
  this.circCent = $newPointArray(2);
  $interpPoint2(this.point1, this.point2bis, this.in1p[0], this.in2p[0], 0, hs);
  $interpPoint2(this.lead1, this.lead2, this.in1p[1], this.in2p[1], 0, hs);
  $interpPoint2(this.lead1, this.lead2, this.textp[0], this.textp[1], 0.1, hs);
  this.in3p[0] = this.point1;
  this.in3p[1] = this.lead1;
  this.in4p[0] = $interpPoint_0(this.lead1, this.lead2, $intern_75, 32);
  this.in4p[1] = $interpPoint_0(this.lead1, this.lead2, $intern_75, 8);
  tris = $newPointArray(3);
  $interpPoint2(this.lead1, this.lead2, tris[0], tris[1], 0, 3 * hs / 2 | 0);
  tris[2] = $interpPoint(this.lead1, this.lead2, 0.6808510638297872);
  this.triangle = $createPolygon(tris[0], tris[1], tris[2]);
  this.circCent[0] = $interpPoint_0(this.lead1, this.lead2, 0.898936170212766, 0);
  this.circCent[1] = $interpPoint_0(this.lead1, this.lead2, 0.7819148936170213, 0);
  d1 = $interpPoint(this.in3p[1], this.in1p[1], 0.3333);
  d2 = $interpPoint(this.in3p[1], this.in1p[1], 0.6666);
  this.arrowPoly1 = $calcArrow(d1, d2, 8, 4);
  $interpPoint2(d1, d2, this.bar1[0], this.bar1[1], 1, 4);
  d1 = $interpPoint(this.in3p[1], this.in2p[1], 0.3333);
  d2 = $interpPoint(this.in3p[1], this.in2p[1], 0.6666);
  this.arrowPoly2 = $calcArrow(d1, d2, 8, 4);
  $interpPoint2(d1, d2, this.bar2[0], this.bar2[1], 1, 4);
  this.plusFont = new Font(14);
  $setPost(this, 0, this.in1p[0]);
  $setPost(this, 1, this.in2p[0]);
  $setPost(this, 2, this.in3p[0]);
  $setPost(this, 3, this.in4p[0]);
  $setPost(this, 4, this.point2bis);
}
;
_.curCount0 = 0;
_.curCount1 = 0;
_.curCount2 = 0;
_.curCount3 = 0;
_.negVolt = 0;
_.posVolt = 0;
var modelExternalNodes_1, modelString_1 = 'RailElm 4\rRailElm 10\rNTransistorElm 1 2 3\rNTransistorElm 3 1 4\rNTransistorElm 3 3 4\rNTransistorElm 5 6 2\rNTransistorElm 7 8 2\rPTransistorElm 9 6 10\rPTransistorElm 9 9 10\rPTransistorElm 6 12 9\rPTransistorElm 11 8 10\rPTransistorElm 11 11 10\rPTransistorElm 8 13 11\rNTransistorElm 14 14 4\rNTransistorElm 14 12 4\rNTransistorElm 12 13 14\rNTransistorElm 15 15 5\rNTransistorElm 15 15 7';
var Lcom_lushprojects_circuitjs1_client_OTAElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'OTAElm', 298);
function OhmMeterElm(xx, yy){
  CurrentElm.call(this, xx, yy);
}

function OhmMeterElm_0(xa, ya, xb, yb, f, st){
  CurrentElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(294, 170, $intern_57, OhmMeterElm, OhmMeterElm_0);
_.draw = function draw_35(g){
  var s;
  $draw2Leads(this, g);
  $setVoltageColor(this, g, (this.volts[0] + this.volts[1]) / 2);
  $setPowerColor_0(this, g);
  drawThickCircle();
  $drawCenteredText(this, g, this.center.x_0, this.center.y_0, true);
  $setBbox_0(this, this.point1, this.point2, 12);
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  if (sim.showValuesCheckItem.on && this.current_0 != 0) {
    s = myGetUnitText((this.volts[1] - this.volts[0]) / this.current_0, ohmString, true);
    (this.dx == 0 || this.dy == 0) && $drawValues(this, g, s, 12);
  }
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_54(){
  return 216;
}
;
_.getInfo = function getInfo_35(arr){
  arr[0] = 'ohmmeter';
  this.current_0 == 0?(arr[1] = 'R = \u221E'):(arr[1] = 'R = ' + myGetUnitText((this.volts[1] - this.volts[0]) / this.current_0, ohmString, false));
}
;
_.getScopeUnits = function getScopeUnits_3(x_0){
  return x_0 == 2?3:x_0 == 3?1:x_0 == 1?2:0;
}
;
_.setPoints = function setPoints_33(){
  $setPoints_4(this);
  $calcLeads(this, 26);
}
;
var Lcom_lushprojects_circuitjs1_client_OhmMeterElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'OhmMeterElm', 294);
function $setSize_2(this$static, s){
  this$static.opsize = s;
  this$static.opheight = 8 * s;
  this$static.opwidth = 13 * s;
  this$static.flags = this$static.flags & -3 | (s == 1?2:0);
}

function OpAmpElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.noDiagonal = true;
  this.maxOut = 15;
  this.minOut = -15;
  $setSize_2(this, sim.smallGridCheckItem.on?1:2);
}

function OpAmpElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.maxOut = 15;
  this.minOut = -15;
  try {
    this.maxOut = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.minOut = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.volts[0] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.volts[1] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.noDiagonal = true;
  $setSize_2(this, (f & 2) != 0?1:2);
}

defineClass(204, 4, $intern_57, OpAmpElm, OpAmpElm_0);
_.draw = function draw_36(g){
  $setBbox_0(this, this.point1, this.point2, this.opheight * 2);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[1]);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  $setPowerColor_0(this, g);
  drawThickPolygon(this.triangle.npoints);
  $setFont(g, this.plusFont);
  $drawCenteredText(this, g, this.textp[0].x_0, this.textp[0].y_0 - 2, true);
  $drawCenteredText(this, g, this.textp[1].x_0, this.textp[1].y_0, true);
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.point2, this.lead2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getCurrentIntoNode = function getCurrentIntoNode_4(n){
  if (n == 2)
    return -this.current_0;
  return 0;
}
;
_.getDumpType = function getDumpType_55(){
  return 97;
}
;
_.getEditInfo = function getEditInfo_38(n){
  if (n == 0)
    return new EditInfo('Max Output (V)', this.maxOut, 1, 20);
  if (n == 1)
    return new EditInfo('Min Output (V)', this.minOut, -20, 0);
  return null;
}
;
_.getInfo = function getInfo_36(arr){
  var vo;
  arr[0] = 'op-amp';
  arr[1] = 'V+ = ' + myGetUnitText(this.volts[1], 'V', false);
  arr[2] = 'V- = ' + myGetUnitText(this.volts[0], 'V', false);
  vo = $wnd.Math.max($wnd.Math.min(this.volts[2], this.maxOut), this.minOut);
  arr[3] = 'Vout = ' + myGetUnitText(vo, 'V', false);
  arr[4] = 'Iout = ' + myGetUnitText(-this.current_0, 'A', false);
  arr[5] = 'range = ' + myGetUnitText(this.minOut, 'V', false) + ' to ' + myGetUnitText(this.maxOut, 'V', false);
}
;
_.getPost = function getPost_7(n){
  return n == 0?this.in1p[0]:n == 1?this.in2p[0]:this.point2;
}
;
_.getPostCount = function getPostCount_33(){
  return 3;
}
;
_.getPower = function getPower_7(){
  return this.volts[2] * this.current_0;
}
;
_.getShortcut = function getShortcut_22(){
  return 97;
}
;
_.getVoltageDiff = function getVoltageDiff_15(){
  return this.volts[2] - this.volts[1];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_29(){
  return 1;
}
;
_.setEditValue = function setEditValue_35(n, ei){
  n == 0 && (this.maxOut = ei.value_0);
  n == 1 && (this.minOut = ei.value_0);
}
;
_.setPoints = function setPoints_34(){
  var hs, tris, ww;
  $setPoints(this);
  this.dn > 150 && this == sim.dragElm && $setSize_2(this, 2);
  ww = this.opwidth;
  ww > this.dn / 2 && (ww = round_int(this.dn / 2));
  $calcLeads(this, ww * 2);
  hs = this.opheight * this.dsign;
  (this.flags & 1) != 0 && (hs = -hs);
  this.in1p = $newPointArray(2);
  this.in2p = $newPointArray(2);
  this.textp = $newPointArray(2);
  $interpPoint2(this.point1, this.point2, this.in1p[0], this.in2p[0], 0, hs);
  $interpPoint2(this.lead1, this.lead2, this.in1p[1], this.in2p[1], 0, hs);
  $interpPoint2(this.lead1, this.lead2, this.textp[0], this.textp[1], 0.2, hs);
  tris = $newPointArray(2);
  $interpPoint2(this.lead1, this.lead2, tris[0], tris[1], 0, hs * 2);
  this.triangle = $createPolygon(tris[0], tris[1], this.lead2);
  this.plusFont = new Font(this.opsize == 2?14:10);
}
;
_.maxOut = 0;
_.minOut = 0;
_.opheight = 0;
_.opsize = 0;
_.opwidth = 0;
var Lcom_lushprojects_circuitjs1_client_OpAmpElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'OpAmpElm', 204);
function OpAmpSwapElm(xx, yy){
  OpAmpElm.call(this, xx, yy);
  this.flags |= 1;
}

defineClass(539, 204, $intern_57, OpAmpSwapElm);
_.getShortcut = function getShortcut_23(){
  return 65;
}
;
var Lcom_lushprojects_circuitjs1_client_OpAmpSwapElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'OpAmpSwapElm', 539);
function OutputElm(xx, yy){
  CircuitElm.call(this, xx, yy);
}

function OutputElm_0(xa, ya, xb, yb, f){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
}

defineClass(171, 4, {4:1, 8:1, 171:1}, OutputElm, OutputElm_0);
_.draw = function draw_37(g){
  var f, selected;
  selected = this.iAmMouseElm || this.selected;
  f = new Font(14);
  $setFont(g, f);
  $setColor(g, selected?selectColor:whiteColor);
  (this.flags & 1) != 0?myGetUnitText(this.volts[0], 'V', false):'out';
  $interpPoint_1(this.point1, this.point2, this.lead1, 1 - ((round_int(null.$_nullMethod().$_nullMethod()) / 2 | 0) + 8) / this.dn);
  $setBbox_0(this, this.point1, this.lead1, 0);
  $drawCenteredText(this, g, this.x2, this.y2, true);
  $setVoltageColor(this, g, this.volts[0]);
  selected && $setColor(g, selectColor);
  drawThickLine_0();
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_56(){
  return 79;
}
;
_.getEditInfo = function getEditInfo_39(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Show Voltage', (this.flags & 1) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_37(arr){
  arr[0] = 'output';
  arr[1] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
}
;
_.getPostCount = function getPostCount_34(){
  return 1;
}
;
_.getVoltageDiff = function getVoltageDiff_16(){
  return this.volts[0];
}
;
_.setEditValue = function setEditValue_36(n, ei){
  n == 0 && (this.flags = $getState(ei.checkbox)?this.flags | 1:this.flags & -2);
}
;
_.setPoints = function setPoints_35(){
  $setPoints(this);
  this.lead1 = new Point;
}
;
var Lcom_lushprojects_circuitjs1_client_OutputElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'OutputElm', 171);
function PDarlingtonElm(xx, yy){
  $clinit_DarlingtonElm();
  DarlingtonElm_0.call(this, xx, yy, true);
}

defineClass(545, 207, $intern_57, PDarlingtonElm);
var Lcom_lushprojects_circuitjs1_client_PDarlingtonElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PDarlingtonElm', 545);
function PJfetElm(xx, yy){
  JfetElm_0.call(this, xx, yy, true);
}

defineClass(543, 205, $intern_57, PJfetElm);
var Lcom_lushprojects_circuitjs1_client_PJfetElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PJfetElm', 543);
function PMosfetElm(xx, yy){
  MosfetElm_0.call(this, xx, yy, true);
}

defineClass(541, 147, $intern_57, PMosfetElm);
_.getShortcut = function getShortcut_24(){
  return 80;
}
;
var Lcom_lushprojects_circuitjs1_client_PMosfetElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PMosfetElm', 541);
function PTransistorElm(xx, yy){
  TransistorElm_0.call(this, xx, yy, true);
}

defineClass(532, 116, $intern_74, PTransistorElm);
_.getShortcut = function getShortcut_25(){
  return 112;
}
;
var Lcom_lushprojects_circuitjs1_client_PTransistorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PTransistorElm', 532);
function PhaseCompElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function PhaseCompElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(274, 18, $intern_57, PhaseCompElm, PhaseCompElm_0);
_.getChipName = function getChipName_16(){
  return 'phase comparator';
}
;
_.getDumpType = function getDumpType_57(){
  return 161;
}
;
_.getPostCount = function getPostCount_35(){
  return 3;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_30(){
  return 1;
}
;
_.setupPins = function setupPins_16(){
  this.sizeX = 2;
  this.sizeY = 2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 3, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, 'I1');
  this.pins[1] = new ChipElm$Pin(this, 1, 2, 'I2');
  this.pins[2] = new ChipElm$Pin(this, 0, 3, 'O');
  this.pins[2].output = true;
}
;
var Lcom_lushprojects_circuitjs1_client_PhaseCompElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PhaseCompElm', 274);
function PisoShiftElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function PisoShiftElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(273, 18, $intern_57, PisoShiftElm, PisoShiftElm_0);
_.getChipName = function getChipName_17(){
  return 'PISO shift register';
}
;
_.getDumpType = function getDumpType_58(){
  return 186;
}
;
_.getPostCount = function getPostCount_36(){
  return 11;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_31(){
  return 1;
}
;
_.setupPins = function setupPins_17(){
  this.sizeX = 10;
  this.sizeY = 3;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 11, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 1, 2, 'L');
  this.pins[1] = new ChipElm$Pin(this, 2, 2, '');
  this.pins[1].clock = true;
  this.pins[2] = new ChipElm$Pin(this, 1, 0, 'I7');
  this.pins[3] = new ChipElm$Pin(this, 2, 0, 'I6');
  this.pins[4] = new ChipElm$Pin(this, 3, 0, 'I5');
  this.pins[5] = new ChipElm$Pin(this, 4, 0, 'I4');
  this.pins[6] = new ChipElm$Pin(this, 5, 0, 'I3');
  this.pins[7] = new ChipElm$Pin(this, 6, 0, 'I2');
  this.pins[8] = new ChipElm$Pin(this, 7, 0, 'I1');
  this.pins[9] = new ChipElm$Pin(this, 8, 0, 'I0');
  this.pins[10] = new ChipElm$Pin(this, 1, 3, 'Q');
  this.pins[10].output = true;
}
;
var Lcom_lushprojects_circuitjs1_client_PisoShiftElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PisoShiftElm', 273);
function $equals(this$static, other){
  var result, that;
  result = false;
  if (instanceOf(other, 14)) {
    that = castTo(other, 14);
    result = this$static.x_0 == that.x_0 && this$static.y_0 == that.y_0;
  }
  return result;
}

function Point(){
  this.x_0 = 0;
  this.y_0 = 0;
}

function Point_0(i, j){
  this.x_0 = i;
  this.y_0 = j;
}

function Point_1(p){
  this.x_0 = p.x_0;
  this.y_0 = p.y_0;
}

defineClass(14, 1, {14:1}, Point, Point_0, Point_1);
_.equals_0 = function equals_5(other){
  return $equals(this, other);
}
;
_.hashCode_0 = function hashCode_7(){
  return 41 * (41 + this.x_0) + this.y_0;
}
;
_.toString_0 = function toString_11(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_lushprojects_circuitjs1_client_Point_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Point', 14);
function PolarCapacitorElm(xx, yy){
  CapacitorElm.call(this, xx, yy);
  this.maxNegativeVoltage = 1;
}

function PolarCapacitorElm_0(xa, ya, xb, yb, f, st){
  CapacitorElm_0.call(this, xa, ya, xb, yb, f, st);
  this.maxNegativeVoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(239, 115, $intern_66, PolarCapacitorElm, PolarCapacitorElm_0);
_.draw = function draw_38(g){
  $draw(this, g);
  $setColor(g, ($clinit_Color() , white));
  $setFont(g, unitsFont);
  round_int(null.$_nullMethod().$_nullMethod());
  null.$_nullMethod();
}
;
_.getDumpType = function getDumpType_59(){
  return 209;
}
;
_.getEditInfo = function getEditInfo_40(n){
  if (n == 2)
    return new EditInfo('Max Reverse Voltage', this.maxNegativeVoltage, 0, 0);
  return $getEditInfo_1(this, n);
}
;
_.getInfo = function getInfo_38(arr){
  $getInfo_0(this, arr);
  arr[0] = 'capacitor (polarized)';
}
;
_.getShortcut = function getShortcut_26(){
  return 67;
}
;
_.setEditValue = function setEditValue_37(n, ei){
  n == 2 && ei.value_0 >= 0 && (this.maxNegativeVoltage = ei.value_0);
  n == 0 && ei.value_0 > 0 && (this.capacitance = ei.value_0);
  n == 1 && ($getState(ei.checkbox)?(this.flags &= -3):(this.flags |= 2));
}
;
_.setPoints = function setPoints_36(){
  var f, i, q;
  $setPoints_3(this);
  f = (this.dn / 2 - 4) / this.dn;
  this.platePoints = $newPointArray(8);
  for (i = 0; i <= 7; i++) {
    q = (i - 3.5) / 3.5;
    this.platePoints[i] = $interpPoint_0(this.plate2[0], this.plate2[1], i / 7, 5 * (1 - $wnd.Math.sqrt(1 - q * q)));
  }
  this.plusPoint = $interpPoint_0(this.point1, this.point2, f - 8 / this.dn, -10 * this.dsign);
  this.y2 > this.y_0 && (this.plusPoint.y_0 += 4);
  this.y_0 > this.y2 && (this.plusPoint.y_0 += 3);
}
;
_.maxNegativeVoltage = 0;
var Lcom_lushprojects_circuitjs1_client_PolarCapacitorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PolarCapacitorElm', 239);
function $addPoint(this$static, x_0, y_0){
  var newLength;
  if (this$static.npoints >= this$static.xpoints.length || this$static.npoints >= this$static.ypoints.length) {
    newLength = this$static.npoints * 2;
    newLength < 4?(newLength = 4):(newLength & newLength - 1) != 0 && (newLength = highestOneBit(newLength));
    this$static.xpoints = $expand(this$static.xpoints, newLength);
    this$static.ypoints = $expand(this$static.ypoints, newLength);
  }
  this$static.xpoints[this$static.npoints] = x_0;
  this$static.ypoints[this$static.npoints] = y_0;
  ++this$static.npoints;
}

function $expand(in_0, newlen){
  var i, out;
  out = initUnidimensionalArray(I_classLit, $intern_17, 13, newlen, 15, 1);
  for (i = 0; i < in_0.length; i++)
    out[i] = in_0[i];
  return out;
}

function Polygon(){
  this.xpoints = initUnidimensionalArray(I_classLit, $intern_17, 13, 4, 15, 1);
  this.ypoints = initUnidimensionalArray(I_classLit, $intern_17, 13, 4, 15, 1);
}

defineClass(181, 1, {}, Polygon);
_.npoints = 0;
var Lcom_lushprojects_circuitjs1_client_Polygon_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Polygon', 181);
function $createSlider(this$static){
  var value_0;
  $addWidgetToVerticalPanel(sim, this$static.label_0 = new Label_0(this$static.sliderText));
  $addStyleName(this$static.label_0);
  value_0 = round_int(this$static.position * 100);
  $addWidgetToVerticalPanel(sim, this$static.slider = new Scrollbar_0(value_0, this$static, this$static));
}

function $execute_0(this$static){
  sim.analyzeFlag = true;
  $setPoints_10(this$static);
}

function $setPoints_10(this$static){
  var clen, myLen, offset, soff;
  $setPoints(this$static);
  offset = 0;
  if (abs_0(this$static.dx) > abs_0(this$static.dy)) {
    myLen = 2 * sim.gridSize * signum(this$static.dx) * ((valueOf($wnd.Math.abs(this$static.dx)).value_0 + 2 * sim.gridSize - 1) / (2 * sim.gridSize) | 0);
    this$static.point2.x_0 = this$static.point1.x_0 + myLen;
    offset = this$static.dx < 0?this$static.dy:-this$static.dy;
    this$static.point2.y_0 = this$static.point1.y_0;
  }
   else {
    myLen = 2 * sim.gridSize * signum(this$static.dy) * ((valueOf($wnd.Math.abs(this$static.dy)).value_0 + 2 * sim.gridSize - 1) / (2 * sim.gridSize) | 0);
    if (this$static.dy != 0) {
      this$static.point2.y_0 = this$static.point1.y_0 + myLen;
      offset = this$static.dy > 0?this$static.dx:-this$static.dx;
      this$static.point2.x_0 = this$static.point1.x_0;
    }
  }
  offset == 0 && (offset = sim.gridSize);
  this$static.dn = distance(this$static.point1, this$static.point2);
  $calcLeads(this$static, 32);
  this$static.position = this$static.slider.val_0 * 0.0099 + 0.005;
  soff = round_int((this$static.position - 0.5) * 32);
  this$static.post3 = $interpPoint_0(this$static.point1, this$static.point2, 0.5, offset);
  this$static.corner2 = $interpPoint_0(this$static.point1, this$static.point2, soff / this$static.dn + 0.5, offset);
  this$static.arrowPoint = $interpPoint_0(this$static.point1, this$static.point2, soff / this$static.dn + 0.5, 8 * (offset < 0?-1:offset == 0?0:1));
  this$static.midpoint = $interpPoint(this$static.point1, this$static.point2, soff / this$static.dn + 0.5);
  this$static.arrow1 = new Point;
  this$static.arrow2 = new Point;
  clen = (offset < 0?-offset:offset) - 8;
  $interpPoint2(this$static.corner2, this$static.arrowPoint, this$static.arrow1, this$static.arrow2, (clen - 8) / clen, 8);
  this$static.ps3 = new Point;
  this$static.ps4 = new Point;
}

function PotElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.maxResistance = $intern_18;
  this.position = 0.5;
  this.sliderText = 'Resistance';
  $createSlider(this);
}

function PotElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.maxResistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.position = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.sliderText = $nextToken(st);
  while ($hasMoreTokens(st))
    this.sliderText += ' ' + $nextToken(st);
  $createSlider(this);
}

defineClass(241, 4, {134:1, 29:1, 4:1, 8:1}, PotElm, PotElm_0);
_.calculateCurrent = function calculateCurrent_10(){
  if (this.resistance1 == 0)
    return;
  this.current1 = (this.volts[0] - this.volts[2]) / this.resistance1;
  this.current2 = (this.volts[1] - this.volts[2]) / this.resistance2;
  this.current3 = -this.current1 - this.current2;
}
;
_.delete_0 = function delete_3(){
  $removeWidgetFromVerticalPanel(sim, this.label_0);
  $removeWidgetFromVerticalPanel(sim, this.slider);
}
;
_.draw = function draw_39(g){
  var divide, hs, i, nx, ox, v, v1, v2, v3;
  ox = 0;
  hs = sim.euroResistorCheckItem.on?6:8;
  v1 = this.volts[0];
  v2 = this.volts[1];
  v3 = this.volts[2];
  $setBbox_0(this, this.point1, this.point2, hs);
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  divide = round_int(16 * this.position);
  if (sim.euroResistorCheckItem.on) {
    $setColor(g, $getVoltageColor(this, g, v1));
    $interpPoint2(this.lead1, this.lead2, ps1, ps2, 0, hs);
    drawThickLine_0();
    for (i = 0; i != 16; i++) {
      v = v1 + (v3 - v1) * i / divide;
      i >= divide && (v = v3 + (v2 - v3) * (i - divide) / (16 - divide));
      $setColor(g, $getVoltageColor(this, g, v));
      $interpPoint2(this.lead1, this.lead2, ps1, ps2, i * $intern_76, hs);
      $interpPoint2(this.lead1, this.lead2, this.ps3, this.ps4, (i + 1) * $intern_76, hs);
      drawThickLine_0();
      drawThickLine_0();
    }
    $interpPoint2(this.lead1, this.lead2, ps1, ps2, 1, hs);
    drawThickLine_0();
  }
   else {
    for (i = 0; i != 16; i++) {
      switch (i & 3) {
        case 0:
          nx = 1;
          break;
        case 2:
          nx = -1;
          break;
        default:nx = 0;
      }
      v = v1 + (v3 - v1) * i / divide;
      i >= divide && (v = v3 + (v2 - v3) * (i - divide) / (16 - divide));
      $setColor(g, $getVoltageColor(this, g, v));
      $interpPoint_2(this.lead1, this.lead2, ps1, i * $intern_76, hs * ox);
      $interpPoint_2(this.lead1, this.lead2, ps2, (i + 1) * $intern_76, hs * nx);
      drawThickLine_0();
      ox = nx;
    }
  }
  $setColor(g, $getVoltageColor(this, g, v3));
  drawThickLine_0();
  drawThickLine_0();
  drawThickLine_0();
  drawThickLine_0();
  this.curcount1 = $updateDotCount(this.current1, this.curcount1);
  this.curcount2 = $updateDotCount(this.current2, this.curcount2);
  this.curcount3 = $updateDotCount(this.current3, this.curcount3);
  if (sim.dragElm != this) {
    $drawDots(g, this.point1, this.midpoint, this.curcount1);
    $drawDots(g, this.point2, this.midpoint, this.curcount2);
    $drawDots(g, this.post3, this.corner2, this.curcount3);
    $drawDots(g, this.corner2, this.midpoint, this.curcount3 + distance(this.post3, this.corner2));
  }
  $drawPosts(this, g);
}
;
_.execute_0 = function execute_20(){
  $execute_0(this);
}
;
_.getDumpType = function getDumpType_60(){
  return 174;
}
;
_.getEditInfo = function getEditInfo_41(n){
  var ei;
  if (n == 0)
    return new EditInfo('Resistance (ohms)', this.maxResistance, 0, 0);
  if (n == 1) {
    ei = new EditInfo('Slider Text', 0, -1, -1);
    ei.text_0 = this.sliderText;
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_39(arr){
  arr[0] = 'potentiometer';
  arr[1] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[2] = 'R1 = ' + myGetUnitText(this.resistance1, ohmString, false);
  arr[3] = 'R2 = ' + myGetUnitText(this.resistance2, ohmString, false);
  arr[4] = 'I1 = ' + myGetUnitText($wnd.Math.abs(this.current1), 'A', false);
  arr[5] = 'I2 = ' + myGetUnitText($wnd.Math.abs(this.current2), 'A', false);
}
;
_.getPost = function getPost_8(n){
  return n == 0?this.point1:n == 1?this.point2:this.post3;
}
;
_.getPostCount = function getPostCount_37(){
  return 3;
}
;
_.onMouseWheel = function onMouseWheel_0(e){
  !!this.slider && $onMouseWheel(this.slider, e);
}
;
_.setEditValue = function setEditValue_38(n, ei){
  n == 0 && (this.maxResistance = ei.value_0);
  if (n == 1) {
    this.sliderText = $getText(ei.textf);
    $setText_0(this.label_0, this.sliderText);
  }
}
;
_.setMouseElm = function setMouseElm_0(v){
  this.iAmMouseElm = v;
  !!this.slider && $draw_1(this.slider);
}
;
_.setPoints = function setPoints_37(){
  $setPoints_10(this);
}
;
_.curcount1 = 0;
_.curcount2 = 0;
_.curcount3 = 0;
_.current1 = 0;
_.current2 = 0;
_.current3 = 0;
_.maxResistance = 0;
_.position = 0;
_.resistance1 = 0;
_.resistance2 = 0;
var Lcom_lushprojects_circuitjs1_client_PotElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PotElm', 241);
function $$init_10(this$static){
  this$static.rmsV = 0;
  this$static.binaryLevel = 0;
  this$static.frequency = 0;
  this$static.pulseWidth = 0;
  this$static.dutyCycle = 0;
  this$static.selectedValue = 0;
}

function ProbeElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $$init_10(this);
  this.meter = 0;
  this.flags = 1;
}

function ProbeElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $$init_10(this);
  this.meter = 0;
  try {
    this.meter = (new Integer_0($nextToken(st))).value_0;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
}

defineClass(172, 4, {4:1, 8:1, 172:1}, ProbeElm, ProbeElm_0);
_.draw = function draw_40(g){
  var f, len, plusPoint, s, selected;
  $setBbox_0(this, this.point1, this.point2, 8);
  selected = this.iAmMouseElm || this.selected;
  len = selected || sim.dragElm == this || (this.flags & 1) != 0?16:this.dn - 32;
  $calcLeads(this, round_int(len));
  $setVoltageColor(this, g, this.volts[0]);
  selected && $setColor(g, selectColor);
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[1]);
  selected && $setColor(g, selectColor);
  drawThickLine_0();
  f = new Font(14);
  $setFont(g, f);
  if ((this.flags & 1) != 0) {
    s = '';
    switch (this.meter) {
      case 0:
        s = myGetUnitText(this.volts[0] - this.volts[1], 'V', false);
        break;
      case 1:
        s = myGetUnitText(this.rmsV, 'V(rms)', false);
        break;
      case 2:
        s = myGetUnitText(this.lastMaxV, 'Vpk', false);
        break;
      case 3:
        s = myGetUnitText(this.lastMinV, 'Vmin', false);
        break;
      case 4:
        s = myGetUnitText(this.lastMaxV - this.lastMinV, 'Vp2p', false);
        break;
      case 5:
        s = this.binaryLevel + '';
        break;
      case 6:
        s = myGetUnitText(this.frequency, 'Hz', false);
        break;
      case 8:
        s = myGetUnitText(this.pulseWidth, 'S', false);
        break;
      case 9:
        s = $format_0(showFormat, this.dutyCycle);
    }
    $drawValues(this, g, s, 4);
  }
  $setColor(g, ($clinit_Color() , white));
  $setFont(g, unitsFont);
  plusPoint = $interpPoint_0(this.point1, this.point2, (this.dn / 2 - len / 2 - 4) / this.dn, -10 * this.dsign);
  this.y2 > this.y_0 && (plusPoint.y_0 += 4);
  this.y_0 > this.y2 && (plusPoint.y_0 += 3);
  round_int(null.$_nullMethod().$_nullMethod());
  null.$_nullMethod();
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_61(){
  return 112;
}
;
_.getEditInfo = function getEditInfo_42(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Show Value', (this.flags & 1) != 0);
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('Value', this.selectedValue, -1, -1);
    ei.choice = new Choice;
    $insertItem(ei.choice, LS('Voltage'));
    $insertItem(ei.choice, LS('RMS Voltage'));
    $insertItem(ei.choice, LS('Max Voltage'));
    $insertItem(ei.choice, LS('Min Voltage'));
    $insertItem(ei.choice, LS('P2P Voltage'));
    $insertItem(ei.choice, LS('Binary Value'));
    $select(ei.choice, this.meter);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_40(arr){
  arr[0] = 'voltmeter';
  arr[1] = 'Vd = ' + myGetUnitText(this.volts[0] - this.volts[1], 'V', false);
}
;
_.setEditValue = function setEditValue_39(n, ei){
  n == 0 && ($getState(ei.checkbox)?(this.flags = 1):(this.flags &= -2));
  n == 1 && (this.meter = ei.choice.element.selectedIndex);
}
;
_.setPoints = function setPoints_38(){
  $setPoints(this);
  $interpPoint(this.point1, this.point2, 0.5);
}
;
_.binaryLevel = 0;
_.dutyCycle = 0;
_.frequency = 0;
_.lastMaxV = 0;
_.lastMinV = 0;
_.meter = 0;
_.pulseWidth = 0;
_.rmsV = 0;
_.selectedValue = 0;
var Lcom_lushprojects_circuitjs1_client_ProbeElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ProbeElm', 172);
function PushSwitchElm(xx, yy){
  SwitchElm_1.call(this, xx, yy, true);
}

defineClass(538, 85, $intern_73, PushSwitchElm);
_.getShortcut = function getShortcut_27(){
  return 0;
}
;
var Lcom_lushprojects_circuitjs1_client_PushSwitchElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'PushSwitchElm', 538);
function $getBooleanValue(this$static, key, def){
  var val;
  val = castToString($getStringValue(this$static.map_0, key));
  return val == null?def:val == '1' || $equalsIgnoreCase(val, 'true');
}

function QueryParameters(){
  var i, nameValues, pair, search;
  this.map_0 = new HashMap;
  search = $wnd.location.search;
  if (search != null && search.length > 0) {
    nameValues = $split_0(search.substr(1), '&');
    for (i = 0; i < nameValues.length; i++) {
      pair = $split_0(nameValues[i], '=');
      $putStringValue(this.map_0, pair[0], (throwIfNull('encodedURL', pair[1]) , decodeURI(pair[1])));
    }
  }
}

defineClass(366, 1, {}, QueryParameters);
var Lcom_lushprojects_circuitjs1_client_QueryParameters_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'QueryParameters', 366);
function $contains(this$static, X, Y){
  var h, w, x_0, y_0;
  w = this$static.width_0;
  h = this$static.height;
  if ((w | h) < 0) {
    return false;
  }
  x_0 = this$static.x_0;
  y_0 = this$static.y_0;
  if (X < x_0 || Y < y_0) {
    return false;
  }
  w += x_0;
  h += y_0;
  return (w < x_0 || w > X) && (h < y_0 || h > Y);
}

function $equals_0(this$static, obj){
  var r;
  if (instanceOf(obj, 38)) {
    r = castTo(obj, 38);
    return this$static.x_0 == r.x_0 && this$static.y_0 == r.y_0 && this$static.width_0 == r.width_0 && this$static.height == r.height;
  }
  return this$static === obj;
}

function $intersects(this$static, r){
  var rh, rw, rx, ry, th, tw, tx, ty;
  tw = this$static.width_0;
  th = this$static.height;
  rw = r.width_0;
  rh = r.height;
  if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0) {
    return false;
  }
  tx = this$static.x_0;
  ty = this$static.y_0;
  rx = r.x_0;
  ry = r.y_0;
  rw += rx;
  rh += ry;
  tw += tx;
  th += ty;
  return (rw < rx || rw > tx) && (rh < ry || rh > ty) && (tw < tx || tw > rx) && (th < ty || th > ry);
}

function $setBounds(this$static, x_0, y_0, width_0, height){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.width_0 = width_0;
  this$static.height = height;
}

function $union(this$static, r){
  var rx1, rx2, ry1, ry2, tx1, tx2, ty1, ty2;
  tx2 = this$static.width_0;
  ty2 = this$static.height;
  if (lt(or_0(tx2, ty2), 0)) {
    return new Rectangle_2(r);
  }
  rx2 = r.width_0;
  ry2 = r.height;
  if (lt(or_0(rx2, ry2), 0)) {
    return new Rectangle_2(this$static);
  }
  tx1 = this$static.x_0;
  ty1 = this$static.y_0;
  tx2 = add_2(tx2, tx1);
  ty2 = add_2(ty2, ty1);
  rx1 = r.x_0;
  ry1 = r.y_0;
  rx2 = add_2(rx2, rx1);
  ry2 = add_2(ry2, ry1);
  tx1 > rx1 && (tx1 = rx1);
  ty1 > ry1 && (ty1 = ry1);
  compare_0(tx2, rx2) < 0 && (tx2 = rx2);
  compare_0(ty2, ry2) < 0 && (ty2 = ry2);
  tx2 = sub_1(tx2, tx1);
  ty2 = sub_1(ty2, ty1);
  compare_0(tx2, $intern_0) > 0 && (tx2 = $intern_0);
  compare_0(ty2, $intern_0) > 0 && (ty2 = $intern_0);
  return new Rectangle_0(tx1, ty1, toInt(tx2), toInt(ty2));
}

function Rectangle(){
  this.x_0 = 0;
  this.y_0 = 0;
  this.width_0 = 0;
  this.height = 0;
}

function Rectangle_0(x_0, y_0, width_0, height){
  this.x_0 = x_0;
  this.y_0 = y_0;
  this.width_0 = width_0;
  this.height = height;
}

function Rectangle_1(pt){
  this.x_0 = pt.x_0;
  this.y_0 = pt.y_0;
  this.width_0 = 0;
  this.height = 0;
}

function Rectangle_2(r){
  Rectangle_0.call(this, r.x_0, r.y_0, r.width_0, r.height);
}

defineClass(38, 1, {38:1}, Rectangle, Rectangle_0, Rectangle_1, Rectangle_2);
_.equals_0 = function equals_6(obj){
  return $equals_0(this, obj);
}
;
_.toString_0 = function toString_12(){
  return 'Rect(' + this.x_0 + ',' + this.y_0 + ',' + this.width_0 + ',' + this.height + ')';
}
;
_.height = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_lushprojects_circuitjs1_client_Rectangle_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Rectangle', 38);
function $setPoints_11(this$static){
  var i, j, x_0;
  $setPoints(this$static);
  $setupPoles(this$static);
  $allocNodes(this$static);
  this$static.openhs = -this$static.dsign * 16;
  $calcLeads(this$static, 32);
  this$static.swposts = initMultidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, [$intern_3, $intern_50], [102, 14], 0, [this$static.poleCount, 3], 2);
  this$static.swpoles = initMultidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, [$intern_3, $intern_50], [102, 14], 0, [this$static.poleCount, 3], 2);
  for (i = 0; i != this$static.poleCount; i++) {
    for (j = 0; j != 3; j++) {
      setCheck(this$static.swposts[i], j, new Point);
      setCheck(this$static.swpoles[i], j, new Point);
    }
    $interpPoint_2(this$static.lead1, this$static.lead2, this$static.swpoles[i][0], 0, -this$static.openhs * 3 * i);
    $interpPoint_2(this$static.lead1, this$static.lead2, this$static.swpoles[i][1], 1, -this$static.openhs * 3 * i - this$static.openhs);
    $interpPoint_2(this$static.lead1, this$static.lead2, this$static.swpoles[i][2], 1, -this$static.openhs * 3 * i + this$static.openhs);
    $interpPoint_2(this$static.point1, this$static.point2, this$static.swposts[i][0], 0, -this$static.openhs * 3 * i);
    $interpPoint_2(this$static.point1, this$static.point2, this$static.swposts[i][1], 1, -this$static.openhs * 3 * i - this$static.openhs);
    $interpPoint_2(this$static.point1, this$static.point2, this$static.swposts[i][2], 1, -this$static.openhs * 3 * i + this$static.openhs);
  }
  this$static.coilPosts = $newPointArray(2);
  this$static.coilLeads = $newPointArray(2);
  this$static.ptSwitch = $newPointArray(this$static.poleCount);
  x_0 = (this$static.flags & 1) != 0?1:0;
  $interpPoint_2(this$static.point1, this$static.point2, this$static.coilPosts[0], x_0, this$static.openhs * 2);
  $interpPoint_2(this$static.point1, this$static.point2, this$static.coilPosts[1], x_0, this$static.openhs * 3);
  $interpPoint_2(this$static.point1, this$static.point2, this$static.coilLeads[0], 0.5, this$static.openhs * 2);
  $interpPoint_2(this$static.point1, this$static.point2, this$static.coilLeads[1], 0.5, this$static.openhs * 3);
  this$static.lines = $newPointArray(this$static.poleCount * 2);
}

function $setupPoles(this$static){
  this$static.nCoil1 = 3 * this$static.poleCount;
  this$static.nCoil2 = this$static.nCoil1 + 1;
  this$static.nCoil3 = this$static.nCoil1 + 2;
  if (this$static.switchCurrent == null || this$static.switchCurrent.length != this$static.poleCount) {
    this$static.switchCurrent = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.poleCount, 15, 1);
    this$static.switchCurCount = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.poleCount, 15, 1);
  }
}

function RelayElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.ind = new Inductor;
  this.inductance = 0.2;
  $setup_0(this.ind, 0, 2);
  this.noDiagonal = true;
  this.onCurrent = 0.02;
  this.r_on = 0.05;
  this.r_off = $intern_56;
  this.coilR = 20;
  this.coilCurrent = this.coilCurCount = 0;
  this.poleCount = 1;
  $setupPoles(this);
}

function RelayElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.poleCount = (new Integer_0($nextToken(st))).value_0;
  this.inductance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.coilCurrent = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.r_on = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.r_off = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.onCurrent = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.coilR = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.noDiagonal = true;
  this.ind = new Inductor;
  $setup_0(this.ind, this.coilCurrent, 2);
  $setupPoles(this);
}

defineClass(249, 4, $intern_57, RelayElm, RelayElm_0);
_.calculateCurrent = function calculateCurrent_11(){
  var p, voltdiff;
  voltdiff = this.volts[this.nCoil1] - this.volts[this.nCoil3];
  this.coilCurrent = $calculateCurrent_0(this.ind, voltdiff);
  for (p = 0; p != this.poleCount; p++) {
    this.i_position == 2?(this.switchCurrent[p] = 0):(this.switchCurrent[p] = (this.volts[p * 3] - this.volts[1 + p * 3 + this.i_position]) / this.r_on);
  }
}
;
_.draw = function draw_41(g){
  var i, p, po, x_0;
  for (i = 0; i != 2; i++) {
    $setVoltageColor(this, g, this.volts[this.nCoil1 + i]);
    drawThickLine_0();
  }
  x_0 = (this.flags & 1) != 0?1:0;
  $setPowerColor(this, g, this.coilCurrent * (this.volts[this.nCoil1] - this.volts[this.nCoil2]));
  $drawCoil(this, g, this.coilLeads[x_0], this.coilLeads[1 - x_0], this.volts[this.nCoil1 + x_0], this.volts[this.nCoil2 - x_0]);
  $setColor(g, ($clinit_Color() , darkGray));
  for (i = 0; i != this.poleCount; i++) {
    i == 0?$interpPoint_2(this.point1, this.point2, this.lines[0], 0.5, this.openhs * 2 + 5 * this.dsign):$interpPoint_2(this.point1, this.point2, this.lines[i * 2], 0.5, round_int(this.openhs * (-i * 3 + 3 - 0.5 + this.d_position)) + 5 * this.dsign);
    $interpPoint_2(this.point1, this.point2, this.lines[i * 2 + 1], 0.5, round_int(this.openhs * (-i * 3 - 0.5 + this.d_position)) - 5 * this.dsign);
    $drawLine();
  }
  for (p = 0; p != this.poleCount; p++) {
    po = p * 3;
    for (i = 0; i != 3; i++) {
      $setVoltageColor(this, g, this.volts[po + i]);
      drawThickLine_0();
    }
    $interpPoint_1(this.swpoles[p][1], this.swpoles[p][2], this.ptSwitch[p], this.d_position);
    $setColor(g, lightGray);
    drawThickLine_0();
    this.switchCurCount[p] = $updateDotCount(this.switchCurrent[p], this.switchCurCount[p]);
    $drawDots(g, this.swposts[p][0], this.swpoles[p][0], this.switchCurCount[p]);
    this.i_position != 2 && $drawDots(g, this.swpoles[p][this.i_position + 1], this.swposts[p][this.i_position + 1], this.switchCurCount[p]);
  }
  this.coilCurCount = $updateDotCount(this.coilCurrent, this.coilCurCount);
  $drawDots(g, this.coilPosts[0], this.coilLeads[0], this.coilCurCount);
  $drawDots(g, this.coilLeads[0], this.coilLeads[1], this.coilCurCount);
  $drawDots(g, this.coilLeads[1], this.coilPosts[1], this.coilCurCount);
  $drawPosts(this, g);
  $setBbox_0(this, this.coilPosts[0], this.coilLeads[1], 0);
  $adjustBbox_0(this, this.swpoles[this.poleCount - 1][0], this.swposts[this.poleCount - 1][1]);
}
;
_.getDumpType = function getDumpType_62(){
  return 178;
}
;
_.getEditInfo = function getEditInfo_43(n){
  var ei;
  if (n == 0)
    return new EditInfo('Inductance (H)', this.inductance, 0, 0);
  if (n == 1)
    return new EditInfo('On Resistance (ohms)', this.r_on, 0, 0);
  if (n == 2)
    return new EditInfo('Off Resistance (ohms)', this.r_off, 0, 0);
  if (n == 3)
    return new EditInfo('On Current (A)', this.onCurrent, 0, 0);
  if (n == 4)
    return $setDimensionless(new EditInfo('Number of Poles', this.poleCount, 1, 4));
  if (n == 5)
    return new EditInfo('Coil Resistance (ohms)', this.coilR, 0, 0);
  if (n == 6) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Swap Coil Direction', (this.flags & 1) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_41(arr){
  var i, ln;
  arr[0] = this.i_position == 0?'relay (off)':this.i_position == 1?'relay (on)':'relay';
  ln = 1;
  for (i = 0; i != this.poleCount; i++)
    arr[ln++] = 'I' + (i + 1) + ' = ' + myGetUnitText($wnd.Math.abs(this.switchCurrent[i]), 'A', false);
  arr[ln++] = 'coil I = ' + myGetUnitText($wnd.Math.abs(this.coilCurrent), 'A', false);
  arr[ln++] = 'coil Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[this.nCoil1] - this.volts[this.nCoil2]), 'V', false);
}
;
_.getInternalNodeCount = function getInternalNodeCount_2(){
  return 1;
}
;
_.getPost = function getPost_9(n){
  if (n < 3 * this.poleCount)
    return this.swposts[n / 3 | 0][n % 3];
  return this.coilPosts[n - 3 * this.poleCount];
}
;
_.getPostCount = function getPostCount_38(){
  return 2 + this.poleCount * 3;
}
;
_.getShortcut = function getShortcut_28(){
  return 82;
}
;
_.setEditValue = function setEditValue_40(n, ei){
  if (n == 0 && ei.value_0 > 0) {
    this.inductance = ei.value_0;
    $setup_0(this.ind, this.coilCurrent, 2);
  }
  n == 1 && ei.value_0 > 0 && (this.r_on = ei.value_0);
  n == 2 && ei.value_0 > 0 && (this.r_off = ei.value_0);
  n == 3 && ei.value_0 > 0 && (this.onCurrent = ei.value_0);
  if (n == 4 && ei.value_0 >= 1) {
    this.poleCount = round_int(ei.value_0);
    $setPoints_11(this);
  }
  n == 5 && ei.value_0 > 0 && (this.coilR = ei.value_0);
  if (n == 6) {
    $getState(ei.checkbox)?(this.flags |= 1):(this.flags &= -2);
    $setPoints_11(this);
  }
}
;
_.setPoints = function setPoints_39(){
  $setPoints_11(this);
}
;
_.coilCurCount = 0;
_.coilCurrent = 0;
_.coilR = 0;
_.d_position = 0;
_.i_position = 0;
_.inductance = 0;
_.nCoil1 = 0;
_.nCoil2 = 0;
_.nCoil3 = 0;
_.onCurrent = 0;
_.openhs = 0;
_.poleCount = 0;
_.r_off = 0;
_.r_on = 0;
var Lcom_lushprojects_circuitjs1_client_RelayElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'RelayElm', 249);
function ResistorElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.resistance = $intern_18;
}

function ResistorElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.resistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(144, 4, {4:1, 8:1, 144:1}, ResistorElm, ResistorElm_0);
_.calculateCurrent = function calculateCurrent_12(){
  this.current_0 = (this.volts[0] - this.volts[1]) / this.resistance;
}
;
_.draw = function draw_42(g){
  var i, s, v1, v2;
  v1 = this.volts[0];
  v2 = this.volts[1];
  $setBbox_0(this, this.point1, this.point2, 6);
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  distance(this.lead1, this.lead2);
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod($getHexValue($getVoltageColor(this, g, v1)));
  null.$_nullMethod($getHexValue($getVoltageColor(this, g, v2)));
  null.$_nullMethod();
  if (sim.euroResistorCheckItem.on) {
    null.$_nullMethod();
  }
   else {
    null.$_nullMethod();
    null.$_nullMethod();
    for (i = 0; i < 4; i++) {
      null.$_nullMethod();
      null.$_nullMethod();
    }
    null.$_nullMethod();
    null.$_nullMethod();
  }
  null.$_nullMethod();
  if (sim.showValuesCheckItem.on) {
    s = myGetUnitText(this.resistance, '', true);
    $drawValues(this, g, s, 6);
  }
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_63(){
  return 114;
}
;
_.getEditInfo = function getEditInfo_44(n){
  if (n == 0)
    return new EditInfo('Resistance (ohms)', this.resistance, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_42(arr){
  arr[0] = 'resistor';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = 'R = ' + myGetUnitText(this.resistance, ohmString, false);
  arr[4] = 'P = ' + myGetUnitText((this.volts[0] - this.volts[1]) * this.current_0, 'W', false);
}
;
_.getShortcut = function getShortcut_29(){
  return 114;
}
;
_.setEditValue = function setEditValue_41(n, ei){
  ei.value_0 > 0 && (this.resistance = ei.value_0);
}
;
_.setPoints = function setPoints_40(){
  $setPoints(this);
  $calcLeads(this, 32);
  new Point;
  new Point;
}
;
_.resistance = 0;
var Lcom_lushprojects_circuitjs1_client_ResistorElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ResistorElm', 144);
function RowInfo(){
  this.type_0 = 0;
}

defineClass(192, 1, {192:1}, RowInfo);
_.dropRow = false;
_.lsChanges = false;
_.mapCol = 0;
_.mapRow = 0;
_.rsChanges = false;
_.type_0 = 0;
_.value_0 = 0;
var Lcom_lushprojects_circuitjs1_client_RowInfo_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'RowInfo', 192);
function $setDefaults(this$static){
  this$static.cresistance = 50;
  this$static.holdingI = 0.0082;
  this$static.triggerI = $intern_26;
}

function SCRElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $setDefaults(this);
  this.diode = new Diode;
  $setup(this.diode, 0.8, 0);
}

function SCRElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $setDefaults(this);
  try {
    this.lastvac = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.lastvag = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.volts[0] = 0;
    this.volts[1] = -this.lastvac;
    this.volts[2] = -this.lastvag;
    this.triggerI = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.holdingI = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.cresistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.diode = new Diode;
  $setup(this.diode, 0.8, 0);
}

defineClass(259, 4, $intern_57, SCRElm, SCRElm_0);
_.calculateCurrent = function calculateCurrent_13(){
  this.ic = (this.volts[1] - this.volts[2]) / this.cresistance;
  this.ia = (this.volts[0] - this.volts[3]) / this.aresistance;
  this.ig = -this.ic - this.ia;
}
;
_.draw = function draw_43(g){
  var v1, v2;
  $setBbox_0(this, this.point1, this.point2, 8);
  $adjustBbox_0(this, this.gate[0], this.gate[1]);
  v1 = this.volts[0];
  v2 = this.volts[1];
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  $setColor(g, $getVoltageColor(this, g, v1));
  $fillPolygon(this.poly);
  $setColor(g, $getVoltageColor(this, g, v2));
  drawThickLine_0();
  drawThickLine_0();
  drawThickLine_0();
  this.curcount_a = $updateDotCount(this.ia, this.curcount_a);
  this.curcount_c = $updateDotCount(this.ic, this.curcount_c);
  this.curcount_g = $updateDotCount(this.ig, this.curcount_g);
  if (sim.dragElm != this) {
    $drawDots(g, this.point1, this.lead2, this.curcount_a);
    $drawDots(g, this.point2, this.lead2, this.curcount_c);
    $drawDots(g, this.gate[1], this.gate[0], this.curcount_g);
    $drawDots(g, this.gate[0], this.lead2, this.curcount_g + distance(this.gate[1], this.gate[0]));
  }
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_64(){
  return 177;
}
;
_.getEditInfo = function getEditInfo_45(n){
  if (n == 0)
    return new EditInfo('Trigger Current (A)', this.triggerI, 0, 0);
  if (n == 1)
    return new EditInfo('Holding Current (A)', this.holdingI, 0, 0);
  if (n == 2)
    return new EditInfo('Gate-Cathode Resistance (ohms)', this.cresistance, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_43(arr){
  var vac, vag, vgc;
  arr[0] = 'SCR';
  vac = this.volts[0] - this.volts[1];
  vag = this.volts[0] - this.volts[2];
  vgc = this.volts[2] - this.volts[1];
  arr[1] = 'Ia = ' + myGetUnitText(this.ia, 'A', false);
  arr[2] = 'Ig = ' + myGetUnitText(this.ig, 'A', false);
  arr[3] = 'Vac = ' + myGetUnitText(vac, 'V', false);
  arr[4] = 'Vag = ' + myGetUnitText(vag, 'V', false);
  arr[5] = 'Vgc = ' + myGetUnitText(vgc, 'V', false);
}
;
_.getInternalNodeCount = function getInternalNodeCount_3(){
  return 1;
}
;
_.getPost = function getPost_10(n){
  return n == 0?this.point1:n == 1?this.point2:this.gate[1];
}
;
_.getPostCount = function getPostCount_39(){
  return 3;
}
;
_.getPower = function getPower_8(){
  return (this.volts[0] - this.volts[2]) * this.ia + (this.volts[1] - this.volts[2]) * this.ic;
}
;
_.setEditValue = function setEditValue_42(n, ei){
  n == 0 && ei.value_0 > 0 && (this.triggerI = ei.value_0);
  n == 1 && ei.value_0 > 0 && (this.holdingI = ei.value_0);
  n == 2 && ei.value_0 > 0 && (this.cresistance = ei.value_0);
}
;
_.setPoints = function setPoints_41(){
  var dir_0, gatelen, leadlen, pa;
  $setPoints(this);
  if (abs_0(this.dx) > abs_0(this.dy)) {
    dir_0 = -sign(this.dx) * sign(this.dy);
    this.point2.y_0 = this.point1.y_0;
  }
   else {
    dir_0 = sign(this.dy) * sign(this.dx);
    this.point2.x_0 = this.point1.x_0;
  }
  dir_0 == 0 && (dir_0 = 1);
  $calcLeads(this, 16);
  this.cathode = $newPointArray(2);
  pa = $newPointArray(2);
  $interpPoint2(this.lead1, this.lead2, pa[0], pa[1], 0, 8);
  $interpPoint2(this.lead1, this.lead2, this.cathode[0], this.cathode[1], 1, 8);
  this.poly = $createPolygon(pa[0], pa[1], this.lead2);
  this.gate = $newPointArray(2);
  leadlen = (this.dn - 16) / 2;
  gatelen = sim.gridSize;
  gatelen = round_int(gatelen + leadlen % sim.gridSize);
  if (leadlen < gatelen) {
    this.x2 = this.x_0;
    this.y2 = this.y_0;
    return;
  }
  $interpPoint_2(this.lead2, this.point2, this.gate[0], gatelen / leadlen, gatelen * dir_0);
  $interpPoint_2(this.lead2, this.point2, this.gate[1], gatelen / leadlen, sim.gridSize * 2 * dir_0);
  this.gate[1].x_0 = $snapGrid(sim, this.gate[1].x_0);
  this.gate[1].y_0 = $snapGrid(sim, this.gate[1].y_0);
}
;
_.aresistance = 0;
_.cresistance = 0;
_.curcount_a = 0;
_.curcount_c = 0;
_.curcount_g = 0;
_.holdingI = 0;
_.ia = 0;
_.ic = 0;
_.ig = 0;
_.lastvac = 0;
_.lastvag = 0;
_.triggerI = 0;
var Lcom_lushprojects_circuitjs1_client_SCRElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SCRElm', 259);
function SchmittElm(xx, yy){
  InvertingSchmittElm.call(this, xx, yy);
}

function SchmittElm_0(xa, ya, xb, yb, f, st){
  InvertingSchmittElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(258, 175, $intern_57, SchmittElm, SchmittElm_0);
_.draw = function draw_44(g){
  $drawPosts(this, g);
  $draw2Leads(this, g);
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  drawThickPolygon(this.gatePoly.npoints);
  null.$_nullMethod();
  $drawPolyline(this.symbolPoly.npoints);
  null.$_nullMethod();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.lead2, this.point2, this.curcount_0);
}
;
_.getDumpType = function getDumpType_65(){
  return 182;
}
;
_.getInfo = function getInfo_44(arr){
  arr[0] = 'Schmitt Trigger~';
}
;
_.setPoints = function setPoints_42(){
  var triPoints, ww;
  $setPoints_6(this);
  ww = 16;
  16 > this.dn / 2 && (ww = round_int(this.dn / 2));
  this.lead1 = $interpPoint(this.point1, this.point2, 0.5 - ww / this.dn);
  this.lead2 = $interpPoint(this.point1, this.point2, 0.5 + (ww - 3) / this.dn);
  triPoints = $newPointArray(3);
  $interpPoint2(this.lead1, this.lead2, triPoints[0], triPoints[1], 0, 16);
  triPoints[2] = $interpPoint(this.point1, this.point2, 0.5 + (ww - 5) / this.dn);
  this.gatePoly = $createPolygon_1(triPoints);
}
;
var Lcom_lushprojects_circuitjs1_client_SchmittElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SchmittElm', 258);
function $calcVisiblePlots(this$static){
  var ac, i, oc, plot, vc;
  this$static.visiblePlots = new Vector;
  vc = 0;
  ac = 0;
  oc = 0;
  for (i = 0; i != this$static.plots.arrayList.array.length; i++) {
    plot = castTo($get_3(this$static.plots, i), 83);
    if (plot.units == 0) {
      if (this$static.showV) {
        $add_9(this$static.visiblePlots, plot);
        $assignColor(vc++);
      }
    }
     else if (plot.units == 1) {
      if (this$static.showI) {
        $add_9(this$static.visiblePlots, plot);
        $assignColor(ac++);
      }
    }
     else {
      $add_9(this$static.visiblePlots, plot);
      $assignColor(oc++);
    }
  }
}

function $reset_0(this$static){
  var i, plot;
  $resetGraph(this$static);
  this$static.scale[2] = this$static.scale[3] = this$static.scale[0] = 5;
  this$static.scale[1] = 0.1;
  this$static.speed = 64;
  this$static.showV = this$static.showI = false;
  for (i = 0; i != this$static.plots.arrayList.array.length; i++) {
    plot = castTo($get_3(this$static.plots, i), 83);
    plot.units == 0 && (this$static.showV = true);
    plot.units == 1 && (this$static.showI = true);
  }
}

function $resetGraph(this$static){
  var i;
  this$static.scopePointCount = 1;
  while (this$static.scopePointCount <= this$static.rect.width_0)
    this$static.scopePointCount *= 2;
  !this$static.plots && (this$static.plots = new Vector);
  for (i = 0; i != this$static.plots.arrayList.array.length; i++)
    $reset_1(castTo($get_3(this$static.plots, i), 83), this$static.scopePointCount, this$static.speed);
  $calcVisiblePlots(this$static);
}

function $setElm(this$static, ce){
  this$static.plots = new Vector;
  $setValue_2(this$static, 0, ce);
  $reset_0(this$static);
}

function $setValue_1(this$static, val){
  var ce;
  if (this$static.plots.arrayList.array.length > 2 || this$static.plots.arrayList.array.length == 0)
    return;
  ce = castTo($firstElement(this$static.plots), 83).elm;
  if (this$static.plots.arrayList.array.length == 2 && castTo($get_3(this$static.plots, 1), 83).elm != ce)
    return;
  $setValue_2(this$static, val, ce);
}

function $setValue_2(this$static, val, ce){
  var u;
  this$static.plots = new Vector;
  if (val == 0) {
    $add_9(this$static.plots, new ScopePlot(ce, 0));
    !!ce && !(instanceOf(ce, 171) || instanceOf(ce, 173) || instanceOf(ce, 179) || instanceOf(ce, 172)) && $add_9(this$static.plots, new ScopePlot(ce, 1));
  }
   else {
    u = ce.getScopeUnits(val);
    $add_9(this$static.plots, new ScopePlot(ce, u));
    u == 0 && (this$static.showV = true);
    u == 1 && (this$static.showI = true);
  }
  $calcVisiblePlots(this$static);
  $resetGraph(this$static);
}

function $setValues(this$static, val, ival, ce){
  if (ival > 0) {
    this$static.plots = new Vector;
    $add_9(this$static.plots, new ScopePlot(ce, null.$_nullMethod()));
    $add_9(this$static.plots, new ScopePlot(ce, null.$_nullMethod()));
    return;
  }
  $setValue_1(this$static, val);
}

function $undump(this$static, st){
  var e, elm, flags, i, ivalue, ne, sz, u, value_0, ye;
  $reset_0(this$static);
  e = (new Integer_0($nextToken(st))).value_0;
  if (e == -1)
    return;
  $setElm(this$static, $getElm(e));
  this$static.speed = (new Integer_0($nextToken(st))).value_0;
  value_0 = (new Integer_0($nextToken(st))).value_0;
  flags = (new Integer_0($nextToken(st))).value_0;
  this$static.scale[0] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this$static.scale[1] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this$static.scale[0] == 0 && (this$static.scale[0] = 0.5);
  this$static.scale[1] == 0 && (this$static.scale[1] = 1);
  this$static.scale[3] = this$static.scale[2] = this$static.scale[0];
  this$static.text_0 = null;
  if ((flags & 4096) != 0) {
    try {
      __parseAndValidateInt($nextToken(st));
      sz = __parseAndValidateInt($nextToken(st));
      $setValue_1(this$static, value_0);
      while (this$static.plots.arrayList.array.length > 1)
        $removeElementAt(this$static.plots);
      u = castTo($get_3(this$static.plots, 0), 83).units;
      u > 1 && (this$static.scale[u] = __parseAndValidateDouble($nextToken(st)));
      for (i = 1; i != sz; i++) {
        ne = __parseAndValidateInt($nextToken(st));
        __parseAndValidateInt($nextToken(st));
        elm = $getElm(ne);
        u = null.$_nullMethod();
        u > 1 && (this$static.scale[u] = __parseAndValidateDouble($nextToken(st)));
        $add_9(this$static.plots, new ScopePlot(elm, u));
      }
      while ($hasMoreTokens(st)) {
        this$static.text_0 == null?(this$static.text_0 = $nextToken(st)):(this$static.text_0 += ' ' + $nextToken(st));
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (!instanceOf($e0, 11))
        throw toJs($e0);
    }
  }
   else {
    ivalue = 0;
    try {
      new Integer_0($nextToken(st));
      if ((flags & 32) != 0) {
        ye = (new Integer_0($nextToken(st))).value_0;
        ye != -1 && $getElm(ye);
      }
      (flags & $intern_28) != 0 && (ivalue = (new Integer_0($nextToken(st))).value_0);
      while ($hasMoreTokens(st)) {
        this$static.text_0 == null?(this$static.text_0 = $nextToken(st)):(this$static.text_0 += ' ' + $nextToken(st));
      }
    }
     catch ($e1) {
      $e1 = toJava($e1);
      if (!instanceOf($e1, 11))
        throw toJs($e1);
    }
    $setValues(this$static, value_0, ivalue, $getElm(e));
  }
  this$static.showI = (flags & 1) != 0;
  this$static.showV = (flags & 2) != 0;
}

function Scope(){
  this.scale = initUnidimensionalArray(D_classLit, $intern_48, 13, 4, 15, 1);
  this.rect = new Rectangle_0(0, 0, 1, 1);
  !detector && (detector = new Canvas$CanvasElementSupportDetectedNo);
  null.$_nullMethod();
  $reset_0(this);
}

defineClass(332, 1, {}, Scope);
_.scopePointCount = 128;
_.showI = false;
_.showV = false;
_.speed = 0;
var Lcom_lushprojects_circuitjs1_client_Scope_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Scope', 332);
function $assignColor(count){
  if (count > 0) {
    return;
  }
}

function $reset_1(this$static, spc, sp){
  var i, i1, i2, oldMax, oldMin, oldSpc;
  oldSpc = this$static.scopePointCount;
  this$static.scopePointCount = spc;
  this$static.speed != sp && (oldSpc = 0);
  this$static.speed = sp;
  oldMin = this$static.minValues;
  oldMax = this$static.maxValues;
  this$static.minValues = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.scopePointCount, 15, 1);
  this$static.maxValues = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.scopePointCount, 15, 1);
  if (this$static.minValues != null) {
    for (i = 0; i != this$static.scopePointCount && i != oldSpc; i++) {
      i1 = -i & this$static.scopePointCount - 1;
      i2 = this$static.ptr - i & oldSpc - 1;
      this$static.minValues[i1] = oldMin[i2];
      this$static.maxValues[i1] = oldMax[i2];
    }
  }
  this$static.ptr = 0;
}

function ScopePlot(e, u){
  this.elm = e;
  this.units = u;
}

defineClass(83, 1, {83:1}, ScopePlot);
_.ptr = 0;
_.scopePointCount = 0;
_.speed = 0;
_.units = 0;
var Lcom_lushprojects_circuitjs1_client_ScopePlot_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ScopePlot', 83);
function $clinit_ScrollValuePopup(){
  $clinit_ScrollValuePopup = emptyMethod;
  e12 = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_48, 13, 15, [1, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2]);
}

function $close_0(this$static, keepChanges){
  var idx;
  keepChanges?(idx = $getSelIdx(this$static) , $setElmValue(this$static, idx)):$setElmValue(this$static, this$static.currentidx);
  $hide(this$static, false);
}

function $doDeltaY(this$static, dy){
  var idx;
  this$static.deltaY += dy;
  this$static.currentidx + (this$static.deltaY / 3 | 0) < 0 && (this$static.deltaY = -3 * this$static.currentidx);
  this$static.currentidx + (this$static.deltaY / 3 | 0) >= this$static.nvalues && (this$static.deltaY = (this$static.nvalues - this$static.currentidx - 1) * 3);
  idx = $getSelIdx(this$static);
  $setElmValue(this$static, idx);
  $setupLabels(this$static);
}

function $getSelIdx(this$static){
  var r;
  r = this$static.currentidx + (this$static.deltaY / 3 | 0);
  r < 0 && (r = 0);
  r >= this$static.nvalues && (r = this$static.nvalues - 1);
  return r;
}

function $setElmValue(this$static, i){
  if (i != this$static.lastidx) {
    this$static.lastidx = i;
    this$static.inf.value_0 = this$static.values[i];
    this$static.myElm.setEditValue(0, this$static.inf);
    this$static.sim.analyzeFlag = true;
  }
}

function $setupLabels(this$static){
  var i, thissel;
  thissel = $getSelIdx(this$static);
  for (i = 0; i < 5; i++) {
    $removeStyleDependentName(this$static.labels[i]);
    if (thissel + i - 2 < 0 || thissel + i - 2 >= this$static.nvalues)
      $setText_0(this$static.labels[i], '---');
    else {
      $setText_0(this$static.labels[i], myGetUnitText(this$static.values[thissel + i - 2], '', true));
      thissel + i - 2 == this$static.currentidx && $addStyleDependentName(this$static.labels[i], 'current');
    }
  }
}

function $setupValues(this$static){
  var currentvalue, i, i0, j, ptr;
  if (instanceOf(this$static.myElm, 144)) {
    this$static.minpow = 0;
    this$static.maxpow = 6;
  }
  if (instanceOf(this$static.myElm, 115)) {
    this$static.minpow = -11;
    this$static.maxpow = -3;
  }
  if (instanceOf(this$static.myElm, 143)) {
    this$static.minpow = -6;
    this$static.maxpow = 0;
  }
  this$static.values = initUnidimensionalArray(D_classLit, $intern_48, 13, 2 + (this$static.maxpow - this$static.minpow) * 12, 15, 1);
  ptr = 0;
  for (i0 = this$static.minpow; i0 <= this$static.maxpow; i0++) {
    for (j = 0; j < (i0 != this$static.maxpow?12:1); ++j , ptr++) {
      this$static.values[ptr] = $wnd.Math.pow(10, i0) * e12[j];
    }
  }
  this$static.nvalues = ptr;
  this$static.values[this$static.nvalues] = 1.0E99;
  this$static.inf = this$static.myElm.getEditInfo(0);
  currentvalue = this$static.inf.value_0;
  for (i = 0; i < this$static.nvalues + 1; i++) {
    if (myGetUnitText(currentvalue, '', true) == myGetUnitText(this$static.values[i], '', true)) {
      this$static.values[i] = currentvalue;
      this$static.currentidx = i;
      break;
    }
    if (currentvalue < this$static.values[i]) {
      this$static.currentidx = i;
      for (j = this$static.nvalues - 1; j >= i; j--)
        this$static.values[j + 1] = this$static.values[j];
      this$static.values[i] = currentvalue;
      ++this$static.nvalues;
      break;
    }
  }
  this$static.name_0 = this$static.inf.name_0;
  this$static.lastidx = this$static.currentidx;
}

function ScrollValuePopup(x_0, y_0, dy, e, s){
  $clinit_ScrollValuePopup();
  var i;
  PopupPanel.call(this);
  this.minpow = 0;
  this.maxpow = 1;
  this.myElm = e;
  this.deltaY = 0;
  this.sim = s;
  $pushUndo(this.sim);
  this.vp = new VerticalPanel;
  $setWidget_0(this, this.vp);
  $setupValues(this);
  $add_3(this.vp, new Label_0(this.name_0));
  this.labels = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Label_2_classLit, $intern_3, 35, 5, 0, 1);
  for (i = 0; i < 5; i++) {
    this.labels[i] = new Label_0('---');
    $setHorizontalAlignment(this.labels[i], ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    i == 2?$addStyleDependentName(this.labels[2], 'selected'):i == 1 || i == 3?$addStyleDependentName(this.labels[i], '1off'):$addStyleDependentName(this.labels[i], '2off');
    $add_3(this.vp, this.labels[i]);
  }
  $doDeltaY(this, dy);
  $addDomHandler(this, this, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_4));
  $addDomHandler(this, this, ($clinit_MouseWheelEvent() , $clinit_MouseWheelEvent() , TYPE_7));
  $addDomHandler(this, this, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_2));
  $setPopupPositionAndShow(this, new ScrollValuePopup$1(this, x_0, y_0));
}

defineClass(554, 43, {214:1, 215:1, 134:1, 25:1, 29:1, 21:1, 24:1, 19:1, 34:1, 26:1, 43:1, 16:1, 17:1}, ScrollValuePopup);
_.onMouseDown = function onMouseDown_1(e){
  var idx;
  (e.nativeEvent.button | 0) == 1 || (e.nativeEvent.button | 0) == 4?(idx = $getSelIdx(this) , $setElmValue(this, idx) , $hide(this, false)):($setElmValue(this, this.currentidx) , $hide(this, false));
}
;
_.onMouseOut = function onMouseOut_1(e){
  var idx;
  idx = $getSelIdx(this);
  $setElmValue(this, idx);
  $hide(this, false);
}
;
_.onMouseWheel = function onMouseWheel_1(e){
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  $doDeltaY(this, $eventGetMouseWheelVelocityY(e.nativeEvent));
}
;
_.currentidx = 0;
_.deltaY = 0;
_.lastidx = 0;
_.maxpow = 0;
_.minpow = 0;
_.nvalues = 0;
var e12;
var Lcom_lushprojects_circuitjs1_client_ScrollValuePopup_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ScrollValuePopup', 554);
function ScrollValuePopup$1(this$0, val$x, val$y){
  this.this$01 = this$0;
  this.val$x2 = val$x;
  this.val$y3 = val$y;
}

defineClass(555, 1, {}, ScrollValuePopup$1);
_.setPosition = function setPosition_0(offsetWidth, offsetHeight){
  var left, top_0;
  left = $wnd.Math.max(0, this.val$x2 - (offsetWidth / 4 | 0));
  top_0 = $wnd.Math.max(0, this.val$y3 - (7 * offsetHeight / 12 | 0));
  $setPopupPosition(this.this$01, left, top_0);
}
;
_.val$x2 = 0;
_.val$y3 = 0;
var Lcom_lushprojects_circuitjs1_client_ScrollValuePopup$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ScrollValuePopup/1', 555);
function $calcValueFromPos(this$static, x_0){
  var v;
  v = this$static.min_0 + ((this$static.max_0 - this$static.min_0) * (x_0 - HMARGIN - SCROLLHEIGHT - BARMARGIN) / (VERTICALPANELWIDTH - 2 * (HMARGIN + SCROLLHEIGHT + BARMARGIN)) | 0);
  v < this$static.min_0 && (v = this$static.min_0);
  v > this$static.max_0 && (v = this$static.max_0);
  return v;
}

function $doMouseDown(this$static, x_0, mouse){
  if (this$static.enabled) {
    if (x_0 < HMARGIN + SCROLLHEIGHT) {
      this$static.val_0 > this$static.min_0 && --this$static.val_0;
    }
     else {
      if (x_0 > VERTICALPANELWIDTH - HMARGIN - SCROLLHEIGHT) {
        this$static.val_0 < this$static.max_0 && ++this$static.val_0;
      }
       else {
        this$static.val_0 = $calcValueFromPos(this$static, x_0);
        this$static.dragging = true;
        mouse && setCapture_0(null.$_nullMethod());
      }
    }
    $draw_1(this$static);
    !!this$static.command && $execute_0(this$static.command);
  }
}

function $doMouseMove(this$static, x_0){
  if (this$static.enabled) {
    if (this$static.dragging) {
      this$static.val_0 = $calcValueFromPos(this$static, x_0);
      $draw_1(this$static);
      !!this$static.command && $execute_0(this$static.command);
    }
  }
}

function $draw_1(this$static){
  this$static.enabled?null.$_nullMethod('#000000'):null.$_nullMethod('lightgrey');
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  this$static.enabled && null.$_nullMethod('grey');
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  if (this$static.enabled) {
    !!this$static.attachedElm && $needsHighlight(this$static.attachedElm)?null.$_nullMethod('cyan'):null.$_nullMethod('red');
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod('#000000');
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod();
  }
}

function $onMouseWheel(this$static, e){
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  this$static.enabled && $setValue_3(this$static, this$static.val_0 + ($eventGetMouseWheelVelocityY(e.nativeEvent) / 3 | 0));
}

function $onTouchEnd(this$static, event_0){
  !!event_0.nativeEvent && (event_0.nativeEvent.returnValue = false , undefined);
  if (this$static.enabled && this$static.dragging) {
    this$static.dragging = false;
    $draw_1(this$static);
    !!this$static.command && $execute_0(this$static.command);
  }
}

function $setValue_3(this$static, i){
  i < this$static.min_0?(i = this$static.min_0):i > this$static.max_0 && (i = this$static.max_0);
  this$static.val_0 = i;
  $draw_1(this$static);
  !!this$static.command && $execute_0(this$static.command);
}

function Scrollbar(value_0){
  this.min_0 = 0;
  this.max_0 = 100;
  this.val_0 = value_0;
  this.pan = new VerticalPanel;
  this.can = (!detector && (detector = new Canvas$CanvasElementSupportDetectedNo) , null);
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod();
  $add_3(this.pan, this.can);
  null.$_nullMethod();
  null.$_nullMethod('#ffffff');
  null.$_nullMethod(($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  null.$_nullMethod(($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_2));
  null.$_nullMethod(($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_6));
  null.$_nullMethod(($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_3));
  null.$_nullMethod(($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_4));
  null.$_nullMethod(($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_5));
  null.$_nullMethod(($clinit_MouseWheelEvent() , $clinit_MouseWheelEvent() , TYPE_7));
  null.$_nullMethod(($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_11));
  null.$_nullMethod(($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_10));
  null.$_nullMethod(($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_9));
  null.$_nullMethod(($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_8));
  $draw_1(this);
  $initWidget(this, this.pan);
}

function Scrollbar_0(value_0, cmd, e){
  Scrollbar.call(this, value_0);
  this.command = cmd;
  this.attachedElm = e;
}

defineClass(201, 629, {45:1, 214:1, 302:1, 215:1, 601:1, 303:1, 134:1, 643:1, 644:1, 645:1, 642:1, 25:1, 29:1, 21:1, 24:1, 19:1, 26:1, 16:1, 17:1}, Scrollbar_0);
_.onClick = function onClick_17(e){
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
}
;
_.onMouseDown = function onMouseDown_2(e){
  this.dragging = false;
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  $doMouseDown(this, $getX(e), true);
}
;
_.onMouseMove = function onMouseMove_1(e){
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  $doMouseMove(this, $getX(e));
}
;
_.onMouseOut = function onMouseOut_2(e){
  if (this.dragging)
    return;
  this.enabled && !!this.attachedElm && this.attachedElm.iAmMouseElm && $setMouseElm(sim, null);
}
;
_.onMouseOver = function onMouseOver_0(e){
  this.enabled && !!this.attachedElm && $setMouseElm(sim, this.attachedElm);
}
;
_.onMouseUp = function onMouseUp_1(e){
  !!e.nativeEvent && (e.nativeEvent.returnValue = false , undefined);
  releaseCapture_0(null.$_nullMethod());
  if (this.enabled && this.dragging) {
    this.val_0 = $calcValueFromPos(this, $getX(e));
    this.dragging = false;
    $draw_1(this);
    !!this.command && $execute_0(this.command);
  }
}
;
_.onMouseWheel = function onMouseWheel_2(e){
  $onMouseWheel(this, e);
}
;
_.attachedElm = null;
_.command = null;
_.dragging = false;
_.enabled = true;
_.max_0 = 0;
_.min_0 = 0;
_.val_0 = 0;
var BARMARGIN = 3, HMARGIN = 2, SCROLLHEIGHT = 14;
var Lcom_lushprojects_circuitjs1_client_Scrollbar_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Scrollbar', 201);
function $$init_11(this$static){
  this$static.data_0 = 0;
  this$static.oneshot = false;
}

function SeqGenElm(xx, yy){
  ChipElm.call(this, xx, yy);
  $$init_11(this);
}

function SeqGenElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  $$init_11(this);
  this.data_0 = (new Integer_0($nextToken(st))).value_0 << 16 >> 16;
  $hasMoreTokens(st) && (this.oneshot = $booleanValue(($clinit_Boolean() , $equalsIgnoreCase('true', $nextToken(st)))));
}

defineClass(280, 18, $intern_57, SeqGenElm, SeqGenElm_0);
_.getChipName = function getChipName_18(){
  return 'Sequence generator';
}
;
_.getDumpType = function getDumpType_66(){
  return 188;
}
;
_.getEditInfo = function getEditInfo_46(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 0 set', (this.data_0 & 1) != 0);
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 1 set', (this.data_0 & 2) != 0);
    return ei;
  }
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 2 set', (this.data_0 & 4) != 0);
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 3 set', (this.data_0 & 8) != 0);
    return ei;
  }
  if (n == 4) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 4 set', (this.data_0 & 16) != 0);
    return ei;
  }
  if (n == 5) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 5 set', (this.data_0 & 32) != 0);
    return ei;
  }
  if (n == 6) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 6 set', (this.data_0 & 64) != 0);
    return ei;
  }
  if (n == 7) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bit 7 set', (this.data_0 & 128) != 0);
    return ei;
  }
  if (n == 8) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('One shot', this.oneshot);
    return ei;
  }
  return null;
}
;
_.getPostCount = function getPostCount_40(){
  return 2;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_32(){
  return 1;
}
;
_.setEditValue = function setEditValue_43(n, ei){
  if (n == 0) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 1) << 16 >> 16):(this.data_0 = (this.data_0 & -2) << 16 >> 16);
    $setPoints_0(this);
  }
  if (n == 1) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 2) << 16 >> 16):(this.data_0 = (this.data_0 & -3) << 16 >> 16);
    $setPoints_0(this);
  }
  if (n == 2) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 4) << 16 >> 16):(this.data_0 = (this.data_0 & -5) << 16 >> 16);
    $setPoints_0(this);
  }
  if (n == 3) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 8) << 16 >> 16):(this.data_0 = (this.data_0 & -9) << 16 >> 16);
    $setPoints_0(this);
  }
  if (n == 4) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 16) << 16 >> 16):(this.data_0 = (this.data_0 & -17) << 16 >> 16);
    $setPoints_0(this);
  }
  if (n == 5) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 32) << 16 >> 16):(this.data_0 = (this.data_0 & -33) << 16 >> 16);
    $setPoints_0(this);
  }
  if (n == 6) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 64) << 16 >> 16):(this.data_0 = (this.data_0 & -65) << 16 >> 16);
    $setPoints_0(this);
  }
  if (n == 7) {
    $getState(ei.checkbox)?(this.data_0 = (this.data_0 | 128) << 16 >> 16):(this.data_0 = (this.data_0 & -129) << 16 >> 16);
    $setPoints_0(this);
  }
  n == 8 && ($getState(ei.checkbox)?(this.oneshot = true):(this.oneshot = false));
}
;
_.setupPins = function setupPins_18(){
  this.sizeX = 2;
  this.sizeY = 2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 2, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, '');
  this.pins[0].clock = true;
  this.pins[1] = new ChipElm$Pin(this, 1, 3, 'Q');
  this.pins[1].output = true;
}
;
_.data_0 = 0;
_.oneshot = false;
var Lcom_lushprojects_circuitjs1_client_SeqGenElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SeqGenElm', 280);
function SevenSegDecoderElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function SevenSegDecoderElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(285, 18, $intern_57, SevenSegDecoderElm, SevenSegDecoderElm_0);
_.getChipName = function getChipName_19(){
  return 'Seven Segment LED Decoder';
}
;
_.getDumpType = function getDumpType_67(){
  return 197;
}
;
_.getPostCount = function getPostCount_41(){
  return 11;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_33(){
  return 7;
}
;
_.setupPins = function setupPins_19(){
  this.sizeX = 3;
  this.sizeY = 7;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 11, 0, 1);
  this.pins[7] = new ChipElm$Pin(this, 0, 2, 'I3');
  this.pins[8] = new ChipElm$Pin(this, 1, 2, 'I2');
  this.pins[9] = new ChipElm$Pin(this, 2, 2, 'I1');
  this.pins[10] = new ChipElm$Pin(this, 3, 2, 'I0');
  this.pins[0] = new ChipElm$Pin(this, 0, 3, 'a');
  this.pins[0].output = true;
  this.pins[1] = new ChipElm$Pin(this, 1, 3, 'b');
  this.pins[1].output = true;
  this.pins[2] = new ChipElm$Pin(this, 2, 3, 'c');
  this.pins[2].output = true;
  this.pins[3] = new ChipElm$Pin(this, 3, 3, 'd');
  this.pins[3].output = true;
  this.pins[4] = new ChipElm$Pin(this, 4, 3, 'e');
  this.pins[4].output = true;
  this.pins[5] = new ChipElm$Pin(this, 5, 3, 'f');
  this.pins[5].output = true;
  this.pins[6] = new ChipElm$Pin(this, 6, 3, 'g');
  this.pins[6].output = true;
}
;
var Lcom_lushprojects_circuitjs1_client_SevenSegDecoderElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SevenSegDecoderElm', 285);
function SevenSegElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function SevenSegElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(269, 18, $intern_57, SevenSegElm, SevenSegElm_0);
_.draw = function draw_45(g){
  $drawChip(this, g);
  $setColor(g, ($clinit_Color() , red));
  $setColor(g, this.pins[0].value_0?red:sim.printableCheckItem.on?white:this.darkred);
  drawThickLine();
  $setColor(g, this.pins[1].value_0?red:sim.printableCheckItem.on?white:this.darkred);
  drawThickLine();
  $setColor(g, this.pins[2].value_0?red:sim.printableCheckItem.on?white:this.darkred);
  drawThickLine();
  $setColor(g, this.pins[3].value_0?red:sim.printableCheckItem.on?white:this.darkred);
  drawThickLine();
  $setColor(g, this.pins[4].value_0?red:sim.printableCheckItem.on?white:this.darkred);
  drawThickLine();
  $setColor(g, this.pins[5].value_0?red:sim.printableCheckItem.on?white:this.darkred);
  drawThickLine();
  $setColor(g, this.pins[6].value_0?red:sim.printableCheckItem.on?white:this.darkred);
  drawThickLine();
}
;
_.getChipName = function getChipName_20(){
  return '7-segment driver/display';
}
;
_.getDumpType = function getDumpType_68(){
  return 157;
}
;
_.getPostCount = function getPostCount_42(){
  return 7;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_34(){
  return 0;
}
;
_.setupPins = function setupPins_20(){
  this.darkred = new Color(30, 0, 0);
  this.sizeX = 4;
  this.sizeY = 4;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 7, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, 'a');
  this.pins[1] = new ChipElm$Pin(this, 1, 2, 'b');
  this.pins[2] = new ChipElm$Pin(this, 2, 2, 'c');
  this.pins[3] = new ChipElm$Pin(this, 3, 2, 'd');
  this.pins[4] = new ChipElm$Pin(this, 1, 1, 'e');
  this.pins[5] = new ChipElm$Pin(this, 2, 1, 'f');
  this.pins[6] = new ChipElm$Pin(this, 3, 1, 'g');
}
;
var Lcom_lushprojects_circuitjs1_client_SevenSegElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SevenSegElm', 269);
function SipoShiftElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function SipoShiftElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(272, 18, $intern_57, SipoShiftElm, SipoShiftElm_0);
_.getChipName = function getChipName_21(){
  return 'SIPO shift register';
}
;
_.getDumpType = function getDumpType_69(){
  return 189;
}
;
_.getPostCount = function getPostCount_43(){
  return 10;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_35(){
  return 8;
}
;
_.setupPins = function setupPins_21(){
  this.sizeX = 9;
  this.sizeY = 3;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 10, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 1, 2, 'D');
  this.pins[1] = new ChipElm$Pin(this, 2, 2, '');
  this.pins[1].clock = true;
  this.pins[2] = new ChipElm$Pin(this, 1, 0, 'I7');
  this.pins[2].output = true;
  this.pins[3] = new ChipElm$Pin(this, 2, 0, 'I6');
  this.pins[3].output = true;
  this.pins[4] = new ChipElm$Pin(this, 3, 0, 'I5');
  this.pins[4].output = true;
  this.pins[5] = new ChipElm$Pin(this, 4, 0, 'I4');
  this.pins[5].output = true;
  this.pins[6] = new ChipElm$Pin(this, 5, 0, 'I3');
  this.pins[6].output = true;
  this.pins[7] = new ChipElm$Pin(this, 6, 0, 'I2');
  this.pins[7].output = true;
  this.pins[8] = new ChipElm$Pin(this, 7, 0, 'I1');
  this.pins[8].output = true;
  this.pins[9] = new ChipElm$Pin(this, 8, 0, 'I0');
  this.pins[9].output = true;
}
;
var Lcom_lushprojects_circuitjs1_client_SipoShiftElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SipoShiftElm', 272);
function SparkGapElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.offresistance = $intern_54;
  this.onresistance = $intern_18;
  this.breakdown = $intern_18;
  this.holdcurrent = $intern_55;
  this.state = false;
}

function SparkGapElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.onresistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.offresistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.breakdown = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.holdcurrent = $doubleValue(__parseAndValidateDouble($nextToken(st)));
}

defineClass(251, 4, $intern_57, SparkGapElm, SparkGapElm_0);
_.calculateCurrent = function calculateCurrent_14(){
  var vd;
  vd = this.volts[0] - this.volts[1];
  this.current_0 = vd / this.resistance;
}
;
_.draw = function draw_46(g){
  $setBbox_0(this, this.point1, this.point2, 8);
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  $setVoltageColor(this, g, this.volts[0]);
  $fillPolygon(this.arrow1);
  $setVoltageColor(this, g, this.volts[1]);
  $fillPolygon(this.arrow2);
  this.state && (this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0) , sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0));
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_70(){
  return 187;
}
;
_.getEditInfo = function getEditInfo_47(n){
  if (n == 0)
    return new EditInfo('On resistance (ohms)', this.onresistance, 0, 0);
  if (n == 1)
    return new EditInfo('Off resistance (ohms)', this.offresistance, 0, 0);
  if (n == 2)
    return new EditInfo('Breakdown voltage', this.breakdown, 0, 0);
  if (n == 3)
    return new EditInfo('Holding current (A)', this.holdcurrent, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_45(arr){
  arr[0] = 'spark gap';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = this.state?'on':'off';
  arr[4] = 'Ron = ' + myGetUnitText(this.onresistance, ohmString, false);
  arr[5] = 'Roff = ' + myGetUnitText(this.offresistance, ohmString, false);
  arr[6] = 'Vbreakdown = ' + myGetUnitText(this.breakdown, 'V', false);
}
;
_.setEditValue = function setEditValue_44(n, ei){
  ei.value_0 > 0 && n == 0 && (this.onresistance = ei.value_0);
  ei.value_0 > 0 && n == 1 && (this.offresistance = ei.value_0);
  ei.value_0 > 0 && n == 2 && (this.breakdown = ei.value_0);
  ei.value_0 > 0 && n == 3 && (this.holdcurrent = ei.value_0);
}
;
_.setPoints = function setPoints_43(){
  var p1;
  $setPoints(this);
  $calcLeads(this, 24);
  p1 = $interpPoint(this.point1, this.point2, (this.dn - 8) / (2 * this.dn));
  this.arrow1 = $calcArrow(this.point1, p1, 8, 8);
  p1 = $interpPoint(this.point1, this.point2, (this.dn + 8) / (2 * this.dn));
  this.arrow2 = $calcArrow(this.point2, p1, 8, 8);
}
;
_.breakdown = 0;
_.holdcurrent = 0;
_.offresistance = 0;
_.onresistance = 0;
_.resistance = 0;
_.state = false;
var Lcom_lushprojects_circuitjs1_client_SparkGapElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SparkGapElm', 251);
function SquareRailElm(xx, yy){
  RailElm_0.call(this, xx, yy, 2);
}

defineClass(536, 33, $intern_61, SquareRailElm);
_.getShortcut = function getShortcut_30(){
  return 0;
}
;
var Lcom_lushprojects_circuitjs1_client_SquareRailElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SquareRailElm', 536);
function $hasMoreTokens(this$static){
  if (!this$static.retDelims) {
    while (this$static.pos < this$static.len && $indexOf_0(this$static.delim, fromCodePoint($charAt_0(this$static.str, this$static.pos))) >= 0)
      ++this$static.pos;
  }
  return this$static.pos < this$static.len;
}

function $nextToken(this$static){
  var start_0;
  if (this$static.pos < this$static.len && $indexOf_0(this$static.delim, fromCodePoint($charAt_0(this$static.str, this$static.pos))) >= 0) {
    if (this$static.retDelims)
      return $substring_0(this$static.str, this$static.pos, ++this$static.pos);
    while (++this$static.pos < this$static.len && $indexOf_0(this$static.delim, fromCodePoint($charAt_0(this$static.str, this$static.pos))) >= 0)
    ;
  }
  if (this$static.pos < this$static.len) {
    start_0 = this$static.pos;
    while (++this$static.pos < this$static.len && $indexOf_0(this$static.delim, fromCodePoint($charAt_0(this$static.str, this$static.pos))) < 0)
    ;
    return $substring_0(this$static.str, start_0, this$static.pos);
  }
  throw toJs(new NoSuchElementException);
}

function StringTokenizer(str, delim){
  this.len = str.length;
  this.str = str;
  this.delim = delim;
  this.retDelims = false;
  this.pos = 0;
}

defineClass(141, 1, {}, StringTokenizer);
_.len = 0;
_.pos = 0;
_.retDelims = false;
var Lcom_lushprojects_circuitjs1_client_StringTokenizer_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'StringTokenizer', 141);
function $reset_2(this$static){
  this$static.frequency = this$static.minF;
  this$static.dir_0 = 1;
  $setParams(this$static);
}

function $setParams(this$static){
  if (this$static.frequency < this$static.minF || this$static.frequency > this$static.maxF) {
    this$static.frequency = this$static.minF;
    this$static.dir_0 = 1;
  }
  if ((this$static.flags & 1) == 0)
  ;
  else {
    $wnd.Math.pow(this$static.maxF / this$static.minF, this$static.dir_0 * sim.timeStep / this$static.sweepTime);
  }
}

function SweepElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.dir_0 = 1;
  this.minF = 20;
  this.maxF = 4000;
  this.maxV = 5;
  this.sweepTime = 0.1;
  this.flags = 2;
  $reset_2(this);
}

function SweepElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.dir_0 = 1;
  this.minF = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.maxF = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.maxV = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.sweepTime = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  $reset_2(this);
}

defineClass(243, 4, $intern_57, SweepElm, SweepElm_0);
_.draw = function draw_47(g){
  var i, s, tm, w, xc, yc;
  $setBbox_0(this, this.point1, this.point2, 17);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:($clinit_Color() , gray));
  $setPowerColor_0(this, g);
  xc = this.point2.x_0;
  yc = this.point2.y_0;
  drawThickCircle();
  $adjustBbox(this, xc - 17, yc - 17, xc + 17, yc + 17);
  tm = ($clinit_System() , fromDouble_0(Date.now()));
  tm = mod(tm, 2000);
  compare_0(tm, $intern_18) > 0 && (tm = sub_1(2000, tm));
  w = 1 + toDouble_0(tm) * 0.002;
  sim.simRunning && (w = 1 + 2 * (this.frequency - this.minF) / (this.maxF - this.minF));
  null.$_nullMethod();
  null.$_nullMethod();
  for (i = -10; i <= 10; i++) {
    yc + round_int(0.95 * $wnd.Math.sin(i * $intern_1 * w / 10) * 8);
    i == -10?null.$_nullMethod():null.$_nullMethod();
  }
  null.$_nullMethod();
  null.$_nullMethod();
  if (sim.showValuesCheckItem.on) {
    s = myGetUnitText(this.frequency, 'Hz', true);
    (this.dx == 0 || this.dy == 0) && $drawValues(this, g, s, 17);
  }
  $drawPosts(this, g);
  this.curcount_0 = $updateDotCount(-this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.lead1, this.curcount_0);
}
;
_.getDumpType = function getDumpType_71(){
  return 170;
}
;
_.getEditInfo = function getEditInfo_48(n){
  var ei;
  if (n == 0)
    return new EditInfo('Min Frequency (Hz)', this.minF, 0, 0);
  if (n == 1)
    return new EditInfo('Max Frequency (Hz)', this.maxF, 0, 0);
  if (n == 2)
    return new EditInfo('Sweep Time (s)', this.sweepTime, 0, 0);
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Logarithmic', (this.flags & 1) != 0);
    return ei;
  }
  if (n == 4)
    return new EditInfo('Max Voltage', this.maxV, 0, 0);
  if (n == 5) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Bidirectional', (this.flags & 2) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_46(arr){
  arr[0] = 'sweep ' + ((this.flags & 1) == 0?'(linear)':'(log)');
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
  arr[3] = 'f = ' + myGetUnitText(this.frequency, 'Hz', false);
  arr[4] = 'range = ' + myGetUnitText(this.minF, 'Hz', false) + ' .. ' + myGetUnitText(this.maxF, 'Hz', false);
  arr[5] = 'time = ' + myGetUnitText(this.sweepTime, 's', false);
}
;
_.getPostCount = function getPostCount_44(){
  return 1;
}
;
_.getVoltageDiff = function getVoltageDiff_17(){
  return this.volts[0];
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_36(){
  return 1;
}
;
_.setEditValue = function setEditValue_45(n, ei){
  var maxfreq;
  maxfreq = 1 / (8 * sim.timeStep);
  if (n == 0) {
    this.minF = ei.value_0;
    this.minF > maxfreq && (this.minF = maxfreq);
  }
  if (n == 1) {
    this.maxF = ei.value_0;
    this.maxF > maxfreq && (this.maxF = maxfreq);
  }
  n == 2 && (this.sweepTime = ei.value_0);
  if (n == 3) {
    this.flags &= -2;
    $getState(ei.checkbox) && (this.flags |= 1);
  }
  n == 4 && (this.maxV = ei.value_0);
  if (n == 5) {
    this.flags &= -3;
    $getState(ei.checkbox) && (this.flags |= 2);
  }
  $setParams(this);
}
;
_.setPoints = function setPoints_44(){
  $setPoints(this);
  this.lead1 = $interpPoint(this.point1, this.point2, 1 - 17 / this.dn);
}
;
_.dir_0 = 0;
_.frequency = 0;
_.maxF = 0;
_.maxV = 0;
_.minF = 0;
_.sweepTime = 0;
var Lcom_lushprojects_circuitjs1_client_SweepElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'SweepElm', 243);
function $setPoints_12(this$static){
  var hs, i;
  $setPoints_8(this$static);
  $calcLeads(this$static, 32);
  this$static.swposts = $newPointArray(this$static.throwCount);
  this$static.swpoles = $newPointArray(2 + this$static.throwCount);
  for (i = 0; i != this$static.throwCount; i++) {
    hs = -16 * (i - ((this$static.throwCount - 1) / 2 | 0));
    this$static.throwCount == 2 && i == 0 && (hs = 16);
    $interpPoint_2(this$static.lead1, this$static.lead2, this$static.swpoles[i], 1, hs);
    $interpPoint_2(this$static.point1, this$static.point2, this$static.swposts[i], 1, hs);
  }
  this$static.swpoles[i] = this$static.lead2;
  this$static.posCount = (this$static.flags & 1) != 0 && this$static.throwCount == 2?3:this$static.throwCount;
}

function Switch2Elm(xx, yy){
  SwitchElm_1.call(this, xx, yy, false);
  this.noDiagonal = true;
  this.throwCount = 2;
}

function Switch2Elm_0(xa, ya, xb, yb, f, st){
  SwitchElm_0.call(this, xa, ya, xb, yb, f, st);
  this.link_0 = (new Integer_0($nextToken(st))).value_0;
  this.throwCount = 2;
  try {
    this.throwCount = (new Integer_0($nextToken(st))).value_0;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.noDiagonal = true;
}

defineClass(238, 85, $intern_73, Switch2Elm, Switch2Elm_0);
_.calculateCurrent = function calculateCurrent_15(){
  this.position == 2 && (this.flags & 1) != 0 && this.throwCount == 2 && (this.current_0 = 0);
}
;
_.draw = function draw_48(g){
  var i;
  $setBbox_0(this, this.point1, this.point2, 16);
  $adjustBbox_0(this, this.swposts[0], this.swposts[this.throwCount - 1]);
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  for (i = 0; i != this.throwCount; i++) {
    $setVoltageColor(this, g, this.volts[i + 1]);
    drawThickLine_0();
  }
  this.iAmMouseElm || this.selected || $setColor(g, whiteColor);
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.point1, this.lead1, this.curcount_0);
  this.position != 2 && $drawDots(g, this.swpoles[this.position], this.swposts[this.position], this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_72(){
  return 83;
}
;
_.getEditInfo = function getEditInfo_49(n){
  if (n == 1)
    return $setDimensionless(new EditInfo('Switch Group', this.link_0, 0, 100));
  if (n == 2)
    return $setDimensionless(new EditInfo('# of Throws', this.throwCount, 2, 10));
  return $getEditInfo_4(this, n);
}
;
_.getInfo = function getInfo_47(arr){
  arr[0] = 'switch (' + (this.link_0 == 0?'S':'D') + 'P' + (this.throwCount > 2?this.throwCount + 'T)':'DT)');
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
}
;
_.getPost = function getPost_11(n){
  return n == 0?this.point1:this.swposts[n - 1];
}
;
_.getPostCount = function getPostCount_45(){
  return 1 + this.throwCount;
}
;
_.getShortcut = function getShortcut_31(){
  return 83;
}
;
_.getSwitchRect = function getSwitchRect_1(){
  return $union($union(new Rectangle_1(this.lead1), new Rectangle_1(this.swpoles[0])), new Rectangle_1(this.swpoles[this.throwCount - 1]));
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_37(){
  return this.position == 2 && (this.flags & 1) != 0 && this.throwCount == 2?0:1;
}
;
_.setEditValue = function setEditValue_46(n, ei){
  if (n == 1) {
    this.link_0 = round_int(ei.value_0);
  }
   else if (n == 2) {
    ei.value_0 >= 2 && (this.throwCount = round_int(ei.value_0));
    this.throwCount > 2 && (this.momentary = false);
    $allocNodes(this);
    $setPoints_12(this);
  }
   else 
    n == 0 && (this.momentary = $getState(ei.checkbox));
}
;
_.setPoints = function setPoints_45(){
  $setPoints_12(this);
}
;
_.toggle = function toggle_0(){
  var i;
  ++this.position;
  this.position >= this.posCount && (this.position = 0);
  if (this.link_0 != 0) {
    for (i = 0; i != null.$_nullField.length; i++) {
      null.$_nullMethod();
    }
  }
}
;
_.link_0 = 0;
_.throwCount = 0;
var Lcom_lushprojects_circuitjs1_client_Switch2Elm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'Switch2Elm', 238);
function $setupPins_4(this$static){
  this$static.sizeX = 2;
  this$static.sizeY = 3;
  this$static.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 4 + ((this$static.flags & 2) != 0 || (this$static.flags & 4) != 0?1:0) + ((this$static.flags & 4) != 0?1:0), 0, 1);
  this$static.pins[0] = new ChipElm$Pin(this$static, 0, 2, 'T');
  this$static.pins[1] = new ChipElm$Pin(this$static, 0, 3, 'Q');
  this$static.pins[1].output = this$static.pins[1].state = true;
  this$static.pins[2] = new ChipElm$Pin(this$static, (this$static.flags & 4) != 0?1:2, 3, 'Q');
  this$static.pins[2].output = true;
  this$static.pins[2].lineOver = true;
  this$static.pins[3] = new ChipElm$Pin(this$static, 1, 2, '');
  this$static.pins[3].clock = true;
  if ((this$static.flags & 4) != 0) {
    this$static.pins[5] = new ChipElm$Pin(this$static, 2, 2, 'S');
    this$static.pins[4] = new ChipElm$Pin(this$static, 2, 3, 'R');
  }
   else {
    ((this$static.flags & 2) != 0 || (this$static.flags & 4) != 0) && (this$static.pins[4] = new ChipElm$Pin(this$static, 2, 2, 'R'));
  }
}

function TFlipFlopElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function TFlipFlopElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
  this.pins[2].value_0 = !this.pins[1].value_0;
}

defineClass(284, 18, $intern_57, TFlipFlopElm, TFlipFlopElm_0);
_.getChipName = function getChipName_22(){
  return 'T flip-flop';
}
;
_.getDumpType = function getDumpType_73(){
  return 193;
}
;
_.getEditInfo = function getEditInfo_50(n){
  var ei;
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Reset Pin', (this.flags & 2) != 0 || (this.flags & 4) != 0);
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Set Pin', (this.flags & 4) != 0);
    return ei;
  }
  return $getEditInfo_0(this, n);
}
;
_.getPostCount = function getPostCount_46(){
  return 4 + ((this.flags & 2) != 0 || (this.flags & 4) != 0?1:0) + ((this.flags & 4) != 0?1:0);
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_38(){
  return 2;
}
;
_.setEditValue = function setEditValue_47(n, ei){
  if (n == 2) {
    $getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3);
    $setupPins_4(this);
    $allocNodes(this);
    $setPoints_0(this);
  }
  if (n == 3) {
    $getState(ei.checkbox)?(this.flags |= 4):(this.flags &= -5);
    $setupPins_4(this);
    $allocNodes(this);
    $setPoints_0(this);
  }
  $setEditValue(this, n, ei);
}
;
_.setupPins = function setupPins_22(){
  $setupPins_4(this);
}
;
var Lcom_lushprojects_circuitjs1_client_TFlipFlopElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TFlipFlopElm', 284);
function TappedTransformerElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.inductance = 4;
  this.ratio = 1;
  this.noDiagonal = true;
  this.couplingCoef = 0.99;
  this.current = initUnidimensionalArray(D_classLit, $intern_48, 13, 4, 15, 1);
  this.curcount = initUnidimensionalArray(D_classLit, $intern_48, 13, 4, 15, 1);
  this.voltdiff = initUnidimensionalArray(D_classLit, $intern_48, 13, 3, 15, 1);
  this.curSourceValue = initUnidimensionalArray(D_classLit, $intern_48, 13, 3, 15, 1);
  this.a = initUnidimensionalArray(D_classLit, $intern_48, 13, 9, 15, 1);
}

function TappedTransformerElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.inductance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.ratio = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.current = initUnidimensionalArray(D_classLit, $intern_48, 13, 4, 15, 1);
  this.curcount = initUnidimensionalArray(D_classLit, $intern_48, 13, 4, 15, 1);
  this.current[0] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.current[1] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  try {
    this.current[2] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.couplingCoef = 0.99;
  try {
    this.couplingCoef = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (!instanceOf($e1, 11))
      throw toJs($e1);
  }
  this.voltdiff = initUnidimensionalArray(D_classLit, $intern_48, 13, 3, 15, 1);
  this.curSourceValue = initUnidimensionalArray(D_classLit, $intern_48, 13, 3, 15, 1);
  this.noDiagonal = true;
  this.a = initUnidimensionalArray(D_classLit, $intern_48, 13, 9, 15, 1);
}

defineClass(247, 4, $intern_57, TappedTransformerElm, TappedTransformerElm_0);
_.calculateCurrent = function calculateCurrent_16(){
  var i, j;
  this.voltdiff[0] = this.volts[0] - this.volts[1];
  this.voltdiff[1] = this.volts[2] - this.volts[3];
  this.voltdiff[2] = this.volts[3] - this.volts[4];
  for (i = 0; i != 3; i++) {
    this.current[i] = this.curSourceValue[i];
    for (j = 0; j != 3; j++)
      this.current[i] += this.a[i * 3 + j] * this.voltdiff[j];
  }
  this.current[3] = this.current[1] - this.current[2];
}
;
_.draw = function draw_49(g){
  var i;
  for (i = 0; i != 5; i++) {
    $setVoltageColor(this, g, this.volts[i]);
    drawThickLine_0();
  }
  for (i = 0; i != 4; i++) {
    if (i == 1)
      continue;
    $setPowerColor(this, g, this.current[i] * (this.volts[i] - this.volts[i + 1]));
    $drawCoil(this, g, this.ptCoil[i], this.ptCoil[i + 1], this.volts[i], this.volts[i + 1]);
  }
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  for (i = 0; i != 4; i += 2) {
    drawThickLine_0();
  }
  for (i = 0; i != 4; i++)
    this.curcount[i] = $updateDotCount(this.current[i], this.curcount[i]);
  $drawDots(g, this.ptEnds[0], this.ptCoil[0], this.curcount[0]);
  $drawDots(g, this.ptCoil[0], this.ptCoil[1], this.curcount[0]);
  $drawDots(g, this.ptCoil[1], this.ptEnds[1], this.curcount[0]);
  $drawDots(g, this.ptEnds[2], this.ptCoil[2], this.curcount[1]);
  $drawDots(g, this.ptCoil[2], this.ptCoil[3], this.curcount[1]);
  $drawDots(g, this.ptCoil[3], this.ptEnds[3], this.curcount[3]);
  $drawDots(g, this.ptCoil[3], this.ptCoil[4], this.curcount[2]);
  $drawDots(g, this.ptCoil[4], this.ptEnds[4], this.curcount[2]);
  $drawPosts(this, g);
  $setBbox_0(this, this.ptEnds[0], this.ptEnds[4], 0);
}
;
_.getDumpType = function getDumpType_74(){
  return 169;
}
;
_.getEditInfo = function getEditInfo_51(n){
  var ei;
  if (n == 0)
    return new EditInfo('Primary Inductance (H)', this.inductance, $intern_26, 5);
  if (n == 1)
    return $setDimensionless(new EditInfo('Ratio', this.ratio, 1, 10));
  if (n == 2)
    return $setDimensionless(new EditInfo('Coupling Coefficient', this.couplingCoef, 0, 1));
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Trapezoidal Approximation', (this.flags & 2) == 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_48(arr){
  arr[0] = 'transformer';
  arr[1] = 'L = ' + myGetUnitText(this.inductance, 'H', false);
  arr[2] = 'Ratio = ' + this.ratio;
  arr[3] = 'Vd1 = ' + myGetUnitText(this.volts[0] - this.volts[2], 'V', false);
  arr[4] = 'Vd2 = ' + myGetUnitText(this.volts[1] - this.volts[3], 'V', false);
}
;
_.getPost = function getPost_12(n){
  return this.ptEnds[n];
}
;
_.getPostCount = function getPostCount_47(){
  return 5;
}
;
_.setEditValue = function setEditValue_48(n, ei){
  n == 0 && ei.value_0 > 0 && (this.inductance = ei.value_0);
  n == 1 && this.ratio > 0 && (this.ratio = ei.value_0);
  n == 2 && ei.value_0 > 0 && ei.value_0 < 1 && (this.couplingCoef = ei.value_0);
  n == 3 && ($getState(ei.checkbox)?(this.flags &= -3):(this.flags |= 2));
}
;
_.setPoints = function setPoints_46(){
  var b, cd, ce, i;
  $setPoints(this);
  this.ptEnds = $newPointArray(5);
  this.ptCoil = $newPointArray(5);
  this.ptCore = $newPointArray(4);
  this.ptEnds[0] = this.point1;
  this.ptEnds[2] = this.point2;
  $interpPoint_2(this.point1, this.point2, this.ptEnds[1], 0, -64);
  $interpPoint_2(this.point1, this.point2, this.ptEnds[3], 1, -32);
  $interpPoint_2(this.point1, this.point2, this.ptEnds[4], 1, -64);
  ce = 0.5 - 12 / this.dn;
  cd = 0.5 - 2 / this.dn;
  $interpPoint_1(this.ptEnds[0], this.ptEnds[2], this.ptCoil[0], ce);
  $interpPoint_2(this.ptEnds[0], this.ptEnds[2], this.ptCoil[1], ce, -64);
  $interpPoint_1(this.ptEnds[0], this.ptEnds[2], this.ptCoil[2], 1 - ce);
  $interpPoint_2(this.ptEnds[0], this.ptEnds[2], this.ptCoil[3], 1 - ce, -32);
  $interpPoint_2(this.ptEnds[0], this.ptEnds[2], this.ptCoil[4], 1 - ce, -64);
  for (i = 0; i != 2; i++) {
    b = -32 * i * 2;
    $interpPoint_2(this.ptEnds[0], this.ptEnds[2], this.ptCore[i], cd, b);
    $interpPoint_2(this.ptEnds[0], this.ptEnds[2], this.ptCore[i + 2], 1 - cd, b);
  }
}
;
_.couplingCoef = 0;
_.inductance = 0;
_.ratio = 0;
var Lcom_lushprojects_circuitjs1_client_TappedTransformerElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TappedTransformerElm', 247);
function $$init_12(this$static){
  this$static.rmsV = 0;
  this$static.frequency = 0;
  this$static.period = 0;
  this$static.binaryLevel = 0;
  this$static.pulseWidth = 0;
  this$static.dutyCycle = 0;
  this$static.selectedValue = 0;
}

function TestPointElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $$init_12(this);
  this.meter = 0;
}

function TestPointElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $$init_12(this);
  this.meter = (new Integer_0($nextToken(st))).value_0;
}

defineClass(295, 4, $intern_57, TestPointElm, TestPointElm_0);
_.draw = function draw_50(g){
  var f, selected;
  selected = this.iAmMouseElm || this.selected;
  f = new Font(14);
  $setFont(g, f);
  $setColor(g, selected?selectColor:whiteColor);
  $interpPoint_1(this.point1, this.point2, this.lead1, 1 - ((round_int(null.$_nullMethod().$_nullMethod()) / 2 | 0) + 8) / this.dn);
  $setBbox_0(this, this.point1, this.lead1, 0);
  $drawCenteredText(this, g, this.x2, this.y2, true);
  switch (this.meter) {
    case 0:
      myGetUnitText(this.volts[0], 'V', false);
      break;
    case 1:
      myGetUnitText(this.rmsV, 'V(rms)', false);
      break;
    case 2:
      myGetUnitText(this.lastMaxV, 'Vpk', false);
      break;
    case 3:
      myGetUnitText(this.lastMinV, 'Vmin', false);
      break;
    case 4:
      myGetUnitText(this.lastMaxV - this.lastMinV, 'Vp2p', false);
      break;
    case 6:
      myGetUnitText(this.frequency, 'Hz', false);
      break;
    case 8:
      myGetUnitText(this.pulseWidth, 'S', false);
      break;
    case 9:
      $format_0(showFormat, this.dutyCycle);
  }
  $drawCenteredText(this, g, this.x2, this.y2 + 12, true);
  $setVoltageColor(this, g, this.volts[0]);
  selected && $setColor(g, selectColor);
  drawThickLine_0();
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_75(){
  return 368;
}
;
_.getEditInfo = function getEditInfo_52(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('Value', this.selectedValue, -1, -1);
    ei.choice = new Choice;
    $insertItem(ei.choice, LS('Voltage'));
    $insertItem(ei.choice, LS('RMS Voltage'));
    $insertItem(ei.choice, LS('Max Voltage'));
    $insertItem(ei.choice, LS('Min Voltage'));
    $insertItem(ei.choice, LS('P2P Voltage'));
    $insertItem(ei.choice, LS('Binary Value'));
    $select(ei.choice, this.meter);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_49(arr){
  arr[0] = 'Test Point';
  switch (this.meter) {
    case 0:
      arr[1] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
      break;
    case 1:
      arr[1] = 'V(rms) = ' + myGetUnitText(this.rmsV, 'V', false);
      break;
    case 2:
      arr[1] = 'Vmax = ' + myGetUnitText(this.lastMaxV, 'Vpk', false);
      break;
    case 3:
      arr[1] = 'Vmin = ' + myGetUnitText(this.lastMinV, 'Vmin', false);
      break;
    case 4:
      arr[1] = 'Vp2p = ' + myGetUnitText(this.lastMaxV - this.lastMinV, 'Vp2p', false);
      break;
    case 5:
      arr[1] = 'Binary:' + this.binaryLevel + '';
      break;
    case 6:
      arr[1] = 'Freq = ' + myGetUnitText(this.frequency, 'Hz', false);
      break;
    case 7:
      arr[1] = 'Period = ' + myGetUnitText(this.period * sim.timeStep / $getIterCount(), 'S', false);
      break;
    case 8:
      arr[1] = 'Pulse width = ' + myGetUnitText(this.pulseWidth * sim.timeStep * $getIterCount(), 'S', false);
      break;
    case 9:
      arr[1] = 'Duty cycle = ' + $format_0(showFormat, this.dutyCycle);
  }
}
;
_.getPostCount = function getPostCount_48(){
  return 1;
}
;
_.getVoltageDiff = function getVoltageDiff_18(){
  return this.volts[0];
}
;
_.setEditValue = function setEditValue_49(n, ei){
  n == 0 && (this.meter = ei.choice.element.selectedIndex);
}
;
_.setPoints = function setPoints_47(){
  $setPoints(this);
  this.lead1 = new Point;
}
;
_.binaryLevel = 0;
_.dutyCycle = 0;
_.frequency = 0;
_.lastMaxV = 0;
_.lastMinV = 0;
_.meter = 0;
_.period = 0;
_.pulseWidth = 0;
_.rmsV = 0;
_.selectedValue = 0;
var Lcom_lushprojects_circuitjs1_client_TestPointElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TestPointElm', 295);
function $split(this$static){
  var c, i, sb;
  this$static.lines = new Vector;
  sb = new StringBuffer(this$static.text_0);
  for (i = 0; i < sb.string.length; i++) {
    c = $charAt_0(sb.string, i);
    if (c == 92) {
      sb.string = $substring_0(sb.string, 0, i) + '' + $substring(sb.string, i + 1);
      c = $charAt_0(sb.string, i);
      if (c == 110) {
        $add_9(this$static.lines, $substring_0(sb.string, 0, i));
        sb.string = sb.string.substr(0, 0) + '' + $substring(sb.string, i + 1);
        i = -1;
        continue;
      }
    }
  }
  $add_9(this$static.lines, sb.string);
}

function TextElm(xx, yy){
  GraphicElm.call(this, xx, yy);
  this.text_0 = 'hello';
  this.lines = new Vector;
  $add_9(this.lines, this.text_0);
  this.size_0 = 24;
}

function TextElm_0(xa, ya, xb, yb, f, st){
  GraphicElm_0.call(this, xa, ya, xb, yb, f);
  this.size_0 = (new Integer_0($nextToken(st))).value_0;
  this.text_0 = $nextToken(st);
  if ((this.flags & 4) == 0) {
    while ($hasMoreTokens(st))
      this.text_0 += ' ' + $nextToken(st);
    this.text_0 = $replaceAll(this.text_0, '%2[bB]', '+');
  }
   else {
    this.text_0 = unescape_0(this.text_0);
  }
  $split(this);
}

defineClass(283, 117, $intern_65, TextElm, TextElm_0);
_.drag = function drag_3(xx, yy){
  this.x_0 = xx;
  this.y_0 = yy;
  this.x2 = xx + 16;
  this.y2 = yy;
}
;
_.draw = function draw_51(g){
  var cury, f, i, maxw, oldfont, s, sw, w;
  oldfont = g.currentFont;
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  f = new Font(this.size_0);
  $setFont(g, f);
  maxw = -1;
  for (i = 0; i != this.lines.arrayList.array.length; i++) {
    w = round_int(null.$_nullMethod(castToString($elementAt(this.lines, i))).$_nullMethod());
    w > maxw && (maxw = w);
  }
  cury = this.y_0;
  $setBbox(this, this.x_0, this.y_0, this.x_0, this.y_0);
  for (i = 0; i != this.lines.arrayList.array.length; i++) {
    s = castToString($elementAt(this.lines, i));
    LS(s);
    sw = round_int(null.$_nullMethod().$_nullMethod());
    (this.flags & 1) != 0 && (this.x_0 = (null.$_nullMethod().$_nullMethod() - sw) / 2 | 0);
    null.$_nullMethod();
    (this.flags & 2) != 0 && $drawLine();
    $adjustBbox(this, this.x_0, cury - g.currentFontSize, this.x_0 + sw, cury + 3);
    cury += g.currentFontSize + 3;
  }
  this.x2 = this.boundingBox.x_0 + this.boundingBox.width_0;
  this.y2 = this.boundingBox.y_0 + this.boundingBox.height;
  $setFont(g, oldfont);
}
;
_.getDumpType = function getDumpType_76(){
  return 120;
}
;
_.getEditInfo = function getEditInfo_53(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('Text', 0, -1, -1);
    ei.text_0 = this.text_0;
    return ei;
  }
  if (n == 1)
    return new EditInfo('Size', this.size_0, 5, 100);
  if (n == 2) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Center', (this.flags & 1) != 0);
    return ei;
  }
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Draw Bar On Top', (this.flags & 2) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_50(arr){
  arr[0] = this.text_0;
}
;
_.getShortcut = function getShortcut_32(){
  return 116;
}
;
_.setEditValue = function setEditValue_50(n, ei){
  if (n == 0) {
    this.text_0 = $getText(ei.textf);
    $split(this);
  }
  n == 1 && (this.size_0 = round_int(ei.value_0));
  n == 3 && ($getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3));
  n == 2 && ($getState(ei.checkbox)?(this.flags |= 1):(this.flags &= -2));
}
;
_.size_0 = 0;
var Lcom_lushprojects_circuitjs1_client_TextElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TextElm', 283);
function TimerElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function TimerElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(276, 18, $intern_57, TimerElm, TimerElm_0);
_.calculateCurrent = function calculateCurrent_17(){
  this.pins[3].current = (this.volts[4] - this.volts[3]) / 5000;
  this.pins[4].current = -this.volts[4] / 10000 - this.pins[3].current;
  this.pins[0].current = this.out?0:-this.volts[0] / 10;
}
;
_.getChipName = function getChipName_23(){
  return '555 Timer';
}
;
_.getDefaultFlags = function getDefaultFlags_0(){
  return 2;
}
;
_.getDumpType = function getDumpType_77(){
  return 165;
}
;
_.getPostCount = function getPostCount_49(){
  return (this.flags & 2) != 0?7:6;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_39(){
  return 1;
}
;
_.setupPins = function setupPins_23(){
  this.sizeX = 3;
  this.sizeY = 5;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 7, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 1, 2, 'dis');
  this.pins[1] = new ChipElm$Pin(this, 3, 2, 'tr');
  this.pins[1].lineOver = true;
  this.pins[2] = new ChipElm$Pin(this, 4, 2, 'th');
  this.pins[3] = new ChipElm$Pin(this, 1, 0, 'Vin');
  this.pins[4] = new ChipElm$Pin(this, 1, 1, 'ctl');
  this.pins[5] = new ChipElm$Pin(this, 2, 3, 'out');
  this.pins[5].output = this.pins[5].state = true;
  this.pins[6] = new ChipElm$Pin(this, 1, 3, 'rst');
}
;
_.out = false;
var Lcom_lushprojects_circuitjs1_client_TimerElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TimerElm', 276);
function $reset_3(this$static){
  if (sim.timeStep == 0)
    return;
  this$static.lenSteps = round_int(this$static.delay / sim.timeStep);
  $clinit_System();
  if (this$static.lenSteps > 100000)
    this$static.voltageL = this$static.voltageR = null;
  else {
    this$static.voltageL = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.lenSteps, 15, 1);
    this$static.voltageR = initUnidimensionalArray(D_classLit, $intern_48, 13, this$static.lenSteps, 15, 1);
  }
  this$static.ptr = 0;
  $reset(this$static);
}

function $setPoints_13(this$static){
  var ds, p3, p4, p5, p6, p7, p8, sep;
  $setPoints(this$static);
  ds = this$static.dy == 0?sign(this$static.dx):-sign(this$static.dy);
  p3 = $interpPoint_0(this$static.point1, this$static.point2, 0, -this$static.width_0 * ds);
  p4 = $interpPoint_0(this$static.point1, this$static.point2, 1, -this$static.width_0 * ds);
  sep = sim.gridSize / 2 | 0;
  p5 = $interpPoint_0(this$static.point1, this$static.point2, 0, -((this$static.width_0 / 2 | 0) - sep) * ds);
  p6 = $interpPoint_0(this$static.point1, this$static.point2, 1, -((this$static.width_0 / 2 | 0) - sep) * ds);
  p7 = $interpPoint_0(this$static.point1, this$static.point2, 0, -((this$static.width_0 / 2 | 0) + sep) * ds);
  p8 = $interpPoint_0(this$static.point1, this$static.point2, 1, -((this$static.width_0 / 2 | 0) + sep) * ds);
  this$static.posts = stampJavaTypeInfo(getClassLiteralForArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, 1), $intern_50, 14, 0, [p3, p4, this$static.point1, this$static.point2]);
  this$static.inner = stampJavaTypeInfo(getClassLiteralForArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, 1), $intern_50, 14, 0, [p7, p8, p5, p6]);
}

function TransLineElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.delay = $intern_18 * sim.timeStep;
  this.imped = 75;
  this.noDiagonal = true;
  $reset_3(this);
}

function TransLineElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.delay = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.imped = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.width_0 = (new Integer_0($nextToken(st))).value_0;
  $nextToken(st);
  this.noDiagonal = true;
  $reset_3(this);
}

defineClass(248, 4, $intern_57, TransLineElm, TransLineElm_0);
_.drag = function drag_4(xx, yy){
  var w1, w2;
  xx = $snapGrid(sim, xx);
  yy = $snapGrid(sim, yy);
  w1 = max_1(sim.gridSize, abs_0(yy - this.y_0));
  w2 = max_1(sim.gridSize, abs_0(xx - this.x_0));
  if (w1 > w2) {
    xx = this.x_0;
    this.width_0 = w2;
  }
   else {
    yy = this.y_0;
    this.width_0 = w1;
  }
  this.x2 = xx;
  this.y2 = yy;
  $setPoints_13(this);
}
;
_.draw = function draw_52(g){
  var i, ix0, ix1, ix2, segf, segments, v;
  $setBbox_0(this, this.posts[0], this.posts[3], 0);
  segments = round_int(this.dn / 2);
  ix0 = this.ptr - 1 + this.lenSteps;
  segf = 1 / segments;
  $setColor(g, ($clinit_Color() , darkGray));
  null.$_nullMethod();
  for (i = 0; i != 4; i++) {
    $setVoltageColor(this, g, this.volts[i]);
    drawThickLine_0();
  }
  if (this.voltageL != null) {
    for (i = 0; i != segments; i++) {
      ix1 = (ix0 - (this.lenSteps * i / segments | 0)) % this.lenSteps;
      ix2 = (ix0 - (this.lenSteps * (segments - 1 - i) / segments | 0)) % this.lenSteps;
      v = (this.voltageL[ix1] + this.voltageR[ix2]) / 2;
      $setColor(g, $getVoltageColor(this, g, v));
      $interpPoint_1(this.inner[0], this.inner[1], ps1, i * segf);
      $interpPoint_1(this.inner[2], this.inner[3], ps2, i * segf);
      $drawLine();
      $interpPoint_1(this.inner[2], this.inner[3], ps1, (i + 1) * segf);
      drawThickLine_0();
    }
  }
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  $drawPosts(this, g);
  this.curCount1 = $updateDotCount(-this.current1, this.curCount1);
  this.curCount2 = $updateDotCount(this.current2, this.curCount2);
  if (sim.dragElm != this) {
    $drawDots(g, this.posts[0], this.inner[0], this.curCount1);
    $drawDots(g, this.posts[2], this.inner[2], -this.curCount1);
    $drawDots(g, this.posts[1], this.inner[1], -this.curCount2);
    $drawDots(g, this.posts[3], this.inner[3], this.curCount2);
  }
}
;
_.getDumpType = function getDumpType_78(){
  return 171;
}
;
_.getEditInfo = function getEditInfo_54(n){
  if (n == 0)
    return new EditInfo('Delay (s)', this.delay, 0, 0);
  if (n == 1)
    return new EditInfo('Impedance (ohms)', this.imped, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_51(arr){
  arr[0] = 'transmission line';
  arr[1] = myGetUnitText(this.imped, ohmString, false);
  arr[2] = 'length = ' + myGetUnitText(299790000 * this.delay, 'm', false);
  arr[3] = 'delay = ' + myGetUnitText(this.delay, 's', false);
}
;
_.getInternalNodeCount = function getInternalNodeCount_4(){
  return 2;
}
;
_.getPost = function getPost_13(n){
  return this.posts[n];
}
;
_.getPostCount = function getPostCount_50(){
  return 4;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_40(){
  return 2;
}
;
_.setCurrent = function setCurrent_7(v, c){
  v == this.voltSource1?(this.current1 = c):(this.current2 = c);
}
;
_.setEditValue = function setEditValue_51(n, ei){
  if (n == 0) {
    this.delay = ei.value_0;
    $reset_3(this);
  }
  if (n == 1) {
    this.imped = ei.value_0;
    $reset_3(this);
  }
}
;
_.setPoints = function setPoints_48(){
  $setPoints_13(this);
}
;
_.curCount1 = 0;
_.curCount2 = 0;
_.current1 = 0;
_.current2 = 0;
_.delay = 0;
_.imped = 0;
_.lenSteps = 0;
_.ptr = 0;
_.voltSource1 = 0;
_.width_0 = 0;
var Lcom_lushprojects_circuitjs1_client_TransLineElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TransLineElm', 248);
function $setPoints_14(this$static){
  var cd, ce, dotp, i, x_0;
  $setPoints(this$static);
  this$static.point2.y_0 = this$static.point1.y_0;
  this$static.ptEnds = $newPointArray(4);
  this$static.ptCoil = $newPointArray(4);
  this$static.ptCore = $newPointArray(4);
  this$static.ptEnds[0] = this$static.point1;
  this$static.ptEnds[1] = this$static.point2;
  $interpPoint_2(this$static.point1, this$static.point2, this$static.ptEnds[2], 0, -this$static.dsign * this$static.width_0);
  $interpPoint_2(this$static.point1, this$static.point2, this$static.ptEnds[3], 1, -this$static.dsign * this$static.width_0);
  ce = 0.5 - 12 / this$static.dn;
  cd = 0.5 - 2 / this$static.dn;
  for (i = 0; i != 4; i += 2) {
    $interpPoint_1(this$static.ptEnds[i], this$static.ptEnds[i + 1], this$static.ptCoil[i], ce);
    $interpPoint_1(this$static.ptEnds[i], this$static.ptEnds[i + 1], this$static.ptCoil[i + 1], 1 - ce);
    $interpPoint_1(this$static.ptEnds[i], this$static.ptEnds[i + 1], this$static.ptCore[i], cd);
    $interpPoint_1(this$static.ptEnds[i], this$static.ptEnds[i + 1], this$static.ptCore[i + 1], 1 - cd);
  }
  if (this$static.polarity == -1) {
    this$static.dots = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_Point_2_classLit, $intern_50, 14, 2, 0, 1);
    dotp = $wnd.Math.abs(7 / this$static.width_0);
    this$static.dots[0] = $interpPoint_0(this$static.ptCoil[0], this$static.ptCoil[2], dotp, -7 * this$static.dsign);
    this$static.dots[1] = $interpPoint_0(this$static.ptCoil[3], this$static.ptCoil[1], dotp, -7 * this$static.dsign);
    x_0 = this$static.ptEnds[1];
    this$static.ptEnds[1] = this$static.ptEnds[3];
    this$static.ptEnds[3] = x_0;
    x_0 = this$static.ptCoil[1];
    this$static.ptCoil[1] = this$static.ptCoil[3];
    this$static.ptCoil[3] = x_0;
  }
   else 
    this$static.dots = null;
}

function TransformerElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.inductance = 4;
  this.ratio = this.polarity = 1;
  this.width_0 = 32;
  this.noDiagonal = true;
  this.couplingCoef = 0.999;
  this.current = initUnidimensionalArray(D_classLit, $intern_48, 13, 2, 15, 1);
  this.curcount = initUnidimensionalArray(D_classLit, $intern_48, 13, 2, 15, 1);
}

function TransformerElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.width_0 = 32 > (yb - ya < 0?-(yb - ya):yb - ya)?32:yb - ya < 0?-(yb - ya):yb - ya;
  this.inductance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.ratio = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.current = initUnidimensionalArray(D_classLit, $intern_48, 13, 2, 15, 1);
  this.curcount = initUnidimensionalArray(D_classLit, $intern_48, 13, 2, 15, 1);
  this.current[0] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.current[1] = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.couplingCoef = 0.999;
  try {
    this.couplingCoef = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.noDiagonal = true;
  this.polarity = (this.flags & 4) != 0?-1:1;
}

defineClass(246, 4, $intern_57, TransformerElm, TransformerElm_0);
_.calculateCurrent = function calculateCurrent_18(){
  var voltdiff1, voltdiff2;
  voltdiff1 = this.volts[0] - this.volts[2];
  voltdiff2 = this.volts[1] - this.volts[3];
  this.current[0] = voltdiff1 * this.a1 + voltdiff2 * this.a2 + this.curSourceValue1;
  this.current[1] = voltdiff1 * this.a3 + voltdiff2 * this.a4 + this.curSourceValue2;
}
;
_.drag = function drag_5(xx, yy){
  xx = $snapGrid(sim, xx);
  yy = $snapGrid(sim, yy);
  this.width_0 = max_1(32, abs_0(yy - this.y_0));
  xx == this.x_0 && (yy = this.y_0);
  this.x2 = xx;
  this.y2 = yy;
  $setPoints_14(this);
}
;
_.draw = function draw_53(g){
  var i;
  for (i = 0; i != 4; i++) {
    $setVoltageColor(this, g, this.volts[i]);
    drawThickLine_0();
  }
  for (i = 0; i != 2; i++) {
    $setPowerColor(this, g, this.current[i] * (this.volts[i] - this.volts[i + 2]));
    $drawCoil(this, g, this.ptCoil[i], this.ptCoil[i + 2], this.volts[i], this.volts[i + 2]);
  }
  $setColor(g, this.iAmMouseElm || this.selected?selectColor:lightGrayColor);
  for (i = 0; i != 2; i++) {
    drawThickLine_0();
    this.dots != null && $fillOval();
    this.curcount[i] = $updateDotCount(this.current[i], this.curcount[i]);
  }
  for (i = 0; i != 2; i++) {
    $drawDots(g, this.ptEnds[i], this.ptCoil[i], this.curcount[i]);
    $drawDots(g, this.ptCoil[i], this.ptCoil[i + 2], this.curcount[i]);
    $drawDots(g, this.ptEnds[i + 2], this.ptCoil[i + 2], -this.curcount[i]);
  }
  $drawPosts(this, g);
  $setBbox_0(this, this.ptEnds[0], this.ptEnds[this.polarity == 1?3:1], 0);
}
;
_.getDumpType = function getDumpType_79(){
  return 84;
}
;
_.getEditInfo = function getEditInfo_55(n){
  var ei;
  if (n == 0)
    return new EditInfo('Primary Inductance (H)', this.inductance, $intern_26, 5);
  if (n == 1)
    return $setDimensionless(new EditInfo('Ratio', this.ratio, 1, 10));
  if (n == 2)
    return $setDimensionless(new EditInfo('Coupling Coefficient', this.couplingCoef, 0, 1));
  if (n == 3) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Trapezoidal Approximation', (this.flags & 2) == 0);
    return ei;
  }
  if (n == 4) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Swap Secondary Polarity', this.polarity == -1);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_52(arr){
  arr[0] = 'transformer';
  arr[1] = 'L = ' + myGetUnitText(this.inductance, 'H', false);
  arr[2] = 'Ratio = 1:' + this.ratio;
  arr[3] = 'Vd1 = ' + myGetUnitText(this.volts[0] - this.volts[2], 'V', false);
  arr[4] = 'Vd2 = ' + myGetUnitText(this.volts[1] - this.volts[3], 'V', false);
  arr[5] = 'I1 = ' + myGetUnitText(this.current[0], 'A', false);
  arr[6] = 'I2 = ' + myGetUnitText(this.current[1], 'A', false);
}
;
_.getPost = function getPost_14(n){
  return this.ptEnds[n];
}
;
_.getPostCount = function getPostCount_51(){
  return 4;
}
;
_.setEditValue = function setEditValue_52(n, ei){
  n == 0 && ei.value_0 > 0 && (this.inductance = ei.value_0);
  n == 1 && ei.value_0 > 0 && (this.ratio = ei.value_0);
  n == 2 && ei.value_0 > 0 && ei.value_0 < 1 && (this.couplingCoef = ei.value_0);
  n == 3 && ($getState(ei.checkbox)?(this.flags &= -3):(this.flags |= 2));
  if (n == 4) {
    this.polarity = $getState(ei.checkbox)?-1:1;
    $getState(ei.checkbox)?(this.flags |= 4):(this.flags &= -5);
    $setPoints_14(this);
  }
}
;
_.setPoints = function setPoints_49(){
  $setPoints_14(this);
}
;
_.a1 = 0;
_.a2 = 0;
_.a3 = 0;
_.a4 = 0;
_.couplingCoef = 0;
_.curSourceValue1 = 0;
_.curSourceValue2 = 0;
_.inductance = 0;
_.polarity = 0;
_.ratio = 0;
_.width_0 = 0;
var Lcom_lushprojects_circuitjs1_client_TransformerElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TransformerElm', 246);
function $setPoints_15(this$static){
  var triPoints, ww;
  $setPoints(this$static);
  $calcLeads(this$static, 32);
  new Point;
  ww = 16;
  16 > this$static.dn / 2 && (ww = round_int(this$static.dn / 2));
  triPoints = $newPointArray(3);
  $interpPoint2(this$static.lead1, this$static.lead2, triPoints[0], triPoints[1], 0, 18);
  triPoints[2] = $interpPoint(this$static.point1, this$static.point2, 0.5 + (ww - 2) / this$static.dn);
  this$static.gatePoly = $createPolygon_1(triPoints);
  this$static.point3 = $interpPoint_0(this$static.point1, this$static.point2, 0.5, -16);
  $interpPoint_0(this$static.point1, this$static.point2, 0.5, -8);
}

function TriStateElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.r_on = 0.1;
  this.r_off = $intern_62;
}

function TriStateElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.r_on = 0.1;
  this.r_off = $intern_62;
  try {
    this.r_on = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.r_off = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
}

defineClass(257, 4, $intern_57, TriStateElm, TriStateElm_0);
_.calculateCurrent = function calculateCurrent_19(){
  this.current_0 = (this.volts[0] - this.volts[1]) / this.resistance;
}
;
_.drag = function drag_6(xx, yy){
  var q1, q2;
  xx = $snapGrid(sim, xx);
  yy = $snapGrid(sim, yy);
  abs_0(this.x_0 - xx) < abs_0(this.y_0 - yy)?(xx = this.x_0):(yy = this.y_0);
  q1 = abs_0(this.x_0 - xx) + abs_0(this.y_0 - yy);
  q2 = (q1 / 2 | 0) % sim.gridSize;
  if (q2 != 0)
    return;
  this.x2 = xx;
  this.y2 = yy;
  $setPoints_15(this);
}
;
_.draw = function draw_54(g){
  $setBbox_0(this, this.point1, this.point2, 16);
  $draw2Leads(this, g);
  $setColor(g, lightGrayColor);
  drawThickPolygon(this.gatePoly.npoints);
  $setVoltageColor(this, g, this.volts[2]);
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  $drawDots(g, this.lead2, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_80(){
  return 180;
}
;
_.getEditInfo = function getEditInfo_56(n){
  if (n == 0)
    return new EditInfo('On Resistance (ohms)', this.r_on, 0, 0);
  if (n == 1)
    return new EditInfo('Off Resistance (ohms)', this.r_off, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_53(arr){
  arr[0] = 'tri-state buffer';
  arr[1] = this.open_0?'open':'closed';
  arr[2] = 'Vd = ' + myGetUnitText($wnd.Math.abs(this.volts[0] - this.volts[1]), 'V', false);
  arr[3] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[4] = 'Vc = ' + myGetUnitText(this.volts[2], 'V', false);
}
;
_.getInternalNodeCount = function getInternalNodeCount_5(){
  return 1;
}
;
_.getPost = function getPost_15(n){
  return n == 0?this.point1:n == 1?this.point2:this.point3;
}
;
_.getPostCount = function getPostCount_52(){
  return 3;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_41(){
  return 1;
}
;
_.setEditValue = function setEditValue_53(n, ei){
  n == 0 && ei.value_0 > 0 && (this.r_on = ei.value_0);
  n == 1 && ei.value_0 > 0 && (this.r_off = ei.value_0);
}
;
_.setPoints = function setPoints_50(){
  $setPoints_15(this);
}
;
_.open_0 = false;
_.r_off = 0;
_.r_on = 0;
_.resistance = 0;
var Lcom_lushprojects_circuitjs1_client_TriStateElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TriStateElm', 257);
function $setDefaults_0(this$static){
  this$static.cresistance = 50;
  this$static.holdingI = 0.0082;
  this$static.triggerI = $intern_26;
}

function TriacElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  $setDefaults_0(this);
  this.diode = new Diode;
  $setup(this.diode, 0.8, 0);
}

function TriacElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  $setDefaults_0(this);
  try {
    this.lastvac = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.lastvag = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.volts[0] = 0;
    this.volts[1] = -this.lastvac;
    this.volts[2] = -this.lastvag;
    this.triggerI = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.holdingI = $doubleValue(__parseAndValidateDouble($nextToken(st)));
    this.cresistance = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 11))
      throw toJs($e0);
  }
  this.diode = new Diode;
  $setup(this.diode, 0.8, 0);
}

defineClass(261, 4, $intern_57, TriacElm, TriacElm_0);
_.calculateCurrent = function calculateCurrent_20(){
  this.ic = (this.volts[1] - this.volts[2]) / this.cresistance;
  this.ia = (this.volts[0] - this.volts[3]) / this.aresistance;
  this.ig = -this.ic - this.ia;
}
;
_.draw = function draw_55(g){
  var v1, v2;
  $setBbox_0(this, this.point1, this.point2, 8);
  $adjustBbox_0(this, this.gate[0], this.gate[1]);
  v1 = this.volts[0];
  v2 = this.volts[1];
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  $setColor(g, $getVoltageColor(this, g, v1));
  $fillPolygon(this.poly);
  $setColor(g, $getVoltageColor(this, g, v2));
  drawThickLine_0();
  drawThickLine_0();
  drawThickLine_0();
  this.curcount_a = $updateDotCount(this.ia, this.curcount_a);
  this.curcount_c = $updateDotCount(this.ic, this.curcount_c);
  this.curcount_g = $updateDotCount(this.ig, this.curcount_g);
  if (sim.dragElm != this) {
    $drawDots(g, this.point1, this.lead2, this.curcount_a);
    $drawDots(g, this.point2, this.lead2, this.curcount_c);
    $drawDots(g, this.gate[1], this.gate[0], this.curcount_g);
    $drawDots(g, this.gate[0], this.lead2, this.curcount_g + distance(this.gate[1], this.gate[0]));
  }
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_81(){
  return 206;
}
;
_.getEditInfo = function getEditInfo_57(n){
  if (n == 0)
    return new EditInfo('Trigger Current (A)', this.triggerI, 0, 0);
  if (n == 1)
    return new EditInfo('Holding Current (A)', this.holdingI, 0, 0);
  if (n == 2)
    return new EditInfo('Gate-Cathode Resistance (ohms)', this.cresistance, 0, 0);
  return null;
}
;
_.getInfo = function getInfo_54(arr){
  var vac, vag, vgc;
  arr[0] = 'SCR';
  vac = this.volts[0] - this.volts[1];
  vag = this.volts[0] - this.volts[2];
  vgc = this.volts[2] - this.volts[1];
  arr[1] = 'Ia = ' + myGetUnitText(this.ia, 'A', false);
  arr[2] = 'Ig = ' + myGetUnitText(this.ig, 'A', false);
  arr[3] = 'Vac = ' + myGetUnitText(vac, 'V', false);
  arr[4] = 'Vag = ' + myGetUnitText(vag, 'V', false);
  arr[5] = 'Vgc = ' + myGetUnitText(vgc, 'V', false);
}
;
_.getInternalNodeCount = function getInternalNodeCount_6(){
  return 1;
}
;
_.getPost = function getPost_16(n){
  return n == 0?this.point1:n == 1?this.point2:this.gate[1];
}
;
_.getPostCount = function getPostCount_53(){
  return 3;
}
;
_.getPower = function getPower_9(){
  return (this.volts[0] - this.volts[2]) * this.ia + (this.volts[1] - this.volts[2]) * this.ic;
}
;
_.setEditValue = function setEditValue_54(n, ei){
  n == 0 && ei.value_0 > 0 && (this.triggerI = ei.value_0);
  n == 1 && ei.value_0 > 0 && (this.holdingI = ei.value_0);
  n == 2 && ei.value_0 > 0 && (this.cresistance = ei.value_0);
}
;
_.setPoints = function setPoints_51(){
  var dir_0, gatelen, leadlen, pa;
  $setPoints(this);
  if (abs_0(this.dx) > abs_0(this.dy)) {
    dir_0 = -sign(this.dx) * sign(this.dy);
    this.point2.y_0 = this.point1.y_0;
  }
   else {
    dir_0 = sign(this.dy) * sign(this.dx);
    this.point2.x_0 = this.point1.x_0;
  }
  dir_0 == 0 && (dir_0 = 1);
  $calcLeads(this, 16);
  this.cathode = $newPointArray(2);
  pa = $newPointArray(2);
  $interpPoint2(this.lead1, this.lead2, pa[0], pa[1], 0, 8);
  $interpPoint2(this.lead1, this.lead2, this.cathode[0], this.cathode[1], 1, 8);
  this.poly = $createPolygon(pa[0], pa[1], this.lead2);
  this.gate = $newPointArray(2);
  leadlen = (this.dn - 16) / 2;
  gatelen = sim.gridSize;
  gatelen = round_int(gatelen + leadlen % sim.gridSize);
  if (leadlen < gatelen) {
    this.x2 = this.x_0;
    this.y2 = this.y_0;
    return;
  }
  $interpPoint_2(this.lead2, this.point2, this.gate[0], gatelen / leadlen, gatelen * dir_0);
  $interpPoint_2(this.lead2, this.point2, this.gate[1], gatelen / leadlen, sim.gridSize * 2 * dir_0);
}
;
_.aresistance = 0;
_.cresistance = 0;
_.curcount_a = 0;
_.curcount_c = 0;
_.curcount_g = 0;
_.holdingI = 0;
_.ia = 0;
_.ic = 0;
_.ig = 0;
_.lastvac = 0;
_.lastvag = 0;
_.triggerI = 0;
var Lcom_lushprojects_circuitjs1_client_TriacElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TriacElm', 261);
function TriodeElm(xx, yy){
  CircuitElm.call(this, xx, yy);
  this.mu = 93;
  this.kg1 = 680;
  this.noDiagonal = true;
}

function TriodeElm_0(xa, ya, xb, yb, f, st){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
  this.mu = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.kg1 = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  this.noDiagonal = true;
}

defineClass(262, 4, $intern_57, TriodeElm, TriodeElm_0);
_.draw = function draw_56(g){
  var i;
  $setColor(g, ($clinit_Color() , gray));
  drawThickCircle();
  $setBbox_0(this, this.point1, this.plate[0], 16);
  $adjustBbox(this, this.cath[0].x_0, this.cath[1].y_0, this.point2.x_0 + this.circler, this.point2.y_0 + this.circler);
  $setVoltageColor(this, g, this.volts[0]);
  $setPowerColor(this, g, this.currentp * (this.volts[0] - this.volts[2]));
  drawThickLine_0();
  drawThickLine_0();
  $setVoltageColor(this, g, this.volts[1]);
  $setPowerColor(this, g, this.currentg * (this.volts[1] - this.volts[2]));
  for (i = 0; i != 8; i += 2)
    drawThickLine_0();
  $setVoltageColor(this, g, this.volts[2]);
  $setPowerColor(this, g, 0);
  for (i = 0; i != 3; i++)
    drawThickLine_0();
  this.curcountp = $updateDotCount(this.currentp, this.curcountp);
  this.curcountc = $updateDotCount(this.currentc, this.curcountc);
  this.curcountg = $updateDotCount(this.currentg, this.curcountg);
  if (sim.dragElm != this) {
    $drawDots(g, this.plate[0], this.midgrid, this.curcountp);
    $drawDots(g, this.midgrid, this.midcath, this.curcountc);
    $drawDots(g, this.midcath, this.cath[1], this.curcountc + 8);
    $drawDots(g, this.cath[1], this.cath[0], this.curcountc + 8);
    $drawDots(g, this.point1, this.midgrid, this.curcountg);
  }
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_82(){
  return 173;
}
;
_.getEditInfo = function getEditInfo_58(n){
  if (n == 0)
    return $setDimensionless(new EditInfo('mu', this.mu, 0, 0));
  if (n == 1)
    return $setDimensionless(new EditInfo('kg1', this.kg1, 0, 0));
  return null;
}
;
_.getInfo = function getInfo_55(arr){
  var vbc, vbe, vce;
  arr[0] = 'triode';
  vbc = this.volts[0] - this.volts[1];
  vbe = this.volts[0] - this.volts[2];
  vce = this.volts[1] - this.volts[2];
  arr[1] = 'Vbe = ' + myGetUnitText(vbe, 'V', false);
  arr[2] = 'Vbc = ' + myGetUnitText(vbc, 'V', false);
  arr[3] = 'Vce = ' + myGetUnitText(vce, 'V', false);
}
;
_.getPost = function getPost_17(n){
  return n == 0?this.plate[0]:n == 1?this.grid[0]:this.cath[0];
}
;
_.getPostCount = function getPostCount_54(){
  return 3;
}
;
_.getPower = function getPower_10(){
  return (this.volts[0] - this.volts[2]) * this.current_0;
}
;
_.setEditValue = function setEditValue_55(n, ei){
  n == 0 && ei.value_0 > 0 && (this.mu = ei.value_0);
  n == 1 && ei.value_0 > 0 && (this.kg1 = ei.value_0);
}
;
_.setPoints = function setPoints_52(){
  var i;
  $setPoints(this);
  this.plate = $newPointArray(4);
  this.grid = $newPointArray(8);
  this.cath = $newPointArray(4);
  this.grid[0] = this.point1;
  $interpPoint_2(this.point1, this.point2, this.plate[1], 1, 8);
  $interpPoint_2(this.point1, this.point2, this.plate[0], 1, 32);
  $interpPoint2(this.point2, this.plate[1], this.plate[2], this.plate[3], 1, 18);
  this.circler = 24;
  $interpPoint_2(this.point1, this.point2, this.grid[1], (this.dn - this.circler) / this.dn, 0);
  for (i = 0; i != 3; i++) {
    $interpPoint_2(this.grid[1], this.point2, this.grid[2 + i * 2], (i * 3 + 1) / 4.5, 0);
    $interpPoint_2(this.grid[1], this.point2, this.grid[3 + i * 2], (i * 3 + 2) / 4.5, 0);
  }
  this.midgrid = this.point2;
  this.midcath = $interpPoint_0(this.point1, this.point2, 1, -8);
  $interpPoint2(this.point2, this.plate[1], this.cath[1], this.cath[2], -1, 16);
  $interpPoint_2(this.point2, this.plate[1], this.cath[3], -1.2, -16);
  $interpPoint_2(this.point2, this.plate[1], this.cath[0], -4, 16);
}
;
_.circler = 0;
_.curcountc = 0;
_.curcountg = 0;
_.curcountp = 0;
_.currentc = 0;
_.currentg = 0;
_.currentp = 0;
_.kg1 = 0;
_.mu = 0;
var Lcom_lushprojects_circuitjs1_client_TriodeElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TriodeElm', 262);
function TunnelDiodeElm(xx, yy){
  CircuitElm.call(this, xx, yy);
}

function TunnelDiodeElm_0(xa, ya, xb, yb, f){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
}

defineClass(263, 4, $intern_57, TunnelDiodeElm, TunnelDiodeElm_0);
_.calculateCurrent = function calculateCurrent_21(){
  var i0, voltdiff;
  voltdiff = this.volts[0] - this.volts[1];
  i0 = 3.7E-4 * $wnd.Math.exp(-0.37);
  this.current_0 = 0.0047 * $wnd.Math.exp(-20.192307692307693) * ($wnd.Math.exp(voltdiff / 0.026) - 1) + 0.0047 * (voltdiff / 0.1) * $wnd.Math.exp(1 - voltdiff / 0.1) + 3.7E-4 * $wnd.Math.exp(voltdiff - 0.37) - i0;
}
;
_.draw = function draw_57(g){
  var v1, v2;
  $setBbox_0(this, this.point1, this.point2, 8);
  v1 = this.volts[0];
  v2 = this.volts[1];
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  $setColor(g, $getVoltageColor(this, g, v1));
  $fillPolygon(this.poly);
  $setColor(g, $getVoltageColor(this, g, v2));
  drawThickLine_0();
  drawThickLine_0();
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_83(){
  return 175;
}
;
_.getInfo = function getInfo_56(arr){
  arr[0] = 'tunnel diode';
  arr[1] = 'I = ' + myGetUnitText(this.current_0, 'A', false);
  arr[2] = 'Vd = ' + myGetUnitText(this.volts[0] - this.volts[1], 'V', false);
  arr[3] = 'P = ' + myGetUnitText((this.volts[0] - this.volts[1]) * this.current_0, 'W', false);
}
;
_.setPoints = function setPoints_53(){
  var pa;
  $setPoints(this);
  $calcLeads(this, 16);
  this.cathode = $newPointArray(4);
  pa = $newPointArray(2);
  $interpPoint2(this.lead1, this.lead2, pa[0], pa[1], 0, 8);
  $interpPoint2(this.lead1, this.lead2, this.cathode[0], this.cathode[1], 1, 8);
  $interpPoint2(this.lead1, this.lead2, this.cathode[2], this.cathode[3], 0.8, 8);
  this.poly = $createPolygon(pa[0], pa[1], this.lead2);
}
;
var Lcom_lushprojects_circuitjs1_client_TunnelDiodeElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'TunnelDiodeElm', 263);
function VCOElm(xx, yy){
  ChipElm.call(this, xx, yy);
}

function VCOElm_0(xa, ya, xb, yb, f, st){
  ChipElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(281, 18, $intern_57, VCOElm, VCOElm_0);
_.draw = function draw_58(g){
  var c;
  c = this.cDir * (this.pins[4].current + this.pins[5].current) + (this.volts[3] - this.volts[2]) / $intern_56;
  this.pins[2].current = -c;
  this.pins[3].current = c;
  this.pins[0].current = -this.pins[4].current;
  $drawChip(this, g);
}
;
_.getChipName = function getChipName_24(){
  return 'VCO';
}
;
_.getDumpType = function getDumpType_84(){
  return 158;
}
;
_.getPostCount = function getPostCount_55(){
  return 6;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_42(){
  return 3;
}
;
_.setupPins = function setupPins_24(){
  this.sizeX = 2;
  this.sizeY = 4;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, 6, 0, 1);
  this.pins[0] = new ChipElm$Pin(this, 0, 2, 'Vi');
  this.pins[1] = new ChipElm$Pin(this, 3, 2, 'Vo');
  this.pins[1].output = true;
  this.pins[2] = new ChipElm$Pin(this, 0, 3, 'C');
  this.pins[3] = new ChipElm$Pin(this, 1, 3, 'C');
  this.pins[4] = new ChipElm$Pin(this, 2, 3, 'R1');
  this.pins[4].output = true;
  this.pins[5] = new ChipElm$Pin(this, 3, 3, 'R2');
  this.pins[5].output = true;
}
;
_.cDir = 0;
var Lcom_lushprojects_circuitjs1_client_VCOElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'VCOElm', 281);
function VCVSElm(xx, yy){
  VCCSElm.call(this, xx, yy);
  this.exprString = '2*(a-b)';
}

function VCVSElm_0(xa, ya, xb, yb, f, st){
  VCCSElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(291, 114, $intern_57, VCVSElm, VCVSElm_0);
_.getChipName = function getChipName_25(){
  return 'VCVS';
}
;
_.getDumpType = function getDumpType_85(){
  return 212;
}
;
_.getPostCount = function getPostCount_56(){
  return this.inputCount + 2;
}
;
_.getVoltageSourceCount = function getVoltageSourceCount_43(){
  return 1;
}
;
_.setCurrent = function setCurrent_8(vn, c){
  if (this.pins[this.inputCount].voltSource == vn) {
    this.pins[this.inputCount].current = c;
    this.pins[this.inputCount + 1].current = -c;
  }
}
;
_.setupPins = function setupPins_25(){
  var i;
  this.sizeX = 2;
  this.sizeY = this.inputCount > 2?this.inputCount:2;
  this.pins = initUnidimensionalArray(Lcom_lushprojects_circuitjs1_client_ChipElm$Pin_2_classLit, $intern_3, 6, this.inputCount + 2, 0, 1);
  for (i = 0; i != this.inputCount; i++)
    this.pins[i] = new ChipElm$Pin(this, i, 2, String.fromCharCode(65 + i & $intern_19));
  this.pins[this.inputCount] = new ChipElm$Pin(this, 0, 3, 'V+');
  this.pins[this.inputCount].output = true;
  this.pins[this.inputCount + 1] = new ChipElm$Pin(this, 1, 3, 'V-');
  new ExprState;
}
;
var Lcom_lushprojects_circuitjs1_client_VCVSElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'VCVSElm', 291);
function $createSlider_0(this$static){
  var value_0;
  this$static.waveform = 6;
  $addWidgetToVerticalPanel(sim, this$static.label_0 = new Label_0(LS(this$static.sliderText)));
  $addStyleName(this$static.label_0);
  value_0 = round_int((this$static.frequency - this$static.bias) * 100 / (this$static.maxVoltage - this$static.bias));
  $addWidgetToVerticalPanel(sim, this$static.slider = new Scrollbar_0(value_0, null, this$static));
}

function VarRailElm(xx, yy){
  RailElm_0.call(this, xx, yy, 6);
  this.sliderText = 'Voltage';
  this.frequency = this.maxVoltage;
  $createSlider_0(this);
}

function VarRailElm_0(xa, ya, xb, yb, f, st){
  RailElm_1.call(this, xa, ya, xb, yb, f, st);
  this.sliderText = $nextToken(st);
  while ($hasMoreTokens(st))
    this.sliderText += ' ' + $nextToken(st);
  this.sliderText = $replaceAll(this.sliderText, '%2[bB]', '+');
  $createSlider_0(this);
}

defineClass(240, 33, {134:1, 29:1, 4:1, 8:1, 33:1, 48:1}, VarRailElm, VarRailElm_0);
_.delete_0 = function delete_4(){
  $removeWidgetFromVerticalPanel(sim, this.label_0);
  $removeWidgetFromVerticalPanel(sim, this.slider);
}
;
_.getDumpType = function getDumpType_86(){
  return 172;
}
;
_.getEditInfo = function getEditInfo_59(n){
  var ei;
  if (n == 0)
    return new EditInfo('Min Voltage', this.bias, -20, 20);
  if (n == 1)
    return new EditInfo('Max Voltage', this.maxVoltage, -20, 20);
  if (n == 2) {
    ei = new EditInfo('Slider Text', 0, -1, -1);
    ei.text_0 = this.sliderText;
    return ei;
  }
  return null;
}
;
_.getShortcut = function getShortcut_33(){
  return 0;
}
;
_.getVoltage = function getVoltage_2(){
  this.frequency = this.slider.val_0 * (this.maxVoltage - this.bias) / 100 + this.bias;
  return this.frequency;
}
;
_.onMouseWheel = function onMouseWheel_3(e){
  !!this.slider && $onMouseWheel(this.slider, e);
}
;
_.setEditValue = function setEditValue_56(n, ei){
  n == 0 && (this.bias = ei.value_0);
  n == 1 && (this.maxVoltage = ei.value_0);
  if (n == 2) {
    this.sliderText = $getText(ei.textf);
    $setText_0(this.label_0, LS(this.sliderText));
  }
}
;
_.setMouseElm = function setMouseElm_1(v){
  this.iAmMouseElm = v;
  !!this.slider && $draw_1(this.slider);
}
;
var Lcom_lushprojects_circuitjs1_client_VarRailElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'VarRailElm', 240);
function VoltageSourceRecord(){
}

defineClass(149, 1, {149:1}, VoltageSourceRecord);
_.vsNode = 0;
_.vsNumForElement = 0;
var Lcom_lushprojects_circuitjs1_client_VoltageSourceRecord_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'VoltageSourceRecord', 149);
function WireElm(xx, yy){
  CircuitElm.call(this, xx, yy);
}

function WireElm_0(xa, ya, xb, yb, f){
  CircuitElm_0.call(this, xa, ya, xb, yb, f);
}

defineClass(142, 4, {4:1, 8:1, 142:1}, WireElm, WireElm_0);
_.draw = function draw_59(g){
  var s;
  $setVoltageColor(this, g, this.volts[0]);
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $setBbox_0(this, this.point1, this.point2, 3);
  s = '';
  (this.flags & 1) != 0 && (s = myGetUnitText($wnd.Math.abs(this.current_0), 'A', true));
  (this.flags & 2) != 0 && (s = (s.length > 0?s + ' ':'') + myGetUnitText(this.volts[0], 'V', true));
  $drawValues(this, g, s, 4);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_87(){
  return 119;
}
;
_.getEditInfo = function getEditInfo_60(n){
  var ei;
  if (n == 0) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Show Current', (this.flags & 1) != 0);
    return ei;
  }
  if (n == 1) {
    ei = new EditInfo('', 0, -1, -1);
    ei.checkbox = new Checkbox('Show Voltage', (this.flags & 2) != 0);
    return ei;
  }
  return null;
}
;
_.getInfo = function getInfo_57(arr){
  arr[0] = 'wire';
  arr[1] = 'I = ' + myGetUnitText($wnd.Math.abs(this.current_0), 'A', false);
  arr[2] = 'V = ' + myGetUnitText(this.volts[0], 'V', false);
}
;
_.getPower = function getPower_11(){
  return 0;
}
;
_.getShortcut = function getShortcut_34(){
  return 119;
}
;
_.getVoltageDiff = function getVoltageDiff_19(){
  return this.volts[0];
}
;
_.setEditValue = function setEditValue_57(n, ei){
  n == 0 && ($getState(ei.checkbox)?(this.flags |= 1):(this.flags &= -2));
  n == 1 && ($getState(ei.checkbox)?(this.flags |= 2):(this.flags &= -3));
}
;
_.hasWireInfo = false;
var Lcom_lushprojects_circuitjs1_client_WireElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'WireElm', 142);
function XorGateElm(xx, yy){
  OrGateElm.call(this, xx, yy);
}

function XorGateElm_0(xa, ya, xb, yb, f, st){
  OrGateElm_0.call(this, xa, ya, xb, yb, f, st);
}

defineClass(148, 132, {4:1, 8:1, 148:1}, XorGateElm, XorGateElm_0);
_.getDumpType = function getDumpType_88(){
  return 154;
}
;
_.getGateName = function getGateName_3(){
  return 'XOR gate';
}
;
_.getGateText = function getGateText_2(){
  return '=1';
}
;
_.getShortcut = function getShortcut_35(){
  return 52;
}
;
var Lcom_lushprojects_circuitjs1_client_XorGateElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'XorGateElm', 148);
function ZenerElm(xx, yy){
  DiodeElm.call(this, xx, yy);
  this.zvoltage = 5.6;
  $setup(this.diode, this.fwdrop, this.zvoltage);
}

function ZenerElm_0(xa, ya, xb, yb, f, st){
  DiodeElm_0.call(this, xa, ya, xb, yb, f, st);
  this.zvoltage = $doubleValue(__parseAndValidateDouble($nextToken(st)));
  $setup(this.diode, this.fwdrop, this.zvoltage);
}

defineClass(242, 131, $intern_57, ZenerElm, ZenerElm_0);
_.draw = function draw_60(g){
  var v1, v2;
  $setBbox_0(this, this.point1, this.point2, 8);
  v1 = this.volts[0];
  v2 = this.volts[1];
  $draw2Leads(this, g);
  $setPowerColor_0(this, g);
  $setColor(g, $getVoltageColor(this, g, v1));
  $fillPolygon(this.poly);
  $setColor(g, $getVoltageColor(this, g, v2));
  drawThickLine_0();
  drawThickLine_0();
  drawThickLine_0();
  this.curcount_0 = $updateDotCount(this.current_0, this.curcount_0);
  sim.dragElm != this && $drawDots(g, this.point1, this.point2, this.curcount_0);
  $drawPosts(this, g);
}
;
_.getDumpType = function getDumpType_89(){
  return 122;
}
;
_.getEditInfo = function getEditInfo_61(n){
  if (n == 0)
    return new EditInfo('Fwd Voltage @ 1A', this.fwdrop, 10, $intern_18);
  if (n == 1)
    return new EditInfo('Zener Voltage @ 5mA', this.zvoltage, 1, 25);
  return null;
}
;
_.getInfo = function getInfo_58(arr){
  $getInfo_1(this, arr);
  arr[0] = 'Zener diode';
  arr[5] = 'Vz = ' + myGetUnitText(this.zvoltage, 'V', false);
}
;
_.getShortcut = function getShortcut_36(){
  return 122;
}
;
_.setEditValue = function setEditValue_58(n, ei){
  n == 0 && (this.fwdrop = ei.value_0);
  n == 1 && (this.zvoltage = ei.value_0);
  $setup(this.diode, this.fwdrop, this.zvoltage);
}
;
_.setPoints = function setPoints_54(){
  var pa;
  $setPoints_5(this);
  $calcLeads(this, 16);
  this.cathode = $newPointArray(2);
  this.wing = $newPointArray(2);
  pa = $newPointArray(2);
  $interpPoint2(this.lead1, this.lead2, pa[0], pa[1], 0, 8);
  $interpPoint2(this.lead1, this.lead2, this.cathode[0], this.cathode[1], 1, 8);
  $interpPoint_2(this.cathode[0], this.cathode[1], this.wing[0], -0.2, -8);
  $interpPoint_2(this.cathode[1], this.cathode[0], this.wing[1], -0.2, -8);
  this.poly = $createPolygon(pa[0], pa[1], this.lead2);
}
;
var Lcom_lushprojects_circuitjs1_client_ZenerElm_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'ZenerElm', 242);
function $language(){
  if (navigator.languages) {
    if (navigator.languages.length > 0)
      return navigator.languages[0];
    else 
      return 'en-US';
  }
   else {
    return navigator.language || navigator.userLanguage;
  }
}

function $loadLocale(this$static){
  var lang_0, requestBuilder, url_0;
  lang_0 = $language();
  lang_0 = $replaceFirst(lang_0, '');
  if ($equals_1(lang_0.substr(0, 2), 'en')) {
    $loadSimulator(this$static);
    return;
  }
  url_0 = getModuleBaseURL() + 'locale_' + lang_0 + '.txt';
  requestBuilder = new RequestBuilder(($clinit_RequestBuilder() , GET), url_0);
  try {
    $sendRequest(requestBuilder, new circuitjs1$1(this$static));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 95))
      throw toJs($e0);
  }
}

function $loadSimulator(this$static){
  mysim = new CirSim;
  localizationMap = this$static.localizationMap;
  $init_1(mysim);
  addResizeHandler(new circuitjs1$2);
  $updateCircuit(mysim);
}

function $onModuleLoad_0(this$static){
  this$static.localizationMap = new HashMap;
  $loadLocale(this$static);
}

function $processLocale(this$static, data_0){
  var i, line, lines, q2, str1, str2;
  lines = $split_0(data_0, '\r?\n');
  for (i = 0; i != lines.length; i++) {
    line = lines[i];
    if (line.length == 0)
      continue;
    checkCriticalStringElementIndex(0, line.length);
    if (line.charCodeAt(0) != 34) {
      console.log('ignoring line in string catalog: ' + line);
      continue;
    }
    q2 = $indexOf_1(line, fromCodePoint(34), 1);
    if (q2 < 0 || (checkCriticalStringElementIndex(q2 + 1, line.length) , line.charCodeAt(q2 + 1) != 61) || (checkCriticalStringElementIndex(q2 + 2, line.length) , line.charCodeAt(q2 + 2) != 34) || $charAt_0(line, line.length - 1) != 34) {
      console.log('ignoring line in string catalog: ' + line);
      continue;
    }
    str1 = line.substr(1, q2 - 1);
    str2 = $substring_0(line, q2 + 3, line.length - 1);
    $putStringValue(this$static.localizationMap, str1, str2);
  }
  $loadSimulator(this$static);
}

function circuitjs1(){
}

defineClass(305, 1, {}, circuitjs1);
var mysim;
var Lcom_lushprojects_circuitjs1_client_circuitjs1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'circuitjs1', 305);
function circuitjs1$1(this$0){
  this.this$01 = this$0;
}

defineClass(307, 1, {}, circuitjs1$1);
_.onError = function onError_1(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_1(request, response){
  var statusCode, text_0;
  statusCode = response.xmlHttpRequest.status;
  if ((statusCode == 1223?204:statusCode) == 200) {
    text_0 = response.xmlHttpRequest.responseText;
    $processLocale(this.this$01, text_0);
  }
   else {
    $loadSimulator(this.this$01);
  }
}
;
var Lcom_lushprojects_circuitjs1_client_circuitjs1$1_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'circuitjs1/1', 307);
function circuitjs1$2(){
}

defineClass(309, 1, $intern_37, circuitjs1$2);
_.onResize = function onResize_5(event_0){
  $setCanvasSize(mysim);
}
;
var Lcom_lushprojects_circuitjs1_client_circuitjs1$2_2_classLit = createForClass('com.lushprojects.circuitjs1.client', 'circuitjs1/2', 309);
defineClass(616, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 616);
defineClass(617, 616, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 617);
function PrintStream(){
}

defineClass(317, 617, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 317);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $replace0(this$static, start_0, end, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + ('' + toInsert) + $substring(this$static.string, end);
}

function $setCharAt(this$static, index_0, x_0){
  $replace0(this$static, index_0, index_0 + 1, String.fromCharCode(x_0));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(160, 1, {216:1});
_.toString_0 = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 160);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(323, 41, $intern_7, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 323);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(91, 41, $intern_7, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 91);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(466, 91, $intern_7, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 466);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(322, 41, $intern_7, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 322);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = false;
}

function $booleanValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

booleanCastMap = {3:1, 189:1, 10:1};
var FALSE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 189);
function codePointAt(cs, index_0, limit){
  var hiSurrogate, loSurrogate;
  hiSurrogate = $charAt_0(cs, index_0++);
  if (hiSurrogate >= 55296 && hiSurrogate <= 56319 && index_0 < limit && isLowSurrogate(loSurrogate = (checkCriticalStringElementIndex(index_0, cs.length) , cs.charCodeAt(index_0)))) {
    return $intern_29 + ((hiSurrogate & 1023) << 10) + (loSurrogate & 1023);
  }
  return hiSurrogate;
}

function digit_0(c){
  if (c >= 48 && c < 48 + $wnd.Math.min(10, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function isLowSurrogate(ch_0){
  return ch_0 >= 56320 && ch_0 <= 57343;
}

function toChars(codePoint, dst, dstIndex){
  checkCriticalArgument(codePoint >= 0 && codePoint <= 1114111);
  if (codePoint >= $intern_29) {
    dst[dstIndex++] = 55296 + (codePoint - $intern_29 >> 10 & 1023) & $intern_19;
    dst[dstIndex] = 56320 + (codePoint - $intern_29 & 1023) & $intern_19;
    return 2;
  }
   else {
    dst[dstIndex] = codePoint & $intern_19;
    return 1;
  }
}

function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(310, 41, $intern_7, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 310);
function __parseAndValidateDouble(s){
  floatRegex == null && (floatRegex = new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));
  if (!floatRegex.test(s)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit_0((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i))) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(190, 1, {3:1, 190:1});
var floatRegex;
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 190);
function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

doubleCastMap = {3:1, 10:1, 190:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 613);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(37, 41, $intern_7, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 37);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(90, 41, $intern_7, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 90);
function Integer(value_0){
  this.value_0 = value_0;
}

function Integer_0(s){
  this.value_0 = __parseAndValidateInt(s);
}

function highestOneBit(i){
  var rtn;
  if (i < 0) {
    return -2147483648;
  }
   else if (i == 0) {
    return 0;
  }
   else {
    for (rtn = 1073741824; (rtn & i) == 0; rtn >>= 1)
    ;
    return rtn;
  }
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function signum(i){
  return i == 0?0:i < 0?-1:1;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(20, 190, {3:1, 10:1, 20:1, 190:1}, Integer, Integer_0);
_.equals_0 = function equals_7(o){
  return instanceOf(o, 20) && castTo(o, 20).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 20);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_3, 20, 256, 0, 1);
}

var boxedValues;
defineClass(671, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(92, 191, $intern_7, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 92);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(96, 37, {3:1, 11:1, 96:1, 15:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 96);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(103, 1, {3:1, 103:1}, StackTraceElement);
_.equals_0 = function equals_8(other){
  var st;
  if (instanceOf(other, 103)) {
    st = castTo(other, 103);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className_0 == st.className_0 && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_16(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_3, 1, 5, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_16(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 103);
function $charAt_0(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $compareTo(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

function $endsWith(this$static, suffix){
  var suffixlength;
  suffixlength = suffix.length;
  return $equals_1(this$static.substr(this$static.length - suffixlength, suffixlength), suffix);
}

function $equals_1(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  checkCriticalNotNull(this$static);
  if (other == null) {
    return false;
  }
  if ($equals_1(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && $equals_1(this$static.toLowerCase(), other.toLowerCase());
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $replaceFirst(this$static, replace){
  var jsRegEx;
  replace = translateReplaceString(replace);
  jsRegEx = new RegExp('-.*');
  return this$static.replace(jsRegEx, replace);
}

function $split_0(this$static, regex){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '') {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $startsWith(this$static, prefix){
  return $equals_1(this$static.substr(0, prefix.length), prefix);
}

function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && $equals_1(this$static.substr(toffset, prefix.length), prefix);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_29) {
    hiSurrogate = 55296 + (codePoint - $intern_29 >> 10 & 1023) & $intern_19;
    loSurrogate = 56320 + (codePoint - $intern_29 & 1023) & $intern_19;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_19);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_0(x_0){
  return valueOf_1(x_0, x_0.length);
}

function valueOf_1(x_0, count){
  var batchEnd, batchStart, s;
  checkCriticalStringBounds(count, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < count;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, count);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 216:1, 10:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function StringBuffer(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(312, 160, {216:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 312);
function $append_0(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $delete(this$static, start_0, end){
  this$static.string = $substring_0(this$static.string, 0, start_0) + '' + $substring(this$static.string, end);
  return this$static;
}

function $insert_4(this$static, index_0, x_0){
  this$static.string = $substring_0(this$static.string, 0, index_0) + ('' + x_0) + $substring(this$static.string, index_0);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(89, 160, {216:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 89);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(221, 91, $intern_7, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 221);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err_0 = new PrintStream;
}

defineClass(675, 1, {});
var err_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(136, 41, $intern_7, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 136);
defineClass(121, 1, $intern_77);
_.equals_0 = function equals_9(o){
  var that;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 121)) {
    return false;
  }
  that = castTo(o, 121);
  return $equals_1(this.name_0, that.name_0);
}
;
_.hashCode_0 = function hashCode_10(){
  return getHashCode_0(this.name_0);
}
;
_.toString_0 = function toString_17(){
  return this.name_0;
}
;
var Ljava_nio_charset_Charset_2_classLit = createForClass('java.nio.charset', 'Charset', 121);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_8(joiner, e === this$static?'(this Collection)':e == null?'null':toString_7(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(619, 1, {});
_.add_0 = function add_3(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_10(o){
  return $advanceToFind(this, o, true);
}
;
_.toString_0 = function toString_18(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 619);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_7(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(618, 1, {155:1});
_.equals_0 = function equals_10(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 46)) {
    return false;
  }
  otherMap = castTo(obj, 155);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.hashCodeMap.size_0 + otherMap.stringMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_11(){
  return hashCode_17(new AbstractHashMap$EntrySet(this));
}
;
_.toString_0 = function toString_19(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    $add_8(joiner, $toString_1(this, entry.getKey()) + '=' + $toString_1(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 618);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_0(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_2(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove_6(this$static, key){
  return instanceOfString(key)?key == null?$remove_12(this$static.hashCodeMap, null):$remove_13(this$static.stringMap, key):$remove_12(this$static.hashCodeMap, key);
}

function $reset_4(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(318, 618, {155:1});
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 318);
defineClass(620, 619, {184:1});
_.equals_0 = function equals_11(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 184)) {
    return false;
  }
  other = castTo(o, 184);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_17(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 620);
function $contains_0(this$static, o){
  if (instanceOf(o, 101)) {
    return $containsEntry(this$static.this$01, castTo(o, 101));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(109, 620, {184:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_4(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_1 = function remove_11(entry){
  var key;
  if ($contains_0(this, entry)) {
    key = castTo(entry, 101).getKey();
    $remove_6(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_1(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 109);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_1(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_0(), 101);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_7(this$static){
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(110, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.hasNext;
}
;
_.remove_0 = function remove_12(){
  $remove_7(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 110);
function $equals_2(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 107)) {
    return false;
  }
  other = castTo(o, 107);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

defineClass(622, 619, {107:1});
_.add_1 = function add_4(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_5(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_12(o){
  return $equals_2(this, o);
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_18(this);
}
;
_.iterator = function iterator_5(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_2 = function remove_13(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 622);
function $remove_8(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_2(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(223, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_3(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_0 = function remove_14(){
  $remove_8(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 223);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(224, 223, {}, AbstractList$ListIteratorImpl);
_.remove_0 = function remove_15(){
  $remove_8(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  return checkCriticalElement(this.i > 0) , this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 224);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(321, 620, {184:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_1 = function remove_16(key){
  if ($containsKey(this.this$01, key)) {
    $remove_6(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_2(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 321);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(222, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_4(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_0 = function remove_17(){
  $remove_7(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 222);
defineClass(319, 1, $intern_78);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 101)) {
    return false;
  }
  entry = castTo(other, 101);
  return equals_16(this.key, entry.getKey()) && equals_16(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_20(this.key) ^ hashCode_20(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_20(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 319);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(320, 319, $intern_78, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 320);
defineClass(626, 1, $intern_78);
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 101)) {
    return false;
  }
  entry = castTo(other, 101);
  return equals_16(this.val$entry2.value[0], entry.getKey()) && equals_16($getValue_0(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode_20(this.val$entry2.value[0]) ^ hashCode_20($getValue_0(this));
}
;
_.toString_0 = function toString_21(){
  return this.val$entry2.value[0] + '=' + $getValue_0(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 626);
function $add_5(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_6(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_1(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_16(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_9(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0);
  return previous;
}

function $remove_10(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i);
  return true;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
}

defineClass(106, 622, $intern_79, ArrayList);
_.add_1 = function add_6(index_0, o){
  $add_5(this, index_0, o);
}
;
_.add_0 = function add_7(o){
  return $add_6(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_0 = function get_2(index_0){
  return $get_1(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_7(){
  return new ArrayList$1(this);
}
;
_.remove_2 = function remove_18(index_0){
  return $remove_9(this, index_0);
}
;
_.remove_1 = function remove_19(o){
  return $remove_10(this, o);
}
;
_.size_1 = function size_3(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 106);
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(113, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function next_5(){
  return $next_2(this);
}
;
_.remove_0 = function remove_20(){
  checkCriticalState(this.last != -1);
  $remove_9(this.this$01, this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 113);
function hashCode_16(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_17(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_18(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(330, 622, $intern_79, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_0 = function get_3(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_4(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 330);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(331, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_6(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_0 = function remove_21(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 331);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  iterator.$modCount = host.$modCount;
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(570, 41, $intern_7, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 570);
function Date_0(){
  this.jsdate = new $wnd.Date;
}

function Date_1(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(124, 1, {3:1, 10:1, 124:1}, Date_0, Date_1);
_.equals_0 = function equals_15(obj){
  return instanceOf(obj, 124) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 124).jsdate.getTime()));
}
;
_.hashCode_0 = function hashCode_19(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt(xor_0(time, createLongEmul(shru(isSmallLong0(time)?toBigLong(time):time, 32))));
}
;
_.toString_0 = function toString_22(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 124);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_3(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset_4(this);
}

defineClass(46, 318, {3:1, 46:1, 155:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 46);
function $add_7(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_11(this$static, o){
  return $remove_6(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(202, 620, {3:1, 184:1}, HashSet);
_.add_0 = function add_8(o){
  return $add_7(this, o);
}
;
_.contains_0 = function contains_4(o){
  return $contains_1(this, o);
}
;
_.isEmpty = function isEmpty_1(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_9(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_1 = function remove_22(o){
  return $remove_11(this, o);
}
;
_.size_1 = function size_5(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 202);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_3(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_12(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_3(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete_0(this$static.backingMap, hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(353, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_10(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 353);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(225, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_7(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_6(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_0 = function remove_23(){
  $remove_12(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 225);
function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_1(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_2(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_13(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_1(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(354, 1, {}, InternalStringMap);
_.iterator = function iterator_11(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 354);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(226, 1, {}, InternalStringMap$1);
_.next_0 = function next_8(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_7(){
  return !this.current.done;
}
;
_.remove_0 = function remove_24(){
  $remove_13(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 226);
function $getValue_0(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_2(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(355, 626, $intern_78, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue_0(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 355);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(122, 41, $intern_7, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 122);
function equals_16(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_20(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_8(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_2(this$static.builder, this$static.delimiter);
  $append_1(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(218, 1, {}, StringJoiner);
_.toString_0 = function toString_23(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 218);
function $add_9(this$static, o){
  return $add_6(this$static.arrayList, o);
}

function $addElement(this$static, o){
  $add_6(this$static.arrayList, o);
}

function $elementAt(this$static, index_0){
  return checkArrayElementIndex(index_0, this$static.arrayList.array.length) , $get_1(this$static.arrayList, index_0);
}

function $firstElement(this$static){
  checkCriticalElement(this$static.arrayList.array.length != 0);
  return checkArrayElementIndex(0, this$static.arrayList.array.length) , $get_1(this$static.arrayList, 0);
}

function $get_3(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $get_1(this$static.arrayList, index_0);
}

function $remove_14(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $remove_9(this$static.arrayList, index_0);
}

function $removeElementAt(this$static){
  checkArrayElementIndex(1, this$static.arrayList.array.length);
  $remove_9(this$static.arrayList, 1);
}

function Vector(){
  this.arrayList = new ArrayList;
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

defineClass(31, 622, $intern_79, Vector);
_.add_1 = function add_9(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_5(this.arrayList, index_0, o);
}
;
_.add_0 = function add_10(o){
  return $add_9(this, o);
}
;
_.contains_0 = function contains_5(elem){
  return $indexOf_2(this.arrayList, elem, 0) != -1;
}
;
_.get_0 = function get_4(index_0){
  return $get_3(this, index_0);
}
;
_.isEmpty = function isEmpty_2(){
  return this.arrayList.array.length == 0;
}
;
_.iterator = function iterator_12(){
  return new ArrayList$1(this.arrayList);
}
;
_.remove_2 = function remove_25(index_0){
  return $remove_14(this, index_0);
}
;
_.size_1 = function size_6(){
  return this.arrayList.array.length;
}
;
_.toString_0 = function toString_24(){
  return $toString_0(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 31);
function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

defineClass(673, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

function $clinit_EmulatedCharset(){
  $clinit_EmulatedCharset = emptyMethod;
  new EmulatedCharset$UtfCharset;
  new EmulatedCharset$LatinCharset('ISO-LATIN-1');
  new EmulatedCharset$LatinCharset('ISO-8859-1');
}

function EmulatedCharset(name_0){
  this.name_0 = name_0;
}

defineClass(219, 121, $intern_77);
var Ljavaemul_internal_EmulatedCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset', 219);
function EmulatedCharset$LatinCharset(name_0){
  EmulatedCharset.call(this, name_0);
}

defineClass(220, 219, $intern_77, EmulatedCharset$LatinCharset);
var Ljavaemul_internal_EmulatedCharset$LatinCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/LatinCharset', 220);
function $decodeString(bytes, ofs, len){
  var b, ch_0, charCount, chars, count, i, i0, number, outIdx;
  charCount = 0;
  for (i0 = 0; i0 < len;) {
    ++charCount;
    ch_0 = bytes[ofs + i0];
    if ((ch_0 & 192) == 128) {
      throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
     else if ((ch_0 & 128) == 0) {
      ++i0;
    }
     else if ((ch_0 & 224) == 192) {
      i0 += 2;
    }
     else if ((ch_0 & 240) == 224) {
      i0 += 3;
    }
     else if ((ch_0 & 248) == 240) {
      i0 += 4;
    }
     else {
      throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
    if (i0 > len) {
      throw toJs(new IndexOutOfBoundsException_0('Invalid UTF8 sequence'));
    }
  }
  chars = initUnidimensionalArray(C_classLit, $intern_17, 13, charCount, 15, 1);
  outIdx = 0;
  count = 0;
  for (i = 0; i < len;) {
    ch_0 = bytes[ofs + i++];
    if ((ch_0 & 128) == 0) {
      count = 1;
      ch_0 &= 127;
    }
     else if ((ch_0 & 224) == 192) {
      count = 2;
      ch_0 &= 31;
    }
     else if ((ch_0 & 240) == 224) {
      count = 3;
      ch_0 &= 15;
    }
     else if ((ch_0 & 248) == 240) {
      count = 4;
      ch_0 &= 7;
    }
     else if ((ch_0 & 252) == 248) {
      count = 5;
      ch_0 &= 3;
    }
    while (--count > 0) {
      b = bytes[ofs + i++];
      if ((b & 192) != 128) {
        throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence at ' + (ofs + i - 1) + ', byte=' + (number = b >>> 0 , number.toString(16))));
      }
      ch_0 = ch_0 << 6 | b & 63;
    }
    outIdx += toChars(ch_0, chars, outIdx);
  }
  return chars;
}

function $encodeUtf8(bytes, ofs, codePoint){
  if (codePoint < 128) {
    bytes[ofs] = (codePoint & 127) << 24 >> 24;
    return 1;
  }
   else if (codePoint < $intern_28) {
    bytes[ofs++] = (codePoint >> 6 & 31 | 192) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 2;
  }
   else if (codePoint < $intern_29) {
    bytes[ofs++] = (codePoint >> 12 & 15 | 224) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 6 & 63 | 128) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 3;
  }
   else if (codePoint < 2097152) {
    bytes[ofs++] = (codePoint >> 18 & 7 | 240) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 12 & 63 | 128) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 6 & 63 | 128) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 4;
  }
   else if (codePoint < $intern_30) {
    bytes[ofs++] = (codePoint >> 24 & 3 | 248) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 18 & 63 | 128) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 12 & 63 | 128) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 6 & 63 | 128) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 5;
  }
  throw toJs(new IllegalArgumentException_0('Character out of range: ' + codePoint));
}

function $getBytes(str){
  var byteCount, bytes, ch_0, i, i0, n, out;
  n = str.length;
  byteCount = 0;
  for (i0 = 0; i0 < n;) {
    ch_0 = codePointAt(str, i0, str.length);
    i0 += ch_0 >= $intern_29?2:1;
    ch_0 < 128?++byteCount:ch_0 < $intern_28?(byteCount += 2):ch_0 < $intern_29?(byteCount += 3):ch_0 < 2097152?(byteCount += 4):ch_0 < $intern_30 && (byteCount += 5);
  }
  bytes = initUnidimensionalArray(B_classLit, $intern_17, 13, byteCount, 15, 1);
  out = 0;
  for (i = 0; i < n;) {
    ch_0 = codePointAt(str, i, str.length);
    i += ch_0 >= $intern_29?2:1;
    out += $encodeUtf8(bytes, out, ch_0);
  }
  return bytes;
}

function EmulatedCharset$UtfCharset(){
  EmulatedCharset.call(this, 'UTF-8');
}

defineClass(316, 219, $intern_77, EmulatedCharset$UtfCharset);
var Ljavaemul_internal_EmulatedCharset$UtfCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/UtfCharset', 316);
function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_0('Cannot suppress a null exception.'));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(670, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var Z_classLit = createForPrimitive('boolean', 'Z');
var B_classLit = createForPrimitive('byte', 'B');
var D_classLit = createForPrimitive('double', 'D');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=circuitjs1-0.js
