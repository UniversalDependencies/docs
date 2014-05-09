---
layout: base
title: 'pobj'
---

## pobj : object of a preposition

The object of a preposition is the head of a noun phrase following the
preposition, or the adverbs "here" and "there". (The preposition in
turn may be modifying a noun, verb, etc.) Unlike the Penn Treebank, we
here define cases of VBG quasi-prepositions like "including",
"concerning", etc. as instances of *pobj*. (The preposition can be
tagged a FW for "pace", "versus", etc. It can also be called a CC --
but we don't currently handle that and would need to distinguish from
conjoined prepositions.) In the case of preposition stranding, the
object can precede the preposition (e.g., "What does CPR stand for?").

<div class="sd-parse">
I sat on the chair
pobj(on, chair)
</div>
