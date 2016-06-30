---
layout: base
title:  'Enhanced Dependencies in UD v2'
---

# Enhanced Dependencies in UD v2

Having a first version of the guidelines for enhanced dependencies is important not just for its own sake,
but also because it has implications for the basic dependencies. Basically, if we know that something
can be captured in the enhanced dependencies, we don’t need to clutter the basic dependencies with
this information. Examples of constructions that can benefit from this are control verbs and light verb
constructions. In this connection, it would also be relevant to discuss what language-specific subtypes can and cannot be used for. We seem to have a lot of inconsistencies here. Report from Uppsala meeting: [future](../2015-08-23-uppsala/future.html).

* There is an [LREC paper](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf) proposing the enhanced representation for English.
* Joakim on the relation between subtyping and enhanced dependencies: The mechanism of subtyping is currently used to capture many things in our treebanks. I think we should have stricter criteria for what counts as a _syntactic_ subtype. For example, "nmod:poss" is a legitimate subtype in many languages, because it is a nominal modifier with different syntactic characteristics than other cases of "nmod" (notably adpositional phrases). Similarly, "compound:prt" is legitimate because it is a highly specialised form of compounding found only in certain languages. By contrast, I don't think "dobj:lvc" is a legitimate subtype because (in most languages) there is nothing syntactically special about a direct object in an LVC, so the suffix "lvc" only signals that this construction has a special _semantic_ interpretation. My main proposal here is simply to ban subtypes that are not clearly syntactic (which has nothing to do with enhanced dependencies). However, for people that want to capture LVCs in their annotation, we could think about doing it in the enhanced dependencies. Here is an example from English, where the special relations "lvc" and "arg" would only be used in enhanced dependencies. I wonder whether this is the right approach, though, since it begins to look like we are doing semantic role labeling after all. Perhaps it is better to just ban dobj:lvc and let people use the MISC column for "nonstandard subtyping".

<div id="s1a" class="sd-parse">
she took a photo of the cathedral
dobj(took, photo)
nmod(photo, cathedral)
lvc(photo, took)
arg(photo, cathedral)
</div>

* Dan: Additional enhanced dependencies are proposed to cover [ellipsis](ellipsis.html), see the discussion there.
