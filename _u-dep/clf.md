---
layout: relation
title: 'clf'
shortdef: 'classifier'
udver: '2'
---

A `clf` (classifier) is a word which accompanies a noun in certain grammatical contexts, and generally reflects some kind of 
conceptual classification of nouns, based principally on features of their referents. 
Here are some examples from Mandarin Chinese:

* 三个学生 (三個學生) sān gè xuéshēng = “three students”, literally “three [human-classifier] student”
* 三棵树 (三棵樹) sān kē shù = “three trees”, literally “three [tree-classifier] tree”
* 三只鸟 (三隻鳥) sān zhī niǎo = “three birds”, literally “three [bird-classifier] bird”
* 三条河 (三條河) sān tiáo hé = “three rivers”, literally “three [long-wavy-classifier] river”

Syntactically, the classifier groups with the numeral, rather than the noun, and we therefore treat
classifiers as functional dependents of numerals (or possessives) using the new `clf` relation.

~~~sdparse
sān gè xuéshēng \n three clf student
nummod(xuéshēng, sān)
clf(sān, gè)
~~~
