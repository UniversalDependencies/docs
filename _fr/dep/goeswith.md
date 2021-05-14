---
layout: relation
title:  'goeswith'
shortdef : 'goes with'
udver: '2'
---

This relation links two parts of a word that are separated in text that is not well edited, or due to tokenization errors.


|                      |        UD_French-GSD |    UD_French-Sequoia |        UD_French-FQB |        UD_French-PUD |     UD_French-ParTUT |        UD_French-FTB |     UD_French-Spoken |
|----------------------|:--------------------:|:--------------------:|:--------------------:|:--------------------:|:--------------------:|:--------------------:|:--------------------:|
|             goeswith | [34](http://match.grew.fr/?corpus=UD_French-GSD@2.7&relation=goeswith) [0.01%] | [2](http://match.grew.fr/?corpus=UD_French-Sequoia@2.7&relation=goeswith) [0.00%] | [1](http://match.grew.fr/?corpus=UD_French-FQB@2.7&relation=goeswith) [0.00%] | [3](http://match.grew.fr/?corpus=UD_French-PUD@2.7&relation=goeswith) [0.01%] | [1](http://match.grew.fr/?corpus=UD_French-ParTUT@2.7&relation=goeswith) [0.00%] |      **===========** |      **===========** |

This relation is rarely used in the French treebank.
Most of the times, it is used in cases where the `-` character is missing in the original text like in *lui même* (should be *lui-même*).

~~~ sdparse
Nous avons testé le restaurant ce week end \n We tested this restaurant this week-end
goeswith(week,end)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:07 CEST 2021 -->
