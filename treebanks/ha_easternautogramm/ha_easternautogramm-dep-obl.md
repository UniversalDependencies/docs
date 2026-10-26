---
layout: base
title:  'Statistics of obl in UD_Hausa-EasternAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-EasternAutogramm: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="ha_easternautogramm-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ha_easternautogramm-dep-obl-mod.html">obl:mod</a></tt>.

34 nodes (0%) are attached to their parents as `obl`.

34 instances of `obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32352941176471.

The following 4 pairs of parts of speech are connected with `obl`: <tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt> (20; 59% instances), <tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_easternautogramm-pos-PROPN.html">PROPN</a></tt> (6; 18% instances), <tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt> (5; 15% instances), <tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_easternautogramm-pos-ADV.html">ADV</a></tt> (3; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	yaː	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	2	aux	_	Gloss=3Masc.Perf
2	ìsa	is-	VERB	_	_	0	root	_	Gloss=arrive
3	daːjìn	daːjìː	NOUN	_	Definite=Def|Gender=Masc	2	obl	_	Gloss=bush.Masc.Def
4	neː	neː	PART	_	PartType=Foc	3	discourse	_	Gloss=Emph
5	ta	ta	ADP	_	_	7	case	_	Gloss=via
6	wata	wani	DET	_	Definite=Spec|Gender=Fem|PronType=Ind	7	det	_	Gloss=some.Fem.Spec
7	irìn	irìː	NOUN	_	Definite=Cons|Gender=Masc	2	obl:arg	_	Gloss=type_of.Masc.Cons
8	gadàː	gadàː	NOUN	_	Gender=Fem	7	nmod	_	Gloss=bridge.Fem
9	waddà	wandà	PRON	_	Gender=Fem|PronType=Rel	7	acl:relcl	_	Gloss=REL.Fem
10	kèː	nàː	AUX	_	Aspect=Prog	11	aux	_	Copula=Yes|Gloss=Prog.Rel|Relative=Yes
11	reːtòː	rētòː	NOUN	_	Gender=Masc	9	ccomp	_	Gloss=hanging.Masc
12	dàgà	dàgà	ADP	_	_	13	case	_	Gloss=from
13	samà	samà	ADV	_	_	11	obl:arg	_	Gloss=above|SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl	color:blue
1	baːyan	baːyan	ADP	_	_	2	case	_	Gloss=after
2	shèːkàruː	shèːkaràː	NOUN	_	Number=Plur	6	obl:mod	_	Gloss=year.Plur
3	huɗu	huɗu	NUM	_	_	2	nummod	_	Gloss=four
4	nèː	neː	PART	_	PartType=Foc	2	discourse	_	Gloss=Emph
5	ya	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	6	aux	_	Gloss=3Masc.Perf.Rel|Relative=Yes
6	koːmàː	koːm-	VERB	_	_	0	root	_	Gloss=go_(back)_to
7	Nàːjeːr̃iyàː	Nàːjeːr̃iyàː	PROPN	_	_	6	obl	_	Gloss=Nigeria
8	indà	indà	PRON	_	PronType=Rel	7	acl:relcl	_	Gloss=where
9	ya	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	10	aux	_	Gloss=3Masc.Perf.Rel|Relative=Yes
10	yi	yi	VERB	_	_	8	ccomp	_	Gloss=do
11	ta	ta	PART	_	Aspect=Iter|PartType=Aspect	10	compound:prt	_	Gloss=Iter
12	gwajìː	gwajìː	NOUN	_	Gender=Masc	10	xcomp	_	Gloss=practice.Masc|SpaceAfter=No
13	,	,	PUNCT	_	_	16	punct	_	Gloss=PUNCT
14	kuma	kuma	CCONJ	_	_	16	cc	_	Gloss=also
15	yanàː	nàː	AUX	_	Aspect=Prog|Gender=Masc|Person=3	16	aux	_	Gloss=3Masc.Prog|wordform=yana
16	àmfàːniː	àmfàːniː	NOUN	_	Gender=Masc	6	conj	_	Gloss=use.Masc
17	dà	dà	ADP	_	_	18	case	_	Gloss=with
18	salon	saloː	NOUN	_	Definite=Cons|Gender=Masc	16	obl:arg	_	Gloss=style.Masc.Cons
19	kàɗe-kàɗe	kiɗìː	NOUN	_	Number=Plur	18	nmod	_	Gloss=music.Plur
20	dà	dà	CCONJ	_	_	21	cc	_	Gloss=and
21	wàːƙe-wàːƙe	waːƙàː	NOUN	_	Number=Plur	19	conj	_	Gloss=song.Plur
22	irìː-irìː	irìː-irìː	ADJ	_	Gender=Masc	18	amod	_	Gloss=various|SpaceAfter=No
23	.	.	PUNCT	_	_	6	punct	_	Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl	color:blue
1	dàgà	dàgà	ADP	_	_	2	case	_	Gloss=from
2	nan	nan	ADV	_	Deixis=ProxH|PronType=Dem	6	advmod	_	Gloss=ProxH
3	kuma	kuma	PART	_	PartType=Top	2	discourse	_	Gloss=also
4	sai	sai	ADV	_	_	6	advmod	_	Gloss=then
5	sukà	yaː	AUX	_	Aspect=Perf|Number=Plur|Person=3	6	aux	_	Gloss=3Plur.Perf.Rel|Relative=Yes
6	shìga	shig-	VERB	_	ExtPos=NOUN|Gender=Fem|VerbForm=Vnoun	0	root	_	Gloss=enter
7	yîn	yi	VERB	_	Definite=Cons|ExtPos=NOUN|Gender=Masc|VerbForm=Vnoun	6	obl	_	Gloss=do.Vnoun.Masc.Cons
8	amai	amai	NOUN	_	Gender=Masc	7	xcomp	_	Gloss=vomiting.Masc|SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	Gloss=PUNCT

~~~


