---
layout: base
title:  'Morphology'
permalink: hu/overview/morphology.html
---

# Morphology

The morphology in the Hungarian UD treebank basically follows the principles of the Szeged Dependency Treebank (Vincze et al. 2010) and was automatically converted from its data, with an additional phase of manual refinement. We apply all of the universal POS-tags, however, in the current dataset, there are no instances of SYM.

As for morphological features, we apply the following language-specific extensions to the universal principles:

- PronType: for adverbs, we apply two specific values (Default and AdvPart)
- Poss: not applied in Hungarian
- Gender: not applied in Hungarian
- Animacy: not applied in Hungarian
- Number: in addition to the general usage, we also apply the features Number[psor] and Number[psed] to denote the number of the possessor and the possessed on nominal elements
- Definite: relevant for determiners and verbs in Hungarian. Besides the values Def and Indef, we apply the value 2 for marking second person objects
- VerbForm: it denotes finite and infinitival forms of verbs and auxiliaries. For adjectives, it may denote whether it is a participle with the values Part:Pres, Part:Past and Part:Fut
- Aspect: two values are used, which denote productive derivational processes: Freq (frequentative) and Mod (modal)
- Person: in addition to the general usage, we also apply the feature Person[psor] to denote the person of the possessor on nominal elements
- Negative: not applied in Hungarian

References

Vincze, Veronika; Szauter, Dóra; Almási, Attila; Móra, György; Alexin, Zoltán; Csirik, János 2010: Hungarian Dependency Treebank. In: Proceedings of the Seventh Conference on International Language Resources and Evaluation (LREC’10), Valletta, Malta.
