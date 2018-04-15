---
layout: base
title:  'Statistics of amod:mode in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `amod:mode`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `amod`: <tt><a href="hu_szeged-dep-amod-att.html">amod:att</a></tt>, <tt><a href="hu_szeged-dep-amod-attlvc.html">amod:attlvc</a></tt>, <tt><a href="hu_szeged-dep-amod-obl.html">amod:obl</a></tt>.

216 nodes (1%) are attached to their parents as `amod:mode`.

201 instances of `amod:mode` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08796296296296.

The following 8 pairs of parts of speech are connected with `amod:mode`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (161; 75% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (41; 19% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-DET.html">DET</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 amod:mode	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	jogegységi	jogegységi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	döntés	döntés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
4	várhatóan	várható	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	6	amod:mode	_	_
5	decemberben	december	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	születik	születik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	meg	meg	PART	_	_	6	compound:preverb	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 amod:mode	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	árindex	árindex	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	várhatóan	várható	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	5	amod:mode	_	_
4	8	8	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	százalékos	százalékos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
6	lesz	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 amod:mode	color:blue
1	Így	így	CCONJ	_	_	7	cc	_	_
2	már	már	ADV	_	_	7	advmod:mode	_	_
3	természetesen	természetes	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:mode	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	továbbjutás	továbbjutás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nsubj	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	célunk	cél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	0	root	_	SpaceAfter=No
8	!	!	PUNCT	_	_	7	punct	_	_
9	"	"	PUNCT	_	_	7	punct	_	_

~~~


