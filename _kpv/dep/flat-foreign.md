---
layout: relation
title: 'flat-foreign'
shortdef : 'flat phrase without a clear head, subcategory foreign words'
udver: '2'
---

We use `flat:foreign` to label sequences of foreign words. These are given a linear analysis: the head is the first token in the foreign phrase.

`flat:foreign` does not apply to loanwords or to foreign names. It applies to quoted foreign text incorporated in a sentence/discourse of the host language (unless we want to and know how to annotate the internal structure according to the syntax of the foreign language).


~~~ sdparse
а таво помалі Сыктывкарса канму университет , " международные отношения " специальность . \n but this year I completed [my studies at] the Syktyvkar State University, specialization in "international relations" 
cc(помалі, а)
obl:tmod(помалі, таво)
nmod:lmod(университет, Сыктывкарса)
compound(университет, канму)
flat:foreign(международные, отношения)
~~~

<!-- Interlanguage links updated St lis 3 20:58:54 CET 2021 -->
