---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation subtypes are used for Pāli compounds to show how the compound's parts relate to each other.

A Pāli compound is identified through the fact that only the final member of the compound is grammatically inflected, and the earlier part(s) of the compound are in their uninflected form(s).
For example, *rukkhapatito* "tree-fallen" has *rukkha* "tree" in its stem form and only "fallen" *patito* declined.

Because the last part of the compound is inflected, we treat that part as the root of the compound which relates to the rest of the sentence and the earlier part(s) of the compound receive dependency relations (directly or indirectly) to that final part. The dependency relation to be used for this purpose is `compound` with the specific subtype for the kind of compound it is according to traditional (Pāṇinian) Sanskritic analysis:

  * [compound:dg]() — *dvigu* (a numerical relation)
  * [compound:dv]() — *dvandva* (a coordinative relation)
  * [compound:kd]() — *karmadhāraya* (an adjectival relation)
  * [compound:tp]() — *tatpuruṣa* (a case relation)
  * [compound:na]() - *nañtatpuruṣa* (a negative relation)
  * [compound:bv]() - *bahuvrīhi* (a compound used adjectively, e.g. *sa-*)
  * [compound:av]() — *avyayībhāva* (a compound used adverbially, e.g. *anu-*)

Compounds should always be annotated with a token range (e.g. `10-12`). The `compound` relations should only be used for such tokens. Sandhi should not be treated as a token range but should be treated instead as two separate tokens with the first token getting `SpaceAfter=No` to mark the lack of a space after it. Pāli UD expresses the difference between sandhi and compounds in this way.

