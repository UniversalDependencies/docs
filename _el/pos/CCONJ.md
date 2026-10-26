---
layout: postag
title: 'CCONJ'
redirect_from: "el/pos/CONJ.html"
shortdef: 'coordinating conjunction'
udver: '2'
---

A coordinating conjunction is a word that links words or larger
constituents without syntactically subordinating one to the other and
expresses a semantic relationship between them.

In correlative (paired) coordinating conjuctions such as _είτε - είτε_ or 
_ή - ή_ "either - or", both words are annotated `CCONJ'.



For *subordinating* conjunctions, see [SCONJ]().

#### Examples

* _και_ "and"
* _ή_ "or"
* _αλλά_ "but", _όμως_, _ωστόσο_  "however, nevertheless, yet"
* _μα_ "but" (only when it is used in the same way as "αλλά", e.g. _Είπε μα δεν τόλμησε_ "He said but didn't dare"). In other cases see INTJ.
* _<b>είτε</b> εσύ <b>είτε</b> ο Παύλος_ "<b>either</b> you <b>or</b> Pavlos"
* _<b>ούτε</b> εσύ <b>ούτε</b> ο Παύλος_ "<b>neither</b> you <b>nor</b> Pavlos"

-*Έλα που* is a conversational or idiomatic phrase, roughly meaning "but" or "yet," often used to express contrast or inevitability. It is common for the word *όμως* to be inserted into the fixed expression, where it functions emphatically to convey the contrastive meaning and is tagged as discourse. Τhe whole fixed expression functions as CCONJ, e.g., Έλα.CCONJ όμως που περνούσαν τα χρόνια “But the years kept passing by”.

~~~sdparse~~~
Έλα όμως που περνούσαν τα χρόνια 
cc(περνούσαν, Έλα)
discourse(περνούσαν, όμως)
fixed(έλα, που)
root(ROOT, περνούσαν)
~~~
---------------------
**Cretan**
-When "που" introduces a clause that is not syntactically subordinate to another, it is marked as CCONJ, e.g.,
*Μη μου τηνε κάμεις , απού.CCONJ να 'χεις την ευκή του Θεού.* "Don't do it to me, just have God's blessing."

---------------------
~~~sdparse~~~
Μη μου τηνε κάμεις , απού να 'χεις την ευκή του Θεού.
cc(έχεις, απού)
fixed(απού, να)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:58:34 CEST -->
