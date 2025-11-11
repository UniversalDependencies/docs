---
layout: base
title:  'Statistics of xcomp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `xcomp`

This relation is universal.

546 nodes (1%) are attached to their parents as `xcomp`.

543 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1043956043956.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (456; 84% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (27; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (18; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (15; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	là	là	ADV	_	_	4	advmod	_	AlignBegin=84365|AlignEnd=84445|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=84445|AlignEnd=84445
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=84445|AlignEnd=84475
4	viens	venir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=84475|AlignEnd=84605
5	de	de	ADP	_	_	6	mark	_	AlignBegin=84605|AlignEnd=84685
6	faire	faire	VERB	_	VerbForm=Inf	4	xcomp	_	AlignBegin=84685|AlignEnd=84855|Subject=SubjRaising
7	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	reparandum	_	AlignBegin=84855|AlignEnd=84995|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	AlignBegin=84995|AlignEnd=84995
9	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	10	det	_	AlignBegin=84995|AlignEnd=85095
10	vaccins	vaccin	NOUN	_	_	6	obj	_	AlignBegin=85095|AlignEnd=85415|Gender[lex]=Masc|Number[ctxt]=Plur
11	par	par	ADP	_	_	12	case	_	AlignBegin=85415|AlignEnd=85555
12	exemple	exemple	NOUN	_	_	4	obl:mod	_	AlignBegin=85555|AlignEnd=85835|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	AlignBegin=85835|AlignEnd=85835

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	et	et	CCONJ	_	_	3	cc	_	AlignBegin=364743|AlignEnd=364788
2	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=364788|AlignEnd=364848
3	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=364848|AlignEnd=364978
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	obj	_	AlignBegin=364978|AlignEnd=365098
5	sympa	sympa	ADJ	_	_	3	xcomp	_	AlignBegin=365098|AlignEnd=365448|Gender[ctxt]=Masc|Number[ctxt]=Sing
6	d'	de	ADP	_	_	8	mark	_	AlignBegin=365448|AlignEnd=365478|SpaceAfter=No
7	en	en	PRON	_	Person=3|PronType=Prs	8	obj	_	AlignBegin=365478|AlignEnd=365558
8	voir	voir	VERB	_	VerbForm=Inf	3	xcomp	_	AlignBegin=365558|AlignEnd=365768|Subject=SubjRaising
9	dans	dans	ADP	_	_	10	case	_	AlignBegin=365768|AlignEnd=365848
10	Paris	Paris	PROPN	_	_	8	obl:mod	_	AlignBegin=365848|AlignEnd=366064|Gender[lex]=Unknown|SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	AlignBegin=366064|AlignEnd=366064

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	2	nsubj	_	AlignBegin=126949|AlignEnd=127124|Polite=Unknown
2	allez	aller	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=127124|AlignEnd=127244
3	être	être	AUX	_	VerbForm=Inf	4	cop	_	AlignBegin=127244|AlignEnd=127444|Subject=SubjRaising
4	médecin	médecin	NOUN	_	_	2	xcomp	_	AlignBegin=127444|AlignEnd=128137|Gender[lex]=Masc|Number[ctxt]=Sing
5	en	en	ADP	_	_	6	case	_	AlignBegin=128354|AlignEnd=128404
6	France	France	PROPN	_	_	4	nmod	_	AlignBegin=128404|AlignEnd=129034|Gender[lex]=Unknown
7	en	en	ADP	_	_	8	case	_	AlignBegin=129034|AlignEnd=129547
8	hôpital	hôpital	NOUN	_	Number=Sing	4	nmod	_	AlignBegin=129609|AlignEnd=130794|Gender[lex]=Masc|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	AlignBegin=130794|AlignEnd=130794

~~~


