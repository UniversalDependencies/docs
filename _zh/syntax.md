---
layout: base
title:  'Syntax'
udver: '2'
---

# Syntax

## UD Chinese

[Description not currently available.]


## UD Chinese-CFL

### General Comments

A "literal annotation" is preferred, i.e., one should annotate "as if the sentence were as syntactically well-formed as it can be, possibly ignoring meaning" (Ragheb and Dickinson, 2014).

### Missing words

When a word seems missing in the learner sentence, we annotate according to the UD guidelines on promotion by head elision. For example, in the sentence fragment 在中國最近幾年 _zai zhongguo zuijin ji nian_ "in China recent few years", we promote 年 _nian_ "year" to be the root. Although both 中國 _zhongguo_ "China" and 年 _nian_ "year" would be `obl` dependents if a verb was present, 年 _nian_ "year" is promoted because it is closer to the expected location of the verb.

### Word-order errors

The annotation should assume no word order error. For example, in the sentence \*我被了他打一頓. The aspect particle 了 _le_ usually modifies the verb that precedes it immediately, and is probably misplaced in this sentence. It is most likely intended to modify 打 _da_ "hit", and should immediately follow da rather than 被 _bei_, the passive marker.

To adhere to the principle of "literal annotation", rather than annotating le as the child of 打 _da_ "hit" with the `aux` relation, we annotate 了 _le_ as the child of 被 _bei_ with the `dep` relation.

### `dep` (unspecified dependency)

When learner errors make it difficult to characterize the grammatical relation between a word and the rest of the sentence, we use the `dep` relation. Typically, when the POS tag differs from the distributional POS tag, the `dep` relation is needed.

Consider the sentence \*我可怕他 "\*I scary him". From the point of view of its POS tag, it is unclear how the word 可怕 _kepa_ "scary", as an adjective, relates to the pronoun. We thus consider kepa as the head of 他 _ta_ "him" with the `dep` relation.

When a word has a different distributional POS tag, we also include a "distributional" dependency relation on the basis of the word's distributional POS tag. This relation is stored in column 4 of the `.conllux` file. In the example sentence above, the word 可怕 _kepa_ "scary", as a verb, is the head of 他 _ta_ "him" with the `obj` relation.

### References

Marwa Ragheb and Markus Dickinson. 2014. Developing a Corpus of Syntactically-annotated Learner Language for English. Proceedings of the 13th International Workshop on Treebanks and Linguistic Theories (TLT).


## UD Chinese-HK

[Description not currently available.]


## UD Chinese-PatentChar

Automatacally converted from the primery character-level annoation using Grew-Match.


