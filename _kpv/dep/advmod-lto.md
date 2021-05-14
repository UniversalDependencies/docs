---
layout: relation
title: 'advmod:lto'
shortdef: 'advmod with locative to modality'
udver: '2'
---

The _advmod:lto_ relation is used for adverbal modifiers with locative to, i.e. direction to modality.
This is distinguished from other locative dependency relations advmod:lmod, advmod:lfrom and advmod:lmp,
which generally indicate locative, source and path, respectively.

~~~ sdparse
Ӧтияс ӧтарӧ котӧртӧны, мӧдъяс — мӧдарӧ,... \n Some are running one way, the others the other,...
nsubj(котӧртӧны, Ӧтияс)
advmod:lto(котӧртӧны, ӧтарӧ)
conj(котӧртӧны, мӧдъяс)
orphan(мӧдъяс, мӧдарӧ)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:49 CEST 2021 -->
