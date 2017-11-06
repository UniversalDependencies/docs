---
layout: base
title:  'Statistics of obl in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `obl`

This relation is universal.

4444 nodes (8%) are attached to their parents as `obl`.

4195 instances of `obl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.09450945094509.

The following 23 pairs of parts of speech are connected with `obl`: <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (3193; 72% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (463; 10% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (335; 8% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-PROPN.html">PROPN</a></tt> (234; 5% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (65; 1% instances), <tt><a href="tr-pos-ADV.html">ADV</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (38; 1% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (33; 1% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-PROPN.html">PROPN</a></tt> (20; 0% instances), <tt><a href="tr-pos-ADV.html">ADV</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (15; 0% instances), <tt><a href="tr-pos-ADP.html">ADP</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="tr-pos-DET.html">DET</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="tr-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="tr-pos-ADV.html">ADV</a></tt>-<tt><a href="tr-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="tr-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="tr-pos-ADP.html">ADP</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="tr-pos-ADP.html">ADP</a></tt>-<tt><a href="tr-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr-pos-X.html">X</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	Oğlunun	oğul	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod:poss	_	_
2	neden	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	4	obl	_	_
3	eroinman	eroinman	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	olduğunu	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	obj	_	_
5	anlayamaması	anla	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Pot|Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Pres|VerbForm=Vnoun	7	nsubj	_	_
6	çok	çok	ADV	Adverb	_	7	advmod	_	_
7	doğal	doğal	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	dı	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	cop	_	_
9	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	tüm	tüm	DET	Det	_	2	det	_	_
2	haşmetiyle	haşmet	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obl	_	_
3	ortaya	orta	ADJ	NAdj	Case=Dat|Number=Sing|Person=3	0	root	_	_
4	çıkıyor	çık	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	3	compound	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


