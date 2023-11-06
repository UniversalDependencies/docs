---
layout: base
title:  'Statistics of obl:agent in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ca_ancora-dep-obl-arg.html">obl:arg</a></tt>.

1166 nodes (0%) are attached to their parents as `obl:agent`.

1165 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.35591766723842.

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (516; 44% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (365; 31% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (179; 15% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (77; 7% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:agent	color:blue
1	L'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	2	det	2:det	SpaceAfter=No|Entity=(NOCOREF:Spec.location-place-2-gstype:spec
2	Església	Església	PROPN	np0000l	_	4	nsubj	4:nsubj	ArgTem=arg1:tem|Entity=NOCOREF:Spec.location)
3	està	estar	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	formada	format	ADJ	aq0fsp	Gender=Fem|Number=Sing|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
5	també	també	ADV	rg	_	4	advmod	4:advmod	_
6	per	per	ADP	sps00	_	8	case	8:case	_
7	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	8	det	8:det	_
8	presbiteri	presbiteri	NOUN	ncms000	Gender=Masc|Number=Sing	4	obl:agent	4:obl:agent	ArgTem=arg0:agt
9	i	i	CCONJ	cc	_	11	cc	11:cc	_
10	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	11	det	11:det	_
11	transsepte	transsepte	NOUN	ncms000	Gender=Masc|Number=Sing	8	conj	8:conj	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	Entity=(NOCOREF:Gen--2-gstype:gen
2	repartiment	repartiment	NOUN	ncms000	Gender=Masc|Number=Sing	4	nsubj	4:nsubj	ArgTem=arg1:tem|Entity=NOCOREF:Gen)
3	està	estar	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	encapçalat	encapçalat	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
5	per	per	ADP	sps00	_	6	case	6:case	_
6	Jason	Jason	PROPN	np0000p	_	4	obl:agent	4:obl:agent	MWE=Jason_Miller|MWEPOS=PROPN|ArgTem=arg0:agt
7	Miller	Miller	PROPN	_	_	6	flat	6:flat	_
8	i	i	CCONJ	cc	_	9	cc	9:cc	_
9	Marisa	Marisa	PROPN	np0000p	_	6	conj	6:conj	MWE=Marisa_Paredes|MWEPOS=PROPN|Entity=(CESSCATAAP20020301134c5--1
10	Paredes	Paredes	PROPN	_	_	9	flat	9:flat	SpaceAfter=No|Entity=CESSCATAAP20020301134c5)
11	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Ara	ara	ADV	rg	_	4	advmod	4:advmod	ArgTem=argM:tmp
2	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	estat	ser	AUX	vsp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	aux	4:aux	_
4	rescatat	rescatar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
5	per	per	ADP	sps00	_	7	case	7:case	_
6	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	7	det	7:det	SpaceAfter=No|Entity=(NOCOREF:Spec.organization-organization-2-gstype:spec
7	editorial	editorial	NOUN	ncfs000	Gender=Fem|Number=Sing	4	obl:agent	4:obl:agent	ArgTem=arg0:agt
8	Memoria	Memoria	PROPN	np0000a	_	7	appos	7:appos	MWE=Memoria_Histórica|MWEPOS=PROPN|Entity=(NOCOREF:Spec.other-other-1-gstype:spec
9	Histórica	Histórica	PROPN	_	_	8	flat	8:flat	SpaceAfter=No|Entity=NOCOREF:Spec.other)NOCOREF:Spec.organization)
10	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


