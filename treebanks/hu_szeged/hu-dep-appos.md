---
layout: base
title:  'Statistics of appos in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `appos`

This relation is universal.

286 nodes (1%) are attached to their parents as `appos`.

244 instances of `appos` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.35314685314685.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (130; 45% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (76; 27% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (51; 18% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (22; 8% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hu-pos-NUM.html">NUM</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu-pos-PRON.html">PRON</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 appos	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	rendezvény	rendezvény	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nmod:att	_	_
3	szónoka	szónok	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
4	Tamás	Tamás	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	flat:name	_	_
5	Gáspár	Gáspár	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	flat:name	_	_
6	Miklós	Miklós	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	appos	_	_
7	filozófus	filozófus	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
8	lesz	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 appos	color:blue
1	Szent-Györgyi	Szent-Györgyi	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
2	Albert	Albert	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	flat:name	_	_
3	segített	segít	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	rajta	rajta	PRON	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	3	nmod:obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	apja	apa	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nmod:att	_	_
7	barátja	barát	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	1	appos	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Lezárásának	lezárás	NOUN	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	nmod:att	_	_
2	határideje	határidő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	2	punct	_	_
4	2000.	2000.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	5	nmod:att	_	_
5	január	január	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	12.	12.	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	appos	_	_

~~~


