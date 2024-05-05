---
layout: base
title:  'Statistics of acl:relcl in UD_Hausa-NorthernAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-NorthernAutogramm: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ha_northernautogramm-dep-acl.html">acl</a></tt>.

46 nodes (1%) are attached to their parents as `acl:relcl`.

46 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45652173913043.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt> (10; 22% instances), <tt><a href="ha_northernautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt> (9; 20% instances), <tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_northernautogramm-pos-PART.html">PART</a></tt> (8; 17% instances), <tt><a href="ha_northernautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="ha_northernautogramm-pos-AUX.html">AUX</a></tt> (7; 15% instances), <tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="ha_northernautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="ha_northernautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="ha_northernautogramm-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_northernautogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="ha_northernautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ha_northernautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="ha_northernautogramm-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="ha_northernautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	tôː	tôː	INTJ	_	_	3	discourse	_	AlignBegin=230680|AlignEnd=230864|Gloss=well
2	kaː	_	AUX	yaː	Aspect=Perf|Gender=Masc|Person=2	3	aux	_	AlignBegin=230864|AlignEnd=231048|Gloss=2Masc.Perf
3	san	sanìː	VERB	_	_	0	root	_	AlignBegin=231048|AlignEnd=231232|Gloss=know
4	loːkàcin	loːkàciː	NOUN	_	Definite=Cons|Gender=Masc	3	obj	_	AlignBegin=231232|AlignEnd=231416|Gloss=time.Masc.Cons
5	dà	dà	SCONJ	_	_	8	mark	_	AlignBegin=231416|AlignEnd=231600|Gloss=REL
6	Tuːraːwaː	Tuːrai	PROPN	_	Number=Plur	8	nsubj	_	AlignBegin=231600|AlignEnd=231784|Gloss=European.Plur
7	sun	_	AUX	yaː	Aspect=Perf|Number=Plur|Person=3	8	aux	_	AlignBegin=231784|AlignEnd=231968|Gloss=3Plur.Perf
8	shigoː	shig-	VERB	_	_	4	acl:relcl	_	AlignBegin=231968|AlignEnd=232152|Gloss=enter
9	?//	?//	PUNCT	_	_	3	punct	_	AlignBegin=232152|AlignEnd=232340|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	wàdà	wàdà	ADV	_	PronType=Rel	8	advmod	_	AlignBegin=11360|AlignEnd=11591|Gloss=how
2	ankà	_	AUX	sukà/sunkà	Aspect=PerfBkg|Person=4	3	aux	_	AlignBegin=11591|AlignEnd=11822|Background=Yes|Gloss=4.Perf.Bkg
3	yi	yi	VERB	_	_	1	acl:relcl	_	AlignBegin=11591|AlignEnd=11822|Gloss=do
4	dâː	dâː	ADV	_	_	3	advmod	_	AlignBegin=11822|AlignEnd=12053|Gloss=formerly
5	<	<	PUNCT	_	_	1	punct	_	AlignBegin=12053|AlignEnd=12284|Gloss=PUNCT
6	Galmaːwaː	Galmaːwaː	PROPN	_	_	8	dislocated	_	AlignBegin=12284|AlignEnd=12515|Gloss=Galmaːwaː
7	<	<	PUNCT	_	_	6	punct	_	AlignBegin=12515|AlignEnd=12746|Gloss=PUNCT
8	Bàːgai	Bàːgai	PROPN	_	_	0	root	_	AlignBegin=12746|AlignEnd=12977|Gloss=Bàːgai
9	takè	_	AUX	kè	Aspect=ProgLocBkg|Gender=Fem	8	advcl:cleft	_	AlignBegin=13208|AlignEnd=13439|Background=Yes|Gloss=3Fem.Pred/Loc.Bkg|wordform=kè
10	bìye	bi	VERB	_	ExtPos=ADV|VerbForm=Part|Voice=Stat	9	obl:arg	_	AlignBegin=13439|AlignEnd=13670|Gloss=follow.Part.Stat
11	//	//	PUNCT	_	_	8	punct	_	AlignBegin=13670|AlignEnd=13900|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	X	X	X	_	_	13	dep	_	AlignBegin=106671|AlignEnd=125068|Gloss=X|Scrap=Yes|wordform=XX
2	nan	nan	ADV	_	Definite=Def	13	advmod	_	AlignBegin=125500|AlignEnd=125801|Gloss=Def
3	Galmaːwaː	Galmaːwaː	PROPN	_	_	2	appos	_	AlignBegin=125801|AlignEnd=126102|Gloss=Galmaːwaː
4	<	<	PUNCT	_	_	2	punct	_	AlignBegin=126102|AlignEnd=126403|Gloss=PUNCT
5	àbin	àbiː	NOUN	_	Definite=Cons|Gender=Masc	13	obl	_	AlignBegin=126403|AlignEnd=126704|Gloss=thing.Masc.Cons
6	dà	dà	SCONJ	_	_	7	mark	_	AlignBegin=126704|AlignEnd=127005|Gloss=REL
7	an	kèːnan/aC	PART	_	_	5	acl:relcl	_	AlignBegin=127005|AlignEnd=127306|Background=Yes|Gloss=Ident/Foc.Bkg
8	nan	nan	ADV	_	Definite=Def	7	xcomp	_	AlignBegin=127306|AlignEnd=127607|Gloss=Def
9	<	<	PUNCT	_	_	7	punct	_	AlignBegin=127607|AlignEnd=127908|Gloss=PUNCT
10	duy	dukà	DET	_	PronType=Tot	11	det	_	AlignBegin=127908|AlignEnd=128209|Gloss=all
11	yawanciː	yawanciː	NOUN	_	_	13	nsubj	_	AlignBegin=128209|AlignEnd=128510|Gloss=majority
12	Baːgayaːwaː	Baːgayaːwaː	PROPN	_	Number=Plur	13	xcomp	_	AlignBegin=128510|AlignEnd=128811|Gloss=Baːgayaːwaː
13	nàː	neː/naː	PART	_	_	0	root	_	AlignBegin=128811|AlignEnd=129112|Gloss=Pred/Loc
14	//	//	PUNCT	_	_	13	punct	_	AlignBegin=129112|AlignEnd=129410|Gloss=PUNCT

~~~


