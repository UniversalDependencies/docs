---
layout: base
title:  'Statistics of xcomp in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `xcomp`

This relation is universal.

4070 nodes (1%) are attached to their parents as `xcomp`.

3809 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.0968058968059.

The following 21 pairs of parts of speech are connected with `xcomp`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (3401; 84% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (317; 8% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (132; 3% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (129; 3% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (20; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (17; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Bargués	Bargués	PROPN	np0000p	_	2	nsubj	2:nsubj	ArgTem=arg0:agt|Entity=(CESSCATAAP1999100294_fc1-person-1-gstype:spec)
2	segueix	seguir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	escalant	escalar	VERB	vmg0000	VerbForm=Ger	2	xcomp	2:xcomp	_
4	llocs	lloc	NOUN	ncmp000	Gender=Masc|Number=Plur	3	obj	3:obj	ArgTem=arg1:pat|Entity=(NOCOREF:Gen--1-gstype:gen)
5	a	a	ADP	sps00	_	7	case	7:case	_
6	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	7:det	Entity=(CESSCATAAP1999100294_fc2-other-2-gstype:spec
7	Mini-Transat	Mini-Transat	PROPN	np0000a	_	2	obl	2:obl	SpaceAfter=No|ArgTem=argM:loc|Entity=CESSCATAAP1999100294_fc2)
8	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	No	no	ADV	rn	Polarity=Neg	3	advmod	3:advmod	_
2	ens	jo	PRON	pp1cp000	Case=Acc,Dat|Number=Plur|Person=1|PronType=Prs	3	obj	3:obj	ArgTem=arg3:exp|Entity=(NOCOREF:Gen--1-gstype:gen)
3	sembla	semblar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	just	just	ADJ	aq0ms0	Gender=Masc|Number=Sing	3	xcomp	3:xcomp	SpaceAfter=No|ArgTem=arg2:atr
5	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Rivaldo	Rivaldo	PROPN	np0000p	_	2	nsubj	2:nsubj	ArgTem=arg1:tem|Entity=(CESSCATAAP20000102106c1-person-1-CorefType:ident,gstype:spec)
2	segueix	seguir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	decidit	decidit	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	2	obj	2:obj	ArgTem=arg2:atr
4	a	a	ADP	sps00	_	6	mark	6:mark	_
5	no	no	ADV	rn	Polarity=Neg	6	advmod	6:advmod	_
6	jugar	jugar	VERB	vmn0000	VerbForm=Inf	3	xcomp	3:xcomp	ArgTem=arg2:tem
7	més	més	ADV	rg	Degree=Cmp	6	advmod	6:advmod	ArgTem=argM:adv
8	com	com	SCONJ	sps00	_	10	case	10:case	MWE=com_a|MWEPOS=ADP
9	a	a	ADP	_	_	8	fixed	8:fixed	_
10	extrem	extrem	NOUN	ncms000	Gender=Masc|Number=Sing	6	obl:arg	6:obl:arg	SpaceAfter=No|ArgTem=argM:atr
11	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


