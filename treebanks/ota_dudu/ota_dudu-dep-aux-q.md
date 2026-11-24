---
layout: base
title:  'Statistics of aux:q in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="ota_dudu-dep-aux.html">aux</a></tt>.

41 nodes (0%) are attached to their parents as `aux:q`.

38 instances of `aux:q` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07317073170732.

The following 5 pairs of parts of speech are connected with `aux:q`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-AUX.html">AUX</a></tt> (18; 44% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-AUX.html">AUX</a></tt> (11; 27% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-AUX.html">AUX</a></tt> (8; 20% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-AUX.html">AUX</a></tt> (3; 7% instances), <tt><a href="ota_dudu-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_dudu-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux:q	color:blue
1	bir	bir	DET	Indef	Definite=Ind|PronType=Art	3	nsubj	_	_
2	daḫı	daḫı	PART	Emph	_	1	advmod:emph	_	_
3	bu	bu	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	dur	y	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	kim	kim	SCONJ	_	_	6	mark	_	_
6	bilmez	bil	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
7	misiz	mi	AUX	Ques	Aspect=Imp|Number=Plur|Person=2|Tense=Pres	6	aux:q	_	_
8	ki	ki	SCONJ	_	_	11	mark	_	_
9	ʿanter	ʿanter	PROPN	Pers	Case=Nom|NameType=Prs|Number=Sing|Person=3	11	nsubj	_	_
10	ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	11	obl	_	_
11	ḥarīf	ḥarīf	NOUN	_	Case=Nom|Number=Sing|Person=3	6	ccomp	_	_
12	dür	y	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	11	cop	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 aux:q	color:blue
1	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	seni	sen	PRON	Pers	Case=Acc|Number=Sing|Person=2|PronType=Prs	5	obj	_	_
3	bu	bu	DET	Demons	Definite=Def|PronType=Art	4	det	_	_
4	begden	beg	NOUN	_	Case=Abl|Number=Sing|Person=3	5	obl	_	_
5	menʿ	menʿ	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	itmez	it	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	compound:lvc	_	_
7	midüm	mi	AUX	Ques	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Tense=Past	5	aux:q	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:q	color:blue
1	āzād	āzād	ADJ	Adj	_	0	root	_	_
2	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	1	aux:q	_	_
3	iderler	it	VERB	_	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	compound:lvc	_	_

~~~


