---
layout: base
title:  'Statistics of compound:preverb in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `compound:preverb`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-compound.html">compound</a></tt>.

478 nodes (1%) are attached to their parents as `compound:preverb`.

401 instances of `compound:preverb` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16945606694561.

The following 11 pairs of parts of speech are connected with `compound:preverb`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (333; 70% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PART.html">PART</a></tt> (103; 22% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (14; 3% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound:preverb	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	miniszter	miniszter	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
3	fel	fel	ADV	_	Degree=Pos	5	compound:preverb	_	_
4	akarja	akar	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	menteni	ment	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	Kovácsot	Kovács	PROPN	_	Case=Acc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:preverb	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	jogegységi	jogegységi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	3	amod:att	_	_
3	döntés	döntés	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
4	várhatóan	várható	ADJ	_	Case=Ess|Number=Sing|VerbForm=PartPres	6	advmod:mode	_	_
5	decemberben	december	NOUN	_	Case=Ine|Number=Sing	6	obl	_	_
6	születik	születik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	meg	meg	PART	_	_	6	compound:preverb	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 compound:preverb	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	mélységbe	mélység	NOUN	_	Case=Ill|Number=Sing	6	obl	_	_
3	pedig	pedig	CCONJ	_	_	5	cc	_	_
4	most	most	ADV	_	_	6	advmod:tlocy	_	_
5	kellene	kell	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	belebámulni	bele+bámul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	ahhoz	az	PRON	_	Case=All|Number=Sing|Person=3|PronType=Dem	6	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	hogy	hogy	SCONJ	_	_	13	mark	_	_
10	később	későn	ADV	_	_	13	advmod:tlocy	_	_
11	bele	ő	PRON	_	Case=Ill|Number=Sing|Person=3|PronType=Prs	13	compound:preverb	_	_
12	name	ne	ADV	_	PronType=Neg	13	advmod	_	_
13	szédüljön	szédül	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	ember	ember	NOUN	_	Case=Nom|Number=Sing	13	nsubj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


