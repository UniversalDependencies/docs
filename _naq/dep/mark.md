---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the word marking a clause as subordinate to another clause. For a [complement clause](naq-dep/xcomp), these are the nominalizer _sa_, the complimentizer _ǃkhaisa_, and the quotative _ti_ . For an [adverbial clause](naq-dep/advcl), the markers are the subordinate conjunctions such as _o_ (clause final) "when, if" and _î_ "so that". For a [relative clause](naq-dep/acl), the marker is the relative subordinate conjunctions _hîa/hina_. The marker is a dependent of the subordinate clause head.

~~~ sdparse
Tita ge ǃâu ǁoa Manhattansa ǃoa oa sa . \n I DECL wait unable Manhattan to return NMLZ.OBL .
mark(oa, sa)
xcomp(ǃâu, oa)
mark(return, NMLZ)
xcomp(wait, return)
~~~

~~~ sdparse
Tita ge nē xū-e gara dī o , o ta ge huiba nî ǂhâ . \n I DECL this thing would do if , then I DECL help will need .
mark(dī, o-7)
advcl(ǂhâ, dī)
mark(do, if)
advcl(need, do)
~~~

~~~ sdparse
tsaoǃoreb hîa mûǂuidaos ai mâ b  \n ashtray.3M.SG that windowsill on stand REL.3M.SG .
mark(mâ, hîa)
acl:relcl(tsaoǃoreb, mâ)
mark(stand, that)
acl:relcl(ashtray.3M.SG, stand)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:39 CEST -->
