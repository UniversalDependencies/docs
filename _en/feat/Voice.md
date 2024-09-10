---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

In English, `Voice=Pass` applies to verbal past participles acting as predicate of a clause to indicate that they reflect passive voice as opposed to the active voice perfect.

The `Voice` feature is not used to explicitly mark active voice.

It is expected that a fuller account of voice in English belongs at the clause level rather than the morphological level (but no standard for clause-level features exists yet).

### <a name="Pass">`Pass`</a>: passive

Verbal past participle acting as predicate of a clause in the passive voice (as opposed to the active voice perfect).

To break this down:
- Only past participles (PTB tag of `VBN`) tagged as [VERB]() are candidates for this feature. <!-- or exceptionally, [AUX]() promoted to the predicate of the clause. [but except for "been", these are not VBN] -->
- A word attaching as [aux](), [aux:pass](), or [cop]() is not eligible. Words attaching in other functions (whether explicitly clausal in the deprel, e.g. [ccomp](), [xcomp](), [advcl](), [acl](), or not, e.g. [amod]()) are eligible.
- If the clause has a non-outer subject, it will be of the passive variety: [nsubj:pass]() or [csubj:pass](). Only `Voice=Pass` verbs may have passive subject dependents.
- In most `Voice=Pass` clauses, if the clause has any auxiliaries, one of them is a passive auxiliary: [aux:pass]().
   * If a clause has an [aux]() auxiliary but no [aux:pass]() auxiliary, it is probably an active perfect clause.
- An agent *by*-phrase in a passive clause attaches as [obl:agent](). Only `Voice=Pass` verbs may have [obl:agent]() dependents.

#### Examples:

* _Kennedy was <b>killed</b>._
* _He got <b>shot</b>._
* _It has been <b>eaten</b> by moths. Moths have eaten the painting._ (Note: _eaten_ in the second sentence is NOT an example of `Voice=Pass` because the past participle is triggered by the perfect, not passive.)
* _paintings <b>eaten</b> by moths_
* _a <b>ruined</b> sandwich_
* _Beethoven (<b>born</b> 1770, died 1827)_

#### History:

Before UD v2.13, this feature was restricted to past participles with an explicit [aux:pass]() dependent. For UD v2.13, this [was broadened](https://github.com/UniversalDependencies/UD_English-EWT/issues/290) to include all past participles interpreted as passive.
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:28 CEST -->
