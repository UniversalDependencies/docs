---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

This relation is used to link characters that have been mistakenly split during tokenization. 

This relation will be removed in the final delivery of the language data. The words connected by `goeswith` will simply be fused together. For parser training purposes, however, we keep the relation so that the parser can learn to correct mistakenly separated tokens. All separated units should be given the same POS tag as one would give the combined unit, despite what the individual units may be tagged as had they been treated as individual words.

~~~ conllu
# visual-style 1 2 goeswith	color:blue
# visual-style 1 3 goeswith	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	不	_	INTJ	_	_	0	root	_	_
2	好	_	INTJ	_	_	1	goeswith	_	_
3	意思	_	INTJ	_	_	1	goeswith	_	_

1	"sorry"	_	_	_	_	0	_	_	_

~~~

Note that the particular class of idiomatic expressions called 成語 _chéngyǔ_ as well as quotations from Classical Chinese texts, may not always be recognized by automatic segmentation. We use the `goeswith` relation for such cases as well. Because these expressions are fossilized from earlier stages of the Chinese language, their syntax and composition often do not have a modern analysis, and therefore should not be tokenized apart.

~~~ conllu
# visual-style 1 2 goeswith	color:blue
# visual-style 1 3 goeswith	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	百	_	NOUN	_	_	0	root	_	_
2	無	_	NOUN	_	_	1	goeswith	_	_
3	禁忌	_	NOUN	_	_	1	goeswith	_	_

1	"Nothing	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	taboo."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:07 CEST 2021 -->
