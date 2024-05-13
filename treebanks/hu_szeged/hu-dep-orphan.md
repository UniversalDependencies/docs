---
layout: base
title:  'Statistics of orphan in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `orphan`

This relation is universal.

85 nodes (0%) are attached to their parents as `orphan`.

62 instances of `orphan` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.91764705882353.

The following 22 pairs of parts of speech are connected with `orphan`: <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (18; 21% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (10; 12% instances), <tt><a href="hu-pos-NUM.html">NUM</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (10; 12% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (7; 8% instances), <tt><a href="hu-pos-NUM.html">NUM</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (6; 7% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (5; 6% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-NUM.html">NUM</a></tt> (4; 5% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="hu-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="hu-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hu-pos-PRON.html">PRON</a></tt>-<tt><a href="hu-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 orphan	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Van	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	egy	egy	DET	_	Definite=Ind|PronType=Art	8	det	_	_
4	egyszerű	egyszerű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
5	és	és	CCONJ	_	_	8	cc	_	_
6	egy	egy	DET	_	Definite=Ind|PronType=Art	7	orphan	_	orig_deprel=det
7	bonyolult	bonyolult	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	conj	_	orig_deprel=amod:att
8	válaszom	válasz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 orphan	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	alkalmazottak	alkalmazott	NOUN	_	Case=Nom|Number=Plur	3	nmod:att	_	_
3	száma	szám	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
4	elérte	elér	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	hétszázat	hétszáz	NUM	_	Case=Acc|Number=Sing|NumType=Card	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	forgalom	forgalom	NOUN	_	Case=Nom|Number=Sing	4	conj	_	orig_deprel=nsubj
10	pedig	pedig	CCONJ	_	_	4	cc	_	ToDo=cc-in-coord
11	az	az	DET	_	Definite=Def|PronType=Art	14	det	_	_
12	57	57	NUM	_	Case=Nom|Number=Sing|NumType=Card	13	compound	_	_
13	millió	millió	NUM	_	Case=Nom|Number=Sing|NumType=Card	14	amod:att	_	_
14	dollárt	dollár	NOUN	_	Case=Acc|Number=Sing	9	orphan	_	orig_deprel=obj|SpaceAfter=No
15	,	,	PUNCT	_	_	19	punct	_	_
16	és	és	CCONJ	_	_	19	cc	_	_
17	Schultz	Schultz	PROPN	_	Case=Nom|Number=Sing	19	nsubj	_	_
18	ekkor	ekkor	ADV	_	PronType=Dem	19	advmod:tlocy	_	_
19	döntött	dönt	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	_
20	úgy	úgy	ADV	_	PronType=Dem	19	advmod:mode	_	SpaceAfter=No
21	,	,	PUNCT	_	_	19	punct	_	_
22	hogy	hogy	SCONJ	_	_	29	mark	_	_
23	a	a	DET	_	Definite=Def|PronType=Art	25	det	_	_
24	további	további	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	25	amod:att	_	_
25	terjeszkedés	terjeszkedés	NOUN	_	Case=Nom|Number=Sing	26	nmod:att	_	_
26	finanszírozása	finanszírozás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	27	nmod:att	_	_
27	érdekében	érdek	NOUN	_	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	29	nmod:obl	_	_
28	tőzsdére	tőzsde	NOUN	_	Case=Sub|Number=Sing	29	nmod:obl	_	_
29	viszi	visz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	advcl	_	_
30	a	a	DET	_	Definite=Def|PronType=Art	31	det	_	_
31	vállalatot	vállalat	NOUN	_	Case=Acc|Number=Sing	29	obj	_	SpaceAfter=No
32	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 orphan	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	első	első	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	3	amod:att	_	_
3	évben	év	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	orphan	_	orig_deprel=advmod:tlocy|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	1991-ben	1991	NUM	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	3	conj	_	_
6	mindössze	mindössze	ADV	_	_	7	advmod:mode	_	_
7	31	31	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	15	conj	_	orig_deprel=nsubj|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	tavaly	tavaly	ADV	_	_	15	advmod:tlocy	_	_
10	már	már	ADV	_	_	15	advmod:tlocy	_	_
11	több	több	DET	_	Definite=Ind|PronType=Ind	14	det	_	_
12	mint	mint	SCONJ	_	_	13	mark	_	_
13	száz	száz	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	11	advcl	_	_
14	vállalat	vállalat	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nsubj	_	_
15	jelent	jelenik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
16	meg	meg	PART	_	_	15	compound:preverb	_	_
17	a	a	DET	_	Definite=Def|PronType=Art	18	det	_	_
18	rendezvényen	rendezvény	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nmod:obl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	15	punct	_	_

~~~


