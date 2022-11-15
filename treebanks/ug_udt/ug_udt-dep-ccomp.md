---
layout: base
title:  'Statistics of ccomp in UD_Uyghur-UDT'
udver: '2'
---

## Treebank Statistics: UD_Uyghur-UDT: Relations: `ccomp`

This relation is universal.

433 nodes (1%) are attached to their parents as `ccomp`.

423 instances of `ccomp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.23325635103926.

The following 16 pairs of parts of speech are connected with `ccomp`: <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (263; 61% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (104; 24% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt> (25; 6% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-INTJ.html">INTJ</a></tt> (7; 2% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ug_udt-pos-ADP.html">ADP</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ug_udt-pos-PART.html">PART</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	ئۆيۈڭنىڭ	ئۆي	NOUN	N	Case=Gen|Number[psor]=Sing|Person[psor]=2	3	nmod:poss	_	Translit=öyüngning
2	بارلىق	بارلىق	DET	P	Case=Nom	3	det	_	Translit=barliq
3	ئىشلىرىنى	ئىش	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	8	obj	_	Translit=ishlirini
4	ھاردىم	ھار	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	6	compound:redup	_	Translit=hardim
5	-	-	PUNCT	Y	_	4	punct	_	Translit=-
6	تالدىم	تال	VERB	A	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	nsubj	_	Translit=taldim
7	دېمەي	_	VERB	V	_	8	ccomp	_	Translit=dëmey|Morf=Unknown
8	قىلاتتىڭ	_	VERB	V	_	0	root	_	SpaceAfter=No|Translit=qilatting|Morf=Unknown
9	،	،	PUNCT	Y	_	8	punct	_	Translit=,

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	بىزنى	بىز	PRON	P	Case=Acc|Number=Plur|Person=1|PronType=Prs	4	obj	_	Translit=bizni
2	كىچىك	كىچىك	ADJ	A	_	3	amod	_	Translit=kichik
3	بالا	بالا	NOUN	N	Case=Nom	4	nsubj	_	Translit=bala
4	دەپ	دە	VERB	V	Aspect=Perf|VerbForm=Conv	8	advcl	_	SpaceAfter=No|Translit=dep
5	،	،	PUNCT	Y	_	4	punct	_	Translit=,
6	بىر	بىر	NUM	M	Case=Nom|NumType=Ord	7	nummod	_	Translit=bir
7	كولدۇرلىتاي	_	NOUN	N	_	8	ccomp	_	Translit=koldurlitay|Morf=Unknown
8	دېگەنمىدىڭىز	_	VERB	V	_	0	root	_	Translit=dëgenmidingiz|Morf=Unknown
9	يا	يا	VERB	E	Mood=Imp|VerbForm=Fin	8	discourse	_	SpaceAfter=No|Translit=ya
10	؟	؟	PUNCT	Y	_	9	punct	_	Translit=?

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 ccomp	color:blue
1	«	«	PUNCT	Y	_	5	punct	_	SpaceAfter=No|Translit=«
2	ياخشى	ياخشى	ADJ	A	_	3	amod	_	Translit=yaxshi
3	چارە	چارە	NOUN	N	Case=Nom	5	nsubj	_	Translit=chare
4	ئىشنىڭ	ئىش	NOUN	N	Case=Gen	5	nmod:poss	_	Translit=ishning
5	يېرىمى	يېرىم	ADJ	A	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	ccomp	_	SpaceAfter=No|Translit=yërimi
6	»	»	PUNCT	Y	_	5	punct	_	Translit=»
7	دېگەن	دې	VERB	V	Case=Nom|Tense=Past|VerbForm=Part	8	acl	_	Translit=dëgen
8	ماقالمۇ	ماقال	NOUN	N	Case=Nom	10	nsubj	_	Translit=maqalmu
9	شۇنىڭدىن	_	PRON	P	_	10	obl	_	Translit=shuningdin|Morf=Unknown
10	قالغانىكەن	_	VERB	V	_	0	root	_	SpaceAfter=No|Translit=qalghaniken|Morf=Unknown
11	.	.	PUNCT	Y	_	10	punct	_	Translit=.

~~~


