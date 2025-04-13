---
layout: relation
title: 'parataxis:reporting'
shortdef: 'interjected verb of saying'
udver: '2'
---

This subtype of [`parataxis`](la-dep/parataxis) is introduced to label those instances of a verb phrase of saying or similar which appears syntactically disjointed from the rest of a sentence that could otherwise be its [object clause](la-dep/ccomp-reported). Such a verb phrase is interjected in the midst of a sentence and lies in the background with respect to what is said, more like a [discoursive element](la-dep/discourse) or a [vocative](la-dep/vocative), and therefore it is not treated as the head. The relation [`parataxis`](la-dep/parataxis) is currently preferred over [`discourse`](la-dep/discourse), since this construction is looser, less functional to discourse than the latter, and it represents a sort of implicit "inverse relation" of direct speech.


~~~ sdparse
Perlege , deprecor , Fortuitorum Remedia , que ab inclitissimo phylosophorum Seneca nobis velut a patre filiis ministrantur , et illud de memoria sana tua non defluat : « Si de mundo fuissetis , mundus quod suum erat diligeret » .
parataxis:reporting(Perlege, deprecor)
~~~

'Read, **I beg you**, the *Remedies against Fortune*, which are offered to us, as it were by a father to his sons, by that most famous philosopher Seneca; and especially let that saying not pass from your memory: "If ye were of the world, the world would love his own."' (`UDante Epi-33`, *Letters* III 8, Dante Alighieri)

* here *deprecor* 'to beg' could be constructed with the rest of the sentence subordinated as e.g. an *accusativus cum infinitivo*: *deprecor te perlegere...*
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:26 CET -->
