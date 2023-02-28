import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage() {
    async function handleCheckToken() {
        try {
            const expDate = await usersService.checkToken()
            console.log(expDate)
        } catch {

        }
    }
    return (
        <>
    <h1>OrderHistoryPage</h1>
    <button onClick={handleCheckToken}>Check when my Login Expires</button>
    </>
    )
}