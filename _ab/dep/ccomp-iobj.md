---
layout: relation
title: 'ccomp:iobj'
shortdef: 'indirect object complement'
udver: '2'
---

The `ccomp:iobj` relation marks an a sentence complement referenced by an indirect object marker.

~~~ conllu
# text = Иузымдыруа уазҵаар – ҧхашьараӡам …
# text-transcription = Iuzəmdərua uazc̣aar – pxaš’araʒam …
# translation = If you ask what you don’t understand, it’s no shame …
1       Иузымдыруа      а-ды́рра        VERB    V_Dyn_Tr_NonFin_Pot_Pres_Neg_S:Rel_Rel_Reln:Pot_PO:2SgM Dyn=Yes|Gender[po]=Masc|Number[po]=Sing|Person[po]=2|Person[subj]=Rel|Polarity=Neg|Reln=Pot|Tense=Pres|Trans=Yes|VerbForm=Non\
Fin        2       ccomp:iobj      _       _
2       уазҵаар а́зҵаара        VERB    V_Dyn_Intr_NonFin_Conj-I_S:2SgM_IO:3SgNH        Dyn=Yes|Gender[io]=Neut|Gender[subj]=Masc|Mood=Conj1|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=2|Trans=No|VerbForm=NonFin  \
   4       csubj   _       _
3       –       –       PUNCT   Punct_Dash      _       2       punct   _       _
4       ҧхашьараӡам     а́-ҧхашьара      VERB    Noun_NH_Sg_Pred_Fin_Pres_Neg_Emph_S:3_S:Ad      Animacy=Nhum|Number=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbForm=Fin    0       root    _       _
5       …       …       PUNCT   Punct_Ellipsis  _       4       punct   _       _

~~~

