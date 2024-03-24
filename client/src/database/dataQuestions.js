const dataQuestions = [ 
    {_id: "1a",
      question: "Digitale Güter liegen in Form von ...",
      options: [
        "Binärdaten vor",
        "Computerdaten vor",
        "elektronischen daten vor",
        "großen Datenmengen vor"],
      answer: "Binärdaten vor",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "2a",
      question: "Servicemodelle in der Cloud sind …",
      options: [
        "… PaaP, AppA, AiiA.",
        "… PaaS, SAP, IaaS.",
        "… SaaS, PaaS, IaaP.",
        "… SaaS, PaaS, IaaS."
      ],
      answer: "… SaaS, PaaS, IaaS.",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "3a",
      question: "Aus welchen Phasen besteht der Softwarelebenszyklus?",
      options: [
        "Planung, Entwicklung, Betrieb, Wartung, Abschaltung",
        "Anforderung, Verifizierung, Implementierung, Abnahme",
        "Planning, Development, Testing, Acceptance",
        "Plan, Do, Check, Act"
      ],
      answer: "Planung, Entwicklung, Betrieb, Wartung, Abschaltung",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "4a",
      question: "Ein virtueller Marktplatz befindet sich …",
      options: [
        "… in der Cloud.",
        "… in einem privaten Netzwerk.",
        "… im Internet.",
        "großen Datenmengen vor"
      ],
      answer: "… im Internet.",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "5a",
      question: "Die technische Informatik bildet die Schnittstelle zwischen …",
      options: [
        "… Information und technischem Betrieb.",
        "… Informatik und Sozialwissenschaften.",
        "… Informatik und Elektronik.",
        "… Informatik und Elektrotechnik."
      ],
      answer: "… Informatik und Elektrotechnik.",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "6a",
      question: "Was versteht man unter Datenkonsistenz?",
      options: [
        "die im Kontext verstandene formale Widerspruchsfreiheit von Daten",
        "die fachliche und formale Widerspruchsfreiheit von Daten",
        "die technische und formale Widerspruchsfreiheit von Daten",
        "die inhaltliche und formale Widerspruchsfreiheit von Daten"
      ],
      answer: "die inhaltliche und formale Widerspruchsfreiheit von Daten",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "7a",
      question: "Wofür steht die Abkürzung BPM?",
      options: [
        "Business and Performance Management",
        "Business Process Model and Notation",
        "Business Peer Management",
        "Business Power Management Naming"
      ],
      answer: "Business Process Model and Notation",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "8a",
      question: "Ausschlaggebend für die Auswahl einer Modellierungssprache ist …",
      options: [
        "… die vorhandene Infrastruktur.",
        "… das Wissen der Mitarbeiter.",
        "… die Größe des Unternehmens.",
        "… die verwendete Datenbank."
      ],
      answer: "… die vorhandene Infrastruktur.",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "9a",
      question: "Ein Bit ist …",
      options: [
        "… die Abkürzung für Bitfolge.",
        "… die größtmögliche Einheit einer Information.",
        "… die kleinstmögliche Einheit von Daten.",
        "… die kleinstmögliche Einheit einer Information."
      ],
      answer: "… die kleinstmögliche Einheit einer Information.",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "10a",
      question: "Was sind die Elemente der Von-Neumann-Architektur?",
      options: [
        "Speicher, Tastatur, Bus, CPU, REM",
        "RAM, ROM, CPU, ALU, Tastatur",
        "Speicherwerk, Steuerwerk, Rechenwerk, Ein-/Ausgabewerk, Bus-System",
        "Maus, Tastatur, Monitor, CD-ROM"
      ],
      answer: "Speicherwerk, Steuerwerk, Rechenwerk, Ein-/Ausgabewerk, Bus-System",
      subjectname: "Wirtschaftsinformatik"
    },
    {
      _id: "1b",
      question: "Welcher der folgenden Faktoren ist ein Kano-Typ?",
      options: [
        "Rechtliche Relevanz",
        "Randbedingung",
        "Selektiver Faktor",
        "Leistungsfaktor"
      ],
      answer: "Leistungsfaktor",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "2b",
      question: "Die Kernaktivitäten im Requirements Engineering ...",
      options: [
        "sind in der konkreten Reihenfolge und Dauer für jedes Projekt exakt festzulegen",
        "sind Ermitteln, Dokumentieren und Prüfen + Abstimmen",
        "sind nur Ermitteln und Dokumentieren, denn Prüfen + Abstimmen ist keine Kernaktivität.",
        "sind in der konkreten Reihenfolge festzulegen"
      ],
      answer: "sind Ermitteln, Dokumentieren und Prüfen + Abstimmen",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "3b",
      question: "Mit dem Begriff „Anforderung“ ...",
      options: [
        "werden Funktionen, jedoch keine Eigenschaften von Systemen bezeichnet.",
        "werden Funktionen eines Systems bezeichnet, mit denen ein fachliches Problem gelöst werden soll.",
        "werden alle Wünsche der Anwender an das zu erstellende System zusammengefasst.",
        "werden alle Wünsche und Träume zusammengefasst."
      ],
      answer: "werden Funktionen eines Systems bezeichnet, mit denen ein fachliches Problem gelöst werden soll.",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "4b",
      question: "Qualitätsanforderungen ...",
      options: [
        "sind quantitative Anforderungen, mit denen funktionale Anforderungen ergänzt werden können.",
        "haben im weiteren Projektverlauf keinen Einfluss mehr.",
        "sind keine Anforderungen, sondern spezielle Systemeigenschaften.",
        "sind nicht zu berücksichtigen"
      ],
      answer: "sind quantitative Anforderungen, mit denen funktionale Anforderungen ergänzt werden können.",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "5b",
      question: "Techniken zur Ermittlung von Anforderungen ...",
      options: [
        "sind alle geeignet, um implizite Anforderungen zu erheben.",
        "verursachen alle ungefähr gleich viel Aufwand.",
        "werden in typischer Weise kombiniert eingesetzt, um Anforderungen zu erheben.",
        "sind nicht wichtig"
      ],
      answer: "werden in typischer Weise kombiniert eingesetzt, um Anforderungen zu erheben.",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "6b",
      question: "Kreativitätstechniken ...",
      options: [
        "eignen sich besonders, um innovative Anforderungen zu erheben.",
        "eigenen sich, um detaillierte Anforderungen zu erheben.",
        "sind universell einsetzbar.",
        "gibt es nicht"
      ],
      answer: "eignen sich besonders, um innovative Anforderungen zu erheben.",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "7b",
      question: "Die Auswahl von Techniken zur Anforderungsermittlung ...",
      options: [
        "ist für alle Anforderungsquellen gleich.",
        "muss nicht den individuellen Gegebenheiten des Projekts angepasst werden.",
        "ist abhängig von menschlichen, organisatorischen und fachlichen Einflussfaktoren.",
        "ist nicht abhängig von menschlichen, organisatorischen und fachlichen Einflussfaktoren."
      ],
      answer: "ist abhängig von menschlichen, organisatorischen und fachlichen Einflussfaktoren.",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "8b",
      question: "Der Transformationsprozess zwischen Sender und Empfänger ...",
      options: [
        "kann zu Missverständnissen führen, insbesondere wenn die mentalen Bilder von Sender und Empfänger nicht übereinstimmen.",
        "hat keinen Einfluss auf den Requirements-Engineering-Prozess.",
        "hat keine Relevanz",
        "kann nicht zu Missverständnissen führen"
      ],
      answer: "kann zu Missverständnissen führen, insbesondere wenn die mentalen Bilder von Sender und Empfänger nicht übereinstimmen.",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "9b",
      question: "Quellen für Anforderungen ...",
      options: [
        "stehen bereits zu Beginn des Requirements-Engineering-Prozesses fest.",
        "sind Systeme, Stakeholder und Dokumente.",
        "sind nicht Teil des Systemkontexts",
        "sind alle Wünsche und Träume"
      ],
      answer: "sind Systeme, Stakeholder und Dokumente.",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "10b",
      question: "Stakeholder ...",
      options: [
        "die wenig Einfluss auf das Projekt haben, müssen nicht berücksichtigt werden.",
        "sind nicht wichtige Anforderungsquelle.",
        "sind im Rahmen des Stakeholdermanagements nicht zu steuern",
        "sind in der Regel die wichtigste Anforderungsquelle"
      ],
      answer: "sind in der Regel die wichtigste Anforderungsquelle",
      subjectname: "Requirements Engineering"
    },
    {
      _id: "1c",
      question: "Wie nennt man ein regelmäßiges Zusammentreffen der Teammitglieder zur gemeinsamen Reflexion der Art und Qualität der Zusammenarbeit?",
      options: [
        "Jour fixe",
        "Postmortem",
        "Retrospektive",
        "Workshop"
      ],
      answer: "Retrospektive",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "2c",
      question: "Was ist keine Kategorie in der Risiko-Wert-Matrix?",
      options: [
        "Als zweites umsetzen",
        "Als erstes umsetzen",
        "Vermeiden",
        "Im nächsten Release umset"
      ],
      answer: "Im nächsten Release umset",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "3c",
      question: "Zu Arbeitspaketen und Teilaufgaben …",
      options: [
        "sollten, um Konflikte zu vermeiden, möglichst keine Ergebnisse und Verantwortlichkeiten festgelegt werden.",
        "können neben der geplanten Dauer der Bearbeitung bei Bedarf auch ein erforderliches Start- oder Enddatum festgelegt werden.",
        "sollten möglichst keine Abhängigkeiten zu anderen Arbeitspakten haben.",
        "sollten so verwendet werden, dass nicht mehr als 10 Teilaufgaben zu einem Arbeitspaket gehören."
      ],
      answer: "können neben der geplanten Dauer der Bearbeitung bei Bedarf auch ein erforderliches Start- oder Enddatum festgelegt werden.",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "4c",
      question: "Meilensteine ...",
      options: [
        "können in einem Meilensteinplan dargestellt werden, der die Feinplanung der Arbeitspakete eines Projektes enthält.",
        "können nicht zur projektübergreifenden Koordination genutzt werden, da sie nur zur Grobplanung eingesetzt werden sollten.",
        "sind für das Projekt besondere Ereignisse, die jeweils durch einen Namen und einen Zeitpunkt beschrieben werden.",
        "dauern in der Regel 1 Personentag."
      ],
      answer: "sind für das Projekt besondere Ereignisse, die jeweils durch einen Namen und einen Zeitpunkt beschrieben werden.",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "5c",
      question: "Ein Backlog ...",
      options: [
        "ist eine geordnete Liste aller Dinge, die im Rahmen eines Vorhabens zu erledigen sind oder benötigt werden.",
        "enthält Elemente, die nicht weiter verfeinert werden sollten.",
        "sollte nur für die Planung von Teilaufgaben und Arbeitspaketen eingesetzt werden.",
        "wird zu Beginn eines Projektes vom Auftraggeber festgelegt und sollte dann nicht mehr verändert werden."
      ],
      answer: "ist eine geordnete Liste aller Dinge, die im Rahmen eines Vorhabens zu erledigen sind oder benötigt werden.",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "6c",
      question: "Mit Hilfe von Burn Down Charts ...",
      options: [
        "sollte nur in kleinen Projekten der Fortschritt gemessen werden.",
        "wird der Projektfortschritt in Form eines Meilensteinplans veranschaulicht.",
        "werden verbrauchte Ressourcen in Beziehung zur Zeit dargestellt.",
        "werden zum Zweck der Kommunikation und Steuerung Kennzahlen des aktuellen Projektzustand einer Ideallinie gegenübergestellt."
      ],
      answer: "ein Service zu jeder Zeit, wenn man ihn benutzen möchte, in Echtzeit zur Verfügung steht.",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "7c",
      question: "Die Kick-Off Veranstaltung ...",
      options: [
        "dient in der Regel nur dem Beschluss der Projektziele und nicht deren Formulierung.",
        "ist in der Regel das erste und einzige gemeinsame Treffen aller wichtigen Stakeholder eines Projektes.",
        "sollte nur für große Projekte durchgeführt werden.",
        "hilft der Projektleitung bei der Analyse der Erwartungshaltung sowie der grundsätzlichen Einstellung der Stakeholder gegenüber dem Projekt."
      ],
      answer: "ist in der Regel das erste und einzige gemeinsame Treffen aller wichtigen Stakeholder eines Projektes.",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "8c",
      question: "Die Retrospektive ...",
      options: [
        "ist eine Veranstaltung die in der Abschlussphase eines Projektes einmal durchgeführt wird.",
        "sollte regelmäßig durchgeführt werden, damit sie die kontinuierliche Verbesserung der Zusammenarbeit im Projektteam unterstützt.",
        "dient der Kommunikation des Projektleiters mit dem Projektteam im Fall einer Krise.",
        "ist nur sinnvoll, wenn das System in Zyklen bzw. Iterationen entwickelt wird."
      ],
      answer: "ist eine Veranstaltung die in der Abschlussphase eines Projektes einmal durchgeführt wird.",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "9c",
      question: "Ein Statusbericht ...",
      options: [
        "erfolgt mit Hilfe des Gantt-Diagramms zusammen mit der Stakeholder-Matrix",
        "erfolgt in Form einer Risikoliste, in der zwar Gegenmaßnahmen, jedoch keine Verantwortlichkeiten dokumentiert werden..",
        "erfolgt ausschließlich in Form des Statusberichts, weil sie so dem Management kommuniziert werden können.",
        "erfolgt mit Hilfe der Risiko-Wert-Matrix, die in IT-Projekten auch die Priorisierung der Anforderungen unterstützt."
      ],
      answer: "erfolgt mit Hilfe der Risiko-Wert-Matrix, die in IT-Projekten auch die Priorisierung der Anforderungen unterstützt.",
      subjectname: "IT Projektmanagement"
    },
    {
      _id: "10c",
      question: "Ein Scrum-Team ...",
      options: [
        "ist zwar verantwortlich für die Umsetzung, jedoch nur die Rolle Product Owner ist verantwortlich für das erstellte Ergebnis.",
        "besteht aus Software-Entwicklern, jedoch nicht Software-Architekten oder Testmanagern.",
        "besteht nur aus den Developern.",
        "ist eine Gruppe von interdisziplinären Fachleuten, die zusammen alle Kompetenzen haben um das Produkt zu erstellen."
      ],
      answer: "ist eine Gruppe von interdisziplinären Fachleuten, die zusammen alle Kompetenzen haben um das Produkt zu erstellen.",
      subjectname: "IT Projektmanagement"
    }
  ];
  
  export default dataQuestions;