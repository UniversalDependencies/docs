---
layout: base
title:  'Statistics of aux:pass in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ro-dep-aux.html">aux</a></tt>.

1599 nodes (1%) are attached to their parents as `aux:pass`.

1596 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11069418386492.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (1492; 93% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (64; 4% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (31; 2% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="ro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	dosarele	dosar	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	6	obl	_	_
3	poliției	poliție	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	_
4	geneveze	genevez	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
5	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	aux:pass	_	_
6	notat	nota	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	ca	ca	ADV	Rc	_	9	advmod	_	_
8	„	„	PUNCT	DBLQ	_	9	punct	_	SpaceAfter=No
9	dangereux	dangereux	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	xcomp	_	_
10	”	”	PUNCT	DBLQ	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:pass	color:blue
1	Dar	dar	CCONJ	Ccssp	Polarity=Pos	5	cc	_	_
2	au	avea	AUX	Va--3p	Number=Plur|Person=3	5	aux	_	_
3	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	aux:pass	_	_
4	deja	deja	ADV	Rgp	Degree=Pos	5	advmod	_	_
5	puse	pune	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
6	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	circulație	circulație	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obl	_	_
8	câteva	câtva	DET	Di3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	9	det	_	_
9	exemplare	exemplar	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nsubj:pass	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	Să	să	PART	Qs	Mood=Sub	4	mark	_	_
2	fiu	fi	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
3	oare	oare	ADV	Rw	PronType=Int,Rel	4	advmod	_	SpaceAfter=No
4	-nșelată	înșelat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	?	?	PUNCT	QUEST	_	4	punct	_	_

~~~


