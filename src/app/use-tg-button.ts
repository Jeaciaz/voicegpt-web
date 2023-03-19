import { base } from '$app/paths'

function getWA(): {
	MainButton: any
	themeParams: Record<string, string>
	sendData: (data: string) => void
} {
	return window.Telegram.WebApp
}

export async function setupBtn(onClick: VoidFunction) {
	await import(`${base}/telegram-web-app.js`)
	const { MainButton } = getWA()
	setIsBtnEnabled(false)
	MainButton.setText('Сгенерировать').onClick(onClick).show()
}

export function setIsBtnEnabled(enabled: boolean) {
	const { MainButton, themeParams } = getWA()
	if (enabled) {
		MainButton.enable().setParams({
			color: themeParams.button_color,
		})
	} else {
		MainButton.disable().setParams({
			color: themeParams.hint_color,
		})
	}
}

export function sendData(data: unknown) {
  alert('start sendData')
	const { sendData } = getWA()
	setIsBtnLoading(true)
  alert('about to send data')
  alert(JSON.stringify(data))
	sendData(JSON.stringify(data))
  alert('sent data')
}

export function setIsBtnLoading(loading: boolean) {
	const { MainButton } = getWA()
	if (loading) {
		MainButton.showProgress()
	} else {
		MainButton.hideProgress()
	}
}
