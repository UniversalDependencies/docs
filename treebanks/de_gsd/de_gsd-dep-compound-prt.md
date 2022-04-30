---
layout: base
title:  'Statistics of compound:prt in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-compound.html">compound</a></tt>.

1509 nodes (1%) are attached to their parents as `compound:prt`.

1479 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.79456593770709.

The following 13 pairs of parts of speech are connected with `compound:prt`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (919; 61% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (568; 38% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 compound:prt	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Mittel	Mittel	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
3	sah	sehen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Tag	Tag	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	_
6	später	spät	ADV	ADJD	_	3	advmod	_	_
7	jedoch	jedoch	ADV	ADV	_	3	advmod	_	_
8	ganz	ganz	ADV	ADV	_	9	advmod	_	_
9	komisch	komisch	ADJ	ADJD	_	3	xcomp	_	_
10	aus	aus	ADP	PTKVZ	_	3	compound:prt	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 compound:prt	color:blue
1	Bei	bei	ADP	APPR	_	3	case	_	_
2	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Besuch	Besuch	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	4	obl	_	_
4	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	dann	dann	ADV	ADV	_	6	advmod	_	_
6	schließlich	schließlich	ADV	ADV	_	4	advmod	_	_
7	keine	kein	PRON	PIAT	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Neg|PronType=Neg	8	nmod	_	_
8	Vespa	Vespa	PROPN	NN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	NamedEntity=Yes
9	mehr	mehr	ADV	ADV	_	4	advmod	_	_
10	da	da	ADV	ADV	_	4	compound:prt	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:prt	color:blue
1	Judah	Judah	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	NamedEntity=Yes
2	geht	gehen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aus	aus	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Rennen	Rennen	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	7	nmod	_	_
6	als	als	ADP	KOKOM	_	7	case	_	_
7	Sieger	Sieger	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	xcomp	_	_
8	hervor	hervor	ADV	PTKVZ	_	7	compound:prt	_	SpaceAfter=No
9	;	;	PUNCT	$.	_	2	punct	_	_

~~~


