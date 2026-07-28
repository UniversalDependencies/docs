---
layout: base
title:  'Statistics of obj in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `obj`

This relation is universal.
There are 2 language-specific subtypes of `obj`: <tt><a href="ruc_rdt-dep-obj-appl.html">obj:appl</a></tt>, <tt><a href="ruc_rdt-dep-obj-caus.html">obj:caus</a></tt>.

412 nodes (7%) are attached to their parents as `obj`.

327 instances of `obj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3373786407767.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (288; 70% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt> (96; 23% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NUM.html">NUM</a></tt> (9; 2% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Twagirye	aja	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=1plS-find:PFV|MSeg=tu-ajirye
2	omusaiza	musaiza	NOUN	_	NounClass=Bantu1|Referent=Yes	1	obj	1:obj	Gloss=AUG-1.man|MSeg=o-musaiza
3	eni	ni	ADV	_	Deixis=Prox|NounClass=Bantu23|PronType=Dem	1	advmod	1:advmod	Gloss=23.PROX|MSeg=eni|SpaceAfter=No
4	!	!	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Ekyo	o	PRON	_	Deixis=Med|NounClass=Bantu7|Person=3|PronType=Dem	3	obj	3:obj	Gloss=7.MED|MSeg=ekyo
2	musobola	sobola	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=2plS-be_able-FV|MSeg=mu-sobol-a
3	kukikola	kola	VERB	_	NounClass=Bantu7|Person=3|VerbForm=Inf	2	xcomp	2:xcomp	Gloss=INF-7O-do-FV|MSeg=ku-ki-kol-a
4	mutyai	tyai	ADV	_	Number=Plur|Person=2|PronType=Int	3	advmod	3:advmod	Gloss=2plS-how|MSeg=mu-tyai|SpaceAfter=No
5	?	?	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Nibataka	taka	VERB	_	Mood=Ind|NounClass=Bantu2|Person=3|Tense=Nar|VerbForm=Fin	0	root	0:root	_
2	okutubandwisya	bandwa	VERB	_	Number=Sing|Person=1|Referent=Yes|VerbForm=Inf|Voice=Cau	1	xcomp	1:xcomp	_
3	oKawumpuli	Kawumpuli	PROPN	-	NounClass=Bantu1|Referent=Yes	2	obj	2:obj	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


