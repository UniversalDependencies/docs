---
layout: base
title:  'name'
shortdef : 'multi-word named entity'
---

## name (multi-word named entity) <a name="sec-name"></a>

Multi-word named entities are marked using the dependency type `name`. The rightmost word of the named entity is considered the head, and the leftmost word is the dependent. If there are more than two words, these are not marked in any way, as the `name` dependency can be expanded automatically if needed.

There are two different cases in which the dependency type appears. If the multi-word named entity does not have an obvious internal syntactic structure, as is the case with for instance names of people (*Matti Virtanen*) or cities (*New York City*), only the `name` dependency is used.

If the named entity has an obvious internal structure, as is often the case in names of books and movies for instance, this structure is marked as well, and the `name` dependency is placed on top of this structure, despite it being extraneous in the tree. In these cases, the head of the internal structure, not the rightmost word of the named entity, is considered to be the true syntactic head. It is possible for the user of the treebank to choose their preferred analysis for these cases according to need, and automatically discard the alternative analysis.


<!-- fname:name.pdf -->
<div class="sd-parse">
Jumalat juhlivat öisin on Donna Tarttin esikoisteos . \n Gods celebrate by_night is Donna Tartt's first_work .
nsubj(juhlivat-2, Jumalat-1)
nmod(juhlivat-2, öisin-3)
name(öisin-3, Jumalat-1)
nsubj-cop(esikoisteos-7, juhlivat-2)
cop(esikoisteos-7, on-4)
punct(esikoisteos-7, .-8)
name(Tarttin-6, Donna-5)
poss(esikoisteos-7, Tarttin-6)
</div>


