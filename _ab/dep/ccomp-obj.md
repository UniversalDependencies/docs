---
layout: relation
title: 'ccomp:obj'
shortdef: 'direct object complement'
udver: '2'
---

The `ccomp:obj` relation marks an a clausal complement cross-referenced by a direct object marker.

~~~ conllu
# text = Ишҧа? – иаҳаз џьашьаны ҿаанаҭит Ала.
# text-transcription = Išpa? – iaḥaz ǯ’aš’anə č̣aanatiṭ Ala.
# translation = How that? – the dog uttered, being surprised at what he had heared.
1       Ишҧа    ишҧа́    ADV     Adv_Int _       6       advcl:quote     _       _
2       ?       ?       PUNCT   Punct_IntMark   _       1       punct   _       _
3       –       –       PUNCT   Punct_Dash      _       2       punct   _       _
4       иаҳаз   аҳа-ра́  VERB    V_Dyn_Intr_NonFin_PastIndef_S:Rel_IO:3SgM_Rel   Dyn=Yes|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=Rel|Tense=Past|Trans=No|VerbForm=NonFin       5       ccomp:obj       _       _
5       џьашьаны        а-џьа·шьа-ра́    VERB    V_Dyn_Tr_NonFin_Cnv_Abs_Aor_DO:3_DO:Ad  Dyn=Yes|Person[obj]=3|Tense=Aor|Trans=Yes|VerbForm=NonFin       6       advcl:conv      _       _
6       ҿаанаҭит        а-ҿа́а·ҭ-ра      VERB    V_Dyn_Tr_Fin_Aor_S:3SgNH_DO:ҿ   Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[subj]=3|Tense=Aor|Trans=Yes|VerbForm=Fin     0       root    _       _
7       Ала     а-ла́    NOUN    Noun_NH_Sg_Det  Animacy=Nhum|Definite=Def|Number=Sing   6       nsubj   _       _
8       .       .       PUNCT   Punct_Period    _       6       punct   _       _

~~~

