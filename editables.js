
function $editables() {

}

$editables.prototype = {
    vm : {
	name_description : function (ref,new_description) {
	    $xapi.xapi.VM.set_name_description(function() {}, $xapi.session,ref,new_description);
	},
	name_label : function (ref,new_name) {
	    $xapi.xapi.VM.set_name_label(function() {}, $xapi.session,ref,new_name);
	},
	memory_static_max : function (ref, new_mem_max) {
	    $xapi.xapi.VM.set_memory_static_max(function() {}, $xapi.session,ref,new_mem_max);
	},
	memory_static_min : function (ref, new_mem_min) {
	    $xapi.xapi.VM.set_memory_static_min(function() {}, $xapi.session,ref,new_mem_min);
	},
	memory_dynamic_max : function (ref, new_mem_max) {
	    $xapi.xapi.VM.set_memory_dynamic_max(function() {}, $xapi.session,ref,new_mem_max);
	},
	memory_dynamic_min : function (ref, new_mem_min) {
	    $xapi.xapi.VM.set_memory_dynamic_min(function() {}, $xapi.session,ref,new_mem_min);
	},
	VCPUs_max : function (ref, new_vcpu_max) {
	    $xapi.xapi.VM.set_VCPUs_max(function() {}, $xapi.session, ref, new_vcpu_max);
	}
    }
}

