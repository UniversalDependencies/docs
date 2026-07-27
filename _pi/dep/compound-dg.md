---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation subtypes are used for Pāli compounds to show how the compound's parts relate to each other.

A Pāli compound is identified through the fact that only the final member of the compound is grammatically inflected, and the earlier part(s) of the compound are in their uninflected form(s).
For example, *rukkhapatito* "tree-fallen" has *rukkha* "tree" in its stem form and only "fallen" *patito* declined.

Because the last part of the compound is inflected, we treat that part as the root of the compound which relates to the rest of the sentence and the earlier part(s) of the compound receive dependency relations (directly or indirectly) to that final part. The dependency relation to be used for this purpose is `compound` with the specific subtype for the kind of compound it is in traditional (Pāṇinian) analysis:

  * [compound:dg]() — *dvigu* (a numerical relation)

~~~ sdparse
satta-ratanāni \n seven jewels

compound:dg{ratanāni, satta-}

~~~

Compounds should always be annotated with a token range (e.g. `10-12`) and token ranges should get the `compound` relations. Sandhi should not be treated as a token range but should be treated instead as two separate tokens with the first token getting `SpaceAfter=No` to mark the lack of a space after it. Pāli UD expresses the difference between sandhi and compounds in this way.

"Compounds" that are only compounds because they are *na-* negated should **not** be treated as compounds.
If the *na-* is in "n'" form (on a verb, as in "*nānubhava*" "doesn't accomplish"), that should be treated as sandhi (as above).
If the *na-* is in "a-" prefix (on a adjective/participle, as in "*amakkhito*" "undefiled"), then you should treat the entire negated word as a single token and use the `Polarity=Neg` feature to mark the negation.
If, however, the negated word is a compound even without the negation, as in "*anindārosa*" "free of blaming and offense", then the *na* should be treated as a compound part and given the `compound:na` relation in that case.
