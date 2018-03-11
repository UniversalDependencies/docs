---
layout: base
title:  'Statistics of obj in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `obj`

This relation is universal.
There are 1 language-specific subtypes of `obj`: <tt><a href="hu-dep-obj-lvc.html">obj:lvc</a></tt>.

1761 nodes (4%) are attached to their parents as `obj`.

992 instances of `obj` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13344690516752.

The following 18 pairs of parts of speech are connected with `obj`: <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (1274; 72% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (209; 12% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (118; 7% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (73; 4% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (21; 1% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hu-pos-AUX.html">AUX</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	LRI	LRI	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
3	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
4	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	közleményt	közlemény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	obj	_	_
6	juttatott	jut	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
7	el	el	ADV	_	_	6	compound:preverb	_	_
8	szerkesztőségünkhöz	szerkesztőség	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	6	nmod:obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	obj	_	_
2	este	este	ADV	_	_	3	advmod:tlocy	_	_
3	visszavonta	vissza+von	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	cég	cég	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obj	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	kiadvány	kiadvány	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
3	keddi	keddi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
4	bécsi	bécsi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
5	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	premierjét	premier	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	8	obj	_	SpaceAfter=No
7	"	"	PUNCT	_	_	6	punct	_	_
8	követően	követő	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	13	amod:mode	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
10	budapesti	budapesti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	sajtóbemutatót	sajtóbemutató	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	obj:lvc	_	_
12	ma	ma	ADV	_	_	13	advmod:tlocy	_	_
13	tartják	tart	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


