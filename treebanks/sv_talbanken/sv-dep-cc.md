---
layout: base
title:  'Statistics of cc in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `cc`

This relation is universal.

3485 nodes (4%) are attached to their parents as `cc`.

3362 instances of `cc` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2154949784792.

The following 23 pairs of parts of speech are connected with `cc`: <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (1621; 47% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (1072; 31% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (447; 13% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (108; 3% instances), <tt><a href="sv-pos-ADV.html">ADV</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (57; 2% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (42; 1% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (38; 1% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-SYM.html">SYM</a></tt> (26; 1% instances), <tt><a href="sv-pos-ADP.html">ADP</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (18; 1% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-SYM.html">SYM</a></tt> (10; 0% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="sv-pos-DET.html">DET</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-SYM.html">SYM</a></tt> (6; 0% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sv-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	kvinnan	kvinna	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	1	nsubj	_	_
3	på	på	ADP	PP	_	4	case	_	_
4	väg	väg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	obl	_	_
5	tillbaka	tillbaka	ADV	AB	_	4	nmod	_	_
6	till	till	ADP	PP	_	7	case	_	_
7	kök	kök	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	5	obl	_	_
8	och	och	CCONJ	KN	_	9	cc	_	_
9	barnkammare	barnkammare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	conj	_	SpaceAfter=No
10	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Men	men	CCONJ	KN	_	5	cc	_	_
2	för	för	ADP	PP	_	4	case	_	_
3	barnens	barn	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	4	nmod:poss	_	_
4	del	del	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	_
5	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
7	annorlunda	annorlunda	ADV	AB	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Dubbelarbetande	dubbelarbetande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	0	root	_	_
2	eller	eller	CCONJ	KN	_	4	cc	_	_
3	enbart	enbart	ADV	AB	_	4	advmod	_	_
4	hemarbetande	hemarbetande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	1	conj	_	SpaceAfter=No
5	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


