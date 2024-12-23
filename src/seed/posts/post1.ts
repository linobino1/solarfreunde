import { Media } from '@/payload-types'
import type { DocGenerator } from '../types'

export const post1: DocGenerator<'posts'> = ({ context: { media } }) => ({
  title: 'Einspeisen ist unsere Leibspeise',
  date: new Date('2024-07-01').toISOString(),
  image: (media.get('img1') as Media).id,
  content: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Die Sonne scheint – und wir haben es genutzt! Der Kanuverein hat einen bedeutenden Schritt in Richtung Nachhaltigkeit und Energiewende gemacht: Auf dem Dach des Vereinsgebäudes wurde eine Solaranlage mit einer Leistung von 30 kWh installiert. Dieser Schritt bringt nicht nur ökologische Vorteile, sondern auch langfristige Einsparungen und eine positive Auswirkung auf das Vereinsbudget. Doch wie kam es zu diesem Projekt und was sind die Schritte bei der Installation einer solchen Anlage? Wir nehmen euch mit auf die Reise.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Warum eine Solaranlage für den Kanuverein?',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h3',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Der Kanuverein ist nicht nur ein Ort des Sports und der Gemeinschaft, sondern auch ein aktiver Teil der Gesellschaft, wenn es um Nachhaltigkeit geht. Als Verein möchten wir mit gutem Beispiel vorangehen und einen Beitrag zum Umweltschutz leisten. Eine Solaranlage bietet zahlreiche Vorteile:',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },

        {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Reduzierung des CO2-Ausstoßes:',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Durch die Nutzung von Solarenergie verringern wir unseren Bedarf an fossilen Brennstoffen und tragen zur Reduktion von Treibhausgasemissionen bei.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 1,
            },

            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Energiekosten senken:',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Eine Solaranlage auf dem Dach des Vereinsgebäudes hilft, langfristig die Energiekosten zu senken. Strom, der selbst erzeugt wird, muss nicht teuer von externen Anbietern gekauft werden.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 2,
            },

            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Unabhängigkeit:',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Mit eigener Solarstromproduktion werden wir weniger abhängig von steigenden Strompreisen und können eine gewisse Unabhängigkeit in der Energieversorgung erreichen.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 3,
            },

            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Vorbildfunktion:',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Als Kanuverein möchten wir ein Zeichen setzen und andere Vereine, Institutionen und Privatpersonen inspirieren, ebenfalls nachhaltige Lösungen zu verfolgen.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 4,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'list',
          version: 1,
          listType: 'bullet',
          start: 1,
          tag: 'ul',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Der Plan: 30 kWh für den Kanuverein',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h3',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Warum 30 kWh? Der Bedarf des Vereins wurde in Zusammenarbeit mit einem erfahrenen Solarteur und unter Berücksichtigung des Stromverbrauchs im Vereinsgebäude ermittelt. Dabei wurde der Verbrauch in den letzten Jahren genau analysiert und der mögliche Ertrag einer Solaranlage auf dem Dach kalkuliert. Das Ziel war es, genügend Strom zu produzieren, um einen großen Teil des eigenen Bedarfs zu decken und den Überschuss, der durch die Solaranlage generiert wird, ins öffentliche Netz einzuspeisen.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Die 30 kWh-Anlage ist so ausgelegt, dass sie sowohl den Betrieb des Vereinsgebäudes unterstützt als auch bei guten Wetterbedingungen eine hohe Energieproduktion erreicht. Im Sommer, wenn der Stromverbrauch durch Veranstaltungen und Aktivitäten etwas sinkt, wird überschüssige Energie ins Stromnetz abgegeben.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Schritte der Installation: Von der Idee zur Realität',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h3',
        },

        {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Planung und Genehmigung',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Der erste Schritt war die detaillierte Planung der Solaranlage. Hierzu gehörte die Auswahl der passenden Technologie, der Berechnung des Energiebedarfs sowie die Struktur der Installation. Der Kanuverein setzte auf hochwertige Solarmodule, die auch unter schwierigeren Wetterbedingungen eine hohe Leistung bieten. In einigen Fällen war auch eine behördliche Genehmigung erforderlich, was wir in enger Zusammenarbeit mit den lokalen Behörden sicherstellten.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 1,
            },

            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Auswahl des Solarteurs',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Um das Projekt professionell umzusetzen, haben wir uns für einen erfahrenen Solarteur entschieden. Dies ist besonders wichtig, da eine fachgerechte Installation der Solaranlage nicht nur für die Sicherheit sorgt, sondern auch die Effizienz der Module optimiert.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 2,
            },

            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Montage der Solarmodule',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Der Installationsprozess begann mit der Anbringung der Solarmodule auf dem Dach. Das Team montierte die Panels in einer Ausrichtung und Neigung, die den maximalen Ertrag an Sonnenenergie gewährleistet. In dieser Phase wurde auch das benötigte Montagesystem installiert, um die Module sicher und stabil zu fixieren.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 3,
            },

            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Verkabelung und Anschluss',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Nach der Montage der Solarmodule wurde die Verkabelung durchgeführt, die den erzeugten Strom zu einem Wechselrichter führt. Der Wechselrichter ist notwendig, um den erzeugten Gleichstrom in Wechselstrom umzuwandeln, der dann für den Verbrauch im Vereinsgebäude verwendet werden kann.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 4,
            },

            {
              children: [
                {
                  detail: 0,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: 'Inbetriebnahme und Überprüfung',
                  type: 'text',
                  version: 1,
                },

                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: ' Nach Abschluss der Installation wurde die Solaranlage gründlich getestet und in Betrieb genommen. Die Leistung der Solarmodule wurde überprüft, um sicherzustellen, dass sie wie geplant funktioniert und den vorgesehenen Stromertrag liefert.',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: 'start',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 5,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'list',
          version: 1,
          listType: 'number',
          start: 1,
          tag: 'ol',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Was bedeutet die Solaranlage für die Zukunft des Vereins?',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h3',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Mit der Installation der 30 kWh Solaranlage beginnt eine neue Ära für den Kanuverein. Wir sind nun in der Lage, einen großen Teil unseres Strombedarfs selbst zu decken, was nicht nur den Geldbeutel schont, sondern auch unsere ökologische Verantwortung unterstreicht. Doch die Vorteile gehen weit über die Energieeinsparungen hinaus. Die Solaranlage wird auch in den kommenden Jahren eine wichtige Rolle in unserer Vereinsarbeit spielen.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Zudem eröffnet diese Installation weitere Möglichkeiten zur Bewusstseinsbildung. Wir planen, das Projekt als Plattform zu nutzen, um unsere Mitglieder und die lokale Gemeinschaft über erneuerbare Energien zu informieren. Workshops und Informationsveranstaltungen könnten in Zukunft Teil unseres Programms werden, um mehr Menschen für die Nutzung von Solarenergie zu begeistern.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Fazit: Ein großer Schritt in eine nachhaltige Zukunft',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h3',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Die Installation der 30 kWh Solaranlage auf dem Dach des Kanuvereins ist ein Meilenstein in unserem Bestreben nach mehr Nachhaltigkeit. Mit dieser Entscheidung setzen wir nicht nur auf kostensparende und umweltfreundliche Energie, sondern auch auf eine langfristige Investition in die Zukunft des Vereins. Wir sind stolz darauf, als Kanuverein eine Vorreiterrolle in Sachen erneuerbare Energien zu übernehmen und hoffen, dass auch andere davon inspiriert werden.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Die Sonne scheint – und wir sind bereit, ihre Energie zu nutzen!',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  },
})
